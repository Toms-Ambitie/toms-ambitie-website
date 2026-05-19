import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LinkedNews } from "@/components/LinkedNews";
import { ProjectTags, type ProjectTag } from "@/data/projectTags";
import aardbeiLogo from "@/assets/aardbei-communicatie-logo.png";
import ledIbcLogo from "@/assets/led-ibc-logo.jpg";
import entranzLogo from "@/assets/entranz-logo.png";

type Project = {
  slug: string;
  name: string;
  mark: string;
  logo?: string;
  logoBg?: string;
  cat: string;
  period: string;
  status: string;
  tag: string;
  desc: string;
  story: string[];
  highlights: { label: string; value: string }[];
  lessons: string[];
  cta: { label: string; href: string };
  newsTag?: ProjectTag;
};

const past: Project[] = [
  {
    slug: "aardbei-communicatie",
    name: "AARDBEI COMMUNICATIE",
    mark: "AC",
    logo: aardbeiLogo,
    logoBg: "#ffffff",
    cat: "Communicatiebureau",
    period: "2008 — 2015",
    status: "Verkocht",
    tag: "Hier begon de bouwclub.",
    desc: "Het eerste bedrijf van de oprichter. In zeven jaar uitgebouwd, in 2015 verkocht. De exit gaf de financiële én mentale ruimte om te stoppen met klantwerk en te beginnen met het bouwen van eigen bedrijven.",
    story: [
      "Aardbei was geen plan. Drie mensen, geen baas, samen iets opbouwen.",
      "Zeven jaar strategie, branding en campagnes voor MKB en publieke opdrachtgevers. Hard werken, weinig glamour.",
      "Toen er een goede koper kwam: verkocht. Geen drama. Een hoofdstuk afsluiten is óók ondernemen, en het opende de deur naar Toms Ambitie.",
    ],
    highlights: [
      { label: "Periode", value: "2008 — 2015" },
      { label: "Rol", value: "Mede-oprichter" },
      { label: "Exit", value: "Verkocht (2015)" },
    ],
    lessons: [
      "Een goed team verslaat een goed idee.",
      "Verkopen is geen falen. Het financiert het volgende.",
      "Een merk bouw je in jaren. Aandacht in dagen.",
    ],
    cta: { label: "Stel een vraag", href: "#contact" },
    newsTag: ProjectTags.aardbeiCommunicatie,
  },
  {
    slug: "led-ibc",
    name: "LED-IBC",
    mark: "LED",
    logo: ledIbcLogo,
    logoBg: "#000000",
    cat: "Event verhuur · Verlichte kubussen",
    period: "Afgerond",
    status: "Geleerd & door",
    tag: "Hardware. Logistiek. Lessen.",
    desc: "Verhuur van verlichte, stapelbare IBC-kubussen voor festivals en events. Klein begonnen, snel opgeschaald. Het bewijs dat een fysiek verhuurbedrijf een ander spel is dan software.",
    story: [
      "Het idee was simpel: maak van een industriële IBC-kubus een verlicht, stapelbaar bouwblok voor podia en events.",
      "Het werkte. Festivals, clubs, congressen: overal stonden ze. Mooi product, mooie marges, op papier.",
      "In de praktijk: vrachtwagens, opslag, kapotte LED-strips, seizoenspieken. Verhuur is logistiek met een product erbij. Belangrijke les voor alles wat de club daarna bouwde.",
    ],
    highlights: [
      { label: "Categorie", value: "Event rental" },
      { label: "Status", value: "Afgerond" },
      { label: "Waarde", value: "Operatie-DNA" },
    ],
    lessons: [
      "Fysiek schalen kost cash. Software niet.",
      "Seizoen betekent: 8 maanden plannen voor 4 maanden omzet.",
      "Een mooi product redt je niet van slechte logistiek.",
    ],
    cta: { label: "Vraag iets over dit traject", href: "#contact" },
    newsTag: ProjectTags.ledIbc,
  },
  {
    slug: "entranz",
    name: "ENTRANZ",
    mark: "EN",
    logo: entranzLogo,
    logoBg: "#E87B11",
    cat: "Toegangsoplossingen",
    period: "Afgerond",
    status: "Bewust gestopt",
    tag: "Stoppen is ook winst.",
    desc: "Slimme toegangsoplossingen voor de zakelijke markt. Product klopte, timing niet. Na een paar maanden bewust de stekker eruit, precies zoals onze cyclus voorschrijft.",
    story: [
      "ENTRANZ richtte zich op slimme toegang voor zakelijke omgevingen. Op papier een mooie markt.",
      "In de praktijk: lange salescycli, te veel partijen aan tafel, te weinig urgentie bij klanten.",
      "Twee opties: doorduwen en hopen, of stoppen. We hebben gestopt. Beter een kort boek dan een lang verhaal zonder einde.",
    ],
    highlights: [
      { label: "Categorie", value: "Access tech" },
      { label: "Status", value: "Bewust gestopt" },
      { label: "Waarde", value: "Tijd terugverdiend" },
    ],
    lessons: [
      "Een goed product zonder urgentie is geen markt.",
      "Stoppen voelt slecht. Niet stoppen voelt later veel slechter.",
      "Korte salescycli of geen salescyclus. Kies.",
    ],
    cta: { label: "Spar over jouw idee", href: "#contact" },
    newsTag: ProjectTags.entranz,
  },
  {
    slug: "designershirts",
    name: "DESIGNERSHIRTS",
    mark: "DS",
    cat: "E-commerce · Custom apparel",
    period: "Afgerond",
    status: "Geleerd & door",
    tag: "E-commerce voordat het cool was.",
    desc: "Custom shirts online verkopen. Klein, vroeg, alles zelf gedaan: design-tool, productie, fulfillment. Niet de grote winnaar, wel de leerschool waarop alle latere webshops in de portfolio leunen.",
    story: [
      "DesignerShirts liep voor de muziek uit. Custom apparel online, voordat de meeste mensen een webshop in hun bookmarks hadden.",
      "Alles in eigen hand: site, productie, verzending, klantenservice. Krappe marges, zware operatie.",
      "Geen klapper. Wel het fundament onder elke webshop die de club daarna bouwde. Plug and Power voorop.",
    ],
    highlights: [
      { label: "Categorie", value: "E-commerce" },
      { label: "Status", value: "Afgerond" },
      { label: "Waarde", value: "E-commerce DNA" },
    ],
    lessons: [
      "Een webshop is 10% design en 90% operatie.",
      "Custom = handwerk. Schaal vraagt standaard.",
      "Te vroeg in een markt verlies je net zoveel als te laat.",
    ],
    cta: { label: "Vraag iets over dit traject", href: "#contact" },
    newsTag: ProjectTags.designerShirts,
  },
  {
    slug: "partyblender",
    name: "PARTYBLENDER",
    mark: "PB",
    cat: "Music tech · Consumer app",
    period: "Afgerond",
    status: "Geleerd & door",
    tag: "Te vroeg = hetzelfde als te laat.",
    desc: "App die automatisch je playlist mixt, geen DJ-skills nodig. Concept klopte, markt was er nog niet. Wat Spotify later semi-deed, deden wij zonder hun catalogus en zonder hun budget.",
    story: [
      "PartyBlender wilde DJ-werk uit handen nemen: gooi je playlist erin, app maakt er een set van.",
      "Technisch werkte het. Mensen vonden het leuk. Maar consumer adoption vraagt enorm veel marketing, en muzieklicenties zijn een vak apart.",
      "Een paar jaar later deden Spotify en Apple iets soortgelijks. Goed idee, verkeerde positie om te winnen. Volgende.",
    ],
    highlights: [
      { label: "Categorie", value: "Consumer app" },
      { label: "Status", value: "Afgerond" },
      { label: "Waarde", value: "Product-lessen" },
    ],
    lessons: [
      "Consumer apps leven of sterven bij retentie.",
      "Vecht niet om dezelfde markt als Spotify.",
      "Goed idee + verkeerd moment = geen bedrijf.",
    ],
    cta: { label: "Spar over jouw idee", href: "#contact" },
    newsTag: ProjectTags.partyBlender,
  },
];

