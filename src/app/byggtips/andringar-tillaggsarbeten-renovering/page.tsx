import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ändringar och tillägg vid renovering | Törnros Bygg",
  description: "Hur hanterar du ändringar och tilläggsarbeten under en renovering? Gå igenom omfattning, pris, tid och hur beslut dokumenteras.",
  alternates: { canonical: "/byggtips/andringar-tillaggsarbeten-renovering/" },
};

export default function ChangesDuringRenovationGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Renovering</Link><h1 className="heading-xl mt-6">Ändringar och tillägg under en renovering</h1><p className="body-lg mt-8 max-w-3xl">Ett nytt önskemål eller något oväntat bakom en vägg kan förändra arbetet. Det blir lättare att ta ställning när ni först skiljer det nya från det som redan ingår i avtalet.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Utgå från det ni redan har kommit överens om</h2><p className="body-copy mt-5">Ta fram offerten, eventuella ritningar och tidigare val. Handlar frågan om arbete som redan finns beskrivet, ett nytt önskemål eller en förutsättning som upptäckts under arbetet? Den skillnaden påverkar vad ni behöver reda ut innan ni går vidare. Vår guide om att <Link href="/byggtips/jamfora-bygg-offerter/" className="font-bold text-[var(--color-accent-dark)] underline">jämföra byggofferter</Link> hjälper dig att se vilka avgränsningar som bör vara tydliga från början.</p></section>
          <section><h2 className="heading-md">Beskriv vad som har ändrats</h2><p className="body-copy mt-5">Skriv ner vad som kom fram, gärna med foto när det gäller ett befintligt förhållande. Ange vilka delar av arbetet som påverkas. En kort beskrivning som båda parter förstår är mer användbar än ett löst besked om att något ”behöver fixas”.</p></section>
          <section><h2 className="heading-md">Stäm av pris och tid</h2><p className="body-copy mt-5">Be om en förklaring av vad den föreslagna ändringen innebär för kostnaden och tidsplanen. Om priset ännu inte går att bestämma, fråga vad det beror på och hur nästa avstämning ska göras. På så sätt kan ni ta ställning till lösningen med samma bild av följderna.</p></section>
          <section><h2 className="heading-md">Spara beslutet där båda hittar det</h2><p className="body-copy mt-5">Notera vad ni har beslutat, vem som har svarat och vilken version av ritning eller materialval som gäller. Sammanfatta gärna ett telefonsamtal skriftligt efteråt. När flera ändringar sker blir det annars lätt att blanda ihop gamla förslag med beslut som faktiskt gäller.</p></section>
          <section><h2 className="heading-md">Ta med ändringarna till avslutet</h2><p className="body-copy mt-5">När arbetet är klart bör överenskomna ändringar gå att känna igen i underlagen och i den slutliga sammanställningen. Spara de dokument och foton som hör till arbetet. Läs vår guide om <Link href="/byggtips/dokumentera-byggprojekt/" className="font-bold text-[var(--color-accent-dark)] underline">vilken dokumentation som är bra att behålla</Link>.</p></section>
          <section><h2 className="heading-md">Vill du läsa mer om avtal?</h2><p className="body-copy mt-5"><a href="https://www.konsumentverket.se/varor-och-tjanster/anlita-hantverkare/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">Konsumentverket har vägledning om att anlita hantverkare</a>, inklusive avtal och ändringsarbeten. Guiden här är ett stöd för planering och dokumentation, inte en bedömning av vad som gäller i ett enskilt avtal.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Planerar du att renovera?</h2><p className="body-lg mt-5">Beskriv vad du vill förändra och vilka underlag du har, så kan vi prata om omfattningen.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
