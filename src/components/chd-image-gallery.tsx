import Image from "next/image";
import { type ChdImage } from "@/content/chd-images";
import styles from "./chd-image-gallery.module.css";

type GalleryItem = { image: ChdImage; title: string };

export function ChdImageGallery({ id, title, intro, items }: {
  id: string;
  title: string;
  intro: string;
  items: GalleryItem[];
}) {
  return (
    <section id={id} className={styles.gallery} aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className={styles.kicker}>Form, material & ljus</p>
        <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.grid}>
          {items.map(({ image }) => <figure key={image.src}>
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1244px) 574px, (min-width: 768px) 46vw, calc(100vw - 32px)" />
          </figure>)}
        </div>
      </div>
    </section>
  );
}
