import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';
import { POSTS, type Post } from '@/data/posts';

const FILTER_LABELS = ['Alles', 'Ventures', 'Origin stories', 'Updates', 'Lessen'];

const STATUS_COLORS: Record<string, string> = {
  'Origin story': 'var(--volt)',
  'Venture update': 'var(--volt)',
  'Les geleerd': 'var(--oranje)',
  'Beslissing': 'var(--inkt)',
  'Experiment': 'var(--inkt-60)',
  'Achter de schermen': 'var(--inkt-60)',
};

const StatusPill = ({ label }: { label: string }) => {
  const color = STATUS_COLORS[label] ?? 'var(--inkt-40)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 10px',
      border: `1px solid ${color}`,
      color,
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ width: 5, height: 5, background: color, flexShrink: 0 }} />
      {label}
    </span>
  );
};

const FeaturedCard = ({ post }: { post: Post }) => {
  if (post.cover) {
    // Image + text split layout
    return (
      <Link
        to={`/nieuws/${post.slug}`}
        className="reveal"
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          background: 'var(--inkt)', color: 'var(--wit-warm)',
          position: 'relative', textDecoration: 'none',
          transition: 'transform .3s',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--volt)', zIndex: 2 }} />
        <div style={{ overflow: 'hidden' }}>
          <img
            src={post.cover}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        </div>
        <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'var(--volt)', color: 'var(--inkt)', fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                UITGELICHT
              </span>
              {post.statusLabel && <StatusPill label={post.statusLabel} />}
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>{post.date}</span>
              {post.venture && (
                <>
                  <span style={{ color: 'rgba(244,241,232,0.3)' }}>·</span>
                  <span className="meta" style={{ color: 'var(--volt)' }}>{post.venture}</span>
                </>
              )}
              <span style={{ color: 'rgba(244,241,232,0.3)' }}>·</span>
              <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>{post.read} lezen</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 0.95, marginBottom: 24 }}>
              {post.title}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(244,241,232,0.7)', maxWidth: 460 }}>
              {post.lead}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(244,241,232,0.15)', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--volt)' }}>
            <span>Lees artikel</span>
            <span style={{ width: 32, height: 1, background: 'var(--volt)', display: 'inline-block' }} />
            <span>→</span>
          </div>
        </div>
      </Link>
    );
  }

  // Pure typographic featured card (no image)
  return (
    <Link
      to={`/nieuws/${post.slug}`}
      className="reveal"
      style={{
        display: 'block',
        background: 'var(--inkt)', color: 'var(--wit-warm)',
        position: 'relative', textDecoration: 'none',
        padding: '64px 56px',
        transition: 'transform .3s',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--volt)' }} />

      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ padding: '6px 12px', background: 'var(--volt)', color: 'var(--inkt)', fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            UITGELICHT
          </span>
          {post.statusLabel && <StatusPill label={post.statusLabel} />}
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="meta" style={{ color: 'rgba(244,241,232,0.4)' }}>{post.date}</span>
          {post.venture && (
            <>
              <span style={{ color: 'rgba(244,241,232,0.2)' }}>·</span>
              <span className="meta" style={{ color: 'rgba(244,241,232,0.6)' }}>{post.venture}</span>
            </>
          )}
          <span style={{ color: 'rgba(244,241,232,0.2)' }}>·</span>
          <span className="meta" style={{ color: 'rgba(244,241,232,0.4)' }}>{post.read} lezen</span>
        </div>
      </div>

      {/* Big title */}
      <h2 className="display" style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.88, maxWidth: '90%', marginBottom: 40 }}>
        {post.title}
      </h2>

      {/* Lead */}
      <p style={{ fontSize: 20, lineHeight: 1.55, maxWidth: 600, color: 'rgba(244,241,232,0.65)', marginBottom: 56 }}>
        {post.lead}
      </p>

      {/* Bottom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24, borderTop: '1px solid rgba(244,241,232,0.15)', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--volt)' }}>
        <span>Lees artikel</span>
        <span style={{ width: 32, height: 1, background: 'var(--volt)', display: 'inline-block' }} />
        <span>→</span>
      </div>
    </Link>
  );
};

const ArticleCard = ({ post }: { post: Post }) => (
  <Link
    to={`/nieuws/${post.slug}`}
    className="reveal"
    style={{
      display: 'flex', flexDirection: 'column',
      background: 'var(--wit-warm)',
      border: '1px solid var(--inkt-10)',
      position: 'relative',
      textDecoration: 'none', color: 'var(--inkt)',
      transition: 'transform .25s, border-color .25s',
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.transform = 'translateY(-4px)';
      el.style.borderColor = 'var(--inkt-30)';
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.transform = 'translateY(0)';
      el.style.borderColor = 'var(--inkt-10)';
    }}
  >
    {/* Volt top bar */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--volt)' }} />

    {/* Cover image — only if truly unique */}
    {post.cover && (
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--papier)' }}>
        <img
          src={post.cover}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      </div>
    )}

    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
      {/* Date + status pill */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <span className="meta" style={{ color: 'var(--inkt-40)' }}>{post.date}</span>
        {post.statusLabel && <StatusPill label={post.statusLabel} />}
      </div>

      {/* Venture */}
      {post.venture && (
        <span className="meta" style={{ color: 'var(--inkt-60)', marginBottom: 8 }}>{post.venture}</span>
      )}

      {/* Title */}
      <h3 className="display" style={{ fontSize: 28, lineHeight: 0.95, marginBottom: 16 }}>
        {post.title}
      </h3>

      {/* Lead excerpt */}
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--inkt-60)', marginBottom: 'auto', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {post.lead}
      </p>

      {/* Footer */}
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--inkt-10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--inkt-60)' }}>
          Lees artikel
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--inkt-40)' }}>→</span>
      </div>
    </div>
  </Link>
);

