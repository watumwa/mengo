"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowLeft,ArrowRight,CalendarDays} from "lucide-react";
import {Shell} from "../components";
const concepts=[
 {title:"Enterprise Skills Workshop",type:"Training",month:1,day:6,description:"Illustrative learning programme; no date has been confirmed."},
 {title:"Trade & Supplier Forum",type:"Trade",month:1,day:13,description:"Illustrative networking programme; no date has been confirmed."},
 {title:"Market Access Clinic",type:"Advisory",month:1,day:20,description:"Illustrative market-readiness programme; no date has been confirmed."},
 {title:"Business Networking Session",type:"Networking",month:1,day:27,description:"Illustrative member networking programme; no date has been confirmed."}
];
export default function CalendarPreview(){
 const today=new Date();const [year,setYear]=useState(today.getFullYear());const [month,setMonth]=useState(today.getMonth());const [selected,setSelected]=useState<number|null>(null);
 const days=new Date(year,month+1,0).getDate();const offset=(new Date(year,month,1).getDay()+6)%7;
 const label=new Intl.DateTimeFormat("en-UG",{month:"long",year:"numeric"}).format(new Date(year,month,1));
 const change=(delta:number)=>{const d=new Date(year,month+delta,1);setYear(d.getFullYear());setMonth(d.getMonth());setSelected(null)};
 const examples=useMemo(()=>concepts.filter(c=>c.month===month),[month]);
 return <Shell><main><section className="pagehero mcc-hero-commerce"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Calendar Preview</div><h1>Business events calendar</h1><p>Explore a calendar interface designed for future confirmed Chamber programmes.</p></div></section><section className="section cream"><div className="container mcc-calendar-wrap"><div className="mcc-calendar-note"><strong>Design demonstration — not an event schedule.</strong> All displayed concepts are illustrative. No events are confirmed, and selecting a date does not constitute registration.</div><div className="mcc-calendar-head"><button type="button" onClick={()=>change(-1)} aria-label="Previous month"><ArrowLeft/></button><h2>{label}</h2><button type="button" onClick={()=>change(1)} aria-label="Next month"><ArrowRight/></button></div><div className="mcc-calendar-grid">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=><strong key={d}>{d}</strong>)}{Array.from({length:offset},(_,i)=><span key={`blank-${i}`} aria-hidden="true"/>)}{Array.from({length:days},(_,i)=>{const day=i+1;const example=examples.find(e=>e.day===day);return <button type="button" key={day} className={selected===day?"selected":""} aria-pressed={selected===day} onClick={()=>setSelected(day)}><span>{day}</span>{example&&<small>Sample concept</small>}</button>})}</div><div className="mcc-calendar-detail" aria-live="polite"><CalendarDays size={24}/>{selected?<div><h3>{selected} {label}</h3><p>{examples.find(x=>x.day===selected)?.description??"No illustrative programme is displayed for this date."}</p></div>:<div><h3>Select a date</h3><p>Click any date to view its demonstration details.</p></div>}</div><Link href="/events-calendar" className="btn navy">Explore programme categories <ArrowRight size={16}/></Link></div></section></main></Shell>
}