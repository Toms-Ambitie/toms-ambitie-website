import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const STAPPEN = [
  { n: '01', title: 'Probleem identificeren' },
  { n: '02', title: 'Valideren met AI' },
  { n: '03', title: 'Werkende demo bouwen' },
  { n: '04', title: 'Business case maken' },
  { n: '05', title: 'Brand book maken' },
  { n: '06', title: 'Eerste platform bouwen' },
  { n: '07', title: 'Lanceren' },
];

const PHASES = [
  { stappen: STAPPEN.slice(0, 2), label: 'PROBLEEM', when: 'Week 1' },
  { stappen: STAPPEN.slice(2, 5), label: 'OPLOSSING', when: 'Week 2–4' },
  { stappen: STAPPEN.slice(5, 7), label: 'PLATFORM', when: 'Week 5–6' },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '6px 12px',
    background: 'var(--inkt)', color: 'var(--wit-warm)',
    fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
  }}>{children}</span>
);

export const WerkwijzeTeaser = () => (
  <section className="surface-wit" style={{ padding: '160px 0' }}>
    <div className="container-wide">

      <motion.div
        className="werkwijze-two-col"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'flex-start', marginBottom: 80 }}
      >
        <div>
          <span className="eyebrow"><span style={{ marginRight: 8, color: 'var(--inkt-40)' }}>03</span>De Werkwijze</span>
          <h2 className="h2" style={{ marginTop: 24 }}>
            Van probleem naar platform.<br />
            <span style={{ color: 'rgba(14,14,12,0.65)' }}>In weken. Niet in jaren.</span>
          </h2>
        </div>
        <div style={{ paddingTop: 24 }}>
          <p className="lead">
            Van SaaS tot AI tools, van e-commerce tot interne tools. Altijd AI-assisted. Altijd vanuit eigen ervaring.
          </p>
          <Link to="/werkwijze" className="btn" style={{ marginTop: 32, display: 'inline-flex' }}>
            Volledige werkwijze →
          </Link>
        </div>
      </motion.div>

      <div
        className="werkwijze-phases"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
      >
        {PHASES.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: i * 0.1, ease }}
            style={{ background: 'var(--papier)', padding: 32, minHeight: 320, display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span className="meta">FASE {i + 1}</span>
              <Tag>{phase.when}</Tag>
            </div>
            <div className="display" style={{ fontSize: 56, lineHeight: 0.9, marginBottom: 24 }}>
              {phase.label}
            </div>
            <ul style={{ display: 'grid', gap: 12, marginTop: 'auto' }}>
              {phase.stappen.map((s) => (
                <li key={s.n} style={{ display: 'flex', alignItems: 'baseline', gap: 12, paddingTop: 12, borderTop: '1px solid var(--inkt-10)' }}>
                  <span className="num" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--inkt-40)' }}>{s.n}</span>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{s.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
