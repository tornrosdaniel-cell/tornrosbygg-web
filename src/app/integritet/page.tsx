import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritet | Törnros Bygg",
  description:
    "Så behandlar Törnros Bygg personuppgifter när du kontaktar oss om ett byggprojekt.",
  alternates: { canonical: "/integritet" },
};

export default function IntegritetPage() {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Integritet</p>
          <h1 className="heading-xl">Personuppgifter när du kontaktar oss</h1>
          <p className="body-lg mt-8 max-w-3xl">
            Här beskriver vi hur dina personuppgifter behandlas när du kontaktar
            Törnros Bygg om ett byggprojekt och när kontaktformuläret används.
          </p>
        </div>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container max-w-4xl space-y-10">
          <div>
            <h2 className="heading-md">Personuppgiftsansvarig</h2>
            <p className="body-copy mt-4">
              Törnros Fastigheter AB, organisationsnummer 559044-0805, är
              personuppgiftsansvarig. Verksamheten presenteras under varumärket
              Törnros Bygg.
            </p>
            <p className="body-copy mt-4">
              Postadress: Sjövägen 14, 169 55 Solna. För frågor om dina
              personuppgifter kan du skriva till{" "}
              <a href="mailto:hej@tornrosbygg.se" className="font-bold underline underline-offset-4">
                hej@tornrosbygg.se
              </a>.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Vilka uppgifter behandlas?</h2>
            <p className="body-copy mt-4">
              När du använder kontaktformuläret eller kontaktar oss direkt kan
              vi behandla namn, e-postadress, telefonnummer, projekttyp,
              ort/stadsdel och den information du själv lämnar om projektet.
              Namn, e-postadress och projektbeskrivning behövs för att skicka
              formuläret. Övriga formulärfält är frivilliga.
            </p>
            <p className="body-copy mt-4">
              IP-adress och tekniska uppgifter om anslutningen behandlas också
              när webbplatsen och formuläret används. För att begränsa spam
              används en kod som beräknas från IP-adressen, tillsammans med
              tidpunkter och identifierare för försök. Koden är en
              pseudonymiserad personuppgift, inte anonym information.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Varför behandlas uppgifterna?</h2>
            <p className="body-copy mt-4">
              Uppgifterna används för att kunna svara på din förfrågan,
              diskutera projektets förutsättningar och följa upp kontakten.
              När du som privatperson begär en offert eller ett uppdrag och
              uppgifterna behövs för att förbereda ett avtal är den rättsliga
              grunden åtgärder på din begäran före avtal, enligt artikel 6.1 b
              i dataskyddsförordningen.
            </p>
            <p className="body-copy mt-4">
              För andra förfrågningar, till exempel när du företräder ett
              företag eller en bostadsrättsförening, grundas hanteringen på
              vårt berättigade intresse av att besvara förfrågningar och
              hantera kunddialoger, enligt artikel 6.1 f. Skyddet mot spam
              grundas på vårt berättigade intresse av att hålla formuläret
              tillgängligt och motverka missbruk.
            </p>
            <p className="body-copy mt-4">
              När uppgifter behöver behandlas för att uppfylla en rättslig
              skyldighet är grunden artikel 6.1 c.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Hur länge sparas uppgifter?</h2>
            <p className="body-copy mt-4">
              Kundförfrågningar som inte leder till uppdrag raderas normalt
              efter 12 månader från den senaste relevanta kontakten, om inget
              annat berättigat behov finns. Förfrågningar som leder till uppdrag
              hanteras som projektkorrespondens och sparas enligt tillämpliga
              rättsliga krav och dokumenterade behov.
            </p>
            <p className="body-copy mt-4">
              Gallringen av kundförfrågningar görs manuellt i företagets e-post
              hos Loopia. Det finns ingen automatisk gallringsfunktion för
              dessa mejl. Rutinen innebär inte att leverantörernas separata
              loggar eller säkerhetskopior raderas inom samma tid.
            </p>
            <p className="body-copy mt-4">
              Räknaren i spamskyddets databas raderas automatiskt en timme
              efter det senaste tillåtna försöket från samma anslutning.
              Formulärtext och e-postadress lagras inte i den databasen.
              Tidsgränsen gäller räknaren, inte e-postmeddelanden eller
              leverantörernas separata drift- och säkerhetsloggar.
            </p>
            <p className="body-copy mt-4">
              Resend lagrar även meddelandeinnehåll och leveransloggar enligt
              sina lagringsvillkor. Lagringen hos tekniska leverantörer är
              skild från lagringen av vår kunddialog. Mer information finns i{" "}
              <a href="https://resend.com/security/gdpr" className="font-bold underline underline-offset-4">
                Resends dataskyddsinformation
              </a>{" "}
              och{" "}
              <a href="https://vercel.com/docs/logs/runtime" className="font-bold underline underline-offset-4">
                Vercels information om driftloggar
              </a>.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Mottagare och personuppgiftsbiträden</h2>
            <p className="body-copy mt-4">
              För webbplatsen och kontaktformuläret används följande tekniska
              leverantörer:
            </p>
            <ul className="body-copy mt-4 list-disc space-y-3 pl-6">
              <li>Vercel tillhandahåller webbhosting och serverfunktionen som tar emot formuläret.</li>
              <li>Resend förmedlar formulärets kontaktuppgifter och projektbeskrivning som e-post till hej@tornrosbygg.se.</li>
              <li>Upstash tillhandahåller databasen för spamskyddet. Dit skickas den IP-baserade koden och försöksuppgifter, men inte formulärtexten.</li>
              <li>Loopia AB tillhandahåller mottagning och lagring av inkommande e-post till hej@tornrosbygg.se.</li>
            </ul>
            <p className="body-copy mt-4">
              Loopia AB behandlar personuppgifter i e-posten för vår räkning
              som personuppgiftsbiträde. Den rollen beskrivs i bilaga A,
              personuppgiftsbiträdesavtalet i{" "}
              <a href="https://www.loopia.se/pdf/loopia_allmanna_villkor.pdf" className="font-bold underline underline-offset-4">
                Loopias allmänna villkor
              </a>.
            </p>
            <p className="body-copy mt-4">
              Tekniska leverantörer och deras underleverantörer
              kan därmed behandla uppgifter för vår räkning när tjänsterna
              används. Myndigheter kan också få del av uppgifter om vi är
              skyldiga att lämna ut dem enligt lag.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Överföringar utanför EU/EES</h2>
            <p className="body-copy mt-4">
              Personuppgifter kan behandlas utanför EU/EES. Resend uppger att
              meddelandeinnehåll och leveransloggar lagras i USA, även när en
              europeisk region väljs för själva utskicket. Vercels och
              Upstashs biträdesvillkor beskriver också internationell behandling.
            </p>
            <p className="body-copy mt-4">
              Leverantörernas publicerade biträdesvillkor beskriver
              skyddsåtgärder för överföringar, bland annat EU-kommissionens
              standardavtalsklausuler. Du kan läsa villkoren hos{" "}
              <a href="https://resend.com/legal/dpa" className="font-bold underline underline-offset-4">Resend</a>,{" "}
              <a href="https://vercel.com/legal/dpa" className="font-bold underline underline-offset-4">Vercel</a>{" "}
              och{" "}
              <a href="https://upstash.com/trust/dpa.pdf" className="font-bold underline underline-offset-4">Upstash</a>.
              Kontakta oss på hej@tornrosbygg.se om du vill ha närmare
              information om överföringar och tillämpliga skyddsåtgärder eller
              få en kopia av dem.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Dina rättigheter</h2>
            <p className="body-copy mt-4">
              Du kan begära tillgång till dina personuppgifter, rättelse av
              felaktiga uppgifter och, när förutsättningarna är uppfyllda,
              radering eller begränsning av behandlingen. Du har rätt att
              invända mot behandling som grundas på berättigat intresse.
              När reglerna om dataportabilitet är tillämpliga kan du också
              begära att få ut uppgifter i ett strukturerat format.
            </p>
            <p className="body-copy mt-4">
              Du har också rätt att lämna klagomål till
              <a href="https://www.imy.se/privatperson/utfora-arenden/lamna-ett-klagomal/" className="font-bold underline underline-offset-4">
                Integritetsskyddsmyndigheten, IMY
              </a>.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Kontakt</h2>
            <p className="body-copy mt-4">
              För frågor om personuppgifter, kontakta oss på{" "}
              <a
                href="mailto:hej@tornrosbygg.se"
                className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4"
              >
                hej@tornrosbygg.se
              </a>
              .
            </p>
          </div>

          <Link href="/kontakt" className="button button-primary">
            Till kontakt
          </Link>
        </div>
      </section>
    </main>
  );
}
