import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dränering i Solna & Stockholm | Törnros Bygg",
  description:
    "Dränering runt husgrunder i Solna och Stockholmsområdet. Läs om platsbesök, förutsättningar, arbetets omfattning och återställning.",
  alternates: { canonical: "/tjanster/dranering/" },
};

const topics = [
  {
    title: "Förstå varför åtgärden behövs",
    text: "Fukt eller vatten vid en grund kan ha flera orsaker. Befintliga handlingar, synliga tecken och markens förutsättningar ger ett första underlag för att diskutera rätt omfattning.",
  },
  {
    title: "Planera arbetet runt huset",
    text: "Schakt längs en byggnad kräver hänsyn till grundens utformning, ledningar, åtkomst och sådant som redan finns på tomten.",
  },
  {
    title: "Tänk på ytorna efteråt",
    text: "Uppfarter, gångar, planteringar och andra berörda ytor behöver tas med när vi går igenom vad som ska återställas.",
  },
];

const scope = [
  {
    title: "Grundens utformning",
    text: "Hur huset är byggt påverkar vilka delar som går att komma åt och hur arbetet vid grundmuren behöver planeras.",
  },
  {
    title: "Befintlig avvattning",
    text: "Vi går igenom vad som är känt om dränering, dagvatten och anslutningar innan en lösning och avgränsning bestäms.",
  },
  {
    title: "Schakt och borttransport",
    text: "Markmaterial, djup och utrymme för maskiner påverkar utförande, logistik och hur mycket material som behöver hanteras.",
  },
  {
    title: "Återställning av tomten",
    text: "Vi tydliggör vilka markytor och anläggningar som ingår i återställningen efter schaktarbetet.",
  },
];

const steps = [
  { number: "01", title: "Gå igenom situationen", text: "Du beskriver problemen och visar eventuella underlag om hus, grund och befintliga markarbeten." },
  { number: "02", title: "Bedöm platsen", text: "Vi tittar på huset, marken, åtkomsten och vilka ytor som skulle påverkas." },
  { number: "03", title: "Bestäm omfattningen", text: "Vi går igenom föreslagna arbeten, avgränsning och återställning innan arbetet påbörjas." },
  { number: "04", title: "Utför och följ upp", text: "Arbetet genomförs enligt överenskommen omfattning och förändrade förutsättningar stäms av." },
];

const faqs = [
  { question: "Vad kostar en dränering?", answer: "Priset påverkas av husets grund, hur mycket som behöver grävas, markförhållanden, åtkomst, befintliga ledningar och återställning. En offert behöver utgå från det aktuella huset och platsen." },
  { question: "Hur vet jag om huset behöver dräneras?", answer: "Fukttecken bör undersökas innan en åtgärd bestäms eftersom orsakerna kan skilja sig åt. Vi kan gå igenom de synliga förutsättningarna och diskutera vilka underlag eller ytterligare undersökningar som behövs." },
  { question: "Måste man gräva runt hela huset?", answer: "Det beror på problemet, grundens utformning och vilken åtgärd som behövs. Omfattningen avgörs efter att huset och tillgängliga underlag har gåtts igenom." },
  { question: "Vad händer med uppfart och planteringar?", answer: "Ytor som ligger i vägen för schakt påverkas av arbetet. Vi går igenom i förväg vad som behöver tas bort och vad som ska återställas inom uppdraget." },
];

export default function DraneringPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Dränering & arbeten vid grund</p>
          <h1 className="text-[clamp(2.2rem,4vw,4.25rem)] font-bold leading-[1.08]">Dränering i Solna & Stockholm</h1>
          <p className="body-lg mt-8">När mark och vatten påverkar huset är det viktigt att förstå förutsättningarna innan arbetet börjar. Törnros Bygg hjälper till att planera och utföra dräneringsarbeten runt husgrunder med hänsyn till grund, mark, ledningar och ytorna runt huset.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/kontakt" className="button button-primary">Berätta om ditt hus</Link><Link href="/tjanster/markarbeten/" className="button button-secondary">Se även markarbeten</Link></div>
        </div>
        <aside className="flex min-h-[28rem] flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-ink)] p-8 text-[var(--color-surface)] md:p-12">
          <p className="eyebrow !text-[var(--color-accent-soft)]">Börja med förutsättningarna</p>
          <div><p className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1]">Rätt omfattning börjar med en genomgång av huset.</p><p className="mt-7 max-w-md leading-8 text-stone-300">Grund, marknivåer och befintlig avvattning avgör vilka frågor som behöver redas ut inför ett dräneringsarbete.</p></div>
        </aside>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Utgångspunkt</p><h2 className="heading-lg">Mer än ett arbete under mark</h2><p className="body-lg mt-6">En dränering berör både huset och ytorna runt omkring. Därför behöver flera delar ses tillsammans.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">{topics.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}</div></div></section>

      <section className="section"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Omfattning</p><h2 className="heading-lg">Vad påverkar upplägget?</h2><p className="body-lg mt-6">En offert blir relevant först när vi vet vad arbetet faktiskt behöver omfatta.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">{scope.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}</div></div></section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4 !text-[var(--color-accent-soft)]">Arbetsgång</p><h2 className="heading-lg">Från första genomgång till återställd mark</h2><p className="mt-6 max-w-2xl leading-8 text-stone-300">Vi planerar arbetet utifrån husets förutsättningar och det uppdrag vi kommer överens om.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-4">{steps.map((item) => <article key={item.number} className="rounded-[var(--radius-md)] border border-white/15 bg-white/5 p-6"><p className="text-sm font-bold text-[var(--color-accent-soft)]">{item.number}</p><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-4 leading-7 text-stone-300">{item.text}</p></article>)}</div></div></section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20"><div className="container max-w-4xl"><p className="eyebrow mb-4">Solna & Stockholm</p><h2 className="heading-lg">Dränering med utgångspunkt i Solna</h2><p className="body-lg mt-6">Törnros Bygg utgår från Solna och arbetar med byggprojekt i Stockholmsområdet. Vid dränering tar vi hänsyn till huset, tomten och vilka ytor som behöver återställas.</p></div></section>

      <section className="section"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Frågor</p><h2 className="heading-lg">Vanliga frågor om dränering</h2></div><div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">{faqs.map((item) => <details key={item.question} className="group py-6"><summary className="flex items-center justify-between gap-6 text-left text-xl font-bold">{item.question}<span className="text-2xl text-[var(--color-accent-dark)] group-open:rotate-45">+</span></summary><p className="body-copy mt-4 max-w-3xl">{item.answer}</p></details>)}</div></div></section>

      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Behöver du gå igenom husets dränering?</h2><p className="body-lg mt-5 max-w-2xl">Berätta vad du har märkt, hur huset är byggt och vilka underlag som finns. Då kan vi prata om vad som behöver undersökas och vilket nästa steg som är rimligt.</p></div><Link href="/kontakt" className="button button-primary">Berätta om ditt hus</Link></div></div></section>
    </main>
  );
}
