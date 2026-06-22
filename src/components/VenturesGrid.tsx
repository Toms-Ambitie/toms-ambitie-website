import { Link } from 'react-router-dom';

const VENTURES = [
  {
    name: 'PostPilot',
    slug: 'post-pilot',
    tag: 'Marketing AI',
    tagline: 'AI doet je content.',
    desc: 'AI-gestuurde LinkedIn content. Van idee naar post in seconden. Schrijft in jouw eigen toon.',
    status: 'Live',
    year: '2024',
    url: 'postpilotapp.nl',
    accent: '#E8A640',
    dark: '#0E1014',
  },
  {
    name: 'Plug and Power',
    slug: 'plug-and-power',
    tag: 'Energy Tech',
    tagline: 'Plug erin. Power eruit.',
    desc: 'Slim opladen voor MKB en thuis. Stekker erin, klaar.',
    status: 'In ontwikkeling',
    year: '2024',
    url: 'plugandpower.nl',
    accent: '#FFAA00',
    dark: '#1A1408',
  },
  {
    name: 'EmmaBoekt',
    slug: 'emmaboekt',
    tag: 'AI assistent',
    tagline: 'Planning zonder gedoe.',
    desc: 'AI-gestuurde planning en administratie voor zelfstandigen en kleine teams. Slimmer werken, minder rompslomp.',
    status: 'In ontwikkeling',
    year: '2025',
    url: 'emmaboekt.nl',
    accent: '#9333EA',
    dark: '#0F0A1E',
  },
];

const LiveDot = ({ children = 'Actief', isLive = true }: { children?: string; isLive?: boolean }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--inkt-60)' }}>
    <span style={{
      width: 7, height: 7,
      background: isLive ? 'var(--volt)' : 'var(--oranje)',
      boxShadow: isLive ? '0 0 0 3px rgba(200,240,0,0.18)' : '0 0 0 3px rgba(255,74,0,0.18)',
    }} />
    {children}
  </span>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 12px',
    background: 'var(--volt)', color: 'var(--inkt)',
    fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
  }}>{children}</span>
);

export const VenturesGrid = () => {
  const featured = VENTURES[0];
  const secondary = VENTURES.slice(1);

  return (
    <section className="surface-papier" style={{ padding: '160px 0' }}>
      <div className="container-wide">

        {/* Section header */}
        <div style={{ marginBottom: 80, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span className="volt-dot" />
            <span className="eyebrow"><span style={{ marginRight: 8 }}>01</span>De Ventures</span>
          </div>
          <h2 className="h2 reveal" style={{ marginTop: 24, maxWidth: 1100, marginInline: 'auto' }}>
            Drie eigen ventures.<br />
            <span style={{ color: 'var(--inkt-40)' }}>Allemaal vanuit echte frustratie ontstaan.</span>
          </h2>
        </div>

        {/* Featured: Post Pilot */}
        <Link
          to={`/ventures#${featured.slug}`}
          className="reveal"
          style={{
            display: 'block',
            background: featured.dark,
            color: 'var(--wit-warm)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 16,
            transition: 'transform .35s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
        >
          {/* Accent top bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: featured.accent }} />

          <div
            className="ventures-featured-inner"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 0, minHeight: 560 }}
          >
            {/* Left: info */}
            <div className="ventures-featured-text" style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <Tag>VENTURE 01 · FEATURED</Tag>
                </div>
                <div className="meta" style={{ color: 'rgba(244,241,232,0.5)', marginBottom: 12 }}>{featured.tag}</div>
                <div className="display" style={{ fontSize: 'clamp(72px, 7vw, 120px)', lineHeight: 0.86, marginBottom: 24 }}>
                  {featured.name}
                </div>
                <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 24, color: featured.accent, fontFamily: 'var(--display)', textTransform: 'uppercase' }}>
                  {featured.tagline}
                </div>
                <p className="body-lg" style={{ maxWidth: 440, color: 'rgba(244,241,232,0.7)' }}>
                  {featured.desc}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(244,241,232,0.15)' }}>
                <LiveDot isLive={featured.status === 'Live'}>{featured.status} · {featured.year}</LiveDot>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: featured.accent }}>
                  Bekijk {featured.url} <span style={{ width: 24, height: 1, background: featured.accent, display: 'inline-block' }} /> →
                </span>
              </div>
            </div>

            {/* Right: screenshot */}
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--inkt)' }}>
              <img
                src="/photos/postpilot-app-vandaag.webp"
                alt="PostPilot — AI content platform voor LinkedIn"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
              />
            </div>
          </div>
        </Link>

        {/* 3-up grid */}
        <div
          className="ventures-grid-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}
        >
          {secondary.map((v) => (
            <Link
              key={v.slug}
              to={`/ventures#${v.slug}`}
              className="reveal"
              style={{
                display: 'block',
                background: 'var(--wit-warm)',
                border: '1px solid var(--inkt-10)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color .25s, transform .25s',
                minHeight: 480,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'var(--inkt-40)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'var(--inkt-10)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: v.accent }} />

              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="meta">{v.tag}</span>
                  <LiveDot isLive={v.status === 'Live'}>{v.status === 'Live' ? 'Live' : 'In ontwikkeling'}</LiveDot>
                </div>
                <div className="display" style={{ fontSize: 48, lineHeight: 0.92, marginTop: 32, marginBottom: 12 }}>
                  {v.name}
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 24, lineHeight: 1, color: v.accent, marginBottom: 20, textTransform: 'uppercase' }}>
                  {v.tagline}
                </div>
                <p className="body-sm" style={{ marginBottom: 'auto' }}>{v.desc}</p>
                <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid var(--inkt-10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="meta">{v.url}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 20, color: 'var(--inkt-40)' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA link */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link to="/ventures" className="btn-link">Alle ventures bekijken →</Link>
        </div>

      </div>
    </section>
  );
};
