import { useEffect, useRef, type ElementType } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';
import {
  Zap, Users, Globe, Sparkles, Eye, Linkedin,
  FolderOpen, PiggyBank, Bell, Flag, TrendingUp,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */

type Metric = { Icon: ElementType; value: string; label: string };

type Venture = {
  name: string;
  slug: string;
  tag: string;
  statusLabel: string;
  tagline: string;
  long: string;
  status: 'Live' | 'In ontwikkeling';
  year: string;
  url: string;
  externalUrl?: string;
  accent: string;
  accentInk: string;
  bg: string;
  isLight?: boolean;
  metrics: Metric[];
  image: string;
};

const VENTURES: Venture[] = [
  {
    name: 'PostPilot',
    slug: 'post-pilot',
    tag: 'Marketing AI',
    statusLabel: 'LIVE',
    tagline: 'Van idee naar LinkedIn-post in seconden.',
    long: 'PostPilot schrijft in jouw eigen toon. Jij geeft een idee of een trigger, AI maakt er een post van die klinkt alsof jij hem zelf hebt geschreven. Plannen en publiceren gaat automatisch.',
    status: 'Live',
    year: '2024',
    url: 'postpilotapp.nl',
    externalUrl: 'postpilotapp.nl',
    accent: '#E8A640',
    accentInk: '#0E1014',
    bg: '#0E1014',
    metrics: [
      { Icon: Zap, value: 'AI content engine', label: 'automatisering' },
      { Icon: Linkedin, value: 'LinkedIn', label: 'eerste kanaal' },
      { Icon: Eye, value: 'Consistent', label: 'zichtbaar' },
    ],
    image: '/photos/postpilot-app-vandaag.webp',
  },
  {
    name: 'Pactly',
    slug: 'pactly',
    tag: 'Consumer fintech',
    statusLabel: 'IN ONTWIKKELING',
    tagline: 'Grip op contracten en abonnementen.',
    long: 'Pactly brengt al je contracten en abonnementen samen op één plek. Met slimme inzichten, tijdige herinneringen en bespaartips houd jij controle over je vaste lasten.',
    status: 'In ontwikkeling',
    year: '2024',
    url: 'pactly.nl',
    accent: '#4B519E',
    accentInk: '#FFFFFF',
    bg: '#181A2B',
    metrics: [
      { Icon: FolderOpen, value: 'overzicht', label: 'vaste lasten' },
      { Icon: PiggyBank, value: 'besparen', label: 'zonder gedoe' },
      { Icon: Bell, value: 'controle', label: 'jij beslist' },
    ],
    image: '/photos/pactly_venture_visual.webp',
  },
  {
    name: 'OAK Marketing',
    slug: 'oak-marketing',
    tag: 'Marketing bureau',
    statusLabel: 'BINNENKORT',
    tagline: 'Strategie. Branding. Groei.',
    long: 'OAK Marketing is geen bureau, maar een operator in jouw bedrijf. We verbinden strategie, data en creatie om merken te laten groeien. Tijdelijk. Doelgericht. Meetbaar.',
    status: 'Binnenkort',
    year: '2023',
    url: 'oakmarketing.nl',
    accent: '#1B3A8A',
    accentInk: '#FFFFFF',
    bg: '#0A1228',
    metrics: [
      { Icon: Users, value: 'operator', label: 'tijdelijk in je bedrijf' },
      { Icon: Sparkles, value: 'AI first', label: 'sneller bouwen' },
      { Icon: TrendingUp, value: 'MKB', label: 'groei en structuur' },
    ],
    image: '/photos/oak_marketing_venture_visual.webp',
  },
  {
    name: 'Plug and Power',
    slug: 'plug-and-power',
    tag: 'Energy Tech',
    statusLabel: 'IN ONTWIKKELING',
    tagline: 'Draagbare energie voor elke situatie.',
    long: 'Plug and Power levert slimme, betrouwbare en draagbare energie-oplossingen. Voor thuis, onderweg, op de camping of als back-up. Kracht wanneer jij het nodig hebt.',
    status: 'In ontwikkeling',
    year: '2024',
    url: 'plugandpower.nl',
    externalUrl: 'plugandpower.nl',
    accent: '#FFAA00',
    accentInk: '#0E0E0C',
    bg: '#1A1408',
    metrics: [
      { Icon: Users, value: 'MKB + B2C', label: 'markt' },
      { Icon: Zap, value: 'slim', label: 'advies' },
      { Icon: Globe, value: 'NL', label: 'startmarkt' },
    ],
    image: '/photos/plug_and_power_venture_visual.webp',
  },
  {
    name: 'EmmaBoekt',
    slug: 'emmaboekt',
    tag: 'AI assistent',
    statusLabel: 'IN ONTWIKKELING',
    tagline: 'Boekhouden via AI. Eenvoud voor ondernemers.',
    long: 'EmmaBoekt maakt boekhouden simpel. Stel je vraag. Upload je bon. Krijg direct antwoord. Zo houd jij tijd over voor wat echt telt.',
    status: 'In ontwikkeling',
    year: '2025',
    url: 'emmaboekt.nl',
    externalUrl: 'emmaboekt.nl',
    accent: '#7C3AED',
    accentInk: '#FFFFFF',
    bg: '#EDE9FF',
    isLight: true,
    metrics: [
      { Icon: Sparkles, value: 'AI first', label: 'boekhouden' },
      { Icon: Users, value: 'ZZP + MKB', label: 'doelgroep' },
      { Icon: Flag, value: 'NL', label: 'startmarkt' },
    ],
    image: '/photos/emmaboekt_venture_visual.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   VENTURE SECTION — uniform layout matching reference visuals
   Text LEFT · Image RIGHT (fills full height)
═══════════════════════════════════════════════════════════════ */

const VentureSection = ({ v, index }: { v: Venture; index: number }) => {
  const light = v.isLight ?? false;
  const onBg = light ? 'var(--inkt)' : 'var(--wit-warm)';
  const muted = light ? 'rgba(14,14,12,0.65)' : 'rgba(244,241,232,0.7)';
  const faint = light ? 'rgba(14,14,12,0.4)' : 'rgba(244,241,232,0.4)';
  const divider = light ? 'rgba(14,14,12,0.1)' : 'rgba(244,241,232,0.1)';

  return (
    <section
      id={v.slug}
      style={{
        background: v.bg,
        color: onBg,
        position: 'relative',
        borderTop: `1px solid ${light ? 'rgba(14,14,12,0.06)' : 'rgba(244,241,232,0.06)'}`,
        scrollMarginTop: 64,
      }}
    >
      {/* Accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

      {/* Header row — stays within container-wide bounds */}
      <div className="container-wide" style={{ paddingTop: 52, paddingBottom: 0 }}>
        <div className="venture-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 8, height: 8, background: v.accent, flexShrink: 0 }} />
            <span className="meta" style={{ color: faint }}>VENTURE 0{index + 1} / 05 · {v.tag}</span>
          </div>
          <Link
            to={`/ventures/${v.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--mono)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: v.accent,
              textDecoration: 'none',
              border: `1.5px solid ${v.accent}`,
              padding: '9px 18px',
              minHeight: 38,
              transition: 'background .2s, color .2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = v.accent;
              el.style.color = v.accentInk;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'transparent';
              el.style.color = v.accent;
            }}
          >
            BEKIJK VENTURE →
          </Link>
        </div>
      </div>

      {/* Main grid — 42 / 58 split, max 1440px, image fills right column */}
      <div
        className="ventures-featured-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          minHeight: 540,
          marginTop: 40,
          maxWidth: 1440,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* ── Left: text content ── */}
        <div
          className="venture-text-col"
          style={{
            paddingLeft: 32,
            paddingRight: 48,
            paddingBottom: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              border: `1px solid ${v.accent}`,
              padding: '4px 10px 4px 8px',
              marginBottom: 24,
              alignSelf: 'flex-start',
            }}
          >
            <span style={{
              width: 5, height: 5, flexShrink: 0,
              background: v.status === 'Live' ? v.accent : 'var(--oranje)',
              boxShadow: v.status === 'Live'
                ? `0 0 0 3px ${v.accent}28`
                : '0 0 0 3px rgba(255,74,0,0.18)',
            }} />
            <span
              style={{
                fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: v.accent,
              }}
            >
              {v.statusLabel}
            </span>
          </div>

          {/* Venture name */}
          <div
            className="display"
            style={{
              fontSize: 'clamp(56px, 9vw, 128px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              marginBottom: 18,
              color: onBg,
            }}
          >
            {v.name}
          </div>

          {/* Tagline — accent color, display font, uppercase */}
          <div
            className="display"
            style={{
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.1,
              color: v.accent,
              marginBottom: 28,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
            }}
          >
            {v.tagline}
          </div>

          {/* Body copy */}
          <p
            style={{
              fontFamily: 'var(--body)',
              fontSize: 15,
              lineHeight: 1.75,
              color: muted,
              marginBottom: 0,
              maxWidth: 420,
            }}
          >
            {v.long}
          </p>

          {/* Metrics — icon + value + label, 3 columns */}
          <div
            className="venture-metrics-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              paddingTop: 28,
              borderTop: `1px solid ${divider}`,
              marginTop: 'auto',
              paddingBottom: 0,
            }}
          >
            {v.metrics.map(({ Icon, value, label }, mi) => (
              <div
                key={label}
                style={{
                  paddingLeft: mi > 0 ? 16 : 0,
                  borderLeft: mi > 0 ? `1px solid ${divider}` : 'none',
                }}
              >
                <Icon
                  size={14}
                  color={v.accent}
                  style={{ display: 'block', marginBottom: 8 }}
                />
                <div
                  className="meta"
                  style={{
                    color: onBg,
                    fontSize: 10,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    marginBottom: 2,
                  }}
                >
                  {value}
                </div>
                <div
                  className="meta"
                  style={{
                    color: faint,
                    fontSize: 9,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* External URL — optional, below metrics */}
          {v.externalUrl && (
            <div style={{ marginTop: 20 }}>
              <a
                href={`https://${v.externalUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: faint, textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = v.accent; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = faint; }}
              >
                {v.externalUrl} ↗
              </a>
            </div>
          )}
        </div>

        {/* ── Right: image fills full column height ── */}
        <div className="venture-image-col" style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }}>
          <img
            src={v.image}
            alt={v.name}
            loading="lazy"
            decoding="async"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */

const VenturesPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Ventures — PostPilot, Pactly, OAK Marketing en meer | Toms Ambitie',
      description: 'Vijf eigen ventures gebouwd vanuit echte problemen. PostPilot is live (SaaS). Pactly, Plug and Power, EmmaBoekt en OAK Marketing zijn in ontwikkeling. Interesse in investeren of meebouwen?',
      canonical: 'https://www.toms-ambitie.nl/ventures',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Ventures van Toms Ambitie',
        'url': 'https://www.toms-ambitie.nl/ventures',
        'description': 'Vijf eigen ventures gebouwd vanuit echte problemen — open voor investeerders, co-founders en specialisten.',
        'isPartOf': { '@id': 'https://www.toms-ambitie.nl/#website' },
        'author': { '@id': 'https://www.toms-ambitie.nl/#tom-mulder' },
      },
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="surface-wit page-hero" style={{ padding: '140px 0 100px' }}>
          <div className="container-wide">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>02</span>De Ventures</span>
            </div>
            <h1
              className="clip-reveal display"
              style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}
            >
              <span>Waar we nu<br />aan bouwen.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Geen losse ideeën. Vijf ventures gebouwd vanuit echte frustratie, behoefte of marktkans. PostPilot is live. Pactly, Plug and Power, EmmaBoekt en OAK Marketing zijn in actieve ontwikkeling.
            </p>

            {/* Quick-jump — anchors to section IDs */}
            <div
              className="reveal ventures-jump-grid"
              style={{
                marginTop: 80,
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 12,
              }}
            >
              {VENTURES.map((v, i) => (
                <a
                  key={v.slug}
                  href={`#${v.slug}`}
                  style={{
                    display: 'block',
                    padding: '20px 20px 16px',
                    border: '1px solid var(--inkt-10)',
                    background: 'var(--wit-warm)',
                    transition: 'border-color .25s, background .25s',
                    textDecoration: 'none',
                    color: 'var(--inkt)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = v.accent;
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--papier)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--inkt-10)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--wit-warm)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ width: 8, height: 8, background: v.accent, flexShrink: 0 }} />
                    <span className="meta" style={{ color: 'var(--inkt-40)' }}>0{i + 1}</span>
                  </div>
                  <div className="display" style={{ fontSize: 22, lineHeight: 0.95, marginBottom: 4 }}>{v.name}</div>
                  <div className="meta" style={{ fontSize: 9, marginBottom: 10 }}>{v.tag}</div>
                  <div
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em',
                      textTransform: 'uppercase', color: 'var(--inkt-40)',
                    }}
                  >
                    <span style={{
                      width: 5, height: 5,
                      background: v.status === 'Live' ? 'var(--volt)' : 'var(--oranje)',
                    }} />
                    {v.status}
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
            <h2
              className="display"
              style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.95, marginTop: 32 }}
            >
              Elk venture staat op eigen benen.<br />
              <span style={{ color: 'var(--inkt-40)' }}>Toms Ambitie is de motor.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 20 }}>
              Eigen naam, eigen logo, eigen website. De link met Toms Ambitie is subtiel maar altijd aanwezig: dezelfde werkwijze, dezelfde drive, dezelfde standaard.
            </p>
            <div className="subbranding-grid" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                ['Eigen identiteit', 'Logo, kleuren, fonts. Eigen visuele taal. Eigen verhaal.'],
                ['Eigen website', 'Eigen domein. Eigen platform. Eigen go-to-market.'],
                ['TA als fundament', 'Dezelfde werkwijze en principes. Gebouwd om te groeien.'],
              ].map(([t, d], idx) => (
                <div key={t} className="reveal" style={{ background: 'var(--papier)', padding: 28, textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--inkt-40)', marginBottom: 16 }}>0{idx + 1}</div>
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
              <span className="eyebrow"><span style={{ marginRight: 8 }}>06</span>Wat volgt</span>
            </div>
            <h2
              className="clip-reveal display"
              style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.92, marginTop: 32 }}
            >
              <span>Het doel is niet<br />één succesvol bedrijf.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 22 }}>
              Het doel is een omgeving bouwen waarin ventures sneller ontstaan, getest worden en kunnen groeien. Heb je een probleem dat een bedrijf verdient? Begin daar.
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
