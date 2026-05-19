import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Manifesto } from "@/components/Manifesto";
import { applySEO } from "@/lib/seo";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2008",
    label: "Het begin",
    title: "NOTABILIS.",
    detail:
      "Drie jonge ondernemers, één missie: een serieus communicatiebureau bouwen vanuit de regio.",
  },
  {
    year: "2012",
    label: "Positionering",
    title: "AARDBEI COMMUNICATIE.",
    detail:
      "Notabilis groeit door en wordt Aardbei. Focus verschuift naar conceptontwikkeling en campagnes.",
  },
  {
    year: "2015",
    label: "Exit & reset",
    title: "VERKOOP. NIEUWE FASE.",
    detail:
      "Aardbei wordt verkocht. Daarna ontstaat FreshGuys als tussenfase voor freelance projecten en nieuwe ideeën.",
  },
  {
    year: "2017",
    label: "Bouwclub",
    title: "TOMS AMBITIE.",
    detail:
      "Van bureau-denken naar venture-denken. Meer bouwen. Meer testen. Meer eigen producten en platformen.",
  },
  {
    year: "Nu",
    label: "Venture club",
    title: "OPERATING SYSTEM.",
    detail:
      "Actieve ventures in AI, SaaS, energie en automatisering. Altijd gebouwd vanuit echte problemen en gedrag.",
    pulse: true,
  },
];

const disciplines = [
  "Strategy",
  "AI",
  "Neuromarketing",
  "Development",
  "Positioning",
  "Content",
  "Data",
  "Operations",
  "Growth",
  "Ventures",
];

