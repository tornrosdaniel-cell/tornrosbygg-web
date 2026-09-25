import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Tillbyggnad på Sjövägen, Solna | Törnros Bygg",
  description: "Se tillbyggnaden på Sjövägen i Solna där en tidigare terrass blev vardagsrum, med ny terrass ovanpå och garage under.",
  alternates: { canonical: "/projekt/tillbyggnad-sjovagen-solna/" },
};

const project: Project = {
  title: "Tillbyggnad på Sjövägen",
  location: "Sjövägen, Solna",
  category: "Tillbyggnad",
  intro: "På Sjövägen i Solna byggdes en befintlig terrass om till ett nytt vardagsrum i anslutning till huset.",
  details: "En yttervägg togs bort för att skapa en öppnare förbindelse mellan vardagsrum och kök. Tillbyggnaden gav också plats åt en ny terrass på övre plan och ett garage under vardagsrummet.",
  highlights: ["Tidigare terrass blev vardagsrum", "Öppnare samband mellan vardagsrum och kök", "Ny övre terrass med åtkomst från sovrum och badrum", "Garage under vardagsrummet"],
  image: "/images/projects/sjovagen/tillbyggnad-solna.jpeg",
  imageAlt: "Färdig tillbyggnad med terrass på Sjövägen i Solna",
  width: 740, height: 555,
  service: { href: "/tjanster/tillbyggnad/", label: "Läs om tillbyggnad" },
};

export default function Page() { return <ProjectDetail project={project} />; }
