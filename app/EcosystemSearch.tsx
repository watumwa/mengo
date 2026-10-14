"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowRight,ArrowUpRight,Search,Building2,Handshake,BookOpen,CalendarDays,MapPinned,GraduationCap,Landmark,UsersRound} from "lucide-react";
const entries=[
 {title:"Business Directory",desc:"Discover enterprises and suppliers",href:"/businesses",type:"Businesses",icon:Building2},
 {title:"MCCL Connect",desc:"Explore business matching and introductions",href:"/connect",type:"Services",icon:Handshake},
 {title:"Opportunity Exchange",desc:"Trade, investment and partnership opportunities",href:"/opportunities",type:"Investment Opportunities",icon:Landmark},
 {title:"Invest in Buganda",desc:"Investment sectors and commercial linkages",href:"/investment",type:"Investment Opportunities",icon:Landmark},
 {title:"Market Intelligence",desc:"Research, market reports and sector trends",href:"/market-intelligence",type:"Reports",icon:BookOpen},
 {title:"Policy & Advocacy",desc:"Business environment and policy priorities",href:"/policy-advocacy",type:"Policy Documents",icon:BookOpen},
 {title:"Regional Clusters",desc:"Explore six proposed regional business clusters",href:"/economic-map",type:"Regional Clusters",icon:MapPinned},
 {title:"Membership",desc:"Membership pathways and benefits",href:"/membership",type:"Members",icon:UsersRound},
 {title:"Training & Capacity Building",desc:"Enterprise learning and support",href:"/training",type:"Services",icon:GraduationCap},
 {title:"Events & Programmes",desc:"Networking, training and trade missions",href:"/events-calendar",type:"Events",icon:CalendarDays}
];
export default function EcosystemSearch({compact=false}:{compact?:boolean}){
 const [query,setQuery]=useState("");const [category,setCategory]=useState("All");
 const categories=["All","Businesses","Services","Investment Opportunities","Reports","Policy Documents","Regional Clusters","Members","Events"];
 const results=useMemo(()=>entries.filter(e=>(category==="All"||category===e.type)&&(`${e.title} ${e.desc} ${e.type}`.toLowerCase().includes(query.toLowerCase()))),[query,category]);
 return <section className={`ecosystem-search ${compact?"compact":""}`} aria-label="Explore the Chamber ecosystem"><div className="ecosystem-search-head"><div><span className="eyebrow">MCCL Ecosystem Search</span><h2>What are you looking for?</h2><p>Discover businesses, opportunities, research, services and networks.</p></div><Search size={29}/></div><label className="ecosystem-search-input"><Search size={21}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search businesses, opportunities, services, reports..." aria-label="Search ecosystem destinations"/></label><div className="ecosystem-search-filters" aria-label="Search category">{categories.map(c=><button key={c} type="button" className={category===c?"active":""} onClick={()=>setCategory(c)} aria-pressed={category===c}>{c}</button>)}</div><div className="ecosystem-search-results" aria-live="polite">{results.length?results.map(({title,desc,href,type,icon:Icon})=><Link key={href} href={href}><Icon size={20}/><span><strong>{title}</strong><small>{desc}</small></span><em>{type}</em><ArrowUpRight size={17}/></Link>):<p className="ecosystem-search-empty">No matching sections. Try a broader term or another category.</p>}</div><p className="ecosystem-search-disclaimer">Search currently covers website sections, not a live index of verified businesses or transactions.</p></section>
}
