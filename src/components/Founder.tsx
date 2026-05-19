import founder from "@/assets/founder.webp";

const timeline = [
  {
    year: "2008",
    title: "Eerste bedrijf",
    desc: "Aardbei Communicatie opgericht in Nijverdal, met twee compagnons.",
    active: true,
  },
  {
    year: "2015",
    title: "Verkocht. Vrij.",
    desc: "Exit gaf de ruimte om te stoppen met klantwerk en te beginnen met eigen bedrijven bouwen.",
  },
  {
    year: "2015 – nu",
    title: "Van bouwer naar bouwclub",
    desc: "Meerdere ventures gestart, sommige verkocht, sommige bewust gestopt. De kern + schil ontstond.",
  },
  {
    year: "Nu",
    title: "Vier draaiende ventures · AI als motor",
    desc: "Pactly, Plug and Power, Post Pilot, OAK. Het volgende idee zit al in de pijp.",
    active: true,
  },
];

export const Founder = () => {
  return (
    <section id="founder" className="bg-paper2">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[360px] sm:min-h-[440px] md:min-h-[500px] overflow-hidden">
          <img
            src={founder}
            alt="Tom Mulder, oprichter van Toms Ambitie"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 from-30% to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 md:p-10">
            <div className="font-display text-paper text-3xl sm:text-4xl md:text-5xl tracking-wide leading-none">
              TOM MULDER
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-volt mt-1">
              Oprichter · Zwolle
            </div>
          </div>
        </div>
        <div className="bg-ink p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
          <p className="stag text-paper/70 mb-6">06 — De oprichter</p>
          <div className="font-display text-paper text-4xl md:text-5xl xl:text-6xl leading-none mb-8">
            DE CLUB
            <br />
            BEGINT BIJ <span className="text-volt">TOM</span>.
          </div>
          <p className="text-paper/80 text-[15px] leading-[1.75] mb-5 max-w-[460px]">
             Twintig jaar marketing en ondernemerschap. Eén bedrijf opgebouwd en verkocht.
             Daarna gestopt met adviseren en begonnen met bouwen.
          </p>
          <p className="text-paper/80 text-[15px] leading-[1.75] mb-8 max-w-[460px]">
             Tom is de motor, niet het hele verhaal. Om hem heen staat een vaste kern en een schil
             van top specialisten. Samen bouwen we sneller dan een traditioneel team, en aan
             bedrijven die we zelf bezitten.
          </p>

          {/* Motto + lijfspreuk */}
          <div className="flex flex-col gap-px mb-10 max-w-[460px]">
            <div className="bg-volt/[0.08] border-l-[3px] border-volt px-6 py-5">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-volt mb-1.5">
                Motto
              </div>
              <div className="font-display text-paper text-xl md:text-2xl leading-[1.1] tracking-wide">
                "ALS JE HET KUNT BEDENKEN,
                <br />
                KUN JE HET OOK DOEN."
              </div>
            </div>
            <div className="bg-orange/[0.08] border-l-[3px] border-orange px-6 py-5">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-orange mb-1.5">
                Lijfspreuk
              </div>
              <div className="font-display text-paper text-xl md:text-2xl leading-[1.1] tracking-wide">
                "WAT NIET KAN IS NOG NOOIT GEBEURD."
              </div>
            </div>
          </div>

          <div className="border-l-2 border-paper/10 pl-6 flex flex-col gap-6">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-[1.9rem] top-1.5 w-2 h-2 rounded-full border-2 border-ink ${t.active ? "bg-volt" : "bg-paper/40"}`}
                />
                <div
                  className={`font-mono text-[10px] md:text-[9px] uppercase tracking-[0.12em] mb-0.5 ${t.active ? "text-volt" : "text-paper/65"}`}
                >
                  {t.year}
                </div>
                <div className="text-sm text-paper font-medium">{t.title}</div>
                <div className="text-[13px] md:text-xs text-paper/70 leading-relaxed mt-0.5">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