const OverOnsPage = () => {
  useEffect(() => {
    applySEO({
      title: "Over ons. Toms Ambitie",
      description:
        "De oorsprong van Toms Ambitie. Een venture club uit Zwolle die bedrijven bouwt vanuit gedrag, frustratie en ondernemende nieuwsgierigheid.",
      canonical: "https://www.toms-ambitie.nl/over-ons",
    });
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#FBFAF6" }}>
      <Navbar />

      {/* HERO — Tom-eerst, conform live site */}
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
            — De oorsprong
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 10vw, 140px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 24,
            }}
          >
            TOM MULDER.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(14,14,12,0.45)",
            }}
          >
            Venture builder · Strategisch denker · Zwolle · Sinds 2008
          </p>
        </div>
      </section>

      {/* 01 — ACHTERGROND */}
      <section style={{ background: "#F4F1E8", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
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
                01 — Achtergrond
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: 0.95,
                  color: "#0E0E0C",
                }}
              >
                BEDENKEN IS MIJN SPORT.
              </h2>
            </div>

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
              <p>
                Sinds 2008 bouw ik bedrijven, concepten, campagnes en ventures.
                Soms succesvol, soms pijnlijk leerzaam — maar altijd vanuit
                dezelfde drijfveer: begrijpen waarom mensen doen wat ze doen en
                daar iets op bouwen dat echt gebruikt wordt.
              </p>
              <p>
                Wat begon bij Notabilis en later Aardbei Communicatie groeide
                uiteindelijk uit tot Toms Ambitie: een venture club waarin
                ideeën sneller gebouwd, getest en gevalideerd worden.
              </p>
              <p>
                Ik ben gefascineerd door gedrag. Waarom sommige ideeën tractie
                krijgen en andere verdwijnen. Waarom sommige bedrijven groeien
                terwijl andere blijven hangen in plannen.
              </p>
              <p>
                Vanuit die fascinatie verdiepte ik me jarenlang in
                neuromarketing, gedragspsychologie en beïnvloeding.
              </p>
              <p style={{ color: "#0E0E0C", fontWeight: 500 }}>
                Maar uiteindelijk geloof ik vooral in bouwen. Niet eindeloos
                brainstormen. Niet maanden vergaderen. Ideeën worden pas
                interessant zodra iemand ze gebruikt.
              </p>

              <a
                href="https://www.linkedin.com/in/tommulder85"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 16,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#0E0E0C",
                  textDecoration: "none",
                  borderBottom: "2px solid #C8F000",
                  paddingBottom: 4,
                  width: "fit-content",
                }}
              >
                Verbind op LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — DE CLUB */}
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
            02 — De club
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.95,
                color: "#0E0E0C",
              }}
            >
              DE CLUB.
            </h2>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "rgba(14,14,12,0.7)",
                  marginBottom: 48,
                }}
              >
                <p>
                  Toms Ambitie is geen traditioneel bureau. Geen vaste
                  agency-structuur met lagen, accountmanagers en standaard
                  trajecten.
                </p>
                <p>
                  Wel een vaste kern van builders, marketeers, developers,
                  designers, operators en specialisten die per venture
                  samenkomen. Soms tijdelijk. Soms jarenlang.
                </p>
                <p style={{ color: "#0E0E0C", fontWeight: 500 }}>
                  Altijd met hetzelfde doel: sneller bouwen dan traditionele
                  bedrijven kunnen bewegen.
                </p>
                <p>
                  We geloven meer in testen, bouwen, gedrag, validatie en
                  momentum dan in eindeloze plannen en PowerPoints.
                </p>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(14,14,12,0.4)",
                  marginBottom: 16,
                }}
              >
                — Disciplines in de club
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: "2px solid #0E0E0C",
                  gap: 1,
                  background: "#0E0E0C",
                }}
              >
                {disciplines.map((d) => (
                  <div
                    key={d}
                    style={{
                      background: "#FBFAF6",
                      padding: "14px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
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
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#0E0E0C",
                      }}
                    >
                      {d}
                    </span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(14,14,12,0.35)",
                  marginTop: 12,
                }}
              >
                — Per venture samengesteld. Nooit opgelegd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <Manifesto
        theme="light"
        kicker="— Lijfspreuk"
        statement="WAT NIET KAN IS NOG NOOIT GEBEURD."
        highlightIndex={5}
        attribution="Een uitgangspunt, geen poster."
      />

      {/* 03 — TIJDLIJN */}
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
            03 — Het pad
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
            VAN BUREAU
            <br />
            NAAR BOUWMACHINE.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(14,14,12,0.6)",
              maxWidth: 560,
              marginBottom: 64,
            }}
          >
            Geen CV. Wel de fases waarin Toms Ambitie ontstond, vorm kreeg en
            bleef veranderen.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 2,
              background: "#0E0E0C",
              border: "2px solid #0E0E0C",
            }}
          >
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  background: i === timeline.length - 1 ? "#0E0E0C" : "#FBFAF6",
                  padding: "32px 28px",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  borderTop:
                    i === timeline.length - 1 ? "4px solid #C8F000" : undefined,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color:
                        i === timeline.length - 1
                          ? "#C8F000"
                          : "rgba(14,14,12,0.4)",
                    }}
                  >
                    {t.year}
                  </span>
                  {t.pulse && (
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        background: "#C8F000",
                        display: "inline-block",
                      }}
                      aria-hidden
                    />
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color:
                      i === timeline.length - 1
                        ? "rgba(244,241,232,0.4)"
                        : "rgba(14,14,12,0.4)",
                    marginBottom: 16,
                  }}
                >
                  {t.label}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.375rem",
                    lineHeight: 1.1,
                    color:
                      i === timeline.length - 1 ? "#F4F1E8" : "#0E0E0C",
                    marginBottom: 12,
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color:
                      i === timeline.length - 1
                        ? "rgba(244,241,232,0.65)"
                        : "rgba(14,14,12,0.6)",
                    marginTop: "auto",
                    paddingTop: 8,
                  }}
                >
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO 2 */}
      <Manifesto
        theme="dark"
        kicker="— Observatie"
        statement="IDEEËN ZIJN PAS HET BEGIN."
        highlightIndex={4}
        attribution="Een idee zonder uitvoering is een fantasie met een logo."
      />

      {/* CLOSING CTA */}
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
              marginBottom: 40,
            }}
          >
            — Bouw mee
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 112px)",
              lineHeight: 0.92,
              color: "#0E0E0C",
              marginBottom: 24,
            }}
          >
            WE BOUWEN WAT WE{" "}
            <span style={{ background: "#C8F000", padding: "0 8px" }}>
              ZELF MISSEN.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "rgba(14,14,12,0.6)",
              maxWidth: 560,
              marginBottom: 48,
            }}
          >
            Van interne tools tot schaalbare ventures. Gebouwd vanuit frustratie,
            gedrag en ondernemende nieuwsgierigheid.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Link
              to="/ventures"
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
              Bekijk ventures →
            </Link>
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
                border: "2px solid #0E0E0C",
                color: "#0E0E0C",
                padding: "0 40px",
                minHeight: 56,
                textDecoration: "none",
              }}
            >
              Bouw mee →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OverOnsPage;
