type Line = {
  text: string;
  emph?: string;
  suffix?: string;
  emph2?: string;
  strike?: string;
};

const lines: Line[] = [
  { text: "EEN BEDRIJF HOORT", emph: "OPLOSSINGEN", suffix: "TE BIEDEN." },
  { text: "VOOR IEDER IDEE IS ER", emph: "MARKT." },
  { text: "SNELHEID IS NIET ALLEEN VOORDEEL.", suffix: "HET IS EEN", emph2: "TACTIEK." },
  { text: "EEN GOED TEAM IS", emph: "1 + 1 = 5." },
  { text: "AI IS GEEN TOOL.", suffix: "HET IS EEN", emph2: "TEAM." },
  { text: "ALS JE HET NIET PROBEERT,", suffix: "ZUL JE HET", emph2: "NOOIT WETEN." },
];

export const Manifest = () => {
  return (
    <section id="manifest" className="bg-volt">
      <div className="grid lg:grid-cols-[1fr_2fr] min-h-[80vh]">
        <div className="bg-ink p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-8 md:gap-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/60">
            01 — Wat wij geloven
          </div>
          <div className="font-display text-volt text-5xl sm:text-6xl md:text-7xl leading-[0.9]">
            ZO
            <br />
            DENKEN
            <br />
            WIJ.
          </div>
          <div className="text-xs text-paper/65 leading-relaxed max-w-[260px]">
            Geen mooie woorden. Dit zijn de regels waar elk bedrijf dat we bouwen aan getoetst wordt.
          </div>
        </div>
        <div className="p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center gap-5 sm:gap-6 md:gap-8">
          {lines.map((l, i) => (
            <div
              key={i}
              className="font-display text-ink text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-[1.05] pb-5 sm:pb-6 md:pb-8 border-b border-ink/15"
            >
              {l.text}{" "}
              {l.strike && (
                <span className="line-through decoration-orange decoration-[3px] opacity-50">
                  {l.strike}
                </span>
              )}
              {l.emph && (
                <span className="bg-ink text-volt px-2">{l.emph}</span>
              )}
              {l.suffix && <> {l.suffix} </>}
              {l.emph2 && (
                <span className="bg-ink text-volt px-2">{l.emph2}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
