import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getVentureStatusMeta, getVentureBySlug } from "@/data/ventures";
import postPilotLogo from "@/assets/venture-logo-post-pilot.webp";
import oakMarketingLogo from "@/assets/venture-logo-oak-marketing.webp";
import pactlyLogo from "@/assets/pactly-beeldmerk.svg";
import plugAndPowerLogo from "@/assets/venture-logo-plug-and-power.webp";

// Featured venture shown large at the top of the homepage grid
const featuredVenture = {
  name: "POST PILOT",
  slug: "post-pilot",
  category: "SaaS · Contentautomatisering",
  desc: "De meeste ondernemers weten dat ze zichtbaar moeten zijn. Maar zodra het druk wordt, verdwijnen ze van LinkedIn. Post Pilot maakt zichtbaarheid voorspelbaar met AI die voor je denkt, plant en publiceert.",
  url: "postpilotapp.nl",
  logo: postPilotLogo,
};

// Secondary ventures shown in 3-column row below the featured card
const secondaryVentures = [
  {
    name: "PACTLY",
    slug: "pactly",
    category: "LegalTech · Fintech",
    desc: "Iedereen heeft vaste lasten. Bijna niemand heeft er echt grip op. Pactly bouwt aan de regielaag voor contracten, abonnementen en alles wat maandelijks loopt, zonder ooit iets te regelen zonder akkoord.",
    url: "pactly.nl",
    logo: pactlyLogo,
  },
  {
    name: "OAK MARKETING",
    slug: "oak-marketing",
    category: "Marketing · Strategie · AI",
    desc: "Veel bedrijven doen 'iets' met marketing, maar missen richting, ritme en resultaat. OAK Marketing stapt tijdelijk in als operator, bewust selectief, bewust kortdurend, met directe slagkracht.",
    url: "oakmarketing.nl",
    logo: oakMarketingLogo,
  },
  {
    name: "PLUG AND POWER",
    slug: "plug-and-power",
    category: "Energie · E-commerce",
    desc: "Iedereen wil onafhankelijker worden van energie. Maar niemand zit te wachten op technisch gedoe en verkooppraatjes. Plug and Power maakt plug-and-play energie toegankelijk, zonder installateur.",
    url: "plugandpower.nl",
    logo: plugAndPowerLogo,
  },
];

// All ventures (used for count + alumni ticker)
const ventures = [featuredVenture, ...secondaryVentures];

const alumniItems = "ALUMNI & EXPERIMENTEN. LED-IBC · AARDBEI COMMUNICATIE · ZOUTGROOTHANDEL · TOILETBORSTEL HUREN · DESIGNERSHIRTS · PARTYBLENDER · ENTRANZ · EN MEER → ";

const AlumniTicker = () => (
  <div
    style={{
      background: "#E8E5DA",
      borderTop: "1px solid #C0BDB0",
      borderBottom: "1px solid #C0BDB0",
      padding: "8px 0",
      overflow: "hidden",
      whiteSpace: "nowrap" as const,
    }}
  >
    <div className="inline-block animate-ticker font-mono uppercase typo-label typo-caption" style={{ letterSpacing: "0.14em" }}>
      {alumniItems}
      {alumniItems}
    </div>
  </div>
);

const dutchNumbers: Record<number, string> = {
  1: "ÉÉN", 2: "TWEE", 3: "DRIE", 4: "VIER", 5: "VIJF",
  6: "ZES", 7: "ZEVEN", 8: "ACHT", 9: "NEGEN", 10: "TIEN",
};

