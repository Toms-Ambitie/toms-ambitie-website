import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";
import { ventureDetails } from "@/data/ventures";

const ventures = [
  {
    slug: "pactly",
    category: "Consumer Fintech · Huishoudplatform",
    problemLabel: "HET PROBLEEM",
    problem:
      "Veel huishoudens hebben geen idee waar geld weglekt aan contracten en abonnementen.",
    description:
      "Pactly brengt vaste lasten samen in één slim overzicht. Een schaalbaar consumentenplatform in een markt waar miljarden onnodig blijven liggen.",
    whyNow:
      "Acht miljoen huishoudens in Nederland. Geen partij die hier echt grip op geeft. Pactly bouwt de regielaag die er nog niet is.",
    url: "pactly.nl",
    accent: "#CC007E",
    dark: "#1A0010",
    status: "IN ONTWIKKELING",
  },
  {
    slug: "post-pilot",
    category: "SaaS · AI · Contentautomatisering",
    problemLabel: "HET PROBLEEM",
    problem:
      "LinkedIn groeit harder dan ooit, maar de meeste ondernemers posten veel te weinig.",
    description:
      "Post Pilot automatiseert zichtbaarheid met AI. Een SaaS-model met een markt die elke dag groter wordt en een probleem dat ondernemers structureel niet oplossen.",
    whyNow:
      "AI-content en LinkedIn vormen samen de grootste B2B-groeikans van dit moment. Eerste klanten draaien, terugkerende omzet groeit, schaalbaar SaaS-model.",
    url: "postpilotapp.nl",
    accent: "#00DC93",
    dark: "#0A1820",
    status: "LIVE",
  },
  {
    slug: "plug-and-power",
    category: "Energie · E-commerce · Hardware",
    problemLabel: "HET PROBLEEM",
    problem:
      "De energiemarkt verandert snel, maar consumenten krijgen vooral installateurs en verkooppraatjes.",
    description:
      "Plug and Power maakt plug-and-play energie-oplossingen toegankelijk zonder technisch gedoe. Een moderne challenger in een markt die hard openbreekt.",
    whyNow:
      "Thuisbatterijen, stekkerstroom en mobiele power groeien explosief. Plug-and-play wint het van complexe installaties.",
    url: "plugandpower.nl",
    accent: "#FFAA00",
    dark: "#1A1408",
    status: "IN ONTWIKKELING",
  },
  {
    slug: "oak-marketing",
    category: "Marketing · Strategie · AI",
    problemLabel: "DE BEHOEFTE",
    problem:
      "Veel bedrijven doen iets met marketing, maar missen richting, structuur en data.",
    description:
      "OAK Marketing is de operator-laag van het ecosysteem: tijdelijk binnen bij bedrijven om marketingteams, AI en groeistrategie naar een hoger niveau te brengen.",
    whyNow:
      "AI verandert marketing van binnenuit. Oak helpt teams die de overstap nog moeten maken — met directe omzetimpact.",
    url: "oakmarketing.nl",
    accent: "#1B3A8A",
    dark: "#0A1228",
    status: "LIVE",
    tag: "Operator",
  },
];

