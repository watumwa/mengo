import Link from "next/link";
import {Shell} from "../components";
import {publicContent,safePage,formatUGDate,type ApiPage,type ChamberArticle} from "../cmsData";
import "../content-hub.css";
export const metadata={title:"News & Insights | Mengo Chamber of Commerce",description:"Read Chamber news, trade stories, announcements and enterprise updates."};
export const revalidate=90;
export default async function Insights({searchParams}:{searchParams:Promise<{page?:string;q?:string}>}){
 const filters=await searchParams;const page=safePage(filters.page);const q=typeof filters.q==="string"?filters.q.trim().slice(0,100):"";
 const params=new URLSearchParams({page:String(page)});if(q)params.set("q",q);
 const articles=await publicContent<ApiPage<ChamberArticle>>(`/api/v1/articles/?${params.toString()}`);
 const path=(p:number)=>{const next=new URLSearchParams(params);next.set("page",String(p));return "/insights?"+next.toString()};
 return <Shell><main className="mc-content-hub">
  <header className="mc-content-hero"><div className="bp-shell"><p>CHAMBER UPDATES</p><h1>News & Insights</h1><span>Perspectives on business, trade and enterprise development across Buganda.</span></div></header>
  <div className="bp-shell mc-content-main">
   <section className="mc-content-feature" aria-labelledby="mc-feature-title"><div className="mc-content-feature-photo" role="img" aria-label="Mengo Chamber delegation at Bulange" /><div><p className="mc-content-label">FEATURED · TRADE & ENTERPRISE</p><h2 id="mc-feature-title">Mengo Chamber calls for greater participation in trade exhibitions</h2><p>The Chamber's board chairperson highlights how businesses can benefit from trade exhibitions and new market opportunities.</p><Link href="/insights/trade-exhibitions-business-growth">Read the story →</Link></div></section>
   <section className="mc-content-section" aria-labelledby="latest-chamber-title"><div className="mc-content-section-heading"><div><p className="mc-content-label">OFFICIAL UPDATES</p><h2 id="latest-chamber-title">News & Announcements</h2></div><Link href="/events-calendar">Upcoming events →</Link></div>
    <form className="mc-content-search" action="/insights" method="get" role="search"><label htmlFor="news-search">Search published stories</label><input id="news-search" type="search" name="q" defaultValue={q} placeholder="Search news and announcements" maxLength={100}/><button type="submit">Search</button>{q&&<Link href="/insights">Clear</Link>}</form>
    {articles===null?<div className="mc-content-message"><h3>Additional Chamber updates</h3><p>The live publishing service is not connected yet. The featured trade-exhibition story above remains available.</p></div>:
    <>{articles.results.length===0?<div className="mc-content-message"><h3>No matching publications</h3><p>New articles and announcements will appear here when they are published by the Chamber.</p></div>:<div className="mc-content-grid">{articles.results.map(item=><article className="mc-content-card" key={item.id}><p className="mc-content-label">{item.slug.startsWith("announcement-")?"ANNOUNCEMENT":"CHAMBER NEWS"} · {formatUGDate(item.published_at)}</p><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/insights/${item.slug}`}>Read article →</Link></article>)}</div>}
    <nav className="mc-content-pagination" aria-label="News pages">{page>1&&<Link href={path(page-1)}>← Previous</Link>}<span>Page {page}</span>{articles.next&&<Link href={path(page+1)}>Next →</Link>}</nav></>}
   </section>
  </div></main></Shell>
}
