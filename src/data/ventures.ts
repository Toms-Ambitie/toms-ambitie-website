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
    description: string;
    primary: { label: string; href: string; external?: boolean };
    secondary?: { label: string; href: string; external?: boolean };
  };
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
    tagline: "ONDERNEMEN MOET MAKKELIJKER VOELEN.",
    intro:
      "EmmaStudio is een AI-productfamilie voor ondernemers. Acht losse modules. Van boekhouden tot personeelsplanning. Elk stuk neemt een saaie kant van ondernemen over.\n\n5 van de 8 modules zijn live. Eén tenant draait dagelijks in productie.",
    logo: emmaLogo,
    category: "AI · SaaS · Productfamilie",
    tags: ["LIVE", "5 MODULES LIVE", "MKB", "AI PRODUCTFAMILIE"],
    url: "https://emmastudio.nl",
    status: "LIVE",
    identity: {
      accent: "#0e3d37",
      accentInk: "#fbf4ea",
      vibe: "AI PRODUCTFAMILIE · MODULAIR · LIVE",
      proof: [
        "5 modules live in productie",
        "1 tenant dagelijks actief (kapsalon Heeten)",
        "CAO-rekenkern voor 6 branches",
      ],
      proofTagline: "Live · 5 modules in productie · dagelijkse gebruik bewezen",
    },
    cta: { label: "Bouw mee aan EmmaStudio", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk platform", href: "https://emmastudio.nl", external: true },
    origin: {
      title: "HET BEGON MET ADMINISTRATIE. EN GROEIDE VERDER.",
      story:
        "De meeste ondernemers zijn geen boekhouder.\n\nToch voelt veel boekhoudsoftware nog steeds alsof je eerst een cursus moet volgen voordat je iets kunt regelen.\n\nFacturen boeken. Offertes maken. BTW aangifte controleren.\n\nTechnisch werkt het vaak prima.\n\nMaar de ervaring voelt onnodig zwaar.\n\nEn precies daardoor stellen veel ondernemers administratie uit. Niet omdat ze lui zijn, maar omdat de software meer energie vraagt dan nodig.\n\nEmmaStudio begon als een slimme AI-laag die dat oploste. En groeide door naar een volledige productfamilie.\n\n\"Ondernemen moet makkelijker voelen. Niet zwaarder.\"",
    },
    businessModel: {
      title: "PER MODULE. GEEN PAKKET DAT JE NIET GEBRUIKT.",
      description:
        "EmmaStudio vervangt geen software.\n\nHet maakt het grotendeels onzichtbaar.\n\nAcht modules. Elk los af te nemen. Elk gericht op een specifieke saaie kant van ondernemen.\n\nJe kiest wat je nodig hebt. EmmaStudio regelt de rest.",
      points: [
        "EmmaBoekt: boekhouden en facturen via eBoekhouden.nl (€9/maand)",
        "EmmaWaakt: AI-financieel inzicht en signalering (€9/maand)",
        "EmmaLoont: loonadministratie met CAO-rekenkern voor 6 branches (€19/maand)",
        "EmmaVindt: zoeken en vinden voor ondernemers (€9/maand)",
        "EmmaZiet: marktanalyse en inzichten (€9/maand)",
        "Branchepakketten voor specifieke sectoren",
        "3 modules nog in ontwikkeling",
      ],
    },
    currentStatus: {
      title: "LIVE IN PRODUCTIE. NIET IN EEN PITCH DECK.",
      description:
        "5 van de 8 modules draaien live.\n\nEén tenant gebruikt het platform dagelijks: een kapsalon in Heeten.\n\nDe CAO-rekenkern ondersteunt zes branches. De modules zijn beschikbaar via een branchepakket of los per module.\n\nDagelijks gebruik. Bewijs in productie.",
      milestones: [
        "EmmaBoekt live: boekhouden via eBoekhouden.nl voor €9/maand",
        "EmmaWaakt live: AI-financieel inzicht en signalering voor €9/maand",
        "EmmaLoont live: loonadministratie met CAO-rekenkern voor €19/maand",
        "EmmaVindt live: zoeken en vinden voor €9/maand",
        "EmmaZiet live: marktanalyse voor €9/maand",
        "1 tenant dagelijks actief in productie (kapsalon Heeten)",
        "CAO-rekenkern ondersteunt 6 branches",
        "3 modules nog in ontwikkeling",
      ],
      extra:
        "EmmaStudio begon niet met een businessplan. Het begon met een simpele observatie: waarom voelt moderne AI vaak slimmer en prettiger dan de software die ondernemers dagelijks gebruiken?\n\nDat is precies hoe ventures binnen Toms Ambitie ontstaan. Eerst het probleem zelf voelen. Daarna intern bouwen. En als het werkt, een venture bouwen.",
    },
    vision: {
      title: "DE SLIMME LAAG VOOR ELKE ZELFSTANDIGE ONDERNEMER.",
      description:
        "De ambitie achter EmmaStudio gaat verder dan boekhouden.\n\nOndernemers verdrinken dagelijks in systemen, schermen en losse tools.\n\nEmmaStudio wordt de slimme laag tussen ondernemer en al die complexiteit.\n\nAcht modules. Niet gebouwd als losse tools. Maar als één natuurlijke ervaring voor ondernemers die gewoon willen ondernemen.",
    },
    ctaBlock: {
      title: "ONDERNEMERS WILLEN ONDERNEMEN.",
      description:
        "Niet verdwalen in software.\n\nEmmaStudio maakt ondernemen niet alleen slimmer, maar vooral rustiger, eenvoudiger en menselijker.\n\nWe zoeken co-founders voor de productrol en early adopters voor de modules die nog in ontwikkeling zijn.",
      primary: { label: "Bouw mee aan EmmaStudio", href: "/meebouwen" },
      secondary: { label: "Bekijk andere ventures", href: "/ventures" },
    },
  },
  {
    slug: "post-pilot",
    name: "POSTPILOT",
    tagline:
      "Zichtbaar zijn op LinkedIn kost meer tijd dan de meeste ondernemers hebben. PostPilot lost dat op.",
    intro:
      "PostPilot is live. Versie 2.0. Spraak als hoofdroute: inspreken, toon kiezen, post klaar in ongeveer 30 seconden. Tekst als alternatief: vier kernwoorden, twintig seconden.\n\nOfficieel verbonden met LinkedIn OAuth. Vier schrijftonen. Contentkalender ingebouwd.\n\nNul betalende klanten op dit moment. Het platform werkt. De conversie van gratis naar betaald staat centraal in de volgende fase.",
    logo: postPilotLogo,
    category: "SaaS · Contentautomatisering",
    tags: ["LIVE V2.0", "LINKEDIN OAUTH", "SPRAAK", "AI CONTENT"],
    url: "https://www.postpilotapp.nl",
    status: "LIVE",
    identity: {
      accent: "#E8A640",
      accentInk: "#0E1014",
      vibe: "CONTENT OPERATING SYSTEM · LINKEDIN · SPRAAK",
      proof: [
        "Live v2.0 · spraak als hoofdroute (~30 sec)",
        "Officiële LinkedIn OAuth-koppeling",
        "Nul betalende klanten · focus op eerste conversie",
      ],
      proofTagline: "Live · geen betalende klanten · conversie is de volgende stap",
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
        "Co-founder Christiaan van Dijk verantwoordelijk voor product en groei",
      ],
    },
    currentStatus: {
      title: "LIVE. GEEN BETALENDE KLANTEN NOG.",
      description:
        "PostPilot v2.0 draait. De spraakroute werkt: inspreken, toon kiezen, LinkedIn-post klaar.\n\nDe officiële LinkedIn OAuth-koppeling is actief. Vier schrijftonen beschikbaar. Contentkalender ingebouwd.\n\nNul betalende klanten op dit moment. Het platform is bewezen. De volgende stap is het binnenhalen van de eerste betalende gebruiker.",
      milestones: [
        "V2.0 live · spraak als hoofdroute",
        "Officiële LinkedIn OAuth-koppeling actief",
        "Vier schrijftonen beschikbaar",
        "Contentkalender en planningsfunctie live",
        "Vier abonnementen beschikbaar (Gratis t/m Founder Deal)",
        "Co-founder Christiaan van Dijk aan boord",
        "Nul betalende klanten · eerste conversie is de volgende mijlpaal",
      ],
      extra:
        "De technische fundering staat. De vraag is nu: hoe zetten we gratis gebruikers om naar betalend? Dat is waar de energie naartoe gaat.",
    },
    vision: {
      title: "ZICHTBAARHEID VOORSPELBAAR MAKEN.",
      description:
        "De behoefte aan consistente zichtbaarheid groeit. Tegelijkertijd neemt de tijdsdruk op ondernemers en professionals toe. PostPilot speelt precies in dat spanningsveld.\n\nWaar traditionele contenttools losse hulpmiddelen zijn, wil PostPilot uitgroeien tot het content operating system voor ondernemers: van idee tot publicatie, zonder dat het een klus wordt.\n\nHet doel is niet meer content produceren. Het doel is zichtbaarheid structureel makkelijker maken.",
    },
    ctaBlock: {
      title: "BOUW MEE AAN POSTPILOT",
      description:
        "PostPilot is gebouwd vanuit een probleem dat miljoenen professionals herkennen. Het platform staat. Nu zoeken we mensen die willen helpen bij de eerste commerciële stap: van live naar eerste betalende klant.\n\nSpecialisten in growth, conversie of LinkedIn-marketing zijn welkom. Investeerders ook.",
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
      "Plug and Power is gestopt. De marktvalidatie en positionering zijn afgerond, maar het venture is in 2026 besloten niet verder te bouwen. Deze pagina is historische referentie.",
    logo: plugAndPowerLogo,
    category: "Energie · E-commerce · Power",
    tags: ["GESTOPT", "ENERGIE", "E-COMMERCE", "ARCHIEF 2026"],
    status: "GESTOPT",
    statusColor: "var(--inkt-40)",
    identity: {
      accent: "#FFAA00",
      accentInk: "#0E0E0C",
      vibe: "GESTOPT · 2026 · ARCHIEF",
      proof: ["Marktvalidatie afgerond", "Positionering bepaald", "Beslissing: niet verder bouwen"],
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
        "Plug and Power bouwt aan een modern e-commerceplatform rondom plug-and-play energie. De focus ligt op producten die eenvoudig te gebruiken zijn, direct waarde toevoegen, schaalbaar zijn en geen ingewikkelde installatie vereisen. Het platform combineert onafhankelijke productselectie, eerlijke advisering, e-commerce, content en slimme tools om consumenten te helpen kiezen. De omzet komt uit productverkoop, accessoires, toekomstige abonnements- en serviceconcepten, partnerships met leveranciers en aanvullende energie-oplossingen. Doordat veel producten plug-and-play zijn, verschuift het speelveld van traditionele installatie naar moderne e-commerce.",
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
      title: "Waar we nu staan",
      description:
        "Plug and Power bevindt zich in de opbouwfase. De eerste positionering, marktvalidatie en productstrategie staan. Tegelijkertijd wordt actief gewerkt aan assortiment, leveranciers, e-commerce infrastructuur, content, adviesstructuren en AI-ondersteunde keuzehulpen.",
      milestones: [
        "Positionering en marktvalidatie afgerond",
        "Productstrategie en assortimentsrichting bepaald",
        "Leveranciersnetwerk in opbouw",
        "E-commerce infrastructuur in ontwikkeling",
        "Content- en adviesstructuren worden uitgewerkt",
        "AI-ondersteunde keuzehulpen op de roadmap",
      ],
      extra:
        "De ambitie is niet om \"nog een webshop\" te worden. De ambitie is om hét platform te bouwen voor plug-and-play energie-oplossingen in Europa.",
    },
    vision: {
      title: "De toekomst",
      description:
        "Steeds meer mensen willen energie-oplossingen die slimmer, flexibeler, mobieler en onafhankelijker zijn.\n\nPlug and Power wil vooroplopen in die beweging. Niet alleen met stekkerbatterijen, maar met een compleet ecosysteem rondom plug-and-play power. Voor thuis. Voor onderweg. Voor vakantie. Voor werk op locatie.\n\nHet doel is simpel: mensen altijd en overal toegang geven tot slimme energie, zonder onnodige complexiteit of hoge installatiekosten.",
    },
    ctaBlock: {
      title: "BOUW MEE AAN PLUG AND POWER",
      description:
        "Plug and Power staat aan het begin van een markt die de komende jaren explosief gaat groeien. We zoeken mensen die willen meebouwen. strategisch, operationeel, financieel of commercieel. Of je nu investeerder, specialist of ondernemer bent: als je gelooft in de toekomst van plug-and-play energie, willen we graag praten.",
      primary: { label: "Ik wil meebouwen", href: "/meebouwen" },
      secondary: { label: "Ik wil investeren", href: "/meebouwen" },
    },
  },
];

export const getVentureStatusMeta = (slug: string): VentureStatusMeta => {
  const venture = getVentureBySlug(slug);
  const label = venture?.status ?? "LIVE";
  const color = venture?.statusColor ?? "var(--color-success)";

  return {
    label,
    color,
    isLive: label === "LIVE",
  };
};

export const getVentureBySlug = (slug: string): VentureDetail | undefined =>
  ventureDetails.find((v) => v.slug === slug);
