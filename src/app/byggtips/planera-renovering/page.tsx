import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planera renovering: omfattning, val och tid | Törnros Bygg",
  description: "En praktisk guide till att planera en renovering: utgå från behoven, samla underlag, bestäm omfattning och stäm av ändringar.",
  alternates: { canonical: "/byggtips/planera-renovering/" },
};

export default function PlaneraRenoveringGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Renovering</Link><h1 className="heading-xl mt-6">Planera en renovering som håller ihop</h1><p className="body-lg mt-8 max-w-3xl">Ska du göra om ett rum eller en stor del av bostaden? Börja med vad du vill uppnå, vilka delar som berörs och vilka beslut som behöver tas innan arbetet börjar.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Beskriv resultatet före lösningen</h2><p className="body-copy mt-5">Skriv ner hur rummet fungerar i dag och vad du vill förändra. Behöver du bättre förvaring, mer ljus eller en annan planlösning? Dela upp önskemålen i sådant som måste fungera och sådant som är trevligt att få med. Det gör det lättare att prioritera när olika val påverkar varandra.</p></section>
          <section><h2 className="heading-md">Samla underlag om det som redan finns</h2><p className="body-copy mt-5">Ritningar, foton, mått och tidigare dokumentation ger en första bild av bostaden. Vid renovering döljs många förutsättningar bakom väggar och golv, så underlagen är en startpunkt och inte ett slutligt facit. Gå igenom det som är känt tillsammans med den som ska utföra arbetet.</p></section>
          <section><h2 className="heading-md">Sätt gränser för uppdraget</h2><p className="body-copy mt-5">Ska bara ytskikt bytas, eller ingår ändrad planlösning, kök, badrum eller installationer? När flera rum berörs behöver ordningen mellan momenten planeras. Be om att det framgår vilka delar som ingår i offerten och vilka val som du förväntas göra senare. Läs också vår <Link href="/byggtips/jamfora-bygg-offerter/" className="font-bold text-[var(--color-accent-dark)] underline">guide till byggofferter</Link>.</p></section>
          <section><h2 className="heading-md">Planera för vardagen och ändringar</h2><p className="body-copy mt-5">Fundera på tillträde, förvaring och om du ska bo kvar under arbetet. Kom överens om hur nya förutsättningar och ändringar ska diskuteras och dokumenteras. Det är särskilt viktigt när arbetet visar något som inte gick att se i förväg.</p></section>
          <section><h2 className="heading-md">Nästa steg</h2><p className="body-copy mt-5">En beskrivning av behoven tillsammans med bilder och befintliga underlag räcker för att börja prata om en rimlig omfattning. Behöver du hjälp med själva byggarbetet kan du läsa om <Link href="/tjanster/renovering/" className="font-bold text-[var(--color-accent-dark)] underline">renovering hos Törnros Bygg</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Funderar du på att renovera?</h2><p className="body-lg mt-5">Berätta vad du vill förändra och vad du vet om bostaden.</p></div><Link href="/kontakt" className="button button-primary">Berätta om ditt projekt</Link></div></div></section>
    </main>
  );
}
