import { useState } from 'react';
import { Link } from 'react-router-dom';

const VENTURES = [
  { name: 'PostPilot', slug: 'post-pilot', tag: 'Marketing AI', url: 'postpilotapp.nl', accent: '#E8A640' },
  { name: 'Pactly', slug: 'pactly', tag: 'Legal SaaS', url: 'pactly.nl', accent: '#4B519E' },
  { name: 'OAK Marketing', slug: 'oak-marketing', tag: 'Marketing bureau', url: 'oakmarketing.nl', accent: '#1B3A8A' },
  { name: 'Plug and Power', slug: 'plug-and-power', tag: 'Energy Tech', url: 'plugandpower.nl', accent: '#FFAA00' },
  { name: 'EmmaBoekt', slug: 'emmaboekt', tag: 'AI assistent', url: 'emmaboekt.nl', accent: '#9333EA' },
];

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/werkwijze', label: 'Werkwijze' },
  { to: '/ventures', label: 'Ventures' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/nieuws', label: 'Blog' },
  { to: '/meebouwen', label: 'Contact' },
];

const Monogram = () => (
  <svg viewBox="0 0 260 200" width="48" style={{ display: 'block' }}>
    <rect x="20" y="24" width="108" height="18" fill="var(--wit-warm)" />
    <rect x="64" y="24" width="20" height="108" fill="var(--wit-warm)" />
    <path d="M152 132 L196 24 L240 132" fill="none" stroke="var(--wit-warm)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round" />
    <line x1="164" y1="94" x2="228" y2="94" stroke="var(--wit-warm)" strokeWidth="14" strokeLinecap="round" />
    <rect x="20" y="156" width="220" height="8" fill="var(--volt)" />
  </svg>
);

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="container-wide">

        {/* Newsletter signup */}
        <div className="footer-newsletter-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          paddingBottom: 64,
          alignItems: 'center',
        }}>
          <div>
            <div className="meta" style={{ color: 'var(--volt)', marginBottom: 16 }}>WERKNOTITIES</div>
            <h3 className="display" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95, color: 'var(--wit-warm)' }}>
              Volg wat<br />we bouwen.
            </h3>
            <p className="body" style={{ marginTop: 16, color: 'rgba(244,241,232,0.6)', maxWidth: 440 }}>
              Maandelijkse notities over werkwijze, ventures en wat we leren tijdens het bouwen. Geen spam. Eerlijk.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div style={{ padding: 24, background: 'rgba(200,240,0,0.06)', borderLeft: '3px solid var(--volt)' }}>
                <span className="meta" style={{ color: 'var(--volt)' }}>INGESCHREVEN</span>
                <p className="body" style={{ color: 'var(--wit-warm)', marginTop: 16 }}>
                  Dank. Eerste werknotitie ontvang je binnen een paar weken.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="naam@bedrijf.nl"
                    className="newsletter-input"
                    style={{ minWidth: 0, flex: '1 1 200px' }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '14px 24px',
                      background: 'var(--volt)',
                      color: 'var(--inkt)',
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      border: 0,
                      flexShrink: 0,
                      minHeight: 48,
                    }}
                  >
                    Aanmelden →
                  </button>
                </div>
                <div className="meta" style={{ marginTop: 12, color: 'rgba(244,241,232,0.55)' }}>
                  ✓ GRATIS · ✓ STOPPEN WANNEER JE WIL · ✓ NL · EN
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Sub-brand row */}
        <div style={{ paddingBottom: 64, borderTop: '1px solid rgba(244,241,232,0.08)', borderBottom: '1px solid rgba(244,241,232,0.08)' }}>
          <div className="meta" style={{ paddingTop: 32, marginBottom: 32, color: 'rgba(244,241,232,0.5)' }}>
            OUR VENTURES
          </div>
          <div
            className="footer-ventures"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 0,
              borderTop: '1px solid rgba(244,241,232,0.08)',
            }}
          >
            {VENTURES.map((v) => (
              <Link
                key={v.name}
                to={`/ventures#${v.slug}`}
                style={{
                  padding: '28px 24px',
                  borderRight: '1px solid rgba(244,241,232,0.08)',
                  borderBottom: '1px solid rgba(244,241,232,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 24,
                  minHeight: 160,
                  position: 'relative',
                  transition: 'background .25s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, background: v.accent }} />
                  <span className="meta" style={{ color: 'rgba(244,241,232,0.5)' }}>{v.tag}</span>
                </span>
                <div>
                  <div className="display" style={{ fontSize: 32, lineHeight: 0.95, color: 'var(--wit-warm)' }}>{v.name}</div>
                  <div className="meta" style={{ marginTop: 8, color: 'rgba(244,241,232,0.55)' }}>{v.url} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer nav grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 64,
            paddingTop: 80,
            paddingBottom: 80,
            borderBottom: '1px solid rgba(244,241,232,0.08)',
          }}
          className="footer-nav-grid"
        >
          {/* Brand */}
          <div>
            <Monogram />
            <div className="display" style={{ fontSize: 40, marginTop: 28, color: 'var(--wit-warm)', lineHeight: 0.9 }}>
              WE BOUWEN<br />WAT WE ZELF<br />MISSEN.
            </div>
            <p className="body-sm" style={{ marginTop: 16, color: 'rgba(244,241,232,0.5)', maxWidth: 280 }}>
              Van interne tools tot schaalbare ventures. Altijd gebouwd vanuit echte frustratie.
            </p>
            <div style={{ width: 96, height: 4, marginTop: 24, background: 'var(--volt)' }} />
          </div>

          {/* Navigatie */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Navigatie</div>
            <ul style={{ display: 'grid', gap: 12, fontSize: 15 }}>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} style={{ color: 'rgba(244,241,232,0.6)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--volt)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.6)'; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Ventures</div>
            <ul style={{ display: 'grid', gap: 12, fontSize: 15 }}>
              {VENTURES.map((v) => (
                <li key={v.slug}>
                  <Link to={`/ventures#${v.slug}`}
                    style={{ color: 'rgba(244,241,232,0.6)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = v.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.6)'; }}>
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Contact</div>
            <ul style={{ display: 'grid', gap: 12, fontSize: 15 }}>
              <li>
                <a href="mailto:hallo@toms-ambitie.nl"
                  style={{ color: 'rgba(244,241,232,0.6)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--volt)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,241,232,0.6)'; }}>
                  hallo@toms-ambitie.nl
                </a>
              </li>
              <li style={{ color: 'rgba(244,241,232,0.55)' }}>Zwolle, Nederland</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 28,
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(244,241,232,0.55)',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div>© 2025 Toms Ambitie · Een venture club uit Zwolle</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="/privacy" style={{ color: 'rgba(244,241,232,0.55)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/voorwaarden" style={{ color: 'rgba(244,241,232,0.55)', textDecoration: 'none' }}>Voorwaarden</Link>
            <span>v3.0 · Definitief</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
