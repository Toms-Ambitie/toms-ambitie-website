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
    long: 'Zichtbaar willen zijn maar geen tijd hebben voor content. Dat kennen we. Post Pilot laat AI het werk doen, zonder dat het klinkt als AI. Jouw toon. Jouw ideeën. Schaalbaar naar meerdere kanalen.',
    status: 'Live',
    year: '2024',
    url: 'postpilotapp.nl',
    externalUrl: 'postpilotapp.nl',
    accent: '#00DC93',
    dark: '#0A1820',
    metrics: [['AI content engine', 'automatiseert teksten'], ['LinkedIn', 'eerste kanaal'], ['Consistent', 'zichtbaar']],
    images: ['/photos/postpilot-new.png', '/photos/postpilot-historie.png', '/photos/postpilot-analytics.png'],
  },
  {
    name: 'Pactly',
    slug: 'pactly',
    tag: 'Consumer fintech',
    tagline: 'Grip op je vaste lasten.',
    long: 'Energie, telecom, verzekeringen, abonnementen. Vaste lasten die stilletjes doorlopen. De meeste mensen weten niet wat ze betalen, wanneer iets afloopt of waar ze geld laten liggen. Pactly brengt overzicht, helpt besparen en laat jou beslissen.',
    status: 'In ontwikkeling',
    year: '2024',
    url: 'pactly.nl',
    accent: '#CC007E',
    dark: '#1A0010',
    metrics: [['overzicht', 'vaste lasten'], ['besparen', 'zonder gedoe'], ['controle', 'jij beslist']],
    images: ['/photos/pactly_venture_visual.png'],
  },
  {
    name: 'OAK Marketing',
    slug: 'oak-marketing',
    tag: 'Marketing bureau',
    tagline: 'Marketing voor groei-MKB.',
    long: 'OAK stapt tijdelijk in als operator. Geen bureau dat campagnes draait en vertrekt. Wij bouwen systemen, implementeren AI en maken marketing volwassen. Daarna kan een bedrijf zelf verder.',
    status: 'Live',
    year: '2023',
    url: 'oakmarketing.nl',
    accent: '#1B3A8A',
    dark: '#0A1228',
    metrics: [['operator', 'tijdelijk in je bedrijf'], ['AI first', 'sneller bouwen'], ['MKB', 'groei en structuur']],
    images: ['/photos/oak_marketing_venture_visual.png'],
  },
  {
    name: 'Plug and Power',
    slug: 'plug-and-power',
    tag: 'Energy Tech',
    tagline: 'Plug erin. Power eruit.',
    long: 'Traditionele installateurs snappen e-commerce niet. Consumenten willen gewoon stekker erin en klaar. Plug and Power brengt slim laden naar MKB en thuis. Geen gedoe. Plug and play.',
    status: 'In ontwikkeling',
    year: '2024',
    url: 'plugandpower.nl',
    externalUrl: 'plugandpower.nl',
    accent: '#FFAA00',
    dark: '#1A1408',
    metrics: [['MKB + B2C', 'markt'], ['slim', 'advies'], ['NL', 'startmarkt']],
    images: ['/photos/plug_and_power_venture_visual.png'],
  },
  {
    name: 'EmmaBoekt',
    slug: 'emmaboekt',
    tag: 'AI assistent',
    tagline: 'Boekhouden zonder gedoe.',
    long: 'Zelfstandigen zijn te veel tijd kwijt aan administratie. Factureren, bonnetjes, overzicht bijhouden. EmmaBoekt neemt dat over met AI. Geen software leren. Gewoon vragen. En het is geregeld.',
    status: 'In ontwikkeling',
    year: '2025',
    url: 'emmaboekt.nl',
    externalUrl: 'emmaboekt.nl',
    accent: '#9333EA',
    dark: '#0F0A1E',
    metrics: [['AI first', 'boekhouden'], ['ZZP + MKB', 'doelgroep'], ['NL', 'startmarkt']],
    images: ['/photos/emmaboekt_venture_visual.png'],
  },
];

type Venture = typeof VENTURES[number];

const LiveDot = ({ children = 'Actief', isLive = true }: { children?: string; isLive?: boolean }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,232,0.5)' }}>
    <span style={{
      width: 7, height: 7,
      background: isLive ? 'var(--volt)' : 'var(--oranje)',
      boxShadow: isLive ? '0 0 0 3px rgba(200,240,0,0.18)' : '0 0 0 3px rgba(255,74,0,0.18)',
    }} />
    {children}
  </span>
);

