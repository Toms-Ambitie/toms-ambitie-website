import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    label: "PROBLEEM",
    title: "PROBLEEM",
    body: "We voelen het zelf. Frustratie in werk, leven of een bestaand venture.",
  },
  {
    num: "02",
    label: "BOUW",
    title: "INTERNE TOOL",
    body: "Eenvoudigste werkende versie. Eén kernfunctie, geen featurelijst.",
  },
  {
    num: "03",
    label: "TEST",
    title: "TESTEN IN DE PRAKTIJK",
    body: "Wij gebruiken het dagelijks. Werkt het intern niet, dan stopt het hier.",
  },
  {
    num: "04",
    label: "VALIDATIE",
    title: "EERSTE GEBRUIKERS",
    body: "Mensen om ons heen die het probleem herkennen. Geen marketing, geen launch.",
  },
  {
    num: "05",
    label: "BESLISSING",
    title: "VENTURE OF STOPPEN",
    body: "Retentie en betalende klanten? Schalen. Anders: stoppen, leren, volgende.",
  },
];

const aiItems = [
  {
    title: "EERSTE CODEBASES",
    body: "AI genereert de eerste versie van een product. Wij verfijnen, debuggen en bouwen door.",
  },
  {
    title: "MARKTONDERZOEK",
    body: "Concurrentie, prijzen, trends. Uren werk in plaats van dagen.",
  },
  {
    title: "CONTENT & STRUCTUUR",
    body: "Eerste drafts voor teksten, social, e-mailflows. Wij houden de stem.",
  },
  {
    title: "SUPPORT",
    body: "AI handelt eerstelijns vragen af. Wij springen in waar het ertoe doet.",
  },
  {
    title: "VALIDATIE",
    body: "Snel hypotheses testen, gebruikersinterviews samenvatten, signalen filteren.",
  },
  {
    title: "GEDRAGSANALYSE",
    body: "Gebruikersgedrag uitlezen, patronen herkennen, beslissingen onderbouwen.",
  },
];

