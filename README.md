# Törnros Bygg

Ny produktionsorienterad webbplats för Törnros Bygg. Projektet är en fristående ny implementation och påverkar inte den befintliga webbplatsen på tornrosbygg.se.

## Stack

- Next.js med App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm

## Lokal utveckling

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Kör lint:

```bash
npm run lint
```

## Produktion

Skapa en produktionsbuild:

```bash
npm run build
```

## Kontaktformulär: konfiguration inför Preview

Formuläret skickar via server-routen `/api/contact` och Resend till den fasta
mottagaren `hej@tornrosbygg.se`. Design och fält finns i `src/components/contact-form.tsx`.

Följande servervariabler används (aldrig med prefixet `NEXT_PUBLIC_`):

| Variabel | Krav och värde |
| --- | --- |
| `RESEND_API_KEY` | Krävs för utskick. Resend-nyckel med behörighet att skicka från den verifierade domänen. Hemlig. |
| `RESEND_FROM_EMAIL` | Ange `Törnros Bygg <hej@tornrosbygg.se>`. Samma värde används som standard om variabeln saknas. |
| `UPSTASH_REDIS_REST_URL` | Krävs för utskick i alla miljöer. Databasens HTTPS REST-basadress, utan sökväg eller parametrar. |
| `UPSTASH_REDIS_REST_TOKEN` | Krävs för utskick i alla miljöer. Hemlig skrivbehörig REST-token, inte en read-only-token. |
| `VERCEL` | Vercels systemvariabel, automatiskt `1` i Vercel. Ska inte sättas manuellt lokalt för att kringgå IP-kontrollen. |
| `VERCEL_ENV` | Vercels systemvariabel (`preview` eller `production`), används för separata Redis-namnrymder. |
| `NODE_ENV` | Hanteras av Next.js. Produktionskörning utanför Vercel stänger formuläret eftersom ingen betrodd klient-IP finns. |

Konfigurera vid ett senare godkänt tillfälle i Vercel-projektet `tornrosbygg-web`,
under Settings → Environment Variables. De fyra tjänstevariablerna måste gälla
**Preview**, inklusive den aktuella branchen om branchspecifika värden används.
Production konfigureras separat inför uttryckligen godkänd lansering. Ändrade
variabler får effekt i en ny deployment. Ingen Vercel-inställning ändras av denna kod.
Använd gärna en separat Upstash-databas för Preview. Alla Preview-instanser med
samma databas delar gränsen; production har en separat namnrymd.

Upstash-token måste tillåta `EVAL` och scriptets `TIME`, `ZREMRANGEBYSCORE`,
`ZCARD`, `PTTL`, `ZADD`, `PEXPIRE` för nycklar med prefixet `contact-form:v2:`.
Använd HTTPS REST-endpointen från Upstash, inte Redis TCP-adressen.
Hemligheter ska läggas direkt i respektive tjänsts inställningar, aldrig i Git,
chatt, skärmbilder eller loggar. Lokal `.env.local` är ignorerad av Git.

### Säkerhetsbeteende

- Ett Lua-script via ett `EVAL`-anrop kontrollerar en rullande timme atomärt.
  Högst fem tillåtna försök per IP under de senaste 3 600 sekunderna, även över
  flera serverinstanser. Redis-serverns tid används och varje försök får ett UUID.
  Ett försök räknas även om efterföljande fältvalidering eller mejlleverans misslyckas.
  Avvisad honeypot, oläsbar/felaktig struktur och för stora anrop skickar aldrig mejl.
- Sorted-set-nyckeln löper ut en timme efter senaste tillåtna försöket. Blockerade
  anrop förlänger inte spärren. Saknad TTL på en befintlig nyckel repareras atomärt.