export const PastProjects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get("project");
  const active = past.find((p) => p.slug === activeSlug) ?? null;

  const openProject = (slug: string) => {
    const next = new URLSearchParams(searchParams);
    next.set("project", slug);
    // push entry zodat de browser-terugknop de modal sluit
    setSearchParams(next, { replace: false });
  };

  const closeProject = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("project");
    setSearchParams(next, { replace: false });
  };

  // Bij directe deeplink scrollen we naar de sectie zodat de modal
  // in context opent (i.p.v. boven aan de pagina).
  useEffect(() => {
    if (!activeSlug) return;
    const el = document.getElementById("past-projects");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSlug]);

  return (
    <section id="past-projects" className="bg-paper2 py-20 sm:py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-10 md:mb-12">
          <div>
            <p className="stag text-ink/65 mb-4">04 — Wat hieraan voorafging</p>
            <h2 className="font-display text-ink text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.88]">
              WAT
              <br />
              <span className="text-orange">EERDER</span>
              <br />
              KWAM.
            </h2>
          </div>
          <div className="flex md:items-end">
            <p className="text-ink/75 text-base sm:text-lg leading-relaxed max-w-[540px]">
              Niet elk bedrijf hoeft eeuwig te bestaan. Sommige verkocht, andere bewust gestopt,
              een paar werden nooit groot. Allemaal hebben ze de club geleerd hoe het wél moet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-ink border-2 border-ink">
          {past.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => openProject(p.slug)}
              aria-label={`Open details over ${p.name}`}
              className="bg-paper p-6 sm:p-7 md:p-9 flex flex-col group relative text-left transition-colors duration-200 hover:bg-volt focus:outline-none focus-visible:bg-volt focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-inset cursor-pointer"
            >
              {/* Top row: mark + status */}
              <div className="flex items-start justify-between mb-6">
                {p.logo ? (
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: p.logoBg ?? "hsl(var(--ink))" }}
                  >
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-ink text-paper/80 flex items-center justify-center font-display text-xl md:text-2xl tracking-wider relative">
                    {p.mark}
                    <span
                      aria-hidden
                      className="absolute inset-x-3 top-1/2 h-[2px] bg-orange/70 -rotate-12"
                    />
                  </div>
                )}
                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/70">
                    <span className="w-2 h-2 rounded-full bg-orange" />
                    {p.status}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-ink text-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">
                    {p.period}
                  </span>
                </div>
              </div>

              <div className="font-display text-ink text-2xl md:text-3xl tracking-wide mb-1 leading-[0.95]">
                {p.name}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/65 mb-4">
                {p.cat}
              </div>

              <p className="text-ink font-medium text-base mb-3">{p.tag}</p>
              <p className="text-sm text-ink/75 leading-relaxed flex-1">
                {p.desc}
              </p>

              {p.newsTag && (
                <LinkedNews
                  tag={p.newsTag}
                  variant="dark"
                  stopPropagation
                />
              )}

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/80 group-hover:text-ink group-focus-visible:text-ink">
                Lees het verhaal
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-[2px] bg-ink p-5 md:p-6 font-mono text-[11px] text-paper/80 uppercase tracking-[0.1em] leading-loose">
          De rode draad &nbsp;→&nbsp;{" "}
          <span className="text-volt">
            Snel testen. Eerlijk evalueren. Stoppen als het moet. Doorbouwen aan het volgende.
          </span>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && closeProject()}>
        <DialogContent className="max-w-2xl bg-paper border-2 border-ink p-0 gap-0 overflow-hidden max-h-[90vh] flex flex-col">
          {active && (
            <>
              {/* Header strip */}
              <div className="bg-ink text-paper px-6 md:px-8 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  {active.logo ? (
                    <div
                      className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0"
                      style={{ backgroundColor: active.logoBg ?? "hsl(var(--paper))" }}
                    >
                      <img
                        src={active.logo}
                        alt={`${active.name} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-paper text-ink flex items-center justify-center font-display text-base tracking-wider relative shrink-0">
                      {active.mark}
                      <span
                        aria-hidden
                        className="absolute inset-x-2 top-1/2 h-[2px] bg-orange/80 -rotate-12"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/70">
                      {active.cat}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange">
                      {active.period} · {active.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-8 py-7 overflow-y-auto">
                <DialogHeader className="space-y-3 mb-6 text-left">
                  <DialogTitle className="font-display text-ink text-3xl md:text-5xl leading-[0.95] tracking-wide">
                    {active.name}.
                  </DialogTitle>
                  <DialogDescription className="text-ink font-medium text-base md:text-lg">
                    {active.tag}
                  </DialogDescription>
                </DialogHeader>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-[2px] bg-ink border-2 border-ink mb-7">
                  {active.highlights.map((h) => (
                    <div key={h.label} className="bg-paper2 p-3 md:p-4">
                      <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-ink/65 mb-1">
                        {h.label}
                      </p>
                      <p className="font-display text-ink text-sm md:text-base leading-tight">
                        {h.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Story */}
                <div className="space-y-4 mb-7">
                  {active.story.map((para, i) => (
                    <p key={i} className="text-ink/85 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Lessons */}
                <div className="border-t-2 border-ink pt-6 mb-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/65 mb-3">
                    Wat het opleverde
                  </p>
                  <ul className="space-y-2">
                    {active.lessons.map((l) => (
                      <li key={l} className="flex gap-3 text-ink text-base leading-snug">
                        <span aria-hidden className="text-orange font-mono shrink-0">→</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={active.cta.href}
                  onClick={() => closeProject()}
                  className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] hover:bg-orange hover:text-ink transition-colors duration-200"
                >
                  {active.cta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
