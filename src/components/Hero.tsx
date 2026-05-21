import { Link } from 'react-router-dom';

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed founder image · Toms Ambitie v3.1
   - Cinematic dark background with Tom Mulder (founder)
   - Gradient: dark left (text legible) → transparent right (image visible)
   - Mobile: gradient shifts to top-down, face centred in viewport
   ═══════════════════════════════════════════════════════════════ */

export const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: 'clamp(560px, 92vh, 920px)',
        overflow: 'hidden',
        background: 'var(--inkt)', /* fallback while image loads */
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      {/* ── Founder image — LCP, eager, high priority ── */}
      <img
        src="/photos/tom-founder-01.webp"
        srcSet={[
          '/photos/tom-founder-01-768.webp 768w',
          '/photos/tom-founder-01-1024.webp 1024w',
          '/photos/tom-founder-01.webp 1536w',
        ].join(', ')}
        sizes="100vw"
        alt="Tom Mulder, founder Toms Ambitie — aan het werk in het studio"
        fetchPriority="high"
        decoding="sync"
        className="hero-founder-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          /* Desktop: Tom centred, looking left toward copy */
          objectPosition: '62% center',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* ── Gradient layers — left-heavy on desktop, top-down on mobile ── */}

      {/* Primary: dark left → transparent right (desktop: text readability) */}
      <div
        aria-hidden="true"
        className="hero-gradient-left"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(14,14,12,0.96) 0%, rgba(14,14,12,0.90) 32%, rgba(14,14,12,0.65) 58%, rgba(14,14,12,0.20) 78%, rgba(14,14,12,0.02) 100%)',
        }}
      />

      {/* Secondary: subtle bottom vignette — grounds the section */}
      <div
        aria-hidden="true"
        className="hero-gradient-bottom"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(14,14,12,0.55) 0%, rgba(14,14,12,0.08) 30%, transparent 60%)',
        }}
      />

      {/* ── Content ── */}
      <div
        className="container-wide"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          /* Top padding: nav height (64px) + breathing room */
          paddingTop: 'clamp(84px, 12vh, 160px)',
          paddingBottom: 'clamp(56px, 8vh, 100px)',
        }}
      >
        {/* Eyebrow tag */}
        <div
          className="reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '8px 14px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(244,241,232,0.14)',
            marginBottom: 40,
          }}
        >
          <span style={{ width: 7, height: 7, background: 'var(--volt)', flexShrink: 0 }} />
          <span className="meta" style={{ color: 'rgba(244,241,232,0.75)' }}>
            VENTURE CLUB · ZWOLLE · 2025
          </span>
        </div>

          {/* H1 — wider so "We bouwen wat" fits on line 1 */}
          <h1
            className="clip-reveal display"
            style={{
              fontSize: 'clamp(44px, 11vw, 152px)',
              letterSpacing: '-0.02em',
              lineHeight: 0.84,
              color: 'var(--wit-warm)',
              maxWidth: 900,
            }}
          >
            <span>We bouwen wat<br />we zelf missen.</span>
          </h1>

          {/* Lead — narrower for readability */}
          <p
            className="lead reveal reveal-delay-1"
            style={{
              marginTop: 36,
              fontSize: 'clamp(17px, 1.5vw, 21px)',
              maxWidth: 520,
              color: 'rgba(244,241,232,0.76)',
              lineHeight: 1.55,
            }}
          >
            Van frustratie naar platform. In weken. Niet in jaren.
            <br /><br />
            We bouwen eigen ventures vanuit problemen die we zelf voelen.
            Eerst intern. Daarna testen. Werkt het? Dan maken we er een bedrijf van.
          </p>

          {/* CTAs */}
          <div
            className="reveal reveal-delay-2"
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 44,
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: 520,
            }}
          >
            <Link to="/ventures" className="btn btn-volt">
              Bekijk ventures →
            </Link>
            <Link
              to="/meebouwen"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--mono)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,232,0.75)',
                borderBottom: '1.5px solid rgba(244,241,232,0.35)',
                paddingBottom: 3,
                textDecoration: 'none',
                transition: 'color .2s, border-color .2s',
                whiteSpace: 'nowrap',
                minHeight: 44,
                alignSelf: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'var(--volt)';
                el.style.borderColor = 'var(--volt)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(244,241,232,0.75)';
                el.style.borderColor = 'rgba(244,241,232,0.35)';
              }}
            >
              Bouw mee
            </Link>
          </div>
      </div>

      {/* ── Founder caption — bottom right corner ── */}
      <div
        className="hero-caption"
        style={{
          position: 'absolute',
          bottom: 24,
          right: 32,
          padding: '7px 12px',
          background: 'rgba(14,14,12,0.55)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(244,241,232,0.08)',
          zIndex: 2,
        }}
      >
        <span
          className="meta"
          style={{ color: 'rgba(244,241,232,0.55)', fontSize: 9, letterSpacing: '0.16em' }}
        >
          TOM MULDER · FOUNDER · TOMS AMBITIE
        </span>
      </div>

    </section>
  );
};
