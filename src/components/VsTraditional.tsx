import { ScrollReveal } from "@/components/ScrollReveal";

const traditional = [
  "Externe adviseurs zonder eigen skin in the game",
  "Lange trajecten met trage besluitvorming",
  "Bureaulagen tussen idee en uitvoering",
  "Focus op uren en rapportages, niet op resultaat",
  "Pitchdecks die de werkelijkheid overschatten",
  "Afhankelijk van externe financiering om te starten",
];

const ourWay = [
  "Oprichter bouwt mee — altijd eigen skin in the game",
  "Van probleem naar platform in maximaal 6 weken",
  "Directe lijn: geen lagen, geen accountmanagers",
  "Focus op marktbewijs, retentie en schaal",
  "We gebruiken het zelf — eerst intern gevalideerd",
  "Geen externe investeerders nodig om te starten",
];

export const VsTraditional = () => {
  return (
    <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
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
            WE ZIJN GEEN<br />
            <span style={{ color: "#C8F000" }}>KLASSIEKE</span><br />
            VENTURE BUILDER.
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
                KLASSIEKE VENTURE BUILDER
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
