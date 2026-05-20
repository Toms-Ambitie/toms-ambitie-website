import { Link } from "react-router-dom";

const PostPilotCard = () => (
  <div
    style={{
      background: "#0E0E0C",
      padding: "36px 32px 32px",
      height: "100%",
      minHeight: 340,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Top: venture label + status */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, background: "#00DC93", display: "inline-block" }} />
        <span className="font-mono uppercase" style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em" }}>
          Live · In aanbouw
        </span>
      </div>
      <Link
        to="/ventures/post-pilot"
        className="font-mono uppercase"
        style={{ fontSize: 10, color: "#C8F000", letterSpacing: "0.12em", textDecoration: "none" }}
      >
        Bekijk →
      </Link>
    </div>

    {/* Product UI mockup */}
    <div style={{ flex: 1, marginBottom: 28 }}>
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "16px", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>in</span>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Tom Mulder</div>
            <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>Gepland · morgen 08:00</div>
          </div>
          <div style={{ marginLeft: "auto", width: 8, height: 8, background: "#C8F000", borderRadius: "50%" }} />
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.12)", marginBottom: 6, width: "85%" }} />
        <div style={{ height: 6, background: "rgba(255,255,255,0.08)", marginBottom: 6, width: "70%" }} />
        <div style={{ height: 6, background: "rgba(255,255,255,0.06)", width: "55%" }} />
      </div>
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "12px", opacity: 0.6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 24, height: 24, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 9, fontWeight: "bold" }}>in</span>
          </div>
          <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>Gepland · overmorgen 09:30</div>
        </div>
        <div style={{ height: 5, background: "rgba(255,255,255,0.08)", marginBottom: 5, width: "78%" }} />
        <div style={{ height: 5, background: "rgba(255,255,255,0.05)", width: "60%" }} />
      </div>
    </div>

    {/* Bottom: venture name */}
    <div>
      <div className="font-display" style={{ fontSize: 36, lineHeight: 0.9, color: "#F4F1E8", marginBottom: 4 }}>
        POST PILOT
      </div>
      <div className="font-mono uppercase" style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em" }}>
        SaaS · Contentautomatisering
      </div>
    </div>

    {/* Accent line */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#00DC93" }} />
  </div>
);

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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
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
              fontSize: "clamp(56px, 7vw, 120px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 40,
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
              maxWidth: 520,
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

        {/* Right column — Post Pilot product card */}
        <PostPilotCard />
      </div>
    </section>
  );
};
