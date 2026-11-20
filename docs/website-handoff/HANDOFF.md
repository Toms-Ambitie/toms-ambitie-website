# Toms Ambitie website: bouwopdracht

Versie 1, 20 november 2026. Opdrachtgever: Tom Mulder. Ontwerp: Claude (art director). Bouw: Claude Code, sessie "Toms Ambitie | website".

## Wat je moet doen

Bouw de bestaande site toms-ambitie.nl om naar het nieuwe ontwerp in `ontwerp/index.html`. Het is een herontwerp van de bestaande site, geen nieuwe site: routes, artikelen, formulier, meting en SEO blijven werken.

Open eerst `ontwerp/index.html` in een browser en klik alle pagina's door. Dat bestand is de waarheid voor hoe het eruitziet en beweegt. Dit document is de waarheid voor wat er verder bij hoort.

## Werkafspraken

1. **Kijk eerst in de bestaande repo** welke techniek er staat (framework, routing, styling, waar de artikelen vandaan komen, hoe het formulier verstuurt). Bouw in die techniek. Voer geen nieuw framework in.
2. **Werk op een aparte branch.** Niets naar productie zonder een ja van Tom.
3. **Tom is niet technisch.** Stel hem alleen vragen die hij kan beantwoorden, in gewone taal, en geef prompts en uitleg in de chat, niet als bestand.
4. **Verzin geen inhoud.** Geen cijfers, citaten, klanten of namen die niet in het ontwerp, dit document of de bestaande site staan. Twijfel je, vraag het.
5. **Alles in het Nederlands**, zonder gedachtestreepjes als leesteken.

## Het ontwerp is één bestand

`ontwerp/index.html` bevat alle pagina's als `<div class="view" id="v-...">` en wisselt met de hash. Dat is alleen zo omdat het een klikbaar ontwerp is. **Bouw echte routes**, geen hash-routing.

| In het ontwerp | Route op de site | Bestaat nu al |
|---|---|---|
| `#home` | `/` | ja |
| `#ventures` | `/ventures` | ja |
| `#postpilot` | `/ventures/postpilot` | nee, nieuw |
| `#emmastudio` | `/ventures/emmastudio` | nee, nieuw |
| `#werkwijze` | `/werkwijze` | ja |
| `#over` | `/over-ons` | ja |
| `#nieuws` | `/nieuws` | ja |
| `#artikel` | `/nieuws/<slug>` | ja, 19 artikelen |
| `#meebouwen` | `/meebouwen` | ja |
| (niet ontworpen) | `/privacy`, `/voorwaarden` | ja |

- De oude ankers `/ventures#post-pilot` en `/ventures#emmastudio` moeten doorverwijzen naar de nieuwe venturepagina's.
- `/privacy` en `/voorwaarden`: inhoud behouden, opmaken als de artikelpagina (smalle leeskolom, zelfde kop en voet).
- Alle 19 artikelen staan met slug, datum, categorie, venture, titel en samenvatting in `artikelen.json`. De volledige tekst staat al in de bestaande site: die blijft ongewijzigd. Alleen de vormgeving verandert, volgens `#artikel`.

## Merk

- Kleuren, typografie, afstanden, radius en schaduw: `merk/tokens.json`. Gebruik deze namen als CSS-variabelen.
- Lettertypen: `merk/fonts/`. Archivo (variabel, breedte 62 tot 125) voor tekst, Archivo op breedte 125 en gewicht 900 voor koppen (in het ontwerp `font-stretch:125%`), Reenie Beanie voor handschrift. Host ze zelf, laad ze niet van Google.
- Logo's: `merk/logo/`. In de menubalk en voet het negatieve logo, favicon en app-icoon het blok.
- Iconen: `merk/iconen/`.
- Achtergrond en regels: `merk/Toms-Ambitie-Brand-Book-2.1.pdf`.

Regels die je in de code moet bewaken:

