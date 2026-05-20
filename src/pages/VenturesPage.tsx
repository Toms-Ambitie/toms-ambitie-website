import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { applySEO } from "@/lib/seo";
import { getVentureStatusMeta } from "@/data/ventures";

/* ─── Data ─────────────────────────────────────────────────────────── */

const ventures = [
  {
    slug: "post-pilot",
    name: "POST PILOT",
    category: "SaaS · AI · Contentautomatisering",
    url: "postpilotapp.nl",
    accent: "#00DC93",
    dark: "#0A1820",
    description:
      "De meeste ondernemers weten dat ze zichtbaar moeten zijn. Maar zodra het druk wordt, verdwijnen ze van LinkedIn. Post Pilot maakt zichtbaarheid voorspelbaar met AI die voor je denkt, plant en publiceert.",
    stats: [
      { value: "125+", label: "Gebruikers" },
      { value: "13+", label: "Branches" },
      { value: "NL/EN", label: "Talen" },
    ],
  },
  {
    slug: "pactly",
    name: "PACTLY",
    category: "LegalTech · Consumer Fintech",
    url: "pactly.nl",
    accent: "#CC007E",
    dark: "#1A0010",
    description:
      "Iedereen heeft vaste lasten. Bijna niemand heeft er echt grip op. Pactly bouwt aan de regielaag voor contracten, abonnementen en alles wat maandelijks loopt, zonder ooit iets te regelen zonder akkoord.",
    stats: [
      { value: "8M+", label: "Huishoudens NL" },
      { value: "B2C", label: "Model" },
      { value: "NL", label: "Markt" },
    ],
  },
  {
    slug: "oak-marketing",
    name: "OAK MARKETING",
    category: "Marketing · Strategie · AI",
    url: "oakmarketing.nl",
    accent: "#1B3A8A",
    dark: "#0A1228",
    description:
      "Veel bedrijven doen 'iets' met marketing, maar missen richting, ritme en resultaat. OAK Marketing stapt tijdelijk in als operator, bewust selectief, bewust kortdurend, met directe slagkracht.",
    stats: [
      { value: "B2B", label: "Model" },
      { value: "SLIM", label: "Aanpak" },
      { value: "NL", label: "Markt" },
    ],
  },
  {
    slug: "plug-and-power",
    name: "PLUG AND POWER",
    category: "Energie · E-commerce · Hardware",
    url: "plugandpower.nl",
    accent: "#FFAA00",
    dark: "#1A1408",
    description:
      "Iedereen wil onafhankelijker worden van energie. Maar niemand zit te wachten op technisch gedoe en verkooppraatjes. Plug and Power maakt plug-and-play energie toegankelijk, zonder installateur.",
    stats: [
      { value: "B2C", label: "Model" },
      { value: "E2C", label: "Aanpak" },
      { value: "NL", label: "Markt" },
    ],
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

const VenturesPage = () => {
  const anchorRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    applySEO({
      title: "Ventures. Toms Ambitie",
      description:
        "Vier eigen platformen in SaaS, fintech, energie en marketing. Gebouwd vanuit echte problemen, schaalbare markten en ondernemende frustratie.",
      canonical: "https://www.toms-ambitie.nl/ventures",
    });
  }, []);

  const scrollTo = (slug: string) => {
    anchorRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0E0E0C" }}>
      <Navbar />

      {/* ── HERO — dark ──────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", paddingTop: 64 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 32px 64px" }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 40 }}
          >
            — Eigen ventures
          </p>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(72px, 10vw, 160px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#F4F1E8",
              marginBottom: 40,
            }}
          >
            VIER EIGEN<br />
            PLATFORMEN.
          </h1>

          <p
            className="font-sans"
            style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 560, marginBottom: 56 }}
          >
            Geen losse ideeën. Bedrijven gebouwd vanuit echte problemen,
            duidelijke markten en schaalbare modellen.
          </p>

          {/* Anchor nav */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {ventures.map((v) => (
              <button
                key={v.slug}
                onClick={() => scrollTo(v.slug)}
                className="font-mono uppercase"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; }}
              >
                <span style={{ width: 6, height: 6, background: v.accent, display: "inline-block", flexShrink: 0 }} />
                {v.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURE SECTIONS ─────────────────────────────────── */}
      {ventures.map((v) => {
        const status = getVentureStatusMeta(v.slug);

        return (
          <ScrollReveal key={v.slug}>
            <section
              id={v.slug}
              ref={(el) => { anchorRefs.current[v.slug] = el; }}
              style={{
                background: v.dark,
                borderTop: `4px solid ${v.accent}`,
                scrollMarginTop: 80,
              }}
            >
              <div
                style={{
                  maxWidth: 1440,
                  margin: "0 auto",
                  padding: "72px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                  alignItems: "start",
                }}
                className="venture-row-grid"
              >
                {/* Left: info */}
                <div>
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

                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(40px, 6vw, 88px)",
                      lineHeight: 0.9,
                      color: "#F4F1E8",
                      marginBottom: 8,
                    }}
                  >
                    {v.name}
                  </h2>

                  <div
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginBottom: 28 }}
                  >
                    {v.category}
                  </div>

                  <p
                    className="font-sans"
                    style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 36, maxWidth: 520 }}
                  >
                    {v.description}
                  </p>

                  {/* Stats row */}
                  <div
                    style={{
                      display: "flex",
                      gap: 2,
                      marginBottom: 36,
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {v.stats.map((s) => (
                      <div
                        key={s.label}
                        style={{ padding: "16px 20px", flex: 1 }}
                      >
                        <div className="font-display" style={{ fontSize: 28, color: v.accent, lineHeight: 1 }}>
                          {s.value}
                        </div>
                        <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link
                      to={`/ventures/${v.slug}`}
                      className="font-mono font-bold uppercase inline-flex items-center transition-colors"
                      style={{
                        background: v.accent,
                        color: "#0E0E0C",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        padding: "12px 24px",
                        textDecoration: "none",
                      }}
                    >
                      Meer over {v.name} →
                    </Link>
                    {v.url && (
                      <a
                        href={`https://www.${v.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono uppercase inline-flex items-center"
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          color: "rgba(255,255,255,0.35)",
                          textDecoration: "none",
                          padding: "12px 0",
                        }}
                      >
                        ↗ {v.url}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: product card / visual */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "32px",
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(80px, 12vw, 160px)",
                      lineHeight: 0.85,
                      color: "rgba(255,255,255,0.04)",
                      textAlign: "center",
                      userSelect: "none",
                    }}
                  >
                    {v.name.split(" ").map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, textAlign: "center" }}>
                    <div style={{ width: 40, height: 3, background: v.accent, margin: "0 auto 12px" }} />
                    <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.25)" }}>
                      {v.url || "In aanbouw"}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        );
      })}

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "#0E0E0C",
                marginBottom: 8,
              }}
            >
              ELK VENTURE IS EEN EIGEN MERK.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "rgba(14,14,12,0.25)",
                marginBottom: 56,
              }}
            >
              TOMS AMBITIE IS DE MOTOR.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.6)", maxWidth: 600 }}
            >
              Elk bedrijf heeft zijn eigen identiteit, markt en aanpak. Maar achter elk van hen
              zit hetzelfde systeem: probleem eerst, bouwen met AI, stoppen als het niet werkt.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "#F4F1E8",
                marginBottom: 48,
                maxWidth: 900,
              }}
            >
              DE VOLGENDE VENTURE KAN VANAF JOUW PROBLEEM{" "}
              <span style={{ color: "#C8F000" }}>BEGINNEN.</span>
            </h2>
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
                to="/werkwijze"
                className="font-mono font-bold uppercase inline-flex items-center transition-colors"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "#F4F1E8",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  padding: "14px 28px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F4F1E8";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#F4F1E8";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0E0E0C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F4F1E8";
                }}
              >
                HOE WE BOUWEN
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VenturesPage;