const News = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const [cat, setCat] = useState('Alles');

  const filtered = (() => {
    switch (cat) {
      case 'Ventures': return POSTS.filter((p) => p.cat === 'Venture');
      case 'Origin stories': return POSTS.filter((p) => p.statusLabel === 'Origin story');
      case 'Updates': return POSTS.filter((p) => p.statusLabel === 'Venture update');
      case 'Lessen': return POSTS.filter((p) => p.cat === 'Lessen');
      default: return POSTS;
    }
  })();

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  useEffect(() => {
    applySEO({
      title: 'Nieuws — Toms Ambitie',
      description: 'Geen persberichten. Wel een kijkje in wat we bouwen, testen, lanceren en soms ook weer loslaten.',
      canonical: 'https://www.toms-ambitie.nl/nieuws',
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '140px 0 80px' }}>
          <div className="container-wide">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>04</span>Toms Ambitie</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Nieuws.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 560 }}>
              Geen persberichten.<br />
              Wel een kijkje in wat we bouwen, testen, lanceren en soms ook weer loslaten.
            </p>
          </div>
        </section>

        {/* ═══ INTRO ═══════════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '80px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="ventures-featured-inner">
              <h2 className="display reveal" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.9 }}>
                Geen content om het content maken.
              </h2>
              <div className="reveal">
                <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--inkt-60)', marginBottom: 16 }}>
                  Sommige updates gaan over nieuwe ventures.
                </p>
                <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--inkt-60)' }}>
                  Andere over fouten, keuzes, lessen of ideeën die uiteindelijk nergens eindigden. Alles hoort erbij.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FILTER STRIP ════════════════════════════════════════ */}
        <div style={{
          position: 'sticky', top: 64, zIndex: 5,
          background: 'rgba(251,250,246,0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--inkt-10)',
          borderBottom: '1px solid var(--inkt-10)',
          padding: '16px 0',
        }}>
          <div className="container-wide" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="meta" style={{ color: 'var(--inkt-40)', marginRight: 8 }}>Filter:</span>
            {FILTER_LABELS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '7px 14px',
                  background: cat === c ? 'var(--inkt)' : 'transparent',
                  color: cat === c ? 'var(--wit-warm)' : 'var(--inkt-60)',
                  border: `1px solid ${cat === c ? 'var(--inkt)' : 'var(--inkt-20)'}`,
                  fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  transition: 'background .2s, color .2s, border-color .2s',
                  cursor: 'pointer',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ FEATURED ════════════════════════════════════════════ */}
        {featured && (
          <section className="surface-wit" style={{ padding: '64px 0 32px' }}>
            <div className="container-wide">
              <FeaturedCard post={featured} />
            </div>
          </section>
        )}

        {/* ═══ ARTICLE GRID ════════════════════════════════════════ */}
        {rest.length > 0 && (
          <section className="surface-wit" style={{ padding: '32px 0 160px' }}>
            <div className="container-wide">
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
                className="werkwijze-phases"
              >
                {rest.map((p) => (
                  <ArticleCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <section className="surface-wit" style={{ padding: '120px 0', textAlign: 'center' }}>
            <div className="container-narrow">
              <p className="lead" style={{ color: 'var(--inkt-40)' }}>Geen artikelen gevonden in deze categorie.</p>
              <button
                onClick={() => setCat('Alles')}
                style={{ marginTop: 24, padding: '12px 24px', background: 'var(--inkt)', color: 'var(--wit-warm)', border: 'none', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                Toon alles →
              </button>
            </div>
          </section>
        )}

        {/* ═══ CTA ═════════════════════════════════════════════════ */}
        <section style={{ background: 'var(--inkt)', color: 'var(--wit-warm)', padding: '160px 0' }}>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.5)' }}>Meedoen</span>
            </div>
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6.5vw, 100px)', lineHeight: 0.9, marginTop: 32 }}>
              <span>Heb je iets dat we moeten bouwen?</span>
            </h2>
            <p className="lead reveal" style={{ marginTop: 32, fontSize: 20, color: 'rgba(244,241,232,0.65)' }}>
              Een probleem, markt of idee dat blijft hangen?<br />
              Stuur het door. Misschien bouwen we het samen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
              <Link
                to="/meebouwen"
                className="btn"
                style={{ background: 'var(--volt)', color: 'var(--inkt)', textDecoration: 'none' }}
              >
                Draag idee aan →
              </Link>
              <Link
                to="/ventures"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', border: '1px solid rgba(244,241,232,0.25)', color: 'var(--wit-warm)', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,241,232,0.6)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,241,232,0.25)'; }}
              >
                Bekijk ventures →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default News;
