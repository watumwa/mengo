"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight,MapPinned,Building2,Landmark,Handshake} from "lucide-react";
import {Shell} from "../components";
const clusters=[
 {name:"Greater Kampala",id:"kampala",summary:"Urban commerce, services and commercial connectivity",sectors:["Trade","Services","Logistics"]},
 {name:"Greater Mpigi",id:"mpigi",summary:"Agriculture, enterprise development and market linkages",sectors:["Agriculture","Agro-processing","Trade"]},
 {name:"Greater Masaka",id:"masaka",summary:"Agribusiness, regional trade and value addition",sectors:["Agriculture","Processing","Distribution"]},
 {name:"Greater Mityana",id:"mityana",summary:"Agricultural enterprises and growing local markets",sectors:["Agriculture","Trade","Services"]},
 {name:"Greater Luweero",id:"luweero",summary:"Production, logistics and enterprise development",sectors:["Agriculture","Manufacturing","Trade"]},
 {name:"Greater Mukono",id:"mukono",summary:"Industrial links, enterprise services and commercial growth",sectors:["Manufacturing","Trade","Services"]}
];
export default function EconomicMapPage(){
 const [active,setActive]=useState("kampala");const selected=clusters.find(x=>x.id===active)!;
 return <Shell><main><section className="connect-hero"><div className="container"><span className="eyebrow">Regional economic clusters · Frontend preview</span><h1>EXPLORE BUGANDA'S <em>ECONOMY</em></h1><p>Six regional clusters connecting enterprise, investment and opportunity.</p></div></section><div className="container region-content"><div className="connect-intro"><span className="eyebrow">Explore by region</span><h2>Local strengths. Connected markets.</h2><p>The Chamber's strategic plan identifies six regional clusters as a framework for coordination, business linkages and regional development. Select a region to explore its proposed focus.</p></div>
 <div className="region-grid"><div className="region-selector" role="group" aria-label="Regional clusters">{clusters.map(x=><button type="button" key={x.id} aria-pressed={active===x.id} className={active===x.id?"active":""} onClick={()=>setActive(x.id)}><MapPinned size={19}/><span>{x.name}</span><ArrowUpRight size={16}/></button>)}</div>
 <section className="region-profile" aria-live="polite"><span className="eyebrow">Regional profile · Concept</span><h2>{selected.name}</h2><p>{selected.summary}</p><h3>Potential sector focus</h3><div className="region-tags">{selected.sectors.map(s=><span key={s}>{s}</span>)}</div><div className="region-metrics"><div><Building2 size={22}/><strong>Business directory</strong><small>Verified records pending</small></div><div><Landmark size={22}/><strong>Investment opportunities</strong><small>Listings pending verification</small></div><div><Handshake size={22}/><strong>Regional connections</strong><small>Future Chamber services</small></div></div><Link href="/contact">Enquire about this region <ArrowUpRight size={16}/></Link></section></div><p className="region-note">This is a selectable regional-cluster explorer, not a geographic GIS map. Economic statistics, enterprise counts and verified opportunities will require authoritative datasets before publication.</p></div></main></Shell>
}
