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
            Här beskriver vi kort hur Törnros Bygg behandlar uppgifter som du
            lämnar när du hör av dig om ett byggprojekt.
          </p>
        </div>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container max-w-4xl space-y-10">
          <div>
            <h2 className="heading-md">Personuppgiftsansvarig</h2>
            <p className="body-copy mt-4">
              Törnros Fastigheter AB är tills vidare personuppgiftsansvarig för
              behandling av personuppgifter i Törnros Byggs kontaktformulär.
            </p>
            <p className="body-copy mt-4">
              Organisationsnummer och postadress behöver kompletteras före
              lansering när uppgifterna är verifierade.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Vilka uppgifter behandlas?</h2>
            <p className="body-copy mt-4">
              När du använder kontaktformuläret eller kontaktar oss direkt kan
              vi behandla namn, e-postadress, telefonnummer, ort/stadsdel och
              den information du själv lämnar om projektet.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Varför behandlas uppgifterna?</h2>
            <p className="body-copy mt-4">
              Uppgifterna används för att kunna svara på din förfrågan,
              diskutera projektets förutsättningar och följa upp kontakten.
              Behandlingen grundas på din begäran om kontakt och, när det är
              relevant, vårt berättigade intresse av att hantera kunddialoger.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Hur länge sparas uppgifter?</h2>
            <p className="body-copy mt-4">
              Vi sparar bara uppgifter så länge de behövs för att hantera
              kontakten, följa upp ett möjligt uppdrag eller uppfylla rättsliga
              skyldigheter om ett uppdrag blir aktuellt.
            </p>
            <p className="body-copy mt-4">
              Exakt lagringstid eller gallringsrutin behöver bekräftas av
              verksamhetsansvarig.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Mottagare och leverantörer</h2>
            <p className="body-copy mt-4">
              Uppgifter kan behandlas av de tekniska leverantörer som behövs
              för webbplats, e-post och formulärhantering. Vilka leverantörer
              som slutligt används, till exempel hosting och e-posttjänst,
              behöver bekräftas innan publicering.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Överföringar utanför EU/EES</h2>
            <p className="body-copy mt-4">
              Om en leverantör behandlar uppgifter utanför EU/EES ska det finnas
              lämpliga skyddsåtgärder. Eventuella internationella överföringar
              behöver bekräftas mot de leverantörer som används i drift.
            </p>
          </div>

          <div>
            <h2 className="heading-md">Dina rättigheter</h2>
            <p className="body-copy mt-4">
              Du kan kontakta oss om du vill få information om vilka uppgifter
              vi behandlar, rätta felaktiga uppgifter eller be att uppgifter
              raderas när det är möjligt.
            </p>
            <p className="body-copy mt-4">
              Du har också rätt att lämna klagomål till
              Integritetsskyddsmyndigheten, IMY.
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
