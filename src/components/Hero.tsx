import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      style={{ background: "#F4F1E8", paddingTop: 64 }}
      aria-label="Hero"
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "96px 32px 104px",
        }}
      >
        <p
          className="font-mono uppercase"
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "rgba(14,14,12,0.4)",
            marginBottom: 40,
          }}
        >
          — Venture Club · Zwolle
        </p>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(72px, 10vw, 160px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "#0E0E0C",
            marginBottom: 40,
            maxWidth: 1100,
          }}
        >
          WE BOUWEN{" "}
          <span style={{ color: "#C8F000" }}>WAT</span>
          <br />
          WE ZELF MISSEN.
        </h1>

        <p
          className="font-sans"
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: "rgba(14,14,12,0.65)",
            marginBottom: 48,
            maxWidth: 600,
          }}
        >
          Een venture club die problemen omzet in bedrijven. Eigen platformen,
          gebouwd vanuit echte eigen ervaring — met AI als versneller.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            to="/ventures"
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
            ONZE VENTURES →
          </Link>
          <Link
            to="/werkwijze"
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
            HOE WE BOUWEN
          </Link>
        </div>
      </div>
    </section>
  );
};
