# Integritet – verifiering inför lansering

Detta är internt granskningsunderlag. Det är inte den publika policyn eller ett
intyg om att verksamhetens samtliga dataskyddsåtgärder är genomförda.

## Bekräftat av ägaren

- Personuppgiftsansvarig: Törnros Fastigheter AB, 559044-0805.
- Postadress: Sjövägen 14, 169 55 Solna.
- Kontakt: hej@tornrosbygg.se. Varumärke: Törnros Bygg.
- Mottagning och lagring av inkommande e-post till hej@tornrosbygg.se sker via
  Loopias e-posttjänst. Leverantören anges som Loopia AB i policyn.

## Beslutad manuell gallringsrutin

Ägaren har beslutat följande rutin för företagets kundförfrågningar:

1. För förfrågningar som inte leder till uppdrag utgår bedömningen från senaste
   relevanta kontakt. Radera normalt efter 12 månader om inget annat berättigat
   behov finns. Dokumentera syfte och behov om uppgifter behöver sparas längre,
   och ompröva fortsatt lagring när behovet ändras eller upphör.
2. Förfrågningar som leder till uppdrag hanteras som projektkorrespondens.
   Bevara enligt tillämpliga rättsliga krav och dokumenterade behov; någon generell
   lagringstid för alla projekthandlingar har inte beslutats här.
3. Gallringen utförs manuellt i företagets e-post hos Loopia. Identifiera relevant
   korrespondens i inkorg, skickat och övriga mappar. Kontrollera behovet innan
   radering och hantera även papperskorgen med e-posttjänstens raderingsfunktioner.
   Ingen automatisk gallringsfunktion ska byggas.
4. Säkerställ utföraransvar och hur genomförd gallring följs upp utan att skapa
   onödiga kopior av personuppgifter. Faktiskt genomförande har inte verifierats
   i denna kodgranskning. Inga kundmejl har raderats som del av utvecklingsarbetet.

Rutinen omfattar företagets hantering av mejlen. Den utgör inget löfte om när
Loopias, Resends, Vercels eller Upstashs separata loggar och säkerhetskopior
raderas. Eventuella lokala och vidarebefordrade e-postkopior behöver också
identifieras; leverantörernas faktiska villkor och raderingsmöjligheter behöver
verifieras separat. Ingen obekräftad lagringsregion eller backupgallring antas.

## Verifierat i projektet

- Formulärets länk är `/integritet`. Canonical har samma adress utan slutslash.
- Formulärdata går via Vercels serverfunktion till Resend som ett textmejl till
  hej@tornrosbygg.se. Namn, e-post och meddelande är obligatoriska; telefon,
  projekttyp och ort/stadsdel är frivilliga.
- Upstash får en SHA-256-digest av klient-IP:n samt försöksidentifierare.
  Tidsstämplar kommer från Redis. Digesten är pseudonymisering, inte anonymisering.
- Redis-nyckelns TTL är en timme efter senaste tillåtna försök. Blockerade försök
  förlänger inte TTL. Detta är inte en gallringstid för andra loggar, säkerhetskopior
  eller mottagna mejl. Formulärinnehåll och e-postadresser läggs inte i Redis av API:t.
- API:t skriver inte formulärinnehåll till egna loggar. Plattformarnas loggning
  och eventuella externa loggmottagare kan inte fastställas enbart från koden.
- Ingen ändring av API, formulär, gallerier, leverantörskonton eller miljövariabler
  ingår i denna integritetsuppdatering.

## Leverantörskällor och vad de styrker

Granskade 2026-10-15. Offentliga villkor är inte en verifiering av vilka inställningar
eller avtal som gäller för det specifika företagskontot.

