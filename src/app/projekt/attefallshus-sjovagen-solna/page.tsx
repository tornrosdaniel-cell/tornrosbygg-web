import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Attefallshus på Sjövägen, Solna | Törnros Bygg",
  description: "Se attefallshuset på Sjövägen i Solna, planerat med sovloft, badrum, sittdel och plats för poolteknik.",
  alternates: { canonical: "/projekt/attefallshus-sjovagen-solna/" },
};

const project: Project = {
  title: "Attefallshus på Sjövägen",
  location: "Sjövägen, Solna",
  category: "Attefallshus",
  intro: "Ett attefallshus vid poolområdet på Sjövägen i Solna, med utrymmen för både vistelse och praktiska funktioner.",
  details: "Uppdraget omfattade ett hus med sovloft, badrum och sittdel samt förråd och teknikrum för poolen. Fotot visar husets utsida intill poolområdet.",
  highlights: ["Sovloft och sittdel", "Badrum", "Förråd och teknikrum för poolen"],
  image: "/images/projects/attefallshus-sjovagen/attefallshus-sjovagen.webp",
  imageAlt: "Attefallshus vid poolområdet på Sjövägen i Solna",
  width: 2048, height: 1536,
  service: { href: "/tjanster/attefallshus/", label: "Läs om attefallshus" },
};

export default function Page() { return <ProjectDetail project={project} />; }
