"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Building2, CalendarDays, FileText, Handshake, UserRound } from "lucide-react";
import { Shell } from "../components";

export default function Dashboard(){
 const router = useRouter();
 const [member,setMember] = useState<{username:string}|null>(null);
 const [checking,setChecking] = useState(true);
 useEffect(()=>{
  const controller=new AbortController();
  fetch("/api/auth/me",{signal:controller.signal,cache:"no-store"})
   .then(r=>{if(!r.ok)throw Error("Not authenticated");return r.json()})
   .then(data=>{if(!controller.signal.aborted){setMember(data);setChecking(false)}})
   .catch(()=>{if(!controller.signal.aborted){setChecking(false);router.replace("/login")}});
  return ()=>controller.abort();
 },[router]);
 async function signOut(){await fetch("/api/auth/logout",{method:"POST"});router.replace("/login");router.refresh()}
 if(checking||!member) return <Shell><main className="dashbg"><div className="container"><p>{checking?"Checking your session...":"Redirecting to sign in..."}</p></div></main></Shell>;
 const resources=[
  {label:"Membership information",href:"/membership",icon:UserRound},
  {label:"Business community",href:"/businesses",icon:Building2},
  {label:"Trade & investment",href:"/invest",icon:Handshake},
  {label:"Events & programmes",href:"/events-calendar",icon:CalendarDays},
  {label:"Reports & publications",href:"/publications",icon:FileText}
 ];
 return <Shell><main className="dashbg"><div className="container">
   <div className="dashheading"><div><div className="eyebrow">MEMBER ACCOUNT</div>
    <h1>Welcome, {member.username}.</h1><p>Find Chamber information and resources relevant to your business.</p></div>
    <button className="btn navy" type="button" onClick={signOut}>Sign out <ArrowUpRight size={16}/></button>
   </div>
   <section className="section"><h2>Explore member resources</h2>
    <p>Application tracking, business records and member bookings are not yet available in this workspace.</p>
    <div className="dashactions">{resources.map(({label,href,icon:Icon})=>
      <Link key={href} href={href}><Icon size={19}/>{label}<ArrowUpRight size={15}/></Link>
    )}</div>
   </section>
 </div></main></Shell>;
}
