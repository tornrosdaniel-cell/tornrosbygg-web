import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Totalrenovering eller delrenovering? | Törnros Bygg",
  description: "Vägledning för att välja omfattning på en renovering. Se när flera rum bör planeras tillsammans och när ett avgränsat arbete räcker.",
  alternates: { canonical: "/byggtips/totalrenovering-eller-delrenovering/" },
};

export default function RenovationScopeGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Renovering</Link><h1 className="heading-xl mt-6">Totalrenovering eller delrenovering?</h1><p className="body-lg mt-8 max-w-3xl">Hur mycket behöver göras samtidigt? Svaret beror på om rummen påverkar varandra, hur länge du vill använda bostaden under arbetet och vad du faktiskt behöver förändra.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Börja med behoven i varje rum</h2><p className="body-copy mt-5">Skriv ner vad som inte fungerar och vilka rum som påverkas. Ett rum kan behöva nya ytskikt, medan ett annat kräver en ändrad planlösning eller arbete med installationer. Med den listan blir det lättare att skilja ett avgränsat uppdrag från en större ombyggnad.</p></section>
          <section><h2 className="heading-md">När är delrenovering rimlig?</h2><p className="body-copy mt-5">Om behovet är tydligt avgränsat till ett rum eller en del av bostaden kan ett mindre projekt vara lättare att planera och leva med under byggtiden. Fråga vad som behöver skyddas eller återställas i angränsande delar och om det finns arbeten som ändå måste göras samtidigt.</p></section>
          <section><h2 className="heading-md">När bör fler delar planeras tillsammans?</h2><p className="body-copy mt-5">Om planlösning, installationer och ytskikt ändras i flera rum kan besluten påverka varandra. Då hjälper det att se hela bostaden som ett sammanhållet projekt, även om arbetet genomförs i etapper. Planera ordningen så att färdiga ytor inte behöver göras om när nästa del startar.</p></section>
          <section><h2 className="heading-md">Etapper är också ett val</h2><p className="body-copy mt-5">Att dela upp ett större arbete kan passa när vissa rum måste gå att använda eller när beslut om senare delar inte är klara. Gå igenom vad som blir provisoriskt mellan etapperna, vilka arbeten som behöver samordnas och hur olika entreprenader möts. Ett etappupplägg är bäst när gränserna är tydliga.</p></section>
          <section><h2 className="heading-md">Ta beslutet med rätt underlag</h2><p className="body-copy mt-5">Bilder, ritningar och en lista med önskade ändringar ger en grund för samtalet. Du kan också läsa vår guide om att <Link href="/byggtips/planera-renovering/" className="font-bold text-[var(--color-accent-dark)] underline">planera renoveringen</Link> och se hur Törnros Bygg arbetar med <Link href="/tjanster/renovering/" className="font-bold text-[var(--color-accent-dark)] underline">renovering av hus och lägenheter</Link>.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Vilka delar vill du förändra?</h2><p className="body-lg mt-5">Beskriv behoven, så kan vi diskutera omfattning och ordning.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