const HoeWeBouwenPage = () => {
  useEffect(() => {
    applySEO({
      title: "Hoe we bouwen. Toms Ambitie",
      description:
        "Vijf stappen van probleem naar venture. We bouwen vanuit frustratie, gedrag en echte behoeften — niet vanuit brainstorms of trendrapporten.",
      canonical: "https://www.toms-ambitie.nl/hoe-we-bouwen",
    });
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#FBFAF6" }}>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          background: "#FBFAF6",
          paddingTop: 64,
          paddingBottom: 120,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(14,14,12,0.45)",
              marginBottom: 40,
              marginTop: 64,
            }}
          >
            — Methode
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 9vw, 128px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 48,
              maxWidth: 1000,
            }}
          >
            WIJ ZIJN ALTIJD ZELF{" "}
            <span style={{ color: "#C8F000" }}>DE TESTGROEP.</span>
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px 80px",
              maxWidth: 880,
              marginBottom: 64,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "rgba(14,14,12,0.7)",
              }}
            >
              We bouwen vanuit frustratie, gedrag en echte behoeften. Niet
              vanuit brainstorms of trendrapporten.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "rgba(14,14,12,0.7)",
              }}
            >
              Als wij het probleem zelf voelen, bouwen we eerst een interne
              oplossing. Werkt dat? Dan testen we het in de praktijk. Pas daarna
              ontstaat soms een venture.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              "Probleem eerst",
              "Intern getest",
              "AI als versneller",
              "Idee → build in weken",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#0E0E0C",
                  border: "1.5px solid rgba(14,14,12,0.25)",
                  padding: "8px 16px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — HET SYSTEEM */}
      <section style={{ background: "#F4F1E8", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(14,14,12,0.45)",
              marginBottom: 24,
            }}
          >
            01 — Operating system
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "#0E0E0C",
              marginBottom: 24,
            }}
          >
            HET SYSTEEM.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(14,14,12,0.6)",
              maxWidth: 640,
              marginBottom: 80,
            }}
          >
            Vijf stappen. Geen kwartaalplanning, geen pivots na een jaar. Elk
            idee gaat door dezelfde pipeline — en stopt zodra een stap niet werkt.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "#0E0E0C",
              border: "2px solid #0E0E0C",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  background: "#F4F1E8",
                }}
              >
                <div
                  style={{
                    position: "sticky",
                    top: 88,
                    alignSelf: "flex-start",
                    padding: "40px 32px",
                    borderRight: "2px solid rgba(14,14,12,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      lineHeight: 1,
                      color: "rgba(14,14,12,0.07)",
                      marginBottom: 8,
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(14,14,12,0.4)",
                    }}
                  >
                    {step.label}
                  </div>
                </div>

                <div
                  style={{
                    padding: "40px 48px",
                    borderTop: i === 0 ? "4px solid #C8F000" : undefined,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      lineHeight: 1,
                      color: "#0E0E0C",
                      marginBottom: 20,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "rgba(14,14,12,0.65)",
                      maxWidth: 560,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — SNELHEID */}
      <section style={{ background: "#0E0E0C", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(244,241,232,0.4)",
              marginBottom: 24,
            }}
          >
            02 — Snelheid
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "#F4F1E8",
              marginBottom: 24,
            }}
          >
            WAAROM DIT SNELLER WERKT.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(244,241,232,0.6)",
              maxWidth: 640,
              marginBottom: 64,
            }}
          >
            Traditionele bedrijven starten met meetings, plannen, budgetten en
            maanden voorbereiding. Wij starten met een probleem, een prototype en
            echte gebruikers. Daardoor zien we binnen weken wat anderen pas na
            maanden ontdekken. Niet alles werkt. Maar dat hoeft ook niet. Snel
            falen is goedkoper dan langzaam vergaderen.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              background: "rgba(255,255,255,0.08)",
              maxWidth: 800,
            }}
          >
            <div style={{ background: "#111110", padding: "40px 36px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,232,0.35)",
                  marginBottom: 32,
                }}
              >
                Traditioneel
              </p>
              {["01 Plannen", "02 Overleggen", "03 Bouwen", "04 Testen"].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 0",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      color: "rgba(244,241,232,0.3)",
                      textDecoration: "line-through",
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,232,0.25)",
                  marginTop: 24,
                }}
              >
                ~ Maanden
              </p>
            </div>

            <div
              style={{
                background: "#111110",
                padding: "40px 36px",
                borderTop: "4px solid #C8F000",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C8F000",
                  marginBottom: 32,
                }}
              >
                Ons model
              </p>
              {["01 Probleem", "02 Bouwen", "03 Testen", "04 Beslissen"].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: "#C8F000",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      color: "#F4F1E8",
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C8F000",
                  marginTop: 24,
                }}
              >
                ~ Weken
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNE CASE — ILZE */}
      <section style={{ background: "#FBFAF6", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(14,14,12,0.45)",
              marginBottom: 24,
            }}
          >
            — Interne case
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#0E0E0C",
              marginBottom: 64,
              maxWidth: 800,
            }}
          >
            ILZE WILDE EEN PROFORMA LOONSTROOK MAKEN.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
              background: "#0E0E0C",
              border: "2px solid #0E0E0C",
            }}
          >
            <div style={{ background: "#F4F1E8", padding: "40px 36px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(14,14,12,0.4)",
                  marginBottom: 24,
                }}
              >
                Probleem
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "rgba(14,14,12,0.7)",
                }}
              >
                Nergens online kun je een proforma loonstrook berekenen op basis
                van de CAO Kappersbranche. Accountantskosten of urenlange Excel.
              </p>
            </div>

            <div
              style={{
                background: "#0E0E0C",
                padding: "40px 36px",
                borderTop: "4px solid #C8F000",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C8F000",
                  marginBottom: 24,
                }}
              >
                Oplossing
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.08em",
                  color: "#C8F000",
                  marginBottom: 24,
                }}
              >
                loonstrook.calc
              </p>
              {(
                [
                  ["Bruto", "€ 2.412,—", false],
                  ["Loonheffing", "− € 412,—", true],
                  ["Pensioen", "− € 138,—", true],
                  ["Netto", "€ 1.862,—", false],
                ] as [string, string, boolean][]
              ).map(([label, value, muted], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom:
                      i < 3 ? "1px solid rgba(200,240,0,0.15)" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: muted
                        ? "rgba(200,240,0,0.5)"
                        : "rgba(244,241,232,0.8)",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: muted ? "rgba(200,240,0,0.5)" : "#C8F000",
                      fontWeight: i === 3 ? 700 : 400,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ background: "#F4F1E8", padding: "40px 36px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(14,14,12,0.4)",
                  marginBottom: 24,
                }}
              >
                Resultaat
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "rgba(14,14,12,0.7)",
                }}
              >
                Live binnen één week. Onderdeel van Blondes Incognito. Wordt nu
                door externe ondernemers gebruikt.
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(14,14,12,0.6)",
              maxWidth: 640,
              marginTop: 48,
            }}
          >
            Veel van onze ventures beginnen precies zo: een klein intern probleem
            dat uiteindelijk groter blijkt te zijn dan alleen onze eigen situatie.
          </p>
        </div>
      </section>

      {/* 03 — AI VERSNELLER */}
      <section style={{ background: "#F4F1E8", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(14,14,12,0.45)",
              marginBottom: 24,
            }}
          >
            03 — Versnelling
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "#0E0E0C",
              marginBottom: 24,
            }}
          >
            AI MAAKT ONS SNELLER.
            <br />
            <span style={{ color: "rgba(14,14,12,0.25)" }}>NIET SLIMMER.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(14,14,12,0.6)",
              maxWidth: 640,
              marginBottom: 64,
            }}
          >
            We gebruiken AI niet omdat het hip is. We gebruiken het omdat het ons
            in staat stelt in weken te bouwen wat anders maanden kost. Concreet,
            op zes plekken in onze workflow.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              background: "#0E0E0C",
              border: "2px solid #0E0E0C",
              marginBottom: 48,
            }}
          >
            {aiItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#F4F1E8",
                  padding: "36px 32px",
                  borderTop: i === 0 ? "4px solid #C8F000" : undefined,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#0E0E0C",
                    marginBottom: 16,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "rgba(14,14,12,0.6)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderLeft: "4px solid #C8F000",
              paddingLeft: 24,
              maxWidth: 640,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(14,14,12,0.6)",
                marginBottom: 8,
              }}
            >
              AI maakt geen beslissingen. AI vervangt geen sales, geen
              vertrouwen, geen klantrelaties. Dat doen wij.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0E0E0C",
              }}
            >
              Versneller van executie. Geen magische oplossing.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#0E0E0C", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 112px)",
              lineHeight: 0.92,
              color: "#F4F1E8",
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            WE BOUWEN WAT WE{" "}
            <span style={{ color: "#C8F000" }}>ZELF MISSEN.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(244,241,232,0.55)",
              maxWidth: 560,
              marginBottom: 16,
            }}
          >
            Toms Ambitie is een venture club uit Zwolle die bedrijven bouwt
            vanuit echte problemen, slimme systemen en ondernemende frustratie.
          </p>

          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(244,241,232,0.35)",
                marginBottom: 12,
                marginTop: 32,
              }}
            >
              Actieve ventures
            </p>
            {["Post Pilot", "Oak Marketing", "Pactly", "Plug & Power"].map((v) => (
              <div
                key={v}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    background: "#C8F000",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    color: "rgba(244,241,232,0.7)",
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "rgba(244,241,232,0.45)",
              maxWidth: 480,
              marginBottom: 48,
            }}
          >
            Heb jij een markt, een idee of een probleem dat we moeten oplossen?
            We praten liever niet vrijblijvend. Eén bericht, en we weten binnen
            een week of er iets ligt om samen te bouwen.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Link
              to="/meebouwen"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "#C8F000",
                color: "#0E0E0C",
                padding: "0 40px",
                minHeight: 56,
                textDecoration: "none",
              }}
            >
              Meebouwen →
            </Link>
            <a
              href="mailto:tom@tomsambitie.nl"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "2px solid rgba(244,241,232,0.25)",
                color: "rgba(244,241,232,0.7)",
                padding: "0 40px",
                minHeight: 56,
                textDecoration: "none",
              }}
            >
              tom@tomsambitie.nl
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HoeWeBouwenPage;
