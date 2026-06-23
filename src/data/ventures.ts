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
      "EmmaStudio is een AI-productfamilie voor ondernemers.\n\nAcht losse modules. Van boekhouden tot content, van salarisverwerking tot marktanalyse. Elk stuk neemt een saaie kant van ondernemen over.\n\nBegonnen als een slimme AI-laag bovenop bestaande boekhoudtools. Gegroeid tot een platform dat de volledige bedrijfsvoering van zelfstandigen en kleine teams kan ondersteunen.",
    logo: emmaLogo,
    category: "AI · SaaS · Productfamilie",
    tags: ["AI PRODUCTFAMILIE", "MODULAIR", "IN ONTWIKKELING"],
    status: "IN ONTWIKKELING",
    statusColor: "hsl(var(--orange))",
    identity: {
      accent: "#0e3d37",
      accentInk: "#fbf4ea",
      vibe: "AI PRODUCTFAMILIE · MODULAIR · VOOR ONDERNEMERS",
      proof: ["Concept en merkstrategie afgerond", "Eerste module in ontwikkeling", "Bewijs in productie bij pilot-klant"],
      proofTagline: "In ontwikkeling · eerste module actief bij pilot-klant",
    },
    cta: { label: "Bouw mee", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk andere ventures", href: "/ventures" },
    origin: {
      title: "HET BEGON MET ADMINISTRATIE. EN GROEIDE VERDER.",
      story:
        "De meeste ondernemers zijn geen boekhouder.\n\nToch voelt veel boekhoudsoftware nog steeds alsof je eerst een cursus moet volgen voordat je iets kunt regelen.\n\nFacturen boeken.\nOffertes maken.\nBTW aangifte controleren.\n\nTechnisch werkt het vaak prima.\n\nMaar de ervaring voelt onnodig zwaar.\n\nEn precies daardoor stellen veel ondernemers administratie uit. Niet omdat ze lui zijn, maar omdat de software meer energie vraagt dan nodig.\n\nEmmaStudio begon als een slimme AI-laag die dat oploste. En groeide door naar een volledige productfamilie.\n\n\"Ondernemen moet makkelijker voelen. Niet zwaarder.\"",
    },
    businessModel: {
      title: "PER MODULE. GEEN PAKKET DAT JE NIET GEBRUIKT.",
      description:
        "EmmaStudio vervangt geen software.\n\nHet maakt het grotendeels onzichtbaar.\n\nAcht modules. Elk los af te nemen. Elk gericht op een specifieke saaie kant van ondernemen.\n\nVan boekhouden tot content, van personeelsplanning tot marktanalyse.\n\nJe kiest wat je nodig hebt. EmmaStudio regelt de rest.",
      points: [
        "Modulair per behoefte",
        "Geen onnodige functies",
        "AI-laag op je bestaande werkwijze",
        "Schaalbaar per module",
      ],
    },
    currentStatus: {
      title: "BEWIJS IN PRODUCTIE. NIET IN EEN PITCH DECK.",
      description:
        "Vrijwel iedere ondernemer gebruikt administratiesoftware.\n\nMaar bijna niemand wordt enthousiast van de ervaring.\n\nDe markt focust al jaren op functionaliteit, regelgeving en koppelingen. Terwijl gebruiksgemak bijzaak blijft.\n\nEmmaStudio draait dat om.\n\nNiet meer functies.\nMinder mentale weerstand.\n\nWant zodra ondernemen makkelijker voelt, gaan mensen het ook beter bijhouden.",
      milestones: [
        "Concept en merkstrategie afgerond",
        "Eerste module in actieve ontwikkeling",
        "Bewijs in productie bij pilot-klant",
        "Roadmap voor volgende modules bepaald",
        "Co-founder gezocht voor productrol",
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
      "PostPilot is het content operating system voor ondernemers en professionals: AI die voor jou denkt, schrijft, plant en publiceert. Geen losse tool. Een systeem dat zichtbaarheid voorspelbaar maakt. Schrijft in jouw eigen toon. Versie 2.0 is live.",
    logo: postPilotLogo,
    category: "SaaS · Contentautomatisering",
    tags: ["AI", "SAAS", "AUTOMATISERING", "CONTENT", "LINKEDIN"],
    url: "https://www.postpilotapp.nl",
    status: "LIVE",
    identity: {
      accent: "#E8A640",
      accentInk: "#0E1014",
      vibe: "CREATOR ECONOMY · AI LEVERAGE",
      proof: ["Live platform v2.0", "Eerste betalende gebruikers", "Actief doorontwikkeld"],
      proofTagline: "Live · eerste gebruikers actief op het platform",
    },
    cta: { label: "Bouw mee aan PostPilot", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk platform", href: "https://www.postpilotapp.nl", external: true },
    origin: {
      title: "Het originele probleem",
      story:
        "Iedereen weet dat zichtbaarheid belangrijk is. Zeker op LinkedIn. Maar tussen meetings, klanten, projecten en dagelijkse operatie verdwijnt content bijna altijd naar de achtergrond.\n\nNiet omdat ondernemers niets te vertellen hebben. Juist wel. Maar consistente content vraagt tijd, discipline en ritme. Precies de dingen die onder druk komen te staan zodra het druk wordt.\n\nVeel mensen posten daarom in pieken. Eén week actief. Daarna weken stil. Niet omdat de motivatie ontbreekt, maar omdat content simpelweg geen prioriteit krijgt binnen de dagelijkse praktijk van ondernemen.\n\nPostPilot ontstond vanuit die frustratie.\n\nHet idee was simpel: wat als AI niet alleen helpt met schrijven, maar het volledige proces van contentplanning en publicatie ondersteunt? Niet nóg een schrijftool. Maar een systeem dat ondernemers helpt zichtbaar te blijven zonder dat het energie blijft kosten.",
    },
    businessModel: {
      title: "Business model",
      description:
        "PostPilot is een schaalbaar SaaS-platform met terugkerende abonnementen. Gebruikers betalen voor toegang tot AI-gestuurde contentgeneratie, planning en automatische publicatie via LinkedIn. In de toekomst wordt dit uitgebreid met andere platformen zoals X en Instagram. Door de combinatie van automatisering en content ontstaat een product met hoge schaalbaarheid en lage operationele kosten.",
      points: [
        "Terugkerende abonnementen met hoge marges",
        "AI-credits voor zwaardere generatie en bulkacties",
        "Premium functies voor power users en professionals",
        "Toekomstige team- en agency-oplossingen",
        "Doelgroep: ondernemers, consultants, creators, marketeers, recruiters en professionals die zichtbaar willen blijven zonder compleet contentteam",
      ],
    },
    currentStatus: {
      title: "Waar we nu staan",
      description:
        "PostPilot is live en wordt actief doorontwikkeld. Versie 2.0 is volledig vernieuwd: sneller, scherper en beter afgestemd op hoe gebruikers echt schrijven. De eerste betalende gebruikers zijn actief op het platform en houden hun LinkedIn-zichtbaarheid consistent vol met minimale tijdsinvestering.",
      milestones: [
        "Live platform (v2.0)",
        "AI-contentgeneratie in eigen schrijfstijl",
        "LinkedIn-integratie en automatische publicatie",
        "Postplanning en contentkalender",
        "Herbruikbare contentformats en structuren",
        "Eerste betalende gebruikers actief",
      ],
      extra:
        "De ambitie is helder: een content operating system bouwen voor ondernemers die zichtbaar willen blijven zonder afhankelijk te zijn van discipline of losse marketingmomenten.",
    },
    vision: {
      title: "De toekomst",
      description:
        "De behoefte aan consistente zichtbaarheid groeit explosief. Tegelijkertijd neemt de druk op ondernemers en professionals alleen maar toe. PostPilot speelt precies in dat spanningsveld.\n\nWaar traditionele contenttools vooral losse hulpmiddelen zijn, wil PostPilot uitgroeien tot een volledig AI-gedreven contentplatform: van idee tot publicatie.\n\nIn de toekomst moet het platform meerdere platformen ondersteunen, content automatisch optimaliseren, trends signaleren, persoonlijke schrijfstijl leren herkennen en complete contentflows automatiseren.\n\nHet doel is niet om meer content te produceren. Het doel is om zichtbaarheid structureel makkelijker te maken.",
    },
    ctaBlock: {
      title: "BOUW MEE AAN POSTPILOT",
      description:
        "PostPilot is gebouwd vanuit een probleem dat miljoenen professionals herkennen: zichtbaar willen zijn, zonder dat content een fulltime taak wordt. We zoeken mensen die willen meebouwen. strategisch, operationeel, technisch of financieel. Of je nu investeerder, specialist of ondernemer bent: als je gelooft in de toekomst van AI-gedreven contentautomatisering, willen we graag praten.",
      primary: { label: "Ik wil meebouwen", href: "/meebouwen" },
      secondary: { label: "Ik wil investeren", href: "/meebouwen" },
    },
  },
  {
    slug: "plug-and-power",
    name: "PLUG AND POWER",
    tagline:
      "Iedereen wil onafhankelijker worden van energie. Maar niemand zit te wachten op technisch gedoe en verkooppraatjes.",
    intro:
      "Plug and Power maakt plug-and-play energie toegankelijk: stekkerbatterijen, mobiele power en slimme energie zonder installateur. Onafhankelijke selectie, eerlijk advies, e-commerce als motor.",
    logo: plugAndPowerLogo,
    category: "Energie · E-commerce · Power",
    tags: ["ENERGIE", "E-COMMERCE", "THUISBATTERIJEN", "PLUG & PLAY", "MOBIELE POWER"],
    status: "IN ONTWIKKELING",
    statusColor: "hsl(var(--orange))",
    identity: {
      accent: "#FFAA00",
      accentInk: "#0E0E0C",
      vibe: "ENERGIE · ONAFHANKELIJKHEID · MOBIEL",
      proof: ["Positionering & marktvalidatie afgerond", "Leveranciersnetwerk in opbouw", "E-commerce in ontwikkeling"],
      proofTagline: "In ontwikkeling · marktvalidatie afgerond, opbouw fase",
    },
    cta: { label: "Bouw mee aan Plug and Power", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk concept", href: "https://plugandpower.nl", external: true },
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
