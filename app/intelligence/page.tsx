"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight,BookOpen,BarChart3,TrendingUp,FileText} from "lucide-react";
import {Shell} from "../components";
const publications=[
 {title:"Quarterly Market Intelligence",kind:"Market report",detail:"Proposed reporting on business trends and market opportunities."},
 {title:"Annual Economic and Sector Outlook",kind:"Sector research",detail:"Planned evidence-led analysis of business performance."},
 {title:"Business Environment Policy Brief",kind:"Policy document",detail:"Planned research on business challenges and policy reform."},
 {title:"Enterprise Needs Survey",kind:"Research",detail:"Planned surveys to inform Chamber programmes."}
];
export default function IntelligencePage(){
 const [filter,setFilter]=useState("All research");
 const kinds=["All research","Market report","Sector research","Policy document","Research"];
 return <Shell><main><section className="connect-hero"><div className="container"><span className="eyebrow">MCCL CONNECT / Knowledge hub</span><h1>MARKET <em>INTELLIGENCE</em></h1><p>Research, market insights and policy knowledge for enterprise growth.</p></div></section>
 <div className="container intelligence-content"><div className="connect-intro"><span className="eyebrow">Evidence for enterprise</span><h2>Better information. Better decisions.</h2><p>The strategic plan proposes market surveys, quarterly intelligence reports, annual sector reports and integrated data systems. The following items illustrate the planned publication library, not existing downloadable reports.</p></div>
 <div className="intelligence-highlights"><div><BarChart3 size={24}/><strong>Market trends</strong><span>Planned reports</span></div><div><TrendingUp size={24}/><strong>Sector outlooks</strong><span>Planned analysis</span></div><div><FileText size={24}/><strong>Policy research</strong><span>Planned briefs</span></div></div>
 <div className="connect-results-heading"><h3>Publication library</h3><span>Proposed content · No live downloads</span></div><div className="intelligence-filters">{kinds.map(x=><button type="button" key={x} aria-pressed={filter===x} className={filter===x?"active":""} onClick={()=>setFilter(x)}>{x}</button>)}</div>
 <div className="intelligence-list">{publications.filter(x=>filter==="All research"||x.kind===filter).map(x=><article key={x.title}><BookOpen size={23}/><div><span>{x.kind}</span><h3>{x.title}</h3><p>{x.detail}</p></div><Link href="/contact">Enquire <ArrowUpRight size={15}/></Link></article>)}</div>
 <p className="region-note">Publication titles describe proposed outputs. Real reports, figures and downloadable files require institutional approval and verification.</p></div></main></Shell>
}