- [Resend: GDPR](https://resend.com/security/gdpr) anger amerikansk datalagring,
  skild från utskicksregion. Lagring beror på plan; ingen bestämd kontospecifik
  lagringstid har därför skrivits i policyn.
- [Resend: DPA](https://resend.com/legal/dpa) beskriver biträdesrollen och
  överföringsmekanismer. Kontots avtalsunderlag behöver sparas av ansvarig.
- [Vercel: DPA](https://vercel.com/legal/dpa), avsnitt 4/7/10 och bilaga 3,
  behandlar roller, underbiträden och internationella överföringar. Där beskrivs
  SCC; inget löfte om exklusiv EU-behandling har införts.
- [Vercel: driftloggar](https://vercel.com/docs/logs/runtime) beskriver
  planberoende lagring. Projektets plan, tillägg och loggexport har inte verifierats.
- [Vercels underbiträden](https://vercel.com/legal/sub-processors) behöver
  kontrolleras mot de funktioner som faktiskt används.
- [Upstash: DPA](https://upstash.com/trust/dpa.pdf), avsnitt 3, beskriver
  internationell behandling och skyddsåtgärder, bland annat SCC. Den aktuella
  databasens region, eventuell replikering och backup är inte verifierade.
- [Loopias allmänna villkor, bilaga A](https://www.loopia.se/pdf/loopia_allmanna_villkor.pdf),
  anger Loopia AB som biträde och kunden som ansvarig. A3/A4 behandlar uppdraget
  och kundinstruktionerna; A6 underbiträden. Detta styrker den beskrivna rollen
  för kundens e-postinnehåll, inte att ett visst bolagskonto eller avtal har granskats.
- [Loopias dataskyddsinformation](https://www.loopia.se/om-loopia/dataskydd/personuppgifter/)
  tar uttryckligen upp e-postkonton som biträdesbehandling. Uppgifterna om Loopia
  som ansvarig för egen kundadministration ska inte blandas ihop med denna roll.
  Den publicerade informationen ger inte en kontospecifik gallringstid eller ett
  tillräckligt underlag för att lova exklusiv behandling i Sverige/EU. Säkerhetskopior,
  aktuella underbiträden och eventuella överföringar behöver kontrolleras för tjänsten.
- [IMY: integritetspolicy](https://www.imy.se/vanliga-fragor-och-svar/vad-ska-en-integritetspolicy-innehalla/)
  och [lagringsminimering](https://www.imy.se/vanliga-fragor-och-svar/hur-lange-far-vi-spara-uppgifter/)
  är utgångspunkt för tydlig information och gallringskriterier.
- [IMY: tredjelandsöverföring](https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/overforing-till-tredje-land/)
  beskriver att även åtkomst från ett annat land kan vara relevant.

## Beslut och verifieringar som återstår

1. Säkerställ att den beslutade manuella gallringsrutinen ovan verkställs:
   utse utförare, identifiera senaste relevanta kontakt och dokumentera berättigade
   undantag. Tolvmånadersrutinen är beslutad, men utförande och uppföljning har
   inte verifierats genom åtkomst till e-postkontot.
2. E-postleverantören är nu bekräftad som Loopia AB. Verifiera fortfarande faktisk
   gallring, säkerhetskopior, eventuell vidarebefordran och lokala e-postkopior.
3. Kontrollera att rätt juridisk person är avtalspart för Vercel, Resend, Upstash
   och Loopia AB och att tillämpliga biträdesvillkor gäller. Spara DPA och relevanta
   underbiträdeslistor; anta inte att ett personligt konto tillhör bolaget.
4. Verifiera kontots Resend-plan, Vercels projekt-/funktionsregion och logginställningar
   samt Upstash-region, replikering, backup och raderingsfunktioner. Regionval för
   utskick får inte beskrivas som en garanti för EU-lagring. Verifiera också
   Loopias aktuella tjänstevillkor, underbiträden och behandling för e-posttjänsten.
5. Dokumentera faktiska tredjelandsflöden och tillämpligt överföringsstöd för varje
   leverantör, inklusive åtkomst/underbiträden och eventuell kompletterande bedömning.
   Policyn återger leverantörernas publicerade skyddsåtgärder utan att påstå att
   en kontospecifik avtals-/överföringsgranskning redan är slutförd.
6. Dokumentera intresseavvägning för kontaktpersoner och spamskydd samt den praktiska
   rutinen för tillgång, invändning och radering. Ingen genomförd intresseavvägning
   har antagits i denna granskning. Gallring av kundförfrågningar följer den
   beslutade rutinen ovan; hantering av rättighetsbegäranden behöver verifieras separat.
7. Verifiera fortsatt ett verkligt mottaget kontaktmejl i godkänd Preview, med
   syntetiska uppgifter. Ingen sådan utskickskontroll har gjorts här.

## Avgränsning och lanseringsbedömning

Den publika sidan har inga interna kompletteringsnotiser. Saknade verksamhets-
och kontobeslut ligger här i stället. Att platshållarna är borttagna innebär inte
att de praktiska frågorna är lösta. Juridiskt klartecken för lansering lämnas
inte innan punkterna ovan har hanterats av verksamhetsansvarig.