const alumni = [
  {
    name: "AARDBEI COMMUNICATIE",
    type: "Alumni",
    period: "2008 — 2015 · Nijverdal",
    description:
      "Aardbei Communicatie begon in 2008 onder de naam Notabilis — Opmerkelijke Communicatie. Wat startte vanuit drie jonge ondernemers aan de keukentafel groeide uit tot een communicatiebureau gespecialiseerd in conceptontwikkeling en campagnes.",
    detail:
      "Vanuit Nijverdal werkten we voor merken als Wolters Kluwer, Van Keulen Interieurbouw, Kartplaza en Auto Aaltink. In 2012 werd Notabilis gerebrand naar Aardbei Communicatie en groeiden we door naar een team van 10 mensen.",
    leftBehind: "Concepten bouwen, ondernemerschap en dingen creëren waar mensen energie van krijgen.",
    lesson: "Ondernemen draait niet alleen om groei. Ook om weten wanneer het tijd is voor een nieuw hoofdstuk.",
  },
  {
    name: "DESIGNERSHIRTS",
    type: "Venture",
    period: "2010 — 2015 · Notabilis × REF Drukkerij",
    description:
      "DesignerShirts begon als samenwerking tussen Notabilis en REF Drukkerij. Het idee was simpel: laat mensen zelf bepalen welk kledingstuk, welke kleur en welke opdruk ze willen.",
    detail:
      "Wat begon als webshop voor funny shirts groeide uit tot een digitaal testlab waarin we alles testten op het gebied van e-commerce, UX, online marketing en conversie.",
    leftBehind: "Door zelf te bouwen leer je sneller dan welk advies dan ook.",
    lesson:
      "De beste manier om online te leren, is door zelf iets te bouwen en het publiek erop los te laten.",
  },
  {
    name: "PARTYBLENDER",
    type: "Venture → Exit",
    period: "2013 — 2015 · Twente / Hellendoorn",
    description:
      "PartyBlender ontstond vanuit een simpele observatie: uitgaanspubliek werd steeds minder trouw aan vaste locaties en koos steeds vaker last minute waar ze heen gingen.",
    detail:
      "We bouwden een platformconcept waarbij je zelf de ingrediënten van jouw ideale avond koos. Wat begon als community groeide uit tot eigen events, waaronder Tinderlove Festival in 2014.",
    leftBehind:
      "Sterke concepten ontstaan vaak vanuit veranderend gedrag dat anderen nog niet zien.",
    lesson:
      "Sterke concepten ontstaan vaak vanuit veranderend gedrag dat anderen nog niet zien.",
  },
  {
    name: "LED-IBC",
    type: "Alumni",
    period: "2016 — 2023 · Nijverdal / Zwolle / Antwerpen",
    description:
      "LED-IBC ontstond vanuit een praktisch probleem: er was simpelweg geen schaalbare oplossing voor het verlichten en afzetten van grote evenemententerreinen.",
    detail:
      "Wat begon met experimenteren in een achtertuin in Nijverdal groeide uit tot de grootste verhuurder van verlichte IBC's in de Benelux. In 2023 verkocht aan Woodpeckers in Antwerpen.",
    leftBehind:
      "Bouw een beter product, snap het proces van je klant en groei alleen wanneer de cashflow dat toelaat.",
    lesson:
      "Slimme logistiek en nuchter ondernemerschap zijn vaak sterker dan grootse plannen.",
  },
  {
    name: "ENTRANZ",
    type: "Venture",
    period: "2018 — 2022 · Twente / Zwolle",
    description:
      "Entranz werd gebouwd als uitdager van traditionele ticketproviders. Niet alleen gericht op ticketverkoop, maar vooral op data, marketing en inzichten voor organisatoren.",
    detail:
      "De ambitie was groot, de eerste tractie veelbelovend — maar de lancering viel vlak voor COVID, waardoor de evenementenbranche volledig stilviel.",
    leftBehind:
      "Data, targeting en community ownership zijn waardevoller dan een kassasysteem.",
    lesson:
      "Soms klopt het idee, het team én de markt — maar niet de timing.",
  },
];

