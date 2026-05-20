import { Link } from 'react-router-dom';

export const MeedoenCTA = () => (
  <section className="surface-papier" style={{ padding: '200px 0' }}>
    <div className="container-wide" style={{ textAlign: 'center' }}>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <span className="volt-dot" />
        <span className="eyebrow"><span style={{ marginRight: 8 }}>05</span>Bouw mee</span>
      </div>

      <h2
        className="h1 reveal"
        style={{ marginTop: 32, maxWidth: 1200, marginInline: 'auto', fontSize: 'clamp(72px, 9vw, 144px)' }}
      >
        Heb je een probleem<br />dat een bedrijf verdient?
      </h2>

      <p
        className="lead reveal reveal-delay-1"
        style={{ maxWidth: 560, marginInline: 'auto', marginTop: 40, fontSize: 22 }}
      >
        We zoeken geen klanten — wel partners en ondernemers die mee willen bouwen aan ventures vanuit echte ervaring.
      </p>

      <div
        className="reveal reveal-delay-2"
        style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 56, flexWrap: 'wrap' }}
      >
        <a href="mailto:hallo@toms-ambitie.nl" className="btn btn-volt">
          hallo@toms-ambitie.nl →
        </a>
        <Link to="/meebouwen" className="btn-ghost">
          Contact pagina →
        </Link>
      </div>

    </div>
  </section>
);
