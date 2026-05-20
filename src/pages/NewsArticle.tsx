import { useEffect, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';
import { POSTS, type Block } from '@/data/posts';

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

const renderBlock = (block: Block, i: number) => {
  switch (block.t) {
    case 'lead':
      return (
        <p key={i} className="lead reveal" style={{ fontSize: 24, lineHeight: 1.45, marginBottom: 48 }}>
          {block.c}
        </p>
      );
    case 'p':
      return (
        <p key={i} style={{ marginBottom: 24 }}>
          {block.c}
        </p>
      );
    case 'h2':
      return (
        <h2 key={i} className="display" style={{ fontSize: 48, lineHeight: 0.95, marginTop: 64, marginBottom: 24 }}>
          {block.c}
        </h2>
      );
    case 'quote':
      return (
        <blockquote key={i} style={{ margin: '64px 0', paddingLeft: 32, borderLeft: '4px solid var(--volt)' }}>
          <p className="display" style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 0, color: 'var(--inkt)' }}>
            {block.c}
          </p>
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i} style={{ marginBottom: 24, paddingLeft: 24, display: 'grid', gap: 8 }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ lineHeight: 1.6 }}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const NewsArticle = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const { slug } = useParams<{ slug: string }>();

  const post = POSTS.find((p) => p.slug === slug);

  // 404 if slug doesn't exist
  if (!post) {
    return <Navigate to="/nieuws" replace />;
  }

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  useEffect(() => {
    applySEO({
      title: `${post.title} — Toms Ambitie`,
      description: post.lead,
      canonical: `https://www.toms-ambitie.nl/nieuws/${post.slug}`,
    });
  }, [post]);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ ARTICLE HEADER ══════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '120px 0 64px' }}>
          <div className="container-narrow">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 32 }}>
              <Link to="/nieuws" className="meta" style={{ color: 'var(--inkt-60)' }}>← Nieuws</Link>
              <span style={{ color: 'var(--inkt-20)' }}>/</span>
              <span className="meta" style={{ color: 'var(--inkt)' }}>{post.cat}</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 0.94 }}>
              <span>{post.title}</span>
            </h1>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--inkt-20)' }}>
              <div style={{ width: 48, height: 48, background: 'var(--inkt)', color: 'var(--wit-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontSize: 20, flexShrink: 0 }}>
                TM
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 500 }}>Tom Mulder</div>
                <div className="meta">Founder · {post.date} · {post.read} lezen</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COVER IMAGE (only when a unique image exists) ═══════ */}
        {post.cover && (
          <section className="surface-wit" style={{ paddingBottom: 80 }}>
            <div className="container-wide">
              <div style={{ aspectRatio: '21/9', overflow: 'hidden', background: 'var(--papier-deep)' }}>
                <img src={post.cover} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
            </div>
          </section>
        )}

        {/* ═══ ARTICLE BODY ════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '80px 0 120px' }}>
          <div className="container-narrow" style={{ fontFamily: 'var(--body)', fontSize: 19, lineHeight: 1.7, color: 'var(--inkt)' }}>

            {/* Lead */}
            <p className="lead reveal" style={{ fontSize: 24, lineHeight: 1.45, marginBottom: 48 }}>
              {post.lead}
            </p>

            {/* Body blocks */}
            {post.body.map((block, i) => renderBlock(block, i))}

            {/* Footer link */}
            <p style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--inkt-20)', color: 'var(--inkt-60)' }}>
              Meer lezen over hoe we bouwen?{' '}
              <Link to="/werkwijze" style={{ borderBottom: '1px solid var(--inkt)', color: 'var(--inkt)' }}>
                Bekijk de werkwijze →
              </Link>
            </p>
          </div>
        </section>

        {/* ═══ RELATED ═════════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '120px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
              <h2 className="h2">Lees verder.</h2>
              <Link to="/nieuws" className="btn-link">Alle artikelen →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
              className="werkwijze-phases">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/nieuws/${p.slug}`}
                  className="reveal"
                  style={{ display: 'block', background: 'var(--wit-warm)', padding: 28, borderTop: '4px solid var(--volt)', textDecoration: 'none', color: 'var(--inkt)', transition: 'transform .25s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span className="meta">{p.date}</span>
                    <Tag>{p.cat}</Tag>
                  </div>
                  <h3 className="display" style={{ fontSize: 24, lineHeight: 1, marginBottom: 16 }}>{p.title}</h3>
                  <span className="meta">{p.read} →</span>
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

export default NewsArticle;
