import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Renovering på Nämndemansgatan, Solna | Törnros Bygg",
  description: "Se bilder från en renovering om cirka 140 kvm på Nämndemansgatan i Solna.",
  alternates: { canonical: "/projekt/renovering-namndemansgatan-solna/" },
};

const project: Project = {
  title: "Renovering på Nämndemansgatan",
  location: "Nämndemansgatan, Solna",
  category: "Renovering",
  intro: "Ett renoveringsprojekt om cirka 140 kvm med flera rum, badrum, kök, tvättstuga och nya ytskikt.",
  details: "Renoveringen omfattade flera delar av bostaden. När rum och funktioner förändras i samma projekt behöver val av ytskikt, arbete i kök och badrum samt ordningen mellan olika moment hänga ihop. Bilderna visar färdiga miljöer från arbetet på Nämndemansgatan.",
  image: "/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg",
  imageAlt: "Färdigt vardagsrum efter renovering på Nämndemansgatan i Solna",
  width: 2048, height: 1536,
  secondaryImage: { src: "/images/projects/namndemansgatan/renovering-efter-solna.jpeg", alt: "Renoverad interiör på Nämndemansgatan i Solna", width: 540, height: 720 },
  service: { href: "/tjanster/renovering/", label: "Läs om renovering" },
};

export default function Page() { return <ProjectDetail project={project} />; }
