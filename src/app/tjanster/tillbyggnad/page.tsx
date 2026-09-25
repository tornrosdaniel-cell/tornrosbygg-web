import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tillbyggnad i Solna & Stockholm | Törnros Bygg",
  description:
    "Planerar du en tillbyggnad? Törnros Bygg hjälper till med planering och byggarbete för tillbyggnader i Solna och Stockholmsområdet.",
  alternates: { canonical: "/tjanster/tillbyggnad/" },
};

const considerations = [
  {
    title: "Huset som redan finns",
    text: "Den nya delen behöver möta husets konstruktion, nivåer och uttryck. Vi börjar med att gå igenom vad som finns på plats.",
  },
  {
    title: "Den nya ytan",
    text: "Hur rummen ska användas påverkar planlösning, ljusinsläpp och hur den nya delen kopplas till resten av huset.",
  },
  {
    title: "Mark och anslutningar",
    text: "Markförhållanden, grund och anslutningar till befintliga installationer behöver klarläggas för det aktuella projektet.",
  },
  {
    title: "Beslut före byggstart",
    text: "Ritningar, eventuella tillstånd, materialval och arbetets omfattning behöver vara tillräckligt tydliga för att planera genomförandet.",
  },
];

const process = [
  {
    step: "01",
    title: "Gå igenom huset",
    text: "Vi pratar om behovet av ny yta och tittar på befintligt hus och platsens förutsättningar.",
  },
  {
    step: "02",
    title: "Avgränsa projektet",
    text: "Vi går igenom ritningsunderlag, omfattning och vilka frågor som behöver lösas före byggstart.",
  },
  {
    step: "03",
    title: "Bygg och samordna",
    text: "Mark, grund, stomme och färdigställande planeras i den ordning som projektet kräver, med avstämningar längs vägen.",
  },
  {
    step: "04",
    title: "Gå igenom resultatet",
    text: "När arbetet är färdigt går vi igenom tillbyggnaden och de delar som omfattas av uppdraget.",
  },
];

const faqs = [
  {
    question: "Vad kostar en tillbyggnad?",
    answer:
      "Kostnaden beror bland annat på storlek, mark och grund, anslutningen till det befintliga huset och hur den nya ytan ska färdigställas. Vi behöver se underlag och omfattning innan vi kan bedöma ett enskilt projekt.",
  },
  {
    question: "Hur lång tid tar det att bygga till?",
    answer:
      "Tidplanen påverkas av projektets storlek, förberedelser, materialval och vilka arbeten som ska utföras i huset under tiden. Vi går igenom en preliminär plan när förutsättningarna är kända.",
  },
  {
    question: "Kan ni hjälpa till med både grund och färdigställande?",
    answer:
      "Ett uppdrag kan omfatta flera delar, från mark och grund till stomme och invändigt arbete. Vi tydliggör i offerten vad som ingår i just ditt projekt.",
  },
  {
    question: "Vad behöver vara klart innan arbetet börjar?",
    answer:
      "Det beror på tillbyggnaden. Ritningar, nödvändiga beslut och val som styr konstruktion och beställningar behöver gås igenom före byggstart. Vi stämmer av vad som saknas när vi har sett projektet.",
  },
];

export default function ExtensionPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Tillbyggnad</p>
          <h1 className="text-[clamp(2.2rem,4vw,4.25rem)] font-bold leading-[1.08]">
            Tillbyggnad i Solna & Stockholm
          </h1>
          <p className="body-lg mt-8">
            Mer plats hemma börjar med att förstå huset som redan finns.
            Törnros Bygg hjälper dig att planera och genomföra tillbyggnader
            i Solna och Stockholmsområdet, från de första praktiska frågorna
            till färdiga ytor.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om din tillbyggnad
            </Link>
            <Link href="/tjanster/renovering/" className="button button-secondary">
              Se även renovering
            </Link>
          </div>
        </div>
        <figure className="surface overflow-hidden">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/sjovagen/tillbyggnad-solna.jpeg"
              alt="Färdig tillbyggnad med terrass på Sjövägen i Solna"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold text-[var(--color-muted)]">
            Tillbyggnad · Sjövägen, Solna
          </figcaption>
        </figure>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Utgångspunkt</p>
            <h2 className="heading-lg">Ny yta som hör ihop med huset</h2>
          </div>
          <div>
            <p className="body-lg">
              En tillbyggnad är mer än en ny huskropp. Den ska fungera med
              befintliga rum, entréer och flöden samtidigt som konstruktionen
              möter det som redan är byggt.
            </p>
            <p className="body-copy mt-6">
              Det kan handla om ett större vardagsrum, en ny del för familjen
              eller fler användbara ytor. Omfattningen bestäms av huset, platsen
              och vad du vill kunna göra i den nya delen.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Planering</p>
            <h2 className="heading-lg">Fyra frågor att lösa tidigt</h2>
            <p className="body-lg mt-6">
              När förutsättningarna blir tydliga är det lättare att avgränsa
              arbetet och ta fram ett relevant upplägg.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
            {considerations.map((item) => (
              <article key={item.title} className="bg-[var(--color-surface)] p-7">
                <h3 className="heading-md">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-[var(--color-accent-soft)]">Arbetsgång</p>
            <h2 className="heading-lg">Från befintligt hus till ny del</h2>
            <p className="mt-6 max-w-2xl leading-8 text-stone-300">
              Varje hus kräver sin planering. Stegen nedan visar hur vi tar oss
              från den första genomgången till ett färdigt arbete.
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
            <p className="eyebrow mb-4">Sjövägen i Solna</p>
            <h2 className="heading-lg">En tillbyggnad att utgå från</h2>
          </div>
          <div>
            <p className="body-lg">
              Bilden ovan visar en tillbyggnad på Sjövägen i Solna med nya
              ytor och terrass i anslutning till huset. Projektet ger ett
              konkret exempel på hur ny boyta kan bli en del av ett befintligt hem.
            </p>
            <p className="body-copy mt-6">
              Din tillbyggnad får sina egna förutsättningar. Vi går gärna igenom
              hur huset och tomten påverkar planeringen i en första dialog.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow mb-4">Solna & Stockholm</p>
          <h2 className="heading-lg">Tillbyggnader med utgångspunkt i Solna</h2>
          <p className="body-lg mt-6">
            Törnros Bygg utgår från Solna och arbetar med tillbyggnader i
            Stockholmsområdet. Närhet till projektet underlättar avstämningar
            när befintligt hus och ny byggdel ska mötas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Frågor</p>
            <h2 className="heading-lg">Vanliga frågor om tillbyggnad</h2>
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
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg">Funderar du på att bygga till?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta om huset, vilken yta du behöver och vilka underlag
                som redan finns. Då kan vi ta en första dialog om projektet.
              </p>
            </div>
            <Link href="/kontakt" className="button button-primary">
              Berätta om din tillbyggnad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
