import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const NewsArticle = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const { slug } = useParams<{ slug: string }>();

  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  useEffect(() => {
    applySEO({
      title: `${post.title} — Toms Ambitie`,
      description: 'Werknotitie van Tom Mulder. Eerlijk over wat werkt en wat niet, tijdens het bouwen van ventures.',
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
              <Link to="/nieuws" className="meta" style={{ color: 'var(--inkt-60)' }}>← Blog</Link>
              <span style={{ color: 'var(--inkt-20)' }}>/</span>
              <span className="meta" style={{ color: 'var(--inkt)' }}>{post.cat}</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 0.94 }}>
              <span>{post.title}</span>
            </h1>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--inkt-20)' }}>
              <div style={{ width: 48, height: 48, background: 'var(--inkt)', color: 'var(--wit-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontSize: 20 }}>
                TM
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 500 }}>Tom Mulder</div>
                <div className="meta">Founder · {post.date} · {post.read} lezen</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COVER IMAGE ═════════════════════════════════════════ */}
        <section className="surface-wit" style={{ paddingBottom: 80 }}>
          <div className="container-wide">
            <div style={{ aspectRatio: '21/9', overflow: 'hidden', background: 'var(--papier-deep)' }}>
              <img src={post.cover} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* ═══ ARTICLE BODY ════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '80px 0 120px' }}>
          <div className="container-narrow" style={{ fontFamily: 'var(--body)', fontSize: 19, lineHeight: 1.7, color: 'var(--inkt)' }}>
            <p className="lead reveal" style={{ fontSize: 24, lineHeight: 1.45, marginBottom: 48 }}>
              Bij Toms Ambitie doen we het andersom dan de meeste venture builders. We bouwen de oplossing eerst — daarna pas de business case. Hier is waarom dat geen luxe is, maar fundament.
            </p>

            <h2 className="display" style={{ fontSize: 48, lineHeight: 0.95, marginTop: 64, marginBottom: 24 }}>
              De omgekeerde volgorde
            </h2>
            <p style={{ marginBottom: 24 }}>
              De klassieke aanpak: schrijf een business plan, maak een financiële projectie, valideer de markt, en bouw dan pas iets. Klinkt logisch — maar leidt vrijwel altijd tot één van twee uitkomsten. Of het wordt te lang gepland en niet gebouwd. Of er ontstaat een oplossing die de business case dient in plaats van het probleem.
            </p>
            <p style={{ marginBottom: 24 }}>
              Wij draaien het om. Eerst de oplossing — voelbaar, werkend, demo-baar. Daarna pas: zit er een bedrijf in?
            </p>

            <blockquote style={{ margin: '64px 0', paddingLeft: 32, borderLeft: '4px solid var(--volt)' }}>
              <p className="display" style={{ fontSize: 40, lineHeight: 1, marginBottom: 16 }}>
                "Een business case die een slechte oplossing rechtvaardigt, is waardeloos."
              </p>
              <p className="meta">— Werkwijze Toms Ambitie</p>
            </blockquote>

            <h2 className="display" style={{ fontSize: 48, lineHeight: 0.95, marginTop: 64, marginBottom: 24 }}>
              Waarom dit werkt
            </h2>
            <p style={{ marginBottom: 24 }}>
              Een goede oplossing zonder business case is een <em>kans</em>. Een business case die rust op een slechte oplossing is een <em>fata morgana</em>. Door eerst de oplossing te bouwen en pas daarna de business case te maken, blijft de kwaliteit van de oplossing leidend.
            </p>
            <p style={{ marginBottom: 48 }}>
              Met AI als versneller is dit bovendien geen luxe meer. Wat ooit een team van tien deed in maanden, doen we in weken. Lovable, Replit, Claude Design — de gereedschapskist is veranderd. De volgorde mag mee veranderen.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '48px 0' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/photos/studio-collab.jpg" alt="Bouwen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/photos/studio-pair.jpg" alt="Strategie" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            <h2 className="display" style={{ fontSize: 48, lineHeight: 0.95, marginTop: 64, marginBottom: 24 }}>
              Hoe ziet dit eruit in de praktijk?
            </h2>
            <p style={{ marginBottom: 24 }}>
              Neem Post Pilot. Het probleem (eigen marketing-output gelimiteerd door tijd) was meer dan helder. We zijn niet eerst een TAM-analyse gaan maken. We hebben in een week een werkende demo neergezet die <em>onze eigen</em> social-content versneld kon maken. Pas toen die werkte, gingen we kijken: zit hier een bedrijf in? Antwoord: ja.
            </p>
            <p style={{ marginBottom: 24 }}>
              Hetzelfde verhaal bij Pactly. Bij Plug and Power. Bij OAK Marketing. Eerst bouwen — dan pas rekenen.
            </p>

            <p style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--inkt-20)', color: 'var(--inkt-60)' }}>
              Dit artikel is onderdeel van een serie over de werkwijze van Toms Ambitie.{' '}
              <Link to="/werkwijze" style={{ borderBottom: '1px solid var(--inkt)', color: 'var(--inkt)' }}>
                Bekijk de volledige werkwijze →
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
                  style={{ display: 'block', background: 'var(--wit-warm)', padding: 28, borderTop: '4px solid var(--volt)', textDecoration: 'none', color: 'var(--inkt)' }}
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
