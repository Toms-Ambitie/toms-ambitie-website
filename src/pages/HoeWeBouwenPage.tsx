import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Counter } from '@/components/Counter';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const STAPPEN = [
  { n: '01', title: 'Probleem identificeren', meta: 'Eigen ervaring als validatie', body: 'Elk venture begint met een probleem dat we zelf voelen, of iemand in onze directe omgeving. Geen denkbeeldige klant. Geen marktonderzoek op papier. Echte frustratie, echte behoefte.', tool: 'Eigen ervaring' },
  { n: '02', title: 'Valideren met AI', meta: 'Concurrentie · markt · probleem', body: 'Is het probleem valide? Bestaat er al iets soortgelijks? AI kijkt mee. Concurrentieanalyse, marktonderzoek, probleemvalidatie. In uren. Niet weken.', tool: 'Claude · Perplexity · ChatGPT' },
  { n: '03', title: 'Werkende demo bouwen', meta: 'Oplossing voor business case', body: 'We bouwen eerst iets simpels dat werkt. Geen features. Geen eindeloze roadmap. Gewoon kijken of het probleem echt bestaat. De oplossing moet voelbaar zijn voordat er gerekend wordt.', tool: 'Lovable · Replit · Claude Design' },
  { n: '04', title: 'Business case maken', meta: 'Pas als de oplossing staat', body: 'Pas als de oplossing staat, kijken we of er een bedrijf in zit. Businessmodel, verdienmodel, marktgrootte. Met AI uitgewerkt. Altijd in die volgorde.', tool: 'Claude · business case' },
  { n: '05', title: 'Brand book maken', meta: 'Identiteit van dag één', body: 'Elke oplossing krijgt direct een identiteit. Logo, kleuren, toon. Zodat alles er van dag één professioneel uitziet. En consistent blijft naarmate het groeit.', tool: 'Claude · brand systeem' },
  { n: '06', title: 'Eerste platform bouwen', meta: 'Functioneel, niet perfect', body: 'We bouwen een eerste werkende versie. Geen uitgebreid dev-traject. Snel, functioneel, testbaar door echte gebruikers. Perfectionisme is voor later.', tool: 'Claude · Lovable · Cursor' },
  { n: '07', title: 'Lanceren', meta: 'Echte gebruikers, echte data', body: 'Live. Echte gebruikers, echte feedback, echte data. Pas daarna beslissen we of we doorgaan, opschalen of stoppen. Niet eerder.', tool: 'Marketing-DNA + automatisering' },
];

const TICKER_ITEMS = [
  'Week 1 · Probleem identificeren',
  'Week 1 · Valideren met AI',
  'Week 2-3 · Werkende demo',
  'Week 3 · Business case',
  'Week 4 · Brand book',
  'Week 4-5 · Eerste platform',
  'Week 6 · Lanceren',
];

const Tag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '6px 12px',
    background: dark ? 'var(--volt)' : 'var(--inkt)',
    color: dark ? 'var(--inkt)' : 'var(--wit-warm)',
    fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
  }}>{children}</span>
);

const HoeWeBouwenPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Hoe We Bouwen — Venture Club Werkwijze | Toms Ambitie',
      description: 'Van frustratie naar werkend bedrijf in zes weken. Zo werkt onze venture club: probleem valideren, intern bouwen, testen en schalen. Werkt het? Dan wordt het een zelfstandige venture.',
      canonical: 'https://www.toms-ambitie.nl/werkwijze',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Hoe We Bouwen — Werkwijze Toms Ambitie',
        'url': 'https://www.toms-ambitie.nl/werkwijze',
        'description': 'De werkwijze van Toms Ambitie: van frustratie naar venture in zes weken.',
        'isPartOf': { '@id': 'https://www.toms-ambitie.nl/#website' },
        'about': { '@id': 'https://www.toms-ambitie.nl/#organization' },
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-end' }}
              className="hero-two-col">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>01</span>De Werkwijze</span>
                </div>
                <h1 className="clip-reveal display" style={{ fontSize: 'clamp(72px, 10vw, 152px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
                  <span>Wij zijn altijd<br />zelf de testgroep.</span>
                </h1>
                <p className="lead reveal reveal-delay-1" style={{ marginTop: 48, fontSize: 22, maxWidth: 560 }}>
                  Wij bouwen vanuit frustratie, gedrag en echte problemen. Niet vanuit brainstorms. Voelt een oplossing intern goed? Dan testen we hem direct in de praktijk. Pas daarna ontstaat soms een venture.
                </p>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, alignSelf: 'end' }}>
                {[
                  { n: 7, suf: '', l: 'Stappen', m: 'Vast systeem' },
                  { n: 6, suf: 'wk', l: 'Maximaal', m: 'Tot eerste versie' },
                  { isText: true, txt: 'AI', l: 'Versnelling', m: 'Op elke stap' },
                  { n: 100, suf: '%', l: 'Onderbouwd', m: 'Nooit roekeloos' },
                ].map((s, i) => (
                  <div key={i} className="reveal" style={{ borderTop: '1px solid var(--inkt-20)', paddingTop: 20 }}>
                    <div className="display" style={{ fontSize: 56, lineHeight: 0.9 }}>
                      {'isText' in s && s.isText ? s.txt : <Counter to={(s as { n: number; suf: string }).n} suffix={(s as { n: number; suf: string }).suf} />}
                    </div>
                    <div className="label" style={{ marginTop: 12, color: 'var(--inkt)' }}>{s.l}</div>
                    <div className="body-sm">{s.m}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TICKER ══════════════════════════════════════════════ */}
        <Ticker items={TICKER_ITEMS} separator="→" />

        {/* ═══ 7 STAPPEN ═══════════════════════════════════════════ */}
        {STAPPEN.map((s, i) => {
          const isDark = i === STAPPEN.length - 1;
          const surfaceClass = isDark ? 'surface-inkt' : i % 2 === 0 ? 'surface-wit' : 'surface-papier';
          return (
            <section
              key={s.n}
              className={surfaceClass}
              style={{ padding: '160px 0' }}
            >
              <div className="container-wide">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'flex-start' }}
                  className="werkwijze-step-grid">
                  {/* Sticky step number */}
                  <div style={{ position: 'sticky', top: 100 }}>
                    <div className="reveal">
                      <div className="num" style={{ fontSize: 13, letterSpacing: '0.18em', color: isDark ? 'rgba(244,241,232,0.5)' : 'var(--inkt-60)', marginBottom: 16 }}>
                        STAP {s.n} / 07
                      </div>
                      <div className="display werkwijze-step-num" style={{
                        fontSize: 'clamp(120px, 16vw, 240px)',
                        lineHeight: 0.84,
                        color: isDark ? 'var(--volt)' : 'var(--inkt)',
                        letterSpacing: '-0.04em',
                      }}>
                        {s.n}
                      </div>
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="reveal">
                    <h2 className="display" style={{
                      fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.92, marginBottom: 40,
                      color: isDark ? 'var(--wit-warm)' : 'var(--inkt)',
                    }}>
                      {s.title}
                    </h2>
                    <p className="lead" style={{
                      marginBottom: 40, fontSize: 22, maxWidth: 720,
                      color: isDark ? 'rgba(244,241,232,0.75)' : 'var(--inkt-80)',
                    }}>
                      {s.body}
                    </p>

                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40, alignItems: 'center' }}>
                      <Tag dark={isDark}>⚡ {s.tool}</Tag>
                      <span className="meta" style={{ color: isDark ? 'rgba(244,241,232,0.5)' : 'var(--inkt-60)' }}>{s.meta}</span>
                    </div>

                    <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${isDark ? 'rgba(244,241,232,0.15)' : 'var(--inkt-20)'}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: isDark ? 'rgba(244,241,232,0.5)' : 'var(--inkt-60)' }}>
                        <span>{i === 0 ? 'Start' : `Volg op stap ${STAPPEN[i - 1].n}`}</span>
                        <span>{i < STAPPEN.length - 1 ? `→ Volgende: ${STAPPEN[i + 1].title}` : 'Voltooid · platform live'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ═══ CTA ═════════════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/meebouwen" className="btn btn-volt">Start gesprek →</Link>
              <Link to="/ventures" className="btn-ghost">Bekijk ventures</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HoeWeBouwenPage;
