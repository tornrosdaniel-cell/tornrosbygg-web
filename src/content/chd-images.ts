/** Approved presentation assets. Publication checksums: scripts/fixtures/chd-images.json; original provenance retained locally. */
export type ChdImage = { src: string; width: number; height: number; alt: string; kind: "edited-photo" | "concept" };

export const chdImages = {
  home: {"src":"/images/chd/final/timber-home-final.webp","width":1448,"height":1086,"alt":"Exteriör med träfasad, svarta fönsterpartier och varm fasadbelysning","kind":"edited-photo"},
  custom: {"src":"/images/chd/final/living-fireplace-final.webp","width":1448,"height":1086,"alt":"Interiör med eldstad, stora fönster och varma träytor","kind":"edited-photo"},
  services: {"src":"/images/chd/final/terrazzo-detail-final.webp","width":1448,"height":1086,"alt":"Detaljbild av fristående badkar mot terrazzovägg","kind":"edited-photo"},
  joinery: {"src":"/images/chd/final/arched-joinery-final.webp","width":1448,"height":1086,"alt":"Interiör med platsbyggd förvaring, välvd öppning och trähyllor","kind":"edited-photo"},
  terrazzo: {"src":"/images/chd/final/terrazzo-bath-final.webp","width":1448,"height":1086,"alt":"Helhetsbild av terrazzobadrum med takljus, badkar och bastu","kind":"edited-photo"},
  stone: {"src":"/images/chd/final/stone-bath-final.webp","width":1448,"height":1086,"alt":"Badrumsmiljö med stenkaraktär, glasvägg och svarta detaljer","kind":"edited-photo"},
  garden: {"src":"/images/chd/final/terraced-garden-final.webp","width":1448,"height":1086,"alt":"Utemiljö med trätrappor, naturstensmurar och belysning","kind":"edited-photo"},
  discretion: {"src":"/images/chd/final/great-hall-concept.webp","width":1448,"height":1086,"alt":"Stor sal med dubbla fönsterrader och varm belysning","kind":"concept"},
} satisfies Record<string, ChdImage>;

export const chdConceptImages = {
  exterior: {"src":"/images/chd/final/house-architecture-final.webp","width":1086,"height":1448,"alt":"Exteriör med putsfasad, glasräcke och träundertak under balkongen","kind":"concept"},
  kitchen: {"src":"/images/chd/final/kitchen-concept.webp","width":1448,"height":1086,"alt":"Kök med marmorbänkskivor, träinredning och ribbvägg vid en nedåtgående trappa","kind":"concept"},
} satisfies Record<string, ChdImage>;

export const chdRoomImages = {
  bedroom: {"src":"/images/chd/final/bedroom-concept.webp","width":1448,"height":1086,"alt":"Sovrum med stoppad sänggavel, textilier och varm indirekt belysning","kind":"concept"},
  wine: {"src":"/images/chd/final/wine-cellar-concept.webp","width":1600,"height":883,"alt":"Vinkällare med glasparti mot bergschakt och sittbänkar","kind":"concept"},
  cinema: {"src":"/images/chd/final/home-cinema-concept.webp","width":1600,"height":850,"alt":"Hemmabio med sittplatser i nivåer och varm effektbelysning","kind":"concept"},
} satisfies Record<string, ChdImage>;
