import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Poolbygge på Sjövägen, Solna | Törnros Bygg",
  description: "Ett poolprojekt på Sjövägen i Solna där en gräsyta skulle bli en plats för pool, sittgrupp och utekök.",
  alternates: { canonical: "/projekt/poolbygge-sjovagen-solna/" },
};

const project: Project = {
  title: "Poolområde på Sjövägen",
  location: "Sjövägen, Solna",
  category: "Pool och utemiljö",
  intro: "På Sjövägen ville beställaren göra om gräsmattan bakom huset till ett poolområde med plats för umgänge.",
  details: "Önskemålet var en pool med sittgrupp och utekök. Projektbilderna på den tidigare webbplatsen visar arbetet i flera skeden. Fotot här visar poolen och trädäcket medan arbetet pågick.",
  highlights: ["Pool på tidigare gräsyta", "Trädäck och ytor för sittgrupp", "Planering för utekök"],
  image: "/images/projects/pool-sjovagen/poolbygge-sjovagen.webp",
  imageAlt: "Pool och trädäck på Sjövägen under byggtiden",
  width: 2048, height: 1536,
  service: { href: "/tjanster/markarbeten/", label: "Läs om markarbeten" },
};

export default function Page() { return <ProjectDetail project={project} />; }
