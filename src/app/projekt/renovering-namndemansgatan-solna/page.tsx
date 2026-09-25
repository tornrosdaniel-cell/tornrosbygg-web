import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Renovering på Nämndemansgatan, Solna | Törnros Bygg",
  description: "Renovering av cirka 140 kvm på Nämndemansgatan i Solna med nya golv, två badrum, kök och tvättstuga.",
  alternates: { canonical: "/projekt/renovering-namndemansgatan-solna/" },
};

const project: Project = {
  title: "Renovering på Nämndemansgatan",
  location: "Nämndemansgatan, Solna",
  category: "Renovering",
  intro: "En lägenhet om cirka 140 kvm på Nämndemansgatan i Solna renoverades med nya golv, två badrum, kök och tvättstuga.",
  details: "Bostaden revs ut inför renoveringen. Arbetet omfattade både nya funktioner och ytskikt i flera rum. Bilderna visar färdiga miljöer från projektet.",
  highlights: ["Nya golv med ljudisolering i hela bostaden", "Två nya badrum samt nytt kök och tvättstuga", "Trappa till övre plan", "Nya ytskikt i två vardagsrum och tre sovrum"],
  image: "/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg",
  imageAlt: "Färdigt vardagsrum efter renovering på Nämndemansgatan i Solna",
  width: 2048, height: 1536,
  secondaryImage: { src: "/images/projects/namndemansgatan/renovering-efter-solna.jpeg", alt: "Renoverad interiör på Nämndemansgatan i Solna", width: 540, height: 720 },
  service: { href: "/tjanster/renovering/", label: "Läs om renovering" },
};

export default function Page() { return <ProjectDetail project={project} />; }
