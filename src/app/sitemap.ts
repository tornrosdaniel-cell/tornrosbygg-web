import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tornrosbygg.se",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://tornrosbygg.se/tjanster",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/renovering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/badrumsrenovering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/tillbyggnad",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/nybyggnation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/attefallshus",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/markarbeten",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tornrosbygg.se/tjanster/dranering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...[
      "/kontakt",
      "/om-oss",
      "/fastighetsagare",
      "/byggtips",
      "/projekt",
      "/projekt/renovering-namndemansgatan-solna",
      "/projekt/tillbyggnad-sjovagen-solna",
      "/projekt/nybyggnation-blanchevagen-danderyd",
    ].map((path) => ({
      url: `https://tornrosbygg.se${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