export const VenturesGrid = () => {
  // 1 featured + secondaryVentures = total displayed on homepage
  const count = 1 + secondaryVentures.length;
  const dutchCount = dutchNumbers[count] ?? String(count);

  return (
    <section style={{ background: "#FBFAF6", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div className="flex items-baseline gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 font-mono uppercase"
              style={{ fontSize: 11, color: "#0E0E0C", letterSpacing: "0.16em" }}
            >
              <span style={{ width: 6, height: 6, background: "#C8F000", display: "inline-block" }} className="animate-pulse-live" />
              Live · in aanbouw
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(52px, 7vw, 104px)", lineHeight: 0.88, letterSpacing: "-0.01em", color: "#0E0E0C" }}
          >
            {dutchCount} EIGEN BEDRIJVEN.<br />
            <span style={{ color: "rgba(14,14,12,0.35)" }}>ALLEMAAL VANUIT ECHTE<br />FRUSTRATIE ONTSTAAN.</span>
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: 18, color: "rgba(14,14,12,0.6)", marginTop: 20, marginBottom: 56, maxWidth: 560, lineHeight: 1.6 }}
          >
            Gebouwd vanuit echte problemen, duidelijke markten en schaalbare modellen.
          </p>
        </ScrollReveal>

        {/* Featured venture — full width */}
        {(() => {
          const v = featuredVenture;
          const status = getVentureStatusMeta(v.slug);
          const detail = getVentureBySlug(v.slug);
          const accent = detail?.identity.accent ?? "#00DC93";
          const proofTagline = detail?.identity.proofTagline;
          return (
            <Link
              to={`/ventures/${v.slug}`}
              className="flex flex-col relative group no-underline ventures-featured"
              style={{
                background: "#0E0E0C",
                padding: "56px 48px 48px",
                textDecoration: "none",
                borderTop: `4px solid ${accent}`,
                transition: "background 0.15s ease",
                marginBottom: 2,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1A1A18"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0E0E0C"; }}
            >
              <img
                src={v.logo}
                alt={`${v.name} logo`}
                style={{ position: "absolute", right: 48, top: 48, width: 48, height: 48, objectFit: "contain", opacity: 0.9 }}
                loading="lazy"
                decoding="async"
              />

              <div
                className="font-mono uppercase inline-flex items-center gap-2"
                style={{ fontSize: 10, color: accent, letterSpacing: "0.14em", marginBottom: 24 }}
              >
                <span
                  style={{ width: 6, height: 6, background: status.color, display: "inline-block" }}
                  className={status.isLive ? "animate-pulse-live" : ""}
                />
                {status.label}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end" }} className="ventures-featured-inner">
                <div>
                  <div
                    className="font-display"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 0.9, color: "#F4F1E8", marginBottom: 12 }}
                  >
                    {v.name}
                  </div>
                  <div
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}
                  >
                    {v.category}
                  </div>
                  <p
                    className="font-sans"
                    style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 480 }}
                  >
                    {v.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Simulated product UI */}
                  <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <div style={{ width: 24, height: 24, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 9, fontWeight: "bold" }}>in</span>
                      </div>
                      <div>
                        <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.7)" }}>LinkedIn post · Gepland</div>
                        <div className="font-mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>Morgen 08:00</div>
                      </div>
                      <div style={{ marginLeft: "auto", width: 6, height: 6, background: accent }} />
                    </div>
                    <div style={{ height: 5, background: "rgba(255,255,255,0.15)", marginBottom: 5, width: "88%" }} />
                    <div style={{ height: 5, background: "rgba(255,255,255,0.1)", marginBottom: 5, width: "72%" }} />
                    <div style={{ height: 5, background: "rgba(255,255,255,0.07)", width: "58%" }} />
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "12px", opacity: 0.65 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 20, height: 20, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 8, fontWeight: "bold" }}>in</span>
                      </div>
                      <div className="font-mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>Overmorgen 09:30</div>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.08)", marginBottom: 4, width: "75%" }} />
                    <div style={{ height: 4, background: "rgba(255,255,255,0.05)", width: "55%" }} />
                  </div>
                </div>
              </div>

              {proofTagline && (
                <div
                  className="font-mono uppercase inline-flex items-center gap-2"
                  style={{
                    fontSize: 10,
                    color: accent,
                    letterSpacing: "0.12em",
                    marginTop: 32,
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ width: 5, height: 5, background: accent, display: "inline-block" }} />
                  {proofTagline}
                </div>
              )}

              <span
                className="font-mono uppercase inline-flex items-center"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: 16,
                }}
              >
                Lees meer →
              </span>
            </Link>
          );
        })()}

        {/* Secondary ventures — 3-column row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2, background: "#C0BDB0" }}>
          {secondaryVentures.map((venture) => {
            const status = getVentureStatusMeta(venture.slug);
            const detail = getVentureBySlug(venture.slug);
            const accent = detail?.identity.accent ?? "#C8F000";
            const proofTagline = detail?.identity.proofTagline;

            return (
              <Link
                to={`/ventures/${venture.slug}`}
                key={venture.name}
                className="flex flex-col relative group no-underline"
                style={{
                  background: "#FBFAF6",
                  padding: "36px 32px 32px",
                  textDecoration: "none",
                  borderTop: `4px solid ${accent}`,
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FBFAF6"; }}
              >
                <img
                  src={venture.logo}
                  alt={`${venture.name} logo`}
                  style={{ position: "absolute", right: 20, top: 20, width: 36, height: 36, objectFit: "contain", opacity: 0.8 }}
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="font-mono uppercase inline-flex items-center gap-2"
                  style={{ fontSize: 10, color: status.color, letterSpacing: "0.14em", marginBottom: 16 }}
                >
                  <span
                    style={{ width: 6, height: 6, background: status.color, display: "inline-block" }}
                    className={status.isLive ? "animate-pulse-live" : ""}
                  />
                  {status.label}
                </div>

                <div
                  className="font-display"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 0.95, color: "#0E0E0C", marginBottom: 8 }}
                >
                  {venture.name}
                </div>

                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(14,14,12,0.45)", marginBottom: 16 }}
                >
                  {venture.category}
                </div>

                <p
                  className="font-sans flex-1"
                  style={{ fontSize: 14, color: "rgba(14,14,12,0.6)", lineHeight: 1.65 }}
                >
                  {venture.desc}
                </p>

                {proofTagline && (
                  <div
                    className="font-mono uppercase inline-flex items-center gap-2"
                    style={{
                      fontSize: 10,
                      color: accent,
                      letterSpacing: "0.12em",
                      marginTop: 20,
                      paddingTop: 16,
                      borderTop: "1px solid rgba(14,14,12,0.08)",
                    }}
                  >
                    <span style={{ width: 5, height: 5, background: accent, display: "inline-block" }} />
                    {proofTagline}
                  </div>
                )}

                <span
                  className="font-mono uppercase inline-flex items-center"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "rgba(14,14,12,0.4)",
                    marginTop: 12,
                  }}
                >
                  Lees meer →
                </span>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 48, display: "flex", justifyContent: "flex-start" }}>
          <Link
            to="/ventures"
            className="font-mono font-bold uppercase inline-flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
            style={{
              border: "1.5px solid #0E0E0C",
              color: "#0E0E0C",
              fontSize: 11,
              letterSpacing: "0.12em",
              padding: "14px 32px",
              textDecoration: "none",
            }}
          >
            Bekijk alle actieve ventures →
          </Link>
        </div>

        <div style={{ marginTop: 80 }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(14,14,12,0.35)", marginBottom: 12 }}
          >
            — Eerder gebouwd · alumni &amp; experimenten
          </p>
          <AlumniTicker />
        </div>
      </div>
    </section>
  );
};