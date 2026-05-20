import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Nieuwsbrief aanmelding",
          email,
          interest: "nieuws",
          message: "Aanmelding voor nieuwsbrief via de homepage.",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
          >
            — Bouwen in het openbaar
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(44px, 6vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "#F4F1E8",
              marginBottom: 24,
            }}
          >
            LEES MEE TERWIJL<br />
            <span style={{ color: "#C8F000" }}>WE BOUWEN.</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              marginBottom: 48,
              maxWidth: 520,
            }}
          >
            Geen marketing. Wel eerlijke updates over wat we bouwen, wat werkt en wat
            niet. Maximaal één keer per maand.
          </p>

          {status === "success" ? (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#111110",
                border: "1px solid rgba(200,240,0,0.3)",
                padding: "16px 24px",
              }}
            >
              <span style={{ width: 8, height: 8, background: "#C8F000", display: "inline-block" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.14em", color: "#C8F000" }}
              >
                Aanmelding ontvangen — tot snel
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: 2, flexWrap: "wrap", maxWidth: 560 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                required
                className="font-mono"
                style={{
                  flex: "1 1 240px",
                  background: "#111110",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F4F1E8",
                  fontSize: 13,
                  padding: "14px 18px",
                  outline: "none",
                  letterSpacing: "0.04em",
                  minWidth: 0,
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(200,240,0,0.5)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-mono font-bold uppercase transition-colors hover:bg-[#DCF55E]"
                style={{
                  background: "#C8F000",
                  color: "#0E0E0C",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  padding: "14px 24px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {status === "loading" ? "..." : "AANMELDEN →"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p
              className="font-mono"
              style={{ fontSize: 11, color: "#FF4A00", marginTop: 12, letterSpacing: "0.08em" }}
            >
              Er ging iets mis. Probeer het opnieuw of stuur een mail naar hallo@toms-ambitie.nl
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
