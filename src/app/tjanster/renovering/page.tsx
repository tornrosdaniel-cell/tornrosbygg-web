import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovering i Solna & Stockholm | Törnros Bygg",
  description:
    "Törnros Bygg hjälper privatpersoner och fastighetsägare med renoveringar i Solna och Stockholmsområdet – från enskilda delar till större totalrenoveringar.",
  alternates: {
    canonical: "/tjanster/renovering/",
  },
};

const renovationTypes = [
  {
    title: "Totalrenovering",
    text: "När flera delar av en bostad eller fastighet behöver tas om i ett sammanhållet projekt.",
  },
  {
    title: "Lägenhetsrenovering",
    text: "Renovering av lägenheter där planering, ytskikt, kök, badrum och tekniska moment kan behöva samordnas.",
  },
  {
    title: "Villarenovering",
    text: "Renovering av villor där befintliga förutsättningar, materialval och användning behöver vägas ihop.",
  },
  {
    title: "Kök och interiöra ytor",
    text: "Arbeten i kök, vardagsrum, sovrum och andra invändiga ytor där funktion och finish ska mötas.",
  },
  {
    title: "Badrum som del av projektet",
    text: "Badrum kan ingå i en större renovering eller planeras som ett eget projekt.",
    href: "/tjanster/badrumsrenovering/",
  },
  {
    title: "Planlösning och färdigställande",
    text: "Ändringar i layout där det är tekniskt möjligt, följt av ytskikt och färdigställande.",
  },
];

const process = [
  {
    step: "01",
    title: "Första genomgång",
    text: "Vi går igenom vad som ska renoveras, vilka ytor som berörs och vilka frågor som behöver utredas.",
  },
  {
    step: "02",
    title: "Omfattning och planering",
    text: "Projektets delar, ordning och praktiska förutsättningar tydliggörs innan arbetet startar.",
  },
  {
    step: "03",
    title: "Genomförande",
    text: "Renoveringen utförs steg för steg med löpande avstämningar när beslut eller justeringar behövs.",
  },
  {
    step: "04",
    title: "Avstämning och färdigställande",
    text: "Arbetet avslutas med genomgång av resultatet och de delar som färdigställts.",
  },
];

const faqs = [
  {
    question: "Vad kostar en renovering?",
    answer:
      "Kostnaden beror på omfattning, befintligt skick, materialval, tekniska krav och hur många delar av bostaden eller fastigheten som berörs. Därför behöver projektet gås igenom innan en rimlig bedömning kan göras.",
  },
  {
    question: "Kan ni hjälpa till med en totalrenovering?",
    answer:
      "Ja, Törnros Bygg kan hjälpa till med större renoveringsprojekt där flera rum och moment behöver planeras tillsammans. Upplägget behöver anpassas efter fastigheten och projektets omfattning.",
  },
  {
    question: "Renoverar ni både villor och lägenheter?",
    answer:
      "Ja, arbetet kan gälla både villor och lägenheter. För lägenheter kan föreningens regler och tekniska förutsättningar påverka hur projektet planeras.",
  },
  {
    question: "Kan ni hjälpa till med planeringen av renoveringen?",
    answer:
      "Ja, vi kan diskutera omfattning, ordning, praktiska förutsättningar och vilka delar som behöver samordnas innan arbetet startar.",
  },
  {
    question: "Hur börjar jag ett renoveringsprojekt med Törnros Bygg?",
    answer:
      "Börja med att beskriva fastigheten, vad som ska renoveras och ungefärlig omfattning. Då kan vi ta en första dialog om projektets förutsättningar och nästa steg.",
  },
];

