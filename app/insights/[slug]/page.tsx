import Link from "next/link";
import {notFound} from "next/navigation";
import {Shell} from "../../components";
import {publicContent,formatUGDate,type ChamberArticle} from "../../cmsData";
import "../../content-hub.css";
export const revalidate=90;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return {title:"News | Mengo Chamber"};
 const article=await publicContent<ChamberArticle>(`/api/v1/articles/${slug}/`);
 return {title:article?`${article.title} | Mengo Chamber`:"News | Mengo Chamber",description:article?.summary||"Mengo Chamber of Commerce updates"};
}
export default async function NewsStory({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))notFound();
 const article=await publicContent<ChamberArticle>(`/api/v1/articles/${slug}/`);
 if(!article)notFound();
 const paragraphs=article.body.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
 return <Shell><main className="mc-content-hub"><div className="bp-shell mc-content-article"><Link href="/insights" className="mc-content-back">← News & insights</Link><p className="mc-content-label">{slug.startsWith("announcement-")?"CHAMBER ANNOUNCEMENT":"CHAMBER NEWS"} · {formatUGDate(article.published_at)}</p><h1>{article.title}</h1><p className="mc-content-deck">{article.summary}</p><div className="mc-content-body">{paragraphs.map((p,index)=><p key={index}>{p}</p>)}</div><Link className="mc-content-back" href="/insights">← All updates</Link></div></main></Shell>;
}
