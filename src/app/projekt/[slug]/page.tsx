import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject, getPublishedProjects, projectPath } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProjects().map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return {
    ...project.seo,
    alternates: { canonical: projectPath(project) },
    openGraph: {
      ...project.seo,
      url: projectPath(project),
      type: "website",
      images: [{ url: project.hero.src, alt: project.hero.alt, width: project.hero.width, height: project.hero.height }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
