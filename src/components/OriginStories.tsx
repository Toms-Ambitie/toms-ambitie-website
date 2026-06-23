import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  {
    venture: "EMMA",
    quote: "IK STEL MIJN ADMINISTRATIE NIET UIT OMDAT IK LUI BEN.",
    desc: "Veel ondernemers gebruiken prima software. Maar de ervaring voelt zwaarder dan nodig. Schermen. Menu's. Jargon. Workflow na workflow. Emma begon als een slimme AI-laag bovenop bestaande boekhoudtools — en groeide uit tot een productfamilie. Acht modules die de saaie kanten van ondernemen overnemen. Per module. Jouw keuze.",
    accent: "#0e3d37",
    link: { label: "Bekijk Emma →", href: "/ventures/emmastudio" },
  },
  {
    venture: "POSTPILOT",
    quote: "IK WIL ACTIEF ZIJN OP LINKEDIN. MAAR DE DISCIPLINE ONTBREEKT ME.",
    desc: "Ik weet dat zichtbaarheid belangrijk is. Maar meerdere keren per week iets posten lukt gewoon niet consequent. Tussen werk, meetings en dagelijkse drukte verdwijnt LinkedIn telkens naar de achtergrond. Ideeën zijn er genoeg. Tijd, ritme en discipline niet. PostPilot helpt om zichtbaar te blijven zonder dat content een dagtaak wordt. Jij bepaalt de richting. AI helpt met de uitvoering.",
    accent: "#E8A640",
    link: { label: "Bekijk PostPilot →", href: "/ventures/post-pilot" },
  },
  {
    venture: "PLUG AND POWER",
    quote: "IK WIL GEWOON EEN SLIMME THUISBATTERIJ. ZONDER GEDOE.",
    desc: "Iedereen heeft het over thuisbatterijen. Maar zodra je je erin verdiept, zie je door de merken, installateurs en technische verhalen het overzicht niet meer. De ene partij verkoopt installatiewerk. De andere alleen zijn eigen merk. Plug and Power helpt consumenten bij het kiezen van slimme plug-and-play energieoplossingen, zonder ingewikkeld installatieproces of verkooppraatjes.",
    accent: "#FFAA00",
    link: { label: "Bekijk Plug and Power →", href: "/ventures/plug-and-power" },
  },
];

export const OriginStories = () => {
  return (
    <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
          >
            — Alles begint met een probleem
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#F4F1E8",
              marginBottom: 16,
              maxWidth: 860,
            }}
          >
            ALLES BEGINT MET EEN PROBLEEM, BEHOEFTE OF GEWOON EEN GOED IDEE.
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: 17, color: "rgba(244,241,232,0.5)", maxWidth: 520, lineHeight: 1.6, marginBottom: 64 }}
          >
            Geen idee uit het niets. Geen boardroom-sessie. Gewoon: iets wat ons irriteerde, ontbrak of beter kon. En toen hebben we het gebouwd.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 2,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {cards.map((c) => (
              <div
                key={c.venture}
                style={{
                  background: "#111110",
                  padding: "40px 32px",
                  borderTop: `3px solid ${c.accent}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.18em", color: c.accent, marginBottom: 20 }}
                >
                  {c.venture}
                </p>
                <p
                  className="font-display"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#F4F1E8", lineHeight: 1.15, marginBottom: 20 }}
                >
                  {c.quote}
                </p>
                <p
                  className="font-sans flex-1"
                  style={{ fontSize: 14, color: "rgba(244,241,232,0.5)", lineHeight: 1.7, marginBottom: 24 }}
                >
                  {c.desc}
                </p>
                <Link
                  to={c.link.href}
                  className="font-mono uppercase inline-flex items-center"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: c.accent,
                    textDecoration: "none",
                    marginTop: "auto",
                    minHeight: 44,
                  }}
                >
                  {c.link.label}
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
