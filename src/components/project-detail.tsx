import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  location: string;
  category: string;
  intro: string;
  details: string;
  highlights?: string[];
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  secondaryImage?: { src: string; alt: string; width: number; height: number };
  service: { href: string; label: string };
};

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{project.category} · {project.location}</p>
          <h1 className="text-[clamp(2.2rem,4vw,4.25rem)] font-bold leading-[1.08]">{project.title}</h1>
          <p className="body-lg mt-8 max-w-3xl">{project.intro}</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-[var(--radius-md)]">
          <Image src={project.image} alt={project.imageAlt} width={project.width} height={project.height} sizes="(max-width: 768px) 100vw, 1180px" className="h-auto w-full object-cover" priority />
        </div>
      </section>
      <section className="section border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="eyebrow mb-4">Projektet</p><h2 className="heading-lg">Arbetet på {project.location.split(",")[0]}</h2></div>
          <div><p className="body-lg">{project.details}</p>{project.highlights && <><h3 className="heading-md mt-8">Det här ingick i uppdraget</h3><ul className="mt-5 list-disc space-y-2 pl-6 body-copy">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></>}<Link href={project.service.href} className="button button-secondary mt-8">{project.service.label}</Link></div>
        </div>
      </section>
      {project.secondaryImage && <section className="section"><div className="container"><div className="max-w-3xl"><p className="eyebrow mb-4">Från projektet</p><h2 className="heading-lg">Fler detaljer</h2></div><Image src={project.secondaryImage.src} alt={project.secondaryImage.alt} width={project.secondaryImage.width} height={project.secondaryImage.height} sizes="(max-width: 768px) 100vw, 768px" className="mt-10 h-auto w-full max-w-3xl rounded-[var(--radius-md)] object-cover" /></div></section>}
      <section className="section"><div className="container"><div className="surface grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="heading-lg">Har du ett liknande projekt?</h2><p className="body-lg mt-5">Berätta vad du vill bygga eller renovera, så pratar vi om förutsättningarna.</p></div><Link href="/kontakt" className="button button-primary">Kontakta oss</Link></div></div></section>
    </main>
  );
}
