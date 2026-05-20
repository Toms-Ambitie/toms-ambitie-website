import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const TOPICS = ['Idee aanleveren', 'Bouw mee', 'Sparren', 'Pers', 'Iets anders'];
const NOT_FOR = ['Klantopdrachten / uurwerk', 'Detachering', 'Investeringspitches', 'Recruiters'];

const Field = ({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) => (
  <div>
    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%', padding: 14, border: '1px solid var(--inkt-20)', background: 'transparent',
        fontFamily: 'var(--body)', fontSize: 16, outline: 'none',
      }}
      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--inkt)'}
      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--inkt-20)'}
    />
  </div>
);

const MeebouwenPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState('Idee aanleveren');

  useEffect(() => {
    applySEO({
      title: 'Meebouwen — Co-founder, Investeerder of Specialist worden | Toms Ambitie',
      description: 'Wil je co-founder worden, investeren of als specialist meebouwen aan Post Pilot, Pactly, Plug and Power of EmmaBoekt? Neem contact op met Tom Mulder van Toms Ambitie in Zwolle.',
      canonical: 'https://www.toms-ambitie.nl/meebouwen',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Meebouwen aan Toms Ambitie',
          'url': 'https://www.toms-ambitie.nl/meebouwen',
          'description': 'Neem contact op om co-founder, investeerder of specialist te worden bij een van de ventures van Toms Ambitie.',
          'isPartOf': { '@id': 'https://www.toms-ambitie.nl/#website' },
          'about': { '@id': 'https://www.toms-ambitie.nl/#organization' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Hoe kan ik meebouwen aan Toms Ambitie?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Stuur een bericht via het contactformulier op deze pagina. Geef aan of je mee wilt bouwen als co-founder, specialist of vanuit een andere hoek. Tom Mulder reageert persoonlijk.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Zoekt Toms Ambitie co-founders?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Ja. Voor Pactly, Plug and Power en EmmaBoekt zoeken we actief co-founders met kennis van product, techniek, finance, growth, UX of domeinspecifieke expertise. Post Pilot zoekt ook specialisten voor de volgende groeifase.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Kan ik investeren in de ventures van Toms Ambitie?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Toms Ambitie staat open voor gesprekken met investeerders die strategische waarde toevoegen — kapitaal, kennis, netwerk of een combinatie daarvan. Neem contact op via het formulier op deze pagina.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Wat is een venture studio?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Een venture studio bouwt eigen bedrijven vanuit een vaste kern — in plaats van te werken voor klanten. Toms Ambitie valideert problemen intern, bouwt een MVP en maakt er een zelfstandige onderneming van als het werkt. Sneller dan een traditionele startup, met minder risico omdat we alles zelf testen.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Welke ventures zijn beschikbaar om aan mee te bouwen?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Toms Ambitie heeft vijf actieve ventures: Post Pilot (live SaaS voor LinkedIn-contentautomatisering), Pactly (consumer fintech voor vaste lasten), OAK Marketing (actief marketingbureau), Plug and Power (e-commerce platform voor energie) en EmmaBoekt (AI-assistent voor administratie). Alle ventures staan open voor de juiste mensen.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Wat voor specialisten zoekt Toms Ambitie?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Per venture verschilt dat. In het algemeen zijn we geinteresseerd in mensen met expertise op het gebied van product, technologie, growth marketing, finance, legal, UX/design, AI, energiemarkt of consumentenmarketing. Maar ook als jij iets anders toevoegt dat past — stuur een bericht.',
              },
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="surface-wit page-hero" style={{ padding: '140px 0 80px' }}>
          <div className="container-wide">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow"><span style={{ marginRight: 8 }}>05</span>Contact</span>
            </div>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Doe mee.<br />Op jouw manier.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Toms Ambitie bouwt ventures vanuit echte problemen, gedrag en schaalbare ideeën. Sommige mensen investeren. Anderen bouwen mee. Soms ontstaat daaruit een compleet nieuwe venture.
            </p>
          </div>
        </section>

        {/* ═══ FORM + CONTACT ══════════════════════════════════════ */}
        <section className="surface-wit" style={{ padding: '80px 0 120px' }}>
          <div
            className="container-wide meebouwen-form-grid"
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 96 }}
          >
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ padding: 64, background: 'var(--papier)', borderTop: '4px solid var(--volt)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', background: 'var(--volt)', color: 'var(--inkt)', fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    VERZONDEN
                  </span>
                  <h2 className="display" style={{ fontSize: 64, lineHeight: 0.95, marginTop: 24 }}>Dank.<br />Tot snel.</h2>
                  <p className="body-lg" style={{ marginTop: 24 }}>Tom kijkt meestal binnen 24 uur naar nieuwe berichten. Vaak sneller. Check je inbox.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="meta" style={{ marginBottom: 32 }}>FORMULIER · ALLE VELDEN VERPLICHT</div>

                  <div className="form-name-email-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                    <Field label="Naam" placeholder="Voor- en achternaam" />
                    <Field label="E-mail" placeholder="naam@bedrijf.nl" type="email" />
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <Field label="Bedrijf · functie" placeholder="Optioneel" />
                  </div>

                  {/* Topic picker */}
                  <div style={{ marginBottom: 32 }}>
                    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>Waar gaat het over?</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {TOPICS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          style={{
                            padding: '10px 16px',
                            background: topic === t ? 'var(--inkt)' : 'transparent',
                            color: topic === t ? 'var(--wit-warm)' : 'var(--inkt-60)',
                            border: `1px solid ${topic === t ? 'var(--inkt)' : 'var(--inkt-20)'}`,
                            fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                            transition: 'background .2s, color .2s',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 40 }}>
                    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>Bericht</label>
                    <textarea
                      placeholder="Vertel kort waar het over gaat."
                      rows={6}
                      style={{
                        width: '100%', padding: 16, border: '1px solid var(--inkt-20)', background: 'transparent',
                        fontFamily: 'var(--body)', fontSize: 16, lineHeight: 1.5, resize: 'vertical', outline: 'none',
                      }}
                      onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--inkt)'}
                      onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--inkt-20)'}
                    />
                  </div>

                  <button type="submit" className="btn btn-volt" style={{ minHeight: 48 }}>Verstuur bericht →</button>
                </form>
              )}
            </div>

            {/* Aside */}
            <aside>
              <div className="meta" style={{ marginBottom: 32 }}>OF DIRECT</div>
              <div style={{ display: 'grid', gap: 24 }}>
                {[
                  { label: 'E-mail', value: 'hallo@toms-ambitie.nl', link: 'mailto:hallo@toms-ambitie.nl' },
                  { label: 'LinkedIn', value: 'Tom Mulder', link: 'https://linkedin.com' },
                  { label: 'Studio', value: 'Zwolle, Nederland' },
                ].map(({ label, value, link }) => (
                  <div key={label} style={{ paddingBottom: 16, borderBottom: '1px solid var(--inkt-10)' }}>
                    <div className="meta" style={{ marginBottom: 4 }}>{label}</div>
                    {link ? (
                      <a href={link} style={{ fontSize: 22, fontFamily: 'var(--body)', fontWeight: 500, display: 'inline-block', color: 'var(--inkt)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color .2s' }}
                        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.borderColor = 'var(--inkt)'; }}
                        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.borderColor = 'transparent'; }}>
                        {value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 22, fontFamily: 'var(--body)', fontWeight: 500 }}>{value}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Not for */}
              <div style={{ marginTop: 64, padding: 32, background: 'var(--inkt)', color: 'var(--wit-warm)', borderTop: '4px solid var(--volt)' }}>
                <div className="meta" style={{ color: 'rgba(244,241,232,0.5)', marginBottom: 16 }}>NIET VOOR</div>
                <ul style={{ display: 'grid', gap: 12 }}>
                  {NOT_FOR.map((t) => (
                    <li key={t} style={{ color: 'rgba(244,241,232,0.5)', textDecoration: 'line-through', textDecorationColor: 'var(--oranje)' }}>{t}</li>
                  ))}
                </ul>
                <p className="body-sm" style={{ marginTop: 24, color: 'rgba(244,241,232,0.7)' }}>
                  Voor klantwerk: bekijk{' '}
                  <Link to="/ventures#oak-marketing" style={{ color: 'var(--volt)', borderBottom: '1px solid var(--volt)' }}>
                    OAK Marketing
                  </Link>
                  . Dat is waar we voor klanten werken.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ═══ MOTTO ═══════════════════════════════════════════════ */}
        <section className="surface-inkt" style={{ padding: '160px 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div style={{ width: 48, height: 4, background: 'var(--volt)', margin: '0 auto 32px' }} />
            <h2 className="clip-reveal display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.92, color: 'var(--wit-warm)' }}>
              <span>"Als je het kunt bedenken,<br />kun je het ook doen."</span>
            </h2>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MeebouwenPage;
