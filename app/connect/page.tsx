"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowRight,ArrowUpRight,Handshake,Search,ShieldCheck,UsersRound} from "lucide-react";
import {Shell} from "../components";
const matches=[
 {name:"Coffee value-chain partner",sector:"Agriculture",location:"Greater Masaka",role:"Buyer",reason:"Coffee sourcing and market-access interests"},
 {name:"Regional distribution partner",sector:"Trade",location:"Greater Kampala",role:"Distributor",reason:"Distribution and buyer introductions"},
 {name:"Agribusiness processing partner",sector:"Agriculture",location:"Greater Mukono",role:"Processor",reason:"Value addition and supplier relationships"},
 {name:"Enterprise investment network",sector:"Investment",location:"Greater Mpigi",role:"Investor",reason:"Enterprise growth and investment readiness"},
 {name:"Digital enterprise partner",sector:"Technology",location:"Greater Kampala",role:"Service provider",reason:"Digitalisation and business systems"}
];
export default function ConnectPage(){
 const [role,setRole]=useState("Any partner");const [sector,setSector]=useState("All sectors");const [location,setLocation]=useState("All regions");
 const filtered=matches.filter(x=>(role==="Any partner"||x.role===role)&&(sector==="All sectors"||x.sector===sector)&&(location==="All regions"||x.location===location));
 return <Shell><main><section className="connect-hero"><div className="container"><span className="eyebrow">Signature ecosystem experience · Interface preview</span><h1>MCCL <em>CONNECT</em></h1><p>Find the right business, partner, investor or market.</p><div className="connect-hero-links"><Link href="/businesses">Explore directory <ArrowUpRight size={17}/></Link><Link href="/membership">Join the Chamber <ArrowRight size={17}/></Link></div></div></section>
 <section className="container connect-content"><div className="connect-intro"><span className="eyebrow">Business matchmaking</span><h2>Build meaningful commercial connections.</h2><p>Choose your business interests to explore how the Chamber's proposed matchmaking experience could work. Matching results below are illustrative, not verified enterprises.</p></div>
 <div className="connect-filters"><label>I am looking for<select value={role} onChange={e=>setRole(e.target.value)}>{["Any partner","Buyer","Distributor","Processor","Investor","Service provider"].map(x=><option key={x}>{x}</option>)}</select></label><label>Sector<select value={sector} onChange={e=>setSector(e.target.value)}>{["All sectors","Agriculture","Trade","Investment","Technology"].map(x=><option key={x}>{x}</option>)}</select></label><label>Region<select value={location} onChange={e=>setLocation(e.target.value)}>{["All regions","Greater Kampala","Greater Masaka","Greater Mukono","Greater Mpigi"].map(x=><option key={x}>{x}</option>)}</select></label></div>
 <div className="connect-results-heading"><h3>Explore potential partner types</h3><span>{filtered.length} illustrative matches</span></div><div className="connect-match-grid">{filtered.length?filtered.map((x,i)=><article key={x.name}><div className="connect-match-icon"><Handshake size={24}/></div><div className="connect-match-tag">{x.role} · {x.sector}</div><h3>{x.name}</h3><p>{x.location}</p><div className="connect-match-reason"><Search size={16}/><span>{x.reason}</span></div><Link href="/contact">Enquire about introductions <ArrowUpRight size={15}/></Link><small>Illustrative match #{String(i+1).padStart(2,"0")} · Not verified</small></article>):<div className="connect-no-results">No examples match this combination. Change a filter to explore more partner types.</div>}</div>
 <div className="connect-value"><div><UsersRound size={27}/><h3>Connect businesses</h3><p>Discover partners across markets and value chains.</p></div><div><ShieldCheck size={27}/><h3>Build trust</h3><p>Future verified profiles and Chamber-facilitated introductions.</p></div><div><Handshake size={27}/><h3>Create opportunities</h3><p>Support partnerships, trade and investment linkages.</p></div></div></section></main></Shell>
}
