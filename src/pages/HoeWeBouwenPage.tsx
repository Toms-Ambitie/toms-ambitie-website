import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { applySEO } from "@/lib/seo";

/* ─── Data ─────────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "PROBLEEM IDENTIFICEREN",
    body: "Elk venture start met een frustratie van binnenuit. Niet een trendje, niet een pitchdeck, niet een LinkedIn-poll. Een echt probleem dat we zelf tegenkomen in werk, leven of een bestaand venture.",
    dark: false,
  },
  {
    num: "02",
    title: "VALIDEREN MET AI",
    body: "Voordat we ook maar één regel code schrijven, toetsen we het probleem met mensen direct om ons heen. Is het herkenbaar? Is het frequent? Is het pijnlijk genoeg om iets voor te willen betalen? AI helpt ons sneller patronen te herkennen.",
    dark: true,
  },
  {
    num: "03",
    title: "WERKENDE DEMO BOUWEN",
    body: "De eenvoudigste werkende versie. Eén kernfunctie, geen featurelijst, geen landing page vol beloftes. Zo snel mogelijk iets wat daadwerkelijk werkt, zodat we iets echts kunnen testen.",
    dark: false,
  },
  {
    num: "04",
    title: "BUSINESS CASE MAKEN",
    body: "Eén zin. Niet een missie, niet een visie, niet een businessplan. Eén heldere zin: voor wie, welk probleem, waarom nu. Als we die zin niet kunnen schrijven, bouwen we niet.",
    dark: true,
  },
  {
    num: "05",
    title: "TESTEN & VERFIJNEN",
    body: "Wij zijn altijd zelf de testgroep. Als we het niet dagelijks gebruiken, bouwen we niet verder. Interne adoptie is het eerste bewijs. Geen intern gebruik, geen extern product.",
    dark: false,
  },
  {
    num: "06",
    title: "EERSTE PLATFORM BOUWEN",
    body: "Mensen direct om ons heen die het probleem herkennen. Geen betaalde marketing, geen productlaunch, geen persbericht. Echte adoptie begint altijd met één iemand die het zelf wil gebruiken.",
    dark: true,
  },
  {
    num: "07",
    title: "LANCEREN",
    body: "Retentie. Betalende klanten. Echte traction. Zijn die er? Dan schalen we. Zijn die er niet? Dan stoppen we. We schrijven op wat we geleerd hebben en starten met het volgende probleem. Geen uitzonderingen.",
    dark: false,
  },
];

const principles = [
  {
    title: "PROBLEM-FIRST",
    body: "We beginnen nooit met een businessplan. We beginnen met iets wat we zelf missen.",
  },
  {
    title: "AI ALS VERSNELLER",
    body: "We gebruiken AI omdat het ons sneller maakt. Niet als marketingterm. Niet als excuus voor slechte beslissingen.",
  },
  {
    title: "ALTIJD ONDERBOUWD",
    body: "Geen aannames. Geen buikgevoel. Iedere stap wordt onderbouwd met data, gedrag of bewijs.",
  },
  {
    title: "EERLIJK OVER RESULTATEN",
    body: "Stoppen is ook een beslissing. Snel stoppen is goedkoper dan langzaam falen.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

const HoeWeBouwenPage = () => {
  useEffect(() => {
    applySEO({
      title: "Werkwijze. Toms Ambitie",
      description:
        "Van probleem naar platform in 7 stappen en maximaal 6 weken. Hoe Toms Ambitie ventures bouwt vanuit echte frustratie, met AI als versneller.",
      canonical: "https://www.toms-ambitie.nl/werkwijze",
    });
  }, []);

  return (
    <>
      <main style={{ minHeight: "100vh", background: "#0E0E0C" }}>
        <Navbar />

        {/* ── HERO — dark bg, two-column ─────────────────────── */}
        <section style={{ background: "#0E0E0C", paddingTop: 64 }}>
          <div
            style={{
              maxWidth: 1440,
              margin: "0 auto",
              padding: "80px 32px 96px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 64,
              alignItems: "flex-end",
            }}
            className="werkwijze-hero-grid"
          >
            {/* Left: headline */}
            <div>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 40 }}
              >
                — Werkwijze
              </p>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(64px, 9vw, 144px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.01em",
                  color: "#F4F1E8",
                }}
              >
                VAN PROBLEEM<br />
                NAAR<br />
                PLATFORM.
              </h1>
            </div>

            {/* Right: small stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 160 }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px 24px",
                }}
              >
                <div className="font-display" style={{ fontSize: 48, lineHeight: 1, color: "#C8F000" }}>7</div>
                <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                  Stappen
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px 24px",
                }}
              >
                <div className="font-display" style={{ fontSize: 48, lineHeight: 1, color: "#F4F1E8" }}>6WK</div>
                <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                  Max. doorlooptijd
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px 24px",
                }}
              >
                <div className="font-display" style={{ fontSize: 48, lineHeight: 1, color: "#F4F1E8" }}>100%</div>
                <div className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                  Eigen kapitaal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 STEPS — alternating light/dark rows ──────────── */}
        {steps.map((step) => {
          const bg = step.dark ? "#0E0E0C" : "#F4F1E8";
          const headingColor = step.dark ? "#F4F1E8" : "#0E0E0C";
          const bodyColor = step.dark ? "rgba(255,255,255,0.55)" : "rgba(14,14,12,0.65)";
          const numColor = step.dark ? "rgba(255,255,255,0.07)" : "rgba(14,14,12,0.07)";

          return (
            <ScrollReveal key={step.num}>
              <section
                style={{
                  background: bg,
                  borderTop: step.dark ? "3px solid #C8F000" : "1px solid rgba(14,14,12,0.06)",
                }}
              >
                <div
                  style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    padding: "0 32px",
                    display: "grid",
                    gridTemplateColumns: "200px 1fr",
                    minHeight: 200,
                  }}
                  className="step-row-grid"
                >
                  {/* Large step number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      borderRight: step.dark
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid rgba(14,14,12,0.06)",
                      paddingRight: 32,
                      paddingTop: 56,
                      paddingBottom: 56,
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(80px, 10vw, 140px)",
                        lineHeight: 1,
                        color: numColor,
                        userSelect: "none",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Title + body */}
                  <div style={{ padding: "56px 0 56px 64px" }}>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "clamp(32px, 4vw, 56px)",
                        lineHeight: 0.9,
                        color: headingColor,
                        marginBottom: 24,
                      }}
                    >
                      {step.title}
                    </h2>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: 17,
                        lineHeight: 1.7,
                        color: bodyColor,
                        maxWidth: 560,
                      }}
                    >
                      {step.body}
                    </p>
                    {step.dark && (
                      <div style={{ marginTop: 24 }}>
                        <span style={{ display: "inline-block", width: 32, height: 3, background: "#C8F000" }} />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </ScrollReveal>
          );
        })}

        {/* ── PRINCIPLES ───────────────────────────────────── */}
        <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 96px)",
                  lineHeight: 0.9,
                  color: "#0E0E0C",
                  marginBottom: 16,
                  maxWidth: 900,
                }}
              >
                DE OPLOSSING STAAT ALTIJD VOOROP.
              </h2>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 96px)",
                  lineHeight: 0.9,
                  color: "rgba(14,14,12,0.25)",
                  marginBottom: 64,
                  maxWidth: 900,
                }}
              >
                DE BUSINESS CASE VOLGT. ALTIJD.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 2,
                  background: "#C0BDB0",
                }}
              >
                {principles.map((p) => (
                  <div
                    key={p.title}
                    style={{ background: "#F4F1E8", padding: "36px 28px", borderTop: "3px solid #C8F000" }}
                  >
                    <div
                      className="font-mono uppercase"
                      style={{ fontSize: 11, letterSpacing: "0.14em", color: "#0E0E0C", fontWeight: 700, marginBottom: 16 }}
                    >
                      {p.title}
                    </div>
                    <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(14,14,12,0.6)" }}>
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── TIMELINE SUMMARY ─────────────────────────────── */}
        <section style={{ background: "#FBFAF6", padding: "96px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(32px, 4vw, 64px)",
                  lineHeight: 0.92,
                  color: "#0E0E0C",
                  marginBottom: 48,
                  maxWidth: 800,
                }}
              >
                NA ZES WEKEN HEB JE EEN PLATFORM — EN ALLES OM HET TE LANCEREN.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 2, background: "#C0BDB0", marginBottom: 48 }}>
                {steps.map((s, i) => (
                  <div
                    key={s.num}
                    style={{
                      background: i % 2 === 1 ? "#0E0E0C" : "#FBFAF6",
                      padding: "20px 24px",
                      flex: "1 1 130px",
                    }}
                  >
                    <div
                      className="font-display"
                      style={{ fontSize: 28, color: i % 2 === 1 ? "#C8F000" : "#0E0E0C", lineHeight: 1, marginBottom: 6 }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="font-mono uppercase"
                      style={{ fontSize: 9, letterSpacing: "0.12em", color: i % 2 === 1 ? "rgba(255,255,255,0.45)" : "rgba(14,14,12,0.5)" }}
                    >
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                className="font-mono"
                style={{ fontSize: 12, color: "rgba(14,14,12,0.4)", lineHeight: 1.65, maxWidth: 560, fontStyle: "italic" }}
              >
                Niet elk idee wordt een venture. Dat is de bedoeling. Snel stoppen is goedkoper dan
                langzaam falen. We schrijven altijd op wat we hebben geleerd.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CLOSING CTA — dark ───────────────────────────── */}
        <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(56px, 8vw, 140px)",
                  lineHeight: 0.88,
                  color: "#F4F1E8",
                  marginBottom: 48,
                }}
              >
                HEB JE EEN IDEE?<br />
                <span style={{ color: "#C8F000" }}>BOUW MEE.</span>
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
                  to="/ventures"
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
                  BEKIJK ONZE VENTURES
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default HoeWeBouwenPage;
