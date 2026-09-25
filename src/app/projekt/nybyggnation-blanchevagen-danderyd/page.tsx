import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Nybyggnation på Blanchevägen, Danderyd | Törnros Bygg",
  description: "Se färdiga miljöer från ett nybyggnationsprojekt på Blanchevägen i Danderyd.",
  alternates: { canonical: "/projekt/nybyggnation-blanchevagen-danderyd/" },
};

const project: Project = {
  title: "Nybyggnation på Blanchevägen",
  location: "Blanchevägen, Danderyd",
  category: "Nybyggnation",
  intro: "Ett nybyggnationsprojekt i Danderyd. Bilderna visar ett ljust allrum och ett färdigt badrum.",
  details: "Projektet på Blanchevägen omfattade arbete med ett nytt hus. De färdiga rummen visar två olika delar av helheten: ett öppet allrum och ett badrum. Vid nybyggnation behöver planering och utförande av byggnadens olika delar samspela från början.",
  image: "/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg",
  imageAlt: "Ljust allrum i nybyggnation på Blanchevägen i Danderyd",
  width: 964, height: 723,
  secondaryImage: { src: "/images/projects/blanchevagen/nybyggnation-mikrocementbadrum-danderyd.jpeg", alt: "Badrum i nybyggnation på Blanchevägen i Danderyd", width: 2048, height: 1536 },
  service: { href: "/tjanster/nybyggnation/", label: "Läs om nybyggnation" },
};

export default function Page() { return <ProjectDetail project={project} />; }