const VenturesPage = () => {
  const anchorRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    applySEO({
      title: "Ventures. Toms Ambitie",
      description:
        "Waar we nu aan bouwen. Vier actieve ventures in SaaS, fintech, energie en marketing. Gebouwd vanuit echte problemen, schaalbare markten en ondernemende frustratie.",
      canonical: "https://www.toms-ambitie.nl/ventures",
    });
  }, []);

  const scrollTo = (slug: string) => {
    anchorRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#FBFAF6" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#FBFAF6", paddingTop: 64, paddingBottom: 80 }}>
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
            — Actieve ventures
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 9vw, 128px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 48,
            }}
          >
            WAAR WE NU AAN{" "}
            <span style={{ color: "#C8F000" }}>BOUWEN.</span>
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px 80px",
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
              Geen losse ideeën. Maar bedrijven gebouwd vanuit echte problemen,
              duidelijke markten en schaalbare modellen.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "rgba(14,14,12,0.7)",
              }}
            >
              Sommige ventures groeien uit tot zelfstandige bedrijven. Andere
              verdwijnen weer. Dat is geen risico van het model. Dat is precies
              het model.
            </p>
          </div>

          {/* Anchor nav */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              background: "#0E0E0C",
              border: "2px solid #0E0E0C",
              width: "fit-content",
            }}
          >
            {ventures.map((v) => {
              const data = ventureDetails.find((d) => d.slug === v.slug);
              return (
                <button
                  key={v.slug}
                  onClick={() => scrollTo(v.slug)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: "#FBFAF6",
                    color: "#0E0E0C",
                    border: "none",
                    cursor: "pointer",
                    padding: "14px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      background: v.accent,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {data?.name ?? v.slug}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VENTURE SECTIONS */}
      {ventures.map((v, i) => {
        const data = ventureDetails.find((d) => d.slug === v.slug);
        const isEven = i % 2 === 0;

        return (
          <section
            key={v.slug}
            id={v.slug}
            ref={(el) => { anchorRefs.current[v.slug] = el; }}
            style={{
              background: isEven ? "#F4F1E8" : "#FBFAF6",
              paddingTop: 120,
              paddingBottom: 120,
              scrollMarginTop: 80,
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
              {/* Venture header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 24,
                  marginBottom: 64,
                  paddingBottom: 40,
                  borderBottom: "1px solid rgba(14,14,12,0.1)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        background: v.accent,
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(14,14,12,0.45)",
                      }}
                    >
                      {v.status}
                    </span>
                    {v.tag && (
                      <>
                        <span style={{ color: "rgba(14,14,12,0.25)" }}>·</span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: v.accent,
                          }}
                        >
                          {v.tag}
                        </span>
                      </>
                    )}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(40px, 6vw, 80px)",
                      lineHeight: 0.95,
                      color: "#0E0E0C",
                      marginBottom: 8,
                    }}
                  >
                    {data?.name ?? v.slug.toUpperCase()}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(14,14,12,0.4)",
                    }}
                  >
                    {v.category}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    to={`/ventures/${v.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: v.accent,
                      color: v.dark === "#0A1228" || v.dark === "#0A1820" || v.dark === "#1A0010" || v.dark === "#1A1408" ? "#FFFFFF" : "#0E0E0C",
                      padding: "12px 24px",
                      textDecoration: "none",
                      minHeight: 44,
                    }}
                  >
                    Meer over {data?.name} →
                  </Link>
                </div>
              </div>

              {/* Two-column: problem/description + momentum card */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                  alignItems: "start",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(14,14,12,0.4)",
                      marginBottom: 16,
                    }}
                  >
                    {v.problemLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      lineHeight: 1.1,
                      color: "#0E0E0C",
                      marginBottom: 24,
                      borderLeft: `4px solid ${v.accent}`,
                      paddingLeft: 20,
                    }}
                  >
                    "{v.problem}"
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "rgba(14,14,12,0.7)",
                      marginBottom: 32,
                    }}
                  >
                    {v.description}
                  </p>
                  <Link
                    to={`/ventures/${v.slug}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#0E0E0C",
                      textDecoration: "none",
                      borderBottom: `2px solid ${v.accent}`,
                      paddingBottom: 4,
                    }}
                  >
                    Bekijk venture →
                  </Link>
                </div>

                {/* Momentum card */}
                <div
                  style={{
                    background: v.dark,
                    padding: "48px 40px",
                    borderTop: `4px solid ${v.accent}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: v.accent,
                      marginBottom: 24,
                    }}
                  >
                    Waarom nu
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                      lineHeight: 1.15,
                      color: "#F4F1E8",
                      marginBottom: 32,
                    }}
                  >
                    "{v.whyNow}"
                  </p>
                  {v.url && (
                    <a
                      href={`https://www.${v.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: v.accent,
                        textDecoration: "none",
                        opacity: 0.7,
                      }}
                    >
                      ↗ {v.url}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* TRACK RECORD */}
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
            — Track record
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "#F4F1E8",
              marginBottom: 64,
            }}
          >
            WAT ER AL VOOR{" "}
            <span style={{ color: "#C8F000" }}>KWam.</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(255,255,255,0.08)",
            }}
          >
            {alumni.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "#111110",
                  padding: "48px 48px",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: 64,
                  alignItems: "start",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(244,241,232,0.35)",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    {a.type}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      lineHeight: 1.05,
                      color: "#F4F1E8",
                      marginBottom: 12,
                    }}
                  >
                    {a.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(244,241,232,0.35)",
                    }}
                  >
                    {a.period}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "rgba(244,241,232,0.65)",
                      marginBottom: 16,
                    }}
                  >
                    {a.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "rgba(244,241,232,0.45)",
                      marginBottom: 24,
                    }}
                  >
                    {a.detail}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontStyle: "italic",
                      color: "#C8F000",
                      borderLeft: "3px solid #C8F000",
                      paddingLeft: 16,
                    }}
                  >
                    "{a.lesson}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIE */}
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
            — Richting
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "#0E0E0C",
              marginBottom: 48,
            }}
          >
            WAAR DIT NAARTOE GAAT.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "rgba(14,14,12,0.7)",
              }}
            >
              <p>Toms Ambitie bouwt geen losse projecten.</p>
              <p>
                We bouwen een portfolio van bedrijven die ontstaan uit echte
                problemen, schaalbare markten en ondernemende frustratie.
              </p>
              <p>
                Sommige ventures verdwijnen weer. Andere groeien uit tot
                zelfstandige bedrijven.
              </p>
              <p style={{ color: "#0E0E0C", fontWeight: 500 }}>
                Dat is precies het systeem.
              </p>
              <p>
                Het doel is niet om zoveel mogelijk ideeën te starten. Het doel
                is om een omgeving te bouwen waarin sterke ideeën sneller
                werkelijkheid worden.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                  background: "#0E0E0C",
                  color: "#C8F000",
                  padding: "0 40px",
                  minHeight: 56,
                  textDecoration: "none",
                }}
              >
                Bouw mee →
              </Link>
              <Link
                to="/hoe-we-bouwen"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  border: "2px solid #0E0E0C",
                  color: "#0E0E0C",
                  padding: "0 40px",
                  minHeight: 56,
                  textDecoration: "none",
                }}
              >
                Hoe we bouwen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VenturesPage;
