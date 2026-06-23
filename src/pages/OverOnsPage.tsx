import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const MILESTONES = [
  { y: '2008', t: 'Aardbei Communicatie', d: 'Opgericht in Nijverdal door Tom Mulder met partners. Eerste bureau.' },
  { y: '2015', t: 'Exit + start TA', d: 'Aardbei verkocht. Het startschot voor Toms Ambitie.' },
  { y: '2015–2023', t: 'Parallel bouwen', d: 'Verschillende bureaus en eerste eigen ventures naast elkaar.' },
  { y: '2023', t: 'AI-first', d: 'Definitieve omslag. AI niet als experiment, maar als werkwijze.' },
  { y: '2024', t: 'PostPilot', d: 'Nieuwe venture: marketing AI voor LinkedIn.' },
  { y: 'Nu', t: '3 actieve ventures', d: 'PostPilot, Plug and Power, EmmaBoekt. Volgende staat klaar.' },
];

const VALUES = [
  { t: 'Oplossing eerst', d: 'Elk venture begint met iets wat we zelf voelen. Geen spreadsheet als startpunt, geen denkbeeldige markt.' },
  { t: 'Altijd onderbouwd', d: 'Elk idee krijgt een plan. Nooit roekeloos. Maar ook nooit zo lang gepland dat het niet gebeurt.' },
  { t: 'AI als versneller', d: 'Niet als experiment, maar als werkwijze. Validatie, demo, business case — AI werkt mee van stap één.' },
  { t: 'Samen bouwen', d: 'Het liefst met partners, maar ook solo als het moet. Geen ego.' },
  { t: 'Eerlijk', d: 'Over wat werkte. Maar vooral ook over wat niet werkte.' },
];

const OverOnsPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Over Toms Ambitie — Tom Mulder, Venture Builder uit Zwolle',
      description: 'Tom Mulder bouwt eigen bedrijven vanuit echte frustratie. Geen bureau, geen fonds. Een vaste kern met specialisten die meebouwen. Open voor co-founders, investeerders en partners die geloven in het model.',
      canonical: 'https://www.toms-ambitie.nl/over-ons',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'Over Toms Ambitie — Tom Mulder',
          'url': 'https://www.toms-ambitie.nl/over-ons',
          'isPartOf': { '@id': 'https://www.toms-ambitie.nl/#website' },
          'about': { '@id': 'https://www.toms-ambitie.nl/#tom-mulder' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.toms-ambitie.nl/#tom-mulder',
          'name': 'Tom Mulder',
          'givenName': 'Tom',
          'familyName': 'Mulder',
          'jobTitle': 'Founder & Venture Builder',
          'description': 'Ondernemer en venture builder uit Zwolle. Tom Mulder bouwt eigen bedrijven vanuit echte frustratie, met AI als versneller. Oprichter van Toms Ambitie, PostPilot, Plug and Power en EmmaBoekt.',
          'url': 'https://www.toms-ambitie.nl/over-ons',
          'image': 'https://www.toms-ambitie.nl/photos/tom-founder-01.webp',
          'email': 'hallo@toms-ambitie.nl',
          'worksFor': { '@id': 'https://www.toms-ambitie.nl/#organization' },
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Zwolle',
            'addressRegion': 'Overijssel',
            'addressCountry': 'NL',
          },
        },
      ],
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
              <span className="eyebrow"><span style={{ marginRight: 8 }}>03</span>Over ons</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Een venture club.<br />Een vaste kern.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 720 }}>
              Toms Ambitie is geen agency, geen consultancy, geen fonds. Een actief systeem dat eigen bedrijven bouwt. Vanuit een vaste kern, aangevuld met specialisten waar nodig.
            </p>
          </div>
        </section>

        {/* ═══ STUDIO PANORAMA ═════════════════════════════════════ */}
        <section className="surface-wit" style={{ paddingBottom: 100 }}>
          <div className="container-wide">
            <div className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--inkt)' }}>
              <img
                src="/photos/studio-team-bw.webp"
                alt="Studio Zwolle"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', aspectRatio: '21/9', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 20, left: 20, padding: '10px 16px', background: 'var(--wit-warm)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 7, height: 7, background: 'var(--volt)' }} />
                <span className="meta">STUDIO ZWOLLE · 2025</span>
              </div>
              <div style={{ position: 'absolute', top: 20, right: 20, padding: '10px 16px', background: 'rgba(14,14,12,0.7)', backdropFilter: 'blur(10px)', color: 'var(--wit-warm)' }}>
                <span className="meta" style={{ color: 'var(--wit-warm)' }}>FIG.01 · DE WERKVLOER</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VALUES — 5-col ══════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '160px 0' }}>
          <div className="container-wide">
            <div style={{ marginBottom: 80, textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span className="volt-dot" />
                <span className="eyebrow"><span style={{ marginRight: 8 }}>01</span>Kernwaarden</span>
              </div>
              <h2 className="h2" style={{ marginTop: 24 }}>
                Vijf principes.
              </h2>
            </div>
            <div className="values-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
              {VALUES.map((p, i) => (
                <div key={p.t} className="reveal" style={{ background: 'var(--wit-warm)', padding: 28, borderTop: '3px solid var(--volt)', minHeight: 260 }}>
                  <div className="num" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--inkt-40)', marginBottom: 16 }}>0{i + 1} / 05</div>
                  <h4 className="display" style={{ fontSize: 28, lineHeight: 0.95, marginBottom: 12 }}>{p.t}</h4>
                  <p className="body-sm">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FOUNDER SPOTLIGHT ═══════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '160px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}
              className="hero-two-col">
              {/* Photo */}
              <div className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--inkt)' }}>
                <img
                  src="/photos/tom-portrait-dark.webp"
                  alt="Tom Mulder"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'linear-gradient(to top, rgba(14,14,12,0.85), transparent)' }}>
                  <div style={{ width: 32, height: 3, background: 'var(--volt)', marginBottom: 8 }} />
                  <div className="display" style={{ fontSize: 36, lineHeight: 1, color: 'var(--wit-warm)' }}>Tom Mulder</div>
                  <div className="meta" style={{ color: 'rgba(244,241,232,0.7)', marginTop: 4 }}>FOUNDER · TOMS AMBITIE</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>02</span>De Founder</span>
                </div>
                <h2 className="h2" style={{ marginTop: 24 }}>
                  17 jaar bouwen.<br /><span style={{ color: 'var(--inkt-40)' }}>Eén constante: doen.</span>
                </h2>
                <p className="lead" style={{ marginTop: 32, fontSize: 22 }}>
                  "Elke dag nieuwe ideeën. En dan ook echt bouwen."
                </p>
                <p className="body-lg" style={{ marginTop: 24, color: 'var(--inkt-80)' }}>
                  Tom richtte in 2008 Aardbei Communicatie op. Verkocht het bureau in 2015. Sindsdien bouwt hij eigen ventures, met dezelfde discipline en AI als versneller.
                </p>
                <p className="body-lg" style={{ marginTop: 16, color: 'var(--inkt-80)' }}>
                  Ideeën worden pas interessant zodra iemand ze gebruikt. Niet eindeloos brainstormen. Niet vergaderen. Gewoon bouwen.
                </p>
                <div style={{ marginTop: 40, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                  <a href="mailto:hallo@toms-ambitie.nl" className="btn-link">hallo@toms-ambitie.nl →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ANEKDOTE ════════════════════════════════════════════ */}
        <section className="surface-inkt" style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div className="meta" style={{ color: 'rgba(244,241,232,0.5)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <span style={{ width: 32, height: 3, background: 'var(--volt)', display: 'inline-block' }} />
              ANEKDOTE · 1996
            </div>
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.95, color: 'var(--wit-warm)' }}>
              <span>"We hebben toiletborstels<br />verhuurd. Serieus."</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, color: 'rgba(244,241,232,0.7)', maxWidth: 640, marginInline: 'auto' }}>
              Een van Tom's eerste ondernemingen, vóór Aardbei, vóór Toms Ambitie. Het was gek. Het werkte een beetje. En het leerde één les: ondernemen is doen, niet praten.
            </p>
          </div>
        </section>

        {/* ═══ TIMELINE ════════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '160px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96, alignItems: 'flex-start' }}
              className="hero-two-col">
              {/* Sticky left */}
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>03</span>Tijdlijn</span>
                </div>
                <h2 className="h2" style={{ marginTop: 24 }}>
                  17 jaar.<br /><span style={{ color: 'var(--inkt-40)' }}>Van bureau tot venture club.</span>
                </h2>
              </div>

              {/* Timeline items */}
              <div>
                {MILESTONES.map((m) => (
                  <div key={m.y} className="reveal timeline-item" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, padding: '32px 0', borderTop: '1px solid var(--inkt-20)' }}>
                    <div className="display timeline-year" style={{ fontSize: 40, lineHeight: 0.95 }}>{m.y}</div>
                    <div>
                      <h4 className="h4" style={{ marginBottom: 8 }}>{m.t}</h4>
                      <p className="body" style={{ maxWidth: 480 }}>{m.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TEAM GRID ═══════════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '160px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'flex-start', marginBottom: 64 }}
              className="hero-two-col">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="volt-dot" />
                  <span className="eyebrow"><span style={{ marginRight: 8 }}>04</span>Het Team</span>
                </div>
                <h2 className="h2" style={{ marginTop: 24 }}>
                  Vaste kern.<br /><span style={{ color: 'var(--inkt-40)' }}>Plus top-specialisten.</span>
                </h2>
              </div>
              <div style={{ paddingTop: 24 }}>
                <p className="lead">
                  We werken met builders, developers, marketeers, designers en operators. Soms fulltime. Soms tijdelijk. Maar altijd mensen die sneller willen bouwen dan traditionele bedrijven bewegen.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              <div className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="/photos/studio-collab.webp" alt="Studio collab"
                  loading="lazy" decoding="async"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'grayscale(0.15)' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 12px', background: 'var(--wit-warm)' }}>
                  <span className="meta">FIG.02 · STRATEGIE</span>
                </div>
              </div>
              <div className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="/photos/studio-pair.webp" alt="Studio pair"
                  loading="lazy" decoding="async"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'grayscale(0.15)' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 12px', background: 'var(--wit-warm)' }}>
                  <span className="meta">FIG.03 · UITVOERING</span>
                </div>
              </div>
            </div>

            <p className="body-lg" style={{ marginTop: 48, maxWidth: 720, color: 'var(--inkt-80)' }}>
              Developer, designer, marketeer of specialist? Als je sneller wilt bouwen dan traditionele bedrijven bewegen,{' '}
              <Link to="/meebouwen" style={{ borderBottom: '1px solid var(--inkt)', color: 'var(--inkt)' }}>praten we graag</Link>.
            </p>
          </div>
        </section>

        {/* ═══ MOTTO ═══════════════════════════════════════════════ */}
        <section className="surface-inkt" style={{ padding: '180px 0', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--volt)' }} />
          <div className="container-narrow">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.6)' }}><span style={{ marginRight: 8 }}>M</span>Motto</span>
            </div>
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(56px, 7vw, 120px)', lineHeight: 0.92, color: 'var(--wit-warm)', marginTop: 32 }}>
              <span>"Als je het kunt bedenken,<br />kun je het ook doen."</span>
            </h2>
            <p className="meta" style={{ marginTop: 40, color: 'var(--volt)' }}>WAT NIET KAN IS NOG NOOIT GEBEURD</p>
          </div>
        </section>

        {/* ═══ CTA ═════════════════════════════════════════════════ */}
        <section className="surface-papier" style={{ padding: '180px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <h2 className="h2">Bouw mee.</h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Partner, ondernemer, specialist. Wij zoeken altijd mensen om mee te bouwen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
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

export default OverOnsPage;
