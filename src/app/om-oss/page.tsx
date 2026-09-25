import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Törnros Bygg | Byggprojekt med utgångspunkt i Solna",
  description:
    "Lär känna Törnros Bygg och Daniel Törnros. Se projekt inom renovering, tillbyggnad och nybyggnation i Solna och Stockholmsområdet.",
  alternates: { canonical: "/om-oss/" },
};

const principles = [
  {
    title: "Utgå från platsen",
    text: "Ett befintligt hus och en tomt har förutsättningar som påverkar upplägget. Vi börjar med att förstå dem.",
  },
  {
    title: "Gör omfattningen tydlig",
    text: "Vi går igenom vad som ska göras, vilka beslut som återstår och var olika delar av ett projekt möts.",
  },
  {
    title: "Stäm av under arbetet",
    text: "När något förändras eller nya val behöver göras är löpande avstämningar viktiga för projektets fortsättning.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Om oss</p>
          <h1 className="heading-xl">Människorna bakom Törnros Bygg</h1>
          <p className="body-lg mt-8 max-w-3xl">Törnros Bygg drivs av Daniel Törnros med utgångspunkt i Solna. Vi arbetar med renovering, tillbyggnad, nybyggnation och markarbeten i Stockholmsområdet.</p>
        </div>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="eyebrow mb-4">Vår bakgrund</p><h2 className="heading-lg">Ett far-och-son-företag som växte med uppdragen</h2></div>
          <div>
            <p className="body-lg">Rötterna finns i Törnros Fastigheter AB, som grundades 2015 som ett far-och-son-företag. När den äldre Törnros lämnade sitt yrkesliv som byggingenjör och entreprenör fortsatte han med byggprojektledning och kontrolluppdrag.</p>
            <p className="body-copy mt-6">Verksamheten växte efter hand från dessa uppdrag till att även omfatta genomförandet av byggprojekt. I dag arbetar Daniel Törnros vidare med den praktiska bredden under varumärket Törnros Bygg, från renovering av befintliga miljöer till tillbyggnad, nybyggnation och markarbeten.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="eyebrow mb-4">Det vi bygger</p><h2 className="heading-lg">Verkliga projekt, olika förutsättningar</h2></div>
          <div>
            <p className="body-lg">På Nämndemansgatan i Solna finns en renovering om cirka 140 kvm med flera rum, kök och badrum. På Sjövägen i Solna har vi arbetat med en tillbyggnad med nya ytor, terrass och garage. På Blanchevägen i Danderyd finns ett nybyggnationsprojekt.</p>
            <p className="body-copy mt-6">Det är olika typer av uppdrag, men i alla behöver det som ska göras hänga ihop med platsen, underlagen och beställarens behov.</p>
            <Link href="/projekt/" className="button button-secondary mt-8">Se våra projekt</Link>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-3xl"><p className="eyebrow mb-4">Arbetssätt</p><h2 className="heading-lg">Börja med att förstå helheten</h2><p className="body-lg mt-6">Vad som ska byggas är bara en del av bilden. Befintliga förhållanden, praktisk åtkomst och hur arbetet påverkar dem som använder fastigheten spelar också roll.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {principles.map((item) => <article key={item.title} className="bg-[var(--color-surface)] p-7"><h3 className="heading-md">{item.title}</h3><p className="body-copy mt-4">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du ett projekt i åtanke?</h2><p className="body-lg mt-5">Berätta vad du vill göra, så pratar vi om nästa steg.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
