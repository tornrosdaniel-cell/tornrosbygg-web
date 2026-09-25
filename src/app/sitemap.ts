import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/tjanster/",
  "/tjanster/renovering/",
  "/tjanster/badrumsrenovering/",
  "/tjanster/tillbyggnad/",
  "/tjanster/nybyggnation/",
  "/tjanster/attefallshus/",
  "/tjanster/markarbeten/",
  "/tjanster/dranering/",
  "/kontakt/",
  "/om-oss/",
  "/fastighetsagare/",
  "/byggtips/",
  "/byggtips/planera-renovering/",
  "/byggtips/jamfora-bygg-offerter/",
  "/byggtips/forbereda-tillbyggnad/",
  "/projekt/",
  "/projekt/renovering-namndemansgatan-solna/",
  "/projekt/tillbyggnad-sjovagen-solna/",
  "/projekt/nybyggnation-blanchevagen-danderyd/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://tornrosbygg.se${route}` }));
}
