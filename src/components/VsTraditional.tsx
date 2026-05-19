import { ScrollReveal } from "@/components/ScrollReveal";

const traditional = [
  "Bureaus met lagen en accountmanagers",
  "Lange trajecten, trage besluitvorming",
  "Advies zonder skin in the game",
  "Focus op uren, niet op resultaat",
  "Externe uitvoerders die weglopen",
  "Complexe contracten, vage deliverables",
];

const ourWay = [
  "Directe lijn met de oprichter",
  "Van idee naar live in maximaal 6 weken",
  "Wij investeren mee — echte betrokkenheid",
  "Focus op groei, marktbewijs en schaal",
  "Vaste kern, aangescherpte schil",
  "Heldere afspraken, concrete output",
];

export const VsTraditional = () => {
  return (
    <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
          >
            — Waarom anders
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(52px, 7vw, 104px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#F4F1E8",
              marginBottom: 64,
            }}
          >
            ANDERS DAN<br />
            <span style={{ color: "#C8F000" }}>DE REST.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 2,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {/* Traditional */}
            <div style={{ background: "#0E0E0C", padding: "48px 40px" }}>
              <div
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: "#FF4A00", marginBottom: 32 }}
              >
                Traditioneel bureau
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {traditional.map((item) => (
                  <li
                    key={item}
                    className="font-sans"
                    style={{
                      fontSize: 16,
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "line-through",
                      textDecorationColor: "#FF4A00",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Toms Ambitie */}
            <div
              style={{
                background: "#111110",
                padding: "48px 40px",
                borderLeft: "3px solid #C8F000",
              }}
            >
              <div
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: "#C8F000", marginBottom: 32 }}
              >
                Toms Ambitie
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {ourWay.map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
                  >
                    <span style={{ color: "#C8F000", fontFamily: "monospace", fontSize: 14, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                    <span
                      className="font-sans"
                      style={{ fontSize: 16, color: "#F4F1E8", lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="font-mono uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.2)",
              marginTop: 48,
            }}
          >
            — Als je het kunt bedenken, kun je het ook doen.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
