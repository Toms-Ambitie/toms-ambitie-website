import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const VENTURES = [
  {
    name: 'Post Pilot',
    slug: 'post-pilot',
    tag: 'Marketing AI',
    tagline: 'AI doet je content.',
    long: 'Post Pilot ontstond toen we merkten dat onze eigen marketing-output gelimiteerd was door tijd, niet door ideeën. AI laat één persoon werken als een team. Schaalt social-content zonder dat de eigenheid verloren gaat.',
    status: 'Live',
    year: '2024',
    url: 'postpilotapp.nl',
    accent: '#00DC93',
    dark: '#0A1820',
    metrics: [['100+', 'merken'], ['10×', 'content output'], ['NL/EN/DE/FR', 'talen']],
    images: ['/photos/postpilot-new.png', '/photos/postpilot-historie.png', '/photos/postpilot-analytics.png'],
  },
  {
    name: 'Pactly',
    slug: 'pactly',
    tag: 'Legal SaaS',
    tagline: 'Contracten, zonder jurist.',
    long: 'Pactly maakt contracten opstellen en beheren eenvoudig — voor ondernemers die geen jurist op snelkiezen hebben. Snel, duidelijk, juridisch correct. NL-recht als uitgangspunt.',
    status: 'Live',
    year: '2024',
    url: 'pactly.nl',
    accent: '#CC007E',
    dark: '#1A0010',
    metrics: [['<5 min', 'tot eerste contract'], ['NL', 'juridisch'], ['AI', 'opstel-engine']],
    images: [],
  },
  {
    name: 'OAK Marketing',
    slug: 'oak-marketing',
    tag: 'Marketing bureau',
    tagline: 'Marketing voor groei-MKB.',
    long: 'OAK Marketing is geen klassiek bureau — wel een vaste kern + top-specialisten die AI inzetten waar het kan, en mensen waar het moet. Eerlijk over wat wel en niet werkt.',
    status: 'Live',
    year: '2023',
    url: 'oakmarketing.nl',
    accent: '#1B3A8A',
    dark: '#0A1228',
    metrics: [['Hybride', 'team'], ['MKB', 'focus'], ['Snel', 'execution']],
    images: [],
  },
  {
    name: 'Plug and Power',
    slug: 'plug-and-power',
    tag: 'Energy Tech',
    tagline: 'Plug erin. Power eruit.',
    long: 'Plug and Power maakt slim laden beschikbaar voor MKB en thuis. Geen ingewikkelde installatie, geen abonnementsstapels — gewoon stekker erin en klaar.',
    status: 'Live',
    year: '2024',
    url: 'plugandpower.nl',
    accent: '#FFAA00',
    dark: '#1A1408',
    metrics: [['MKB + B2C', 'markt'], ['Slim', 'load-balancing'], ['NL', 'first']],
    images: [],
  },
];

const LiveDot = ({ children = 'Actief' }: { children?: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,232,0.5)' }}>
    <span style={{ width: 7, height: 7, background: 'var(--volt)', boxShadow: '0 0 0 3px rgba(200,240,0,0.18)' }} />
    {children}
  </span>
);

