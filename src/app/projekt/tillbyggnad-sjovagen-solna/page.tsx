import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Tillbyggnad på Sjövägen, Solna | Törnros Bygg",
  description: "Se ett tillbyggnadsprojekt med nya ytor, terrass och garage på Sjövägen i Solna.",
  alternates: { canonical: "/projekt/tillbyggnad-sjovagen-solna/" },
};

const project: Project = {
  title: "Tillbyggnad på Sjövägen",
  location: "Sjövägen, Solna",
  category: "Tillbyggnad",
  intro: "En tillbyggnad med nya ytor, terrass och garage i anslutning till det befintliga huset.",
  details: "Projektet på Sjövägen visar hur en tillbyggnad blir en del av ett befintligt hus. Nya delar behöver möta det som redan finns, från anslutningen till huset till ytorna utanför. Bilden visar den färdiga tillbyggnaden med terrass.",
  image: "/images/projects/sjovagen/tillbyggnad-solna.jpeg",
  imageAlt: "Färdig tillbyggnad med terrass på Sjövägen i Solna",
  width: 740, height: 555,
  service: { href: "/tjanster/tillbyggnad/", label: "Läs om tillbyggnad" },
};

export default function Page() { return <ProjectDetail project={project} />; }
