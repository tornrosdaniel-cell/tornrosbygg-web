import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChdImageGallery } from "@/components/chd-image-gallery";
import { chdRoomImages } from "@/content/chd-images";
import { getPublishedProjects, projectPath } from "@/content/projects";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Byggprojekt i Solna & Stockholm | Törnros Bygg",
  description: "Se Törnros Byggs projekt inom renovering, badrum, tillbyggnad, attefallshus och markarbete i Stockholmsområdet.",
  alternates: { canonical: "/projekt" },
};

const projects = getPublishedProjects();

export default function ProjectsPage() {
  return (
    <main className={styles.projects}>
      <section className={styles.intro}><div className="container"><p className={styles.kicker}>Custom Home Design & Build</p><h1 className={styles.title}>Personliga miljöer.<br /><em>Genomtänkta helheter.</em></h1><p>Från rum med en egen karaktär till hela hem. Vi förenar design, material och genomförande i Storstockholmsområdet.</p><Link href="/tjanster/nybyggnation" className={styles.link}>Utforska Custom Homes ↗</Link></div></section>
      <ChdImageGallery id="selected-environments" title="Rum med ett eget uttryck" intro="Plats för det som gör hemmet personligt. Från bergets råa yta till ett rum för stora upplevelser." items={[
        { image: chdRoomImages.wine, title: "Vinkällare med berget som fond" },
        { image: chdRoomImages.cinema, title: "En egen biograf" },
      ]} />
      <section className={styles.archive}><div className="container"><div className={styles.archiveHeading}><p className={styles.kicker}>Utvalda uppdrag</p><h2>Helheter och enskilda förändringar.</h2><p>Renovering, badrum, tillbyggnad, nybyggnation och markarbete i Storstockholmsområdet. Utforska arbetets omfattning och detaljer.</p></div><div className={styles.grid}>{projects.map((project) => <article key={projectPath(project)} className={styles.card}><Link href={projectPath(project)}><Image src={project.hero.src} alt={project.hero.alt} width={project.hero.width} height={project.hero.height} sizes="(min-width: 1244px) 574px, (min-width: 768px) 46vw, calc(100vw - 32px)" className={styles.image} /><div className={styles.copy}><p className={styles.kicker}>{project.category} · {project.location}</p><h3>{project.title}</h3><p>{project.intro}</p><span className={styles.link}>Utforska uppdraget ↗</span></div></Link></article>)}</div></div></section>
      <section className={styles.contact}><div className="container"><p className={styles.kicker}>Ditt projekt</p><h2>Vad vill du skapa?</h2><p>Ett helt hem eller en avgränsad förändring. Berätta om dina planer, så börjar vi där.</p><Link href="/kontakt" className={styles.link}>Berätta om ditt projekt ↗</Link><Link href="/tjanster" className={styles.link}>Se alla våra tjänster ↗</Link></div></section>
    </main>
  );
}
