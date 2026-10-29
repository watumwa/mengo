import Link from "next/link";
import {publicContent,formatUGDate,type ApiPage,type ChamberArticle} from "./cmsData";
export async function LatestChamberUpdates(){
 const data=await publicContent<ApiPage<ChamberArticle>>("/api/v1/articles/?page=1");
 if(!data?.results.length)return null;
 return <section className="mc-content-latest-home" aria-labelledby="mc-latest-title"><div className="bp-shell"><div className="mc-content-section-heading"><div><p className="mc-content-label">FROM THE CHAMBER</p><h2 id="mc-latest-title">Latest news & announcements</h2></div><Link href="/insights">All updates →</Link></div><div className="mc-content-grid">{data.results.slice(0,3).map(item=><article className="mc-content-card" key={item.id}><p className="mc-content-label">{item.slug.startsWith("announcement-")?"ANNOUNCEMENT":"CHAMBER NEWS"} · {formatUGDate(item.published_at)}</p><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/insights/${item.slug}`}>Read more →</Link></article>)}</div></div></section>;
}
