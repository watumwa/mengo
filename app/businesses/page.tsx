import Link from "next/link";
import { Shell } from "../components";
import "./directory.css";
type Business={id:number;name:string;sector:string;district:string;description:string;verified:boolean};
type DirectoryResponse={count:number;next:string|null;results:Business[]};
type Filters={sectors:string[];districts:string[]};
export const dynamic="force-dynamic";
export const metadata={title:"Business Directory | Mengo Chamber of Commerce",description:"Find verified and published enterprises by sector and district in the Mengo Chamber business directory."};
async function api<T>(endpoint:string):Promise<T|null>{
 const backend=process.env.CHAMBER_BACKEND_URL;
 if(!backend)return null;
 try{
  const address=new URL(endpoint,backend);
  const response=await fetch(address,{next:{revalidate:60},signal:AbortSignal.timeout(8000)});
  return response.ok?await response.json() as T:null;
 }catch{return null}
}
export default async function Businesses({searchParams}:{searchParams:Promise<{q?:string;sector?:string;district?:string;page?:string}>}){
 const query=await searchParams;
 const q=(query.q||"").slice(0,100).trim(),sector=(query.sector||"").slice(0,120).trim(),district=(query.district||"").slice(0,100).trim();
 const page=Math.max(1,Math.min(10000,Number.parseInt(query.page||"1",10)||1));
 const params=new URLSearchParams();
 if(q)params.set("q",q);if(sector)params.set("sector",sector);if(district)params.set("district",district);params.set("page",String(page));
 const [businesses,filters]=await Promise.all([api<DirectoryResponse>(`/api/v1/businesses/?${params}`),api<Filters>("/api/v1/businesses/filters/")]);
 function pageHref(nextPage:number){const p=new URLSearchParams(params);p.set("page",String(nextPage));return "/businesses?"+p.toString()}
 return <Shell><main className="mc-dir">
 <section className="mc-dir-hero"><div className="bp-shell"><p>BUSINESS COMMUNITY</p><h1>Discover businesses across Buganda</h1><span>Explore businesses reviewed and approved for publication in the Chamber directory.</span></div></section>
 <div className="bp-shell mc-dir-main">
 <form className="mc-dir-filters" action="/businesses" method="get" role="search"><label>Search businesses<input name="q" placeholder="Business name or service" defaultValue={q}/></label><label>Sector<select name="sector" defaultValue={sector}><option value="">All sectors</option>{(filters?.sectors||[]).map(s=><option key={s} value={s}>{s}</option>)}</select></label><label>District<select name="district" defaultValue={district}><option value="">All districts</option>{(filters?.districts||[]).map(s=><option key={s} value={s}>{s}</option>)}</select></label><button type="submit">Search directory</button><Link href="/businesses">Reset</Link></form>
 {businesses===null?<div className="mc-dir-empty"><h2>Directory temporarily unavailable</h2><p>The Chamber directory requires its connected backend service. No sample listings are shown as verified businesses.</p><Link href="/membership">Explore membership</Link></div>:<><p className="mc-dir-count">{businesses.count} verified {businesses.count===1?"business":"businesses"} found</p>{businesses.results.length?<div className="mc-dir-grid">{businesses.results.map(b=><article key={b.id}><span className="mc-dir-sector">{b.sector}</span><h2>{b.name}</h2><p className="mc-dir-location">{b.district}</p><p>{b.description||"Business profile details are being prepared."}</p><Link href={`/businesses/${b.id}`}>View business profile →</Link></article>)}</div>:<div className="mc-dir-empty"><h2>No matching businesses</h2><p>Try different search terms or filters. Only approved businesses are displayed.</p></div>}
 <nav className="mc-dir-pagination" aria-label="Directory pages">{page>1&&<Link href={pageHref(page-1)}>← Previous</Link>}<span>Page {page}</span>{businesses.next&&<Link href={pageHref(page+1)}>Next →</Link>}</nav></>}
 <aside className="mc-dir-cta"><h2>Interested in Chamber membership?</h2><p>Submit your organisation details for review. Registration does not automatically publish a business profile.</p><Link href="/membership/apply">Apply for membership →</Link></aside></div></main></Shell>
}
