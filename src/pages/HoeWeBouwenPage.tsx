import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Ticker } from '@/components/Ticker';
import { Counter } from '@/components/Counter';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const STAPPEN = [
  { n: '01', title: 'Probleem identificeren', meta: 'Eigen ervaring als validatie', body: 'Elk venture begint met een probleem dat we zelf ervaren — of dat iemand in onze directe omgeving heeft. Geen denkbeeldige klant, geen marktonderzoek op papier. Echte frustratie, echte behoefte.', tool: 'Eigen ervaring' },
  { n: '02', title: 'Valideren met AI', meta: 'Concurrentie · markt · probleem', body: 'Is het probleem valide? Bestaat er al een goede oplossing? Is de bedachte aanpak een goed idee? AI doet concurrentie-analyse, marktonderzoek en probleemvalidatie — in uren, niet weken.', tool: 'Claude · Perplexity · ChatGPT' },
  { n: '03', title: 'Werkende demo bouwen', meta: 'Oplossing voor business case', body: 'Eerst de oplossing ontwerpen — daarna pas de business case. Met Lovable of Replit een werkende demo, of met Claude Design een visuele mockup. De oplossing moet voelbaar zijn voordat er gerekend wordt.', tool: 'Lovable · Replit · Claude Design' },
  { n: '04', title: 'Business case maken', meta: 'Pas als de oplossing staat', body: 'Pas als de oplossing staat, volgt de vraag of er een bedrijf in zit. Businessmodel, verdienmodel, marktgrootte — met AI uitgewerkt. De business case volgt de oplossing. Nooit andersom.', tool: 'Claude · business case' },
  { n: '05', title: 'Brand book maken', meta: 'Identiteit van dag één', body: 'Elke oplossing krijgt direct een visuele identiteit. Een brand book zorgt dat de oplossing consistent gecommuniceerd en ontworpen wordt — en geeft het project body en geloofwaardigheid van dag één.', tool: 'Claude · brand systeem' },
  { n: '06', title: 'Eerste platform bouwen', meta: 'Functioneel, niet perfect', body: 'Met AI een eerste werkende versie van het platform of de oplossing bouwen. Geen uitgebreid development-traject — een snelle, functionele eerste versie die getest kan worden door echte gebruikers.', tool: 'Claude · Lovable · Cursor' },
  { n: '07', title: 'Lanceren', meta: 'Echte gebruikers, echte data', body: 'Het platform gaat live. Echte gebruikers, echte feedback, echte data. Pas na lancering en validatie wordt besloten of er verder gebouwd, opgeschaald of gestopt wordt.', tool: 'Marketing-DNA + automatisering' },
];

const WHAT_YOU_GET = [
  ['Werkende platform', 'Eerste functionele versie, live testbaar door echte gebruikers.'],
  ['Brand book', 'Volledige visuele identiteit. Logo, kleuren, fonts, tone of voice.'],
  ['Business case', 'Verdienmodel, marktgrootte, go-to-market — onderbouwd met AI-research.'],
  ['Werkwijze', '7-stappen recept om door te bouwen. Dezelfde methode op elk venture.'],
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
      title: 'De Werkwijze — Toms Ambitie',
      description: 'Van probleem naar platform in zeven stappen. Altijd AI-assisted. Altijd vanuit eigen ervaring. Live binnen 6 weken.',
      canonical: 'https://www.toms-ambitie.nl/werkwijze',
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '140px 0 100px' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-end' }}
              className="hero-two-col">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>01</span>De Werkwijze</span>
                </div>
                <h1 className="clip-reveal display" style={{ fontSize: 'clamp(72px, 10vw, 152px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
                  <span>Van probleem<br />naar platform.</span>
                </h1>
                <p className="lead reveal reveal-delay-1" style={{ marginTop: 48, fontSize: 22, maxWidth: 560 }}>
                  Elk venture doorloopt hetzelfde zeven-stappen systeem. De oplossing staat altijd voorop — de business case volgt daarna. Altijd AI-assisted. Altijd vanuit eigen ervaring.
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
          const isDark = i % 2 === 1;
          return (
            <section
              key={s.n}
              className={isDark ? 'surface-inkt' : 'surface-papier'}
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
                      <div className="display" style={{
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

        {/* ═══ PRINCIPE ════════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '180px 0' }}>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>P</span>Principe</span>
            </div>
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 0.95, marginTop: 32 }}>
              <span>De oplossing staat altijd voorop.<br /><span style={{ color: 'var(--inkt-40)' }}>De business case volgt. Altijd.</span></span>
            </h2>
            <p className="lead" style={{ marginTop: 40, fontSize: 22 }}>
              Door eerst de oplossing te bouwen en daarna de business case te maken, blijft de kwaliteit van de oplossing leidend. Een business case die een slechte oplossing rechtvaardigt is waardeloos. Een goede oplossing zonder business case is een kans.
            </p>
          </div>
        </section>

        {/* ═══ WAT KRIJGT EEN VENTURE ══════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '160px 0' }}>
          <div className="container-wide">
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span className="volt-dot" />
                <span className="eyebrow"><span style={{ marginRight: 8 }}>06</span>Wat krijgt een venture</span>
              </div>
              <h2 className="h2" style={{ marginTop: 24 }}>
                Na zes weken heb je een platform —<br /><span style={{ color: 'var(--inkt-40)' }}>en alles om het te lanceren.</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
              className="responsive-4-to-2">
              {WHAT_YOU_GET.map(([t, d], i) => (
                <div key={t} className="reveal" style={{ background: 'var(--wit-warm)', padding: 32, borderTop: '4px solid var(--volt)', minHeight: 260 }}>
                  <div className="num" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--inkt-40)', marginBottom: 16 }}>0{i + 1} / 04</div>
                  <h4 className="display" style={{ fontSize: 32, lineHeight: 0.95, marginBottom: 16 }}>{t}</h4>
                  <p className="body-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═════════════════════════════════════════════════ */}
        <section className="surface-inkt" style={{ padding: '180px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div style={{ width: 48, height: 4, background: 'var(--volt)', margin: '0 auto 32px' }} />
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.92, color: 'var(--wit-warm)' }}>
              <span>Heb je een idee?<br />Bouw mee.</span>
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
              <Link to="/meebouwen" className="btn btn-volt">Start gesprek →</Link>
              <Link to="/ventures" className="btn-ghost" style={{ color: 'var(--wit-warm)', borderColor: 'rgba(244,241,232,0.3)' }}>Bekijk ventures</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HoeWeBouwenPage;