- Eén gemarkeerd woord per kop (`.hl`). Eén of twee cirkels per scherm.
- Oranje is alleen een doorhaling, nooit een vlak of tekstkleur.
- Doorgestreept wordt alleen wat echt gestopt is: DesignerShirts, PartyBlender, Plug and Power. Entranz is "uitgestapt" (niet doorgestreept). LED-IBC is "verkocht" (geel gemarkeerd).
- Handschrift nooit vet, minimaal 24 px.
- Panelen 22 px radius, film en grote vlakken 31 px, knoppen en menubalk zijn pillen.

## Onderdelen (terugkerend)

Maak hiervan herbruikbare componenten. De klassenamen verwijzen naar het ontwerp.

| Onderdeel | Klasse in ontwerp | Waar |
|---|---|---|
| Zwevende menubalk met mobiel menu | `.nav`, `.mmenu` | overal |
| Voet met vier kolommen | `footer .foot2` | overal |
| Paginakop (label, kop, krabbel, intro) | `.phead` | alle pagina's behalve home |
| Filmkop | `.film` | home |
| Kleine film in paginakop | `.pfilm` | werkwijze, nieuws |
| Kladblok | `.pad` | home |
| Schuif krabbel naar product | `.cmp` | home, ventures, venturepagina's |
| Stappenband (horizontaal, vastgezet) | `.how-pin`, `.track`, `.ruler` | home |
| Stappenlijst (verticaal, lijn loopt mee) | `.vsteps` | werkwijze |
| Eerlijke lijst op inkt | `.rows .row` | home, ventures |
| Cijfertegels | `.nums .num` | home, werkwijze, venturepagina's |
| Kaarten | `.cards .card` | ventures, over ons, artikel |
| Sticker op balpen-vlak | `.tompanel` | home, over ons |
| Motto op balpen | `.motto` | home, over ons |
| Tijdlijn | `.tl` | over ons |
| Verhaalrijen | `.story .st-r` | venturepagina's |
| Modules | `.mods .mod` | emmastudio |
| Uitgelicht artikel, filter, lijst | `.feat`, `.chips`, `.news` | nieuws |
| Artikel | `.art`, `.art-q` | artikel |
| Formulier | `.form`, `.opts` | meebouwen |
| Afsluiter op inkt | `.cta` | overal |

## Beweging

Alles staat in het `<script>` onderaan het ontwerp. Neem het gedrag over, niet per se de code.

- **Entree:** balpen-vlak, "praten" doorgestreept, "doen" omcirkeld, schuift na 1,7 s weg. Eén keer per bezoek (sessionStorage).
- **Cirkel:** tekent zichzelf in 0,9 s als hij in beeld komt (masker over het pad). De cirkel ligt achter de letters.
- **Doorhaling en markering:** trekken van links naar rechts als ze in beeld komen. In het kladblok eerst de doorhalingen één voor één, daarna de cirkels.
- **Schuif:** volgt het scrollen tot de bezoeker hem zelf vastpakt.
- **Stappenband op home:** vanaf 900 px breed zet de sectie zich vast en schuift de band horizontaal mee met het scrollen; daaronder gewoon horizontaal swipen.
- **Stappenlijst op werkwijze:** de balpenlijn links groeit mee, het actieve nummer wordt blauw.
- **Motto:** woorden lichten één voor één op tijdens het scrollen.
- **Tellers:** cijfers tellen op als ze in beeld komen.
- **Koppen passen altijd:** een kop die breder is dan zijn kolom wordt kleiner (functie `fit`). Koppen mogen nooit over andere tekst heen vallen.
- **Pen-spoor achter de muis:** alleen met muis, vervaagt in 0,65 s.
- **Minder beweging:** bij `prefers-reduced-motion` staat alles direct in de eindstand, geen entree, geen spoor.
- Films: `autoplay muted loop playsinline` met stilstaand beeld als poster.

## Inhoud en feiten

De teksten in het ontwerp zijn definitief, tenzij hieronder anders staat.

