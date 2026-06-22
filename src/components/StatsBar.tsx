import { Counter } from './Counter';

const STATS = [
  { n: 3, suf: '', l: 'Actieve ventures', m: 'Eigen ventures' },
  { n: 17, suf: 'j', l: 'Bouwervaring', m: 'Sinds 2008' },
  { n: 6, suf: 'wk', l: 'Idee naar venture', m: 'Maximale tijd' },
  { n: 0, suf: '', l: 'Klantopdrachten', m: 'Alleen eigen ventures' },
];

export const StatsBar = () => (
  <section className="surface-wit" style={{ padding: '100px 0' }}>
    <div className="container-wide">
      <div
        className="metrics-row"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              borderLeft: i === 0 ? 'none' : '1px solid var(--inkt-10)',
              paddingLeft: i === 0 ? 0 : 24,
            }}
          >
            <div className="display" style={{ fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
              <Counter to={s.n} suffix={s.suf} />
            </div>
            <div className="label" style={{ marginTop: 12, color: 'var(--inkt)' }}>{s.l}</div>
            <div className="body-sm" style={{ marginTop: 6 }}>{s.m}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
