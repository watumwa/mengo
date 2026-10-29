import Link from "next/link";
import {notFound} from "next/navigation";
import {Shell} from "../../components";
import "../directory.css";
type Business={id:number;name:string;sector:string;district:string;description:string;verified:boolean};
export const dynamic="force-dynamic";
export default async function BusinessProfile({params}:{params:Promise<{id:string}>}){
 const {id}=await params;
 if(!/^\\d+$/.test(id))notFound();
 const base=process.env.CHAMBER_BACKEND_URL;
 let business:Business|null=null;
 if(base)try{const url=new URL(`/api/v1/businesses/${id}/`,base);const response=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(8000)});if(response.ok)business=await response.json();}catch{}
 if(!business)notFound();
 return <Shell><main className="mc-dir"><section className="mc-dir-hero"><div className="bp-shell"><p>VERIFIED BUSINESS PROFILE</p><h1>{business.name}</h1><span>{business.sector} · {business.district}</span></div></section><div className="bp-shell mc-dir-main"><Link href="/businesses">← Back to directory</Link><article className="mc-dir-profile"><h2>About this business</h2><p>{business.description||"Further details have not yet been published."}</p><dl><dt>Sector</dt><dd>{business.sector}</dd><dt>District</dt><dd>{business.district}</dd><dt>Directory status</dt><dd>Verified and published</dd></dl></article></div></main></Shell>
}
