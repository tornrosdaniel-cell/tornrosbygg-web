import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Nybyggnation på Blanchevägen, Danderyd | Törnros Bygg",
  description: "Nybyggnation på Blanchevägen i Danderyd: ett hus om cirka 390 kvm i tre plan, med markarbete, pool och terrass.",
  alternates: { canonical: "/projekt/nybyggnation-blanchevagen-danderyd/" },
};

const project: Project = {
  title: "Nybyggnation på Blanchevägen",
  location: "Blanchevägen, Danderyd",
  category: "Nybyggnation",
  intro: "På Blanchevägen i Danderyd omfattade uppdraget ett nytt hus om cirka 390 kvm i tre plan, från förberedelse av tomten till bostad och utemiljö.",
  details: "Det tidigare huset revs och marken åtgärdades med hänsyn till den tidigare användningen. Inför grunden utfördes schaktning och bergsprängning. Bilderna visar färdiga invändiga miljöer från det nya huset.",
  highlights: ["Rivning av det tidigare huset och åtgärder i marken", "Schaktning och bergsprängning inför grunden", "Nytt hus om cirka 390 kvm i tre plan", "Pool och terrass i utemiljön"],
  image: "/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg",
  imageAlt: "Ljust allrum i nybyggnation på Blanchevägen i Danderyd",
  width: 964, height: 723,
  secondaryImage: { src: "/images/projects/blanchevagen/nybyggnation-mikrocementbadrum-danderyd.jpeg", alt: "Badrum i nybyggnation på Blanchevägen i Danderyd", width: 2048, height: 1536 },
  service: { href: "/tjanster/nybyggnation/", label: "Läs om nybyggnation" },
};

export default function Page() { return <ProjectDetail project={project} />; }
