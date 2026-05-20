interface TickerProps {
  items: string[];
  dark?: boolean;
  separator?: string;
}

export function Ticker({ items, dark = true, separator = '◆' }: TickerProps) {
  const repeated = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div
      style={{
        background: dark ? 'var(--inkt)' : 'var(--wit-warm)',
        color: dark ? 'var(--wit-warm)' : 'var(--inkt)',
        padding: '18px 0',
        borderTop: `1px solid ${dark ? 'rgba(244,241,232,0.08)' : 'rgba(14,14,12,0.08)'}`,
        borderBottom: `1px solid ${dark ? 'rgba(244,241,232,0.08)' : 'rgba(14,14,12,0.08)'}`,
        overflow: 'hidden',
      }}
    >
      <div className="marquee">
        <div
          className="marquee-track"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {repeated.map((i) =>
            items.map((item, j) => (
              <span key={`${i}-${j}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 24 }}>
                <span style={{ color: dark ? 'rgba(244,241,232,0.7)' : 'rgba(14,14,12,0.6)' }}>{item}</span>
                <span style={{ color: 'var(--volt)', filter: 'saturate(1.2)' }}>{separator}</span>
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
