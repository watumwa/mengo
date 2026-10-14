"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowLeft,ArrowUpRight,Search,Filter,Building2,UsersRound,ClipboardList,CheckCircle2} from "lucide-react";
import {Shell} from "../../../components";
const records=[
 {ref:"MCC-001",name:"Sample Enterprise A",category:"SME",region:"Kampala",status:"Pending review",date:"12 Oct 2026"},
 {ref:"MCC-002",name:"Sample Enterprise B",category:"Corporate",region:"Wakiso",status:"Approved",date:"11 Oct 2026"},
 {ref:"MCC-003",name:"Sample Enterprise C",category:"Community",region:"Masaka",status:"Needs information",date:"10 Oct 2026"},
 {ref:"MCC-004",name:"Sample Enterprise D",category:"Associate",region:"Kampala",status:"Pending review",date:"09 Oct 2026"},
 {ref:"MCC-005",name:"Sample Enterprise E",category:"Individual",region:"Mukono",status:"Approved",date:"08 Oct 2026"}
];
export default function MembershipReviewPreview(){
 const [query,setQuery]=useState("");const [status,setStatus]=useState("All statuses");
 const filtered=records.filter(x=>(x.name+" "+x.ref+" "+x.region+" "+x.category).toLowerCase().includes(query.toLowerCase())&&(status==="All statuses"||x.status===status));
 return <Shell><main className="workspace-shell"><div className="container workspace-top"><Link href="/portal-preview/secretariat"><ArrowLeft size={15}/> Secretariat overview</Link><span>Illustrative records · Read-only design</span></div>
 <div className="container"><div className="workspace-header"><div><span className="eyebrow">Secretariat / Membership</span><h1>Membership applications</h1><p>Review and filter the proposed member application pipeline.</p></div></div>
 <section className="workspace-tiles"><article><UsersRound size={20}/><span>Applications</span><strong>05</strong><small>Sample records</small></article><article><ClipboardList size={20}/><span>Awaiting review</span><strong>02</strong><small>Sample records</small></article><article><CheckCircle2 size={20}/><span>Approved</span><strong>02</strong><small>Sample records</small></article><article><Building2 size={20}/><span>Need information</span><strong>01</strong><small>Sample records</small></article></section>
 <section className="workspace-panel"><div className="workspace-panel-head"><div><h2>Applications directory</h2><p>Search and status filtering work locally with fictional entries.</p></div><span>Prototype only</span></div>
 <div className="workspace-filters"><label><Search size={17}/><input aria-label="Search applications" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name, reference, region..."/></label><label><Filter size={16}/><select aria-label="Filter by status" value={status} onChange={e=>setStatus(e.target.value)}>{["All statuses","Pending review","Approved","Needs information"].map(s=><option key={s}>{s}</option>)}</select></label></div>
 <div className="workspace-table-wrap"><table className="workspace-table"><thead><tr><th>Reference</th><th>Applicant</th><th>Category</th><th>Region</th><th>Status</th><th>Received</th></tr></thead><tbody>{filtered.map(x=><tr key={x.ref}><td>{x.ref}</td><td><strong>{x.name}</strong></td><td>{x.category}</td><td>{x.region}</td><td><span className="workspace-status">{x.status}</span></td><td>{x.date}</td></tr>)}</tbody></table>{filtered.length===0&&<p className="workspace-empty">No sample applications match these filters.</p>}</div></section>
 <div className="workspace-actions"><Link href="/membership-categories">View membership categories <ArrowUpRight size={15}/></Link><Link href="/portal-preview/secretariat">Return to overview <ArrowLeft size={15}/></Link></div>
 <p className="workspace-footnote">This is a frontend prototype. Search and filtering affect only fictional in-memory records. No real membership data is read, changed or saved.</p></div></main></Shell>
}
