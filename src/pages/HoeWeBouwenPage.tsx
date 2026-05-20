import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { FixedTicker } from "@/components/FixedTicker";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { applySEO } from "@/lib/seo";

/* ─── Data ─────────────────────────────────────────────────────────── */

const phases = [
  {
    label: "PROBLEEM",
    accent: "#C8F000",
    steps: [
      {
        num: "01",
        title: "WE VOELEN HET ZELF",
        body: "Elk venture start met een frustratie van binnenuit. Niet een trendje, niet een pitchdeck, niet een LinkedIn-poll. Een echt probleem dat we zelf tegenkomen in werk, leven of een bestaand venture.",
      },
      {
        num: "02",
        title: "WE VALIDEREN INTERN",
        body: "Voordat we ook maar één regel code schrijven, toetsen we het probleem met mensen direct om ons heen. Is het herkenbaar? Is het frequent? Is het pijnlijk genoeg om iets voor te willen betalen?",
      },
      {
        num: "03",
        title: "WE SCHERPEN DE PROPOSITIE",
        body: "Eén zin. Niet een missie, niet een visie, niet een businessplan. Eén heldere zin: voor wie, welk probleem, waarom nu. Als we die zin niet kunnen schrijven, bouwen we niet.",
      },
    ],
  },
  {
    label: "OPLOSSING",
    accent: "#C8F000",
    steps: [
      {
        num: "04",
        title: "WE BOUWEN DE MVP",
        body: "De eenvoudigste werkende versie. Eén kernfunctie, geen featurelijst, geen landing page vol beloftes. Zo snel mogelijk iets wat daadwerkelijk werkt, zodat we iets echts kunnen testen.",
      },
      {
        num: "05",
        title: "WE TESTEN IN DE PRAKTIJK",
        body: "Wij zijn altijd zelf de testgroep. Als we het niet dagelijks gebruiken, bouwen we niet verder. Interne adoptie is het eerste bewijs. Geen intern gebruik, geen extern product.",
      },
      {
        num: "06",
        title: "WE HALEN EERSTE GEBRUIKERS",
        body: "Mensen direct om ons heen die het probleem herkennen. Geen betaalde marketing, geen productlaunch, geen persbericht. Echte adoptie begint altijd met één iemand die het zelf wil gebruiken.",
      },
    ],
  },
  {
    label: "PLATFORM",
    accent: "#C8F000",
    steps: [
      {
        num: "07",
        title: "VENTURE OF STOPPEN",
        body: "Retentie. Betalende klanten. Echte traction. Zijn die er? Dan schalen we. Zijn die er niet? Dan stoppen we. We schrijven op wat we geleerd hebben en starten met het volgende probleem. Geen uitzonderingen.",
      },
    ],
  },
];

const aiUsecases = [
  {
    num: "01",
    title: "EERSTE CODEBASES",
    body: "AI genereert de eerste versie van een product. Wij verfijnen, debuggen en bouwen door. Wat vroeger weken kostte, duurt nu dagen.",
  },
  {
    num: "02",
    title: "MARKTONDERZOEK",
    body: "Concurrentie, prijzen, trends, gebruikersgedrag. Uren werk in plaats van dagen. AI filtert het ruwe signaal, wij interpreteren de patronen.",
  },
  {
    num: "03",
    title: "CONTENT & STRUCTUUR",
    body: "Eerste drafts voor teksten, e-mailflows, productdocumentatie. Wij bewaken de stem, de toon en het merk. AI versnelt de uitvoering.",
  },
  {
    num: "04",
    title: "SUPPORT & FAQ",
    body: "AI handelt eerstelijns vragen af zodat wij kunnen focussen op wat er echt toe doet. Klantcontact op schaal, zonder groot team.",
  },
  {
    num: "05",
    title: "VALIDATIE",
    body: "Snel hypotheses testen, gebruikersinterviews samenvatten, signalen filteren. AI bespaart ons de tijd van handmatig doorzoeken.",
  },
  {
    num: "06",
    title: "GEDRAGSANALYSE",
    body: "Gebruikersgedrag uitlezen, patronen herkennen, beslissingen onderbouwen met data. Niet buikgevoel, maar bewijs.",
  },
];

