import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { PageHero, Shell } from "./components";
import { ResponsivePhoto } from "./ResponsivePhoto";
import type { ChamberPhoto } from "./realPhotos";

type ContentCard = { title: string; text: string; href?: string; label?: string };
type ContentSection = { eyebrow: string; title: string; text: string; cards?: ContentCard[] };
export type BlueprintPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: ChamberPhoto;
  imageCaption?: string;
  gallery?: Array<{ photo: ChamberPhoto; label: string }>;
  source?: { label: string; href: string };
  sections: ContentSection[];
  action?: { label: string; href: string };
};

export function BlueprintPage({ eyebrow, title, description, image, imageCaption, gallery, source, sections, action }: BlueprintPageProps) {
  return <Shell>
    <main className="bp-editorial-page">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      {(image || source) && <section className="bp-editorial-media"><div className="bp-shell">
        {image && <figure><ResponsivePhoto photo={image} width={1200} height={630} sizes="(max-width:800px) 100vw, 1100px" /><figcaption>{imageCaption ?? image.alt}</figcaption></figure>}
        {source && <a href={source.href} target="_blank" rel="noopener noreferrer" className="bp-source-link">{source.label} <ExternalLink size={15} aria-hidden="true" /></a>}
      </div></section>}
      <div className="bp-editorial-sections">{sections.map((section, index) =>
        <Fragment key={section.title}><section className={index % 2 ? "bp-editorial-section bp-editorial-section-soft" : "bp-editorial-section"} key={section.title}>
          <div className="bp-shell">
            <p className="bp-eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p className="bp-editorial-lead">{section.text}</p>
            {section.cards && <div className="bp-editorial-card-grid">{section.cards.map(card =>
              <article key={card.title}>
                {card.label && <span>{card.label}</span>}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.href && <Link href={card.href}>Read more <ArrowRight size={15} aria-hidden="true" /></Link>}
              </article>
            )}</div>}
          </div>
        </section>
        {index === 0 && gallery && gallery.length > 0 && <section className="bp-related-photo-section" aria-label={`Photographs related to ${title}`}>
          <div className="bp-shell bp-related-photo-grid">
            {gallery.map(({ photo, label }) => <figure key={photo.src}>
              <ResponsivePhoto photo={photo} width={750} height={470} sizes="(max-width:700px) 100vw, 50vw" />
              <figcaption>{label}</figcaption>
            </figure>)}
          </div>
        </section>}
        </Fragment>
      )}</div>
      {action && <section className="bp-editorial-cta"><div className="bp-shell"><div>
        <p className="bp-eyebrow">RELATED INFORMATION</p>
        <h2>{action.label}</h2>
        <p>Explore related information about {eyebrow.toLowerCase()} and the Chamber's work.</p>
      </div><Link href={action.href}>Read more <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>}
    </main>
  </Shell>;
}
