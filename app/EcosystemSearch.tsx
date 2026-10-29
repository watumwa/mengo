"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Search,Building2,Handshake,BookOpen,CalendarDays,MapPinned,GraduationCap,Landmark,UsersRound} from "lucide-react";
const entries=[
 {title:"The Chamber",desc:"Our story, mandate and strategy",href:"/about",type:"Services",icon:Landmark},
 {title:"Business Community",desc:"Enterprise sectors and commercial links",href:"/businesses",type:"Businesses",icon:Building2},
 {title:"Trade & Investment",desc:"Explore markets and investment sectors",href:"/invest",type:"Investment Opportunities",icon:Handshake},
 {title:"Market Opportunities",desc:"Trade and partnership information",href:"/opportunities",type:"Investment Opportunities",icon:Landmark},
 {title:"Market Intelligence",desc:"Research and business information",href:"/intelligence",type:"Reports",icon:BookOpen},
 {title:"Business Advocacy",desc:"Policy, research and representation",href:"/policy-advocacy",type:"Policy Documents",icon:BookOpen},
 {title:"Regional Economy",desc:"Business regions and trading centres",href:"/economic-map",type:"Regional Clusters",icon:MapPinned},
 {title:"Membership",desc:"Membership pathways and participation",href:"/membership",type:"Members",icon:UsersRound},
 {title:"Business Services",desc:"Enterprise development and support",href:"/services",type:"Services",icon:GraduationCap},
 {title:"Events & Programmes",desc:"Business forums and programme information",href:"/events-calendar",type:"Events",icon:CalendarDays},
 {title:"Kingdom Heritage",desc:"Culture, traditional institutions and places",href:"/kingdom",type:"Services",icon:Landmark},
 {title:"Publications",desc:"Strategies, reports and information",href:"/publications",type:"Reports",icon:BookOpen},
];
export default function EcosystemSearch({compact=false}:{compact?:boolean}){
 const [query,setQuery]=useState("");const [category,setCategory]=useState("All");const [expanded,setExpanded]=useState(false);
 const categories=["All","Businesses","Services","Investment Opportunities","Reports","Policy Documents","Regional Clusters","Members","Events"];
 const results=useMemo(()=>entries.filter(e=>(category==="All"||category===e.type)&&(`${e.title} ${e.desc} ${e.type}`.toLowerCase().includes(query.toLowerCase()))),[query,category]);
 const visible=compact&&!expanded&&!query.trim()&&category==="All"?results.slice(0,4):results;
 return <section className={`ecosystem-search ${compact?"compact":""}`} aria-label="Explore the Chamber ecosystem"><div className="ecosystem-search-head"><div><span className="eyebrow">SEARCH THE WEBSITE</span><h2>What are you looking for?</h2><p>Find Chamber information, economic sectors, membership and related resources.</p></div><Search size={29}/></div><label className="ecosystem-search-input"><Search size={21}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search businesses, opportunities, services, reports..." aria-label="Search ecosystem destinations"/></label><div className="ecosystem-search-filters" aria-label="Search category">{categories.map(c=><button key={c} type="button" className={category===c?"active":""} onClick={()=>setCategory(c)} aria-pressed={category===c}>{c}</button>)}</div><div className="ecosystem-search-results" aria-live="polite">{results.length?visible.map(({title,desc,href,type,icon:Icon})=><Link key={href} href={href}><Icon size={20}/><span><strong>{title}</strong><small>{desc}</small></span><em>{type}</em><ArrowUpRight size={17}/></Link>):<p className="ecosystem-search-empty">No matching sections. Try a broader term or another category.</p>}</div>{compact&&results.length>4&&<button type="button" className="ecosystem-show-more" aria-expanded={expanded||Boolean(query.trim())||category!=="All"} onClick={()=>{setExpanded(v=>!v);if(query.trim()||category!=="All"){setQuery("");setCategory("All");setExpanded(false)}}}>{expanded||query.trim()||category!=="All"?"Show featured destinations":"View all "+results.length+" destinations"} <ArrowUpRight size={15}/></button>}<p className="ecosystem-search-disclaimer">Search results link to pages on this website, not individual business records.</p></section>
}
