import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Förbereda tillbyggnad: hus, mark och behov | Törnros Bygg",
  description: "Praktiska frågor inför en tillbyggnad: syftet med ytan, mötet med befintligt hus, markens förutsättningar och vardagen under bygget.",
  alternates: { canonical: "/byggtips/forbereda-tillbyggnad/" },
};

export default function TillbyggnadGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Tillbyggnad</Link><h1 className="heading-xl mt-6">Förbered en tillbyggnad vid ett befintligt hus</h1><p className="body-lg mt-8 max-w-3xl">En tillbyggnad ska fungera både som ny yta och som del av huset som redan står där. Några tidiga frågor hjälper dig att få grepp om omfattningen.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Beskriv varför huset ska växa</h2><p className="body-copy mt-5">Behövs fler sovrum, en större samlingsyta eller ett bättre samband med trädgården? Börja med användningen. Den påverkar planlösning, ljus, placering och hur den nya delen ska kopplas till rummen som redan finns.</p></section>
          <section><h2 className="heading-md">Se på mötet mellan nytt och befintligt</h2><p className="body-copy mt-5">En tillbyggnad ansluter till befintlig stomme, tak, fasad och ofta installationer. Samla ritningar och uppgifter om huset och markera vad som behöver undersökas närmare. Det gör det lättare att planera själva övergången mellan delarna.</p></section>
          <section><h2 className="heading-md">Ta med tomten i planen</h2><p className="body-copy mt-5">Marknivåer, åtkomst för maskiner och material samt ytor som behöver förändras runt huset påverkar projektet. Titta också på hur entréer, gångar och uteplatser ska fungera när tillbyggnaden är klar. Läs mer om <Link href="/tjanster/markarbeten/" className="font-bold text-[var(--color-accent-dark)] underline">markarbeten</Link> som del av ett byggprojekt.</p></section>
          <section><h2 className="heading-md">Planera vardagen under arbetet</h2><p className="body-copy mt-5">När byggarbete sker nära ett hus som används behöver tillträde, transporter och de ytor som påverkas diskuteras före start. En del arbeten kan också behöva utföras inne i den befintliga byggnaden. Gå igenom vilka delar av hemmet som blir berörda.</p></section>
          <section><h2 className="heading-md">Gå vidare med rätt underlag</h2><p className="body-copy mt-5">Befintliga ritningar, bilder på huset och en enkel beskrivning av den nya ytan är en bra start för dialogen. När förutsättningarna blir tydligare kan omfattning, genomförande och tid diskuteras mer konkret. Se hur Törnros Bygg arbetar med <Link href="/tjanster/tillbyggnad/" className="font-bold text-[var(--color-accent-dark)] underline">tillbyggnad</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Planerar du att bygga till?</h2><p className="body-lg mt-5">Berätta om huset, tomten och vad du vill få plats med.</p></div><Link href="/kontakt" className="button button-primary">Berätta om din tillbyggnad</Link></div></div></section>
    </main>
  );
}
