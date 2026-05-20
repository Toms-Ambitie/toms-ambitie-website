import { Link } from 'react-router-dom';

export const TeamTeaser = () => (
  <section className="surface-wit" style={{ padding: '160px 0' }}>
    <div
      className="container-wide team-two-col"
      style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center' }}
    >
      {/* Photo */}
      <div className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/photos/studio-team-bw.jpg"
          alt="Toms Ambitie studio"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'grayscale(0.2)' }}
        />
        <div style={{
          position: 'absolute', bottom: 16, left: 16,
          padding: '8px 14px',
          background: 'var(--wit-warm)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 6, height: 6, background: 'var(--volt)' }} />
          <span className="meta">STUDIO ZWOLLE · 2025</span>
        </div>
      </div>

      {/* Text */}
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span className="volt-dot" />
          <span className="eyebrow"><span style={{ marginRight: 8 }}>04</span>De Makers</span>
        </div>
        <h2 className="h2" style={{ marginTop: 24 }}>
          Een vaste kern.<br />Top specialisten.
        </h2>
        <p className="lead" style={{ marginTop: 32 }}>
          Geen agency. Wel een team dat bouwt — een vaste kern aangevuld met top-specialisten. AI versnelt het werk. Mensen bepalen de richting.
        </p>
        <Link to="/over-ons" className="btn-link" style={{ marginTop: 40, display: 'inline-flex' }}>
          Maak kennis met het team →
        </Link>
      </div>
    </div>
  </section>
);
