import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export const MeedoenCTA = () => (
  <section className="surface-inkt" style={{ padding: '200px 0', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle mesh accent */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,240,0,0.06) 0%, transparent 70%)',
      }}
    />

    <div className="container-wide" style={{ textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        viewport={{ once: true }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}
      >
        <span className="volt-dot" />
        <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.5)' }}><span style={{ marginRight: 8 }}>05</span>Bouw mee</span>
      </motion.div>

      <motion.h2
        className="h1 reveal"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
        viewport={{ once: true }}
        style={{ marginTop: 32, maxWidth: 1200, marginInline: 'auto', fontSize: 'clamp(72px, 9vw, 144px)', color: 'var(--wit-warm)' }}
      >
        Heb je een probleem<br />dat een bedrijf verdient?
      </motion.h2>

      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease }}
        viewport={{ once: true }}
        style={{ maxWidth: 560, marginInline: 'auto', marginTop: 40, fontSize: 22, color: 'rgba(244,241,232,0.65)' }}
      >
        We zoeken geen klanten — wel partners en ondernemers die mee willen bouwen aan ventures vanuit echte ervaring.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease }}
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 56, flexWrap: 'wrap' }}
      >
        <a href="mailto:hallo@toms-ambitie.nl" className="btn btn-volt">
          hallo@toms-ambitie.nl →
        </a>
        <Link
          to="/meebouwen"
          className="btn"
          style={{ background: 'transparent', border: '1.5px solid rgba(244,241,232,0.25)', color: 'rgba(244,241,232,0.75)' }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'rgba(244,241,232,0.08)';
            el.style.borderColor = 'rgba(244,241,232,0.4)';
            el.style.color = 'var(--wit-warm)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'transparent';
            el.style.borderColor = 'rgba(244,241,232,0.25)';
            el.style.color = 'rgba(244,241,232,0.75)';
          }}
        >
          Contact pagina →
        </Link>
      </motion.div>
    </div>
  </section>
);
