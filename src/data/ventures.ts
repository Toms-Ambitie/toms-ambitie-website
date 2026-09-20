import postPilotLogo from "@/assets/postpilot-mark-primary.svg";
import plugAndPowerLogo from "@/assets/venture-logo-plug-and-power.webp";
import emmaLogo from "@/assets/emma-logo.webp";

export interface VentureIdentity {
  /** Accent hex used on hero border, bullets, vision section, etc. */
  accent: string;
  /** Foreground color for text/icons on top of `accent`. */
  accentInk: string;
  /** Short vibe label shown next to category, ALL CAPS. */
  vibe: string;
  /** 2-3 short, factual traction signals. never made-up metrics. */
  proof: string[];
  /** Short one-liner shown on the homepage card under the description. */
  proofTagline?: string;
}

export interface VentureDetail {
  slug: string;
  name: string;
  tagline: string;
  /** Optional longer hero intro shown below the tagline. */
  intro?: string;
  logo: string;
  category: string;
  /** Optional extra chips shown next to the category in the hero. */
  tags?: string[];
  url?: string;
  email?: string;
  status: string;
  /** Optional override for the status dot color (CSS color value). Defaults to success green. */
  statusColor?: string;
  /** Per-venture identity tokens for accents, vibe and traction. */
  identity: VentureIdentity;
  origin: {
    title: string;
    story: string;
  };
  businessModel: {
    title: string;
    description: string;
    points: string[];
  };
  currentStatus: {
    title: string;
    description: string;
    milestones: string[];
    /** Optional closing paragraph below the milestones. */
    extra?: string;
  };
  vision: {
    title: string;
    description: string;
  };
  /** Optional ONDERSCHEID section shown between MODEL and STATUS. */
  onderscheid?: {
    title: string;
    description: string;
    points: string[];
  };
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  /** Optional secondary CTA shown next to the primary one. */
  secondaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  /** Optional override for the bottom CTA block. */
  ctaBlock?: {
    title: string;
    description?: string;
    primary: { label: string; href: string; external?: boolean };
    secondary?: { label: string; href: string; external?: boolean };
  };
  /** When true, hides the secondary CTA including the default "Instappen" fallback. */
  noSecondaryCta?: boolean;
}

export type VentureStatusMeta = {
  label: string;
  color: string;
  isLive: boolean;
};

