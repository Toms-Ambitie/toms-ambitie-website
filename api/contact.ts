import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const interestLabels: Record<string, string> = {
  investeren: "Investeren in de club",
  meebouwen: "Meebouwen",
  idee: "Een idee bespreken",
  samenwerken: "Samenwerken",
  specialist: "Aansluiten als specialist",
  venture: "Instappen bij een venture",
  anders: "Iets anders",
};

const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};
  const rawName = clean(body.name, 120);
  const rawEmail = clean(body.email, 200);
  const rawMessage = clean(body.message, 5000);
  const interest = clean(body.interest, 40);
  let rawLinkedin = clean(body.linkedin, 300);

  if (!rawName || !rawEmail || !interest || !rawMessage) {
    return res.status(400).json({ error: "Vul je naam, e-mail en bericht in" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
    return res.status(400).json({ error: "Dit e-mailadres lijkt niet te kloppen" });
  }
  if (rawLinkedin && !/^https?:\/\//i.test(rawLinkedin)) rawLinkedin = `https://${rawLinkedin}`;

  // everything the visitor typed is escaped before it goes into the HTML mail
  const name = escapeHtml(rawName);
  const email = escapeHtml(rawEmail);
  const message = escapeHtml(rawMessage);
  const linkedin = escapeHtml(rawLinkedin);
  const interestLabel = escapeHtml(interestLabels[interest] ?? interest);

  try {
    await resend.emails.send({
      from: "Toms Ambitie <noreply@toms-ambitie.nl>",
      to: "hallo@toms-ambitie.nl",
      replyTo: rawEmail,
      subject: `Nieuwe aanmelding: ${interestLabels[interest] ?? interest} — ${rawName.replace(/[\r\n]+/g, " ")}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0E0E0C;">
          <div style="background: #0E0E0C; padding: 28px 32px;">
            <span style="font-family: monospace; font-size: 11px; color: #C8F000; letter-spacing: 0.14em; text-transform: uppercase;">
              TOMS AMBITIE — NIEUWE AANMELDING
            </span>
          </div>

          <div style="background: #F4F1E8; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-family: monospace; font-size: 11px; color: rgba(14,14,12,0.45); text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Naam</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-family: monospace; font-size: 11px; color: rgba(14,14,12,0.45); text-transform: uppercase; letter-spacing: 0.1em;">E-mail</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-size: 15px;"><a href="mailto:${email}" style="color: #0E0E0C;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-family: monospace; font-size: 11px; color: rgba(14,14,12,0.45); text-transform: uppercase; letter-spacing: 0.1em;">Interesse</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-size: 15px; font-weight: 600;">${interestLabel}</td>
              </tr>
              ${linkedin ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-family: monospace; font-size: 11px; color: rgba(14,14,12,0.45); text-transform: uppercase; letter-spacing: 0.1em;">LinkedIn</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #C0BDB0; font-size: 15px;"><a href="${linkedin}" style="color: #0E0E0C;">${linkedin}</a></td>
              </tr>` : ""}
              <tr>
                <td style="padding: 14px 0 0; font-family: monospace; font-size: 11px; color: rgba(14,14,12,0.45); text-transform: uppercase; letter-spacing: 0.1em;" colspan="2">Bericht</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 10px 0 0; font-size: 15px; line-height: 1.65; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="background: #C8F000; padding: 16px 32px;">
            <a href="mailto:${email}" style="font-family: monospace; font-size: 11px; color: #0E0E0C; text-decoration: none; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">
              Beantwoord ${name} →
            </a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Versturen mislukt" });
  }
}
