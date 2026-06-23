import { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const TOPICS: { label: string; value: string }[] = [
  { label: 'Idee aanleveren', value: 'idee' },
  { label: 'Bouw mee', value: 'meebouwen' },
  { label: 'Investeren', value: 'investeren' },
  { label: 'Specialist', value: 'specialist' },
  { label: 'Iets anders', value: 'anders' },
];

const NOT_FOR = ['Klantopdrachten / uurwerk', 'Detachering', 'Investeringspitches', 'Recruiters'];

const MeebouwenPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [interest, setInterest] = useState('idee');
  const [form, setForm] = useState({ name: '', email: '', linkedin: '', message: '' });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interest }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error ?? 'Iets ging mis. Probeer het opnieuw.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Iets ging mis. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: 14, border: '1px solid var(--inkt-20)', background: 'transparent',
    fontFamily: 'var(--body)', fontSize: 16, outline: 'none', color: 'var(--inkt)',
  };

  useEffect(() => {
    applySEO({
      title: 'Meebouwen — Co-founder, Investeerder of Specialist worden | Toms Ambitie',
      description: 'Wil je co-founder worden, investeren of als specialist meebouwen aan PostPilot, Plug and Power of EmmaStudio? Neem contact op met Tom Mulder van Toms Ambitie in Zwolle.',
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
                'text': 'Ja. Voor Plug and Power en EmmaStudio zoeken we actief co-founders met kennis van product, techniek, finance, growth, UX of domeinspecifieke expertise. PostPilot zoekt ook specialisten voor de volgende groeifase.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Kan ik investeren in de ventures van Toms Ambitie?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Toms Ambitie staat open voor gesprekken met investeerders die strategische waarde toevoegen. Neem contact op via het formulier op deze pagina.',
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
            <span className="eyebrow"><span style={{ marginRight: 8, color: 'var(--inkt-40)' }}>05</span>Contact</span>
            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 32, letterSpacing: '-0.02em' }}>
              <span>Doe mee.<br />Op jouw manier.</span>
            </h1>
            <p className="lead reveal" style={{ marginTop: 48, fontSize: 22, maxWidth: 640 }}>
              Toms Ambitie bouwt ventures vanuit echte problemen. Sommige mensen investeren. Anderen bouwen mee. Soms ontstaat daaruit een compleet nieuwe venture.
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
                <form onSubmit={handleSubmit}>
                  <div className="meta" style={{ marginBottom: 32 }}>FORMULIER · ALLE VELDEN VERPLICHT</div>

                  <div className="form-name-email-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                    <div>
                      <label className="meta" style={{ display: 'block', marginBottom: 12 }}>Naam</label>
                      <input
                        required
                        type="text"
                        placeholder="Voor- en achternaam"
                        value={form.name}
                        onChange={set('name')}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--inkt)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--inkt-20)')}
                      />
                    </div>
                    <div>
                      <label className="meta" style={{ display: 'block', marginBottom: 12 }}>E-mail</label>
                      <input
                        required
                        type="email"
                        placeholder="naam@bedrijf.nl"
                        value={form.email}
                        onChange={set('email')}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--inkt)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--inkt-20)')}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>LinkedIn (optioneel)</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      value={form.linkedin}
                      onChange={set('linkedin')}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--inkt)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--inkt-20)')}
                    />
                  </div>

                  {/* Topic picker */}
                  <div style={{ marginBottom: 24 }}>
                    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>Waar gaat het over?</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {TOPICS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setInterest(t.value)}
                          style={{
                            padding: '10px 16px',
                            background: interest === t.value ? 'var(--inkt)' : 'transparent',
                            color: interest === t.value ? 'var(--wit-warm)' : 'var(--inkt-60)',
                            border: `1px solid ${interest === t.value ? 'var(--inkt)' : 'var(--inkt-20)'}`,
                            fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'background .2s, color .2s',
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 32 }}>
                    <label className="meta" style={{ display: 'block', marginBottom: 12 }}>Bericht</label>
                    <textarea
                      required
                      placeholder="Vertel kort waar het over gaat."
                      rows={6}
                      value={form.message}
                      onChange={set('message')}
                      style={{ ...inputStyle, lineHeight: 1.5, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--inkt)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--inkt-20)')}
                    />
                  </div>

                  {error && (
                    <p style={{ marginBottom: 16, color: 'var(--oranje)', fontFamily: 'var(--mono)', fontSize: 13 }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-volt"
                    disabled={loading}
                    style={{ minHeight: 48, opacity: loading ? 0.6 : 1 }}
                  >
                    {loading ? 'Verzenden...' : 'Verstuur bericht →'}
                  </button>
                </form>
              )}
            </div>

            {/* Aside */}
            <aside>
              <div className="meta" style={{ marginBottom: 32 }}>OF DIRECT</div>
              <div style={{ display: 'grid', gap: 24 }}>
                {[
                  { label: 'E-mail', value: 'hallo@toms-ambitie.nl', link: 'mailto:hallo@toms-ambitie.nl' },
                  { label: 'LinkedIn', value: 'Tom Mulder', link: 'https://linkedin.com/in/tommulder' },
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
              </div>
            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MeebouwenPage;