export const ventureDetails: VentureDetail[] = [
  {
    slug: "emmastudio",
    name: "EMMASTUDIO",
    tagline: "JE OMZET EN JE KOSTEN ZIEN ELKAAR NOOIT.",
    intro:
      "Bij een kapsalon staat de omzet in de afsprakensoftware en staan de kosten in het boekhoudpakket. Bij een installatiebedrijf staat de verkoop in de projectsoftware en de inkoop in de boekhouding. Die twee komen pas samen als de boekhouder een kwartaal later iets terugkoppelt. EmmaStudio leest beide kanten uit en voegt ze wel samen, per dag, per transactie. Acht modules, elk los af te nemen. Vijf daarvan draaien nu in productie.",
    logo: emmaLogo,
    category: "SaaS · Modulair · Nederland",
    tags: ["SAAS", "MODULAIR", "VIJF MODULES LIVE"],
    url: "https://emmastudio.nl",
    status: "LIVE",
    identity: {
      accent: "#0e3d37",
      accentInk: "#fbf4ea",
      vibe: "SAAS · MODULAIR · VOOR ONDERNEMERS MET PERSONEEL",
      proof: [
        "Vijf van acht modules live en verkoopbaar",
        "Eerste tenant dagelijks in productie",
        "Prijzen en branchepakketten vastgesteld",
      ],
      proofTagline: "Vijf modules live · eerste tenant dagelijks actief · branchepakketten vastgesteld",
    },
    cta: { label: "Bouw mee aan EmmaStudio", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk platform", href: "https://emmastudio.nl", external: true },
    origin: {
      title: "HET BEGON IN EEN KAPSALON.",
      story:
        "Een salon met twee medewerkers draait op drie systemen die niets van elkaar weten. De afsprakensoftware weet wat er binnenkomt. Het boekhoudpakket weet wat eruit gaat. De loonadministratie staat bij een derde partij. De ondernemer weet pas hoe de maand liep als iemand anders dat een kwartaal later uitrekent. Dat is geen softwareprobleem. Het is een tijdprobleem. Want elke beslissing die je neemt op cijfers van drie maanden geleden, neem je te laat. EmmaStudio is gebouwd in die salon, voor die salon, en daarna losgemaakt van die ene salon.\n\n\"Je hoeft niet te weten hoe het werkt. Je moet weten wat je moet doen.\"",
    },
    businessModel: {
      title: "ACHT MODULES. JE BETAALT ALLEEN VOOR WAT JE AANZET.",
      description:
        "EmmaStudio vervangt je boekhoudpakket niet. Het zorgt dat je er nog maar één keer per kwartaal in hoeft. Elke module lost één concreet ding op. Je zet aan wat je nodig hebt en laat de rest uit.",
      points: [
        "Nu live",
        "EmmaBoekt, boekhouden zonder je boekhoudsoftware aan te raken. €9 per maand",
        "EmmaWaakt, omzet en kosten naast elkaar, elke dag. €9 per maand",
        "EmmaLoont, loon en contracten voor zes cao-branches. €19 per maand",
        "EmmaVindt, personeel vinden in je eigen regio. €9 per maand",
        "EmmaZiet, weten wat de concurrent in de buurt doet. €9 per maand",
        "Op de roadmap: EmmaCoacht €9, EmmaSchrijft €19, EmmaPromoot €19",
        "Als branchepakket: Emma voor Salons €49,50, Emma voor Horeca €41,40, Emma voor Installateurs €49,50",
        "Alle prijzen per maand, exclusief btw. Pakketprijs ligt tien procent onder de som van de losse modules",
      ],
    },
    currentStatus: {
      title: "BEWIJS IN PRODUCTIE. NIET IN EEN PITCH DECK.",
      description:
        "EmmaStudio draait dagelijks bij een kapsalon in Heeten. Geen pilot, geen proefopstelling. Een ondernemer die er haar werk mee doet. Dat is het verschil tussen een demo die het doet en een product dat het houdt. De cao-rekenkern achter EmmaLoont dekt zes branches: kappers, horeca, motorvoertuigen en tweewielers, technisch installatiebedrijf, huisartsenzorg en schilders. Elke branche is met de hand nagerekend op de gepubliceerde cao-bronnen voordat hij live ging. Wat we niet claimen: EmmaStudio doet geen loonaangifte bij de Belastingdienst. Dat blijft bij de ondernemer of zijn boekhouder.",
      milestones: [
        "Vijf van acht modules live en verkoopbaar",
        "Cao-rekenkern voor zes branches nagerekend op bron",
        "Eerste tenant dagelijks in productie",
        "Aanmelden en afrekenen werkt",
        "Commerciële partner gezocht voor groei en verkoop",
      ],
    },
    vision: {
      title: "VAN ÉÉN SALON NAAR EEN BRANCHE. DAN NAAR DE VOLGENDE.",
      description:
        "Elke branche heeft dezelfde breuk op een andere plek. Bij kappers zit die tussen afsprakensoftware en boekhouding. Bij horeca tussen kassa en boekhouding. Bij installateurs tussen projectsoftware en inkoop. De rekenkern eronder is hetzelfde. Alleen de adapter verschilt. Daarom is elke nieuwe branche sneller dan de vorige, en wordt elke nieuwe module goedkoper om te bouwen dan de vorige.\n\nDE BOEKHOUDER KIJKT TERUG. EMMASTUDIO KIJKT MEE. Niet meer functies dan de rest. Wel de enige die omzet en kosten op dezelfde dag naast elkaar zet.",
    },
    ctaBlock: {
      title: "ONDERNEMERS WILLEN ONDERNEMEN.",
      description:
        "Niet verdwalen in software.\n\nEmmaStudio maakt ondernemen niet alleen slimmer, maar vooral rustiger, eenvoudiger en menselijker.",
      primary: { label: "Bouw mee aan EmmaStudio", href: "/meebouwen" },
      secondary: { label: "Bekijk andere ventures", href: "/ventures" },
    },
  },
  {
    slug: "post-pilot",
    name: "POSTPILOT",
    tagline:
      "De meeste ondernemers weten dat ze zichtbaar moeten zijn. Maar zodra het druk wordt, verdwijnen ze van LinkedIn.",
    intro:
      "PostPilot draait dat om. Je spreekt in wat je denkt, ongeveer dertig seconden, en je krijgt een LinkedIn-post terug in je eigen toon. Of je typt vier steekwoorden. Publiceren gaat via de officiële LinkedIn-koppeling, dus zonder wachtwoorden te delen. Versie 2.0 is live.",
    logo: postPilotLogo,
    category: "SaaS · Contentautomatisering",
    tags: ["SPRAAK", "NEDERLANDS", "LINKEDIN OAUTH", "VANAF €0"],
    url: "https://www.postpilotapp.nl",
    status: "LIVE",
    identity: {
      accent: "#E8A640",
      accentInk: "#0E1014",
      vibe: "SAAS · NEDERLANDSTALIG · LINKEDIN",
      proof: [
        "Live platform v2.0 met spraakinvoer",
        "Officiële LinkedIn-koppeling goedgekeurd",
        "Founder Deal open, honderd plekken",
      ],
      proofTagline: "Live v2.0 met spraakinvoer · LinkedIn-koppeling goedgekeurd · Founder Deal open",
    },
    cta: { label: "Bouw mee aan PostPilot", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk platform", href: "https://www.postpilotapp.nl", external: true },
    origin: {
      title: "HET ORIGINELE PROBLEEM",
      story:
        "Iedereen weet dat zichtbaarheid belangrijk is. Zeker op LinkedIn. Maar tussen meetings, klanten, projecten en dagelijkse operatie verdwijnt content bijna altijd naar de achtergrond.\n\nNiet omdat ondernemers niets te vertellen hebben. Juist wel. Maar consistente content vraagt tijd, discipline en ritme. Precies de dingen die onder druk komen te staan zodra het druk wordt.\n\nVeel mensen posten daarom in pieken. Één week actief. Daarna weken stil. Niet omdat de motivatie ontbreekt, maar omdat content simpelweg geen prioriteit krijgt binnen de dagelijkse praktijk van ondernemen.\n\nPostPilot ontstond vanuit die frustratie.\n\nHet idee was simpel: wat als AI niet alleen helpt met schrijven, maar het volledige proces ondersteunt? Niet nóg een schrijftool. Maar een systeem dat ondernemers helpt zichtbaar te blijven zonder dat het energie blijft kosten.",
    },
    businessModel: {
      title: "FREEMIUM NAAR BETAALD. EERLIJKE PRIJZEN.",
      description:
        "PostPilot werkt met vier abonnementen. Gratis als instapoptie. Betaald zodra je meer wilt doen of langer consistent wilt zijn.\n\nEr is ook een Founder Deal voor mensen die vroeg instappen en de ontwikkeling willen steunen.",
      points: [
        "Gratis: €0 per maand, 3 posts",
        "Basic: €2,50 per maand, 5 posts",
        "Premium: €9,95 per maand, 100 posts + spraak + kalender",
        "Founder Deal: €199 eenmalig, max 100 plekken (lifetime)",
        "Jaarbetaling: 15% korting op maandtarieven",
      ],
    },
    currentStatus: {
      title: "WAAR WE NU STAAN.",
      description:
        "PostPilot is live en wordt doorontwikkeld door Tom Mulder en co-founder Christiaan van Dijk. Versie 2.0 draait op spraak als hoofdroute. De officiële LinkedIn-koppeling is actief. Vier schrijftonen: reflectief, direct, verhalend en analytisch. Tom schrijft het merendeel van zijn eigen LinkedIn-posts met het product. Dat is de snelste manier om te merken wat er nog niet goed genoeg is.\n\nHet platform staat. De eerste betalende klant is de volgende mijlpaal. We schrijven dat liever zo op dan dat we er een getal bij verzinnen.",
      milestones: [
        "V2.0 live · spraak als hoofdroute",
        "Officiële LinkedIn OAuth-koppeling actief",
        "Vier schrijftonen beschikbaar",
        "Contentkalender en planningsfunctie live",
        "Vier abonnementen beschikbaar (Gratis t/m Founder Deal)",
        "Co-founder Christiaan van Dijk aan boord",
      ],
    },
    vision: {
      title: "ZICHTBAARHEID VOORSPELBAAR MAKEN.",
      description:
        "De behoefte aan consistente zichtbaarheid groeit. Tegelijkertijd neemt de tijdsdruk op ondernemers en professionals toe. PostPilot speelt precies in dat spanningsveld.\n\nWaar traditionele contenttools losse hulpmiddelen zijn, wil PostPilot uitgroeien tot het content operating system voor ondernemers: van idee tot publicatie, zonder dat het een klus wordt.\n\nHet doel is niet meer content produceren. Het doel is zichtbaarheid structureel makkelijker maken.",
    },
    onderscheid: {
      title: "WAAROM DIT GEEN TAPLIO-KLOON IS.",
      description:
        "LinkedIn heeft in 2025 hard opgetreden tegen tools die via browserextensies en cookies bij je account komen. Wie zo'n tool gebruikt, riskeert zijn eigen account.\n\nPostPilot gebruikt uitsluitend de officiële LinkedIn OAuth-koppeling. Dezelfde techniek als waarmee je inlogt bij andere LinkedIn-apps. Geen wachtwoord delen, geen scraping. Je verbreekt de koppeling wanneer je wil.\n\nDaarnaast is PostPilot Nederlandstalig gebouwd, niet vertaald. De spraakherkenning kan tegen halve zinnen, dialect en hardop nadenken. Dat merk je pas als je het in het Nederlands probeert, met een halve gedachte en een uh ertussen.",
      points: [
        "Officiële LinkedIn-koppeling, goedgekeurd",
        "Nederlands als eerste taal, niet als vertaling",
        "Spraak als hoofdroute, tekst als alternatief",
        "Prijs begint op nul",
      ],
    },
    ctaBlock: {
      title: "BOUW MEE AAN POSTPILOT",
      description:
        "PostPilot is gebouwd vanuit een probleem dat miljoenen professionals herkennen. Het platform staat en groeit. Specialisten in growth, conversie of LinkedIn-marketing zijn welkom. Investeerders ook.",
      primary: { label: "Ik wil meebouwen", href: "/meebouwen" },
      secondary: { label: "Bekijk het platform", href: "https://www.postpilotapp.nl", external: true },
    },
  },
  {
    slug: "plug-and-power",
    name: "PLUG AND POWER",
    tagline:
      "Iedereen wil onafhankelijker worden van energie. Maar niemand zit te wachten op technisch gedoe en verkooppraatjes.",
    intro:
      "Plug and Power is in 2026 gestopt. Deze pagina blijft staan omdat we ook laten zien wat niet doorging.",
    logo: plugAndPowerLogo,
    category: "Energy tech · Archief",
    tags: ["GESTOPT", "ENERGIE", "E-COMMERCE", "ARCHIEF 2026"],
    status: "GESTOPT",
    statusColor: "var(--inkt-40)",
    identity: {
      accent: "#FFAA00",
      accentInk: "#0E0E0C",
      vibe: "GESTOPT · 2026 · ARCHIEF",
      proof: ["In 2026 stopgezet"],
      proofTagline: "Gestopt in 2026",
    },
    cta: { label: "Bekijk actieve ventures", href: "/ventures" },
    origin: {
      title: "Het originele probleem",
      story:
        "De energiemarkt verandert razendsnel.\n\nStekkerbatterijen, thuisaccu's en mobiele energie-oplossingen worden steeds populairder, maar de markt voelt voor consumenten nog steeds onduidelijk en versnipperd.\n\nTraditionele installateurs verdienen vooral aan installatie-uren. Daardoor passen plug-and-play oplossingen vaak slecht binnen hun businessmodel.\n\nTegelijkertijd verkopen veel webshops vooral hun eigen merk of voorraad. Niet per se de beste oplossing voor jouw situatie.\n\nDaardoor ontstaat een markt waarin:\n\n• consumenten het overzicht verliezen\n• advies vaak niet onafhankelijk is\n• installaties onnodig complex worden gemaakt\n• en niemand echt \"nee\" durft te verkopen\n\nPlug and Power ontstond vanuit de overtuiging dat dit slimmer moet kunnen.\n\nGeen technisch gedoe. Geen installateurstaal. Gewoon duidelijke energie-oplossingen die werken.",
    },
    businessModel: {
      title: "Wat Plug and Power bouwt",
      description:
        "Dit was het model dat we voor ogen hadden.\n\nPlug and Power bouwt aan een modern e-commerceplatform rondom plug-and-play energie. De focus ligt op producten die eenvoudig te gebruiken zijn, direct waarde toevoegen, schaalbaar zijn en geen ingewikkelde installatie vereisen. Het platform combineert onafhankelijke productselectie, eerlijke advisering, e-commerce, content en slimme tools om consumenten te helpen kiezen. De omzet komt uit productverkoop, accessoires, toekomstige abonnements- en serviceconcepten, partnerships met leveranciers en aanvullende energie-oplossingen. Doordat veel producten plug-and-play zijn, verschuift het speelveld van traditionele installatie naar moderne e-commerce.",
      points: [
        "Stekkerbatterijen voor thuis",
        "Mobiele power stations en energie-opslag voor onderweg",
        "Camping- en vakantie-oplossingen",
        "Tijdelijke stroomvoorzieningen en off-grid toepassingen",
        "Slimme energieproducten voor thuis",
        "Onafhankelijke productselectie en eerlijke advisering",
        "Toekomstige abonnements- en serviceconcepten",
      ],
    },
    currentStatus: {
      title: "WAAROM HET GESTOPT IS",
      description:
        "Plug and Power is in 2026 gestopt. Het idee stond en de positionering stond, maar het is nooit een lopend bedrijf geworden.\n\nDeze pagina blijft staan omdat we ook laten zien wat niet doorging.",
      milestones: [
        "In 2026 stopgezet",
        "Geen klanten, geen omzet, geen lopende verplichtingen",
        "Pagina blijft staan als archief",
      ],
    },
    vision: {
      title: "WAT ERVAN BLIJFT",
      description:
        "Twee actieve ventures, allebei software, allebei gebouwd vanuit een probleem dat we zelf hadden.",
    },
    ctaBlock: {
      title: "DIT VENTURE IS GESTOPT",
      primary: { label: "Bekijk actieve ventures", href: "/ventures" },
    },
    noSecondaryCta: true,
  },
];

export const getVentureStatusMeta = (slug: string): VentureStatusMeta => {
  const venture = getVentureBySlug(slug);
  const label = venture?.status ?? "LIVE";
  const color = venture?.statusColor ?? "var(--color-success)";

  return {
    label,
    color,
    isLive: label.startsWith("LIVE"),
  };
};

export const getVentureBySlug = (slug: string): VentureDetail | undefined =>
  ventureDetails.find((v) => v.slug === slug);
