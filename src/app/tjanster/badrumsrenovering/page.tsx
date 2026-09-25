import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badrumsrenovering i Solna & Stockholm | Törnros Bygg",
  description:
    "Planerar du att renovera badrummet? Törnros Bygg hjälper till med badrumsprojekt i Solna och Stockholmsområdet, från första genomgång till färdigt rum.",
  alternates: {
    canonical: "/tjanster/badrumsrenovering/",
  },
};

const costFactors = [
  {
    title: "Befintligt skick",
    text: "Det som finns bakom dagens ytskikt kan påverka vilka åtgärder som behövs när badrummet öppnas upp.",
  },
  {
    title: "Planlösning och installationer",
    text: "Om dusch, avlopp, el eller annan utrustning ska flyttas behöver arbetet planeras utifrån rummets förutsättningar.",
  },
  {
    title: "Material och inredning",
    text: "Val av ytskikt, möbler, duschlösning och detaljer påverkar både arbetets omfattning och materialkostnaden.",
  },
  {
    title: "Arbetets omfattning",
    text: "En fullständig ombyggnad skiljer sig från ett projekt där vissa befintliga delar kan behållas.",
  },
];

const process = [
  {
    step: "01",
    title: "Gå igenom badrummet",
    text: "Vi pratar om rummets skick, hur det ska användas och vilka önskemål och tekniska frågor som finns.",
  },
  {
    step: "02",
    title: "Bestäm omfattning",
    text: "Arbeten, materialval och ordningen mellan olika moment tydliggörs innan projektet startar.",
  },
  {
    step: "03",
    title: "Bygg och stäm av",
    text: "Rivning, uppbyggnad, installationer och ytskikt samordnas. Om något oväntat visar sig tar vi upp det innan nästa beslut.",
  },
  {
    step: "04",
    title: "Färdigställ och gå igenom",
    text: "När arbetet är klart går vi tillsammans igenom resultatet och den dokumentation som hör till projektet.",
  },
];

const faqs = [
  {
    question: "Vad kostar det att renovera ett badrum?",
    answer:
      "Det beror på rummets skick, vilka arbeten som behövs, om installationer ska ändras och vilka material och inredningsdelar du väljer. Vi behöver gå igenom ditt badrum och projektets omfattning för att kunna lämna en relevant offert.",
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer:
      "Tiden påverkas av arbetets omfattning, vilka yrkesmoment som ska samordnas och om något behöver åtgärdas efter rivning. Vi går igenom en preliminär tidplan när projektets förutsättningar är kända.",
  },
  {
    question: "Vad ingår i en badrumsrenovering?",
    answer:
      "Det bestäms i offerten. Ett projekt kan omfatta rivning, uppbyggnad, installationer, tätskikt, ytskikt och montering av inredning. Vi tydliggör vilka delar som ingår och vilka val eller arbeten som hanteras separat.",
  },
  {
    question: "Kan jag använda ROT-avdrag?",
    answer:
      "ROT-avdrag kan vara aktuellt för delar av arbetskostnaden om arbetet och du som beställare uppfyller Skatteverkets villkor. Material och resor ger inte rätt till avdrag. Vi går igenom hur det påverkar offerten och fakturan för just ditt projekt.",
  },
  {
    question: "Behöver jag välja kakel och inredning innan vi börjar?",
    answer:
      "Vissa val behöver göras tidigt för att planering och beställningar ska fungera. Vi går igenom vilka beslut som krävs före start och vilka som kan tas längre fram.",
  },
];

