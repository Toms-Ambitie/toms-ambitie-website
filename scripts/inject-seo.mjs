import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const BASE = 'https://www.toms-ambitie.nl';

// Static routes: path → { title, description }
const ROUTES = {
  '/': {
    title: 'Toms Ambitie · venture club uit Zwolle die zelf bouwt',
    description: 'Toms Ambitie is de venture club van Tom Mulder in Zwolle. Wij bedenken geen bedrijven, we bouwen ze. EmmaStudio en PostPilot draaien al. Lees hoe we werken.',
  },
  '/over-ons': {
    title: 'Over Toms Ambitie en Tom Mulder · Zwolle',
    description: 'Wie is Tom Mulder en waarom bestaat Toms Ambitie? Van reclamebureau naar venture club: het verhaal, de mensen en de manier van werken achter de ventures.',
  },
  '/hoe-we-bouwen': {
    title: 'Hoe wij bedrijven bouwen · de werkwijze van Toms Ambitie',
    description: 'Van echt probleem naar werkend product. Zo gaat Toms Ambitie van idee naar live venture: welke stappen, welke keuzes en wanneer we stoppen met iets.',
  },
  '/meebouwen': {
    title: 'Meebouwen aan een venture · co-founders en specialisten',
    description: 'Meebouwen aan een venture van Toms Ambitie? We zoeken co-founders, investeerders en specialisten die niet alleen adviseren maar meedoen. Zo werkt het.',
  },
  '/ventures': {
    title: 'Onze ventures · de bedrijven van Toms Ambitie',
    description: 'Een overzicht van alle ventures van Toms Ambitie: wat er live staat, wat er is verkocht en wat er is gestopt. Inclusief wat elk traject ons heeft geleerd.',
  },
  '/ventures/post-pilot': {
    title: 'PostPilot · LinkedIn-tool · een venture van Toms Ambitie',
    description: 'PostPilot maakt van een ingesproken gedachte een LinkedIn-post in jouw toon. Nederlandstalig, gebouwd door Toms Ambitie in Zwolle. Lees het verhaal.',
  },
  '/ventures/emmastudio': {
    title: 'EmmaStudio · software voor ondernemers · Toms Ambitie',
    description: 'EmmaStudio is de softwareventure van Toms Ambitie: boekhouden, loon, personeel en marketing in één platform. Ontstaan in een kapsalon in Heeten.',
  },
  '/ventures/plug-and-power': {
    title: 'Plug and Power · venture van Toms Ambitie',
    description: 'Plug and Power is een venture van Toms Ambitie uit Zwolle. Lees waar het idee vandaan komt, wat de stand van zaken is en wat we ervan hebben geleerd.',
  },
  '/nieuws': {
    title: 'Nieuws en lessen · Toms Ambitie',
    description: 'Eerlijke verhalen over bouwen, verkopen en stoppen. Wat werkte bij LED IBC, Entranz, PartyBlender en Designershirts, en wat juist niet. Zonder mooipraat.',
  },
  '/privacy': {
    title: 'Privacyverklaring · Toms Ambitie',
    description: 'Hoe Toms Ambitie omgaat met je persoonsgegevens: wat we verwerken, waarom, hoe lang we het bewaren en welke rechten je hebt onder de AVG.',
  },
  '/voorwaarden': {
    title: 'Algemene voorwaarden · Toms Ambitie',
    description: 'De algemene voorwaarden van Toms Ambitie voor samenwerking, deelname aan een venture en gebruik van deze website.',
  },
};

