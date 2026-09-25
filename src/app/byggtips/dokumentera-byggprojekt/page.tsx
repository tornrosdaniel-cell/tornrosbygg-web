import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dokumentera byggprojekt: vad bör du spara? | Törnros Bygg",
  description: "En praktisk guide till underlag före, under och efter ett byggprojekt: offert, ritningar, foton, ändringar och överlämning.",
  alternates: { canonical: "/byggtips/dokumentera-byggprojekt/" },
};

export default function DocumentYourBuildingProjectGuide() {
  return (
    <main>
      <article>
        <header className="container py-16 md:py-24"><div className="max-w-4xl"><Link href="/byggtips/" className="eyebrow underline underline-offset-4">Byggtips / Dokumentation</Link><h1 className="heading-xl mt-6">Vad bör du dokumentera i ett byggprojekt?</h1><p className="body-lg mt-8 max-w-3xl">Bra dokumentation gör det lättare att följa vad som bestämdes och vad som faktiskt byggdes. Du behöver inte börja med ett avancerat system: börja med underlagen som hjälper er att fatta och hitta beslut.</p></div></header>
        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container max-w-4xl space-y-12 py-16 md:py-24">
          <section><h2 className="heading-md">Före start: samla utgångsläget</h2><p className="body-copy mt-5">Spara projektbeskrivning, offert och det avtal ni arbetar efter. Lägg ritningar, bilder och materialval intill dem. Fotografera gärna berörda ytor innan arbetet börjar, särskilt där det senare blir svårt att se hur det såg ut. Märk upp dokumenten så att det framgår vilken version ni använder.</p></section>
          <section><h2 className="heading-md">Under arbetet: fånga frågorna när de uppstår</h2><p className="body-copy mt-5">Nya förutsättningar, val och ändringar behöver kunna följas. Anteckna vad frågan gäller, vilka alternativ som diskuterats och vad ni har kommit överens om. Det räcker ofta med en tydlig skriftlig sammanfattning och relevanta foton. Vid en ändring kan du använda vår <Link href="/byggtips/andringar-tillaggsarbeten-renovering/" className="font-bold text-[var(--color-accent-dark)] underline">guide till ändringar och tillägg</Link> som stöd för avstämningen.</p></section>
          <section><h2 className="heading-md">Håll ordning på det som fortfarande är öppet</h2><p className="body-copy mt-5">En lista med frågor, ansvarig person och nästa avstämning minskar risken att ett val tappas bort. Skriv när ett beslut är taget och uppdatera listan när förutsättningarna ändras. Skilj sådant som föreslagits från sådant som faktiskt har beslutats.</p></section>
          <section><h2 className="heading-md">Vid avslut: samla det som lämnas över</h2><p className="body-copy mt-5">Be om de handlingar som hör till just ditt projekt, till exempel relevanta produktuppgifter, instruktioner och dokumentation för utförda arbeten. Stäm av eventuella återstående punkter och vem som gör vad. Spara slutliga ritningar och bilder tillsammans med tidigare beslut, så går projektet att förstå även senare.</p></section>
          <section><h2 className="heading-md">Välj ett sätt som ni faktiskt använder</h2><p className="body-copy mt-5">En del använder mappar och e-post; andra vill samla kommunikationen i en projektplattform. Daniel Törnros, som driver Törnros Bygg, står också bakom den separata plattformen <a href="https://hantverkshjalpen.nu/" className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4">Hantverkshjälpen.nu</a>, där beställare och utförare kan samla bland annat dokument, ändringar och frågor. Den är frivillig och ersätter inte era överenskommelser eller den dokumentation som hör till utfört arbete.</p></section>
        </div></div>
      </article>
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du ett projekt på gång?</h2><p className="body-lg mt-5">Berätta vad du vill bygga eller renovera och vilka underlag du redan har.</p></div><Link href="/kontakt" className="button button-primary">Beskriv ditt projekt</Link></div></div></section>
    </main>
  );
}
