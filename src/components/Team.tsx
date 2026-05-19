const core = {
  title: "DE KERN",
  desc: "Compact. Beslissingsbevoegd. Bouwt mee in elke fase. Hier ontstaan de ideeën, hier liggen de kaarten op tafel.",
  bullets: [
    "Strategie & venture design",
    "Productontwikkeling & AI",
    "Bedrijfsvoering & finance",
  ],
};

const shell = {
  title: "DE SCHIL",
  desc: "Vaste specialisten. Altijd dezelfde mensen, altijd dezelfde kwaliteit. Geen losse freelancers, maar een team dat we keer op keer optrommelen.",
  roles: [
    { role: "Art Director", note: "Identiteit & merkwerk" },
    { role: "Data Engineer", note: "Pipelines & meetbaarheid" },
    { role: "Performance marketing", note: "Google Ads & Meta" },
    { role: "Video & content", note: "Productie van A tot Z" },
    { role: "Development", note: "Web, app, integraties" },
    { role: "Productie & techniek", note: "Vaste partners, snel schakelen" },
  ],
};

export const Team = () => {
  return (
    <section id="team" className="bg-ink py-20 sm:py-24 md:py-32 border-t-4 border-volt">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-12 md:mb-16">
          <div>
            <p className="stag text-volt mb-4">05 — De club</p>
            <h2 className="font-display text-paper text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.88]">
              KERN
              <br />
              PLUS
              <br />
              <span className="text-volt">SCHIL</span>.
            </h2>
          </div>
          <div className="flex md:items-end">
            <p className="text-paper/75 text-base sm:text-lg leading-relaxed max-w-[540px]">
              Een vaste kern die beslist en bouwt. Eromheen een kring van top specialisten die we
              telkens optrommelen. Hetzelfde team, andere combinatie per venture.
              <br />
              <span className="text-volt font-medium">1 + 1 = 5.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[2px] bg-volt border-2 border-volt">
          {/* Core */}
          <div className="bg-ink p-6 sm:p-8 md:p-10 flex flex-col">
            <div className="flex items-baseline justify-between mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-volt">
                · Vast · dagelijks ·
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/70">
                <span className="w-2 h-2 rounded-full bg-volt animate-pulse-dot" />
                Aanwezig
              </span>
            </div>
            <div className="font-display text-paper text-4xl md:text-5xl tracking-wide mb-4">
              {core.title}
            </div>
            <p className="text-paper/80 text-base leading-relaxed mb-6">{core.desc}</p>
            <ul className="border-t border-paper/15 pt-5 space-y-3">
              {core.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-paper text-sm">
                  <span aria-hidden className="text-volt font-mono shrink-0">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shell */}
          <div className="bg-ink p-6 sm:p-8 md:p-10 flex flex-col">
            <div className="flex items-baseline justify-between mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange">
                · Vast netwerk · op afroep ·
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/70">
                <span className="w-2 h-2 rounded-full bg-orange" />
                Standby
              </span>
            </div>
            <div className="font-display text-paper text-4xl md:text-5xl tracking-wide mb-4">
              {shell.title}
            </div>
            <p className="text-paper/80 text-base leading-relaxed mb-6">{shell.desc}</p>
            <ul className="border-t border-paper/15 pt-5 grid sm:grid-cols-2 gap-x-5 gap-y-3">
              {shell.roles.map((r) => (
                <li key={r.role} className="flex flex-col">
                  <span className="text-paper text-sm font-medium">{r.role}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/55 mt-0.5">
                    {r.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[2px] bg-volt p-5 md:p-6 font-mono text-[11px] text-ink uppercase tracking-[0.1em] leading-loose">
          Specialist met tempo? &nbsp;→&nbsp;{" "}
          <a href="#contact" className="underline decoration-ink decoration-[2px] underline-offset-4 hover:text-paper hover:bg-ink px-1 transition-colors">
            Sluit aan bij de schil.
          </a>
        </div>
      </div>
    </section>
  );
};
