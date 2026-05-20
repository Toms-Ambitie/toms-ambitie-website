const ITEMS = [
  "PACTLY",
  "PLUG AND POWER",
  "POST PILOT",
  "OAK MARKETING",
  "EMMABOEKT",
  "LED-IBC",
  "AARDBEI COMMUNICATIE",
  "DESIGNERSHIRTS",
  "PARTYBLENDER",
  "ENTRANZ",
  "ZOUTGROOTHANDEL",
  "TOILETBORSTEL HUREN",
];

// Build a flat string with yellow dot separators — repeated twice for seamless loop
const buildTickerContent = () => {
  const segment = ITEMS.map((item) => `  ●  ${item}`).join("") + "  ";
  return segment + segment; // doubled so the -50% translateX creates a seamless loop
};

export const FixedTicker = () => {
  const text = buildTickerContent();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "#0E0E0C",
        height: 36,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-hidden="true"
    >
      <span
        className="animate-ticker inline-block font-mono uppercase"
        style={{
          fontSize: 10,
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.7)",
        }}
        // Replace ● with a styled dot via dangerouslySetInnerHTML so we can colour it volt
        dangerouslySetInnerHTML={{
          __html: text.replace(
            /●/g,
            `<span style="color:#C8F000;font-size:8px;vertical-align:middle;">●</span>`,
          ),
        }}
      />
    </div>
  );
};
