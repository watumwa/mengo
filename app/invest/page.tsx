"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Building2,Factory,Leaf,Landmark,MapPinned,BriefcaseBusiness} from "lucide-react";
import {Shell} from "../components";
const sectors=[
 {title:"Agriculture & Agribusiness",icon:Leaf,detail:"Production, processing, agricultural trade and value addition.",region:"Regional value chains"},
 {title:"Manufacturing & Industry",icon:Factory,detail:"Industrial enterprise, supplier development and processing.",region:"Urban and regional centres"},
 {title:"Trade & Logistics",icon:BriefcaseBusiness,detail:"Wholesale, retail, distribution and cross-border market connections.",region:"Commercial corridors"},
 {title:"Tourism & Culture",icon:Landmark,detail:"Heritage-linked enterprise, visitor services and cultural industries.",region:"Buganda-wide"},
 {title:"Enterprise Services",icon:Building2,detail:"Digital business services, professional support and enterprise innovation.",region:"Growing commercial centres"}
];
export default function InvestmentGateway(){
 const [sector,setSector]=useState("All sectors");const list=sector==="All sectors"?sectors:sectors.filter(x=>x.title===sector);
 return <Shell><main><section className="connect-hero"><div className="container"><span className="eyebrow">MCCL CONNECT / Investment gateway</span><h1>INVEST IN <em>BUGANDA</em></h1><p>Explore priority sectors, regional connections and potential enterprise partnerships.</p></div></section><div className="container investment-content"><div className="connect-intro"><span className="eyebrow">Investment and enterprise</span><h2>Connecting capital, enterprise and opportunity.</h2><p>The Chamber's strategic direction includes trade promotion, investment linkages and enterprise development. The sectors below are exploratory themes, not approved investment projects or financial offers.</p></div><div className="investment-filter"><label>Explore by sector<select value={sector} onChange={e=>setSector(e.target.value)}><option>All sectors</option>{sectors.map(x=><option key={x.title}>{x.title}</option>)}</select></label><Link href="/economic-map"><MapPinned size={17}/> Explore regional clusters <ArrowUpRight size={15}/></Link></div><div className="investment-grid">{list.map(({title,icon:Icon,detail,region})=><article key={title}><Icon size={29}/><h3>{title}</h3><p>{detail}</p><span>{region}</span><Link href="/contact">Discuss investment linkages <ArrowUpRight size={15}/></Link></article>)}</div><div className="investment-note"><Landmark size={25}/><div><h3>Investment facilitation, not investment solicitation</h3><p>These are sector-level concepts. The Chamber must verify projects, promoters, financial claims, permissions and due-diligence documentation before publishing investable opportunities.</p></div></div></div></main></Shell>
}
