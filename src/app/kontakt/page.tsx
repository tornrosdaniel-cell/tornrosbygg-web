import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Törnros Bygg",
  description: "Kontakta Törnros Bygg om renovering, nybyggnation och markarbeten i Solna och Stockholmsområdet.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Kontakt</p>
          <h1 className="heading-xl">Berätta om ditt byggprojekt</h1>
          <p className="body-lg mt-8 max-w-3xl">Ska du renovera, bygga till eller planera något nytt? Hör av dig och beskriv vad du vill göra. Vi utgår från Solna och arbetar i Stockholmsområdet.</p>
        </div>
      </section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="surface p-8 md:p-12">
            <p className="eyebrow mb-4">Skriv till oss</p>
            <h2 className="heading-lg">Skicka ett mejl</h2>
            <p className="body-copy mt-6">Berätta gärna var projektet finns, vad du vill göra och om du redan har ritningar eller andra underlag.</p>
            <a className="mt-8 inline-block break-all text-xl font-bold text-[var(--color-accent-dark)] underline" href="mailto:hej@tornrosbygg.se">hej@tornrosbygg.se</a>
          </div>
          <div className="surface p-8 md:p-12">
            <p className="eyebrow mb-4">Ring oss</p>
            <h2 className="heading-lg">Prata om ditt projekt</h2>
            <p className="body-copy mt-6">Ett samtal är ett enkelt sätt att börja reda ut omfattning, förutsättningar och nästa steg.</p>
            <a className="mt-8 inline-block text-xl font-bold text-[var(--color-accent-dark)] underline" href="tel:+46735224488">0735-224488</a>
          </div>
        </div>
      </section>
      <section className="section"><div className="container max-w-4xl"><p className="eyebrow mb-4">Inför första kontakten</p><h2 className="heading-lg">Det hjälper oss att förstå uppdraget</h2><p className="body-lg mt-6">En kort beskrivning räcker för att börja. Om du vet ungefärlig plats, tidpunkt och omfattning kan du ta med det. Bilder eller ritningar är också användbara när de finns.</p></div></section>
    </main>
  );
}
