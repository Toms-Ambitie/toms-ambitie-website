import postPilotLogo from "@/assets/postpilot-mark-primary.svg";
import oakMarketingLogo from "@/assets/venture-logo-oak-marketing.webp";
import pactlyLogo from "@/assets/pactly-beeldmerk-v2.webp";
import plugAndPowerLogo from "@/assets/venture-logo-plug-and-power.webp";
import emmaBoektLogo from "@/assets/emma-boekt-logo.webp";

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
    slug: "emmaboekt",
    name: "EMMABOEKT",
    tagline: "ADMINISTRATIE ZOU GEEN ENERGIE MOETEN KOSTEN.",
    intro:
      "De meeste boekhoudsoftware werkt technisch prima.\n\nMaar veel ondernemers voelen weerstand zodra ze hun administratie moeten openen. Niet omdat ze administratie haten. Maar omdat de ervaring vaak ingewikkelder voelt dan nodig.\n\nEmmaBoekt legt een slimme assistent bovenop bestaande boekhoudsoftware zodat administratie eindelijk voelt zoals moderne software hoort te voelen.",
    logo: emmaBoektLogo,
    category: "AI · Administratie · Automatisering",
    tags: ["SLIMME ASSISTENT", "AUTOMATISERING", "IN ONTWIKKELING"],
    status: "IN ONTWIKKELING",
    statusColor: "hsl(var(--orange))",
    identity: {
      accent: "#9333EA",
      accentInk: "#FFFFFF",
      vibe: "AI ASSISTENT · MINDER GEDOE · MEER RUST",
      proof: ["Concept & merkstrategie afgerond", "MVP in voorbereiding", "Eerste testen gestart"],
      proofTagline: "In ontwikkeling · concept staat, MVP in voorbereiding",
    },
    cta: { label: "Bouw mee", href: "/meebouwen" },
    secondaryCta: { label: "Bekijk andere ventures", href: "/ventures" },
    origin: {
      title: "DE SOFTWARE WAS NIET HET PROBLEEM. DE ERVARING WEL.",
      story:
        "De meeste ondernemers zijn geen boekhouder.\n\nToch voelt veel boekhoudsoftware nog steeds alsof je eerst een cursus moet volgen voordat je iets kunt regelen.\n\nFacturen boeken.\nOffertes maken.\nBTW aangifte controleren.\n\nTechnisch werkt het vaak prima.\n\nMaar de ervaring voelt onnodig zwaar.\n\nEn precies daardoor stellen veel ondernemers administratie uit. Niet omdat ze lui zijn, maar omdat de software vaak meer energie vraagt dan nodig.\n\nEmmaBoekt ontstond vanuit die frustratie.\n\n\"Administratie moet rust geven. Geen weerstand.\"",
    },
    businessModel: {
      title: "MINDER SOFTWARE. MEER GEWOON REGELEN.",
      description:
        "EmmaBoekt vervangt boekhoudsoftware niet.\n\nHet maakt het grotendeels onzichtbaar.\n\nIn plaats van menu's, schermen en instellingen praat je gewoon met Emma alsof je een collega een opdracht geeft.\n\n\"Boek deze factuur.\"\n\"Maak een offerte voor klant X.\"\n\"Hoeveel BTW moet ik reserveren?\"\n\nEmma regelt de rest.\n\nDaardoor voelt EmmaBoekt minder als software en meer als een slimme assistent die administratie uit handen neemt.",
      points: [
        "Natuurlijk werken",
        "Minder frictie",
        "Geen leercurve",
        "Slimmere workflows",
      ],
    },
    currentStatus: {
      title: "DE MARKT IS GROOT. DE FRUSTRATIE OOK.",
      description:
        "Vrijwel iedere ondernemer gebruikt administratiesoftware.\n\nMaar bijna niemand wordt enthousiast van de ervaring.\n\nDe markt focust al jaren op functionaliteit, regelgeving en koppelingen. Terwijl gebruiksgemak vaak bijzaak blijft.\n\nEmmaBoekt draait dat om.\n\nNiet nog meer functies.\nMaar minder mentale weerstand.\n\nWant zodra administratie makkelijker voelt, gaan ondernemers het ook beter bijhouden.",
      milestones: [
        "Concept en positionering uitgewerkt",
        "Merkidentiteit vastgesteld",
        "Productrichting bepaald",
        "MVP in voorbereiding",
        "Eerste gebruikerstests op de roadmap",
      ],
      extra:
        "EmmaBoekt begon niet met een businessplan. Het begon met een simpele observatie: waarom voelt moderne AI vaak slimmer en prettiger dan moderne boekhoudsoftware?\n\nDat is precies hoe veel ventures binnen Toms Ambitie ontstaan. Eerst voelen we het probleem zelf. Daarna bouwen we een interne oplossing. En pas als het werkt, ontstaat er een venture.",
    },
    vision: {
      title: "MEER DAN ALLEEN BOEKHOUDEN.",
      description:
        "De ambitie achter EmmaBoekt gaat verder dan administratie alleen.\n\nOndernemers verdrinken dagelijks in systemen, schermen en losse tools.\n\nEmmaBoekt moet uiteindelijk de slimme laag worden tussen ondernemer en al die complexiteit.\n\nDenk aan offertes, contracten, salarissen, automatisering, AI assistentie en slimme workflows.\n\nNiet gebouwd als losse tools.\nMaar als één natuurlijke ervaring voor ondernemers.",
    },
    ctaBlock: {
      title: "ONDERNEMERS WILLEN ONDERNEMEN.",
      description:
        "Niet verdwalen in software.\n\nEmmaBoekt maakt administratie niet alleen slimmer, maar vooral rustiger, eenvoudiger en menselijker.",
      primary: { label: "Bouw mee aan EmmaBoekt", href: "/meebouwen" },
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
    slug: "oak-marketing",
    name: "OAK MARKETING",
    tagline:
      "Veel bedrijven doen 'iets' met marketing, maar missen richting, ritme en resultaat. OAK Marketing stapt tijdelijk in waar het echt moet schuiven.",
    intro:
      "Geen bureau met accountmanagers en lagen ertussen. Wel een operator die naast directies werkt aan positionering, AI, data en groei. Bewust selectief. Bewust tijdelijk.",
    logo: oakMarketingLogo,
    category: "Marketing · Strategie · AI",
    tags: ["MARKETING", "AI", "DATA", "STRATEGIE", "NEUROMARKETING"],
    email: "hallo@toms-ambitie.nl",
    status: "BINNENKORT",
    statusColor: "hsl(var(--orange))",
    identity: {
      accent: "#1B3A8A",
      accentInk: "#FFFFFF",
      vibe: "OPERATOR · STRATEGISCHE SLAGKRACHT",
      proof: ["Positionering en merkidentiteit uitgewerkt", "Eerste trajecten in voorbereiding", "Lanceert binnenkort"],
      proofTagline: "Binnenkort live · positionering staat",
    },
    cta: { label: "Start gesprek", href: "mailto:hallo@toms-ambitie.nl" },
    secondaryCta: { label: "Bekijk andere ventures", href: "/ventures" },
    origin: {
      title: "Het originele probleem",
      story:
        "Veel bedrijven doen \"iets\" met marketing, maar missen structuur, richting en samenhang.\n\nDe website draait. Advertenties lopen. Er wordt content gemaakt.\n\nMaar ondertussen ontbreekt:\n\n• duidelijke positionering\n• een schaalbaar systeem\n• data om op te sturen\n• een team dat echt op niveau werkt\n\nMarketing wordt daardoor vaak reactief in plaats van strategisch.\n\nOAK Marketing ontstond vanuit die frustratie.\n\nNiet als traditioneel bureau, maar als manier om tijdelijk écht onderdeel te worden van een bedrijf en samen iets neer te zetten dat blijft staan.\n\nSoms als strateeg. Soms als uitvoerder. Soms als tijdelijke marketingafdeling.\n\nAltijd met hetzelfde doel: marketing laten bijdragen aan echte groei.",
    },
    businessModel: {
      title: "Wat OAK Marketing doet",
      description:
        "OAK Marketing werkt op het snijvlak van marketingstrategie, neuromarketing, AI, data, branding, teamontwikkeling en executie. Niet vanuit theorie, maar vanuit de praktijk. De rol verschilt per bedrijf: soms tijdelijk operationeel, soms adviserend op directieniveau, soms als kwartiermaker voor groei.",
      points: [
        "Het opzetten van complete marketingstructuren",
        "Het begeleiden en versterken van teams",
        "AI-integratie binnen bedrijven",
        "Positioneringstrajecten en merkontwikkeling",
        "Groeistrategieën en go-to-market",
        "Content, campagnes en executie",
        "Dashboards en data driven marketing",
      ],
    },
    currentStatus: {
      title: "Projecten & cases",
      description:
        "Onder OAK Marketing zijn uiteenlopende bedrijven geholpen met groei, positionering en modernisering.\n\nBij Family Office De Rendtmeesters lag de focus op vernieuwing en toekomstbestendigheid. Het merk, de website en de marketingaanpak waren verouderd. Het doel werd helder: het bedrijf weer actueel maken en klaarstomen voor de volgende generatie.\n\nVoor ZeecontainerWoningen werd de volledige marketing opgezet rondom een innovatief woonconcept met zeecontainers. Van merkontwikkeling tot zichtbaarheid op podia, in podcasts en online campagnes.",
      milestones: [
        "Family Office De Rendtmeesters. vernieuwing en herpositionering",
        "ZeecontainerWoningen. volledige marketing rondom innovatief woonconcept",
        "AI-integratie binnen marketingteams",
        "Data driven werken en dashboards",
        "Neuromarketing en positionering",
        "Schaalbare contentstructuren en marketing operating systems",
      ],
      extra:
        "OAK Marketing werkt alleen met bedrijven waar energie, ambitie en een duidelijke klik aanwezig zijn. Geen standaard klantrelaties. Wel tijdelijke samenwerkingen met maximale betrokkenheid.\n\nOAK werkt bewust kleinschalig en exclusief. Geen groot bureau met accountmanagers en lagen ertussen. Wel directe betrokkenheid, snelheid en strategische scherpte. Daarnaast groeit de koppeling met de andere ventures binnen Toms Ambitie, waardoor kennis, tooling en systemen steeds sterker samenkomen.",
    },
    vision: {
      title: "De toekomst",
      description:
        "Marketing verandert sneller dan ooit. AI, automatisering en data veranderen niet alleen hoe bedrijven zichtbaar worden, maar ook hoe teams werken, beslissingen nemen en groeien.\n\nOAK Marketing wil vooroplopen in die beweging. Niet als traditioneel bureau, maar als een flexibele groeipartner die bedrijven helpt sneller, slimmer en scherper te opereren.\n\nDe ambitie is niet om zo groot mogelijk te worden. De ambitie is om betrokken te zijn bij bedrijven waar echt beweging ontstaat.",
    },
    ctaBlock: {
      title: "WERKEN MET OAK MARKETING",
      description:
        "OAK Marketing is geen bureau waar je simpelweg een pakket afneemt. Het werkt alleen wanneer er vertrouwen is, ambitie is en energie ontstaat aan beide kanten. Daarom werken we bewust selectief.\n\nHeb je een bedrijf waar marketing, positionering, AI of groei écht beter kan? Dan praten we graag verder.",
      primary: { label: "Start gesprek", href: "mailto:hallo@toms-ambitie.nl" },
      secondary: { label: "Bekijk andere ventures", href: "/ventures" },
    },
  },
  {
    slug: "pactly",
    name: "PACTLY",
    tagline:
      "Jouw contracten. Altijd in orde.",
    intro:
      "Stop geld weggooien aan vergeten contracten. Pactly beheert al je contracten op één plek: energie, telecom, verzekeringen, abonnementen. Met slimme herinneringen, inzichten en bespaartips. En regelt nooit iets zonder akkoord.",
    logo: pactlyLogo,
    category: "Consumer Fintech · Contractbeheer",
    tags: ["APP", "FINTECH", "CONTRACTEN", "CONSUMER SAAS"],
    status: "IN ONTWIKKELING",
    statusColor: "hsl(var(--orange))",
    identity: {
      accent: "#4B519E",
      accentInk: "#FFFFFF",
      vibe: "CONTRACTEN · OVERZICHT · CONTROLE",
      proof: ["Merkstrategie en brandbook v3.0 afgerond", "Productrichting en flows bepaald", "MVP in voorbereiding"],
      proofTagline: "In ontwikkeling · huisstijl en propositie volledig vernieuwd",
    },
    cta: { label: "Bouw mee aan Pactly", href: "/meebouwen" },
    secondaryCta: { label: "Investeer in Pactly", href: "/meebouwen" },
    origin: {
      title: "Het originele probleem",
      story:
        "Iedereen heeft vaste lasten. Bijna niemand heeft er echt grip op.\n\nContracten, abonnementen, verzekeringen, energie, telecom, streaming, software, hypotheek, huur en zakelijke tools lopen dwars door elkaar heen. Via verschillende rekeningen, namen, e-mailadressen, portals en betaalmomenten. Zeker binnen huishoudens waar partners allebei eigen rekeningen hebben, samen kosten delen en soms ook nog zakelijke betalingen door elkaar lopen.\n\nDe bestaande oplossingen lossen steeds maar een stukje op. Een bankapp ziet wat er is afgeschreven. Een spreadsheet moet je zelf bijhouden. Een huishoudboekje maakt kosten zichtbaar, maar helpt beperkt met besparen. Een vergelijker helpt pas wanneer je zelf actief gaat zoeken. En automatische overstapdiensten nemen soms te veel over, zonder genoeg context of duidelijke toestemming.\n\nDaarom bouwen we Pactly. Eén plek die begrijpt wat er binnen een huishouden loopt. Wat het kost. Wie betaalt. Wie het gebruikt. Wanneer actie nodig is. Waar bespaard kan worden. En wat de beste volgende stap is.\n\nAltijd met één belangrijk principe: Pactly regelt nooit iets zonder akkoord.",
    },
    businessModel: {
      title: "Business model",
      description:
        "Pactly combineert een schaalbaar consumentenplatform met terugkerende inkomsten en transactiewaarde op het juiste moment. De basis is een freemium app voor huishoudens. Daarbovenop ontstaat de echte commerciële kracht: Pactly zit precies op het moment waarop een gebruiker moet beslissen: verlengen, opzeggen, wijzigen, vergelijken of overstappen. Op dat moment kan Pactly waarde creëren voor de gebruiker en inkomsten genereren via affiliate commissies, lead fees, partnerdeals of later white label toepassingen. De business case is daarmee niet alleen software. Het is een platformmodel rond vertrouwen, timing en huishoudelijke context.",
      points: [
        "Gratis instap om snel huishoudens aan te sluiten",
        "Premium abonnement voor meer grip, documenten, huishouddeling en alerts",
        "Affiliate- en partnerinkomsten bij overstappen, verlengen of afsluiten na akkoord",
        "Toekomstige white label mogelijkheden voor banken, hypotheekadviseurs, verzekeraars en financiële platforms",
        "Datagedreven inzichten op geaggregeerd niveau, zonder het vertrouwen van de gebruiker te breken",
      ],
    },
    currentStatus: {
      title: "Waar we nu staan",
      description:
        "Pactly staat aan het begin, maar de basis is gelegd. De propositie, merkstrategie, business case en productrichting zijn uitgewerkt. De eerste app-schermen, flows en merkidentiteit staan. De volgende stap is het bouwen van een scherpe MVP waarmee we het kernprobleem bewijzen: huishoudens willen één plek voor alles wat loopt, maar alleen als die plek betrouwbaar, helder en niet opdringerig voelt.",
      milestones: [
        "Concept en positionering uitgewerkt",
        "Merkstrategie en brandbook ontwikkeld",
        "Business case en verdienmodel opgesteld",
        "Eerste productrichting en interface ontworpen",
        "Heldere doelgroep en use cases bepaald",
        "Belangrijkste productprincipe vastgelegd: nooit actie zonder akkoord",
      ],
      extra:
        "De volgende stap is een MVP bouwen, eerste huishoudens aansluiten, contracten en abonnementen slim structureren, bespaarkansen aantonen, partnerkanalen verkennen en een team vormen dat Pactly groot kan maken.",
    },
    vision: {
      title: "De toekomst",
      description:
        "Pactly moet de slimme regielaag worden voor alles wat binnen het huishouden loopt. Niet alleen een contractenmap. Niet alleen een budgetapp. Niet alleen een vergelijker. Maar het platform dat weet wat er speelt, op tijd meedenkt en gebruikers helpt betere keuzes te maken.\n\nVandaag begint dat met contracten, abonnementen en vaste lasten. Morgen kan Pactly uitgroeien tot de financiële cockpit van het huishouden. Een plek waar consumenten grip krijgen op maandlasten, besparingen, looptijden, verplichtingen en belangrijke financiële momenten.\n\nDe kans is groot omdat de pijn dagelijks voelbaar is. Elk huishouden heeft vaste lasten. Elk huishouden heeft contracten. Elk huishouden betaalt wel ergens te veel. En bijna niemand heeft daar één betrouwbaar overzicht van. Pactly wil dat veranderen.",
    },
    ctaBlock: {
      title: "BOUW MEE AAN PACTLY",
      description:
        "Pactly zoekt mensen en partijen die willen instappen in een vroeg stadium. Dat kan met kapitaal. Maar ook met kennis, kunde of netwerk. We zoeken mensen die waarde kunnen toevoegen in product, techniek, data, finance, legal, partnerships, growth, UX, AI, consumentenmarketing of de vergelijkingsmarkt. Pactly is interessant voor mensen die geloven dat grote platforms niet beginnen met een pitchdeck, maar met een herkenbaar probleem dat bijna iedereen voelt. Als jij kunt helpen om Pactly sneller, slimmer of groter te maken, dan komen we graag met je in contact.",
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
