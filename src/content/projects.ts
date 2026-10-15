/** Project facts and existing image selection. See docs/projects.md before adding images. */
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  phase?: "before" | "during" | "after";
};

export type Project = {
  slug: string;
  status: "draft" | "published";
  title: string;
  location: string;
  category: string;
  intro: string;
  details: string;
  highlights?: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  service: { href: string; label: string };
  seo: { title: string; description: string };
  featuredOrder?: number;
};

export const projects: Project[] = [
  {
    "slug": "renovering-namndemansgatan-solna",
    "status": "published",
    "title": "Renovering på Nämndemansgatan",
    "location": "Nämndemansgatan, Solna",
    "category": "Renovering",
    "intro": "En lägenhet om cirka 140 kvm på Nämndemansgatan i Solna renoverades med nya golv, två badrum, kök och tvättstuga.",
    "details": "Bostaden revs ut inför renoveringen. Arbetet omfattade nya funktioner och ytskikt i flera rum samt renovering av den befintliga trappan. Huvudbilden visar vardagsrummet efter renoveringen. Galleriet visar rivning, pågående arbeten och två badrum. Bilden av duschbadrummet visar fortfarande slutmontering.",
    "highlights": [
      "Nya golv med ljudisolering i hela bostaden",
      "Två nya badrum samt nytt kök och tvättstuga",
      "Renovering av befintlig trappa till övre plan",
      "Nya ytskikt i två vardagsrum och tre sovrum"
    ],
    "service": {
      "href": "/tjanster/renovering/",
      "label": "Läs om renovering"
    },
    "hero": {
      "src": "/images/projects/namndemansgatan/renovering-vardagsrum-solna.jpeg",
      "alt": "Färdigt vardagsrum efter renovering på Nämndemansgatan i Solna",
      "width": 2048,
      "height": 1536,
      "phase": "after",
      "caption": "Vardagsrum efter renoveringen på Nämndemansgatan."
    },
    "gallery": [
      {
        "src": "/images/projects/namndemansgatan/rum-under-rivning.webp",
        "alt": "Rum med frilagda väggar under rivning på Nämndemansgatan i Solna",
        "width": 540,
        "height": 405,
        "caption": "Rummet under rivningsarbetet.",
        "phase": "during"
      },
      {
        "src": "/images/projects/namndemansgatan/bostad-under-renovering.webp",
        "alt": "Bostaden på Nämndemansgatan under renovering med material och stege",
        "width": 540,
        "height": 405,
        "caption": "Invändiga arbeten under renoveringen.",
        "phase": "during"
      },
      {
        "src": "/images/projects/namndemansgatan/renovering-efter-solna.jpeg",
        "alt": "Badrum på Nämndemansgatan under slutmontering",
        "width": 540,
        "height": 720,
        "caption": "Badrummet under slutmontering, med skydd kvar på inredningen.",
        "phase": "during"
      },
      {
        "src": "/images/projects/namndemansgatan/badrum-med-badkar.webp",
        "alt": "Badrum med badkar och sexkantiga golvplattor på Nämndemansgatan",
        "width": 540,
        "height": 720,
        "caption": "Badrum med badkar och sexkantiga golvplattor."
      }
    ],
    "seo": {
      "title": "Renovering på Nämndemansgatan, Solna | Törnros Bygg",
      "description": "Renovering av cirka 140 kvm på Nämndemansgatan i Solna med nya golv, två badrum, kök och tvättstuga."
    },
    "featuredOrder": 2
  },
  {
    "slug": "tillbyggnad-sjovagen-solna",
    "status": "published",
    "title": "Tillbyggnad på Sjövägen",
    "location": "Sjövägen, Solna",
    "category": "Tillbyggnad",
    "intro": "På Sjövägen i Solna byggdes en befintlig terrass om till ett nytt vardagsrum i anslutning till huset.",
    "details": "En yttervägg togs bort för att skapa en öppnare förbindelse mellan vardagsrum och kök. Tillbyggnaden gav också plats åt en ny terrass på övre plan och ett garage under vardagsrummet.",
    "highlights": [
      "Tidigare terrass blev vardagsrum",
      "Öppnare samband mellan vardagsrum och kök",
      "Ny övre terrass med åtkomst från sovrum och badrum",
      "Garage under vardagsrummet"
    ],
    "service": {
      "href": "/tjanster/tillbyggnad/",
      "label": "Läs om tillbyggnad"
    },
    "hero": {
      "src": "/images/projects/sjovagen/tillbyggnad-solna.jpeg",
      "alt": "Färdig tillbyggnad med terrass på Sjövägen i Solna",
      "width": 740,
      "height": 555
    },
    "gallery": [
      {
        "src": "/images/projects/sjovagen/tillbyggnad-invandigt-arbete.webp",
        "alt": "Tillbyggnaden på Sjövägen med väggar och bjälklag under invändigt arbete",
        "width": 480,
        "height": 640,
        "caption": "Tillbyggnaden under invändigt arbete.",
        "phase": "during"
      }
    ],
    "seo": {
      "title": "Tillbyggnad på Sjövägen, Solna | Törnros Bygg",
      "description": "Se tillbyggnaden på Sjövägen i Solna där en tidigare terrass blev vardagsrum, med ny terrass ovanpå och garage under."
    },
    "featuredOrder": 3
  },
  {
    "slug": "nybyggnation-blanchevagen-danderyd",
    "status": "published",
    "title": "Nybyggnation på Blanchevägen",
    "location": "Blanchevägen, Danderyd",
    "category": "Nybyggnation",
    "intro": "På Blanchevägen i Danderyd omfattade uppdraget ett nytt hus om cirka 390 kvm i tre plan, från förberedelse av tomten till bostad och utemiljö.",
    "details": "Det tidigare huset revs och marken åtgärdades med hänsyn till den tidigare användningen. Inför grunden utfördes schaktning och bergsprängning. Bilderna visar markförberedelser, stomme och invändiga miljöer från projektet.",
    "highlights": [
      "Rivning av det tidigare huset och åtgärder i marken",
      "Schaktning och bergsprängning inför grunden",
      "Nytt hus om cirka 390 kvm i tre plan",
      "Pool och terrass i utemiljön"
    ],
    "service": {
      "href": "/tjanster/nybyggnation/",
      "label": "Läs om nybyggnation"
    },
    "hero": {
      "src": "/images/projects/blanchevagen/nybyggnation-allrum-danderyd.jpeg",
      "alt": "Ljust allrum i nybyggnation på Blanchevägen i Danderyd",
      "width": 964,
      "height": 723,
      "phase": "after",
      "caption": "Allrum i huset på Blanchevägen."
    },
    "gallery": [
      {
        "src": "/images/projects/blanchevagen/markforberedelser.webp",
        "alt": "Förberedelser för husgrunden på Blanchevägen i Danderyd",
        "width": 540,
        "height": 405,
        "caption": "Markförberedelser inför husgrunden.",
        "phase": "during"
      },
      {
        "src": "/images/projects/blanchevagen/stomme.webp",
        "alt": "Trästomme med väggöppningar på Blanchevägen i Danderyd",
        "width": 540,
        "height": 405,
        "caption": "Trästommen under uppbyggnad.",
        "phase": "during"
      },
      {
        "src": "/images/projects/blanchevagen/nybyggnation-mikrocementbadrum-danderyd.jpeg",
        "alt": "Badrum i nybyggnation på Blanchevägen i Danderyd",
        "width": 2048,
        "height": 1536,
        "caption": "Badrum i nybyggnationen på Blanchevägen.",
        "phase": "after"
      },
      {
        "src": "/images/projects/blanchevagen/allrum-takljus.webp",
        "alt": "Allrum med takljus och glasdörrar på Blanchevägen i Danderyd",
        "width": 540,
        "height": 405,
        "caption": "Allrum med takljus och glasdörrar."
      }
    ],
    "seo": {
      "title": "Nybyggnation på Blanchevägen, Danderyd | Törnros Bygg",
      "description": "Nybyggnation på Blanchevägen i Danderyd: ett hus om cirka 390 kvm i tre plan, med markarbete, pool och terrass."
    },
    "featuredOrder": 1
  },
  {
    "slug": "badrum-frejgatan-stockholm",
    "status": "published",
    "title": "Badrum på Frejgatan",
    "location": "Frejgatan, Stockholm",
    "category": "Badrumsrenovering",
    "intro": "Ett badrumsprojekt där önskemålet var ett större, modernare rum med plats för tvättpelare och en tydligare duschlösning.",
    "details": "Beställarens önskemål gällde en avskiljande vägg för tvättpelare, dolda rör, en annan placering av golvbrunnen och inbyggda nischer vid dusch och handfat. Huvudbilden visar badrummet under slutmontering. Galleriet visar det tidigare badrummet, rivning och uppbyggnad.",
    "highlights": [
      "Ny planering för dusch och tvättpelare",
      "Ändrad placering av golvbrunn",
      "Inbyggda nischer vid dusch och handfat"
    ],
    "service": {
      "href": "/tjanster/badrumsrenovering/",
      "label": "Läs om badrumsrenovering"
    },
    "hero": {
      "src": "/images/projects/frejgatan/badrum-frejgatan.webp",
      "alt": "Badrum på Frejgatan under slutmontering, med nischer och duschvägg",
      "width": 1200,
      "height": 900,
      "phase": "during",
      "caption": "Badrummet på Frejgatan under slutmontering."
    },
    "gallery": [
      {
        "src": "/images/projects/frejgatan/badrum-fore.webp",
        "alt": "Det äldre badrummet på Frejgatan i Stockholm före renoveringen",
        "width": 540,
        "height": 405,
        "caption": "Badrummet före renoveringen.",
        "phase": "before"
      },
      {
        "src": "/images/projects/frejgatan/golvbrunn-rivning.webp",
        "alt": "Frilagd golvbrunn under rivning av badrummet på Frejgatan",
        "width": 540,
        "height": 405,
        "caption": "Golvbrunnen under rivningsarbetet.",
        "phase": "during"
      },
      {
        "src": "/images/projects/frejgatan/golvplattor-under-arbete.webp",
        "alt": "Läggning av golvplattor i badrummet på Frejgatan",
        "width": 540,
        "height": 405,
        "caption": "Badrumsgolvet under uppbyggnad.",
        "phase": "during"
      }
    ],
    "seo": {
      "title": "Badrumsrenovering på Frejgatan, Stockholm | Törnros Bygg",
      "description": "Se ett badrumsprojekt på Frejgatan i Stockholm med ändrad planering, tvättpelare och nischer."
    }
  },
  {
    "slug": "attefallshus-sjovagen-solna",
    "status": "published",
    "title": "Attefallshus på Sjövägen",
    "location": "Sjövägen, Solna",
    "category": "Attefallshus",
    "intro": "Ett attefallshus vid poolområdet på Sjövägen i Solna, med utrymmen för både vistelse och praktiska funktioner.",
    "details": "Uppdraget omfattade ett hus med sovloft, badrum och sittdel samt förråd och teknikrum för poolen. Huvudbilden visar husets utsida intill poolområdet. Galleriet visar arbetet med grund och stomme.",
    "highlights": [
      "Sovloft och sittdel",
      "Badrum",
      "Förråd och teknikrum för poolen"
    ],
    "service": {
      "href": "/tjanster/attefallshus/",
      "label": "Läs om attefallshus"
    },
    "hero": {
      "src": "/images/projects/attefallshus-sjovagen/attefallshus-sjovagen.webp",
      "alt": "Attefallshus vid poolområdet på Sjövägen i Solna",
      "width": 1200,
      "height": 900
    },
    "gallery": [
      {
        "src": "/images/projects/attefallshus-sjovagen/grund-armering.webp",
        "alt": "Armering och rördragning inför grunden till attefallshuset på Sjövägen i Solna",
        "width": 540,
        "height": 405,
        "caption": "Armering och rör inför grundläggningen.",
        "phase": "during"
      },
      {
        "src": "/images/projects/attefallshus-sjovagen/stomme-under-arbete.webp",
        "alt": "Trästommen till attefallshuset på Sjövägen under uppbyggnad",
        "width": 540,
        "height": 405,
        "caption": "Attefallshusets stomme under uppbyggnad.",
        "phase": "during"
      }
    ],
    "seo": {
      "title": "Attefallshus på Sjövägen, Solna | Törnros Bygg",
      "description": "Se attefallshuset på Sjövägen i Solna, planerat med sovloft, badrum, sittdel och plats för poolteknik."
    }
  },
  {
    "slug": "poolbygge-sjovagen-solna",
    "status": "published",
    "title": "Poolområde på Sjövägen",
    "location": "Sjövägen, Solna",
    "category": "Pool och utemiljö",
    "intro": "På Sjövägen ville beställaren göra om gräsmattan bakom huset till ett poolområde med plats för umgänge.",
    "details": "Önskemålet var en pool med sittgrupp och utekök. Bilderna visar poolens väggar och trädäcket medan arbetet pågick.",
    "highlights": [
      "Pool på tidigare gräsyta",
      "Trädäck och ytor för sittgrupp",
      "Planering för utekök"
    ],
    "service": {
      "href": "/tjanster/markarbeten/",
      "label": "Läs om markarbeten"
    },
    "hero": {
      "src": "/images/projects/pool-sjovagen/poolbygge-sjovagen.webp",
      "alt": "Pool och trädäck på Sjövägen under byggtiden",
      "width": 1200,
      "height": 900,
      "phase": "during",
      "caption": "Pool och trädäck under byggtiden på Sjövägen."
    },
    "gallery": [
      {
        "src": "/images/projects/pool-sjovagen/poolvaggar-under-arbete.webp",
        "alt": "Poolväggar under uppbyggnad på Sjövägen i Solna",
        "width": 540,
        "height": 405,
        "caption": "Poolens väggar under uppbyggnad.",
        "phase": "during"
      }
    ],
    "seo": {
      "title": "Poolbygge på Sjövägen, Solna | Törnros Bygg",
      "description": "Ett poolprojekt på Sjövägen i Solna där en gräsyta skulle bli en plats för pool, sittgrupp och utekök."
    }
  },
  {
    "slug": "servisbyte-dranering-solna",
    "status": "published",
    "title": "Servisbyte och dränering i Solna",
    "location": "en fastighet i Solna",
    "category": "Markarbete för fastighetsägare",
    "intro": "En bostadsrättsförening i Solna behövde undersöka en skadad servisledning och samordna arbetet med dränering och marken runt huset.",
    "details": "Föreningens förfrågan gällde att hitta och ersätta ledningen samt att samtidigt se över dräneringen. I uppdraget ingick även önskemål om ny marksten och att återställa en sliten gräsmatta. Fotot visar markarbetet vid fastigheten.",
    "highlights": [
      "Lokalisering och byte av servisledning",
      "Dränering i anslutning till fastigheten",
      "Marksten och återställning av gräsyta"
    ],
    "service": {
      "href": "/tjanster/dranering/",
      "label": "Läs om dränering"
    },
    "hero": {
      "src": "/images/projects/servisbyte-solna/servisbyte-solna.webp",
      "alt": "Markarbete vid bostadsrättsförening i Solna",
      "width": 400,
      "height": 300
    },
    "gallery": [
      {
        "src": "/images/projects/servisbyte-solna/ledning-i-schakt.webp",
        "alt": "Ledning i öppet schakt vid fastigheten i Solna",
        "width": 960,
        "height": 1280,
        "caption": "Ledningen i schaktet under markarbetet.",
        "phase": "during"
      }
    ],
    "seo": {
      "title": "Servisbyte och dränering i Solna | Törnros Bygg",
      "description": "Ett uppdrag för en bostadsrättsförening i Solna med servisledning, dränering och återställning av mark."
    }
  }
];

export function getPublishedProjects(items: readonly Project[] = projects): Project[] {
  return items.filter((project) => project.status === "published");
}

export function getProject(slug: string, items: readonly Project[] = projects): Project | undefined {
  return getPublishedProjects(items).find((project) => project.slug === slug);
}

export function projectPath(project: Pick<Project, "slug">): string {
  return `/projekt/${project.slug}`;
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects()
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => a.featuredOrder! - b.featuredOrder!);
}
