import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const tickerItems = [
  "PACTLY", "PLUG AND POWER", "POST PILOT", "OAK MARKETING",
  "LED-IBC", "AARDBEI COMMUNICATIE", "DESIGNERSHIRTS", "PARTYBLENDER",
  "ENTRANZ", "ZOUTGROOTHANDEL", "TOILETBORSTEL HUREN", "HET VOLGENDE →",
];

const TickerRow = () => {
  const text = tickerItems.join("  ·  ") + "  ·  ";
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", borderTop: "1px solid rgba(14,14,12,0.07)", padding: "11px 0" }}>
      <div
        className="animate-ticker inline-block font-mono uppercase"
        style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(14,14,12,0.28)" }}
      >
        {text}{text}
      </div>
    </div>
  );
};

const PostPilotFrame = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const tiltX = (mouseY - 0.5) * -6;
  const tiltY = (mouseX - 0.5) * 8;

  const posts = [
    { day: "Ma", time: "09:00", text: "Waarom consistentie wint van creativiteit" },
    { day: "Wo", time: "14:30", text: "3 dingen die ik leerde van mijn eerste pivot" },
    { day: "Vr", time: "11:00", text: "De meeste ondernemers verdwijnen van LinkedIn…" },
  ];

  return (
    <div
      className="w-full"
      style={{
        transform: `perspective(1100px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.08s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          background: "#0A1820",
          border: "1px solid rgba(0,220,147,0.18)",
          overflow: "hidden",
        }}
      >
        {/* App bar */}
        <div
          style={{
            background: "#0C1F2C",
            padding: "14px 20px",
            borderBottom: "1px solid rgba(0,220,147,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 7, height: 7, background: "#00DC93" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: 10, color: "#00DC93", letterSpacing: "0.14em" }}
            >
              POST PILOT
            </span>
          </div>
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
          >
            Dashboard
          </span>
        </div>

        <div style={{ padding: "20px 20px 24px" }}>
          {/* Stats */}
          <div style={{ display: "flex", gap: 28, marginBottom: 20 }}>
            {[["12", "Posts gepland"], ["3", "In wachtrij"], ["94%", "Bereik"]].map(([val, label]) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{ fontSize: 30, color: "#ffffff", lineHeight: 1 }}
                >
                  {val}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", marginTop: 5 }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Scheduled posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {posts.map((post) => (
              <div
                key={post.day + post.time}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "9px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 9,
                    color: "#00DC93",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    minWidth: 52,
                    flexShrink: 0,
                  }}
                >
                  {post.day} {post.time}
                </span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {post.text}
                </span>
                <div style={{ width: 6, height: 6, background: "#00DC93", flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Action */}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                background: "#00DC93",
                padding: "9px 16px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span
                className="font-mono uppercase"
                style={{ fontSize: 10, color: "#0A1820", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                AI genereert →
              </span>
            </div>
            <span
              className="font-mono uppercase"
              style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}
            >
              postpilotapp.nl
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      style={{ background: "#FBFAF6", paddingTop: 64 }}
      aria-label="Hero"
    >
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px 72px",
          display: "flex",
          alignItems: "center",
          gap: 64,
          flexWrap: "wrap",
        }}
      >
        {/* Left — headline + CTAs */}
        <div style={{ flex: "1 1 440px" }}>
          <p
            className="font-mono uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "rgba(14,14,12,0.4)",
              marginBottom: 36,
            }}
          >
            — Venture Club · Zwolle
          </p>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(72px, 11vw, 168px)",
              lineHeight: 0.86,
              letterSpacing: "-0.01em",
              color: "#0E0E0C",
              marginBottom: 32,
            }}
          >
            WE BOUWEN<br />
            WAT WE<br />
            <span style={{ color: "#C8F000" }}>ZELF MISSEN.</span>
          </h1>

          <p
            className="font-sans"
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: "rgba(14,14,12,0.6)",
              marginBottom: 40,
              maxWidth: 460,
            }}
          >
            Van idee naar venture. In maximaal 6 weken.
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
              Start gesprek →
            </Link>
            <Link
              to="/ventures"
              className="font-mono font-bold uppercase inline-flex items-center hover:bg-ink hover:text-paper transition-colors"
              style={{
                border: "1.5px solid #0E0E0C",
                background: "transparent",
                color: "#0E0E0C",
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Bekijk ventures
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 52,
              paddingTop: 40,
              borderTop: "1px solid rgba(14,14,12,0.1)",
              flexWrap: "wrap",
            }}
          >
            {[
              ["4", "Ventures live"],
              ["6 wk", "Idee → launch"],
              ["2018", "Gestart in"],
            ].map(([val, label]) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{ fontSize: 40, color: "#0E0E0C", lineHeight: 1 }}
                >
                  {val}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    color: "rgba(14,14,12,0.4)",
                    letterSpacing: "0.14em",
                    marginTop: 6,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — PostPilot product frame */}
        <div
          style={{
            flex: "1 1 360px",
            maxWidth: 520,
            /* disable tilt on touch */
          }}
          className="[@media(hover:none)]:!transform-none"
        >
          <PostPilotFrame mouseX={mouse.x} mouseY={mouse.y} />

          <p
            className="font-mono uppercase"
            style={{
              fontSize: 9,
              letterSpacing: "0.12em",
              color: "rgba(14,14,12,0.28)",
              marginTop: 14,
              textAlign: "center",
            }}
          >
            Post Pilot — AI content automatisering · postpilotapp.nl
          </p>
        </div>
      </div>

      <TickerRow />
    </section>
  );
};
