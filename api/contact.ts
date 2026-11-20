import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { MAIL_BEVESTIGING, MAIL_MELDING, render } from "./_mailTemplates.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const SITE = "https://www.toms-ambitie.nl";
const FROM = "Toms Ambitie <noreply@toms-ambitie.nl>";
const INBOX = "hallo@toms-ambitie.nl";

/** Topic labels as the visitor saw them on /meebouwen (older keys kept for old links). */
const TOPICS: Record<string, string> = {
  idee: "Idee aanleveren",
  meebouwen: "Bouw mee",
  investeren: "Investeren",
  specialist: "Specialist",
  anders: "Iets anders",
  samenwerken: "Samenwerken",
  venture: "Instappen bij een venture",
};

const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Resend returns errors instead of throwing them; make a failed send a real failure. */
async function send(mail: Parameters<typeof resend.emails.send>[0]) {
  const { error } = await resend.emails.send(mail);
  if (error) throw new Error(`${error.name}: ${error.message}`);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};

  // hidden field that people never see: if it is filled in, a bot sent this
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  const interest = clean(body.interest, 40);
  let linkedin = clean(body.linkedin, 300);

  if (!name || !email || !interest || !message) {
    return res.status(400).json({ error: "Vul je naam, e-mail en bericht in" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Dit e-mailadres lijkt niet te kloppen" });
  }
  if (linkedin && !/^https?:\/\//i.test(linkedin)) linkedin = `https://${linkedin}`;

  const topic = TOPICS[interest] ?? interest;

  // everything the visitor typed is escaped before it goes into the HTML mails
  const values: Record<string, string> = {
    naam: escapeHtml(name),
    email: escapeHtml(email),
    linkedin: escapeHtml(linkedin),
    onderwerp: escapeHtml(topic),
    bericht: escapeHtml(message).replace(/\r?\n/g, "<br>"),
    LOGO_URL: `${SITE}/mail/logo-negatief.png`,
    TOM_URL: `${SITE}/mail/tom-portret.png`,
  };
  const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

  try {
    await send({
      from: FROM,
      to: INBOX,
      replyTo: email,
      subject: `Nieuw bericht van ${oneLine(name)} · ${topic}`,
      html: render(MAIL_MELDING, values),
    });
  } catch (err) {
    console.error("Resend error (melding):", err);
    return res.status(500).json({ error: "Versturen mislukt" });
  }

  // The visitor's copy is a courtesy: if it fails, the message itself did arrive.
  try {
    await send({
      from: FROM,
      to: email,
      replyTo: INBOX,
      subject: "Je bericht is binnen",
      html: render(MAIL_BEVESTIGING, values),
    });
  } catch (err) {
    console.error("Resend error (bevestiging):", err);
  }

  return res.status(200).json({ ok: true });
}
