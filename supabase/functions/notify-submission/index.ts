import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const ALLOWED_ORIGINS = [
  "https://www.toms-ambitie.nl",
  "https://toms-ambitie.nl",
  "https://toms-ambitie.lovable.app",
];

function buildCorsHeaders(origin: string | null) {
  const isLovablePreview = origin?.endsWith(".lovable.app") ?? false;
  const allowed =
    origin && (ALLOWED_ORIGINS.includes(origin) || isLovablePreview)
      ? origin
      : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Vary": "Origin",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// Simple in-memory rate limiter (best-effort; resets on cold start)
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateBucket = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateBucket.get(ip);
  if (!entry || entry.reset < now) {
    rateBucket.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  interest: z.enum(["investeren", "meebouwen", "idee"]),
  message: z.string().trim().min(1).max(2000),
  linkedin: z.string().trim().max(300).nullable().optional(),
});

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Rate limit by client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ success: false, error: "Too many requests" }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_DIRECT_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_DIRECT_API_KEY is not configured");

    let payload: unknown;
    try {
      payload = await req.json();
    } catch {
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const parsed = submissionSchema.safeParse(payload);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid input" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { name, email, interest, message, linkedin } = parsed.data;

    const interestLabel: Record<string, string> = {
      investeren: "Investeren in Toms Ambitie",
      meebouwen: "Mee bouwen als partner",
      idee: "Een idee aandragen",
    };

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0E0E0C; border-bottom: 3px solid #C8F000; padding-bottom: 8px;">
          Nieuwe inzending via Meebouwen
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Interesse</td><td style="padding: 8px 0;">${escapeHtml(interestLabel[interest])}</td></tr>
          ${linkedin ? `<tr><td style="padding: 8px 0; color: #666;">LinkedIn</td><td style="padding: 8px 0;"><a href="${escapeHtml(linkedin)}">${escapeHtml(linkedin)}</a></td></tr>` : ""}
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5;">
          <p style="margin: 0 0 4px; color: #666; font-size: 12px;">Bericht:</p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    // Sanitize subject (strip CR/LF to prevent header injection oddities)
    const safeName = name.replace(/[\r\n]+/g, " ").slice(0, 80);
    const subjectLine = `Meebouwen: ${safeName} wil ${interestLabel[interest].toLowerCase()}`;

    // 1. Notificatie naar tom@oakmarketing.nl
    const notifyResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Toms Ambitie <noreply@toms-ambitie.nl>",
        to: ["tom@oakmarketing.nl"],
        subject: subjectLine,
        html: htmlContent,
        reply_to: email,
      }),
    });

    if (!notifyResponse.ok) {
      const notifyData = await notifyResponse.json().catch(() => ({}));
      console.error("Resend notify failed", notifyResponse.status, notifyData);
      throw new Error("Email send failed");
    }

    // 2. Bevestigingsmail naar de inzender
    const confirmHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0E0E0C; border-bottom: 3px solid #C8F000; padding-bottom: 8px;">
          Bedankt, ${escapeHtml(name)}.
        </h2>
        <p style="font-size: 15px; color: #333; line-height: 1.6;">
          We hebben je bericht ontvangen. Ik lees alles persoonlijk en reageer zo snel mogelijk.
        </p>
        <p style="font-size: 13px; color: #999; margin-top: 32px;">
          — Tom, Toms Ambitie
        </p>
      </div>
    `;

    const confirmResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Toms Ambitie <noreply@toms-ambitie.nl>",
        to: [email],
        subject: "Bedankt voor je bericht — Toms Ambitie",
        html: confirmHtml,
      }),
    });

    if (!confirmResponse.ok) {
      const confirmData = await confirmResponse.json().catch(() => ({}));
      console.error("Confirmation email failed", confirmResponse.status, confirmData);
      // Don't throw — notification was already sent successfully
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending notification email:", error);
    return new Response(JSON.stringify({ success: false, error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
