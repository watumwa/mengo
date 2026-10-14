"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowLeft,ArrowUpRight,BriefcaseBusiness,Building2,CheckCircle2,FileText,UserRound} from "lucide-react";
import {Shell} from "../../../components";
const sections=[{title:"Business identity",fields:[["Business name","Example Trading Company"],["Trading sector","Retail & wholesale"],["Business location","Kampala, Uganda"]]},{title:"Membership details",fields:[["Proposed category","SME membership"],["Application reference","DEMO-MBR-001"],["Application status","Pending review"]]},{title:"Contact profile",fields:[["Representative","Example Member"],["Email","example@invalid.test"],["Phone","Not provided"]]}];
export default function MemberProfilePreview(){
 const [tab,setTab]=useState("Business identity");
 return <Shell><main className="workspace-shell"><div className="container workspace-top"><Link href="/portal-preview/member"><ArrowLeft size={15}/> Member overview</Link><span>Example business profile · No live records</span></div>
 <div className="container"><div className="workspace-header"><div><span className="eyebrow">Member workspace / Business profile</span><h1>My business profile</h1><p>A structured view of business identity and membership details.</p></div></div>
 <div className="workspace-banner"><div><span>Example enterprise</span><h2>Example Trading Company</h2><p>This preview demonstrates the layout of a member's business record.</p></div><span className="workspace-status">Pending review</span></div>
 <section className="workspace-tiles"><article><Building2 size={20}/><span>Category</span><strong>SME</strong><small>Illustrative</small></article><article><BriefcaseBusiness size={20}/><span>Business profile</span><strong>Draft</strong><small>Illustrative</small></article><article><CheckCircle2 size={20}/><span>Verification</span><strong>Pending</strong><small>Illustrative</small></article><article><FileText size={20}/><span>Documents</span><strong>00</strong><small>No files connected</small></article></section>
 <section className="workspace-panel"><div className="workspace-panel-head"><div><h2>Profile details</h2><p>Select a section to preview the proposed record layout.</p></div><UserRound size={20}/></div>
 <div className="workspace-tabs" role="tablist" aria-label="Profile sections">{sections.map(x=><button type="button" role="tab" aria-selected={tab===x.title} className={tab===x.title?"active":""} key={x.title} onClick={()=>setTab(x.title)}>{x.title}</button>)}</div>
 <div className="workspace-profile-grid">{sections.find(x=>x.title===tab)?.fields.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section>
 <div className="workspace-actions"><Link href="/join">Explore membership enquiry <ArrowUpRight size={15}/></Link><Link href="/portal-preview/member">Return to overview <ArrowLeft size={15}/></Link></div>
 <p className="workspace-footnote">Prototype only. Tabs switch local demonstration content. There is no editing, upload, payment, or database connection.</p></div></main></Shell>
}
