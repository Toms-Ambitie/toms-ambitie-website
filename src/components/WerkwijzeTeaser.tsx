import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const columns = [
  {
    label: "PROBLEEM",
    steps: [
      { num: "01", title: "We voelen het zelf", desc: "Frustratie vanuit eigen werk, leven of een bestaand venture — geen derdehands ideeën." },
      { num: "02", title: "We valideren intern", desc: "Is het probleem herkenbaar? We toetsen met mensen om ons heen vóór we één regel code schrijven." },
      { num: "03", title: "We scherpen de propositie", desc: "Niet brainstormen tot we erbij neervallen. Eén duidelijke zin: voor wie, welk probleem, waarom nu." },
    ],
  },
  {
    label: "OPLOSSING",
    steps: [
      { num: "04", title: "We bouwen de MVP", desc: "Eenvoudigste werkende versie. Eén kernfunctie, geen featurelijst, geen perfectie." },
      { num: "05", title: "We testen in de praktijk", desc: "Wij gebruiken het dagelijks. Werkt het intern niet, dan stopt het hier. Geen uitzonderingen." },
      { num: "06", title: "We halen eerste gebruikers", desc: "Mensen om ons heen die het probleem herkennen. Geen marketing, geen launch, geen persberichten." },
    ],
  },
  {
    label: "PLATFORM",
    steps: [
      { num: "07", title: "Venture of stoppen", desc: "Retentie en betalende klanten? We schalen. Anders: stoppen, leren en verder naar het volgende probleem." },
    ],
    note: "Niet elk idee wordt een venture. Dat is de bedoeling.",
  },
];

export const WerkwijzeTeaser = () => {
  return (
    <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 24 }}
          >
            — Hoe we bouwen
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 32,
              marginBottom: 64,
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 96px)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                color: "#0E0E0C",
              }}
            >
              VAN PROBLEEM<br />
              NAAR PLATFORM.<br />
              <span style={{ color: "rgba(14,14,12,0.3)" }}>IN ZEVEN STAPPEN.<br />MAX ZES WEKEN.</span>
            </h2>
            <Link
              to="/hoe-we-bouwen"
              className="font-mono font-bold uppercase inline-flex items-center hover:bg-ink hover:text-paper transition-colors self-end"
              style={{
                border: "1.5px solid #0E0E0C",
                color: "#0E0E0C",
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "12px 24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Zie het volledige proces →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 2,
              background: "#C0BDB0",
            }}
          >
            {columns.map((col) => (
              <div
                key={col.label}
                style={{ background: "#F4F1E8", padding: "40px 36px 36px" }}
              >
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#C8F000",
                    background: "#0E0E0C",
                    display: "inline-block",
                    padding: "5px 10px",
                    marginBottom: 32,
                  }}
                >
                  {col.label}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {col.steps.map((step) => (
                    <div key={step.num} style={{ display: "flex", gap: 16 }}>
                      <div
                        className="font-display"
                        style={{ fontSize: 28, color: "rgba(14,14,12,0.12)", lineHeight: 1, flexShrink: 0, width: 36 }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <div
                          className="font-mono uppercase"
                          style={{ fontSize: 10, letterSpacing: "0.12em", color: "#0E0E0C", fontWeight: 700, marginBottom: 6 }}
                        >
                          {step.title}
                        </div>
                        <p
                          className="font-sans"
                          style={{ fontSize: 14, color: "rgba(14,14,12,0.6)", lineHeight: 1.65 }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {col.note && (
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: "rgba(14,14,12,0.35)",
                      marginTop: 32,
                      paddingTop: 24,
                      borderTop: "1px solid rgba(14,14,12,0.1)",
                      fontStyle: "italic",
                    }}
                  >
                    {col.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
