import { Link } from "react-router-dom";

const LogoLight = () => (
  <svg width="36" height="26" viewBox="0 0 126 92" aria-hidden="true" fill="none">
    <rect x="2" y="10" width="54" height="10" fill="#F4F1E8" />
    <rect x="23" y="10" width="12" height="54" fill="#F4F1E8" />
    <path d="M72 65 L96 10 L120 65" fill="none" stroke="#F4F1E8" strokeWidth="10" strokeLinejoin="round" />
    <line x1="79" y1="46" x2="113" y2="46" stroke="#F4F1E8" strokeWidth="8" />
    <rect x="2" y="78" width="120" height="6" fill="#C8F000" />
  </svg>
);

const ventures = [
  { name: "EmmaBoekt", url: "emmaboekt.nl", accent: "#1BBFA0", href: "/ventures/emma-boekt" },
  { name: "Post Pilot", url: "postpilotapp.nl", accent: "#00DC93", href: "/ventures/post-pilot" },
  { name: "Pactly", url: "pactly.nl", accent: "#CC007E", href: "/ventures/pactly" },
  { name: "OAK Marketing", url: "oakmarketing.nl", accent: "#1B3A8A", href: "/ventures/oak-marketing" },
  { name: "Plug and Power", url: "plugandpower.nl", accent: "#FFAA00", href: "/ventures/plug-and-power" },
];

const navLinks = [
  { to: "/ventures", label: "Ventures" },
  { to: "/hoe-we-bouwen", label: "Hoe we bouwen" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/nieuws", label: "Nieuws" },
  { to: "/meebouwen", label: "Meebouwen" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/voorwaarden", label: "Algemene voorwaarden" },
];

export const Footer = () => {
  return (
    <>
      {/* Volt bar */}
      <div style={{ height: 4, background: "#C8F000" }} />

      <footer style={{ background: "#0E0E0C" }}>
        {/* Venture row */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 2,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {ventures.map((v) => (
              <Link
                key={v.name}
                to={v.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "20px 0",
                  textDecoration: "none",
                  transition: "opacity 0.15s ease",
                  opacity: 0.7,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
              >
                <div style={{ width: 6, height: 6, background: v.accent, flexShrink: 0 }} />
                <div>
                  <div className="font-mono uppercase" style={{ fontSize: 11, color: "#F4F1E8", letterSpacing: "0.1em" }}>
                    {v.name}
                  </div>
                  <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", marginTop: 2 }}>
                    {v.url}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "56px 32px 48px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
          }}
          className="grid-cols-1 md:!grid"
        >
          {/* Logo + motto */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <LogoLight />
              <span className="font-display" style={{ fontSize: 18, color: "#F4F1E8", letterSpacing: "0.04em" }}>
                TOMS AMBITIE
              </span>
            </div>
            <p className="font-sans" style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 260 }}>
              Venture Club — Zwolle, Nederland
            </p>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", marginTop: 20, fontStyle: "italic" }}>
              Als je het kunt bedenken,<br />kun je het ook doen.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
              Navigatie
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-mono uppercase transition-colors"
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textDecoration: "none", display: "block", padding: "5px 0" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#C8F000"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
              Ventures
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              {ventures.map((v) => (
                <li key={v.name}>
                  <Link
                    to={v.href}
                    className="font-mono uppercase transition-colors"
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textDecoration: "none", display: "block", padding: "5px 0" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = v.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
              Contact
            </div>
            <a
              href="mailto:tom@tomsambitie.nl"
              className="font-sans"
              style={{ fontSize: 14, color: "#F4F1E8", textDecoration: "none", display: "block", marginBottom: 8 }}
            >
              tom@tomsambitie.nl
            </a>
            <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
              toms-ambitie.nl
            </span>
            <div style={{ marginTop: 24 }}>
              <Link
                to="/meebouwen"
                className="font-mono font-bold uppercase inline-flex items-center hover:bg-[#DCF55E] transition-colors"
                style={{
                  background: "#C8F000",
                  color: "#0E0E0C",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  padding: "10px 18px",
                  textDecoration: "none",
                }}
              >
                Start gesprek →
              </Link>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "16px 32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 24,
            }}
          >
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono uppercase"
                style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
            <span
              className="font-mono"
              style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", marginLeft: "auto" }}
            >
              © {new Date().getFullYear()} Toms Ambitie
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
