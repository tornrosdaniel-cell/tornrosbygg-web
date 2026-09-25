import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Servisbyte och dränering i Solna | Törnros Bygg",
  description: "Ett uppdrag för en bostadsrättsförening i Solna med servisledning, dränering och återställning av mark.",
  alternates: { canonical: "/projekt/servisbyte-dranering-solna/" },
};

const project: Project = {
  title: "Servisbyte och dränering i Solna",
  location: "en fastighet i Solna",
  category: "Markarbete för fastighetsägare",
  intro: "En bostadsrättsförening i Solna behövde undersöka en skadad servisledning och samordna arbetet med dränering och marken runt huset.",
  details: "Föreningens förfrågan gällde att hitta och ersätta ledningen samt att samtidigt se över dräneringen. I uppdraget ingick även önskemål om ny marksten och att återställa en sliten gräsmatta. Fotot visar markarbetet vid fastigheten.",
  highlights: ["Lokalisering och byte av servisledning", "Dränering i anslutning till fastigheten", "Marksten och återställning av gräsyta"],
  image: "/images/projects/servisbyte-solna/servisbyte-solna.webp",
  imageAlt: "Markarbete vid bostadsrättsförening i Solna",
  width: 400, height: 300,
  service: { href: "/tjanster/dranering/", label: "Läs om dränering" },
};

export default function Page() { return <ProjectDetail project={project} />; }