const VentureSection = ({ v, index }: { v: typeof VENTURES[0]; index: number }) => {
  const flip = index % 2 === 1;
  return (
    <section
      id={v.slug}
      style={{
        background: v.dark,
        color: 'var(--wit-warm)',
        padding: '120px 0',
        borderTop: '1px solid rgba(244,241,232,0.06)',
        scrollMarginTop: 64,
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

      <div className="container-wide">
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 8, height: 8, background: v.accent }} />
            <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>VENTURE 0{index + 1} / 04 · {v.tag}</span>
          </div>
          <LiveDot>{v.status} · {v.year}</LiveDot>
        </div>

        {/* Main grid */}
        <div
          className="ventures-featured-inner"
          style={{ display: 'grid', gridTemplateColumns: flip ? '1.1fr 1.4fr' : '1.4fr 1.1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}
        >
          {/* Text */}
          <div style={{ order: flip ? 2 : 1 }}>
            <div className="display" style={{ fontSize: 'clamp(64px, 9vw, 152px)', lineHeight: 1.0, marginBottom: 48, letterSpacing: '-0.02em' }}>
              {v.name}
            </div>
            <div className="display" style={{ fontSize: 'clamp(28px, 2.8vw, 40px)', lineHeight: 1.1, color: v.accent, marginBottom: 32 }}>
              {v.tagline}
            </div>
            <p className="lead" style={{ fontSize: 22, maxWidth: 560, color: 'rgba(244,241,232,0.75)', marginBottom: 40 }}>
              {v.long}
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href={`https://${v.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: v.accent, color: v.accent === '#FFAA00' ? 'var(--inkt)' : 'var(--wit-warm)' }}
              >
                Bezoek {v.url} →
              </a>
            </div>
          </div>

          {/* Product frame */}
          <div style={{
            order: flip ? 1 : 2,
            position: 'relative',
            background: 'rgba(255,255,255,0.04)',
            padding: 20,
            border: '1px solid rgba(244,241,232,0.08)',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: v.accent }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 5, height: 5, background: v.accent }} />
                <span className="meta" style={{ color: 'rgba(244,241,232,0.6)' }}>{v.url} · LIVE</span>
              </div>
              <span className="meta" style={{ color: 'rgba(244,241,232,0.4)' }}>FIG.{index + 1}</span>
            </div>
            <div style={{ aspectRatio: '4/3', background: 'var(--wit-warm)', overflow: 'hidden' }}>
              {v.images[0] ? (
                <img
                  src={v.images[0]}
                  alt={v.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'repeating-linear-gradient(135deg, var(--papier) 0 14px, rgba(14,14,12,0.04) 14px 28px)',
                }}>
                  <span style={{ padding: '6px 12px', background: 'var(--wit-warm)', color: 'var(--inkt-60)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {v.name} platform shot
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, paddingTop: 48, borderTop: '1px solid rgba(244,241,232,0.15)' }}>
          {v.metrics.map(([n, l], mi) => (
            <div key={l} style={{ padding: `0 ${mi > 0 ? 24 : 0}px`, borderLeft: mi > 0 ? '1px solid rgba(244,241,232,0.1)' : 'none' }}>
              <div className="display" style={{ fontSize: 64, lineHeight: 0.95, color: v.accent }}>{n}</div>
              <div className="meta" style={{ marginTop: 12, color: 'rgba(244,241,232,0.6)' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Secondary screenshot row (PostPilot only) */}
        {v.images.length > 1 && (
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {v.images.slice(1, 3).map((src, si) => (
              <div key={si} style={{ background: 'rgba(255,255,255,0.04)', padding: 16, border: '1px solid rgba(244,241,232,0.08)' }}>
                <div style={{ aspectRatio: '16/10', background: 'var(--wit-warm)', overflow: 'hidden' }}>
                  <img src={src} alt={`${v.name} screen ${si + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const VenturesPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Ventures — Toms Ambitie',
      description: 'Vier eigen platformen, gebouwd vanuit echte frustratie. Post Pilot, Pactly, OAK Marketing en Plug and Power.',
      canonical: 'https://www.toms-ambitie.nl/ventures',
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '140px 0 100px' }}>
          <div className="container-wide">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>02</span>De Ventures</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Vier eigen<br />platformen.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Elke venture is ontstaan vanuit een probleem dat we zelf hadden — of waar iemand in onze directe omgeving tegenaan liep. Hieronder: wat ze doen, en waarom we ze bouwen.
            </p>

            {/* Quick-jump grid */}
            <div className="reveal responsive-4-to-2" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {VENTURES.map((v, i) => (
                <a
                  key={v.slug}
                  href={`#${v.slug}`}
                  style={{
                    display: 'block', padding: 24, border: '1px solid var(--inkt-10)',
                    background: 'var(--wit-warm)',
                    transition: 'border-color .25s, background .25s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--inkt)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--inkt-10)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                    <span style={{ width: 8, height: 8, background: v.accent }} />
                    <span className="meta">0{i + 1} / 04</span>
                  </div>
                  <div className="display" style={{ fontSize: 28, lineHeight: 0.95 }}>{v.name}</div>
                  <div className="meta" style={{ marginTop: 8 }}>{v.tag}</div>
                  <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--inkt-10)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--inkt-40)' }}>
                    Spring naar ↓
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ VENTURE SECTIONS ════════════════════════════════════ */}
        {VENTURES.map((v, i) => (
          <VentureSection key={v.slug} v={v} index={i} />
        ))}

        {/* ═══ SUB-BRANDING ════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '160px 0' }}>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>P</span>Sub-branding</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.95, marginTop: 32 }}>
              Elk venture is een eigen merk.<br /><span style={{ color: 'var(--inkt-40)' }}>Toms Ambitie is de motor.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 20 }}>
              Elke venture krijgt eigen naam, logo, kleuren en website. De verbinding met het moedermerk is subtiel maar consistent: TA-monogram in de footer, dezelfde 7-stappen werkwijze als fundament, dezelfde drive om problemen om te zetten in bedrijven.
            </p>

            <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                ['Eigen identiteit', 'Logo, kleuren, fonts. Eigen visuele taal per venture.'],
                ['Eigen website', 'Eigen domein, eigen platform, eigen go-to-market.'],
                ['TA als fundament', 'Werkwijze, principes en netwerk komen vanuit Toms Ambitie.'],
              ].map(([t, d], i) => (
                <div key={t} className="reveal" style={{ background: 'var(--papier)', padding: 28, textAlign: 'left' }}>
                  <div className="num" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--inkt-40)', marginBottom: 16 }}>0{i + 1}</div>
                  <h4 className="display" style={{ fontSize: 28, lineHeight: 0.95, marginBottom: 12 }}>{t}</h4>
                  <p className="body-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═════════════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '180px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>06</span>Venture 05</span>
            </div>
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.92, marginTop: 32 }}>
              <span>De volgende venture<br />kan vanaf jouw probleem<br />beginnen.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 22 }}>
              Heb je een probleem dat een bedrijf verdient? Of wil je mee bouwen aan een idee dat al op de plank ligt?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
              <Link to="/meebouwen" className="btn btn-volt">Start gesprek →</Link>
              <Link to="/werkwijze" className="btn-ghost">De werkwijze</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default VenturesPage;
