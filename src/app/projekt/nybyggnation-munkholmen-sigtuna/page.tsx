import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Nybyggnation på Munkholmen, Sigtuna | Törnros Bygg",
  description: "Ett färdigbyggt hus på Munkholmen i Sigtuna. Läs om byggprojektet och se ett autentiskt foto från byggtiden.",
  alternates: { canonical: "/projekt/nybyggnation-munkholmen-sigtuna/" },
};

const project: Project = {
  title: "Nybyggnation på Munkholmen",
  location: "Munkholmen, Sigtuna",
  category: "Nybyggnation",
  intro: "På Munkholmen i Sigtuna byggde vi ett nytt hus om cirka 450 kvm. Huset är färdigt; utomhusarbetet ingick inte i vårt uppdrag.",
  details: "Uppdraget började med rivning av det tidigare huset och bergarbete inför nybyggnationen. Projektfotot visar huset under byggtiden, när fasadarbeten pågick. Huset är numera färdigbyggt. Arbeten med utemiljön återstår men utförs inte av Törnros Bygg.",
  highlights: ["Rivning av tidigare hus", "Bergarbete inför nybyggnationen", "Nybyggnation av ett hus om cirka 450 kvm"],
  image: "/images/projects/munkholmen/nybyggnation-under-arbete.webp",
  imageAlt: "Huset på Munkholmen under byggtiden med byggställning framför fasaden",
  width: 1200, height: 900,
  service: { href: "/tjanster/nybyggnation/", label: "Läs om nybyggnation" },
};

export default function Page() { return <ProjectDetail project={project} />; }
