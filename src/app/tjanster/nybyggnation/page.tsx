import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nybyggnation i Solna & Stockholm | Törnros Bygg",
  description:
    "Planerar du att bygga nytt? Törnros Bygg hjälper till med nybyggnationsprojekt i Solna och Stockholmsområdet, från projektets förutsättningar till färdiga ytor.",
  alternates: { canonical: "/tjanster/nybyggnation/" },
};

const foundations = [
  {
    title: "Platsen",
    text: "Tomtens förutsättningar påverkar markarbete, grund och hur byggnaden kan placeras. De behöver klarläggas tidigt.",
  },
  {
    title: "Underlagen",
    text: "Ritningar och tekniska handlingar behöver vara tillräckligt tydliga för att arbetet ska kunna planeras och prissättas.",
  },
  {
    title: "Omfattningen",
    text: "Ett uppdrag kan omfatta olika delar av bygget. Vi går igenom vilka arbeten som ingår och vem som ansvarar för respektive del.",
  },
  {
    title: "Besluten",
    text: "Material, installationer och invändiga val påverkar både ordningen i arbetet och slutresultatet. Vissa val behöver göras tidigt.",
  },
];

const process = [
  {
    step: "01",
    title: "Första genomgång",
    text: "Vi går igenom platsen, underlagen och vad du vill bygga för att se vilka frågor som behöver utredas.",
  },
  {
    step: "02",
    title: "Planera omfattningen",
    text: "Projektets delar, gränser och ordning tydliggörs innan arbetet startar.",
  },
  {
    step: "03",
    title: "Bygg och stäm av",
    text: "Mark, grund, stomme och övriga moment samordnas utifrån den överenskomna omfattningen, med avstämningar längs vägen.",
  },
  {
    step: "04",
    title: "Färdigställ",
    text: "När arbetet närmar sig slutet går vi igenom färdigställandet och de delar som hör till vårt uppdrag.",
  },
];

const faqs = [
  {
    question: "Vad påverkar kostnaden för nybyggnation?",
    answer:
      "Tomt, grundläggning, husets utformning, material och omfattningen av vårt uppdrag påverkar kostnaden. Ett relevant pris kräver att vi ser projektets underlag och går igenom vad som faktiskt ska ingå.",
  },
  {
    question: "Kan ni hjälpa till med både mark och byggnad?",
    answer:
      "Ett uppdrag kan omfatta arbete från mark och grund till stomme och invändigt färdigställande. Vi går igenom vilka delar vi kan ta ansvar för i det aktuella projektet och tydliggör dem i offerten.",
  },
  {
    question: "När behöver vi bestämma material och inredning?",
    answer:
      "Vissa val påverkar konstruktion, installationer och beställningstider och behöver därför göras tidigt. Andra kan tas senare. Vi går igenom beslutsordningen när projektets upplägg är känt.",
  },
  {
    question: "Hur lång tid tar det att bygga nytt?",
    answer:
      "Tidplanen beror på förberedelser, projektets storlek, arbetets omfattning och vilka yrkesmoment som behöver samordnas. Vi kan diskutera en preliminär tidplan när underlagen är tillräckligt tydliga.",
  },
];

export default function NewConstructionPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Nybyggnation</p>
          <h1 className="text-[clamp(2.1rem,3.6vw,3.8rem)] font-bold leading-[1.08]">
            Nybyggnation i Solna & Stockholm
          </h1>
          <p className="body-lg mt-8">
            Ett nytt hus börjar långt före det första byggmomentet. Tomt,
            underlag, omfattning och beslut behöver hänga ihop. Törnros Bygg
            arbetar med nybyggnationsprojekt i Solna och Stockholmsområdet
            och hjälper dig att ta projektet från planering till utförande.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt byggprojekt
            </Link>
            <Link href="/tjanster/tillbyggnad/" className="button button-secondary">
              Se även tillbyggnad
            </Link>
          </div>
        </div>
        <figure className="surface overflow-hidden">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg"
              alt="Ljust allrum i nybyggnation på Blanchevägen i Danderyd"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold text-[var(--color-muted)]">
            Nybyggnation · Blanchevägen, Danderyd
          </figcaption>
        </figure>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Utgångspunkt</p>
            <h2 className="heading-lg">Byggprojektet börjar med rätt frågor</h2>
          </div>
          <div>
            <p className="body-lg">
              Nybyggnation innebär många beslut som påverkar varandra. Innan
              arbetet planeras behöver vi förstå platsen, huset du vill skapa
              och vilka handlingar som redan finns.
            </p>
            <p className="body-copy mt-6">
              Vi går igenom förutsättningarna för det enskilda projektet och
              tydliggör vilka delar vi kan hjälpa till med. Då blir det lättare
              att se vad som behöver göras härnäst.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Planering</p>
            <h2 className="heading-lg">Delar som behöver fungera tillsammans</h2>
            <p className="body-lg mt-6">
              Från mark och grund till invändiga rum påverkar tidiga beslut
              arbetet längre fram. Här börjar vår genomgång.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
            {foundations.map((item) => (
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
            <h2 className="heading-lg">Från underlag till färdigställda ytor</h2>
            <p className="mt-6 max-w-2xl leading-8 text-stone-300">
              Stegen anpassas efter uppdraget och vilket underlag som finns
              när vi kommer in i projektet.
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
            <p className="eyebrow mb-4">Blanchevägen i Danderyd</p>
            <h2 className="heading-lg">Ett färdigt rum från ett verkligt projekt</h2>
          </div>
          <div>
            <p className="body-lg">
              Allrummet på Blanchevägen är en del av ett nybyggnationsprojekt
              där markarbete och husets färdigställande hörde ihop. De stora
              glaspartierna och takfönstren visar hur ljus och planering
              påverkar upplevelsen av den färdiga ytan.
            </p>
            <p className="body-copy mt-6">
              Varje nybyggnation har sina egna förutsättningar. Vi börjar med
              att gå igenom vad som gäller för din tomt och det hus du planerar.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow mb-4">Solna & Stockholm</p>
          <h2 className="heading-lg">Nybyggnation med utgångspunkt i Solna</h2>
          <p className="body-lg mt-6">
            Törnros Bygg utgår från Solna och arbetar med byggprojekt i
            Stockholmsområdet. Närhet till platsen gör det enklare att
            följa arbetet och stämma av beslut under projektets gång.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Frågor</p>
            <h2 className="heading-lg">Vanliga frågor om nybyggnation</h2>
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
              <h2 className="heading-lg">Planerar du att bygga nytt?</h2>
              <p className="body-lg mt-5 max-w-2xl">
                Berätta om tomten, vad du vill bygga och vilka ritningar eller
                underlag du har. Då kan vi ta en första dialog om nästa steg.
              </p>
            </div>
            <Link href="/kontakt" className="button button-primary">
              Berätta om ditt byggprojekt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
