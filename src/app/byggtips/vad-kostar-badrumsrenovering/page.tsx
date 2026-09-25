import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vad kostar badrumsrenovering? Faktorer & offert | Törnros Bygg",
  description: "Förstå vad som påverkar kostnaden för att renovera ett badrum: befintligt skick, installationer, materialval och vad som ingår i offerten.",
  alternates: { canonical: "/byggtips/vad-kostar-badrumsrenovering/" },
};

export default function BathroomCostGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Badrum</Link><h1 className="heading-xl mt-6">Vad kostar en badrumsrenovering?</h1><p className="body-lg mt-8 max-w-3xl">Ett pris blir användbart först när det framgår vad som ska göras. Samma storlek på badrummet kan ge olika omfattning beroende på rummets skick, planlösning och de val du gör.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Befintligt skick kommer först</h2><p className="body-copy mt-5">Vid en renovering behöver det befintliga badrummet gås igenom. Underlag om tidigare arbeten kan hjälpa, men allt bakom ytskikten är inte synligt förrän arbetet har påbörjats. Därför behöver offerten tala om vilka antaganden den bygger på och hur upptäckter under rivning ska stämmas av.</p></section>
          <section><h2 className="heading-md">Planlösning och installationer påverkar arbetet</h2><p className="body-copy mt-5">Att behålla dusch, avlopp och övriga funktioner på ungefär samma plats ger ett annat upplägg än att flytta dem. Diskutera tidigt om målet är ett uppdaterat badrum inom den nuvarande planlösningen eller en större förändring av rummets funktion.</p></section>
          <section><h2 className="heading-md">Materialval påverkar mer än inköpspriset</h2><p className="body-copy mt-5">Kakel, klinker, inredning och detaljer varierar i pris. Vissa format eller lösningar påverkar också arbetsmomenten. Be om att få veta vilka material och inredningsdelar som ingår, vilka som bara är uppskattade och vilka du ska köpa själv.</p></section>
          <section><h2 className="heading-md">Jämför omfattningen i stället för enbart slutsumman</h2><p className="body-copy mt-5">Gå igenom om rivning, bortforsling, underlag, installationer, tätskikt, ytskikt, montering och färdigställande ingår. Fråga vilka beslut som återstår och hur ändringar hanteras. Vår <Link href="/byggtips/jamfora-bygg-offerter/" className="font-bold text-[var(--color-accent-dark)] underline">guide till att jämföra byggofferter</Link> ger fler frågor att ställa.</p></section>
          <section><h2 className="heading-md">Så får du ett relevant pris för ditt badrum</h2><p className="body-copy mt-5">Samla bilder, ungefärliga mått och den information du har om tidigare arbeten. Beskriv vad som ska ändras och vilka val du redan har gjort. Då går det att prata om en konkret omfattning och en offert för just ditt projekt. Läs mer om vår tjänst <Link href="/tjanster/badrumsrenovering/" className="font-bold text-[var(--color-accent-dark)] underline">badrumsrenovering</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Vill du gå igenom ditt badrum?</h2><p className="body-lg mt-5">Beskriv rummet och de förändringar du vill göra.</p></div><Link href="/kontakt" className="button button-primary">Berätta om ditt projekt</Link></div></div></section>
    </main>
  );
}