export default function RenovationPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Renovering</p>
          <h1 className="heading-xl">Renovering i Solna & Stockholm</h1>
          <p className="body-lg mt-8">
            Törnros Bygg utför renoveringsprojekt i Solna och
            Stockholmsområdet, från enskilda rum och ytor till större
            renoveringar av lägenheter och hus. Arbetet kan omfatta planering,
            samordning och genomförande utifrån projektets tekniska och
            praktiska förutsättningar.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt projekt
            </Link>
            <Link href="/projekt" className="button button-secondary">
              Se våra renoveringsprojekt
            </Link>
          </div>
        </div>

        <figure className="surface overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg"
              alt="Färdigt vardagsrum efter renovering på Nämndemansgatan i Solna"
              fill
              priority
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold text-[var(--color-muted)]">
            Renovering · Nämndemansgatan, Solna
          </figcaption>
        </figure>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Omfattning</p>
            <h2 className="heading-lg">Renovering anpassad efter projektet</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
            {renovationTypes.map((item) => (
              <article key={item.title} className="bg-[var(--color-surface)] p-7">
                <h3 className="heading-md">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex text-sm font-bold text-[var(--color-accent-dark)]"
                  >
                    Läs mer om badrumsrenovering
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Process</p>
            <h2 className="heading-lg">Från planering till färdigt resultat</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="surface p-6">
                <p className="text-sm font-bold text-[var(--color-accent-dark)]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-accent-soft)]">
              Projekt
            </p>
            <h2 className="heading-lg">Renoveringar vi har genomfört</h2>
          </div>
          <article className="overflow-hidden rounded-[var(--radius-md)] border border-white/15 bg-white/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg"
                alt="Renoverad interiör på Nämndemansgatan i Solna"
                fill
                quality={80}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="eyebrow mb-4 text-[var(--color-accent-soft)]">
                Nämndemansgatan, Solna
              </p>
              <h3 className="heading-md text-white">Lägenhetsrenovering</h3>
              <p className="mt-5 leading-8 text-stone-300">
                Ett renoveringsprojekt om cirka 140 kvm med flera rum, badrum,
                kök, tvättstuga och nya ytskikt.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/projekt/renovering-namndemansgatan-solna/" className="button button-primary bg-white text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]">
                  Läs om projektet
                </Link>
                <Link href="/projekt" className="button border-white/25 text-white hover:border-white">
                  Se alla projekt
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Arbetssätt</p>
            <h2 className="heading-lg">Ett byggföretag nära renoveringen</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              [
                "Praktisk erfarenhet",
                "Vi arbetar med renoveringsprojekt där befintliga förutsättningar behöver hanteras under arbetets gång.",
              ],
              [
                "Direkt dialog",
                "Tydlig kommunikation gör det lättare att förstå vad som händer och vilka val som behöver göras.",
              ],
              [
                "Samordning genom projektet",
                "Olika moment behöver planeras i rätt ordning, särskilt när flera ytor eller tekniska delar ingår.",
              ],
              [
                "Olika projektstorlekar",
                "Arbetet kan gälla en avgränsad del, flera rum eller en större totalrenovering.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-[var(--color-border)] pt-5">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="body-copy mt-4">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow mb-4">Solna & Stockholm</p>
          <h2 className="heading-lg">Renovering med utgångspunkt i Solna</h2>
          <p className="body-lg mt-6">
            Törnros Bygg utgår från Solna och genomför renoveringsprojekt i
            Stockholmsområdet. Närhet till projekten underlättar löpande avstämningar,
            praktiska beslut och samordning under arbetets gång.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Frågor</p>
            <h2 className="heading-lg">Vanliga frågor om renovering</h2>
          </div>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex items-center justify-between gap-6 text-left text-xl font-bold">
                  {item.question}
                  <span className="text-2xl text-[var(--color-accent-dark)] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="body-copy mt-4 max-w-3xl">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="body-copy mt-8">Osäker på omfattningen? Läs guiden <Link href="/byggtips/totalrenovering-eller-delrenovering/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">Totalrenovering eller delrenovering?</Link></p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg">Planerar du en renovering?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta vilken bostad eller fastighet det gäller, vad som ska
                renoveras och ungefär hur omfattande projektet är.
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
