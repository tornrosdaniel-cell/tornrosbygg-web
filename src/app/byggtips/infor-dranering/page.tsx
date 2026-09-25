import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inför dränering: undersök hus & mark | Törnros Bygg",
  description: "Vad bör du ta reda på innan ett dräneringsarbete? Gå igenom fukttecken, grundens utformning, mark, åtkomst och återställning.",
  alternates: { canonical: "/byggtips/infor-dranering/" },
};

export default function DrainagePreparationGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Dränering</Link><h1 className="heading-xl mt-6">Vad bör undersökas inför en dränering?</h1><p className="body-lg mt-8 max-w-3xl">Fukt eller vatten vid huset kan ha olika orsaker. Innan du bestämmer hur ett markarbete ska utföras behöver du förstå vad som är känt om huset, grunden och marken runt omkring.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Beskriv vad du har sett</h2><p className="body-copy mt-5">Var märks fukten och när uppträder den? Dokumentera synliga tecken och samla äldre uppgifter om tidigare åtgärder. Tecken i ett rum pekar inte automatiskt ut en enda orsak. Om orsaken är oklar kan den behöva undersökas innan en viss åtgärd väljs.</p></section>
          <section><h2 className="heading-md">Ta reda på hur huset är byggt</h2><p className="body-copy mt-5">Ritningar och information om grund, källarväggar och tidigare markarbeten hjälper när omfattningen ska diskuteras. Vet du inte hur det ser ut under mark behöver det framgå som en osäkerhet i planeringen. En lösning ska anpassas efter den aktuella byggnaden.</p></section>
          <section><h2 className="heading-md">Se på vattnet runt huset</h2><p className="body-copy mt-5">Hur lutar marken och var tar vatten vägen när det regnar? Titta på synliga ledningar, stuprör och ytor som leder vatten mot eller från huset. Befintlig avvattning och möjliga anslutningar behöver gås igenom som en del av arbetets förutsättningar.</p></section>
          <section><h2 className="heading-md">Räkna med platsen som arbetsyta</h2><p className="body-copy mt-5">Schakt påverkar gångar, uppfarter, planteringar och andra delar av tomten. Fråga hur maskiner och material kommer fram, vad som behöver flyttas och vilka ytor som ska återställas. Dokumentera utgångsläget innan arbetet börjar.</p></section>
          <section><h2 className="heading-md">Vad behöver framgå av offerten?</h2><p className="body-copy mt-5">Se efter vilka sträckor och moment som ingår, vad som antas om marken och vilka delar av återställningen som är med. Gå igenom hur nya förutsättningar i marken ska stämmas av. Läs mer om Törnros Byggs <Link href="/tjanster/dranering/" className="font-bold text-[var(--color-accent-dark)] underline">dräneringsarbeten</Link> och vår guide om att <Link href="/byggtips/jamfora-bygg-offerter/" className="font-bold text-[var(--color-accent-dark)] underline">jämföra offerter</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du frågor om marken vid ditt hus?</h2><p className="body-lg mt-5">Beskriv vad du har sett och vilka underlag du har.</p></div><Link href="/kontakt" className="button button-primary">Berätta om ditt hus</Link></div></div></section>
    </main>
  );
}
