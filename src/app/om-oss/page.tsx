import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Törnros Bygg | Byggföretag i Solna",
  description: "Lär känna Törnros Bygg och hur vi arbetar med renovering, tillbyggnad och nybyggnation i Stockholmsområdet.",
  alternates: { canonical: "/om-oss/" },
};

const principles = [
  { title: "Utgå från platsen", text: "Varje fastighet och varje befintlig byggnad har sina egna förutsättningar. De behöver förstås innan upplägget bestäms." },
  { title: "Gör omfattningen tydlig", text: "Vi går igenom vad som ska göras, vilka beslut som återstår och var olika delar av ett projekt möts." },
  { title: "Stäm av under arbetet", text: "När förutsättningar ändras eller nya val behöver göras är löpande avstämningar viktiga för arbetets fortsättning." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="container py-16 md:py-24"><div className="max-w-4xl"><p className="eyebrow mb-6">Om oss</p><h1 className="heading-xl">Törnros Bygg</h1><p className="body-lg mt-8 max-w-3xl">Vi arbetar med byggprojekt i Solna och Stockholmsområdet. Uppdragen omfattar renovering, tillbyggnad, nybyggnation och markarbeten för privatpersoner och fastighetsägare.</p></div></section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Arbetssätt</p><h2 className="heading-lg">Byggprojekt börjar med att förstå helheten</h2><p className="body-lg mt-6">Vad som ska byggas är bara en del av bilden. Befintliga förhållanden, praktisk åtkomst och hur arbetet påverkar dem som använder fastigheten spelar också roll.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">{principles.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}</div></div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Verkliga arbeten</p><h2 className="heading-lg">Se vad vi har byggt</h2></div><div><p className="body-lg">Projekt visar mer än allmänna löften. Se exempel på renovering i Solna, tillbyggnad och nybyggnation.</p><Link href="/projekt" className="button button-primary mt-8">Se våra projekt</Link></div></div></section>
      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du ett projekt i åtanke?</h2><p className="body-lg mt-5">Beskriv vad du vill göra, så pratar vi om nästa steg.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
