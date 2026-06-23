import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export const TeamTeaser = () => (
  <section className="surface-wit" style={{ padding: '160px 0' }}>
    <div
      className="container-wide team-two-col"
      style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center' }}
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <img
          src="/photos/studio-team-bw.webp"
          alt="Toms Ambitie studio"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
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
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: 0.15, ease }}
      >
        <span className="eyebrow"><span style={{ marginRight: 8, color: 'var(--inkt-40)' }}>04</span>De Makers</span>
        <h2 className="h2" style={{ marginTop: 24 }}>
          Een vaste kern.<br />Een scherpe schil.
        </h2>
        <p className="lead" style={{ marginTop: 32 }}>
          Geen agency. Wel een team dat bouwt. Een vaste kern van builders, developers, designers, marketeers, contentmakers en operators. Aangevuld met een scherpe schil van specialisten per venture.
        </p>
        <Link to="/over-ons" className="btn-link" style={{ marginTop: 40, display: 'inline-flex' }}>
          Maak kennis met het team →
        </Link>
      </motion.div>
    </div>
  </section>
);