/* ═══════════════════════════════════════════════════════════════
   LAYOUT 01 — POST PILOT
   SaaS maker feel: text left, raw screenshot right, strip below
═══════════════════════════════════════════════════════════════ */
const PostPilotSection = ({ v }: { v: Venture }) => (
  <section
    id={v.slug}
    style={{
      background: v.dark,
      color: 'var(--wit-warm)',
      padding: '100px 0 0',
      borderTop: '1px solid rgba(244,241,232,0.06)',
      scrollMarginTop: 64,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

    <div className="container-wide">
      {/* Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 8, height: 8, background: v.accent }} />
          <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>VENTURE 01 / 05 · {v.tag}</span>
        </div>
        <LiveDot isLive>{v.status} · {v.year}</LiveDot>
      </div>

      {/* Main: text left | screenshot right */}
      <div className="ventures-featured-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'flex-start' }}>
        {/* Text */}
        <div>
          <div className="display" style={{ fontSize: 'clamp(64px, 9vw, 136px)', lineHeight: 0.92, letterSpacing: '-0.02em', marginBottom: 32 }}>
            {v.name}
          </div>
          <div className="display" style={{ fontSize: 'clamp(22px, 2.2vw, 34px)', lineHeight: 1.1, color: v.accent, marginBottom: 28 }}>
            {v.tagline}
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(244,241,232,0.7)', marginBottom: 36, fontFamily: 'var(--body)', maxWidth: 420 }}>
            {v.long}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to={`/ventures/${v.slug}`}
              className="btn"
              style={{ background: v.accent, color: 'var(--inkt)', textDecoration: 'none' }}
            >
              Bekijk venture →
            </Link>
            {v.externalUrl && (
              <a
                href={`https://${v.externalUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,232,0.4)', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.85)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.4)'; }}
              >
                {v.externalUrl} ↗
              </a>
            )}
          </div>
        </div>

        {/* Raw screenshot — no browser chrome, accent border top */}
        <div style={{ position: 'relative' }}>
          <div style={{
            border: '1px solid rgba(0,220,147,0.15)',
            borderTop: `3px solid ${v.accent}`,
            overflow: 'hidden',
            background: 'rgba(0,220,147,0.03)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid rgba(0,220,147,0.1)' }}>
              <span style={{ width: 5, height: 5, background: v.accent, opacity: 0.8 }} />
              <span className="meta" style={{ color: 'rgba(244,241,232,0.35)', fontSize: 9 }}>{v.url} · LIVE</span>
            </div>
            <img
              src={v.images[0]}
              alt={v.name}
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        marginTop: 64,
        paddingTop: 40,
        paddingBottom: 40,
        borderTop: '1px solid rgba(244,241,232,0.12)',
      }}>
        {v.metrics.map(([n, l], mi) => (
          <div key={l} style={{ paddingLeft: mi > 0 ? 32 : 0, borderLeft: mi > 0 ? '1px solid rgba(244,241,232,0.1)' : 'none' }}>
            <div className="display" style={{ fontSize: 'clamp(24px, 3vw, 44px)', lineHeight: 0.95, color: v.accent }}>{n}</div>
            <div className="meta" style={{ marginTop: 10, color: 'rgba(244,241,232,0.5)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Secondary screenshots — flush to bottom */}
    {v.images.length > 1 && (
      <div className="container-wide" style={{ paddingBottom: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {v.images.slice(1, 3).map((src, si) => (
            <div key={si} style={{ border: '1px solid rgba(0,220,147,0.08)', overflow: 'hidden' }}>
              <img
                src={src}
                alt={`${v.name} screen ${si + 2}`}
                style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', aspectRatio: '16/9' }}
              />
            </div>
          ))}
        </div>
      </div>
    )}
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   LAYOUT 02 — PACTLY
   Consumer fintech: tall portrait image left, text stack right
═══════════════════════════════════════════════════════════════ */
const PactlySection = ({ v }: { v: Venture }) => (
  <section
    id={v.slug}
    style={{
      background: v.dark,
      color: 'var(--wit-warm)',
      borderTop: '1px solid rgba(244,241,232,0.06)',
      scrollMarginTop: 64,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

    <div className="ventures-featured-inner" style={{ display: 'grid', gridTemplateColumns: '0.75fr 1.25fr' }}>
      {/* Left: portrait image full-height column */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}>
        <img
          src={v.images[0]}
          alt={v.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', position: 'absolute', inset: 0 }}
        />
        {/* Fade right into dark */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
          background: `linear-gradient(to right, transparent, ${v.dark})`,
        }} />
        {/* Accent bar right edge */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 3, height: '100%', background: v.accent, opacity: 0.6 }} />
      </div>

      {/* Right: text content */}
      <div style={{ padding: 'clamp(48px, 7vw, 100px) clamp(32px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 8, height: 8, background: v.accent }} />
            <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>VENTURE 02 / 05 · {v.tag}</span>
          </div>
          <LiveDot isLive={false}>{v.status} · {v.year}</LiveDot>
        </div>

        <div className="display" style={{ fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.92, letterSpacing: '-0.02em', marginBottom: 20 }}>
          {v.name}
        </div>
        <div className="display" style={{ fontSize: 'clamp(20px, 2vw, 32px)', lineHeight: 1.1, color: v.accent, marginBottom: 24 }}>
          {v.tagline}
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(244,241,232,0.7)', marginBottom: 36, fontFamily: 'var(--body)', maxWidth: 500 }}>
          {v.long}
        </p>

        {/* Metric pills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 36 }}>
          {v.metrics.map(([n, l]) => (
            <div key={l} style={{
              padding: '14px 16px',
              border: `1px solid rgba(204,0,126,0.22)`,
              background: 'rgba(204,0,126,0.07)',
            }}>
              <div className="display" style={{ fontSize: 20, color: v.accent, lineHeight: 1 }}>{n}</div>
              <div className="meta" style={{ marginTop: 6, color: 'rgba(244,241,232,0.45)', fontSize: 9 }}>{l}</div>
            </div>
          ))}
        </div>

        <div>
          <Link
            to={`/ventures/${v.slug}`}
            className="btn"
            style={{ background: v.accent, color: 'var(--wit-warm)', textDecoration: 'none' }}
          >
            Bekijk venture →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   LAYOUT 03 — OAK MARKETING
   Editorial agency: full-width image banner top, 2-col text below
═══════════════════════════════════════════════════════════════ */
const OAKSection = ({ v }: { v: Venture }) => (
  <section
    id={v.slug}
    style={{
      background: v.dark,
      color: 'var(--wit-warm)',
      borderTop: '1px solid rgba(244,241,232,0.06)',
      scrollMarginTop: 64,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

    {/* Top: editorial image banner full width */}
    <div style={{ position: 'relative', height: 'clamp(280px, 38vw, 500px)', overflow: 'hidden' }}>
      <img
        src={v.images[0]}
        alt={v.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
      />
      {/* Bottom gradient fade into section bg */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
        background: `linear-gradient(to top, ${v.dark} 0%, transparent 100%)`,
      }} />
      {/* Eyebrow overlay */}
      <div className="container-wide" style={{ position: 'absolute', top: 32, left: 0, right: 0, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 8, height: 8, background: v.accent }} />
            <span className="meta" style={{ color: 'rgba(244,241,232,0.7)' }}>VENTURE 03 / 05 · {v.tag}</span>
          </div>
          <LiveDot isLive>{v.status} · {v.year}</LiveDot>
        </div>
      </div>
    </div>

    {/* Bottom: editorial 2-col */}
    <div className="container-wide" style={{ paddingTop: 40, paddingBottom: 100 }}>
      <div className="ventures-featured-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
        {/* Left: big display title */}
        <div>
          <div className="display" style={{ fontSize: 'clamp(60px, 8vw, 128px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}>
            {v.name}
          </div>
          <div className="display" style={{ fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: 1.1, color: v.accent, marginTop: 20 }}>
            {v.tagline}
          </div>
        </div>

        {/* Right: copy + metrics + CTA */}
        <div style={{ paddingTop: 8 }}>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: 'rgba(244,241,232,0.72)', marginBottom: 40, fontFamily: 'var(--body)' }}>
            {v.long}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, paddingTop: 28, borderTop: '1px solid rgba(244,241,232,0.12)', marginBottom: 36 }}>
            {v.metrics.map(([n, l], mi) => (
              <div key={l} style={{ paddingLeft: mi > 0 ? 20 : 0, borderLeft: mi > 0 ? '1px solid rgba(244,241,232,0.1)' : 'none' }}>
                <div className="display" style={{ fontSize: 26, color: v.accent, lineHeight: 1 }}>{n}</div>
                <div className="meta" style={{ marginTop: 6, color: 'rgba(244,241,232,0.5)', fontSize: 9 }}>{l}</div>
              </div>
            ))}
          </div>
          <Link
            to={`/ventures/${v.slug}`}
            className="btn"
            style={{ background: v.accent, color: 'var(--wit-warm)', textDecoration: 'none' }}
          >
            Bekijk venture →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   LAYOUT 04 — PLUG AND POWER
   Lifestyle energy: image fills left half edge-to-edge, text right
═══════════════════════════════════════════════════════════════ */
const PlugPowerSection = ({ v }: { v: Venture }) => (
  <section
    id={v.slug}
    style={{
      background: v.dark,
      color: 'var(--wit-warm)',
      borderTop: '1px solid rgba(244,241,232,0.06)',
      scrollMarginTop: 64,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />

    {/* Split: no container wrapper — full-bleed grid */}
    <div className="ventures-featured-inner" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', minHeight: 640 }}>
      {/* Left: full-bleed image column */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        <img
          src={v.images[0]}
          alt={v.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block', position: 'absolute', inset: 0,
          }}
        />
        {/* Fade right edge into section dark */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '35%', height: '100%',
          background: `linear-gradient(to right, transparent, ${v.dark})`,
        }} />
      </div>

      {/* Right: text content, padded */}
      <div style={{ padding: 'clamp(60px, 7vw, 100px) clamp(32px, 5vw, 72px) clamp(60px, 7vw, 100px) clamp(16px, 2vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 8, height: 8, background: v.accent }} />
            <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>VENTURE 04 / 05 · {v.tag}</span>
          </div>
          <LiveDot isLive={false}>{v.status} · {v.year}</LiveDot>
        </div>

        <div className="display" style={{ fontSize: 'clamp(52px, 6.5vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.02em', marginBottom: 20 }}>
          {v.name}
        </div>
        <div className="display" style={{ fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: 1.1, color: v.accent, marginBottom: 24 }}>
          {v.tagline}
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(244,241,232,0.7)', marginBottom: 32, fontFamily: 'var(--body)' }}>
          {v.long}
        </p>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, paddingTop: 24, borderTop: '1px solid rgba(244,241,232,0.12)', marginBottom: 32 }}>
          {v.metrics.map(([n, l], mi) => (
            <div key={l} style={{ paddingLeft: mi > 0 ? 16 : 0, borderLeft: mi > 0 ? '1px solid rgba(244,241,232,0.1)' : 'none' }}>
              <div className="display" style={{ fontSize: 22, color: v.accent, lineHeight: 1 }}>{n}</div>
              <div className="meta" style={{ marginTop: 6, color: 'rgba(244,241,232,0.5)', fontSize: 9 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            to={`/ventures/${v.slug}`}
            className="btn"
            style={{ background: v.accent, color: 'var(--inkt)', textDecoration: 'none' }}
          >
            Bekijk venture →
          </Link>
          {v.externalUrl && (
            <a
              href={`https://${v.externalUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,232,0.4)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.85)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.4)'; }}
            >
              {v.externalUrl} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   LAYOUT 05 — EMMABOEKT
   Clean AI: centered text, image below with purple glow
═══════════════════════════════════════════════════════════════ */
const EmmaBoektSection = ({ v }: { v: Venture }) => (
  <section
    id={v.slug}
    style={{
      background: v.dark,
      color: 'var(--wit-warm)',
      padding: '100px 0 120px',
      borderTop: '1px solid rgba(244,241,232,0.06)',
      scrollMarginTop: 64,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: v.accent }} />
    {/* Ambient glow */}
    <div style={{
      position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
      width: '80vw', height: '60vh',
      background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.14) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />

    <div className="container-wide" style={{ position: 'relative' }}>
      {/* Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 8, height: 8, background: v.accent }} />
          <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>VENTURE 05 / 05 · {v.tag}</span>
        </div>
        <LiveDot isLive={false}>{v.status} · {v.year}</LiveDot>
      </div>

      {/* Centered content block */}
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div className="display" style={{ fontSize: 'clamp(72px, 10vw, 152px)', lineHeight: 0.92, letterSpacing: '-0.02em', marginBottom: 24 }}>
          {v.name}
        </div>
        <div className="display" style={{ fontSize: 'clamp(22px, 2.2vw, 34px)', lineHeight: 1.1, color: v.accent, marginBottom: 24 }}>
          {v.tagline}
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(244,241,232,0.7)', marginBottom: 36, fontFamily: 'var(--body)' }}>
          {v.long}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to={`/ventures/${v.slug}`}
            className="btn"
            style={{ background: v.accent, color: 'var(--wit-warm)', textDecoration: 'none' }}
          >
            Bekijk venture →
          </Link>
          {v.externalUrl && (
            <a
              href={`https://${v.externalUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,232,0.4)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.85)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.4)'; }}
            >
              {v.externalUrl} ↗
            </a>
          )}
        </div>
      </div>

      {/* Image — centered with purple border glow */}
      <div style={{ maxWidth: 860, margin: '64px auto 0', position: 'relative' }}>
        <div style={{ border: '1px solid rgba(147,51,234,0.25)', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: v.accent }} />
          <img
            src={v.images[0]}
            alt={v.name}
            style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', aspectRatio: '16/9' }}
          />
        </div>
      </div>

      {/* Metrics centered */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, paddingTop: 48, borderTop: '1px solid rgba(244,241,232,0.12)', marginTop: 64 }}>
        {v.metrics.map(([n, l], mi) => (
          <div key={l} style={{
            textAlign: 'center',
            paddingLeft: mi > 0 ? 24 : 0,
            borderLeft: mi > 0 ? '1px solid rgba(244,241,232,0.1)' : 'none',
          }}>
            <div className="display" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', lineHeight: 0.95, color: v.accent }}>{n}</div>
            <div className="meta" style={{ marginTop: 12, color: 'rgba(244,241,232,0.55)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
const VenturesPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Ventures — Toms Ambitie',
      description: 'Vijf actieve ventures, gebouwd vanuit echte frustratie. Post Pilot, Pactly, OAK Marketing, Plug and Power en EmmaBoekt.',
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
              <span>Waar we nu<br />aan bouwen.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Geen losse ideeën. Vijf ventures gebouwd vanuit echte frustratie, behoefte of marktkans. Post Pilot en OAK Marketing zijn live. Pactly, Plug and Power en EmmaBoekt zijn in actieve ontwikkeling.
            </p>

            {/* Quick-jump grid */}
            <div className="reveal responsive-4-to-2" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
              {VENTURES.map((v, i) => (
                <a
                  key={v.slug}
                  href={`#${v.slug}`}
                  style={{
                    display: 'block', padding: 24, border: '1px solid var(--inkt-10)',
                    background: 'var(--wit-warm)',
                    transition: 'border-color .25s',
                    textDecoration: 'none', color: 'var(--inkt)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--inkt)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--inkt-10)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                    <span style={{ width: 8, height: 8, background: v.accent }} />
                    <span className="meta">0{i + 1} / 05</span>
                  </div>
                  <div className="display" style={{ fontSize: 24, lineHeight: 0.95 }}>{v.name}</div>
                  <div className="meta" style={{ marginTop: 6 }}>{v.tag}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--inkt-40)' }}>
                    <span style={{ width: 5, height: 5, background: v.status === 'Live' ? 'var(--volt)' : 'var(--oranje)' }} />
                    {v.status}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ VENTURE SECTIONS ════════════════════════════════════ */}
        <PostPilotSection v={VENTURES[0]} />
        <PactlySection v={VENTURES[1]} />
        <OAKSection v={VENTURES[2]} />
        <PlugPowerSection v={VENTURES[3]} />
        <EmmaBoektSection v={VENTURES[4]} />

        {/* ═══ SUB-BRANDING ════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '160px 0' }}>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>P</span>Sub-branding</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.95, marginTop: 32 }}>
              Elk venture staat op eigen benen.<br /><span style={{ color: 'var(--inkt-40)' }}>Toms Ambitie is de motor.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 20 }}>
              Eigen naam, eigen logo, eigen website. De link met Toms Ambitie is subtiel maar altijd aanwezig: dezelfde werkwijze, dezelfde drive, dezelfde standaard.
            </p>

            <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                ['Eigen identiteit', 'Logo, kleuren, fonts. Eigen visuele taal. Eigen verhaal.'],
                ['Eigen website', 'Eigen domein. Eigen platform. Eigen go-to-market.'],
                ['TA als fundament', 'Dezelfde werkwijze en principes. Gebouwd om te groeien.'],
              ].map(([t, d], idx) => (
                <div key={t} className="reveal" style={{ background: 'var(--papier)', padding: 28, textAlign: 'left' }}>
                  <div className="num" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--inkt-40)', marginBottom: 16 }}>0{idx + 1}</div>
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
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.92, marginTop: 32 }}>
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