// News articles: slug → { title, lead }
const ARTICLES = [
  { slug: 'postpilot-v2-spraak', title: 'Waarom we PostPilot opnieuw hebben opgebouwd rond spraak', lead: 'De eerste versie van PostPilot was een betere schrijftool. De tweede versie haalt het lege scherm weg. Dat verschil bleek groter dan we dachten.' },
  { slug: 'nieuw-project-in-onderzoek', title: 'Nieuw project in stille onderzoeksfase', lead: 'Een vierde venture wordt momenteel verkend. Nog geen naam, geen pagina, wel een sterk vermoeden dat het ergens heen gaat.' },
  { slug: 'led-ibc-verkocht-aan-woodpeckers', title: 'Waarom ik LED-IBC verkocht terwijl het juist zo goed ging', lead: 'Het bedrijf draaide beter dan ooit. En toch was verkopen op dat moment de juiste keuze. Een terugblik op een van de vreemdste ondernemersbeslissingen die ik ooit heb genomen.' },
  { slug: 'entranz-verlies-niet-concurrentie-maar-timing', title: 'Soms verlies je niet van concurrentie, maar van timing', lead: 'Entranz leerde me één van de hardste ondernemerslessen: je kunt alles goed doen en toch verliezen. Niet van concurrentie, maar van timing.' },
  { slug: 'entranz-covid-verkeerde-moment', title: 'Hoe COVID precies op het verkeerde moment kwam voor Entranz', lead: 'Entranz stond klaar voor de doorbraak. Sterk verhaal, innovatieve visie, groeiend netwerk. En toen sloot de evenementenbranche haar deuren.' },
  { slug: 'waarom-partyblender-uiteindelijk-stopte', title: 'Waarom PartyBlender uiteindelijk stopte', lead: 'Soms heb je een goed idee op het verkeerde moment. Of beter gezegd: een goed idee zonder de middelen om het echt groot te maken. Dat was PartyBlender.' },
  { slug: 'van-reclamebureau-naar-venture-denken', title: 'Het bouwen zat er altijd al in', lead: 'Bij Aardbei waren we eigenlijk de hele tijd aan het rommelen met nieuwe ideeën. Niet omdat het hoorde, maar omdat we het niet konden laten.' },
  { slug: 'designershirts-waarom-we-stopten', title: 'Waarom we stopten met DesignerShirts', lead: 'DesignerShirts was jarenlang een project op de achtergrond. Niet extreem winstgevend, maar het gaf energie. Tot de markt en het bureau veranderden.' },
  { slug: 'led-ibc-grootste-speler-benelux', title: 'LED-IBC: van achtertuin naar grootste speler van de Benelux', lead: 'Een paar units in 2017. Eind 2018 al meer dan twintig. En een paar jaar later groter dan alle concurrenten bij elkaar. Niet door geld, maar door slimmer groeien.' },
  { slug: 'entranz-waarom-ik-instapte', title: 'Waarom ik direct wilde instappen in Entranz', lead: 'Soms krijg je een pitchdeck onder ogen waarvan je direct voelt: hier zit iets in. Dat gebeurde bij Entranz.' },
  { slug: 'designershirts-eerste-online-testlab', title: 'DesignerShirts was eigenlijk ons eerste online testlab', lead: 'Achteraf gezien draaide DesignerShirts misschien minder om shirts dan om nieuwsgierigheid. We wilden begrijpen hoe online gedrag werkt.' },
  { slug: 'tinderlove-festival-zes-weken', title: 'Hoe Tinderlove Festival in zes weken werd gebouwd', lead: 'PartyBlender begon klein. Een Facebookpagina met reviews. Tot we besloten dat een lancering geen persbericht nodig had, maar een eigen festival.' },
  { slug: 'waarom-verkopen-soms-beter-is-dan-doorgaan', title: 'Het besluit om Aardbei te verkopen', lead: 'Het bureau liep goed. Daarom was het besluit om te verkopen ook zo verwarrend. Het ging niet over cijfers. Het ging over iets anders.' },
  { slug: 'designershirts-waarom-funny-shirts-2010', title: 'Waarom we in 2010 begonnen met een webshop voor funny shirts', lead: 'Funny shirts waren ineens een ding. Maar je kon ze nergens zelf samenstellen. Dat vonden wij vreemd. Zo ontstond DesignerShirts.' },
  { slug: 'partyblender-meer-dan-uitgaansplatform', title: 'Waarom PartyBlender eigenlijk veel meer was dan een uitgaansplatform', lead: 'PartyBlender begon niet met een platform. Het begon met een verandering die we om ons heen zagen gebeuren in hoe mensen kozen waar ze heen gingen.' },
  { slug: 'wat-aardbei-mij-leerde-over-concepten-bouwen', title: 'Klanten kochten geen website', lead: 'Jarenlang dachten we dat we websites en vormgeving verkochten. Tot we begonnen te zien wat er écht over de toonbank ging.' },
  { slug: 'led-ibc-product-anders-bouwen', title: "Waarom wij onze LED-IBC's compleet anders bouwden", lead: 'De meeste verhuurders hingen een lamp achter een IBC met een tie-wrap. Wij wilden egaal licht. Daar begon het echte verschil.' },
  { slug: 'entranz-ticketing-slimmer', title: 'Waarom wij dachten dat ticketing slimmer moest kunnen', lead: 'De meeste mensen zien ticketing als een ticket verkopen en iemand binnenlaten. Hoe langer ik naar de evenementenbranche keek, hoe vreemder ik het eigenlijk vond.' },
  { slug: 'led-ibc-mislukt-evenement', title: 'Hoe een mislukt evenement leidde tot LED-IBC', lead: 'Sommige bedrijven beginnen met een goed businessplan. LED-IBC begon met een evenement dat nooit doorging.' },
];

for (const article of ARTICLES) {
  ROUTES[`/nieuws/${article.slug}`] = {
    title: `${article.title} · Toms Ambitie`,
    description: article.lead,
  };
}

// Read the built index.html
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

let count = 0;

for (const [path, { title, description }] of Object.entries(ROUTES)) {
  if (path === '/') continue; // homepage already correct in index.html

  const canonical = `${BASE}${path}`;

  // Inject per-route head tags into a copy of the template
  const updated = template
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(title)}</title>`
    )
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escapeAttr(description)}"`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${canonical}"`
    );

  // Write to dist/[path]/index.html
  const dir = join(DIST, path.slice(1)); // strip leading /
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), updated, 'utf-8');
  count++;
}

console.log(`inject-seo: wrote ${count} per-route index.html files`);

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
