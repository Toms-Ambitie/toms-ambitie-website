import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import founder from "@/assets/founder.webp";

export const TeamSection = () => {
  return (
    <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 24 }}
          >
            — Het team
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(44px, 6vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 64,
            }}
          >
            EEN VASTE KERN.<br />
            <span style={{ color: "rgba(14,14,12,0.3)" }}>TOP SPECIALISTEN.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 2,
              background: "#C0BDB0",
            }}
          >
            {/* Photo */}
            <div
              style={{
                position: "relative",
                minHeight: 480,
                overflow: "hidden",
                background: "#0E0E0C",
              }}
            >
              <img
                src={founder}
                alt="Tom Mulder, oprichter van Toms Ambitie"
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  filter: "grayscale(100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(14,14,12,0.75) 0%, rgba(14,14,12,0.1) 60%, transparent 100%)",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px" }}>
                <div
                  className="font-display"
                  style={{ fontSize: 40, color: "#F4F1E8", lineHeight: 1, letterSpacing: "0.02em" }}
                >
                  TOM MULDER
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.14em", color: "#C8F000", marginTop: 6 }}
                >
                  Oprichter · Zwolle
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ background: "#F4F1E8", padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p
                className="font-sans"
                style={{ fontSize: 17, color: "rgba(14,14,12,0.75)", lineHeight: 1.75, marginBottom: 24 }}
              >
                Twintig jaar marketing en ondernemerschap. Eén bedrijf opgebouwd en verkocht.
                Daarna gestopt met adviseren en begonnen met bouwen.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: 17, color: "rgba(14,14,12,0.75)", lineHeight: 1.75, marginBottom: 40 }}
              >
                Tom is de motor, niet het hele verhaal. Om hem heen staat een vaste kern en een schil
                van top specialisten. Samen bouwen we sneller dan een traditioneel team — en aan
                bedrijven die we zelf bezitten.
              </p>

              <div
                style={{
                  background: "rgba(14,14,12,0.04)",
                  borderLeft: "3px solid #C8F000",
                  padding: "20px 24px",
                  marginBottom: 40,
                }}
              >
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.16em", color: "rgba(14,14,12,0.45)", marginBottom: 8 }}
                >
                  Motto
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: 22, color: "#0E0E0C", lineHeight: 1.1 }}
                >
                  "ALS JE HET KUNT BEDENKEN,<br />KUN JE HET OOK DOEN."
                </div>
              </div>

              <Link
                to="/over-ons"
                className="font-mono font-bold uppercase inline-flex items-center self-start hover:bg-ink hover:text-paper transition-colors"
                style={{
                  border: "1.5px solid #0E0E0C",
                  color: "#0E0E0C",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  padding: "12px 24px",
                  textDecoration: "none",
                }}
              >
                Meer over het team →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
