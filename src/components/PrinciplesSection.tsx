import { ScrollReveal } from "@/components/ScrollReveal";

const principles = [
  {
    label: "PROBLEM-FIRST",
    title: "Het probleem staat altijd voorop.",
    desc: "We beginnen nooit met een businessplan of een pitchdeck. We beginnen met een frustratie die we zelf voelen. Als het probleem niet echt is, bouwen we niet.",
  },
  {
    label: "AI ALS VERSNELLER",
    title: "AI is een middel, geen doel.",
    desc: "We gebruiken AI om sneller te bouwen, slimmer te testen en eerder te weten of iets werkt. Niet als marketingterm, maar als dagelijks gereedschap.",
  },
  {
    label: "ALTIJD ONDERBOUWD",
    title: "De business case volgt het bewijs.",
    desc: "We bouwen alleen verder als de cijfers kloppen. Retentie, betalende gebruikers, echte traction. Zonder marktbewijs schalen we niet.",
  },
  {
    label: "EERLIJK OVER RESULTATEN",
    title: "We publiceren wat werkt — en wat niet.",
    desc: "Niet elke venture wordt een succes. Dat is niet erg. Wat erg is: erover zwijgen. We zijn open over wat we leren, ook als het tegenvalt.",
  },
];

export const PrinciplesSection = () => {
  return (
    <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
          >
            — Onze principes
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(44px, 6vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "#F4F1E8",
              marginBottom: 64,
            }}
          >
            DE OPLOSSING STAAT<br />
            ALTIJD VOOROP.<br />
            <span style={{ color: "#C8F000" }}>DE BUSINESS CASE VOLGT.</span>
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
            {principles.map((p) => (
              <div
                key={p.label}
                style={{
                  background: "#111110",
                  padding: "48px 44px",
                  borderLeft: "3px solid #C8F000",
                }}
              >
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C8F000", marginBottom: 20 }}
                >
                  {p.label}
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "#F4F1E8", lineHeight: 1.05, marginBottom: 16 }}
                >
                  {p.title}
                </div>
                <p
                  className="font-sans"
                  style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
