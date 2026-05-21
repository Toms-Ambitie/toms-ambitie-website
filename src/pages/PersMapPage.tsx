import { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const FACTSHEET = [
  ['Bedrijfsnaam', 'Toms Ambitie'],
  ['Type', 'Venture club · venture builder'],
  ['Opgericht', '2015 (na exit Aardbei Communicatie)'],
  ['Oprichter', 'Tom Mulder'],
  ['Locatie', 'Zwolle, Nederland'],
  ['Actieve ventures', '4 — Post Pilot · Pactly · OAK Marketing · Plug and Power'],
  ['Werkwijze', '7-stappen systeem van probleem naar platform in max 6 weken'],
  ['Werkwijze (kort)', 'Probleem-first · AI als versneller · oplossing voor business case'],
  ['AI-first sinds', '2023'],
  ['Website', 'toms-ambitie.nl'],
  ['Contact', 'hallo@toms-ambitie.nl'],
];

const LOGOS = [
  { label: 'Logo · donker op licht', file: '/logo-dark.svg', bg: 'var(--papier)' },
  { label: 'Logo · licht op donker', file: '/logo-white.svg', bg: 'var(--inkt)' },
  { label: 'Monogram · donker', file: '/monogram-dark.svg', bg: 'var(--papier)' },
  { label: 'Monogram · licht', file: '/monogram-white.svg', bg: 'var(--inkt)' },
];

const PHOTOS = [
  { src: '/photos/tom-portrait-dark.webp', label: 'Tom Mulder · portret donker', credit: 'Wonderwood Fotografie' },
  { src: '/photos/tom-portrait-light.webp', label: 'Tom Mulder · portret licht', credit: 'Wonderwood Fotografie' },
  { src: '/photos/tom-casual.webp', label: 'Tom Mulder · casual', credit: 'Wonderwood Fotografie' },
  { src: '/photos/studio-team-bw.webp', label: 'Studio · team', credit: 'Wonderwood Fotografie' },
  { src: '/photos/studio-collab.webp', label: 'Studio · collab', credit: 'Wonderwood Fotografie' },
  { src: '/photos/studio-pair.webp', label: 'Studio · pair', credit: 'Wonderwood Fotografie' },
];

const PersMapPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Persmap — Toms Ambitie',
      description: 'Pers- en mediakit van Toms Ambitie. Logo\'s, foto\'s, factsheet en contact voor journalisten.',
      canonical: 'https://www.toms-ambitie.nl/persmap',
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
              <span className="eyebrow"><span style={{ marginRight: 8 }}>P</span>Persmap</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Voor de pers.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Schrijf je over Toms Ambitie of een van onze ventures? Hieronder vind je logo's, foto's en alle feiten. Vragen? Stuur een mail.
            </p>
          </div>
        </section>

        {/* ═══ FACTSHEET ═══════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '120px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>01</span>Factsheet</span>
                </div>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.95, marginTop: 24 }}>
                  De feiten.<br /><span style={{ color: 'var(--inkt-40)' }}>In één blik.</span>
                </h2>
              </div>
              <div>
                {FACTSHEET.map(([k, v]) => (
                  <div key={k} className="reveal" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: '20px 0', borderTop: '1px solid var(--inkt-20)' }}>
                    <span className="meta">{k}</span>
                    <span style={{ fontSize: 16, fontFamily: 'var(--body)', color: 'var(--inkt)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LOGO'S & BEELDMERKEN ════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '120px 0' }}>
          <div className="container-wide">
            <div style={{ marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span className="volt-dot" />
                <span className="eyebrow"><span style={{ marginRight: 8 }}>02</span>Logo's & beeldmerken</span>
              </div>
              <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.95, marginTop: 24 }}>Brand assets.</h2>
              <p className="lead" style={{ marginTop: 24, maxWidth: 640 }}>
                Download het Toms Ambitie logo in verschillende varianten. Gebruik altijd de juiste versie voor de achtergrond.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {LOGOS.map((a) => (
                <div key={a.label} className="reveal" style={{ border: '1px solid var(--inkt-10)' }}>
                  <div style={{ background: a.bg, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                    <img src={a.file} alt={a.label} style={{ maxWidth: '70%', maxHeight: '70%' }} />
                  </div>
                  <div style={{ padding: 16, borderTop: '1px solid var(--inkt-10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="meta" style={{ fontSize: 10 }}>{a.label}</span>
                    <a href={a.file} download className="meta" style={{ color: 'var(--inkt)', borderBottom: '1px solid var(--inkt)', paddingBottom: 2 }}>SVG ↓</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: 24, background: 'var(--papier)', borderLeft: '3px solid var(--volt)' }}>
              <div className="meta" style={{ marginBottom: 8 }}>GEBRUIKSREGELS</div>
              <ul style={{ display: 'grid', gap: 6, fontSize: 14, color: 'var(--inkt-80)', listStyle: 'none', padding: 0 }}>
                <li>✓ Gebruik op effen achtergronden, minimale vrije ruimte = hoogte volt-balk rondom</li>
                <li>✓ Wit op donker, zwart op licht, zwart op volt — volt-balk altijd volt</li>
                <li>✗ Niet vervormen, roteren, schaduwen, andere kleuren geven of volt-balk weglaten</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ PERSFOTO'S ══════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '120px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>03</span>Persfoto's</span>
                </div>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.95, marginTop: 24 }}>Beeldmateriaal.</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
              className="werkwijze-phases">
              {PHOTOS.map((p, i) => (
                <div key={i} className="reveal" style={{ background: 'var(--wit-warm)', border: '1px solid var(--inkt-10)' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img src={p.src} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: 16, borderTop: '1px solid var(--inkt-10)' }}>
                    <div style={{ fontSize: 14, fontWeight: 500, fontFamily: 'var(--body)', color: 'var(--inkt)' }}>{p.label}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                      <span className="meta">© {p.credit}</span>
                      <a href={p.src} download className="meta" style={{ color: 'var(--inkt)', borderBottom: '1px solid var(--inkt)', paddingBottom: 2 }}>JPG ↓</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PERSCONTACT ═════════════════════════════════════════ */}
        <section className="surface-inkt" style={{ padding: '120px 0' }}>
          <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span className="volt-dot" />
                <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.6)' }}><span style={{ marginRight: 8 }}>04</span>Perscontact</span>
              </div>
              <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.95, marginTop: 24, color: 'var(--wit-warm)' }}>
                Vragen?<br />Stuur een mail.
              </h2>
              <p className="lead" style={{ marginTop: 32, color: 'rgba(244,241,232,0.7)' }}>
                Tom is direct te bereiken voor pers- en interviewverzoeken. Reactie meestal binnen 24 uur.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              <a
                href="mailto:hallo@toms-ambitie.nl"
                style={{ display: 'block', padding: 28, border: '1px solid rgba(244,241,232,0.15)', transition: 'border-color .2s', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--volt)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,241,232,0.15)'; }}
              >
                <div className="meta" style={{ color: 'var(--volt)', marginBottom: 12 }}>E-MAIL</div>
                <div className="display" style={{ fontSize: 22, color: 'var(--wit-warm)' }}>hallo@toms-ambitie.nl</div>
              </a>
              <a
                href="https://linkedin.com/in/tommulder"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', padding: 28, border: '1px solid rgba(244,241,232,0.15)', transition: 'border-color .2s', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--volt)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,241,232,0.15)'; }}
              >
                <div className="meta" style={{ color: 'var(--volt)', marginBottom: 12 }}>LINKEDIN</div>
                <div className="display" style={{ fontSize: 22, color: 'var(--wit-warm)' }}>Tom Mulder →</div>
              </a>
              <div style={{ padding: 28, border: '1px solid rgba(244,241,232,0.15)' }}>
                <div className="meta" style={{ color: 'rgba(244,241,232,0.5)', marginBottom: 12 }}>STUDIO</div>
                <div style={{ color: 'rgba(244,241,232,0.8)', fontSize: 18, fontFamily: 'var(--body)' }}>Zwolle, Nederland</div>
                <div className="meta" style={{ marginTop: 8, color: 'rgba(244,241,232,0.4)' }}>BEZOEK OP AFSPRAAK</div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PersMapPage;