export default function BathroomRenovationPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Badrumsrenovering</p>
          <h1 className="text-[clamp(1.85rem,3.2vw,3.5rem)] font-bold leading-[1.08]">
            Badrumsrenovering i Solna & Stockholm
          </h1>
          <p className="body-lg mt-8">
            Ett badrum ska fungera i vardagen och byggas utifrån rummets
            förutsättningar. Törnros Bygg hjälper dig att planera och genomföra
            badrumsrenoveringar i Solna och Stockholmsområdet, med tydlig
            omfattning och avstämningar längs vägen.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt badrum
            </Link>
            <Link href="/tjanster/renovering/" className="button button-secondary">
              Se även renovering
            </Link>
          </div>
        </div>
        <figure className="surface overflow-hidden">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/blanchevagen/nybyggnation-mikrocementbadrum-danderyd.jpeg"
              alt="Färdigt badrum med mikrocement i nybyggnation på Blanchevägen i Danderyd"
              fill
              priority
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold text-[var(--color-muted)]">
            Badrum i nybyggnation · Blanchevägen, Danderyd
          </figcaption>
        </figure>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Omfattning</p>
            <h2 className="heading-lg">Vad behöver göras i ditt badrum?</h2>
          </div>
          <div>
            <p className="body-lg">
              En badrumsrenovering kan innebära att hela rummet byggs om. I andra
              projekt är det först efter en genomgång av befintligt skick som
              omfattningen går att bestämma. Vi tittar på funktion, material,
              installationer och hur badrummet ska användas innan arbetet planeras.
            </p>
            <p className="body-copy mt-6">
              För en lägenhet kan även bostadsrättsföreningens regler och
              praktiska förutsättningar påverka planeringen. Berätta gärna tidigt
              vad du vet om huset och det befintliga badrummet.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Pris & offert</p>
            <h2 className="heading-lg">Vad påverkar kostnaden?</h2>
            <p className="body-lg mt-6">
              Ett kvadratmeterpris säger sällan tillräckligt om ett badrum.
              Offerten behöver utgå från det arbete som faktiskt ska utföras.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
            {costFactors.map((item) => (
              <article key={item.title} className="bg-[var(--color-surface)] p-7">
                <h3 className="heading-md">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="body-copy mt-8 max-w-3xl">
            Vi skiljer på arbete, material och de val som behöver göras i
            projektet. Om ROT-avdrag är aktuellt bedöms det utifrån gällande
            villkor och den del av kostnaden som avser arbete.
          </p>
        </div>
      </section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-[var(--color-accent-soft)]">Arbetsgång</p>
            <h2 className="heading-lg">Från första genomgång till färdigt badrum</h2>
            <p className="mt-6 max-w-2xl leading-8 text-stone-300">
              Olika moment behöver samordnas i rätt ordning. Tidplanen går att
              bedöma när vi vet vad som ska göras och hur det befintliga rummet ser ut.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-[var(--radius-md)] border border-white/15 bg-white/5 p-6">
                <p className="text-sm font-bold text-[var(--color-accent-soft)]">{item.step}</p>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Material & utförande</p>
            <h2 className="heading-lg">Val som behöver fungera tillsammans</h2>
          </div>
          <div>
            <p className="body-lg">
              Underlag, tätskikt, ytskikt, installationer och inredning behöver
              planeras som delar av samma rum. Valet av exempelvis kakel,
              mikrocement eller annan ytfinish behöver göras med hänsyn till
              konstruktion och tänkt användning.
            </p>
            <p className="body-copy mt-6">
              Vi går igenom vad som ingår i arbetet, vilka material du väljer
              och vilken dokumentation som hör till det utförda projektet.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow mb-4">Solna & Stockholm</p>
          <h2 className="heading-lg">Badrumsprojekt med utgångspunkt i Solna</h2>
          <p className="body-lg mt-6">
            Törnros Bygg utgår från Solna och arbetar med badrumsprojekt i
            Stockholmsområdet. Närheten gör det lättare att stämma av frågor
            om planering, material och utförande under arbetets gång.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Frågor</p>
            <h2 className="heading-lg">Vanliga frågor om badrumsrenovering</h2>
          </div>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex items-center justify-between gap-6 text-left text-xl font-bold">
                  {item.question}
                  <span className="text-2xl text-[var(--color-accent-dark)] group-open:rotate-45">+</span>
                </summary>
                <p className="body-copy mt-4 max-w-3xl">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="body-copy mt-8">Vill du förstå vad som påverkar offerten? Läs guiden <Link href="/byggtips/vad-kostar-badrumsrenovering/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">Vad kostar en badrumsrenovering?</Link></p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg">Planerar du ett nytt badrum?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta var badrummet finns, hur det ser ut i dag och vad du
                vill förändra. Då kan vi ta en första dialog om omfattning och nästa steg.
              </p>
            </div>
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt badrum
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
