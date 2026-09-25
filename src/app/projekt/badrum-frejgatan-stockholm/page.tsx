import type { Metadata } from "next";
import { ProjectDetail, type Project } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Badrumsrenovering på Frejgatan, Stockholm | Törnros Bygg",
  description: "Se ett badrumsprojekt på Frejgatan i Stockholm med ändrad planering, tvättpelare och nischer.",
  alternates: { canonical: "/projekt/badrum-frejgatan-stockholm/" },
};

const project: Project = {
  title: "Badrum på Frejgatan",
  location: "Frejgatan, Stockholm",
  category: "Badrumsrenovering",
  intro: "Ett badrumsprojekt där önskemålet var ett större, modernare rum med plats för tvättpelare och en tydligare duschlösning.",
  details: "Beställarens önskemål gällde en avskiljande vägg för tvättpelare, dolda rör, en annan placering av golvbrunnen och inbyggda nischer vid dusch och handfat. Bilder från den tidigare projektdokumentationen visar flera steg under renoveringen. Bilden här visar badrummet under slutmontering.",
  highlights: ["Ny planering för dusch och tvättpelare", "Ändrad placering av golvbrunn", "Inbyggda nischer vid dusch och handfat"],
  image: "/images/projects/frejgatan/badrum-frejgatan.webp",
  imageAlt: "Badrum på Frejgatan under slutmontering, med nischer och duschvägg",
  width: 2048, height: 1536,
  service: { href: "/tjanster/badrumsrenovering/", label: "Läs om badrumsrenovering" },
};

export default function Page() { return <ProjectDetail project={project} />; }
