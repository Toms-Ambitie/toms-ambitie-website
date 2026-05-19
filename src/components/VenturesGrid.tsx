import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getVentureStatusMeta, getVentureBySlug } from "@/data/ventures";
import postPilotLogo from "@/assets/venture-logo-post-pilot.webp";
import oakMarketingLogo from "@/assets/venture-logo-oak-marketing.webp";
import pactlyLogo from "@/assets/pactly-beeldmerk.svg";
import plugAndPowerLogo from "@/assets/venture-logo-plug-and-power.webp";
import emmaBoektLogo from "@/assets/emma-boekt-logo.webp";

const ventures = [
  {
    name: "EMMABOEKT",
    slug: "emma-boekt",
    category: "AI · Administratie · Automatisering",
    desc: "Veel ondernemers gebruiken prima boekhoudsoftware. Maar de ervaring kost meer mentale energie dan nodig. EmmaBoekt legt een slimme assistent bovenop bestaande software. Gewoon vertellen wat je wilt regelen.",
    url: "",
    logo: emmaBoektLogo,
  },
  {
    name: "POST PILOT",
    slug: "post-pilot",
    category: "SaaS · Contentautomatisering",
    desc: "De meeste ondernemers weten dat ze zichtbaar moeten zijn. Maar zodra het druk wordt, verdwijnen ze van LinkedIn. Post Pilot maakt zichtbaarheid voorspelbaar met AI die voor je denkt, plant en publiceert.",
    url: "postpilotapp.nl",
    logo: postPilotLogo,
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
    name: "PACTLY",
    slug: "pactly",
    category: "LegalTech · Fintech",
    desc: "Iedereen heeft vaste lasten. Bijna niemand heeft er echt grip op. Pactly bouwt aan de regielaag voor contracten, abonnementen en alles wat maandelijks loopt, zonder ooit iets te regelen zonder akkoord.",
    url: "pactly.nl",
    logo: pactlyLogo,
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

export const VenturesGrid = () => {
  return (
    <section style={{ background: "#FBFAF6", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
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
            HET BESTE MOET<br />NOG KOMEN.
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: 18, color: "rgba(14,14,12,0.6)", marginTop: 20, marginBottom: 56, maxWidth: 560, lineHeight: 1.6 }}
          >
            Vijf ventures die nu draaien. Gebouwd vanuit echte problemen, duidelijke markten en schaalbare modellen.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 2, background: "#C0BDB0" }}>
          {ventures.map((venture) => {
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
                  padding: "40px 36px 36px",
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
                  className="absolute right-6 top-6 w-10 h-10 object-contain opacity-80"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="font-mono uppercase inline-flex items-center gap-2"
                  style={{ fontSize: 10, color: status.color, letterSpacing: "0.14em", marginBottom: 20 }}
                >
                  <span
                    style={{ width: 6, height: 6, background: status.color, display: "inline-block" }}
                    className={status.isLive ? "animate-pulse-live" : ""}
                  />
                  {status.label}
                </div>

                <div
                  className="font-display"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 0.95, color: "#0E0E0C", marginBottom: 8 }}
                >
                  {venture.name}
                </div>

                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(14,14,12,0.45)", marginBottom: 20 }}
                >
                  {venture.category}
                </div>

                <p
                  className="font-sans flex-1"
                  style={{ fontSize: 15, color: "rgba(14,14,12,0.6)", lineHeight: 1.65 }}
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
                      marginTop: 24,
                      paddingTop: 20,
                      borderTop: "1px solid rgba(14,14,12,0.08)",
                    }}
                  >
                    <span style={{ width: 5, height: 5, background: accent, display: "inline-block" }} />
                    {proofTagline}
                  </div>
                )}

                <span
                  className="font-mono uppercase inline-flex items-center min-h-[44px] transition-colors"
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

        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
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