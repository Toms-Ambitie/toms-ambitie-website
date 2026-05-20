const klassiek = [
  'Business plan eerst, bouwen daarna',
  'Externe ideeën van klanten / pitches',
  'Teams van 8–15 mensen',
  'Externe kapitaal vereist',
  'Pas live na 6–12 maanden',
  'Marketing als afterthought',
];

const tomsAmbitie = [
  'Werkende oplossing eerst, business case daarna',
  'Eigen problemen, eigen ervaring',
  'Vaste kern + top specialisten waar nodig',
  'Geen extern kapitaal — eigen middelen',
  'Live binnen 6 weken',
  'Marketing als DNA',
];

export const VsTraditional = () => (
  <section className="surface-inkt" style={{ padding: '160px 0' }}>
    <div className="container-wide">
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span className="volt-dot" />
          <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.5)' }}><span style={{ marginRight: 8 }}>02</span>Positionering</span>
        </div>
        <h2 className="h2 reveal" style={{ marginTop: 24, color: 'var(--wit-warm)', maxWidth: 1100, marginInline: 'auto' }}>
          We zijn geen klassieke<br />venture builder.
        </h2>
      </div>

      <div
        className="comparison-two-col"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid rgba(244,241,232,0.1)' }}
      >
        {/* Klassieke venture builder */}
        <div style={{ padding: 48, borderRight: '1px solid rgba(244,241,232,0.1)' }}>
          <div className="meta" style={{ color: 'var(--oranje)', marginBottom: 32 }}>KLASSIEKE VENTURE BUILDER</div>
          <ul style={{ display: 'grid', gap: 20 }}>
            {klassiek.map((s, i) => (
              <li
                key={s}
                className="reveal"
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', paddingBottom: 16, borderBottom: '1px solid rgba(244,241,232,0.08)' }}
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--oranje)', minWidth: 24, paddingTop: 2 }}>
                  0{i + 1}
                </span>
                <span className="strike" style={{ color: 'rgba(244,241,232,0.5)', fontSize: 18 }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Toms Ambitie */}
        <div style={{ padding: 48, background: 'rgba(200,240,0,0.04)', borderTop: '4px solid var(--volt)' }}>
          <div className="meta" style={{ color: 'var(--volt)', marginBottom: 32 }}>TOMS AMBITIE</div>
          <ul style={{ display: 'grid', gap: 20 }}>
            {tomsAmbitie.map((s, i) => (
              <li
                key={s}
                className="reveal"
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', paddingBottom: 16, borderBottom: '1px solid rgba(244,241,232,0.1)' }}
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--volt)', minWidth: 24, paddingTop: 2 }}>
                  0{i + 1}
                </span>
                <span style={{ color: 'var(--wit-warm)', fontSize: 18 }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="lead reveal" style={{ marginTop: 64, textAlign: 'center', color: 'rgba(244,241,232,0.7)', maxWidth: 720, marginInline: 'auto' }}>
        Geen agency, geen fonds, geen holding. Een actief systeem dat problemen omzet in bedrijven — en dat sneller, eerlijker en met minder mensen doet dan de klassieke aanpak.
      </p>
    </div>
  </section>
);