const principles = [
  {
    title: "PROBLEEM EERST, ALTIJD",
    body: "We beginnen nooit met een businessplan. We beginnen met iets wat we zelf missen. Als het probleem niet echt is, is er geen product.",
  },
  {
    title: "INTERN GETEST VOOR EXTERN GELANCEERD",
    body: "Als wij het niet dagelijks gebruiken, lanceren we het niet. Punt. Geen uitzonderingen.",
  },
  {
    title: "AI IS EEN MIDDEL, GEEN DOEL",
    body: "We gebruiken AI omdat het ons sneller maakt. Niet als marketingterm. Niet als excuus voor slechte beslissingen.",
  },
  {
    title: "STOPPEN IS OOK EEN BESLISSING",
    body: "Niet elk idee wordt een venture. Dat is de bedoeling. Snel stoppen is goedkoper dan langzaam falen.",
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
      <FixedTicker />
      <main className="pb-9" style={{ minHeight: "100vh", background: "#FBFAF6" }}>
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{ background: "#F4F1E8", paddingTop: 64 }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 32px 96px" }}>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 40 }}
            >
              — Werkwijze
            </p>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(64px, 9vw, 144px)",
                lineHeight: 0.88,
                letterSpacing: "-0.01em",
                color: "#0E0E0C",
                marginBottom: 40,
                maxWidth: 1100,
              }}
            >
              VAN PROBLEEM<br />
              NAAR PLATFORM.<br />
              <span style={{ color: "rgba(14,14,12,0.28)" }}>IN ZEVEN STAPPEN.<br />MAX ZES WEKEN.</span>
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px 64px",
                maxWidth: 900,
                marginBottom: 56,
              }}
            >
              <p className="font-sans" style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.65)" }}>
                We bouwen vanuit frustratie, gedrag en echte behoeften. Niet vanuit brainstorms
                of trendrapporten. Niet voor klanten. Voor onszelf.
              </p>
              <p className="font-sans" style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.65)" }}>
                Als wij het probleem zelf voelen, bouwen we eerst een interne oplossing.
                Werkt dat intern? Dan testen we extern. Pas daarna ontstaat soms een venture.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Probleem eerst", "Intern getest", "AI als versneller", "Max 6 weken"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: "#0E0E0C",
                    border: "1.5px solid rgba(14,14,12,0.2)",
                    padding: "7px 14px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── STAPPEN PER FASE ─────────────────────────────── */}
        <section style={{ background: "#F4F1E8", paddingBottom: 120 }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 48, paddingTop: 0 }}
              >
                — Het systeem
              </p>
            </ScrollReveal>

            {phases.map((phase, pi) => (
              <ScrollReveal key={phase.label} delay={pi * 0.05}>
                <div style={{ marginBottom: 4 }}>
                  {/* Phase label header */}
                  <div
                    style={{
                      background: "#0E0E0C",
                      padding: "14px 32px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <span
                      style={{ width: 8, height: 8, background: "#C8F000", display: "inline-block", flexShrink: 0 }}
                    />
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C8F000" }}
                    >
                      {phase.label}
                    </span>
                  </div>

                  {/* Steps */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "#C0BDB0" }}>
                    {phase.steps.map((step, si) => (
                      <div
                        key={step.num}
                        style={{
                          background: "#F4F1E8",
                          display: "grid",
                          gridTemplateColumns: "80px 1fr",
                        }}
                      >
                        {/* Step number */}
                        <div
                          style={{
                            borderRight: "1px solid rgba(14,14,12,0.08)",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            paddingTop: 40,
                          }}
                        >
                          <span
                            className="font-display"
                            style={{ fontSize: 40, color: "rgba(14,14,12,0.1)", lineHeight: 1 }}
                          >
                            {step.num}
                          </span>
                        </div>

                        {/* Step content */}
                        <div
                          style={{
                            padding: "40px 48px 40px 40px",
                            borderTop: si === 0 && pi === 0 ? "3px solid #C8F000" : undefined,
                          }}
                        >
                          <div
                            className="font-display"
                            style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "#0E0E0C", lineHeight: 1, marginBottom: 16 }}
                          >
                            {step.title}
                          </div>
                          <p
                            className="font-sans"
                            style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(14,14,12,0.65)", maxWidth: 680 }}
                          >
                            {step.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Footnote */}
            <ScrollReveal delay={0.15}>
              <div
                style={{
                  marginTop: 32,
                  paddingTop: 32,
                  borderTop: "1px solid rgba(14,14,12,0.1)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <span style={{ width: 3, height: 3, background: "rgba(14,14,12,0.35)", display: "inline-block", marginTop: 9, flexShrink: 0 }} />
                <p
                  className="font-mono"
                  style={{ fontSize: 12, color: "rgba(14,14,12,0.4)", lineHeight: 1.65, maxWidth: 560, fontStyle: "italic" }}
                >
                  Niet elk idee wordt een venture. Dat is de bedoeling. Snel stoppen is goedkoper dan
                  langzaam falen. We schrijven altijd op wat we hebben geleerd.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SNELHEID ──────────────────────────────────────── */}
        <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
              >
                — Waarom dit sneller werkt
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 96px)",
                  lineHeight: 0.9,
                  color: "#F4F1E8",
                  marginBottom: 24,
                }}
              >
                TRADITIONEEL DUURT<br />
                <span style={{ color: "#C8F000" }}>MAANDEN.</span><br />
                WIJ DOEN HET IN WEKEN.
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 600, marginBottom: 64 }}
              >
                Traditionele bedrijven starten met meetings, plannen, budgetten en maanden voorbereiding.
                Wij starten met een probleem en een prototype. Daardoor zien we binnen weken
                wat anderen pas na maanden ontdekken.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 2,
                  background: "rgba(255,255,255,0.06)",
                  maxWidth: 720,
                }}
              >
                {/* Traditioneel */}
                <div style={{ background: "#111110", padding: "44px 40px" }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", marginBottom: 32 }}
                  >
                    Traditioneel
                  </p>
                  {["01 — Plannen", "02 — Overleggen", "03 — Pitchen", "04 — Bouwen", "05 — Lanceren"].map((s, i) => (
                    <div
                      key={s}
                      style={{ padding: "10px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : undefined }}
                    >
                      <span
                        className="font-mono"
                        style={{ fontSize: 13, color: "rgba(255,255,255,0.22)", textDecoration: "line-through" }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)", marginTop: 28 }}
                  >
                    ~ 6 – 18 maanden
                  </p>
                </div>

                {/* Toms Ambitie */}
                <div style={{ background: "#111110", padding: "44px 40px", borderTop: "3px solid #C8F000" }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.2em", color: "#C8F000", marginBottom: 32 }}
                  >
                    Toms Ambitie
                  </p>
                  {[
                    "01 — Probleem voelen",
                    "02 — MVP bouwen",
                    "03 — Intern testen",
                    "04 — Eerste gebruikers",
                    "05 — Venture of stop",
                  ].map((s, i) => (
                    <div
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 0",
                        borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                      }}
                    >
                      <span style={{ width: 4, height: 4, background: "#C8F000", flexShrink: 0, display: "inline-block" }} />
                      <span className="font-mono" style={{ fontSize: 13, color: "#F4F1E8" }}>{s}</span>
                    </div>
                  ))}
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 11, letterSpacing: "0.12em", color: "#C8F000", marginTop: 28 }}
                  >
                    ~ Max 6 weken
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── AI ALS VERSNELLER ────────────────────────────── */}
        <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 24 }}
              >
                — AI als versneller
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 96px)",
                  lineHeight: 0.9,
                  color: "#0E0E0C",
                  marginBottom: 24,
                }}
              >
                AI MAAKT ONS SNELLER.<br />
                <span style={{ color: "rgba(14,14,12,0.25)" }}>NIET SLIMMER.</span>
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.6)", maxWidth: 600, marginBottom: 64 }}
              >
                We gebruiken AI niet omdat het hip is. We gebruiken het omdat het ons in staat stelt
                in weken te bouwen wat anders maanden kost. Op zes concrete plekken in onze workflow.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 2,
                  background: "#C0BDB0",
                  marginBottom: 48,
                }}
              >
                {aiUsecases.map((item) => (
                  <div
                    key={item.num}
                    style={{ background: "#F4F1E8", padding: "36px 32px" }}
                  >
                    <div
                      className="font-display"
                      style={{ fontSize: 36, color: "rgba(14,14,12,0.08)", lineHeight: 1, marginBottom: 16 }}
                    >
                      {item.num}
                    </div>
                    <div
                      className="font-mono uppercase"
                      style={{ fontSize: 10, letterSpacing: "0.14em", color: "#0E0E0C", fontWeight: 700, marginBottom: 12 }}
                    >
                      {item.title}
                    </div>
                    <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(14,14,12,0.6)" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div style={{ borderLeft: "3px solid #C8F000", paddingLeft: 24, maxWidth: 600 }}>
                <p className="font-sans" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(14,14,12,0.6)", marginBottom: 8 }}>
                  AI maakt geen beslissingen. AI vervangt geen sales, geen vertrouwen, geen klantrelaties. Dat doen wij.
                </p>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.14em", color: "#0E0E0C", fontWeight: 700 }}
                >
                  Versneller van executie — geen magische oplossing
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PRINCIPES ────────────────────────────────────── */}
        <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
              >
                — Onze bouwprincipes
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 96px)",
                  lineHeight: 0.9,
                  color: "#F4F1E8",
                  marginBottom: 64,
                }}
              >
                WIJ ZIJN ALTIJD<br />
                <span style={{ color: "#C8F000" }}>ZELF DE TESTGROEP.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 2,
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {principles.map((p) => (
                  <div
                    key={p.title}
                    style={{ background: "#111110", padding: "44px 40px", borderLeft: "3px solid #C8F000" }}
                  >
                    <div
                      className="font-display"
                      style={{ fontSize: "clamp(18px, 2vw, 26px)", color: "#F4F1E8", lineHeight: 1.05, marginBottom: 16 }}
                    >
                      {p.title}
                    </div>
                    <p className="font-sans" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────── */}
        <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <ScrollReveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 7vw, 120px)",
                  lineHeight: 0.88,
                  color: "#0E0E0C",
                  marginBottom: 40,
                  maxWidth: 1100,
                }}
              >
                HEB JE EEN PROBLEEM<br />
                DAT EEN BEDRIJF{" "}
                <span style={{ color: "#C8F000" }}>VERDIENT?</span>
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.65)", maxWidth: 540, marginBottom: 48 }}
              >
                We bouwen niet voor klanten. Maar als jij een probleem hebt dat wij herkennen
                — praten we graag. Geen pitchdeck nodig, geen vrijblijvend gesprek.
              </p>
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
                    border: "1.5px solid rgba(14,14,12,0.3)",
                    background: "transparent",
                    color: "#0E0E0C",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    padding: "14px 28px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#0E0E0C";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F4F1E8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#0E0E0C";
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
