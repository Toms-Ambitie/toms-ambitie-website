import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "PROBLEEM", desc: "We voelen het zelf. Frustratie in werk, leven of een bestaand venture." },
  { num: "02", title: "INTERNE TOOL", desc: "Eenvoudigste werkende versie. Eén kernfunctie, geen featurelijst." },
  { num: "03", title: "TESTEN IN DE PRAKTIJK", desc: "Wij gebruiken het dagelijks. Werkt het intern niet, dan stopt het hier." },
  { num: "04", title: "EERSTE GEBRUIKERS", desc: "Mensen om ons heen die het probleem herkennen. Geen marketing, geen launch." },
  { num: "05", title: "VENTURE OF STOPPEN", desc: "Retentie en betalende klanten? Schalen. Anders: stoppen, leren, volgende." },
];

export const WerkwijzeTeaser = () => {
  return (
    <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 24 }}
          >
            — Hoe we bouwen
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 32,
              marginBottom: 64,
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(52px, 7vw, 104px)",
                lineHeight: 0.88,
                letterSpacing: "-0.01em",
                color: "#0E0E0C",
              }}
            >
              VAN IDEE<br />
              NAAR VENTURE.
            </h2>
            <Link
              to="/hoe-we-bouwen"
              className="font-mono font-bold uppercase inline-flex items-center hover:bg-ink hover:text-paper transition-colors self-end"
              style={{
                border: "1.5px solid #0E0E0C",
                color: "#0E0E0C",
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "12px 24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Zie het volledige proces →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 2,
              background: "#C0BDB0",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: "#F4F1E8",
                  padding: "32px 28px",
                  borderTop: i === 0 ? "3px solid #C8F000" : "3px solid transparent",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#C8F000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = i === 0 ? "#C8F000" : "transparent";
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 48, color: "rgba(14,14,12,0.1)", lineHeight: 1, marginBottom: 16 }}
                >
                  {step.num}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 11, letterSpacing: "0.12em", color: "#0E0E0C", fontWeight: 700, marginBottom: 12 }}
                >
                  {step.title}
                </div>
                <p
                  className="font-sans"
                  style={{ fontSize: 14, color: "rgba(14,14,12,0.6)", lineHeight: 1.6 }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
