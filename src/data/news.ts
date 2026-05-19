// Centrale bron voor nieuwsberichten.
// Nieuwe berichten? Voeg een entry bovenaan `news` toe. bovenaan = nieuwste.
// Datum in ISO-formaat (YYYY-MM-DD). Slug moet uniek en URL-safe zijn.
//
// Tags verwijzen naar `ProjectTags` in projectTags.ts. Daardoor kunnen we
// nooit een bericht koppelen aan een niet-bestaand project (compile-time check).

import { ProjectTags, type ProjectTag } from "./projectTags";

export type NewsCategory =
  | "Venture update"
  | "Nieuw project"
  | "Past project"
  | "Manifest"
  | "Algemeen";

export type NewsItem = {
  slug: string;
  date: string; // ISO date
  category: NewsCategory;
  title: string;
  excerpt: string;
  // Body als array van paragrafen. eenvoudig te bewerken zonder markdown-parser.
  body: string[];
  // Optionele tag: alleen geldige project-tags zijn toegestaan.
  tag?: ProjectTag;
  // Optionele call-to-action onderaan het artikel.
  cta?: {
    label: string;
    href: string;
  };
};

// Bron-array. Toekomstige datums = ingeplande publicaties; die worden
// pas zichtbaar zodra hun datum is bereikt (zie isPublished / publishedNews).
// Volgorde: nieuwste bovenaan.
export const news: NewsItem[] = [
  {
    slug: "pactly-meebouwen-mensen-gezocht",
    date: "2026-06-05",
    category: "Venture update",
    tag: ProjectTags.pactly,
    title: "Waarom we mensen zoeken die mee willen bouwen aan Pactly",
    excerpt:
      "Pactly is geen project dat groot wordt door alleen een goed idee. Daarvoor zijn kapitaal, kennis, techniek, netwerk en ondernemerschap nodig.",
    body: [
      "Een goed idee is niet genoeg.",
      "Dat geldt eigenlijk voor elke venture die we bouwen. Een herkenbaar probleem helpt. Een sterke propositie helpt. Een goed merk helpt. Maar uiteindelijk wordt een idee pas een bedrijf als de juiste mensen instappen.",
      "Voor Pactly geldt dat misschien nog sterker.",
      "We bouwen namelijk niet zomaar een app. We bouwen aan een platform dat grip moet geven op alles wat binnen een huishouden maandelijks loopt. Contracten, abonnementen, vaste lasten, looptijden, bespaarkansen en belangrijke momenten waarop mensen iets moeten regelen.",
      "Dat vraagt meer dan een mooi dashboard.",
      "Het vraagt productkeuzes. Welke informatie moet iemand als eerste zien? Wat maakt een overzicht rustig? Wanneer is een melding behulpzaam en wanneer wordt die irritant?",
      "Het vraagt techniek. Hoe herkennen we contracten? Hoe structureren we abonnementen? Hoe gaan we om met bankdata, documenten, e-mails, handmatige invoer en automatische signalen?",
      "Het vraagt vertrouwen. Pactly werkt alleen als gebruikers voelen dat ze zelf aan het stuur blijven. Daarom is het principe dat Pactly nooit iets regelt zonder akkoord geen bijzin. Het is de basis van het hele platform.",
      "Het vraagt commerciële scherpte. Waar zit de waarde? Wanneer is een gebruiker bereid te betalen? Welke partnerinkomsten zijn logisch? Wanneer is een switchmoment relevant en wanneer niet?",
      "En het vraagt netwerk. Banken. Hypotheekadviseurs. Verzekeraars. Telecom. Energie. Vergelijkingsplatformen. Privacy en legal. Consumer fintech. Er zijn veel plekken waar kennis en toegang het verschil kunnen maken.",
      "Daarom zoeken we mensen die willen meebouwen.",
      "Dat kan met kapitaal. Met technische kennis. Met productervaring. Met data-expertise. Met juridische kennis. Met marketing en groei. Met toegang tot partners. Met ervaring in fintech, personal finance, verzekeringen, hypotheken, energie of telecom.",
      "Pactly staat nog vroeg. Dat betekent dat er nog veel open ligt. Maar het betekent ook dat de juiste mensen nu echt invloed kunnen hebben op de richting.",
      "We zoeken geen mensen die alleen vanaf de zijlijn roepen dat het interessant is. We zoeken mensen die iets kunnen toevoegen.",
      "Mensen die snappen dat huishoudens geen behoefte hebben aan nog een ingewikkelde financiële app, maar aan rust, overzicht en duidelijke keuzes. Mensen die geloven dat vertrouwen belangrijker is dan snelle conversie. Mensen die zien dat bijna ieder huishouden vaste lasten heeft, maar bijna niemand daar één goed overzicht van heeft.",
      "Dat is de kans.",
      "Pactly moet de slimme regielaag worden voor alles wat binnen het huishouden loopt. Niet alleen een contractenmap. Niet alleen een budgetapp. Niet alleen een vergelijker. Maar een platform dat begrijpt wat er speelt, op tijd meedenkt en pas helpt regelen wanneer de gebruiker dat wil.",
      "Dat bouwen we niet alleen.",
      "Dus als je denkt dat je Pactly sneller, scherper of groter kunt maken, dan is dit een goed moment om aan te haken.",
    ],
    cta: { label: "Ik wil meebouwen aan Pactly", href: "/ventures/pactly" },
  },
  {
    slug: "pactly-waar-we-nu-staan",
    date: "2026-05-22",
    category: "Venture update",
    tag: ProjectTags.pactly,
    title: "Waar we nu staan met Pactly",
    excerpt:
      "Pactly is nog vroeg, maar de basis staat. De frustratie is vertaald naar een propositie, merk, business case en eerste productrichting.",
    body: [
      "Pactly is nog vroeg.",
      "En juist dat maakt deze fase interessant.",
      "Het begon met een persoonlijke frustratie. Geen grip op alles wat thuis maandelijks loopt. Te veel losse contracten. Te veel abonnementen. Te veel plekken waar informatie verstopt zit. En te weinig vertrouwen in oplossingen die óf te passief zijn, óf juist te snel voor je gaan handelen.",
      "Die frustratie hebben we de afgelopen periode uitgewerkt tot een duidelijke richting.",
      "Pactly wordt het slimme huishoudplatform voor contracten, abonnementen en vaste lasten. Eén plek waar je ziet wat er loopt, wie betaalt, wie het gebruikt, wanneer actie nodig is en waar geld bespaard kan worden.",
      "De kern is simpel: grip op alles wat loopt in je huishouden.",
      "Daaromheen is inmiddels veel scherper geworden.",
      "We hebben Pactly gepositioneerd als consumer fintech. Niet als legaltech. Niet als gewone softwaretool. Niet als budgetapp. Pactly raakt contracten, maar lost vooral een financieel en huishoudelijk regieprobleem op.",
      "We hebben de merkstrategie uitgewerkt. Pactly moet helder, warm, eerlijk en proactief voelen. Niet bankachtig. Niet juridisch. Niet corporate. Niet opdringerig. Wel betrouwbaar, modern en menselijk.",
      "We hebben de business case uitgewerkt. De commerciële logica zit niet alleen in een premium abonnement, maar vooral in het moment waarop gebruikers een keuze moeten maken. Verlengen, opzeggen, wijzigen, vergelijken of overstappen. Pactly zit dan op het juiste moment aan tafel, met context en vertrouwen.",
      "We hebben ook het belangrijkste productprincipe vastgelegd: Pactly handelt nooit zonder akkoord. Dat is geen detail. Dat is de basis van het vertrouwen.",
      "Pactly mag signaleren. Pactly mag doorrekenen. Pactly mag opties laten zien. Pactly mag helpen regelen. Maar de gebruiker kiest.",
      "Daarmee onderscheiden we Pactly van diensten die te snel namens de gebruiker gaan onderhandelen of aanvragen. Pactly moet niet voelen als een partij die controle overneemt, maar als een rustige copiloot die je helpt betere keuzes te maken.",
      "Waar staan we nu concreet? De propositie staat. De merkidentiteit staat. Het brandbook staat. De business case staat. De eerste productrichting staat. De juridische basis is in concept uitgewerkt. De venture pagina op Toms Ambitie is aangescherpt.",
      "De volgende stap is een scherpe eerste versie. Die eerste versie moet niet alles kunnen. Sterker nog: dat moet juist niet.",
      "De eerste versie moet het kernprobleem bewijzen. Willen huishoudens één plek voor alles wat loopt? Kunnen we contracten en abonnementen logisch structureren? Kunnen we duidelijk maken wie betaalt, wie gebruikt en wanneer actie nodig is? Kunnen we bespaarkansen tonen zonder opdringerig te worden?",
      "Daar ligt de focus. Eerst grip. Dan advies. Dan uitvoering.",
      "De komende fase draait om bouwen, testen en aanscherpen. Met echte huishoudens. Echte contracten. Echte maandlasten. En echte feedback.",
      "Daarom zoeken we mensen die willen meedoen. Dat kan als investeerder. Maar ook als mede-ondernemer, productbouwer, developer, UX-denker, data-specialist, legal expert, finance partner, growth marketeer of iemand met een netwerk in banken, verzekeringen, hypotheken, telecom of vergelijkingsplatformen.",
      "Pactly staat nog aan het begin. Maar het probleem is groot genoeg. De pijn is herkenbaar genoeg. En de kans is interessant genoeg om nu serieus door te pakken.",
      "Wie kan helpen om Pactly sneller, slimmer of groter te maken, moet aanhaken.",
    ],
    cta: { label: "Bouw mee aan Pactly", href: "/ventures/pactly" },
  },
  {
    slug: "pactly-het-probleem",
    date: "2026-05-08",
    category: "Venture update",
    tag: ProjectTags.pactly,
    title: "Het probleem achter Pactly",
    excerpt:
      "Iedereen heeft vaste lasten. Bijna niemand heeft er echt grip op. Dat is het probleem waar Pactly uit is ontstaan.",
    body: [
      "Iedereen heeft vaste lasten.",
      "Energie. Internet. Verzekeringen. Streaming. Telecom. Software. Sport. Hypotheek. Huur. Kinderopvang. Zakelijke tools. Kleine abonnementen. Grote contracten.",
      "Dingen die je zelf betaalt. Dingen die je partner betaalt. Dingen die via de gezamenlijke rekening lopen. Dingen waarvan niemand meer precies weet op wiens naam ze staan.",
      "Los van elkaar lijken ze overzichtelijk. Samen worden ze rommelig.",
      "Zeker in een normaal huishouden. Niet het perfecte huishouden uit een financieel adviesboekje, maar het echte huishouden. Met meerdere rekeningen, verschillende e-mailadressen, gedeelde kosten, persoonlijke abonnementen en soms ook nog zakelijke betalingen die door elkaar lopen.",
      "Dan is de vraag niet alleen: wat betaal ik? Maar ook: wie betaalt dit? Wie gebruikt dit? Is dit dubbel? Kan dit goedkoper? Wanneer loopt het af? Moeten we opzeggen, verlengen of overstappen? En wie houdt dit eigenlijk bij?",
      "Vaak is het eerlijke antwoord: niemand.",
      "Dat is precies waarom bestaande oplossingen tekortschieten.",
      "Een spreadsheet is handig, maar dood. Je moet alles zelf invullen, bijwerken en onthouden. Een bankapp toont betalingen, maar begrijpt niet welk contract erachter zit. Laat staan wanneer iets afloopt of goedkoper kan. Een huishoudboekje laat zien waar je geld heen gaat, maar helpt beperkt met besparen. Een vergelijker is nuttig, maar pas wanneer je zelf actief gaat zoeken. En een overstapdienst kan handig zijn, maar voelt verkeerd zodra die te veel voor je doet zonder genoeg context of duidelijke toestemming.",
      "Pactly moet dat anders doen.",
      "Pactly wordt één plek voor alles wat binnen je huishouden loopt. Niet alleen een overzicht van kosten, maar een slim dashboard dat context begrijpt. Wat loopt er? Wie betaalt? Wie gebruikt het? Waar lekt geld weg? Wanneer moet je iets doen? Wat zijn je opties?",
      "Pactly kan je helpen met vergelijken, opzeggen, verlengen, wijzigen of overstappen. Maar nooit automatisch. Nooit opdringerig. Nooit zonder akkoord.",
      "Dat is voor ons de kern.",
      "We willen geen app bouwen die zegt: wij hebben alvast iets voor je geregeld. We willen een platform bouwen dat zegt: dit speelt er, dit zijn je opties, wat wil je doen?",
      "Dat verschil is belangrijk. Want vertrouwen is de basis. Eerst moet Pactly laten zien dat het klopt. Dat het overzicht rustig is. Dat de meldingen op tijd komen. Dat het advies past bij jouw situatie. Pas daarna mag er actie komen.",
      "Daarom zien wij Pactly niet als een gewone budgetapp. Ook niet als een vergelijker. En ook niet als legaltech, ondanks dat contracten een rol spelen.",
      "Pactly is consumer fintech. Een platform voor huishoudens dat helpt om grip te krijgen op maandlasten, contracten, abonnementen en bespaarkansen.",
      "De eerste stap is overzicht. De tweede stap is advies. De derde stap is actie, maar alleen als de gebruiker dat wil.",
      "Daar zit de kans. Niet omdat huishoudens nog een app zoeken. Maar omdat huishoudens één plek missen die begrijpt wat er achter de voordeur allemaal loopt.",
    ],
    cta: { label: "Lees meer over Pactly", href: "/ventures/pactly" },
  },
  {
    slug: "pactly-we-bouwen-aan-iets-nieuws",
    date: "2026-04-24",
    category: "Nieuw project",
    tag: ProjectTags.pactly,
    title: "We bouwen aan iets nieuws",
    excerpt:
      "Soms begint een idee niet met een brainstorm, maar met irritatie. Pactly is daar een goed voorbeeld van.",
    body: [
      "We bouwen aan iets nieuws.",
      "Nog niet omdat er al een compleet product staat. Nog niet omdat alles al af is. Maar omdat het probleem te herkenbaar is om te laten liggen.",
      "Het begon met een simpele vraag: waar lekt er thuis eigenlijk geld weg?",
      "Niet op één grote uitgave. Niet op iets waar je elke dag bewust mee bezig bent. Maar op alles wat stilletjes doorloopt. Contracten. Abonnementen. Verzekeringen. Telecom. Streaming. Software. Hypotheek. Energie. Dingen die ooit zijn afgesloten en daarna ergens in een mailbox, portal, bankafschrijving of spreadsheet zijn verdwenen.",
      "En dan komt de echte frustratie.",
      "Een bankapp laat zien wat er is afgeschreven, maar niet wat eraan komt. Een spreadsheet geeft overzicht, maar alleen zolang je hem zelf blijft bijwerken. Een huishoudboekje laat zien waar je geld heen gaat, maar helpt je niet echt verder. Een vergelijker helpt pas als je zelf al weet dat je moet gaan zoeken.",
      "En sommige diensten gaan juist te ver. Die willen alvast onderhandelen of iets aanvragen, terwijl je eerst gewoon rustig wilt weten wat verstandig is.",
      "Daar zit voor ons iets.",
      "Want wat als er één plek is die wél begrijpt wat er binnen je huishouden loopt? Niet alleen per persoon. Niet alleen per rekening. Niet alleen per categorie. Maar achter de voordeur. Zoals het in het echte leven werkt.",
      "Wie betaalt wat? Wie gebruikt het? Op wiens naam staat het? Wanneer loopt het af? Kan het slimmer? Moet er iets gebeuren?",
      "Dat idee noemen we Pactly.",
      "Pactly moet het slimme huishoudplatform worden voor alles wat maandelijks loopt. Een plek die overzicht geeft, meedenkt, bespaarkansen ziet en op tijd zegt wanneer er actie nodig is.",
      "Maar met één harde regel: Pactly regelt nooit iets zonder akkoord. Eerst inzicht. Dan advies. Dan jouw keuze. Daarna pas actie.",
      "Daar zijn we nu mee bezig.",
      "We zitten nog vroeg. Precies daarom is dit het moment waarop het interessant wordt. De richting is duidelijk. De frustratie is echt. De markt is groot. En het probleem raakt bijna ieder huishouden.",
      "De komende periode werken we Pactly verder uit. Concept, merk, product, business case, eerste schermen en uiteindelijk een eerste versie die we kunnen testen.",
      "Wie mee wil denken, bouwen of instappen, mag zich melden.",
    ],
    cta: { label: "Bekijk de Pactly venture", href: "/ventures/pactly" },
  },
  {
    slug: "post-pilot-eerste-100-klanten",
    date: "2026-04-18",
    category: "Venture update",
    tag: ProjectTags.postPilot,
    title: "Post Pilot bereikt eerste 100 klanten",
    excerpt:
      "Een belangrijke validatiemijlpaal: Post Pilot heeft de honderdste betalende klant verwelkomd en bewijst daarmee product-market fit in de niche.",
    body: [
      "Sinds de stille launch eind vorig jaar groeit Post Pilot gestaag. Deze week verwelkomden we de honderdste betalende klant. een mijlpaal die binnen het Toms Ambitie-model staat voor 'gevalideerd'.",
      "De komende maanden ligt de focus op retentie, onboarding en een eerste integratie met externe tools. Geen grote marketingsprint; eerst de basis verstevigen.",
      "Voor wie nieuwsgierig is naar de aanpak: het hele traject werd gebouwd op de leercurves van eerdere ventures. Snel valideren, durven bijsturen, niets afdwingen.",
    ],
  },
  {
    slug: "plug-and-power-pilot-zwolle",
    date: "2026-03-29",
    category: "Venture update",
    tag: ProjectTags.plugAndPower,
    title: "Plug and Power start pilot in Zwolle",
    excerpt:
      "Eerste pilot loopt in eigen stad. Drie locaties, één doel: bewijzen dat het concept ook buiten papier werkt.",
    body: [
      "Plug and Power is uit de tekentafelfase. Op drie locaties in Zwolle draait nu een gesloten pilot waarin we het concept op echte gebruikers loslaten.",
      "Doel van deze fase: meten, niet schalen. We willen weten waar het schuurt voordat we de volgende stap zetten.",
      "Resultaten worden in Q3 intern geëvalueerd. Bij groen licht volgt uitbreiding naar twee andere steden.",
    ],
  },
  {
    slug: "nieuw-project-in-onderzoek",
    date: "2026-02-11",
    category: "Nieuw project",
    title: "Nieuw project in stille onderzoeksfase",
    excerpt:
      "Een vierde venture wordt momenteel verkend. Nog geen naam, geen pagina. wel een sterk vermoeden dat het ergens heen gaat.",
    body: [
      "Achter de schermen loopt een verkenning voor een vierde venture. Het idee zit op het snijvlak van automatisering en MKB-dienstverlening.",
      "Volgens het Toms Ambitie-ritme krijgt dit project pas een naam en een plek op de site zodra de eerste validatie rond is. Tot die tijd: hoofd omlaag, gesprekken voeren, aannames testen.",
      "Verwachting: meer nieuws hierover in de tweede helft van het jaar.",
    ],
  },
  {
    slug: "led-ibc-verkocht-aan-woodpeckers",
    date: "2023-09-22",
    category: "Past project",
    tag: ProjectTags.ledIbc,
    title: "Waarom ik LED-IBC verkocht terwijl het juist zo goed ging",
    excerpt:
      "Het bedrijf draaide beter dan ooit. En toch was verkopen op dat moment de juiste keuze. Een terugblik op een van de vreemdste ondernemersbeslissingen die ik ooit heb genomen.",
    body: [
      "LED-IBC verkopen was misschien wel een van de vreemdste ondernemersbeslissingen die ik ooit heb genomen.",
      "Niet omdat het slecht ging.",
      "Juist niet.",
      "We waren op dat moment minimaal tien keer groter dan de nummer twee in de Benelux. Het bedrijf draaide goed, de aanvragen bleven groeien en de samenwerking met België werkte perfect.",
      "Maar ondertussen werkte ik ook bij Art of Dance, onderdeel van ID&T.",
      "En dat begon steeds ongemakkelijker te voelen. De ene dag zat ik met marketingmanagers van festivals aan tafel vanuit mijn werk. De volgende dag belden diezelfde festivals voor LED-IBC verhuur.",
      "Dat voelde niet zuiver.",
      "Tegelijkertijd gaf Kris Orts uit Antwerpen aan dat hij groter wilde groeien met LED-IBC. Meer investeren. Meer uitbreiden. En eerlijk? Ik wist dat hij daar de juiste persoon voor was.",
      "Dus besloot ik het hele bedrijf te verkopen. De voorraad. De operatie. Het merk. Alles.",
      "In september 2023 werd LED-IBC officieel overgenomen door Kris en Woodpeckers. En misschien was dat wel het mooiste einde dat het bedrijf kon krijgen.",
      "Want LED-IBC bestaat nog steeds. Groter dan ooit.",
      "Achteraf denk ik dat het succes van LED-IBC eigenlijk verrassend simpel was. Drie dingen.",
      "Bouw een product dat écht beter werkt. Snap de operatie van je klant. En groei alleen wanneer je cashflow dat aankan.",
      "Geen groot investeringsplan. Geen ingewikkelde strategie. Gewoon nuchter bouwen en blijven leveren.",
    ],
  },
  {
    slug: "entranz-verlies-niet-concurrentie-maar-timing",
    date: "2022-05-11",
    category: "Past project",
    tag: ProjectTags.entranz,
    title: "Soms verlies je niet van concurrentie, maar van timing",
    excerpt:
      "Entranz heeft me misschien wel een van de belangrijkste ondernemerslessen ooit geleerd. Namelijk: dat je alles goed kunt doen en alsnog kunt verliezen.",
    body: [
      "Entranz heeft me misschien wel een van de belangrijkste ondernemerslessen ooit geleerd.",
      "Namelijk: dat je alles goed kunt doen\u2026 en alsnog kunt verliezen.",
      "We hadden een duidelijke positionering, een marktprobleem, technische visie, ambitie, energie en een sterk team.",
      "Maar sommige factoren kun je simpelweg niet controleren.",
      "COVID was voor de evenementenbranche geen dipje of tijdelijke tegenvaller. Het was alsof iemand de stekker volledig uit de markt trok.",
      "In 2022 besloten Dick en ik daarom uit Entranz te stappen zodat Tim en Peter verder konden bouwen en meer ruimte kregen om het bedrijf een nieuwe kans te geven.",
      "Dat was geen makkelijke keuze. Want juist wanneer je ergens in gelooft, wil je niet stoppen.",
      "Maar soms betekent ondernemerschap ook: ruimte maken voor een andere route.",
      "Inmiddels bestaat Entranz niet meer. En toch voelt het niet als een mislukt idee. Eerder als een venture dat precies op het verkeerde moment op de markt kwam.",
      "En eerlijk? Ik denk nog steeds dat veel ticketproviders vandaag de dag nog steeds niet doen wat Entranz toen al wilde oplossen.",
    ],
  },
  {
    slug: "entranz-covid-verkeerde-moment",
    date: "2021-02-09",
    category: "Past project",
    tag: ProjectTags.entranz,
    title: "Hoe COVID precies op het verkeerde moment kwam voor Entranz",
    excerpt:
      "Entranz stond klaar om door te breken. Dat klinkt achteraf misschien als grootspraak, maar zo voelde het echt. En toen ging letterlijk de hele evenementenbranche op slot.",
    body: [
      "Entranz stond klaar om door te breken.",
      "Dat klinkt achteraf misschien als grootspraak, maar zo voelde het echt.",
      "We hadden een sterk verhaal, een vernieuwende visie, tractie in de markt, een groeiend netwerk en een product dat precies aansloot op waar evenementen naartoe gingen.",
      "En toen ging letterlijk de hele evenementenbranche op slot.",
      "2,5 maand nadat ik instapte brak COVID uit. Van de ene op de andere dag verdween praktisch de complete markt.",
      "Festivals weg. Events weg. Ticketing weg.",
      "Niemand wist hoe lang het ging duren. Niemand wist wat er nog overeind zou blijven.",
      "We hebben nog geprobeerd mee te bewegen. Onder andere met toegangscontrole en ondersteuning rondom testlocaties en Testen voor Toegang.",
      "Maar uiteindelijk veranderde dat niets aan het grotere probleem: een ticketplatform zonder evenementenmarkt blijft kwetsbaar.",
      "En toch kijk ik niet negatief terug op Entranz. Integendeel.",
      "Ik denk nog steeds dat het idee klopte. Misschien zelfs meer dan ooit.",
      "Want tegenwoordig begrijpt bijna iedereen hoe belangrijk data, targeting en community ownership zijn geworden.",
      "Misschien waren we gewoon iets te vroeg.",
    ],
  },
  {
    slug: "waarom-partyblender-uiteindelijk-stopte",
    date: "2020-10-03",
    category: "Past project",
    tag: ProjectTags.partyBlender,
    title: "Waarom PartyBlender uiteindelijk stopte",
    excerpt:
      "Soms heb je een goed idee op het verkeerde moment. Of beter gezegd: een goed idee zonder de middelen om het echt groot te maken. Dat was PartyBlender.",
    body: [
      "Soms heb je een goed idee op het verkeerde moment.",
      "Of misschien beter gezegd: een goed idee zonder de middelen om het echt groot te maken.",
      "Dat was PartyBlender.",
      "Na Tinderlove Festival gingen we nog ongeveer een jaar door. De community groeide, het idee werkte en steeds meer mensen snapten wat we probeerden te bouwen.",
      "Maar ondertussen werd ook duidelijk hoeveel techniek er eigenlijk nodig was om PartyBlender écht schaalbaar te maken.",
      "Het platform had data nodig. Automatisering nodig. Koppelingen nodig. Een centrale eventdatabase nodig.",
      "En dat kostte simpelweg veel meer tijd en geld dan we op dat moment beschikbaar hadden. Zowel Jorieke als ik hadden niet de financiële ruimte om daar volledig voor te gaan.",
      "En eerlijk? Soms moet je ook durven erkennen dat iets potentie heeft, maar niet het juiste momentum krijgt.",
      "Dus stopte PartyBlender uiteindelijk. Niet omdat het idee slecht was. Integendeel.",
      "Ik denk nog steeds dat het concept vandaag de dag zou kunnen werken. Misschien zelfs beter dan toen.",
      "Maar ondanks dat het platform stopte, bleef er wel iets hangen: het besef dat je met energie, creativiteit en snelheid soms veel grotere dingen kunt bouwen dan je vooraf denkt.",
      "En gelukkig hebben we de beelden nog. Want sommige projecten verdwijnen nooit helemaal.",
    ],
  },
  {
    slug: "van-reclamebureau-naar-venture-denken",
    date: "2020-09-22",
    category: "Past project",
    tag: ProjectTags.aardbeiCommunicatie,
    title: "Het bouwen zat er altijd al in",
    excerpt:
      "Bij Aardbei waren we eigenlijk de hele tijd aan het rommelen met nieuwe ideeën. Niet omdat het hoorde, maar omdat we het niet konden laten.",
    body: [
      "Ik denk weleens terug aan de avonden boven het bureau in Nijverdal.",
      "Iedereen al naar huis. Twee schermen aan, een halve pizza op tafel, en Marcel die vanaf de andere kant van de kamer riep dat hij wéér iets had bedacht.",
      "Officieel waren we een communicatiebureau. In de praktijk zaten we vooral te bouwen aan dingen waar niemand om gevraagd had.",
      "Een eigen merk lanceren. Een campagne testen op onszelf voor we hem aan een klant durfden te geven. Een idee uitwerken op een biervilt en het maandagochtend bij wijze van grap echt opzetten.",
      "We noemden dat geen experimenten. We noemden het niks. Het was gewoon wat we deden.",
      "Sommige dingen werkten. De meeste niet. En een aantal werd kwartalen later ineens groter dan we hadden durven hopen.",
      "Achteraf zie ik pas dat dat eigenlijk het leukste deel was. Niet de facturen. Niet de oplevering. Maar dat moment vlak na een idee, waarop alles nog kon.",
      "Toen Aardbei verkocht was en ik met Marcel verder ging onder FreshGuys, bleef dat gevoel hangen.",
      "Klanten helpen vond ik nog steeds leuk. Maar ergens begon iets te knagen. Ik wilde niet alleen voor anderen bouwen. Ik wilde zelf weer iets dat van ons was.",
      "In de jaren daarna ben ik blijven prutsen aan eigen dingen. Soms slim. Soms naïef. Vaak op de verkeerde momenten begonnen.",
      "Daar ontstond mijn fascinatie voor het bouwen zelf. Voor de fase waarin nog niks vastligt. Voor de eerste versie waarin alles nog rammelt.",
      "Het bouwen zat er altijd al in. Het had alleen nog geen naam.",
    ],
  },
  {
    slug: "designershirts-waarom-we-stopten",
    date: "2020-03-18",
    category: "Past project",
    tag: ProjectTags.designerShirts,
    title: "Waarom we stopten met DesignerShirts",
    excerpt:
      "DesignerShirts was jarenlang een project op de achtergrond. Niet extreem winstgevend, maar het gaf energie. Tot de markt en het bureau veranderden.",
    body: [
      "DesignerShirts was jarenlang een van die projecten die altijd op de achtergrond bleef draaien.",
      "Niet omdat het extreem winstgevend was. Maar omdat het energie gaf.",
      "Het was een plek waar we ideeën konden testen. Creativiteit kwijt konden. Dingen konden bouwen zonder dat iemand ons vertelde hoe het moest.",
      "Maar ondertussen veranderde de markt ook snel.",
      "Waar funny shirts in 2010 nog relatief uniek waren, kon je ze een paar jaar later overal kopen. Webshops werden gemeengoed en de concurrentie groeide hard.",
      "Tegelijkertijd veranderde er binnen Aardbei Communicatie ook veel.",
      "In 2015 werd Aardbei verkocht en DesignerShirts viel daar juridisch gewoon onder. Het was geen los bedrijf, maar een handelsnaam binnen de organisatie.",
      "De nieuwe eigenaar wilde daar niet mee verder.",
      "En eerlijk? Dat voelde eigenlijk ook als het juiste moment.",
      "Sommige projecten zijn bedoeld om geld te verdienen. Andere projecten zijn bedoeld om je beter te maken.",
      "DesignerShirts heeft ons geleerd hoe e-commerce werkt, hoe online gedrag werkt, hoe je aandacht trekt en hoe belangrijk het is om zelf te blijven testen.",
      "Achteraf was dat misschien wel veel waardevoller dan de winst zelf.",
    ],
  },
  {
    slug: "led-ibc-grootste-speler-benelux",
    date: "2020-02-14",
    category: "Past project",
    tag: ProjectTags.ledIbc,
    title: "Van achtertuin naar grootste speler van de Benelux",
    excerpt:
      "Een paar units in 2017. Eind 2018 al meer dan twintig. En een paar jaar later groter dan alle concurrenten bij elkaar. Niet door geld, maar door slimmer groeien.",
    body: [
      "LED-IBC groeide harder dan we ooit hadden verwacht.",
      "In 2017 hadden we een paar units. Eind 2018 stonden er al meer dan 20. En een paar jaar later waren we groter dan alle concurrenten bij elkaar.",
      "Niet omdat we het meeste geld hadden. Maar omdat we slimmer groeiden.",
      "We verhuisden de voorraad naar Koeriersdienst Rijssen, de logistieke partner die alles voor ons vervoerde. Ook daar weer dezelfde mentaliteit. Niet moeilijk doen, gewoon regelen.",
      "En dat werkte.",
      "Vrijdagavond leveren? Geen probleem. Zondagnacht ophalen? Regelen we.",
      "Want evenementen wachten niet.",
      "Dat was misschien wel het grootste verschil met veel andere verhuurbedrijven. Wij snapten niet alleen het product, maar ook de stress en deadlines van eventorganisaties.",
      "Tegelijkertijd groeide België hard mee. Via Kris Orts van Woodpeckers ontstond een samenwerking in Antwerpen en openden we daar een tweede locatie.",
      "Op een gegeven moment hadden we een hoofdlocatie in Zwolle, logistiek in Rijssen, een vestiging in Antwerpen en meer dan 60 LED-IBC's operationeel.",
      "En toen begon het ineens serieus groot te voelen.",
    ],
  },
  {
    slug: "entranz-waarom-ik-instapte",
    date: "2020-01-17",
    category: "Past project",
    tag: ProjectTags.entranz,
    title: "Waarom ik direct wilde instappen in Entranz",
    excerpt:
      "Soms krijg je een pitchdeck onder ogen waarvan je direct voelt: hier zit iets in. Dat gebeurde bij Entranz.",
    body: [
      "Soms krijg je een pitchdeck onder ogen waarvan je direct voelt: hier zit iets in.",
      "Dat gebeurde bij Entranz.",
      "Tim en ik kenden elkaar al langer via Tafelronde 114 en tijdens een weekend in Losser liet hij mij het plan achter Entranz zien.",
      "Eigenlijk vroeg hij gewoon: \u201CWil je hier even kritisch naar kijken?\u201D",
      "Maar terwijl ik erdoorheen ging, gebeurde er iets anders. Ik werd enthousiast.",
      "Niet alleen over het idee, maar vooral over de manier waarop Entranz naar de markt keek.",
      "De ticketwereld voelde op dat moment namelijk verrassend ouderwets. Veel partijen verdienden prima geld, maar innovatie leek nauwelijks prioriteit te hebben. Terwijl evenementen ondertussen steeds meer draaiden om data, marketing en doelgroepgedrag.",
      "Dus zei ik uiteindelijk niet: \u201Cik wil investeren.\u201D",
      "Ik zei: \u201CIk wil meedoen.\u201D",
      "En zo stapte ik per 1 januari 2020 samen met Dick Faas in Entranz naast Tim Kant en Peter Tettero.",
      "Achteraf misschien perfect timing. Of juist de slechtst mogelijke timing ooit.",
      "Dat wisten we toen alleen nog niet.",
    ],
  },
  {
    slug: "designershirts-eerste-online-testlab",
    date: "2019-06-04",
    category: "Past project",
    tag: ProjectTags.designerShirts,
    title: "DesignerShirts was eigenlijk ons eerste online testlab",
    excerpt:
      "Achteraf gezien draaide DesignerShirts misschien minder om shirts dan om nieuwsgierigheid. We wilden begrijpen hoe online gedrag werkt.",
    body: [
      "Achteraf gezien draaide DesignerShirts misschien minder om shirts dan om nieuwsgierigheid.",
      "We wilden begrijpen: waarom koopt iemand online iets? Waarom klikt iemand wel? Waarom haakt iemand af?",
      "En het mooie was: bij DesignerShirts konden we alles zelf testen.",
      "Geen klant die eerst akkoord moest geven. Geen briefing. Geen beperkingen.",
      "Als we 's avonds een idee hadden, kon het de volgende ochtend live staan.",
      "Dat maakte het project verslavend.",
      "We organiseerden fotoshoots met modellen. Hadden een eigen promoteam dat langs evenementen ging. Testten advertenties. Probeerden nieuwe checkoutflows. Pasten designs aan. Speelden met productcombinaties.",
      "Soms werkte iets totaal niet.",
      "En soms gebeurde er ineens iets waarvan je dacht: oh… dus zo reageren mensen online.",
      "Ik denk dat we daar misschien wel meer geleerd hebben dan bij sommige klantprojecten.",
      "Omdat het écht was. Echte bezoekers. Echte aankopen. Echt gedrag.",
      "DesignerShirts werd daardoor niet alleen een webshop, maar ook een plek waar we als ondernemers, marketeers en makers beter werden.",
    ],
  },
  {
    slug: "tinderlove-festival-zes-weken",
    date: "2019-02-14",
    category: "Past project",
    tag: ProjectTags.partyBlender,
    title: "Hoe Tinderlove Festival in zes weken werd gebouwd",
    excerpt:
      "PartyBlender begon klein. Een Facebookpagina met reviews. Tot we besloten dat een lancering geen persbericht nodig had, maar een eigen festival.",
    body: [
      "PartyBlender begon eerst klein.",
      "Samen met Jorieke Preuter startte ik simpelweg een Facebookpagina waarop we elke week feestjes reviewden. We gingen zelf naar evenementen, maakten foto's, schreven reviews en deelden onze tip van de week.",
      "En langzaam begonnen steeds meer mensen dat te volgen.",
      "Na een paar maanden dachten we: misschien zit hier wel iets in.",
      "Dus besloten we PartyBlender officieel te lanceren. Niet met een persbericht. Maar met een eigen festival.",
      "En precies op dat moment gebeurde er iets interessants.",
      "Tinder kwam begin 2014 beschikbaar in Europa en explodeerde volledig. Iedereen had het erover. Valentijnsdag viel dat jaar op zaterdag.",
      "Dus ineens vielen alle puzzelstukjes op hun plek.",
      "Het idee: een groot feest rondom live daten, muziek en uitgaan.",
      "Eerst wilden we het Tinderdome noemen, maar dat vond de partner van De Lantaarn in Hellendoorn geen goed idee. Dat trekt verkeerd publiek aan.",
      "Dus werd het Tinderlove Festival. En eerlijk? Dat klonk achteraf ook veel beter.",
      "Binnen zes weken stampten we meerdere stages, artiesten, marketing, visuals, promotie en ticketing uit de grond.",
      "En het bizarre was: het werkte. Het feest was compleet uitverkocht en voelde alsof alles ineens samenkwam.",
      "Dat gevoel vergeet ik denk ik nooit meer. Dat moment waarop je beseft: als je iets kunt bedenken, kun je het blijkbaar ook gewoon bouwen.",
    ],
  },
  {
    slug: "waarom-verkopen-soms-beter-is-dan-doorgaan",
    date: "2019-02-06",
    category: "Past project",
    tag: ProjectTags.aardbeiCommunicatie,
    title: "Het besluit om Aardbei te verkopen",
    excerpt:
      "Het bureau liep goed. Daarom was het besluit om te verkopen ook zo verwarrend. Het ging niet over cijfers. Het ging over iets anders.",
    body: [
      "Het bureau liep goed in die laatste jaren.",
      "Mooie klanten. Een hecht team van tien mensen. Een naam in de regio. Op papier was er weinig reden om iets te veranderen.",
      "Op papier.",
      "Marcel en ik waren begonnen toen we begin twintig waren. We zaten bijna elke dag samen, vaak ook in de avonden, en niet zelden in het weekend.",
      "Werk en vriendschap waren al jaren niet meer uit elkaar te trekken. Dat had ons ook ver gebracht. Maar het had ook iets sluipends.",
      "Ondernemen voelde soms verslavend. Werk was nooit echt klaar. Er was altijd nog een offerte, een pitch, een idee, een gesprek dat eigenlijk niet kon wachten.",
      "Thuis stond ondertussen de wereld stil. Of liep er iets dat ik te lang had genegeerd.",
      "Ik weet nog dat ik op een avond laat thuiskwam, en mezelf hardop hoorde uitleggen waarom dit weekend ook werkweekend zou worden. Niet tegen iemand. Gewoon tegen mezelf.",
      "Dat soort momenten stapelden zich op.",
      "Het lastige was dat het bureau niks fout deed. Geen crisis. Geen ruzie. Geen exit-fantasie.",
      "Maar er was iets aan het schuiven. Bij mij. Bij Marcel. Bij wat we wel en niet meer wilden opofferen voor iets dat ooit gewoon leuk was.",
      "Eind 2014 hebben we hardop tegen elkaar gezegd wat we allebei al een tijd dachten. Misschien is het tijd.",
      "Vanaf dat moment ging het minder over rendement en meer over verantwoordelijkheid. Wat doen we met het team? Met de klanten die ons al jaren vertrouwden? Met de mensen die voor ons gekozen hadden in plaats van voor een groter bureau in de stad?",
      "We wilden niet zomaar verkopen. We wilden het netjes doen.",
      "Pas toen we het idee hadden dat iedereen een goede plek zou krijgen, gingen we serieus in gesprek met potentiële kopers.",
      "Via het PNG netwerk leerde ik Brandon Ziel kennen. Dat klikte direct.",
      "In april 2015 werd Aardbei Communicatie verkocht en verhuisde het bureau naar Hengelo.",
      "Ik dacht dat ik opgelucht zou zijn. In plaats daarvan was ik vooral leeg. Het besef dat een hoofdstuk van zeven jaar gewoon dicht was, had even tijd nodig om te landen.",
      "Achteraf was het de juiste keuze. Niet omdat het zakelijk slim was, maar omdat het menselijk klopte.",
    ],
  },
  {
    slug: "designershirts-waarom-funny-shirts-2010",
    date: "2018-09-12",
    category: "Past project",
    tag: ProjectTags.designerShirts,
    title: "Waarom we in 2010 begonnen met een webshop voor funny shirts",
    excerpt:
      "Funny shirts waren ineens een ding. Maar je kon ze nergens zelf samenstellen. Dat vonden wij vreemd — en zo ontstond DesignerShirts.",
    body: [
      "Rond 2010 waren funny shirts ineens een ding.",
      "Maar eigenlijk kon je ze maar op een paar plekken kopen. Vaak bij winkels zoals CoolCat. Gewoon fysiek in de winkel en altijd precies zoals zij hadden bedacht.",
      "Dat vonden wij vreemd.",
      "Want tegelijkertijd zagen we iets anders gebeuren: steeds meer mensen wilden online dingen personaliseren.",
      "Dus ontstond het idee: wat als mensen zelf hun kleding kunnen samenstellen?",
      "Niet alleen kiezen uit één standaard shirt, maar zelf bepalen welk kledingstuk, welke kleur, welke maat en welke opdruk.",
      "Eigenlijk heel logisch.",
      "Samen met REF Drukkerij — tegenwoordig REFLEX Bedrijfskleding — begonnen we DesignerShirts.",
      "En eerlijk? In het begin voelde het vooral als één groot creatief experiment.",
      "We konden ineens al onze flauwe woordgrappen, ideeën en hersenspinsels ergens kwijt. Alles wat normaal in notitieboekjes bleef hangen, kon nu ineens op shirts gedrukt worden.",
      "Maar ondertussen gebeurde er nog iets veel interessanters.",
      "DesignerShirts werd onze eigen digitale speeltuin.",
      "Omdat we websites en webshops bouwden voor klanten, konden we hier alles testen: UX, online marketing, conversie, productpagina's, advertenties, checkoutflows, SEO en klantgedrag.",
      "En dat maakte het project misschien nog waardevoller dan de omzet zelf.",
    ],
  },
  {
    slug: "partyblender-meer-dan-uitgaansplatform",
    date: "2018-05-08",
    category: "Past project",
    tag: ProjectTags.partyBlender,
    title: "Waarom PartyBlender eigenlijk veel meer was dan een uitgaansplatform",
    excerpt:
      "PartyBlender begon niet met een platform. Het begon met een verandering die we om ons heen zagen gebeuren in hoe mensen kozen waar ze heen gingen.",
    body: [
      "PartyBlender begon niet met een platform.",
      "Het begon met een verandering die we om ons heen zagen gebeuren.",
      "Vroeger wist je op maandag al waar je vrijdagavond stond. Vrijdag naar De Budde. Zaterdag naar Lucky of Zaal Dijk. Klaar.",
      "Maar ergens rond 2013 veranderde dat compleet. Mensen besloten steeds later waar ze heen gingen. Soms letterlijk pas op vrijdagavond zelf.",
      "En die keuze werd eigenlijk altijd bepaald door dezelfde vier dingen: locatie, prijs, publiek en muziekstijl.",
      "Iedereen had andere combinaties. De ene week wilde je dichtbij blijven maar wel house. De andere week wilde je best een uur rijden voor hardstyle of een ouder publiek.",
      "En toen ontstond het idee: wat als je die ingrediënten gewoon zelf kon kiezen?",
      "Niet zoeken tussen flyers of losse websites. Maar gewoon invoeren wat jij belangrijk vindt en vervolgens het beste feestje krijgen voor dat moment.",
      "Dat was PartyBlender.",
      "Eigenlijk best een slim idee voor die tijd. Alleen technisch compleet gestoord.",
      "Want er bestond helemaal geen centrale database met evenementen. Partyflock was niet compleet en verder was er eigenlijk niets.",
      "Dus moesten we alles handmatig verzamelen. Clubs bellen. Evenementen opzoeken. Line-ups checken. Prijzen verzamelen. Doelgroepen inschatten.",
      "Achteraf denk ik dat we toen al bezig waren met personalisatie voordat dat een hypewoord werd.",
      "Alleen noemden we het toen gewoon: de perfecte avond uit vinden.",
    ],
  },
  {
    slug: "wat-aardbei-mij-leerde-over-concepten-bouwen",
    date: "2018-04-11",
    category: "Past project",
    tag: ProjectTags.aardbeiCommunicatie,
    title: "Klanten kochten geen website",
    excerpt:
      "Jarenlang dachten we dat we websites en vormgeving verkochten. Tot we begonnen te zien wat er écht over de toonbank ging.",
    body: [
      "We hebben jaren gedacht dat we websites en vormgeving verkochten.",
      "Logisch ook. Dat was wat op de offerte stond. Dat was waar we op werden afgerekend. Dat was wat we opleverden.",
      "Tot er iets begon te schuiven.",
      "We zagen klanten weglopen met een logo onder hun arm en denken dat ze klaar waren. Andere klanten kwamen terug, niet omdat de site stuk was, maar omdat ze gewoon weer eens met ons wilden zitten.",
      "Op een gegeven moment durfde ik het hardop te zeggen. We verkopen geen websites. We verkopen aandacht. Herkenning. Een verhaal dat blijft hangen wanneer mensen al lang zijn doorgescrolld.",
      "Daar lag onze echte kracht. Niet in de techniek, niet in de vormgeving, maar in het bedenken van iets waar mensen iets mee hadden.",
      "We zaten avonden in dat herenhuis aan de Kerkstraat te schuiven met woorden, met beelden, met namen. Soms tot diep in de nacht. Soms onder begeleiding van pizza die al lang koud was.",
      "Niet altijd omdat het moest. Soms omdat een idee gewoon niet wilde loslaten.",
      "Wat ik daar geleerd heb, is iets simpels. Een goed concept maakt iets eenvoudiger, maakt iets herkenbaar, of laat mensen anders kijken naar iets dat ze al duizend keer hadden gezien.",
      "Dat klinkt klein. Maar dat is het niet.",
      "We werkten voor merken die veel groter waren dan wijzelf. En we werkten voor ondernemers in de buurt die gewoon iemand nodig hadden die ze hielp om hun verhaal scherper te krijgen.",
      "Beide voelden even leuk. Misschien de tweede zelfs nog meer, omdat je daar direct zag wat het opleverde.",
      "Toen begon ik te merken dat ik bij elk project op zoek was naar hetzelfde. Wat is hier nou eigenlijk het echte verhaal? Wat is het probleem onder het probleem? Waar moeten we beginnen?",
      "Die manier van kijken ben ik nooit meer kwijtgeraakt.",
    ],
  },
  {
    slug: "led-ibc-product-anders-bouwen",
    date: "2018-04-09",
    category: "Past project",
    tag: ProjectTags.ledIbc,
    title: "Waarom wij onze LED-IBC's compleet anders bouwden",
    excerpt:
      "De meeste verhuurders hingen een lamp achter een IBC met een tie-wrap. Wij wilden egaal licht. Daar begon het echte verschil.",
    body: [
      "De meeste verhuurbedrijven hingen een lamp achter een IBC met een tie-wrap of een beugel.",
      "Prima voor een feestje. Maar niet voor hoe wij vonden dat het eruit moest zien.",
      "Het probleem was simpel. Als je de lamp achter de IBC hangt, krijg je een fel brandpunt aan de voorkant. Dat ziet er goedkoop uit.",
      "Wij wilden egaal licht.",
      "Dus besloten we de lamp ín de IBC te bouwen en omhoog te laten schijnen. Dat betekende alleen wel dat elke IBC aangepast moest worden, dat er een luikje in moest, dat de lamp compact genoeg moest zijn, krachtig genoeg moest zijn én professioneel aanstuurbaar moest blijven via DMX.",
      "In Nederland vonden we niet wat we zochten.",
      "Tot we uitkwamen bij Flash Butrym in Polen. Een familiebedrijf van Jakub Butrym en zijn vader. Net zulke no-nonsense ondernemers als wij zelf.",
      "Afspraak was afspraak. En misschien werkte dat nog wel beter dan alle techniek.",
      "We begonnen zelf de lampen uit Polen te importeren en bouwden daarmee iets wat beter werkte, mooier oogde en makkelijker inzetbaar was voor festivals en evenementen.",
      "Achteraf denk ik dat daar het echte succes van LED-IBC begon. Niet door groter te denken dan anderen, maar door het product serieuzer te nemen.",
    ],
  },
  {
    slug: "entranz-ticketing-slimmer",
    date: "2018-03-21",
    category: "Past project",
    tag: ProjectTags.entranz,
    title: "Waarom wij dachten dat ticketing slimmer moest kunnen",
    excerpt:
      "De meeste mensen zien ticketing als een ticket verkopen en iemand binnenlaten. Hoe langer ik naar de evenementenbranche keek, hoe vreemder ik het eigenlijk vond.",
    body: [
      "De meeste mensen zien ticketing als: een ticket verkopen en iemand binnenlaten.",
      "Maar hoe langer ik naar de evenementenbranche keek, hoe vreemder ik het eigenlijk vond.",
      "Organisatoren gaven enorme hoeveelheden data weg aan ticketproviders, terwijl ze daar vervolgens zelf nauwelijks iets mee konden.",
      "Dat voelde compleet onlogisch.",
      "Je organiseert een evenement. Je bouwt een community. Je doet de marketing. Je loopt het risico. Maar ondertussen zit de waardevolle bezoekersdata vaak opgesloten in systemen van derden.",
      "En precies daar ontstond het idee achter Entranz.",
      "Tim Kant was daar al langer mee bezig en had een duidelijke visie: een ticketplatform bouwen dat niet alleen tickets verkoopt, maar organisatoren juist helpt groeien.",
      "Meer inzicht. Meer data. Meer marketingmogelijkheden.",
      "Niet achteraf een Excel-export. Maar echte inzichten: benchmarkdata, doelgroepinformatie, marketinganalyse, realtime prestaties en optimalisatie van campagnes.",
      "Eigenlijk wilden we ticketing behandelen als marketingplatform in plaats van alleen kassasysteem.",
      "En dat voelde in die tijd behoorlijk vernieuwend.",
    ],
  },
  {
    slug: "led-ibc-mislukt-evenement",
    date: "2017-11-18",
    category: "Past project",
    tag: ProjectTags.ledIbc,
    title: "Hoe een mislukt evenement leidde tot LED-IBC",
    excerpt:
      "Sommige bedrijven beginnen met een goed businessplan. LED-IBC begon met een evenement dat nooit doorging.",
    body: [
      "Sommige bedrijven beginnen met een goed businessplan.",
      "LED-IBC begon met een evenement dat nooit doorging.",
      "In 2016 wilden we met Tafelronde 114 Zoetermeer een evenement organiseren op het strand van Noord Aa. Daarvoor zochten we een goedkope manier om een terrein af te zetten en tegelijk sfeer te creëren.",
      "Ik had ooit van die verlichte kubussen gezien. Grote lichtgevende blokken die je vaak op festivals ziet. Na wat zoeken bleek dat het eigenlijk gewoon IBC's waren. Van die 1000 liter watertanks met een lamp erin.",
      "Klinkt simpel. Was het niet.",
      "In Nederland waren op dat moment eigenlijk maar twee partijen die zulke IBC's verhuurden. Eén in Tynaarlo en één in de regio Den Haag. Maar die hadden samen misschien 12 tot 14 units.",
      "Daar bouw je geen serieus festivalterrein mee.",
      "Het evenement van Tafelronde ging uiteindelijk niet door, maar het idee bleef hangen. Vooral omdat ik dacht: waarom is hier eigenlijk nog geen serieuze speler in? Zeker in Oost- en Zuid-Nederland niet.",
      "Dus besloten we het zelf te bouwen.",
      "Samen met Niek Westendorp begon ik vanuit zijn tuin aan de Beethovenlaan in Nijverdal te experimenteren met IBC's, lampen en constructies.",
      "En toen kwamen we erachter dat zelfs een simpele verlichte watertank ineens behoorlijk ingewikkeld wordt als je het écht goed wilt doen.",
    ],
  },
  {
    slug: "voordat-toms-ambitie-bestond-was-er-aardbei",
    date: "2017-08-17",
    category: "Past project",
    tag: ProjectTags.aardbeiCommunicatie,
    title: "Het pand aan de Marconistraat",
    excerpt:
      "Voordat er ook maar iets was, zaten we met zijn drieën in een leeg pand in Nijverdal. Geen plan. Wel het gevoel dat dit groter moest kunnen.",
    body: [
      "In 2008 begonnen Marcel Ooink op den Dijk, Bart Pronk en ik samen iets onder de naam Notabilis. Opmerkelijke Communicatie, stond eronder. We vonden het zelf wel mooi.",
      "Bart bouwde websites onder BartOnline. Marcel werkte als grafisch vormgever vanuit Design ID. En ik hield me bezig met marketing, concepten en alles wat er verder voorbij kwam.",
      "Alle drie vanuit huis. Alle drie begin twintig. Alle drie met datzelfde gevoel dat moeilijk uit te leggen is. Dit kan groter. Dit moet groter. Niet omdat iemand het ons vertelde, gewoon omdat het in ons zat.",
      "Dus huurden we een pand aan de Marconistraat in Nijverdal, boven Jaap Grafimedia. Geen strak bureau met investeerders of businessplannen. Een lege ruimte, drie bureaus, en het idee dat we wel zouden zien wat er gebeurde.",
      "We hadden geen idee wat we deden. We deden het gewoon.",
      "Notabilis groeide sneller dan we hadden verwacht. Niet omdat we de beste websites bouwden of omdat alles technisch perfect was. Juist niet. We schreven facturen die later een typefout bleken te bevatten. We beloofden weleens iets in een pitch waarvan we daarna een avond moesten googelen hoe het eigenlijk werkte.",
      "Maar we waren goed in iets anders. We waren goed in concepten bedenken waar mensen energie van kregen.",
      "Dat werd uiteindelijk de reden voor de rebranding naar Aardbei Communicatie in 2012. Een naam die nergens op sloeg voor een communicatiebureau. En precies daarom werkte het.",
      "We verhuisden naar een herenhuis aan de Kerkstraat in Nijverdal. Hoge plafonds, krakende vloeren, een keuken waar veel te veel koffie werd gezet. Dat pand voelde meteen anders. Alsof we eindelijk volwassen waren geworden zonder dat we het hadden gevraagd.",
      "We groeiden naar tien medewerkers. Ik weet nog dat we onze eerste fulltime kracht aannamen. Ik liep die avond een rondje door het pand en realiseerde me dat dit nu echt iets was. Iemand had ons vertrouwd genoeg om zijn baan op te zeggen.",
      "We werkten voor merken als Wolters Kluwer, Kartplaza en Van Keulen Interieurbouw. Grote namen voor een bureau van twintigers uit Nijverdal.",
      "In die jaren leerde ik iets dat ik daarvoor niet wist. Een bedrijf bouwen draait niet alleen om wat je maakt. Het draait vooral om waarom mensen je onthouden.",
      "In 2015 verkochten we Aardbei. Niet omdat het slecht ging, maar omdat ondernemen ook een prijs heeft wanneer je altijd aan staat.",
      "Daarna richtten Marcel en ik samen FreshGuys op. Een paar jaar lang werkten we daar verder aan freelance opdrachten en losse ideeën. Soms heel serieus, soms gewoon om bezig te blijven.",
      "In 2017 gingen onze wegen zakelijk uit elkaar. Marcel ging verder met FreshGuys. Ik werd uitgekocht.",
      "Achteraf zie ik dat dat het moment was waarop er ruimte vrijkwam voor iets nieuws. Wat dat zou worden, wist ik op dat moment nog niet.",
    ],
  },
];

