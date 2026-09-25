import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markarbeten i Solna & Stockholm | Törnros Bygg",
  description:
    "Markarbeten inför byggnation och arbeten runt hus och fastighet. Törnros Bygg går igenom markens förutsättningar, åtkomst och arbetets omfattning.",
  alternates: { canonical: "/tjanster/markarbeten/" },
};

const areas = [
  {
    title: "Mark inför grundläggning",
    text: "Inför en ny byggnad eller tillbyggnad behöver schakt, nivåer och anslutningen till befintlig mark planeras tillsammans med det som ska byggas.",
  },
  {
    title: "Ytor runt huset",
    text: "Gångar, uppfarter och andra markytor behöver anpassas till platsens lutning, användning och befintliga konstruktioner.",
  },
  {
    title: "Schakt och ledningsarbeten",
    text: "Arbeten under mark kräver koll på befintliga ledningar, åtkomst och vad som behöver återställas när arbetet är klart.",
  },
];

const considerations = [
  {
    title: "Markens förutsättningar",
    text: "Jord, berg, befintliga konstruktioner och vatten påverkar metod och omfattning. Underlagen avgör vad som går att planera före start.",
  },
  {
    title: "Åtkomst och logistik",
    text: "Maskiner, material och borttransport behöver fungera på den faktiska platsen. Trånga passager kan påverka både upplägg och tid.",
  },
  {
    title: "Anslutning till huset",
    text: "Marknivåer och färdiga ytor behöver samspela med huset, entréer och andra delar av fastigheten.",
  },
  {
    title: "Avgränsning och återställning",
    text: "Vi går igenom vilka ytor som berörs och vad som ska ingå i återställningen, så att uppdragets omfattning är tydlig.",
  },
];

const steps = [
  { number: "01", title: "Beskriv arbetet", text: "Vi går igenom vad markarbetet ska möjliggöra och vilka underlag som finns." },
  { number: "02", title: "Undersök platsen", text: "Förutsättningar, åtkomst och berörda ytor bedöms inför planering och offert." },
  { number: "03", title: "Utför arbetet", text: "Schakt och övriga moment genomförs enligt överenskommen omfattning, med avstämningar vid nya förutsättningar." },
  { number: "04", title: "Avsluta ytorna", text: "Vi går igenom arbetet och den återställning som ingår i uppdraget." },
];

const faqs = [
  { question: "Vad kostar markarbete?", answer: "Kostnaden beror bland annat på markens beskaffenhet, mängden schakt, borttransport, åtkomst och hur ytorna ska färdigställas. Ett platsbesök och relevanta underlag ger bättre grund för en offert." },
  { question: "Kan ni göra markarbeten inför en tillbyggnad?", answer: "Ja, markarbete kan vara en del av ett större byggprojekt. Vi går igenom gränsen mellan mark, grund och byggnad så att de olika momenten hänger ihop." },
  { question: "Vad händer om förutsättningarna i marken skiljer sig från planen?", answer: "När något som inte framgår av underlagen upptäcks behöver arbetet stämmas av. Vi går igenom vad det betyder för utförande, tid och omfattning innan nästa steg bestäms." },
  { question: "Ingår återställning av markytorna?", answer: "Det beror på uppdraget. Vi tydliggör före start vilka ytor som ska återställas och till vilken nivå." },
];

export default function MarkarbetenPage() {
  return (
    <main>
      <section className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Mark & grundförberedelser</p>
          <h1 className="text-[clamp(2.2rem,4vw,4.25rem)] font-bold leading-[1.08]">Markarbeten i Solna & Stockholm</h1>
          <p className="body-lg mt-8">Ett genomtänkt markarbete börjar med platsen. Törnros Bygg hjälper till med markarbeten inför byggnation och runt befintliga hus, med hänsyn till åtkomst, markförhållanden och det som ska göras ovanför mark.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="button button-primary">Berätta om ditt markprojekt</Link>
            <Link href="/tjanster/dranering/" className="button button-secondary">Se även dränering</Link>
          </div>
        </div>
        <aside className="flex min-h-[28rem] flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-ink)] p-8 text-[var(--color-surface)] md:p-12">
          <p className="eyebrow !text-[var(--color-accent-soft)]">Under ytan</p>
          <div>
            <p className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1]">Det som görs i marken påverkar allt som kommer efter.</p>
            <p className="mt-7 max-w-md leading-8 text-stone-300">Därför behöver nivåer, grund, ledningar och färdiga ytor tänkas ihop redan när projektet planeras.</p>
          </div>
        </aside>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl"><p className="eyebrow mb-4">Uppdrag</p><h2 className="heading-lg">Markarbeten för olika behov</h2><p className="body-lg mt-6">Arbetets omfattning beror på vad platsen ska användas till och hur den ser ut i dag.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {areas.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Planering</p><h2 className="heading-lg">Det här behöver vi gå igenom</h2><p className="body-lg mt-6">Markarbeten kan se enkla ut på en ritning men påverkas av förhållandena på plats.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">{considerations.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}</div></div></section>

      <section className="section bg-[var(--color-ink)] text-[var(--color-surface)]"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4 !text-[var(--color-accent-soft)]">Arbetsgång</p><h2 className="heading-lg">Från platsbesök till färdig mark</h2><p className="mt-6 max-w-2xl leading-8 text-stone-300">Upplägget anpassas till platsen och den omfattning vi kommer överens om.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-4">{steps.map((item) => <article key={item.number} className="rounded-[var(--radius-md)] border border-white/15 bg-white/5 p-6"><p className="text-sm font-bold text-[var(--color-accent-soft)]">{item.number}</p><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-4 leading-7 text-stone-300">{item.text}</p></article>)}</div></div></section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-20"><div className="container max-w-4xl"><p className="eyebrow mb-4">Solna & Stockholm</p><h2 className="heading-lg">Markarbeten med utgångspunkt i Solna</h2><p className="body-lg mt-6">Törnros Bygg utgår från Solna och arbetar med byggprojekt i Stockholmsområdet. För markarbeten börjar vi med att förstå platsen, åtkomsten och hur den färdiga ytan ska användas.</p></div></section>

      <section className="section"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Frågor</p><h2 className="heading-lg">Vanliga frågor om markarbeten</h2></div><div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">{faqs.map((item) => <details key={item.question} className="group py-6"><summary className="flex items-center justify-between gap-6 text-left text-xl font-bold">{item.question}<span className="text-2xl text-[var(--color-accent-dark)] group-open:rotate-45">+</span></summary><p className="body-copy mt-4 max-w-3xl">{item.answer}</p></details>)}</div></div></section>

      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Vad vill du göra med marken?</h2><p className="body-lg mt-5 max-w-2xl">Beskriv platsen och vad du vill bygga eller förändra. Har du ritningar eller andra underlag får du gärna ta med dem när vi pratar om nästa steg.</p></div><Link href="/kontakt" className="button button-primary">Berätta om ditt projekt</Link></div></div></section>
    </main>
  );
}
