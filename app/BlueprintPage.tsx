import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { PageHero, Shell } from "./components";
import { ResponsivePhoto } from "./ResponsivePhoto";
import type { ChamberPhoto } from "./realPhotos";

type BlueprintCard = { title: string; text: string; href?: string; label?: string };
type BlueprintSection = { eyebrow: string; title: string; text: string; cards?: BlueprintCard[] };
export type BlueprintPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: ChamberPhoto;
  imageCaption?: string;
  source?: { label: string; href: string };
  sections: BlueprintSection[];
  action?: { label: string; href: string };
};

export function BlueprintPage({ eyebrow, title, description, image, imageCaption, source, sections, action }: BlueprintPageProps) {
  return <Shell><main className="bp-editorial-page"><PageHero eyebrow={eyebrow} title={title} description={description}/><section className="bp-editorial-intro"><div className="bp-shell"><div><p className="bp-eyebrow">Editorial standard</p><h2>Built for verified public information.</h2><p>This destination is structured for the approved content, images, sources and records required by the MCCL website blueprint. Content marked for verification is not presented as confirmed fact, programme availability or official policy.</p>{source && <a href={source.href} target="_blank" rel="noreferrer" className="bp-source-link">{source.label} <ExternalLink size={15}/></a>}</div>{image ? <figure><ResponsivePhoto photo={image} width={960} height={680} sizes="(max-width:800px) 100vw, 48vw"/><figcaption>{imageCaption ?? image.alt}</figcaption></figure> : <div className="bp-image-placeholder"><span>Approved photography required</span><strong>Authentic image placement reserved</strong><p>Use a source-cleared photograph specific to this page&apos;s subject. No generic image will be substituted.</p></div>}</div></section><div className="bp-editorial-sections">{sections.map((section, index) => <section className={index % 2 ? "bp-editorial-section bp-editorial-section-soft" : "bp-editorial-section"} key={section.title}><div className="bp-shell"><p className="bp-eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p className="bp-editorial-lead">{section.text}</p>{section.cards && <div className="bp-editorial-card-grid">{section.cards.map((card) => <article key={card.title}>{card.label && <span>{card.label}</span>}<CheckCircle2 size={20}/><h3>{card.title}</h3><p>{card.text}</p>{card.href && <Link href={card.href}>Explore <ArrowRight size={15}/></Link>}</article>)}</div>}</div></section>)}</div>{action && <section className="bp-editorial-cta"><div className="bp-shell"><div><p className="bp-eyebrow">Connect with MCCL</p><h2>Take the next informed step.</h2><p>Use the official enquiry route for updates, partnerships and content that requires confirmation.</p></div><Link href={action.href}>{action.label} <ArrowUpRight size={18}/></Link></div></section>}</main></Shell>;
}
