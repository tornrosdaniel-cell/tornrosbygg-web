# Referensprojekt

Projektens enda datakälla är `src/content/projects.ts`. Den gemensamma sidan
`src/app/projekt/[slug]/page.tsx` bygger publicerade projekt statiskt. Projektindex,
startsidan och sitemap använder samma data. Behåll befintliga slugs vid redigering.

## Lägg till ett projekt

1. Ägaren lämnar projektfakta och bilder. Bekräfta ort, arbetsmoment, vad bilderna
   visar och rätten att använda bilderna på webbplatsen. En gammal publicering är
   inte i sig ett rättighetsunderlag. Kontrollera även personer och kunders hem.
2. ChatGPT kan föreslå bildurval, texter och alt-texter. Ägaren verifierar fakta,
   bildrättigheter och eventuell kundmedverkan före publicering.
3. Lägg optimerade bilder i `public/images/projects/<projekt>/`. Använd begränsade
   dimensioner för avsedd visning, ta bort onödig metadata och undvik dubbletter.
   Skriv faktiska pixelmått; regressionstestet kontrollerar dem med Sharp.
4. Lägg en `Project`-post i datakällan med en unik slug och `status: "draft"`:
   namn, ort, kategori, kort/lång beskrivning, verifierade arbetsmoment, huvudbild,
   galleri, tjänstelänk och SEO-titel/beskrivning. Ange `phase` bara när före,
   under eller efter kan styrkas. En bild under slutmontering är inte en efterbild.
5. Bildobjekt har `src`, `alt`, `width`, `height` och valfritt `caption` och `phase`.
   Huvudbilden visas separat och ska inte dupliceras i galleriet. Galleriet är
   responsivt och använder Next Image utan ett extra klientbibliotek.
6. Ange `featuredOrder` om projektet ska visas på startsidan. Övriga publicerade
   projekt syns automatiskt i projektindex och sitemap. Canonical och projektets
   Open Graph-metadata byggs automatiskt från slug och SEO-/bilddata.
7. Efter innehållsgodkännande ändras status till `published`. Okända och opublicerade
   slugs ger 404; utkast syns inte i översikt, startsida eller sitemap.
8. Kör `npm run lint`, `npm run build`, `npm run test:content`,
   `npm run check:links`, `npm run test:contact` och `npm audit --omit=dev`.
   Granska desktop/mobil i en separat Preview efter uttryckligt publiceringsbeslut.

Ändra inte formulärets projekttyper när ett nytt marknadsföringsområde läggs till.
Formuläret kan redan ta emot en allmän projektbeskrivning och dess servervalidering
ska hållas synkroniserad genom ett separat säkerhetsarbete om fälten ändras.

## Äldre bildmaterial i Sprint 5

73 projektbilder inventerades på gamla tornrosbygg.se från de sju projekt som ska
behållas. De gick att hämta via HTTPS. Ett kvalitetsurval och källadresser finns i
`project-image-review.json`. Ägaren har därefter uttryckligen bekräftat i
projektchatten att samtliga 21 bildkandidater tillhör företaget och får återanvändas.
Av de 15 bilder ägaren valde har 14 lagts till som kompletterande galleriobjekt.
`pool/08.webp` visar samma foto som befintlig huvudbild i lägre upplösning och har
därför inte duplicerats. Manifestets `usage` och `publicationAsset` visar exakt
hur varje kandidat används; `publicationSha256` verifierar de kopierade filerna.

De nio befintliga bildfilerna och samtliga huvudbilder är bevarade. Nya bilder
använder optimerade lokala WebP-kopior, faktiska pixelmått och responsiv Next Image.
Blanchevägens 28 och Nämndemansgatans 08 har neutrala bildtexter utan fas eftersom
färdigställandegraden inte säkert kan avgöras. Övriga nya bilder visar tydligt
före renovering eller pågående arbete. Ingen Munkholmen-bild ingår i urvalet.

## URL-format och regression

Webbplatsen använder URL:er utan avslutande snedstreck, utom `/`. Canonical och
sitemap följer samma format. `src/content/legacy-redirects.ts` innehåller explicita
gamla adresser och slutmål, inklusive `/sv` och `/en-gb`. De körs före normalisering
av avslutande snedstreck för att undvika kedjor. De borttagna sidorna Jobba hos oss
och Munkholmen har inga ompekningar och ger 404 även under `/sv`.

`npm run test:content` kräver ett aktuellt bygge och startar/stänger själv en lokal
produktionsserver på en ledig port. Det testar verkliga HTTP-svar, svenska tecken,
procentkodning, snedstreck och query-strängar. Utkast testas dessutom mot den riktiga
sidans metadata-/sidfunktioner med ett opublicerat testobjekt, utan produktionsutkast.

## Kvar till lansering

### Koggevägen – inte publicerat

Ägarens uppgift är att Koggevägen är nybyggnation av ett helt hus från grunden.
Projektet finns inte i den aktuella projektdatan, bildinventeringen eller de lokala
bildfilerna. Ingen hänvisning hittades heller i den granskade gamla navigationen
eller sitemap-filen. Det innebär inte att projektet saknar annat underlag hos ägaren.
Ingen projektsida eller påhittad datapost har skapats.

Före publicering behövs bilder med säker koppling till Koggevägen, huvudbild och
galleriurval samt ort/stadsdel och en verifierad beskrivning av företagets uppdrag
och arbetsmoment. Bildfaser och projektspecifika uppgifter som yta eller årtal
anges bara om ägaren styrker dem; dessa uppgifter är inte kända här.

### Övriga verifieringar

Bildrättigheterna för Sprint 5-urvalet är bekräftade av ägaren. Verifiera inför
lansering vilken person och omfattning som avses för fristående besiktningsuppdrag.
Ingen certifiering, oberoendestatus eller KA-behörighet
påstås. Integritetssidans juridiska uppgifter och ett verkligt mejlutskick i Preview
behöver fortfarande verifieras separat. Sprint 5 ändrar inte API eller miljövariabler.

En separat landningssida för pool och utemiljö kan vara motiverad om ägaren vill
prioritera det erbjudandet och kan bidra med verifierat underlag och resultatbilder.
Ingen ny tjänstelandningssida skapas automatiskt i denna sprint.
