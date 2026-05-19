import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedNews } from "@/components/LinkedNews";
import { ProjectTags, type ProjectTag } from "@/data/projectTags";
import oakLogo from "@/assets/oak-marketing-logo.svg";
import postPilotLogo from "@/assets/post-pilot-logo.png";
import plugAndPowerLogo from "@/assets/plug-and-power-logo.svg";
import pactlyLogo from "@/assets/pactly-beeldmerk.svg";

type Venture = {
  name: string;
  mark: string;
  logo?: string;
  logoBg?: string;
  cat: string;
  pitch: string;
  desc: string;
  url?: string;
  email?: string;
  cta: string;
  ai: boolean;
  selective?: boolean;
  newsTag: ProjectTag;
};

const ventures: Venture[] = [
  {
    name: "PACTLY",
    mark: "PA",
    logo: pactlyLogo,
    logoBg: "#FFFFFF",
    cat: "Consumer app · Contracten",
    pitch: "Niemand weet welke abonnementen hij heeft. Pactly wel.",
    desc:
      "Energie, hypotheek, streaming, verzekering, sportschool. Eén plek, één overzicht, reminders vóór de opzegtermijn. Niet sexy. Wel iets wat ieder huishouden nodig heeft en niemand goed had opgelost. Volledig in eigen beheer gebouwd.",
    url: "https://pactly.nl",
    cta: "Probeer Pactly",
    ai: true,
    newsTag: ProjectTags.pactly,
  },
  {
    name: "PLUG AND POWER",
    mark: "P&P",
    logo: plugAndPowerLogo,
    logoBg: "#9691ff",
    cat: "Energie · E-commerce · Power",
    pitch: "Plug and Power maakt energie-opslag en mobiele stroomoplossingen toegankelijk zonder ingewikkelde installaties of technisch gedoe.",
    desc:
      "Van stekkerbatterijen tot slimme plug-and-play power oplossingen voor thuis, onderweg en op locatie.",
    url: "/ventures/plug-and-power",
    cta: "Lees meer",
    ai: false,
    newsTag: ProjectTags.plugAndPower,
  },
  {
    name: "POST PILOT",
    mark: "PP",
    logo: postPilotLogo,
    logoBg: "#0B1220",
    cat: "SaaS · Contentautomatisering",
    pitch: "Post Pilot helpt ondernemers zichtbaar te blijven op LinkedIn zonder dat content een dagelijkse taak wordt.",
    desc:
      "Met AI genereer, plan en publiceer je content in minuten in plaats van uren.",
    url: "/ventures/post-pilot",
    cta: "Lees meer",
    ai: true,
    newsTag: ProjectTags.postPilot,
  },
  {
    name: "OAK MARKETING",
    mark: "OAK",
    logo: oakLogo,
    logoBg: "#cc007e",
    cat: "Marketing · Strategie · AI",
    pitch: "OAK Marketing helpt bedrijven groeien met marketing die strategisch klopt én uitvoerend werkt.",
    desc:
      "Van positionering en neuromarketing tot AI, data en teamontwikkeling.",
    url: "/ventures/oak-marketing",
    cta: "Lees meer",
    ai: true,
    newsTag: ProjectTags.oakMarketing,
  },
];

export const Ventures = () => {
  return (
    <section id="ventures" className="bg-paper py-20 sm:py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <p className="stag text-stone-brand mb-4">03 — Wat er nu draait</p>
        <h2 className="font-display text-ink text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6">
          EIGEN
          <br />
          PORTFOLIO.
        </h2>
        <p className="text-stone-brand text-base sm:text-lg max-w-[540px] leading-relaxed">
          Geen klantwerk. Eigen bedrijven. Vier draaien er nu, met klanten, omzet en eigen merk.
          Het doel: een portfolio van winstgevende platformen. En de volgende staat al op de tekentafel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-ink border-2 border-ink mt-10 md:mt-12">
          {ventures.map((v) => {
            const href = v.url ?? (v.email ? `mailto:${v.email}` : "#");
            const isInternal = Boolean(v.url && v.url.startsWith("/"));
            const isExternal = Boolean(v.url) && !isInternal;
            return (
              <article
                key={v.name}
                className="bg-paper hover:bg-paper2 transition-colors p-6 sm:p-7 md:p-9 flex flex-col group relative"
              >
                {/* Top row: logo mark + status/AI */}
                <div className="flex items-start justify-between mb-6">
                  {v.logo ? (
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: v.logoBg ?? "hsl(var(--ink))" }}
                    >
                      <img
                        src={v.logo}
                        alt={`${v.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-ink text-volt flex items-center justify-center font-display text-2xl md:text-3xl tracking-wider">
                      {v.mark}
                    </div>
                  )}
                  <div className="flex flex-col items-end gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/70">
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" /> Live
                    </span>
                    {v.ai && (
                      <span className="inline-flex items-center gap-1 bg-ink text-volt px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">
                        ⚡ AI-powered
                      </span>
                    )}
                    {v.selective && (
                      <span className="inline-flex items-center gap-1 bg-volt text-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">
                        ✦ Op uitnodiging
                      </span>
                    )}
                  </div>
                </div>

                <div className="font-display text-ink text-3xl md:text-4xl tracking-wide mb-1">
                  {v.name}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/65 mb-4">
                  {v.cat}
                </div>

                <p className="text-ink font-medium text-base mb-3">{v.pitch}</p>
                <p className="text-sm text-stone-brand leading-relaxed flex-1 mb-5">
                  {v.desc}
                </p>

                <LinkedNews tag={v.newsTag} variant="dark" className="mb-5" />

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-ink/10">
                  <span className="font-mono text-[11px] text-ink/65 truncate">
                    {v.url
                      ? v.url.replace("https://", "")
                      : v.email ?? ""}
                  </span>
                  <a
                    href={href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 bg-ink text-volt px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] hover:bg-volt hover:text-ink transition-colors"
                    aria-label={
                      isExternal
                        ? `${v.cta} (opent in nieuw tabblad)`
                        : isInternal
                          ? v.cta
                          : `${v.cta} (opent je mailclient)`
                    }
                  >
                    {v.cta}
                    {isExternal ? (
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    ) : isInternal ? (
                      <span aria-hidden>→</span>
                    ) : (
                      <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
                    )}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-[2px] bg-ink p-5 md:p-6 font-mono text-[11px] text-paper/60 uppercase tracking-[0.1em] leading-loose">
          Mee bouwen of instappen? &nbsp;→&nbsp;{" "}
          <a href="#contact" className="text-volt hover:text-paper transition-colors">
            Schrijf ons. We antwoorden zelf.
          </a>
        </div>
      </div>
    </section>
  );
};
