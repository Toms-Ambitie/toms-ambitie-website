# Ontwerpregels toms-ambitie.nl

Lees dit voordat je iets aan de site verandert. Het ontwerp is af en goedgekeurd (live sinds 20 november 2026). Nieuw werk volgt het; het wijkt er niet van af.

## De bron

- **Ontwerp en afspraken:** `website-handoff`, op Google Drive onder `Merken/Toms Ambitie/06 Opleveringen/website-handoff`. Een kopie van de tekstbestanden staat in `docs/website-handoff/`:
  - `HANDOFF.md`: wat er gebouwd is, de onderdelen, de beweging en de feiten;
  - `tokens.json`: kleuren, letters, afstanden, radius en schaduw (in `src/styles/site.css` als CSS-variabelen met dezelfde namen);
  - `artikelen.json`: de 19 artikelen uit het ontwerp. Op de site staan er 20: "Het pand aan de Marconistraat" stond op de oude site en is op verzoek van Tom teruggezet (`src/data/posts.ts`).
- **Brand Book:** `public/persmap/Toms-Ambitie-Brand-Book-2.1.pdf`.
- **Klikbaar ontwerp:** `ontwerp/index.html` in de Drive-map. Dat is de waarheid voor hoe het eruitziet en beweegt.

Twijfel je, dan geldt het ontwerp. Wijkt iets bewust af, dan staat dat hieronder bij de vastgelegde keuzes.

## Regels die de code bewaakt

- **Eén gemarkeerd woord per kop, en alleen bij opgave.** Nooit automatisch. In artikelen gebeurt het via het veld `hl` in `src/data/posts.ts`; zonder `hl` geen markering.
- **Oranje alleen als doorhaling.** Nooit als tekstkleur, knop of vlak.
- **Doorstrepen alleen wat echt gestopt is:** DesignerShirts, PartyBlender, Plug and Power. Entranz is *uitgestapt* (niet doorgestreept). LED-IBC is *verkocht* (geel gemarkeerd).
- **Handschrift (Reenie Beanie) nooit vet en minimaal 24 px.**
- **Radius:** panelen 22 px (`--radius-paneel`), film en grote vlakken 31 px (`--radius-paneel-l`), knoppen en menubalk zijn pillen (`--radius-pil`).
- **Tekst is altijd direct leesbaar; alleen de pen komt later.** Markering, doorhaling en cirkel tekenen zich bij het in beeld komen. De tekst zelf staat er meteen. Een gemarkeerd woord op donker is eerst papierkleurig en wordt inkt zodra het geel erachter staat. Tellers tonen het echte getal tot ze in beeld komen.
- **Koppen vallen nooit over andere tekst.** Een te brede kop wordt kleiner (`fitHeadings` in `src/components/site/motion.ts`). Cirkels blijven binnen de paginamarge en raken het label erboven en de tekst eronder niet.
- **Stickers vallen nooit over inhoud erboven.** Tom mag hooguit 12% van de vlakhoogte boven het blauwe vlak uitkomen; het vlak houdt die ruimte vrij.
- **Minder beweging** (`prefers-reduced-motion`): alles staat direct in de eindstand, geen entree, geen pen-spoor, geen film.
- **Werkt van 360 px tot groot scherm.** Niets valt buiten beeld; alles bereikbaar met het toetsenbord, met zichtbare focus.

## Feiten die niet mogen verschuiven

De volledige lijst staat in `docs/website-handoff/HANDOFF.md` onder "Inhoud en feiten". De belangrijkste:

- Notabilis 2008 (met Bart Pronk; Marcel Ooink op den Dijk partner sinds 2009). 2012 verder als Aardbei Communicatie. 2015 verkocht aan Brandon Ziel, nu Cherry Marketing.
- DesignerShirts 2010–2014 en PartyBlender 2012–2015: **gestopt**. Entranz 2019–2022: **uitgestapt**. LED-IBC 2017–2023: **verkocht** aan Woodpeckers (België); de jaartallen zijn door Tom bevestigd. Plug and Power 2025–2026 (met Ernst Meerholz en Nick Neppelenbroek): **gestopt**.
- AI-first: 2025. PostPilot en EmmaStudio: 2026, allebei live.
- PostPilot heeft Tom alleen ontwikkeld; noem geen co-founder. EmmaStudio is ontwikkeld bij Blondes Incognito, de kapsalon van Ilze Spannenberg in Heeten.
- toiletborstelhuren.nl is nooit gebouwd. Schrijf nergens dat er toiletborstels zijn verhuurd.
- Geen prijzen op de venturepagina's.
- Contact: hallo@toms-ambitie.nl, LinkedIn https://www.linkedin.com/company/tomsambitie/, Zwolle.

## Vastgelegde keuzes

- **Adressen:** `/werkwijze` en `/ventures/postpilot` zijn de hoofdadressen. Oude adressen sturen door (`vercel.json`). Geen bestaand adres mag breken.
- **Ventures en Bouw mee:** het label boven de kop valt binnen de H1 (de tekst voor Google); de grote regel is de ontwerptekst.
- **LED-IBC** breekt in koppen nooit over twee regels. Dat gebeurt met een nowrap-span, niet met een speciaal streepje, zodat Google het woord blijft vinden.
- **Persmap:** geen studiofoto's (daar staan oud-collega's op) en geen "casual"-foto.
- **Cookiemelding:** opgemaakt in `site.css`; werking en teksten blijven van CookieYes. "Alles afwijzen" en "Accepteer alles" zijn even groot (AVG).
- **Formulier:** `api/contact.ts` met de sjablonen uit `api/_mailTemplates.ts`. Alles wat een bezoeker invult, wordt onschadelijk gemaakt.
- **Vooraf gebouwde HTML:** bij `npm run build` rendert `scripts/prerender.mjs` elke pagina tot complete HTML; de browser neemt die over (`hydrateRoot` in `src/main.tsx`). Een onderdeel moet daarom bij het bouwen en in de browser hetzelfde beginnen: geen `window`, `sessionStorage` of `matchMedia` in de eerste weergave, alleen in een `useEffect`. Wat vóór de eerste weergave beslist moet worden (de entree), gebeurt in het kleine script bovenin `index.html`.

## Werkafspraken

- **Verzin geen inhoud.** Geen cijfers, citaten, klanten of namen die niet in het ontwerp, HANDOFF.md of de bestaande site staan. Twijfel je, vraag het Tom.
- **Alles in het Nederlands**, zonder gedachtestreepjes als leesteken. Code en commitberichten blijven Engels.
- **Niets naar productie zonder een ja van Tom.** Werk op de tak `redesign-2026`; die geeft een voorbeeldadres. Main is productie.
- **Tom is niet technisch.** Vraag en leg uit in gewone taal.
