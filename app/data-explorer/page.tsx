"use client";
import {useState} from "react";
import Link from "next/link";
import {Shell} from "../components";
const demo=[
 {sector:"Agriculture",value:38},{sector:"Trade",value:29},{sector:"Manufacturing",value:18},{sector:"Services",value:15}
];
const regions=[{region:"Kampala",value:42},{region:"Masaka",value:22},{region:"Mukono",value:17},{region:"Mpigi",value:11},{region:"Other",value:8}];
export default function DataExplorer(){
 const [mode,setMode]=useState<"sector"|"region">("sector");const [highlight,setHighlight]=useState<string|null>(null);
 const data=mode==="sector"?demo:regions.map(x=>({sector:x.region,value:x.value}));
 return <Shell><main><section className="pagehero mcc-hero-commerce"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Data Explorer</div><h1>Market intelligence explorer</h1><p>Experience how interactive economic dashboards could support better business decisions.</p></div></section><section className="section cream"><div className="container mcc-data-wrap"><div className="mcc-calendar-note"><strong>Illustrative figures only.</strong> These values are invented interface demonstration percentages, not actual Ugandan or MCCL economic statistics. They must not be used for decisions.</div><div className="mcc-data-tabs"><button type="button" aria-pressed={mode==="sector"} onClick={()=>{setMode("sector");setHighlight(null)}}>Example sector mix</button><button type="button" aria-pressed={mode==="region"} onClick={()=>{setMode("region");setHighlight(null)}}>Example regional mix</button></div><div className="mcc-data-bars" role="group" aria-label="Interactive demonstration bar chart">{data.map(d=><button key={d.sector} type="button" aria-pressed={highlight===d.sector} onClick={()=>setHighlight(highlight===d.sector?null:d.sector)}><span className="mcc-data-label">{d.sector}</span><span className="mcc-data-track"><span style={{width:`${d.value}%`}}/></span><strong>{d.value}%</strong></button>)}</div><p className="mcc-data-selection" aria-live="polite">{highlight?`Selected: ${highlight}. This ${data.find(d=>d.sector===highlight)?.value}% value is illustrative only.`:"Select a bar to inspect its demonstration value."}</p><Link href="/intelligence" className="btn navy">Explore planned market intelligence</Link></div></section></main></Shell>
}