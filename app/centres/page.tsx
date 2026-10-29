"use client";
import { PhotoMoments } from "../PhotoMoments";
import { realPhotos } from "../realPhotos";
import {useMemo,useState} from "react";
import Link from "next/link";
import {Search,MapPinned,ArrowUpRight,Landmark,BriefcaseBusiness} from "lucide-react";
import {Shell} from "../components";

const masaza=[
["Buddu","Masaka region","Agriculture, trading centres and heritage"],
["Busiro","Wakiso region","Agriculture, commerce and cultural landmarks"],
["Kyaddondo","Kampala and Wakiso","Urban enterprise, services and institutions"],
["Kyaggwe","Mukono region","Agriculture, industry and trade"],
["Mawokota","Mpigi region","Farming, trade and community enterprise"],
["Mawogola","Ssembabule region","Livestock, farming and local trade"],
["Gomba","Gomba region","Agriculture and community enterprise"],
["Butambala","Butambala region","Agriculture and local business"],
["Bulemeezi","Luweero region","Agriculture, trade and services"],
["Singo","Mityana region","Agriculture and local commerce"],
["Buweekula","Mubende region","Agriculture and regional trade"],
["Kooki","Rakai region","Agriculture, heritage and enterprise"],
["Ssese","Kalangala Islands","Fisheries, tourism and lake-based enterprise"],
["Buvuma","Buvuma Islands","Fisheries, agriculture and island enterprise"],
["Bugerere","Kayunga region","Agriculture and trading centres"],
["Buluuli","Nakasongola region","Regional agriculture and enterprise"],
["Kabula","Lyantonde region","Livestock and agricultural enterprise"],
["Busujju","Mityana region","Agriculture and community enterprise"]
];
const countyNames=[...new Map(masaza.map(([name,region,focus])=>[name.toLowerCase(),{name,region,focus}])).values()];
export default function MasazaExplorer(){
 const [query,setQuery]=useState("");
 const filtered=useMemo(()=>countyNames.filter(c=>(c.name+" "+c.region+" "+c.focus).toLowerCase().includes(query.toLowerCase())),[query]);
 return <Shell><main style={{background:"#f7f7f2",color:"#153c2c"}}>
 <section style={{background:"linear-gradient(110deg,#0d3328e8,#0d3328a0),url(https://commons.wikimedia.org/wiki/Special:Redirect/file/Bulange_Mengo.jpg?width=1600) center/cover",color:"white",padding:"clamp(80px,11vw,160px) 0"}}>
 <div className="container"><span style={{color:"#e7c782",letterSpacing:3,fontSize:12,fontWeight:800}}>OUR KINGDOM · LOCAL HERITAGE</span><h1 style={{fontSize:"clamp(2.7rem,6vw,5.8rem)",lineHeight:1.04,margin:"20px 0",maxWidth:880}}>Explore the Masaza of Buganda.</h1><p style={{fontSize:"clamp(17px,2vw,22px)",lineHeight:1.65,maxWidth:700}}>Discover Buganda's traditional counties, their communities, cultural identity and regional economic activities.</p></div></section>
<PhotoMoments label="Regions, markets and agricultural enterprise in Buganda" items={[{ photo: realPhotos.masazaMap, caption: "Map illustrating traditional Masaza, not modern district boundaries" }, { photo: realPhotos.marketStalls, caption: "Trading stalls in a market from the REXBA collection" }, { photo: realPhotos.pewosaAgriculture, caption: "Agricultural seedlings at a CBS PEWOSA event" }]} />
 <section style={{padding:"75px 0"}}><div className="container"><span style={{fontWeight:800,color:"#997c3c",letterSpacing:2,fontSize:12}}>DISCOVER THE REGIONS</span><h2 style={{fontSize:"clamp(2rem,4vw,3.3rem)",margin:"15px 0"}}>Traditional counties, local opportunities.</h2><p style={{maxWidth:790,lineHeight:1.8,fontSize:17}}>Masaza are traditional counties of Buganda, not commercial centres or modern district boundaries. Gombolola are lower-level traditional administrative divisions. This directory is an introductory regional explorer; detailed county boundaries, Gombolola lists and project records require confirmation from official Kingdom sources.</p>
 <label style={{display:"flex",gap:12,alignItems:"center",background:"white",border:"1px solid #cad5ca",borderRadius:8,padding:"15px 20px",maxWidth:620,margin:"32px 0"}}><Search size={22}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search county, region or economic activity" aria-label="Search Buganda counties" style={{border:0,outline:0,width:"100%",fontSize:16,color:"#163e2e"}}/></label>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,270px),1fr))",gap:18}}>{filtered.map((c,i)=><article key={c.name} style={{background:"white",padding:28,border:"1px solid #e0e7df",borderTop:"4px solid #c7a55d",borderRadius:6,display:"flex",flexDirection:"column",gap:12}}><span style={{color:"#a17c39",fontSize:12,fontWeight:800}}>MASAZA · {String(i+1).padStart(2,"0")}</span><h3 style={{fontSize:27,margin:0}}>{c.name}</h3><p style={{display:"flex",alignItems:"center",gap:8,margin:0,color:"#4f6859"}}><MapPinned size={16}/>{c.region}</p><p style={{display:"flex",gap:8,alignItems:"start",lineHeight:1.6,margin:0}}><BriefcaseBusiness size={17} style={{flexShrink:0,marginTop:4}}/>{c.focus}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name+" Buganda Uganda")}`} target="_blank" rel="noopener noreferrer" style={{marginTop:"auto",color:"#1e6950",fontWeight:800,display:"inline-flex",alignItems:"center",gap:7}}>Explore approximate area <ArrowUpRight size={16}/></a></article>)}</div>{filtered.length===0&&<p>No counties match your search.</p>}</div></section>
 <section style={{background:"#123d2f",padding:"65px 0",color:"white"}}><div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:35,alignItems:"center"}}><div><Landmark size={32} color="#e2c47b"/><h2 style={{fontSize:33,margin:"15px 0"}}>A living Kingdom, rooted in communities.</h2><p style={{lineHeight:1.8}}>Explore the Kingdom's institutions and cultural history, or visit the official Buganda website for authoritative administrative information.</p></div><div style={{display:"grid",gap:15}}><Link href="/kingdom" style={{color:"#e6cb8a",fontWeight:800}}>Explore Our Kingdom ↗</Link><a href="https://buganda.or.ug/" target="_blank" rel="noopener noreferrer" style={{color:"#e6cb8a",fontWeight:800}}>Official Buganda Kingdom website ↗</a><Link href="/businesses" style={{color:"#e6cb8a",fontWeight:800}}>Explore business directory ↗</Link></div></div></section>
 </main></Shell>
}
