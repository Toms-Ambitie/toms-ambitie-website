import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { applySEO } from "@/lib/seo";
import founderImg from "@/assets/founder.webp";

/* ─── Data ─────────────────────────────────────────────────────────── */

const principles = [
  {
    title: "PROBLEM-FIRST",
    body: "We beginnen nooit met een businessplan. We beginnen met iets wat we zelf missen.",
  },
  {
    title: "AI ALS VERSNELLER",
    body: "We gebruiken AI omdat het ons sneller maakt — niet als marketingterm.",
  },
  {
    title: "ALTIJD ONDERBOUWD",
    body: "Geen aannames. Geen buikgevoel. Iedere stap wordt onderbouwd met data of bewijs.",
  },
  {
    title: "EERLIJK OVER RESULTATEN",
    body: "Stoppen is ook een beslissing. Snel stoppen is goedkoper dan langzaam falen.",
  },
  {
    title: "INTERN GETEST",
    body: "Als wij het niet dagelijks gebruiken, lanceren we het niet. Punt. Geen uitzonderingen.",
  },
];

const timeline = [
  { year: "2008", label: "Notabilis", detail: "Drie ondernemers aan de keukentafel. Communicatiebureau vanuit de regio." },
  { year: "2012", label: "Aardbei", detail: "Gerebrand naar Aardbei Communicatie. Team van 10." },
  { year: "2015", label: "Exit", detail: "Aardbei verkocht. Nieuwe fase. FreshGuys als tussenstap." },
  { year: "2016", label: "LED-IBC", detail: "Venture: grootste verhuurder van verlichte IBC's in de Benelux." },
  { year: "2017", label: "Toms Ambitie", detail: "Van bureau-denken naar venture-denken." },
  { year: "NU", label: "Venture Club", detail: "Post Pilot, Pactly, OAK Marketing, Plug and Power.", pulse: true },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

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
    <main style={{ minHeight: "100vh", background: "#F4F1E8" }}>
      <Navbar />

      {/* ── HERO — light, two-column ────────────────────────── */}
      <section style={{ background: "#F4F1E8", paddingTop: 64 }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "80px 32px 96px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="over-ons-hero-grid"
        >
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 40 }}
            >
              — Over ons
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(56px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "#0E0E0C",
                marginBottom: 32,
              }}
            >
              EEN VENTURE CLUB.<br />
              <span style={{ color: "rgba(14,14,12,0.3)" }}>EEN VASTE KERN.</span>
            </h1>
            <p
              className="font-sans"
              style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.65)", maxWidth: 480 }}
            >
              Toms Ambitie is geen traditioneel bureau. Wel een vaste kern van builders,
              marketeers, developers en specialisten die per venture samenkomen.
            </p>
          </div>

          {/* Right: team photo */}
          <div style={{ position: "relative" }}>
            <img
              src={founderImg}
              alt="Tom Mulder — Toms Ambitie"
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                objectPosition: "top",
                filter: "grayscale(30%)",
                display: "block",
              }}
              loading="eager"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(transparent, rgba(14,14,12,0.6))",
              }}
            />
            <div style={{ position: "absolute", bottom: 20, left: 24 }}>
              <div className="font-display" style={{ fontSize: 22, color: "#F4F1E8", lineHeight: 1 }}>Tom Mulder</div>
              <div className="font-mono uppercase" style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", marginTop: 4 }}>
                Oprichter · Venture Club · Zwolle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIJF PRINCIPES ───────────────────────────────────── */}
      <section style={{ background: "#FBFAF6", padding: "96px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 88px)",
                lineHeight: 0.9,
                color: "#0E0E0C",
                marginBottom: 8,
              }}
            >
              VIJF PRINCIPES.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 88px)",
                lineHeight: 0.9,
                color: "rgba(14,14,12,0.25)",
                marginBottom: 56,
              }}
            >
              EEN WERKWIJZE. EEN RICHTING.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 2,
                background: "#C0BDB0",
              }}
            >
              {principles.map((p) => (
                <div
                  key={p.title}
                  style={{ background: "#FBFAF6", padding: "32px 24px", borderTop: "3px solid #C8F000" }}
                >
                  <div
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.14em", color: "#0E0E0C", fontWeight: 700, marginBottom: 16 }}
                  >
                    {p.title}
                  </div>
                  <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(14,14,12,0.6)" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 17 JAAR BOUWEN ───────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="over-ons-tom-grid"
        >
          {/* Left: Tom photo */}
          <div style={{ position: "relative" }}>
            <img
              src={founderImg}
              alt="Tom Mulder"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                objectPosition: "top",
                filter: "grayscale(100%)",
                display: "block",
              }}
              loading="lazy"
            />
          </div>

          {/* Right: text */}
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)", marginBottom: 32 }}
            >
              — De achtergrond
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 96px)",
                lineHeight: 0.9,
                color: "#0E0E0C",
                marginBottom: 8,
              }}
            >
              17 JAAR BOUWEN.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 96px)",
                lineHeight: 0.9,
                color: "rgba(14,14,12,0.3)",
                marginBottom: 40,
              }}
            >
              EEN CONSTANTE: DOEN.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p className="font-sans" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(14,14,12,0.65)" }}>
                Sinds 2008 bouw ik bedrijven, concepten, campagnes en ventures. Soms succesvol,
                soms pijnlijk leerzaam — maar altijd vanuit dezelfde drijfveer: begrijpen
                waarom mensen doen wat ze doen en daar iets op bouwen dat echt gebruikt wordt.
              </p>
              <p className="font-sans" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(14,14,12,0.65)" }}>
                Wat begon bij Notabilis en later Aardbei Communicatie groeide uiteindelijk
                uit tot Toms Ambitie: een venture club waarin ideeën sneller gebouwd,
                getest en gevalideerd worden.
              </p>
              <p className="font-sans" style={{ fontSize: 17, lineHeight: 1.7, color: "#0E0E0C", fontWeight: 500 }}>
                Maar uiteindelijk geloof ik vooral in bouwen. Niet eindeloos brainstormen.
                Ideeën worden pas interessant zodra iemand ze gebruikt.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <a
                href="https://www.linkedin.com/in/tommulder85"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono uppercase inline-flex items-center"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#0E0E0C",
                  textDecoration: "none",
                  borderBottom: "2px solid #C8F000",
                  paddingBottom: 4,
                }}
              >
                Verbind op LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK QUOTE ───────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", padding: "96px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 96px)",
                lineHeight: 0.9,
                color: "#F4F1E8",
                marginBottom: 8,
              }}
            >
              "WE HEBBEN TOILETBORSTELS
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 96px)",
                lineHeight: 0.9,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              VERHUURD. SERIEUS."
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            alignItems: "start",
          }}
          className="over-ons-timeline-grid"
        >
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 5vw, 80px)",
                lineHeight: 0.9,
                color: "#0E0E0C",
                marginBottom: 8,
              }}
            >
              17 JAAR.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 5vw, 80px)",
                lineHeight: 0.9,
                color: "rgba(14,14,12,0.3)",
                marginBottom: 8,
              }}
            >
              VAN BUREAU TOT VENTURE CLUB.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 5vw, 80px)",
                lineHeight: 0.9,
                color: "rgba(14,14,12,0.15)",
              }}
            >
              PLUS TOP-SPECIALISTEN.
            </h2>
          </div>

          <ScrollReveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "#C0BDB0" }}>
              {timeline.map((t) => (
                <div
                  key={t.year}
                  style={{
                    background: t.pulse ? "#0E0E0C" : "#FBFAF6",
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 32,
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <div
                      className="font-display"
                      style={{
                        fontSize: 32,
                        lineHeight: 1,
                        color: t.pulse ? "#C8F000" : "#0E0E0C",
                      }}
                    >
                      {t.year}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        color: t.pulse ? "#C8F000" : "rgba(14,14,12,0.4)",
                        marginBottom: 6,
                      }}
                    >
                      {t.label}
                    </div>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: t.pulse ? "rgba(255,255,255,0.6)" : "rgba(14,14,12,0.65)",
                      }}
                    >
                      {t.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VASTE KERN ───────────────────────────────────────── */}
      <section style={{ background: "#FBFAF6", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(56px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "#0E0E0C",
                marginBottom: 8,
              }}
            >
              VASTE KERN.
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(56px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "rgba(14,14,12,0.25)",
                marginBottom: 48,
              }}
            >
              PLUS TOP-SPECIALISTEN.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.6)", maxWidth: 600, marginBottom: 56 }}
            >
              Geen lagen, geen accountmanagers, geen standaard trajecten. Wel een vaste kern
              die per venture de beste specialisten samenbrengt. Soms tijdelijk. Soms jarenlang.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, background: "#C0BDB0" }}>
              {["Strategy", "AI", "Neuromarketing", "Development", "Positioning", "Content", "Data", "Operations"].map((d) => (
                <div
                  key={d}
                  style={{ background: "#FBFAF6", padding: "24px 20px", display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span style={{ width: 5, height: 5, background: "#C8F000", display: "inline-block", flexShrink: 0 }} />
                  <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#0E0E0C" }}>
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(56px, 8vw, 140px)",
                lineHeight: 0.88,
                color: "#F4F1E8",
                marginBottom: 0,
              }}
            >
              "ALS JE HET KUNT BEDENKEN,{" "}
              <span style={{ color: "#C8F000" }}>KUN JE HET OOK DOEN."</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <ScrollReveal>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(80px, 12vw, 200px)",
                lineHeight: 0.85,
                color: "#0E0E0C",
                marginBottom: 40,
              }}
            >
              BOUW MEE.
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
                  border: "1.5px solid rgba(14,14,12,0.3)",
                  background: "transparent",
                  color: "#0E0E0C",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  padding: "14px 28px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0E0E0C";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#0E0E0C";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F4F1E8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(14,14,12,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0E0E0C";
                }}
              >
                ONZE VENTURES
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OverOnsPage;
