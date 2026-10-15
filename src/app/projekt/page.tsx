import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedProjects, projectPath } from "@/content/projects";

export const metadata: Metadata = {
  title: "Byggprojekt i Solna & Stockholm | Törnros Bygg",
  description: "Se Törnros Byggs projekt inom renovering, badrum, tillbyggnad, attefallshus och markarbete i Stockholmsområdet.",
  alternates: { canonical: "/projekt" },
};

const projects = getPublishedProjects();

export default function ProjectsPage() {
  return (
    <main>
      <section className="container page-intro"><div className="max-w-4xl"><p className="eyebrow mb-6">Projekt</p><h1 className="heading-xl">Utvalda byggprojekt</h1><p className="body-lg mt-8 max-w-3xl">Renovering, badrum, tillbyggnad, nybyggnation och markarbete ser olika ut i praktiken. Här är exempel från uppdrag i Stockholmsområdet.</p></div></section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]"><div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <article key={projectPath(project)} className="surface overflow-hidden"><Link href={projectPath(project)} className="block"><Image src={project.hero.src} alt={project.hero.alt} width={project.hero.width} height={project.hero.height} sizes="(min-width: 1244px) 372px, (min-width: 1024px) calc((100vw - 128px) / 3), (min-width: 768px) calc((100vw - 96px) / 2), calc(100vw - 32px)" className="aspect-[4/3] w-full object-cover" /><div className="p-7"><p className="eyebrow mb-4">{project.location}</p><h2 className="heading-md">{project.title}</h2><p className="body-copy mt-4">{project.intro}</p><span className="mt-6 inline-block text-sm font-bold text-[var(--color-accent-dark)]">Läs om projektet</span></div></Link></article>)}</div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow mb-4">Ditt projekt</p><h2 className="heading-lg">Vad vill du göra?</h2></div><div><p className="body-lg">Beskriv dina planer och vilka förutsättningar som finns, så kan vi prata om ett upplägg för just ditt projekt.</p><Link href="/kontakt" className="button button-primary mt-8">Berätta om ditt projekt</Link></div></div></section>
    </main>
  );
}
