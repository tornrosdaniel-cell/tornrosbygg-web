import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Byggföretag i Solna & Stockholm | Törnros Bygg",
  description:
    "Törnros Bygg utför renovering, tillbyggnad, nybyggnation och markarbeten för privatpersoner, BRF:er och fastighetsägare i Solna och Stockholmsområdet.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Renovering",
    href: "/tjanster/renovering",
    text: "Total- och delrenoveringar av villor och lägenheter.",
  },
  {
    title: "Badrumsrenovering",
    href: "/tjanster/badrumsrenovering",
    text: "Renovering av badrum med samordnad byggprocess och tydliga val.",
  },
  {
    title: "Tillbyggnad",
    href: "/tjanster/tillbyggnad",
    text: "Från markarbete och stomme till färdig tillbyggnad.",
  },
  {
    title: "Nybyggnation",
    href: "/tjanster/nybyggnation",
    text: "Husprojekt med markarbete, grund, stomme och färdigställande.",
  },
  {
    title: "Attefallshus",
    href: "/tjanster/attefallshus",
    text: "Komplementbyggnader för boende, arbete, förråd eller teknikrum.",
  },
  {
    title: "Markarbeten & dränering",
    href: "/tjanster/markarbeten",
    text: "Schakt, dränering, ledningar och markytor runt fastigheter.",
  },
];

const projects = [
  {
    title: "Nybyggnation",
    place: "Blanchevägen, Danderyd",
    href: "/projekt/nybyggnation-blanchevagen-danderyd",
    text: "Nybyggnation med omfattande markarbete och ett större bostadsprojekt.",
    image: {
      src: "/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg",
      width: 964,
      height: 723,
      alt: "Allrum i nybyggnation på Blanchevägen i Danderyd",
    },
  },
  {
    title: "Renovering",
    place: "Nämndemansgatan, Solna",
    href: "/projekt/renovering-namndemansgatan-solna",
    text: "Renovering av lägenhet med flera rum, badrum, kök och nya ytskikt.",
    image: {
      src: "/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg",
      width: 2048,
      height: 1536,
      alt: "Färdigt vardagsrum efter renovering på Nämndemansgatan i Solna",
    },
  },
  {
    title: "Tillbyggnad",
    place: "Sjövägen, Solna",
    href: "/projekt/tillbyggnad-sjovagen-solna",
    text: "Tillbyggnad med ny boyta, terrass och garage i anslutning till huset.",
    image: {
      src: "/images/projects/sjovagen/tillbyggnad-solna.jpeg",
      width: 740,
      height: 555,
      alt: "Tillbyggnad på Sjövägen i Solna",
    },
  },
];

const testimonials = [
  {
    name: "Sara",
    location: "Vasastan",
    quote:
      "Jag är helnöjd, badrummet som tidigare kunde upplevas litet och trångt blev ljust och modernt, Törnros tips om inbyggd takdusch blev pricken över i:et. Så nöjd!",
  },
];

export default function Home() {
  return (
    <main>
      <section className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="eyebrow mb-6">Bygg & entreprenad · Solna / Stockholm</p>
          <h1 className="heading-xl max-w-4xl">
            Byggföretag i Solna & Stockholm
          </h1>
          <p className="mt-7 text-2xl font-semibold text-[var(--color-accent-dark)] sm:text-3xl">
            Från renovering till färdig entreprenad
          </p>
          <p className="body-lg mt-7 max-w-2xl">
            Törnros Bygg hjälper privatpersoner, bostadsrättsföreningar och
            fastighetsägare med byggprojekt i Solna och Stockholmsområdet –
            från renoveringar och tillbyggnader till markarbeten och större
            entreprenader.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt projekt
            </Link>
            <Link href="/projekt" className="button button-secondary">
              Se våra projekt
            </Link>
          </div>
        </div>

        <figure className="surface overflow-hidden">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/blanchevagen/nybyggnation-mikrocementbadrum-danderyd.jpeg"
              alt="Färdigt badrum i nybyggnation på Blanchevägen i Danderyd"
              fill
              priority
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold text-[var(--color-muted)]">
            Nybyggnation · Blanchevägen, Danderyd
          </figcaption>
        </figure>
      </section>

      <section className="section border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Tjänster</p>
            <h2 className="heading-lg">Vi bygger för långsiktiga resultat</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-[var(--color-surface)] p-7 transition-colors hover:bg-[var(--color-paper)]"
              >
                <h3 className="heading-md">{service.title}</h3>
                <p className="body-copy mt-4">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Projekt</p>
              <h2 className="heading-lg">Utvalda projekt</h2>
            </div>
            <Link href="/projekt" className="button button-secondary md:mb-1">
              Alla projekt
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.href} className="surface overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    quality={80}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow mb-3">{project.title}</p>
                  <h3 className="heading-md">{project.place}</h3>
                  <p className="body-copy mt-4">{project.text}</p>
                  <Link
                    href={project.href}
                    className="mt-6 inline-flex text-sm font-bold text-[var(--color-accent-dark)]"
                  >
                    Läs mer om projektet
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-accent-soft)]">Om oss</p>
            <h2 className="heading-lg">Ett byggföretag nära projektet</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              [
                "Praktisk erfarenhet",
                "Vi arbetar nära de praktiska delarna av byggprocessen och planerar arbetet utifrån projektets förutsättningar.",
              ],
              [
                "Direkt kommunikation",
                "Du ska veta vem du pratar med, vad som händer och vilka beslut som behöver tas under resans gång.",
              ],
              [
                "Ansvar i projektet",
                "Vi hjälper privatkunder, BRF:er och fastighetsägare att hålla ihop byggarbetet från start till färdigt resultat.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-white/20 pt-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow mb-4">Fastighetsägare & BRF</p>
            <h2 className="heading-lg">
              Byggprojekt för fastighetsägare & BRF
            </h2>
          </div>
          <div>
            <p className="body-lg">
              För bostadsrättsföreningar och fastighetsägare hjälper Törnros
              Bygg med renovering, dränering, markarbeten, tak, innergårdar och
              projektbaserade byggarbeten.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-accent-dark)]">
              {["Renovering", "Dränering", "Markarbeten", "Tak", "Innergårdar"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <Link href="/fastighetsagare" className="button button-primary mt-10">
              För fastighetsägare
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Kundröster</p>
            <h2 className="heading-lg">Vad våra kunder säger</h2>
          </div>
          <div className="mt-12 max-w-4xl">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="surface p-8 md:p-10">
                <blockquote className="text-2xl leading-10 text-[var(--color-ink)] md:text-3xl md:leading-[1.35]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-[var(--color-border)] pt-5 text-sm font-bold text-[var(--color-accent-dark)]">
                  {testimonial.name}, {testimonial.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg">Har du ett byggprojekt på gång?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta kort vad du vill bygga, renovera eller förändra så tar
                vi nästa steg tillsammans.
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
