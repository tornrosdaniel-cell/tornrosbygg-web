import type { MetadataRoute } from "next";
import { getPublishedProjects, projectPath } from "@/content/projects";

const routes = [
  "/",
  "/tjanster",
  "/tjanster/renovering",
  "/tjanster/badrumsrenovering",
  "/tjanster/tillbyggnad",
  "/tjanster/nybyggnation",
  "/tjanster/attefallshus",
  "/tjanster/markarbeten",
  "/tjanster/dranering",
  "/kontakt",
  "/integritet",
  "/om-oss",
  "/fastighetsagare",
  "/byggtips",
  "/byggtips/planera-renovering",
  "/byggtips/jamfora-bygg-offerter",
  "/byggtips/forbereda-tillbyggnad",
  "/byggtips/vad-kostar-badrumsrenovering",
  "/byggtips/totalrenovering-eller-delrenovering",
  "/byggtips/infor-dranering",
  "/byggtips/andringar-tillaggsarbeten-renovering",
  "/byggtips/dokumentera-byggprojekt",
  "/projekt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...getPublishedProjects().map(projectPath)].map((route) => ({ url: `https://tornrosbygg.se${route}` }));
}
