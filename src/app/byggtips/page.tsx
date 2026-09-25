import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Byggtips inför ditt projekt | Törnros Bygg",
  description: "Praktiska frågor att tänka igenom inför renovering, tillbyggnad och markarbeten.",
  alternates: { canonical: "/byggtips/" },
};

const tips = [
  { title: "Börja med vad du vill förändra", text: "Beskriv hur ytan ska användas när arbetet är klart. Det hjälper när omfattning och prioriteringar ska diskuteras, särskilt om flera rum eller byggdelar berörs." },
  { title: "Samla det som redan finns", text: "Ritningar, foton, mått och information om tidigare arbeten gör det lättare att förstå förutsättningarna. Saknas underlag kan det behöva undersökas på plats." },
  { title: "Skilj på önskemål och beslut", text: "Material, funktion och detaljer påverkar både tid och kostnad. Markera vad som är bestämt och vad som fortfarande är öppet när du ber om en offert." },
  { title: "Tänk på vardagen under bygget", text: "Tillträde, förvaring och vilka delar av hemmet eller fastigheten som kan användas under arbetet är praktiska frågor att ta upp tidigt." },
  { title: "Räkna med att befintliga förhållanden kan överraska", text: "Vid renovering och markarbeten syns inte allt innan arbetet börjar. Bestäm hur nya förutsättningar och ändringar ska stämmas av." },
  { title: "Be om tydlig avgränsning", text: "En offert är lättare att förstå när det framgår vilka arbeten som ingår, vilka val som återstår och hur återställning eller färdigställande är tänkt." },
];

export default function ByggtipsPage() {
  return (
    <main>
      <section className="container py-16 md:py-24"><div className="max-w-4xl"><p className="eyebrow mb-6">Byggtips</p><h1 className="heading-xl">Inför ditt byggprojekt</h1><p className="body-lg mt-8 max-w-3xl">Bra förberedelser gör det enklare att prata om rätt arbete. Här är några frågor att gå igenom inför en renovering, tillbyggnad eller ett arbete på tomten.</p></div></section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">{tips.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-8"><h2 className="heading-md">{item.title}</h2><p className="body-copy mt-4">{item.text}</p></article>)}</div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Nästa steg</p><h2 className="heading-lg">Ta med dina frågor till samtalet</h2></div><div><p className="body-lg">Du behöver inte ha alla svar klara. Beskriv vad du vill göra och vilka förutsättningar du känner till, så kan vi gå igenom vad som behöver redas ut.</p><Link href="/kontakt" className="button button-primary mt-8">Kontakta Törnros Bygg</Link></div></div></section>
    </main>
  );
}