- Kladblok: "ideeën, sinds 2008".
- Jaartallen: DesignerShirts 2010 tot 2014, PartyBlender 2012 tot 2015, Entranz 2019 tot 2022, Plug and Power 2025 tot 2026, AI-first 2025, PostPilot en EmmaStudio 2026.
- **LED-IBC 2017 tot 2023 is afgeleid uit de artikelen en nog niet door Tom bevestigd.** Vraag het hem voor livegang.
- Notabilis: 2008 opgericht met Bart Pronk, Marcel Ooink op den Dijk partner sinds 2009. 2012: Tom en Marcel kopen Bart uit, verder als Aardbei Communicatie. 2015: verkocht aan Brandon Ziel, nu Cherry Marketing.
- LED-IBC is verkocht aan Woodpeckers (België). Plug and Power was met Ernst Meerholz en Nick Neppelenbroek. EmmaStudio is ontwikkeld bij Blondes Incognito, de kapsalon van Ilze Spannenberg in Heeten.
- PostPilot heeft Tom alleen ontwikkeld. Noem geen co-founder.
- toiletborstelhuren.nl was een idee dat nooit is gebouwd. Schrijf nergens dat er toiletborstels zijn verhuurd.
- De teksten op de venturepagina's volgen postpilotapp.nl en emmastudio.nl (stand 20 november 2026). Bewust geen prijzen.
- E-mail: hallo@toms-ambitie.nl. LinkedIn: https://www.linkedin.com/company/tomsambitie/. Plaats: Zwolle.

## Wat moet blijven werken

Controleer in de bestaande site hoe dit nu is ingericht en houd het intact:

- **Formulier op /meebouwen:** verstuurt nu al. Het ontwerp verstuurt niets en toont een melding; vervang die door de echte verzending met een nette bevestiging en foutmelding in de pagina. Velden: naam, e-mail, LinkedIn (niet verplicht), onderwerp (vijf keuzes), bericht. De knoptekst is "Stuur bericht".
- **Het invoerveld in de afsluiter op home** ("mijn probleem is…") stuurt niets op. Maak het zo dat de ingetypte regel wordt meegenomen als begin van het bericht op /meebouwen.
- **Meting:** de bestaande tagmanager- en analytics-inrichting en de cookie-aanpak blijven zoals ze zijn.
- **SEO:** paginatitels, omschrijvingen, Open Graph, sitemap, canonieke adressen en gestructureerde gegevens behouden en aanvullen voor de twee nieuwe venturepagina's.
- **Adressen:** geen bestaand adres mag breken.

## Kwaliteit

- Werkt op 360 px breed tot en met groot scherm. Niets valt buiten het scherm.
- Toetsenbord: alles bereikbaar, zichtbare focus, het mobiele menu sluit met Escape.
- Afbeeldingen met een zinvolle alt-tekst, decoratie verborgen voor schermlezers.
- Contrast volgens `tokens.json` (oranje nooit als tekst).
- Films en stickers verkleind en lui geladen; de eerste pagina moet snel in beeld staan.

## Bekende open punten

1. LED-IBC jaartallen bevestigen (zie boven).
2. In het ontwerp is alleen het uitgelichte artikel uitgewerkt; de andere 18 volgen hetzelfde sjabloon.
3. De schetsen in de schuif (PostPilot en EmmaStudio) zijn getekend in code, geen echte scans. Laat ze zo tot Tom echte schetsen aanlevert.
4. De drie films zijn met AI gemaakt en bevatten hier en daar onleesbare lettertjes op het papier. Dat is bekend.
5. In het ontwerp is het mobiele menu en de telefoonweergave minder grondig nagekeken dan de computerweergave. Kijk daar zelf extra goed naar.

## Oplevering

Lever op de branch een voorbeeldadres op waar Tom kan kijken, met een korte lijst: wat is gebouwd, wat wijkt af van het ontwerp en waarom, en welke vragen er nog voor hem zijn.

## Mappen

- `ontwerp/` het klikbare ontwerp met alle beelden, films en stickers.
- `merk/` tokens, lettertypen, logo's, iconen en het Brand Book.
- `schermbeelden/` per pagina een overzicht op computer- en telefoonbreedte, ter controle.
- `artikelen.json` de 19 artikelen met slug, datum, categorie, venture, titel en samenvatting.
