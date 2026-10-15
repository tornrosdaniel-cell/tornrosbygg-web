import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectImage } from "@/content/projects";

const phaseLabels = { before: "Före", during: "Under arbetet", after: "Efter" };

function Caption({ image }: { image: ProjectImage }) {
  if (!image.caption && !image.phase) return null;
  return <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm leading-6 text-[var(--color-muted)]">
    {image.phase && <span className="mr-2 font-bold text-[var(--color-ink)]">{phaseLabels[image.phase]}</span>}
    {image.caption}
  </figcaption>;
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main>
      <section className="container page-intro">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{project.category} · {project.location}</p>
          <h1 className="heading-service">{project.title}</h1>
          <p className="body-lg mt-8 max-w-3xl">{project.intro}</p>
        </div>
        <figure className="surface mt-8 overflow-hidden">
          <Image src={project.hero.src} alt={project.hero.alt} width={project.hero.width} height={project.hero.height} sizes="(min-width: 1244px) 1180px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)" className="h-auto w-full" priority />
          <Caption image={project.hero} />
        </figure>
      </section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="eyebrow mb-4">Projektet</p><h2 className="heading-lg">Om arbetet</h2></div>
          <div><p className="body-lg">{project.details}</p>{project.highlights && <><h3 className="heading-md mt-8">Det här ingick i uppdraget</h3><ul className="body-copy mt-5 list-disc space-y-2 pl-6">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></>}<Link href={project.service.href} className="button button-secondary mt-8">{project.service.label}</Link></div>
        </div>
      </section>
      {project.gallery.length > 0 && <section className="section"><div className="container">
        <div className="max-w-3xl"><p className="eyebrow mb-4">Från projektet</p><h2 className="heading-lg">Fler detaljer</h2></div>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          {project.gallery.map((image) => <figure key={image.src} className="surface overflow-hidden">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1244px) 578px, (min-width: 768px) calc((100vw - 88px) / 2), calc(100vw - 32px)" className="h-auto w-full" />
            <Caption image={image} />
          </figure>)}
        </div>
      </div></section>}
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du ett liknande projekt?</h2><p className="body-lg mt-5">Berätta vad du vill bygga eller renovera, så pratar vi om nästa steg.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
