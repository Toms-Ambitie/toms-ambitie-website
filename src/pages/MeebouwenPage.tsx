import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { gtmEvent } from "@/lib/gtm";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ─── Helpers ───────────────────────────────────────────────────────── */

const inputStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(14,14,12,0.15)",
  color: "#0E0E0C",
  padding: "14px 16px",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 15,
  width: "100%",
  borderRadius: 0,
  outline: "none",
  minHeight: 48,
};

const interestOptions = [
  { value: "saas", label: "SaaS" },
  { value: "ventures", label: "Ventures" },
  { value: "oak-marketing", label: "OAK Mkt." },
  { value: "pactly", label: "Pactly" },
  { value: "plug-and-power", label: "Plug and Power" },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

const MeebouwenPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    applySEO({
      title: "Bouw mee. Toms Ambitie",
      description:
        "Heb je een idee, een probleem dat een bedrijf verdient, of wil je gewoon eens sparren? Reactie meestal binnen 24 uur.",
      canonical: "https://www.toms-ambitie.nl/meebouwen",
    });
  }, []);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F4F1E8" }}>
      <Navbar />

      {/* ── HERO — light ─────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", paddingTop: 64 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 32px 64px" }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 32 }}
          >
            — In contact
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(96px, 14vw, 220px)",
              lineHeight: 0.85,
              color: "#0E0E0C",
              marginBottom: 32,
            }}
          >
            BOUW MEE.
          </h1>
          <p
            className="font-sans"
            style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.65)", maxWidth: 560 }}
          >
            Heb je een idee, een probleem dat een bedrijf verdient, of wil je
            gewoon eens sparren? Reactie meestal binnen 24 uur.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ──────────────────────────────── */}
      <section style={{ background: "#FBFAF6", padding: "64px 0 120px" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="meebouwen-form-grid"
        >
          {/* Left: form */}
          <div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                const form = e.currentTarget;
                const data = new FormData(form);
                const formValues = {
                  name: `${(data.get("voornaam") as string).trim()} ${(data.get("achternaam") as string).trim()}`.trim(),
                  email: (data.get("email") as string).trim(),
                  interest: interests.join(", ") || (data.get("interest") as string) || "",
                  message: (data.get("message") as string).trim(),
                  bedrijf: (data.get("bedrijf") as string)?.trim() || null,
                };
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formValues),
                  });
                  if (!res.ok) throw new Error("Versturen mislukt");
                  gtmEvent("form_submit", {
                    form_name: "meebouwen",
                    form_interest: formValues.interest,
                  });
                  navigate("/bedankt");
                } catch {
                  toast({
                    title: "Er ging iets mis",
                    description: "Probeer het opnieuw of mail naar tom@tomsambitie.nl",
                    variant: "destructive",
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {/* Naam / Achternaam */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div>
                  <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 6 }}>
                    Voornaam
                  </label>
                  <input
                    type="text"
                    name="voornaam"
                    placeholder="Jan of An"
                    required
                    maxLength={60}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 6 }}>
                    Achternaam
                  </label>
                  <input
                    type="text"
                    name="achternaam"
                    placeholder="Jansen"
                    required
                    maxLength={60}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 6 }}>
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="naam@bedrijf.nl"
                  required
                  maxLength={255}
                  style={inputStyle}
                />
              </div>

              {/* Bedrijf */}
              <div>
                <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 6 }}>
                  Bedrijf
                </label>
                <input
                  type="text"
                  name="bedrijf"
                  placeholder="Optioneel"
                  maxLength={100}
                  style={inputStyle}
                />
              </div>

              {/* Interest checkboxes */}
              <div>
                <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 10 }}>
                  Interesse
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {interestOptions.map((opt) => {
                    const active = interests.includes(opt.value);
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => toggleInterest(opt.value)}
                        className="font-mono uppercase"
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          padding: "8px 14px",
                          background: active ? "#0E0E0C" : "transparent",
                          color: active ? "#C8F000" : "#0E0E0C",
                          border: `1.5px solid ${active ? "#0E0E0C" : "rgba(14,14,12,0.2)"}`,
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.5)", display: "block", marginBottom: 6 }}>
                  Bericht
                </label>
                <textarea
                  name="message"
                  placeholder="Vertel kort waar het over gaat."
                  required
                  maxLength={2000}
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="font-mono font-bold uppercase inline-flex items-center justify-center hover:bg-[#DCF55E] transition-colors"
                style={{
                  background: "#C8F000",
                  color: "#0E0E0C",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  padding: "16px 32px",
                  border: "none",
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  marginTop: 8,
                  alignSelf: "flex-start",
                }}
              >
                {submitting ? "Versturen..." : "VERSTUUR BERICHT →"}
              </button>
            </form>
          </div>

          {/* Right: contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Contact card */}
            <div
              style={{
                border: "1px solid rgba(14,14,12,0.1)",
                padding: "32px",
                background: "#FBFAF6",
              }}
            >
              <div
                className="font-mono uppercase"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 24 }}
              >
                IN DIRECT CONTACT
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.4)", marginBottom: 4 }}>
                    E-MAIL
                  </div>
                  <a
                    href="mailto:tom@tomsambitie.nl"
                    className="font-sans"
                    style={{ fontSize: 16, color: "#0E0E0C", textDecoration: "none" }}
                  >
                    tom@tomsambitie.nl
                  </a>
                </div>

                <div>
                  <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.4)", marginBottom: 4 }}>
                    NAAM
                  </div>
                  <div className="font-sans" style={{ fontSize: 16, color: "#0E0E0C" }}>
                    Tom Mulder
                  </div>
                </div>

                <div>
                  <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,12,0.4)", marginBottom: 4 }}>
                    LOCATIE
                  </div>
                  <div className="font-sans" style={{ fontSize: 16, color: "#0E0E0C" }}>
                    Zwolle, Nederland
                  </div>
                </div>
              </div>
            </div>

            {/* Dark filter/info card */}
            <div
              style={{
                background: "#0E0E0C",
                padding: "32px",
              }}
            >
              <div
                className="font-mono uppercase"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}
              >
                NIET VOOR
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Standaard opdrachten of bureauwerk",
                  "Freelance kortetermijnopdrachten",
                  "Pitchen zonder echte frustratie",
                  "Als je alleen geld zoekt, geen probleem",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      paddingBottom: 10,
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <span style={{ width: 4, height: 4, background: "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0, marginTop: 6 }} />
                    <span className="font-sans" style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono uppercase" style={{ fontSize: 9, color: "#C8F000", letterSpacing: "0.14em" }}>
                  OAK Marketing
                </span>
                <p className="font-sans" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 6, lineHeight: 1.5 }}>
                  Voor strategische marketing die er al staat, maar nu écht gas moet geven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 7vw, 120px)",
                lineHeight: 0.88,
                color: "#F4F1E8",
                textAlign: "center",
              }}
            >
              "ALS JE HET KUNT BEDENKEN,<br />
              <span style={{ color: "#C8F000" }}>KUN JE HET OOK DOEN."</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="meebouwen-newsletter-grid"
        >
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}
            >
              — Werknotities
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.9, color: "#F4F1E8", marginBottom: 16 }}
            >
              LEES MEE TERWIJL<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>WE BOUWEN.</span>
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 400 }}
            >
              Maandelijkse notities over ventures en alles ertussen. Geen spam. Geen newsletter.
            </p>
          </div>

          <div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* ── VENTURE STRIP ────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2 }}>
            {[
              { name: "Post Pilot", slug: "post-pilot", accent: "#00DC93", url: "postpilotapp.nl" },
              { name: "Pactly", slug: "pactly", accent: "#CC007E", url: "pactly.nl" },
              { name: "OAK Marketing", slug: "oak-marketing", accent: "#1B3A8A", url: "oakmarketing.nl" },
              { name: "Plug and Power", slug: "plug-and-power", accent: "#FFAA00", url: "plugandpower.nl" },
            ].map((v) => (
              <Link
                key={v.slug}
                to={`/ventures/${v.slug}`}
                style={{ display: "block", textDecoration: "none", padding: "24px 0" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ width: 6, height: 6, background: v.accent, display: "inline-block" }} />
                  <span className="font-mono uppercase" style={{ fontSize: 11, color: "#F4F1E8", letterSpacing: "0.1em" }}>
                    {v.name}
                  </span>
                </div>
                <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", paddingLeft: 14 }}>
                  {v.url}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

/* ─── Newsletter sub-form ───────────────────────────────────────────── */

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Nieuwsbrief", email, interest: "nieuws", message: "Nieuwsbrief aanmelding" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="font-sans" style={{ fontSize: 16, color: "#C8F000" }}>
        Goed! Je leest mee.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 2 }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="naam@bedrijf.nl"
        required
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#F4F1E8",
          padding: "14px 16px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15,
          borderRadius: 0,
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-mono font-bold uppercase hover:bg-[#DCF55E] transition-colors"
        style={{
          background: "#C8F000",
          color: "#0E0E0C",
          fontSize: 11,
          letterSpacing: "0.12em",
          padding: "14px 20px",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {status === "sending" ? "..." : "INSCHRIJVEN →"}
      </button>
    </form>
  );
};

export default MeebouwenPage;
