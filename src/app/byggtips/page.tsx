import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Byggtips & guider inför ditt projekt | Törnros Bygg",
  description:
    "Guider om renovering, badrum, dränering, byggofferter, tillbyggnad, ändringar och dokumentation inför ditt byggprojekt.",
  alternates: { canonical: "/byggtips/" },
};

const guides = [
  {
    eyebrow: "Renovering",
    title: "Planera en renovering som håller ihop",
    text: "Vad behöver du bestämma, vilka underlag hjälper och hur får du grepp om arbetets omfattning?",
    href: "/byggtips/planera-renovering/",
  },
  {
    eyebrow: "Offert",
    title: "Jämför byggofferter med rätt frågor",
    text: "En offert är lättare att bedöma när innehåll, avgränsningar och öppna val går att jämföra.",
    href: "/byggtips/jamfora-bygg-offerter/",
  },
  {
    eyebrow: "Tillbyggnad",
    title: "Förbered en tillbyggnad vid ett befintligt hus",
    text: "Tänk igenom användning, anslutningen till huset, marken och vardagen under arbetet.",
    href: "/byggtips/forbereda-tillbyggnad/",
  },
  {
    eyebrow: "Badrum",
    title: "Vad kostar en badrumsrenovering?",
    text: "Förstå vilka arbeten och val som påverkar offerten för just ditt badrum.",
    href: "/byggtips/vad-kostar-badrumsrenovering/",
  },
  {
    eyebrow: "Renovering",
    title: "Totalrenovering eller delrenovering?",
    text: "Se när ett avgränsat arbete räcker och när flera rum behöver planeras ihop.",
    href: "/byggtips/totalrenovering-eller-delrenovering/",
  },
  {
    eyebrow: "Dränering",
    title: "Vad bör undersökas inför en dränering?",
    text: "Gå igenom fukttecken, huset, marken och vad som behöver återställas.",
    href: "/byggtips/infor-dranering/",
  },
  {
    eyebrow: "Renovering",
    title: "Ändringar och tillägg under en renovering",
    text: "Så stämmer du av nya önskemål och oväntade förutsättningar med tydliga beslut om omfattning, pris och tid.",
    href: "/byggtips/andringar-tillaggsarbeten-renovering/",
  },
  {
    eyebrow: "Dokumentation",
    title: "Vad bör du dokumentera i ett byggprojekt?",
    text: "Samla rätt underlag före, under och efter arbetet, från offert och foton till ändringar och överlämning.",
    href: "/byggtips/dokumentera-byggprojekt/",
  },
];

export default function ByggtipsPage() {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Byggtips</p>
          <h1 className="heading-xl">Guider inför ditt byggprojekt</h1>
          <p className="body-lg mt-8 max-w-3xl">Det är enklare att fatta beslut när du vet vilka frågor som behöver besvaras. Här hittar du vägledning för planering, offert och byggstart.</p>
        </div>
      </section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-6 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="surface flex flex-col p-8">
              <p className="eyebrow mb-5">{guide.eyebrow}</p>
              <h2 className="heading-md">{guide.title}</h2>
              <p className="body-copy mt-5 flex-1">{guide.text}</p>
              <Link href={guide.href} className="mt-8 inline-flex text-sm font-bold text-[var(--color-accent-dark)] underline underline-offset-4">Läs guiden</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="eyebrow mb-4">Projektets ordning</p><h2 className="heading-lg">Samla besluten på ett ställe</h2></div>
          <div>
            <p className="body-lg">Ritningar, offert, val och ändringar blir lättare att följa när de dokumenteras under projektets gång. Vi förespråkar tydlig kommunikation mellan beställare och utförare.</p>
            <p className="body-copy mt-6">Vår <Link href="/byggtips/dokumentera-byggprojekt/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">guide till projektdokumentation</Link> visar vad som är bra att samla före, under och efter byggarbetet.</p>
          </div>
        </div>
      </section>
      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Vill du diskutera ditt projekt?</h2><p className="body-lg mt-5">Beskriv vad du vill göra och vilka underlag du redan har.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
