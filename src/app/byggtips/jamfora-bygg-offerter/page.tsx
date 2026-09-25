import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jämföra byggofferter: vad ingår? | Törnros Bygg",
  description: "Frågor att ställa när du jämför byggofferter. Se efter vad som ingår, vilka val som återstår och hur ändringar ska stämmas av.",
  alternates: { canonical: "/byggtips/jamfora-bygg-offerter/" },
};

export default function OfferterGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Offert</Link><h1 className="heading-xl mt-6">Jämför byggofferter med rätt frågor</h1><p className="body-lg mt-8 max-w-3xl">Två offerter kan ha olika pris och samtidigt beskriva olika arbeten. För att kunna jämföra dem behöver du förstå omfattning, materialval, avgränsningar och vad som händer när något ändras.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Börja med samma projektbeskrivning</h2><p className="body-copy mt-5">Ge alla som ska lämna offert samma ritningar, bilder och beskrivning av vad du vill ha gjort. Var tydlig med vad som är bestämt och vad du vill diskutera. Annars kan skillnaden mellan offerterna handla om olika antaganden snarare än om priset för samma arbete.</p></section>
          <section><h2 className="heading-md">Läs vad som faktiskt ingår</h2><p className="body-copy mt-5">Kontrollera arbetets olika delar: förberedelser, rivning, byggmoment, material, bortforsling och färdigställande. Är det tydligt vilka utrymmen och ytor som omfattas? Fråga också vilka underlag som offerten bygger på och vad som uttryckligen ligger utanför uppdraget.</p></section>
          <section><h2 className="heading-md">Se vilka val som fortfarande är öppna</h2><p className="body-copy mt-5">Material och inredning kan vara specificerade eller bara beskrivna på en övergripande nivå. Om du ska välja senare behöver du förstå vad som har räknats med och hur nya val påverkar omfattning och tid. En låg siffra säger lite om du inte vet vilka delar som återstår.</p></section>
          <section><h2 className="heading-md">Prata om avstämningar</h2><p className="body-copy mt-5">Vid arbete i befintliga hus kan förutsättningarna förändras när en konstruktion öppnas. Fråga hur upptäckter och önskemål om ändringar ska tas upp, beskrivas och godkännas innan arbetet går vidare. Samla beslut och dokumentation på ett ställe som båda parter kommer åt.</p></section>
          <section><h2 className="heading-md">Titta på helheten</h2><p className="body-copy mt-5">En tydlig offert gör det lättare att bedöma pris, omfattning och ansvar tillsammans. Fråga när arbetet kan börja, hur arbetet påverkar fastigheten och vilka beslut du behöver fatta längs vägen. För den som planerar en större ombyggnad finns även vår <Link href="/byggtips/planera-renovering/" className="font-bold text-[var(--color-accent-dark)] underline">guide till renoveringsplanering</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Dokumentation</p><h2 className="heading-lg">Håll reda på besluten</h2></div><div><p className="body-lg">Törnros Bygg förespråkar att offert, ändringar och beslut dokumenteras under arbetet. Välj ett sätt som båda parter kan följa och spara underlagen så att de går att hitta senare. Läs vår <Link href="/byggtips/dokumentera-byggprojekt/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">guide om dokumentation i byggprojekt</Link>.</p></div></div></section>
      <section className="section pt-0"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Vill du beskriva ditt projekt?</h2><p className="body-lg mt-5">Hör av dig med dina underlag och frågor om arbetets omfattning.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