- Endast `x-vercel-forwarded-for` i Vercels runtime används för klient-IP.
  Headern måste innehålla en giltig ensam IP-adress. `x-forwarded-for`, `x-real-ip`
  och IP-listor används aldrig som fallback. Tilliten förutsätter att Vercels
  plattform tar emot trafiken och skriver över headern. Annan hosting kräver en
  separat betrodd proxyimplementation. Lokal utveckling delar en enda Redis-nyckel
  oavsett klientheaders; även lokalt krävs Upstash för att skicka mejl.
- IP lagras som SHA-256-digest i nyckeln. Detta är pseudonymisering, inte
  anonymisering. Formulärtext och e-post lagras inte i Redis av denna implementation.
- Saknad/ogiltig Upstash-konfiguration, timeout efter tre sekunder, HTTP-fel,
  Redis-fel och oväntade svar ger samma generiska **503**, utan utskick eller
  minnesbaserad fallback. En nådd gräns ger **429**.
- Faktisk body begränsas till 64 KiB även med felaktig eller saknad Content-Length.
  Endast formulärkodning godtas. Filer, dubbletter, okända fält, för långa fält,
  ogiltiga projekttyper och kontrolltecken avvisas på servern.
- Resend anropas endast efter godkänd rate limiting och fältvalidering. Ingen
  leverantörsrespons, token eller intern felorsak returneras till klienten/loggas.
- IP-baserat skydd stoppar inte distribuerad spam från många verkliga IP-adresser;
  användare bakom samma publika IP delar gränsen.

Tekniska referenser: [Upstash REST](https://upstash.com/docs/redis/features/restapi),
[EVAL](https://upstash.com/docs/redis/sdks/ts/commands/scripts/eval),
[Vercels request-headers](https://vercel.com/docs/headers/request-headers).

### Kontroller

```bash
npm run test:contact
npm audit --omit=dev
npm run lint
npm run build
npm run check:links
```

Automatiska routetester körs med simulerad Upstash och Resend, isolerade
miljövariabler och testvärden. De skickar ingen riktig e-post. Testberoendet
`wasmoon` kör applikationens faktiska Lua-script mot simulerade Redis-kommandon.
Samtidighet, rullande tidsfönster, TTL, återställning av saknad TTL och separata
IP-adresser testas. Det ersätter inte ett integrationstest i en verklig Upstash-databas.
Inför Preview behöver faktisk konfiguration, TTL, samtidighet och headerhantering
verifieras i Vercel samt en verklig leverans till `hej@tornrosbygg.se` bekräftas.
Gör sådana tester med syntetiska uppgifter och undvik att logga credentials.

## Integritet: återstår före lansering

`/integritet` anger ägarens bekräftade uppgifter: **Törnros Fastigheter AB**,
**559044-0805**, **Sjövägen 14, 169 55 Solna** och **hej@tornrosbygg.se**.
Varumärket är Törnros Bygg. Policyn beskriver formulärets faktiska dataflöde,
leverantörerna, IP-baserat spamskydd och den beslutade gallringsrutinen.
Kundförfrågningar som inte leder till uppdrag raderas normalt manuellt i Loopias
e-post efter 12 månader från senaste relevanta kontakt, om inget annat berättigat
behov finns. Uppdragsrelaterade förfrågningar blir projektkorrespondens och sparas
enligt tillämpliga rättsliga krav och dokumenterade behov. Ingen automatisk
gallringsfunktion byggs. Leverantörernas lagringstider och backupgallring har inte antagits.

Ägaren har bekräftat Loopia AB som leverantör för mottagning och lagring av
inkommande e-post. Den manuella rutinen finns i dokumentationen nedan; dess
praktiska verkställande, tillämpliga biträdesavtal, regioner, underbiträden och
överföringsstöd måste fortfarande verifieras inför lansering.
Källor, avgränsningar och ansvarigas återstående beslut finns i
[docs/privacy-review.md](docs/privacy-review.md). Den publika policyn innehåller
inga interna arbetsanteckningar; det är inte ett klartecken för juridisk lansering.
