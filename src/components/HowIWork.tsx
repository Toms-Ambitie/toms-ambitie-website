const steps = [
  {
    n: "01",
    label: "Bedenken",
    title: "Probleem zien.",
    desc: "Geen brainstormsessies. We zien iets in de markt dat niet werkt en bepalen direct of er een bedrijf in zit.",
  },
  {
    n: "02",
    label: "Bouwen",
    title: "In weken live.",
    desc: "Geen plan van 40 pagina's. Een werkend product, een landingspagina, klanten in zicht. AI doet het zware werk, de schil zet de puntjes op de i.",
  },
  {
    n: "03",
    label: "Valideren",
    title: "Markt zegt ja of nee.",
    desc: "Echte klanten, echt geld. Binnen drie maanden weten we of het vliegt. Zo niet: stoppen. Zonder drama.",
  },
  {
    n: "04",
    label: "Schalen of exit",
    title: "Doorbouwen of doorgeven.",
    desc: "Werkt het? Dan trekken we performance, content en techniek erbij om op te schalen. Of we verkopen: een exit financiert de volgende.",
  },
];

const partners = [
  {
    title: "Instappen in een venture",
    desc: "Draaiende bedrijven met ruimte voor iemand die meebouwt, meefinanciert of een markt opent.",
  },
  {
    title: "Wij stappen in jouw bedrijf",
    desc: "Bestaand bedrijf met potentie maar te traag? We stappen soms in. Voorwaarde: tempo en eigenaarschap.",
  },
  {
    title: "Samen iets nieuws starten",
    desc: "Heb jij een markt en wij een idee? Of andersom? We beginnen met een sprint. Geen vrijblijvende koffie.",
  },
];

export const HowIWork = () => {
  return (
    <section id="how" className="bg-paper py-20 sm:py-24 md:py-32 border-t-2 border-ink">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-12 md:mb-16">
          <div>
            <p className="stag text-stone-brand mb-4">02 — Hoe wij bouwen</p>
            <h2 className="font-display text-ink text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.88]">
              IDEE
              <br />
              TOT
              <br />
              <span className="text-orange">SCHAAL</span>.
            </h2>
          </div>
          <div className="flex md:items-end">
            <p className="text-stone-brand text-base sm:text-lg leading-relaxed max-w-[520px]">
              Geen kwartaalplannen. Geen pivots na een jaar. Vier stappen, op snelheid.
              De markt ziet ons product voordat de meeste teams aan een tweede meeting toe zijn.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-ink border-2 border-ink">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-6 sm:p-7 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-display text-volt text-5xl md:text-6xl leading-none">{s.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65">
                  {s.label}
                </span>
              </div>
              <div className="font-display text-ink text-2xl md:text-3xl tracking-wide mb-3 leading-tight">
                {s.title}
              </div>
              <p className="text-sm text-ink/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-10">
          <div>
            <p className="stag text-stone-brand mb-4">Samen bouwen</p>
            <h3 className="font-display text-ink text-4xl sm:text-5xl md:text-6xl leading-[0.9]">
              ALS JE
              <br />
              <span className="text-volt bg-ink px-2">TEMPO</span>
              <br />
              AANKAN.
            </h3>
          </div>
          <div className="flex md:items-end">
            <p className="text-stone-brand text-base sm:text-lg leading-relaxed max-w-[520px]">
              We werken graag met mensen die geld, expertise of een markt meebrengen.
              Eén voorwaarde: tempo. Wie meeloopt, bouwt mee aan een portfolio van eigen bedrijven.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[2px] bg-ink border-2 border-ink">
          {partners.map((p) => (
            <div key={p.title} className="bg-paper p-6 sm:p-7 md:p-8 flex flex-col">
              <div className="font-display text-ink text-xl md:text-2xl tracking-wide mb-3 leading-tight">
                {p.title}
              </div>
              <p className="text-sm text-ink/75 leading-relaxed flex-1">{p.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-orange transition-colors"
              >
                Stuur een bericht
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
