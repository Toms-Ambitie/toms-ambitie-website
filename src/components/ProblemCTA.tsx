import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ProblemCTA = () => {
  return (
    <section style={{ background: "#F4F1E8", padding: "120px 0", borderTop: "1px solid rgba(14,14,12,0.08)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(44px, 6.5vw, 112px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 40,
              maxWidth: 1000,
            }}
          >
            HEB JE EEN PROBLEEM<br />
            DAT EEN BEDRIJF{" "}
            <span style={{ color: "#C8F000" }}>VERDIENT?</span>
          </h2>

          <p
            className="font-sans"
            style={{
              fontSize: 18,
              color: "rgba(14,14,12,0.65)",
              lineHeight: 1.65,
              marginBottom: 48,
              maxWidth: 560,
            }}
          >
            We bouwen niet voor klanten. We bouwen voor onszelf. Maar als jij een probleem hebt dat
            wij herkennen — praten we graag.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/meebouwen"
              className="font-mono font-bold uppercase inline-flex items-center hover:bg-[#DCF55E] transition-colors"
              style={{
                background: "#C8F000",
                color: "#0E0E0C",
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              START EEN GESPREK →
            </Link>
            <Link
              to="/over-ons"
              className="font-mono font-bold uppercase inline-flex items-center transition-colors"
              style={{
                border: "1.5px solid rgba(14,14,12,0.3)",
                background: "transparent",
                color: "#0E0E0C",
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "14px 28px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0E0E0C";
                (e.currentTarget as HTMLAnchorElement).style.background = "#0E0E0C";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F4F1E8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(14,14,12,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0E0E0C";
              }}
            >
              OVER ONS
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
