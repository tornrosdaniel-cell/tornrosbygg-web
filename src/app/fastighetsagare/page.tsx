import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Byggarbeten för fastighetsägare | Törnros Bygg",
  description: "Törnros Bygg utför renoveringar och byggarbeten för fastighetsägare och bostadsrättsföreningar i Solna och Stockholm.",
  alternates: { canonical: "/fastighetsagare/" },
};

const needs = [
  { title: "Renovering i befintlig fastighet", text: "Arbeten i lägenheter och gemensamma utrymmen behöver planeras med hänsyn till fastigheten och dem som använder den." },
  { title: "Ombyggnad och tillbyggnad", text: "När ytor ska förändras behöver nya byggdelar och befintliga installationer ses i samma projekt." },
  { title: "Mark och yttre delar", text: "Arbeten vid grund och utomhus påverkar åtkomst, användning och återställning av fastighetens ytor." },
];

export default function FastighetsagarePage() {
  return (
    <main>
      <section className="container py-16 md:py-24"><div className="max-w-4xl"><p className="eyebrow mb-6">För fastighetsägare & BRF</p><h1 className="heading-xl">Byggarbeten i fastigheter</h1><p className="body-lg mt-8 max-w-3xl">Fastigheter behöver förändras och underhållas utan att helheten tappas bort. Törnros Bygg arbetar med renovering, ombyggnad och andra byggarbeten i Solna och Stockholmsområdet.</p><Link href="/kontakt" className="button button-primary mt-10">Beskriv ert projekt</Link></div></section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Olika uppdrag</p><h2 className="heading-lg">När fastigheten ska utvecklas</h2><p className="body-lg mt-6">Omfattning och upplägg behöver anpassas efter byggnaden och vilka ytor som berörs.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">{needs.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}</div></div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Inför arbetet</p><h2 className="heading-lg">Ett tydligt uppdrag underlättar</h2></div><div><p className="body-lg">Vi börjar med att gå igenom fastigheten, tillgängliga underlag, arbetets omfattning och praktiska frågor som tillträde och användning under byggtiden.</p><p className="body-copy mt-6">Om något behöver undersökas innan omfattningen kan bestämmas tydliggör vi det i dialogen om nästa steg.</p></div></div></section>
      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Ska ni göra arbeten i en fastighet?</h2><p className="body-lg mt-5">Beskriv byggnaden, behoven och de underlag ni har.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