// Een bericht is "gepubliceerd" zodra zijn datum is bereikt (lokale tijd).
// Zo kunnen we toekomstige berichten vast in de bron zetten en automatisch
// laten verschijnen op de geplande publicatiedatum.
const startOfToday = (): number => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

export const isPublished = (item: NewsItem, now: number = startOfToday()): boolean =>
  Date.parse(item.date) <= now;

export const publishedNews = (): NewsItem[] => {
  const now = startOfToday();
  return news.filter((n) => isPublished(n, now));
};

export const getNewsBySlug = (slug: string): NewsItem | undefined => {
  const item = news.find((n) => n.slug === slug);
  if (!item) return undefined;
  return isPublished(item) ? item : undefined;
};

// Cache: per genormaliseerde tag bewaren we de volledige, gesorteerde lijst.
const newsByTagCache = new Map<string, NewsItem[]>();

const buildSortedForTag = (needle: string): NewsItem[] =>
  publishedNews()
    .filter((n) => n.tag?.trim().toLowerCase() === needle)
    .slice()
    .sort((a, b) => {
      const diff = Date.parse(b.date) - Date.parse(a.date);
      return diff !== 0 ? diff : a.slug.localeCompare(b.slug);
    });

export const getNewsByTag = (tag: string, limit?: number): NewsItem[] => {
  const needle = tag.trim().toLowerCase();
  let matches = newsByTagCache.get(needle);
  if (!matches) {
    matches = buildSortedForTag(needle);
    newsByTagCache.set(needle, matches);
  }
  return typeof limit === "number" ? matches.slice(0, limit) : matches.slice();
};

export const __resetNewsCache = (): void => {
  newsByTagCache.clear();
};

export const formatNewsDate = (iso: string): string => {
  const d = new Date(iso);
  return d.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
