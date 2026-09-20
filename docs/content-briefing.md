# Content-briefing: afronden en klaar voor merge

Branch: `content/update-sept-2026`
Preview nagelopen: `toms-ambitie-website-fx51ioxx8-toms-ambitie.vercel.app`
Datum: 20 september 2026

## Eén regel

Elke NA-tekst hieronder gaat woord voor woord de code in. Niet herschrijven, niet inkorten, niet aanvullen. Vind je iets slecht, voer het uit en meld je bezwaar in de oplevering.

---

## 1. Verwijder het onafgemaakte artikel

Artikel `waarom-we-met-plug-and-power-zijn-gestopt` verwijderen:
1. Verwijder de post volledig uit `posts.ts`
2. Verwijder de slug uit `sitemap-news.xml` (gegenereerd uit posts.ts bij build)
3. Redirect `/nieuws/plug-and-power-pilot-zwolle` → `/ventures/plug-and-power` (nu naar `/nieuws`)
4. Controleer dat er nergens meer een link naar de verwijderde slug staat

---

## 2. Plug and Power archiefpagina

### 2.1 Sectie 01, origineel probleem
Ongewijzigd laten.

### 2.2 Sectie 02, model
Voeg als eerste regel van de sectie toe, vóór de bestaande tekst:
> Dit was het model dat we voor ogen hadden.

### 2.3 Sectie 03, status
KOPTITEL NA: `WAAROM HET GESTOPT IS`

BODY NA (letterlijk):
> Plug and Power is in 2026 gestopt. Het idee stond en de positionering stond, maar het is nooit een lopend bedrijf geworden.
> Deze pagina blijft staan omdat we ook laten zien wat niet doorging.

OPSOMMING NA (letterlijk, niets anders):
> In 2026 stopgezet
> Geen klanten, geen omzet, geen lopende verplichtingen
> Pagina blijft staan als archief

### 2.4 Sectie 04, visie
Verwijder of vervang door precies dit:

KOPTITEL: `WAT ERVAN BLIJFT`

BODY: `Twee actieve ventures, allebei software, allebei gebouwd vanuit een probleem dat we zelf hadden.`

### 2.5 Call to actions
Geen knop of link die uitnodigt tot meebouwen, investeren of contact over Plug and Power. Alleen "Bekijk actieve ventures" blijft.

---

## 3. Tijdlijn op `/over-ons`

Vervang de laatste drie tijdlijnregels door deze, letterlijk:

**2024 · PostPilot**
Nieuwe venture: Nederlandstalige AI voor LinkedIn.

**2025 · EmmaStudio**
Begonnen als interne tool voor één kapsalon. Losgemaakt tot een platform voor ondernemers met personeel.

**2026 · Twee ventures live, één gestopt**
PostPilot v2.0 met spraakinvoer. EmmaStudio live met vijf modules en een klant in dagelijkse productie. Plug and Power stopgezet.

De regels voor 2008, 2015, 2015-2023 en 2023 blijven ongewijzigd.

---

## 4. Body PostPilot-artikel, verbatim

Alleen de body vervangen. Titel, lead, auteur, datum en categorie blijven.

Body blokken (letterlijk):

1. PostPilot begon als een schrijftool. Meer opties, betere structuren, scherpere aanwijzingen. Het werkte, en toch bleef er iets knagen.

2. De mensen die we spraken hadden geen schrijfprobleem. Ze hadden een startprobleem. Vraag iemand wat hij die ochtend heeft meegemaakt en je krijgt binnen dertig seconden een verhaal. Zet diezelfde persoon voor een leeg tekstvak en er gebeurt niets.

3. Dus hebben we het lege scherm weggehaald.

4. In versie 2.0 spreek je in wat je denkt. Ongeveer dertig seconden. Halve zinnen mogen, dialect mag, hardop nadenken mag. PostPilot maakt er een LinkedIn-post van in jouw toon, in een van vier schrijftonen: reflectief, direct, verhalend of analytisch. Wil je liever typen, dan zijn vier steekwoorden genoeg.

5. Dat klinkt als een functie. Het is een andere manier van werken.

6. Technisch vroeg het om Nederlandse spraakherkenning die tegen onafgemaakte zinnen kan. Een vertaalde Engelse oplossing redt dat niet. Je merkt het verschil pas als je het echt in het Nederlands probeert, met een halve gedachte en een uh ertussen.

7. [QUOTE] DE DREMPEL ZIT NIET IN HET SCHRIJVEN. DE DREMPEL ZIT IN HET BEGINNEN.

8. Publiceren gaat via de officiële LinkedIn-koppeling. Geen wachtwoord delen, geen browserextensie, geen scraping. LinkedIn heeft in 2025 hard opgetreden tegen tools die dat wel doen. Wie zo'n tool gebruikt, riskeert zijn eigen account. Dat is geen theoretisch risico en het is precies de reden dat we vanaf dag één de officiële route hebben genomen, ook al kostte die meer tijd.

9. Waar we nu staan: het platform is live, de koppeling is goedgekeurd, de Founder Deal staat open voor de eerste honderd. Wat er nog niet staat, is de eerste betalende klant. Dat is de volgende mijlpaal en we vinden het eerlijker om dat zo op te schrijven dan om er een getal bij te verzinnen.

10. Volgende stap op de roadmap: een carrousel-generator. Carrousels halen op LinkedIn structureel meer bereik dan tekstposts, en het is precies het formaat dat de meeste mensen niet maken omdat het te veel werk is.
