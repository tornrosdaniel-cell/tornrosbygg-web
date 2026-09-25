import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tjänster | Bygg & renovering i Stockholm | Törnros Bygg",
  description:
    "Utforska Törnros Byggs tjänster inom renovering, badrumsrenovering, tillbyggnad, nybyggnation, Attefallshus, markarbeten och dränering i Solna och Stockholmsområdet.",
  alternates: {
    canonical: "/tjanster/",
  },
};

const services = [
  {
    title: "Renovering",
    href: "/tjanster/renovering/",
    text: "Total- och delrenoveringar av villor och lägenheter, från ytskikt till större omtag av flera rum.",
  },
  {
    title: "Badrumsrenovering",
    href: "/tjanster/badrumsrenovering/",
    text: "Badrumsprojekt där rivning, uppbyggnad, ytskikt och inredning behöver samordnas.",
  },
  {
    title: "Tillbyggnad",
    href: "/tjanster/tillbyggnad/",
    text: "Tillbyggnader där markarbete, stomme, tak och invändigt färdigställande behöver hänga ihop.",
  },
  {
    title: "Nybyggnation",
    href: "/tjanster/nybyggnation/",
    text: "Byggprojekt från mark och grund till stomme, klimatskal och färdiga invändiga delar.",
  },
  {
    title: "Attefallshus",
    href: "/tjanster/attefallshus/",
    text: "Komplementbyggnader för boende, arbete, gäster, förråd eller teknikrum.",
  },
  {
    title: "Markarbeten",
    href: "/tjanster/markarbeten/",
    text: "Schakt, grundförberedelser, markytor och praktiska arbeten runt hus och fastigheter.",
  },
  {
    title: "Dränering",
    href: "/tjanster/dranering/",
    text: "Dräneringsarbeten och åtgärder runt grund, servisledningar och utemiljöer.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Tjänster</p>
          <h1 className="heading-xl">Byggtjänster i Solna & Stockholm</h1>
          <p className="body-lg mt-8 max-w-3xl">
            Törnros Bygg hjälper privatpersoner, bostadsrättsföreningar och
            fastighetsägare med både mindre och större byggprojekt i Solna och
            Stockholmsområdet. Uppdragen kan handla om en avgränsad del av en
            bostad, en större renovering eller byggarbeten där flera moment
            behöver planeras och samordnas.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.href} className="bg-[var(--color-surface)] p-7">
                <h2 className="heading-md">{service.title}</h2>
                <p className="body-copy mt-4">{service.text}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex text-sm font-bold text-[var(--color-accent-dark)]"
                >
                  Läs mer om {service.title.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Projektets upplägg</p>
            <h2 className="heading-lg">
              Omfattning och arbetssätt varierar med projektet
            </h2>
          </div>
          <div>
            <p className="body-lg">
              Ett byggprojekt kan vara allt från ett enskilt rum till flera
              samordnade delar av en fastighet. Därför börjar ett bra upplägg
              med att förstå förutsättningarna: vad som ska göras, vilka
              tekniska moment som ingår och hur arbetet påverkar bostaden eller
              fastigheten under tiden.
            </p>
            <p className="body-copy mt-6">
              Törnros Bygg kan diskutera ett lämpligt projektupplägg utifrån
              just ditt projekt, oavsett om det gäller renovering, tillbyggnad,
              markarbete eller ett större sammanhållet uppdrag.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg">Vill du prata om ett byggprojekt?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Beskriv vad du vill bygga eller renovera, så kan vi prata om
                nästa steg och vilket upplägg som passar projektet.
              </p>
            </div>
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt projekt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
