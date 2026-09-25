import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Byggprojekt i Solna & Stockholm | Törnros Bygg",
  description: "Se Törnros Byggs projekt inom renovering, badrum, tillbyggnad, attefallshus och markarbete i Stockholmsområdet.",
  alternates: { canonical: "/projekt/" },
};

const projects = [
  { title: "Renovering på Nämndemansgatan", location: "Solna", text: "Renovering av cirka 140 kvm med flera rum, badrum, kök, tvättstuga och nya ytskikt.", href: "/projekt/renovering-namndemansgatan-solna/", image: "/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg", alt: "Vardagsrum efter renovering på Nämndemansgatan", width: 2048, height: 1536 },
  { title: "Tillbyggnad på Sjövägen", location: "Solna", text: "Tillbyggnad med nya ytor, terrass och garage i anslutning till huset.", href: "/projekt/tillbyggnad-sjovagen-solna/", image: "/images/projects/sjovagen/tillbyggnad-solna.jpeg", alt: "Tillbyggnad på Sjövägen i Solna", width: 740, height: 555 },
  { title: "Nybyggnation på Blanchevägen", location: "Danderyd", text: "Nybyggnationsprojekt där bilderna visar färdiga invändiga miljöer.", href: "/projekt/nybyggnation-blanchevagen-danderyd/", image: "/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg", alt: "Allrum i nybyggnation på Blanchevägen", width: 964, height: 723 },
  { title: "Nybyggnation på Munkholmen", location: "Sigtuna", text: "Ett färdigbyggt hus om cirka 450 kvm. Fotot visar arbetet med fasaden under byggtiden.", href: "/projekt/nybyggnation-munkholmen-sigtuna/", image: "/images/projects/munkholmen/nybyggnation-under-arbete.webp", alt: "Huset på Munkholmen under byggtiden", width: 1200, height: 900 },
  { title: "Badrum på Frejgatan", location: "Stockholm", text: "Badrumsprojekt med ändrad planering, plats för tvättpelare och inbyggda nischer.", href: "/projekt/badrum-frejgatan-stockholm/", image: "/images/projects/frejgatan/badrum-frejgatan.webp", alt: "Badrum på Frejgatan under slutmontering", width: 2048, height: 1536 },
  { title: "Attefallshus på Sjövägen", location: "Solna", text: "Attefallshus med sovloft, badrum, sittdel och rum för poolteknik.", href: "/projekt/attefallshus-sjovagen-solna/", image: "/images/projects/attefallshus-sjovagen/attefallshus-sjovagen.webp", alt: "Attefallshus vid poolen på Sjövägen", width: 2048, height: 1536 },
  { title: "Poolområde på Sjövägen", location: "Solna", text: "En tidigare gräsyta som byggdes om för pool och plats för umgänge.", href: "/projekt/poolbygge-sjovagen-solna/", image: "/images/projects/pool-sjovagen/poolbygge-sjovagen.webp", alt: "Poolbygge och trädäck under arbete på Sjövägen", width: 2048, height: 1536 },
  { title: "Servisbyte och dränering", location: "Solna", text: "Ledning, dränering och markarbete för en bostadsrättsförening.", href: "/projekt/servisbyte-dranering-solna/", image: "/images/projects/servisbyte-solna/servisbyte-solna.webp", alt: "Markarbete vid en fastighet i Solna", width: 400, height: 300 },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="container py-16 md:py-24"><div className="max-w-4xl"><p className="eyebrow mb-6">Projekt</p><h1 className="heading-xl">Utvalda byggprojekt</h1><p className="body-lg mt-8 max-w-3xl">Renovering, badrum, tillbyggnad, nybyggnation och markarbete ser olika ut i praktiken. Här är exempel från uppdrag i Stockholmsområdet.</p></div></section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <article key={project.href} className="surface overflow-hidden"><Link href={project.href} className="block"><Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[4/3] w-full object-cover" /><div className="p-7"><p className="eyebrow mb-4">{project.location}</p><h2 className="heading-md">{project.title}</h2><p className="body-copy mt-4">{project.text}</p><span className="mt-6 inline-block text-sm font-bold text-[var(--color-accent-dark)]">Läs om projektet</span></div></Link></article>)}</div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Ditt projekt</p><h2 className="heading-lg">Vad vill du göra?</h2></div><div><p className="body-lg">Beskriv dina planer och vilka förutsättningar som finns, så kan vi prata om ett upplägg för just ditt projekt.</p><Link href="/kontakt" className="button button-primary mt-8">Berätta om ditt projekt</Link></div></div></section>
    </main>
  );
}
