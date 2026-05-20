const PILLARS = [
  {
    t: 'Probleem-first',
    d: 'Elk venture begint met een probleem dat we zelf ervaren. Geen denkbeeldige klanten, geen marktonderzoek op papier.',
  },
  {
    t: 'AI als versneller',
    d: 'Niet als experiment, maar als werkwijze. Wat een team van tien deed in maanden, doen wij in weken.',
  },
  {
    t: 'Altijd onderbouwd',
    d: 'Elk idee krijgt een plan. Nooit roekeloos. Maar ook nooit zo lang gepland dat het niet meer gebouwd wordt.',
  },
  {
    t: 'Eerlijk over resultaten',
    d: 'Ook, en vooral, over wat niet werkte. Een goede oplossing zonder business case is een kans. Andersom is waardeloos.',
  },
];

export const Manifesto = () => (
  <section className="surface-inkt" style={{ padding: '180px 0' }}>
    <div className="container-wide">

      <div style={{ marginBottom: 96, maxWidth: 1100 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span className="volt-dot" />
          <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.5)' }}><span style={{ marginRight: 8 }}>03</span>Manifest</span>
        </div>
        <h2 className="h2 reveal" style={{ marginTop: 24, color: 'var(--wit-warm)' }}>
          De oplossing staat<br />altijd voorop.<br />
          <span style={{ color: 'var(--volt)' }}>De business case volgt.</span>
        </h2>
      </div>

      <div
        className="manifesto-pillars"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
      >
        {PILLARS.map((p, i) => (
          <div
            key={i}
            className="reveal"
            style={{ paddingLeft: 24, borderLeft: '3px solid var(--volt)' }}
          >
            <div className="num" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--volt)', marginBottom: 16 }}>
              0{i + 1} / 04
            </div>
            <h4
              className="display"
              style={{ fontSize: 'clamp(22px, 2.3vw, 32px)', lineHeight: 1.1, marginBottom: 32, color: 'var(--wit-warm)', overflowWrap: 'break-word', hyphens: 'auto' }}
            >
              {p.t}
            </h4>
            <p className="body" style={{ color: 'rgba(244,241,232,0.7)' }}>{p.d}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);
