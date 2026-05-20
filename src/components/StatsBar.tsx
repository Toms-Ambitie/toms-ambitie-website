export const StatsBar = () => {
  // 4 active ventures shown on homepage (Post Pilot, Pactly, OAK Marketing, Plug and Power)
  const ventureCount = 4;
  const yearsActive = new Date().getFullYear() - 2008;

  const stats = [
    { value: String(ventureCount), label: "Eigen ventures" },
    { value: `${yearsActive}J`, label: "Ondernemingservaring" },
    { value: "6WK", label: "Van idee naar launch" },
    { value: "0", label: "Externe investeerders" },
  ];

  return (
    <div
      style={{
        background: "#F4F1E8",
        borderTop: "1px solid rgba(14,14,12,0.1)",
        borderBottom: "1px solid rgba(14,14,12,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "32px 24px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(14,14,12,0.08)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 1,
                color: "#0E0E0C",
                letterSpacing: "-0.01em",
              }}
            >
              {stat.value}
            </div>
            <div
              className="font-mono uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "rgba(14,14,12,0.45)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
