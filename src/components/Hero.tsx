import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroProductFrame = () => {
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const r = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    frameRef.current.style.transform = `perspective(1200px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (frameRef.current) frameRef.current.style.transform = '';
  };

  return (
    <div
      className="reveal reveal-delay-3"
      style={{ position: 'relative' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={frameRef}
        className="parallax-frame"
        style={{
          position: 'relative',
          background: 'var(--inkt)',
          padding: 20,
          border: '1px solid rgba(244,241,232,0.1)',
        }}
      >
        {/* Volt top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--volt)' }} />

        {/* Frame header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 6, height: 6, background: 'var(--volt)' }} />
            <span className="meta" style={{ color: 'rgba(244,241,232,0.6)' }}>FIG.01 · POST PILOT · LIVE</span>
          </div>
          <span className="meta" style={{ color: 'rgba(244,241,232,0.4)' }}>VENTURE 01/04</span>
        </div>

        {/* Video */}
        <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--wit-warm)', position: 'relative' }}>
          <video
            src="/videos/postpilot-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/photos/postpilot-analytics.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        </div>
      </div>

      {/* Badge */}
      <div style={{
        position: 'absolute',
        top: -20,
        right: -20,
        background: 'var(--volt)',
        color: 'var(--inkt)',
        padding: '10px 16px',
      }}>
        <span className="meta" style={{ color: 'var(--inkt)' }}>★ NIEUW · 2024</span>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="surface-wit" style={{ padding: '140px 0 120px', position: 'relative' }}>
      <div className="container-wide">
        <div
          className="hero-two-col"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
        >
          {/* Left */}
          <div>
            <div
              className="reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 14px',
                background: 'var(--inkt-05)',
                marginBottom: 40,
              }}
            >
              <span style={{ width: 7, height: 7, background: 'var(--volt)' }} />
              <span className="meta">VENTURE CLUB · ZWOLLE · 2025</span>
            </div>

            <h1
              className="clip-reveal display"
              style={{ fontSize: 'clamp(72px, 9vw, 152px)', letterSpacing: '-0.02em', lineHeight: 0.84 }}
            >
              <span>We bouwen wat<br />we zelf missen.</span>
            </h1>

            <p
              className="lead reveal reveal-delay-1"
              style={{ marginTop: 40, fontSize: 22, maxWidth: 540 }}
            >
              Een venture club die problemen omzet in bedrijven. Vier eigen platformen, gebouwd vanuit echte eigen ervaring — met AI als versneller.
            </p>

            <div
              className="reveal reveal-delay-2"
              style={{ display: 'flex', gap: 16, marginTop: 48, alignItems: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/ventures" className="btn">Onze ventures →</Link>
              <Link to="/werkwijze" className="btn-link">Hoe we bouwen</Link>
            </div>
          </div>

          {/* Right — PostPilot frame */}
          <HeroProductFrame />
        </div>
      </div>
    </section>
  );
};
