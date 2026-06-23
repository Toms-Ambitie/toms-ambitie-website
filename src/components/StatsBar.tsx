import { motion } from 'framer-motion';
import { Counter } from './Counter';

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { n: 3, suf: '', l: 'Actieve ventures', m: 'Eigen ventures' },
  { n: 17, suf: 'j', l: 'Bouwervaring', m: 'Sinds 2008' },
  { n: 6, suf: 'wk', l: 'Idee naar venture', m: 'Maximale tijd' },
  { n: 0, suf: '', l: 'Klantopdrachten', m: 'Alleen eigen ventures' },
];

export const StatsBar = () => (
  <section className="surface-wit" style={{ padding: '120px 0', borderBottom: '1px solid var(--inkt-08)' }}>
    <div className="container-wide">
      <div
        className="metrics-row"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.08, ease }}
            viewport={{ once: true, margin: '-60px' }}
            style={{
              borderLeft: i === 0 ? 'none' : '1px solid var(--inkt-10)',
              paddingLeft: i === 0 ? 0 : 32,
            }}
          >
            <div className="display" style={{ fontSize: 'clamp(72px, 7vw, 104px)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--inkt)' }}>
              <Counter to={s.n} suffix={s.suf} />
            </div>
            <div className="label" style={{ marginTop: 16, color: 'var(--inkt)', fontSize: 12, letterSpacing: '0.12em' }}>{s.l}</div>
            <div className="body-sm" style={{ marginTop: 6, color: 'var(--inkt-40)' }}>{s.m}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
