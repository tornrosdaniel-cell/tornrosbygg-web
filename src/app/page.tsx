import { ChdImageGallery } from "@/components/chd-image-gallery";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { getFeaturedProjects, projectPath } from "@/content/projects";
import { chdImages, chdConceptImages, chdRoomImages } from "@/content/chd-images";
import styles from "./chd-home.module.css";

export const metadata: Metadata = {
  title: "Custom Home Design & Build i Stockholm | Törnros Bygg",
  description: "Personliga hem från idé till genomförande. Törnros Bygg samordnar nybyggnation, tillbyggnad och renovering i Stockholm. Även mindre byggprojekt är välkomna.",
  alternates: { canonical: "/" },
};

const services = [
  ["Badrumsrenovering", "/tjanster/badrumsrenovering"],
  ["Poolbyggen & utemiljö", "/tjanster/markarbeten#pool-och-utemiljo"],
  ["Tillbyggnader", "/tjanster/tillbyggnad"],
  ["Totalrenovering", "/tjanster/renovering"],
  ["Markarbeten", "/tjanster/markarbeten"],
  ["Innergårdar & takarbeten", "/fastighetsagare#innergardar-och-tak"],
  ["Lekplatser & råvindsprojekt", "/fastighetsagare#lekplatser-och-ravindar"],
  ["Projektledning & besiktning", "/fastighetsagare#projektledning-och-besiktning"],
];
const steps = [
  ["01", "Vision och behov", "Vi börjar med hur du vill leva. Platsen, dina idéer och vardagens behov sätter riktningen."],
  ["02", "Design och planering", "Vi utforskar rum, material och funktion tillsammans med de kompetenser som ditt projekt behöver."],
  ["03", "Projektering och budget", "Underlag, omfattning och budget samordnas innan arbetet tar form. Du får en tydlig bild av nästa steg."],
  ["04", "Byggnation och färdigställande", "Vi håller ihop genomförandet med löpande dialog, avstämningar och omsorg om detaljerna."],
];
const environments = [
  { image: chdImages.joinery, href: "/tjanster/renovering", label: "Form & funktion", title: "Platsbyggda lösningar", wide: true, note: "Rundade former, trähyllor och förvaring som hör till rummet." },
  { image: chdImages.terrazzo, href: "/tjanster/badrumsrenovering", label: "Material & ljus", title: "Ett personligt badrum", wide: false, note: "Terrazzo, takljus och ett fristående badkar." },
  { image: chdImages.stone, href: "/tjanster/badrumsrenovering", label: "Sten & glas", title: "Detaljer som samspelar", wide: false, note: "Stenkaraktär, glas och svarta detaljer." },
  { image: chdImages.garden, href: "/tjanster/markarbeten#pool-och-utemiljo", label: "Ute & inne", title: "Rum för trädgården", wide: true, note: "Trä, nivåskillnader och en ny väg genom utemiljön." },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroPhoto}><Image src={chdImages.home.src} alt={chdImages.home.alt} fill preload sizes="100vw" className={styles.heroImage} /></div>
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>Törnros Bygg · Custom Home Design & Build</p>
          <h1 id="hero-title" className={styles.heroTitle} lang="en">Homes designed<br />around <em>you.</em></h1>
          <p className={styles.heroSubtitle}>Från vision till verklighet.</p>
          <p className={styles.heroDescription}>Vi skapar personliga hem där arkitektur, material och funktion möts. Från första idé till färdigt resultat.</p>
          <div className={styles.actions}>
            <Link href="#koncept" className={styles.lightButton}>Utforska vårt koncept <span aria-hidden="true">↗</span></Link>
            <Link href="/kontakt" className={styles.outlineButton}>Berätta om ditt projekt <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.heroFoot}><span>Design. Teknik. Genomförande. Diskretion.</span><a href="#koncept">Upptäck mer <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="koncept" className={styles.offers} aria-labelledby="concept-title">
        <div className="container">
          <div className={styles.sectionHeading}><p className={styles.kicker}>01 / Vårt koncept</p><div><h2 id="concept-title" className={styles.title}>Två vägar.<br /><em>Samma kvalitet.</em></h2><p className={styles.intro}>Ett helt nytt hem eller en genomtänkt förändring. Vi tar oss an både helheten och det som gör skillnad i en del av ditt hem.</p></div></div>
          <div className={styles.offerGrid}>
            <article className={styles.photoOffer}>
              <Image src={chdImages.custom.src} alt={chdImages.custom.alt} fill sizes="(min-width: 1244px) 574px, (min-width: 768px) 46vw, calc(100vw - 32px)" className={styles.offerImage} />
              <div className={styles.offerShade} />
              <div className={styles.offerContent}>
                <span className={styles.offerNumber}>A / Helheten</span><h3 lang="en">Custom Homes</h3>
                <p>Personliga hem med samordnad design, planering, projektering och byggnation. Från första idé till genomförande.</p>
                <Link href="/tjanster/nybyggnation" className={styles.photoLink}>Utforska Custom Homes <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className={styles.photoOffer}>
              <Image src={chdImages.services.src} alt={chdImages.services.alt} fill sizes="(min-width: 1244px) 574px, (min-width: 768px) 46vw, calc(100vw - 32px)" className={styles.offerImage} />
              <div className={styles.offerShade} />
              <div className={styles.offerContent}>
                <span className={styles.offerNumber}>B / Det utvalda</span><h3 lang="en">Selected Services</h3>
                <p>Badrum, pooler, tillbyggnader och renoveringar. Även mindre, avgränsade uppdrag är välkomna.</p>
                <Link href="/tjanster" className={styles.photoLink}>Se våra tjänster <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
          <div className={styles.serviceDirectory}><p className={styles.kicker}>Utvalda uppdrag</p><ul className={styles.serviceList}>{services.map(([label, href]) => <li key={href}><Link href={href}>{label}<span aria-hidden="true">↗</span></Link></li>)}</ul></div>
        </div>
      </section>

      <ChdImageGallery id="custom-home-environments" title="Rum för det personliga." intro="En vinkällare med berget som fond. En egen biograf. Rum för vila och stora möten. Custom Home Design börjar med hur du vill leva." items={[
        { image: chdRoomImages.wine, title: "Vinkällare med berget som fond" },
        { image: chdRoomImages.cinema, title: "Din egen biograf" },
        { image: chdImages.discretion, title: "Ljus och rymd att samlas i" },
        { image: chdRoomImages.bedroom, title: "En personlig plats för vila" },
      ]} />

      <section id="vision" className={styles.vision} aria-labelledby="vision-title">
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCopy}>
              <p className={styles.kicker}>Design & genomförande</p>
              <h2 id="vision-title" className={styles.title}>Från vision<br /><em>till verklighet.</em></h2>
              <p className={styles.visionLead}>Ett personligt hem börjar med en idé.</p>
              <p>Vi utvecklar huskoncept där arkitektur, funktion, material och byggteknik samspelar redan från första skissen.</p>
              <p>I ett av våra genomförda helhetsprojekt tog vi fram husets ursprungliga design och ritningar, som därefter vidareutvecklades av en arkitekt till färdiga handlingar. Vi ansvarade sedan för byggnationen fram till färdigt hem.</p>
              <p>Det är kärnan i Custom Home Design & Build.</p>
              <Link href="/tjanster/nybyggnation" className={styles.textLink}>Utforska Custom Homes <span aria-hidden="true">↗</span></Link>
            </div>
            <figure className={styles.visionExterior}>
              <Image src={chdConceptImages.exterior.src} width={chdConceptImages.exterior.width} height={chdConceptImages.exterior.height} alt={chdConceptImages.exterior.alt} sizes="(min-width: 1244px) 480px, (min-width: 768px) 42vw, calc(100vw - 32px)" />
            </figure>
          </div>
          <figure className={styles.visionKitchen}>
            <Image src={chdConceptImages.kitchen.src} width={chdConceptImages.kitchen.width} height={chdConceptImages.kitchen.height} alt={chdConceptImages.kitchen.alt} sizes="(min-width: 1244px) 1172px, calc(100vw - 32px)" />
          </figure>
        </div>
      </section>

      <section id="process" className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <div className={styles.sectionHeading}><p className={styles.kicker}>02 / Från tanke till hem</p><div><h2 id="process-title" className={styles.title}>En tydlig riktning.<br /><em>Hela vägen.</em></h2><p className={styles.intro}>Vi gör plats för dina idéer och samordnar vägen framåt. Processen anpassas till uppdraget, från ett enskilt rum till ett helt hus.</p></div></div>
          <ol className={styles.processGrid}>{steps.map(([number, title, text]) => <li key={number}><span className={styles.stepNumber}>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
          <p className={styles.processNote}>Rätt kompetens för rätt uppgift. Arkitekter, konstruktörer och andra specialister samordnas när projektet behöver det.</p>
        </div>
      </section>

      <section className={styles.environments} aria-labelledby="environment-title">
        <div className="container">
          <div className={styles.environmentHeading}><div><p className={styles.kicker}>03 / Utvalda miljöer</p><h2 id="environment-title" className={styles.title}>Material. Ljus.<br /><em>Känslan av hemma.</em></h2></div><p>Rum, material och personliga uttryck.<br />Presenterade med omsorg om kundernas integritet.</p></div>
          <div className={styles.environmentGrid}>{environments.map(({ href, image, label, title, wide }) => <figure key={image.src} className={styles.environmentCard}>
            <Link href={href} aria-label={`Läs om ${title.toLocaleLowerCase("sv-SE")}`} className={styles.environmentImage}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={wide ? "(min-width: 1244px) 670px, (min-width: 768px) 58vw, calc(100vw - 32px)" : "(min-width: 1244px) 478px, (min-width: 768px) 42vw, calc(100vw - 32px)"} />
              <span className={styles.imageArrow} aria-hidden="true">↗</span>
            </Link>
            <figcaption><p className={styles.kicker}>{label}</p><h3><Link href={href}>{title}</Link></h3></figcaption>
          </figure>)}</div>
          <div className={styles.archiveLink}><span>Varje miljö har sin egen historia.</span><Link href="/projekt" className={styles.textLink}>Se fler miljöer & arbetsmoment <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className={styles.discretion} aria-labelledby="discretion-title">
        <div className="container">
          <div className={styles.discretionCopy}><p className={styles.kicker}>04 / Ett personligt förtroende</p><h2 id="discretion-title" className={styles.title}>Personliga hem förtjänar <em>personlig integritet.</em></h2><p>Att få arbeta i någons hem är ett förtroende. Vi arbetar diskret och delar inte rutinmässigt tidigare kunders kontaktuppgifter som referenser.</p><p>Vi berättar gärna om vårt arbetssätt, relevanta arbetsmoment och hur vi kan ta oss an ditt projekt. Ett första samtal handlar om dina förutsättningar.</p><Link href="/om-oss" className={styles.textLink}>Möt Törnros Bygg <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section id="projektide" className={styles.contact} aria-labelledby="contact-title">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactCopy}><p className={styles.kicker}>05 / Början på något personligt</p><h2 id="contact-title" className={styles.title} lang="en">Tell us what<br />you <em>envision.</em></h2><p>En idé, en plats eller en känsla av vad som saknas. Berätta vad du har i tankarna, så börjar vi där.</p><p>Vi arbetar i Storstockholmsområdet. Både kompletta hem och mindre byggprojekt är välkomna.</p><div className={styles.contactDetails}><a href="mailto:hej@tornrosbygg.se">hej@tornrosbygg.se <span aria-hidden="true">↗</span></a><a href="tel:+46735224488">0735-224488 <span aria-hidden="true">↗</span></a></div><Link href="/kontakt" className={styles.textLink}>Alla kontaktvägar <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.contactForm}><h3>Berätta om ditt projekt</h3><p>Fyll i det du vet i dag. Namn, e-post och en kort projektbeskrivning räcker för att börja.</p><ContactForm /></div>
        </div>
      </section>
      <nav aria-label="Projekt i urval" className={styles.relatedProjects}><div className="container"><span>Utforska vidare</span>{getFeaturedProjects().map((project) => <Link key={project.slug} href={projectPath(project)}>{project.category}<span aria-hidden="true"> ↗</span></Link>)}<Link href="/byggtips">Byggtips & guider <span aria-hidden="true">↗</span></Link></div></nav>
    </main>
  );
}
