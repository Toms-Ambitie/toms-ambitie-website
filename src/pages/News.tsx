import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const POSTS = [
  { slug: 'oplossing-voor-business-case', date: '12 mei 2026', cat: 'Werkwijze', title: 'Waarom de oplossing altijd voorop staat — en de business case nooit', read: '6 min', featured: true, cover: '/photos/postpilot-analytics.png' },
  { slug: 'ai-team-van-tien', date: '28 apr 2026', cat: 'AI', title: 'Hoe Claude één persoon laat werken als een team van tien', read: '4 min', cover: '/photos/studio-collab.jpg' },
  { slug: 'post-pilot-launch', date: '14 apr 2026', cat: 'Venture', title: 'Post Pilot lanceert: van eigen marketing-frustratie naar product', read: '5 min', cover: '/photos/postpilot-new.png' },
  { slug: 'toiletborstels', date: '02 apr 2026', cat: 'Lessen', title: 'We hebben toiletborstels verhuurd. Wat dat me geleerd heeft.', read: '7 min', cover: '/photos/studio-team-bw.jpg' },
  { slug: 'brand-book-dag-een', date: '18 mrt 2026', cat: 'Werkwijze', title: 'Brand book op dag één — waarom dat geen overhead is', read: '4 min', cover: '/photos/studio-pair.jpg' },
  { slug: 'exit-aardbei', date: '05 mrt 2026', cat: 'Ondernemen', title: 'Exit Aardbei: 7 jaar bouwen, 1 dag tekenen', read: '6 min', cover: '/photos/tom-portrait-dark.jpg' },
  { slug: 'validatie-met-ai', date: '20 feb 2026', cat: 'AI', title: 'Validatie in uren, niet weken — concurrentieanalyse met AI', read: '5 min', cover: '/photos/postpilot-historie.png' },
  { slug: 'pactly-ontstaan', date: '08 feb 2026', cat: 'Venture', title: 'Pactly: contracten zonder jurist — hoe het ontstond', read: '4 min', cover: '/photos/tom-casual.jpg' },
];

const CATS = ['Alles', 'Werkwijze', 'Venture', 'AI', 'Lessen', 'Ondernemen'];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '6px 12px',
    background: 'transparent', color: 'var(--inkt)',
    border: '1px solid var(--inkt-20)',
    fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
  }}>{children}</span>
);

const News = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const [cat, setCat] = useState('Alles');

  const filtered = cat === 'Alles' ? POSTS : POSTS.filter((p) => p.cat === cat);
  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  useEffect(() => {
    applySEO({
      title: 'Werknotities — Toms Ambitie',
      description: 'Wat we leerden tijdens het bouwen. Wat werkte, wat niet, en waarom. Eerlijk, direct, zonder corporate-omhulsel.',
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
              <span className="eyebrow"><span style={{ marginRight: 8 }}>04</span>Blog</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Werknotities.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Wat we leerden tijdens het bouwen. Wat werkte, wat niet, en waarom. Eerlijk, direct, en zonder corporate-omhulsel.
            </p>
          </div>
        </section>

        {/* ═══ FILTER STRIP ════════════════════════════════════════ */}
        <div style={{
          position: 'sticky', top: 64, zIndex: 5,
          background: 'rgba(251,250,246,0.92)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--inkt-10)',
          borderBottom: '1px solid var(--inkt-10)',
          padding: '20px 0',
        }}>
          <div className="container-wide" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="meta" style={{ marginRight: 16 }}>Filter:</span>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '8px 14px',
                  background: cat === c ? 'var(--inkt)' : 'transparent',
                  color: cat === c ? 'var(--wit-warm)' : 'var(--inkt-60)',
                  border: `1px solid ${cat === c ? 'var(--inkt)' : 'var(--inkt-20)'}`,
                  fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  transition: 'background .2s, color .2s, border-color .2s',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ FEATURED ════════════════════════════════════════════ */}
        {featured && (
          <section className="surface-wit" style={{ padding: '80px 0 40px' }}>
            <div className="container-wide">
              <Link
                to={`/nieuws/${featured.slug}`}
                className="reveal"
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
                  background: 'var(--inkt)', color: 'var(--wit-warm)',
                  position: 'relative', transition: 'transform .3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--volt)', zIndex: 2 }} />
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={featured.cover} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', background: 'var(--volt)', color: 'var(--inkt)', fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      FEATURED
                    </span>
                    <div style={{ display: 'flex', gap: 12, marginTop: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>{featured.date}</span>
                      <span style={{ color: 'rgba(244,241,232,0.3)' }}>·</span>
                      <span className="meta" style={{ color: 'var(--volt)' }}>{featured.cat}</span>
                      <span style={{ color: 'rgba(244,241,232,0.3)' }}>·</span>
                      <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>{featured.read}</span>
                    </div>
                    <h2 className="display" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 0.95, marginTop: 24 }}>
                      {featured.title}
                    </h2>
                  </div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--volt)' }}>
                    <span>Lees artikel</span>
                    <span style={{ width: 32, height: 1, background: 'var(--volt)', display: 'inline-block' }} />
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ═══ ARTICLE GRID ════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '40px 0 160px' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
              className="werkwijze-phases">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to={`/nieuws/${p.slug}`}
                  className="reveal"
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 24,
                    paddingTop: 24, borderTop: '1px solid var(--inkt-20)',
                    transition: 'transform .25s',
                    textDecoration: 'none', color: 'var(--inkt)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="meta">{p.date}</span>
                    <Tag>{p.cat}</Tag>
                  </div>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--papier-deep)' }}>
                    <img src={p.cover} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <h3 className="display" style={{ fontSize: 28, lineHeight: 1, minHeight: 56 }}>{p.title}</h3>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--inkt-10)' }}>
                    <span className="meta">{p.read}</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--inkt-40)' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default News;
