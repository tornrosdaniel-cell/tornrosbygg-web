import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attefallshus i Solna & Stockholm | Törnros Bygg",
  description:
    "Planerar du ett Attefallshus eller en annan komplementbyggnad? Törnros Bygg hjälper till att planera och bygga utifrån tomt, användning och projektets omfattning.",
  alternates: { canonical: "/tjanster/attefallshus/" },
};

const uses = [
  {
    title: "Extra plats för vardagen",
    text: "En fristående byggnad kan skapa utrymme för gäster eller andra behov utan att ändra det befintliga huset.",
  },
  {
    title: "Arbete eller hobby",
    text: "Hur byggnaden ska användas påverkar planlösning, ljus, förvaring och vilka installationer som behöver planeras.",
  },
  {
    title: "Förråd och funktion",
    text: "En enklare byggnad för förvaring behöver ett annat upplägg än en byggnad som ska användas regelbundet.",
  },
];

const considerations = [
  {
    title: "Placering på tomten",
    text: "Mark, åtkomst och relationen till det befintliga huset påverkar var byggnaden kan fungera i praktiken.",
  },
  {
    title: "Grund och anslutningar",
    text: "Grundläggning och eventuella anslutningar behöver utredas utifrån platsen och hur byggnaden ska användas.",
  },
  {
    title: "Omfattning och färdig nivå",
    text: "Vi går igenom om uppdraget gäller mark och stomme eller även invändiga ytor, installationer och färdigställande.",
  },
  {
    title: "Handlingar och beslut",
    text: "Ritningar och andra underlag behöver stämma med det som ska byggas. Vi går igenom vad som finns och vilka frågor som återstår före start.",
  },
];

const process = [
  {
    step: "01",
    title: "Beskriv behovet",
    text: "Vi pratar om hur byggnaden ska användas och tittar på tomten och befintliga underlag.",
  },
  {
    step: "02",
    title: "Tydliggör omfattningen",
    text: "Placering, mark, grund, byggnad och färdig nivå gås igenom innan arbetet planeras.",
  },
  {
    step: "03",
    title: "Bygg och stäm av",
    text: "Arbetet genomförs enligt överenskommen omfattning med avstämningar när beslut eller förutsättningar förändras.",
  },
  {
    step: "04",
    title: "Gå igenom resultatet",
    text: "Vi går igenom byggnaden och det arbete som ingår i uppdraget när det är färdigt.",
  },
];

const faqs = [
  {
    question: "Vad kostar det att bygga ett Attefallshus?",
    answer:
      "Kostnaden beror på tomt och grund, byggnadens utformning, installationer, material och hur färdig byggnaden ska vara. Vi behöver gå igenom underlag och omfattning för att kunna lämna en relevant offert.",
  },
  {
    question: "Kan ni hjälpa till med mark och grund?",
    answer:
      "Ja, ett projekt kan omfatta markarbete och grundläggning tillsammans med själva byggnaden. Vi tydliggör vilka delar som ingår i det aktuella uppdraget.",
  },
  {
    question: "Behöver användningen vara bestämd från början?",
    answer:
      "Det hjälper att veta hur du vill använda byggnaden. Det påverkar planlösning, installationer och vilka val som behöver göras innan arbetet startar.",
  },
  {
    question: "Hur lång tid tar projektet?",
    answer:
      "Tiden påverkas av markförhållanden, förberedelser och hur mycket av byggnaden som ska färdigställas. Vi går igenom en preliminär tidplan när projektets förutsättningar är kända.",
  },
];

export default function AttefallshusPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Attefallshus & komplementbyggnader</p>
          <h1 className="text-[clamp(2.2rem,4vw,4.25rem)] font-bold leading-[1.08]">
            Attefallshus i Solna & Stockholm
          </h1>
          <p className="body-lg mt-8">
            En extra byggnad på tomten kan ge plats åt något som saknas i
            huset. Törnros Bygg hjälper dig att planera och bygga utifrån
            platsen, hur byggnaden ska användas och vilken nivå av
            färdigställande du behöver.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om din byggnad
            </Link>
            <Link href="/tjanster/nybyggnation/" className="button button-secondary">
              Se även nybyggnation
            </Link>
          </div>
        </div>
        <aside className="flex min-h-[28rem] flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-ink)] p-8 text-[var(--color-surface)] md:p-12">
          <p className="eyebrow !text-[var(--color-accent-soft)]">Från idé till användbar yta</p>
          <div>
            <p className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1]">
              Börja med vad byggnaden ska göra för dig.
            </p>
            <p className="mt-7 max-w-md leading-8 text-stone-300">
              Användningen styr många av de praktiska valen: placering, planlösning,
              grund, installationer och färdigställande.
            </p>
          </div>
        </aside>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Användning</p>
            <h2 className="heading-lg">Olika behov kräver olika lösningar</h2>
            <p className="body-lg mt-6">
              Börja med att bestämma vad den nya byggnaden ska användas till.
              Då kan vi prata om vilka rum, funktioner och arbeten som behövs.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {uses.map((item) => (
              <article key={item.title} className="bg-[var(--color-surface)] p-7">
                <h3 className="heading-md">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Förutsättningar</p>
            <h2 className="heading-lg">Frågor att reda ut före byggstart</h2>
            <p className="body-lg mt-6">
              Det är tomten och uppdraget som avgör vilka förberedelser
              som behövs. Vi tar en sak i taget och tydliggör omfattningen.
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
            <h2 className="heading-lg">Från behov till färdig byggnad</h2>
            <p className="mt-6 max-w-2xl leading-8 text-stone-300">
              Upplägget anpassas efter platsen och vilka delar av projektet
              som ingår i vårt uppdrag.
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

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow mb-4">Solna & Stockholm</p>
          <h2 className="heading-lg">Komplementbyggnader med utgångspunkt i Solna</h2>
          <p className="body-lg mt-6">
            Törnros Bygg utgår från Solna och arbetar med byggprojekt i
            Stockholmsområdet. För en fristående byggnad börjar vi med
            platsens förutsättningar och det du vill använda byggnaden till.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Frågor</p>
            <h2 className="heading-lg">Vanliga frågor om Attefallshus</h2>
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
              <h2 className="heading-lg">Har du plats för en ny byggnad?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta hur du vill använda den, var på tomten den ska stå
                och vilka underlag du redan har. Då kan vi prata om nästa steg.
              </p>
            </div>
            <Link href="/kontakt" className="button button-primary">
              Berätta om din byggnad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
