"use client";
import {FormEvent,useState} from "react";
import Link from "next/link";
import {Shell} from "../../components";
import "../apply/application.css";
type Result={reference:string;status:string;submitted_at:string};
export default function MembershipStatus(){
 const [reference,setReference]=useState("");
 const [email,setEmail]=useState("");
 const [result,setResult]=useState<Result|null>(null);
 const [error,setError]=useState("");
 const [loading,setLoading]=useState(false);
 async function check(event:FormEvent<HTMLFormElement>){
  event.preventDefault();setError("");setResult(null);setLoading(true);
  try{
   const response=await fetch("/api/membership/status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference,email})});
   const data=await response.json().catch(()=>({}));
   if(!response.ok){setError(data.detail||"Status unavailable.");return;}
   setResult(data);
  }catch{setError("Status lookup is temporarily unavailable.");}
  finally{setLoading(false);}
 }
 const names:Record<string,string>={pending:"Pending review",review:"Under review",approved:"Approved",rejected:"Not approved"};
 return <Shell><main className="mc-apply"><div className="bp-shell mc-apply-wrap"><Link className="mc-apply-back" href="/membership">← Membership overview</Link><div className="mc-apply-intro"><p>MEMBERSHIP</p><h1>Track your application</h1><span>Use the application reference and email address supplied during registration. This service does not display private staff notes.</span></div><form className="mc-apply-form" onSubmit={check}><h2>Application lookup</h2><div className="mc-apply-fields"><label>Application reference<input type="text" required maxLength={40} autoComplete="off" value={reference} onChange={e=>setReference(e.target.value)}/></label><label>Application email<input type="email" required maxLength={254} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label></div><button type="submit" disabled={loading} style={{marginTop:24}}>{loading?"Checking…":"Check status"}</button>{error&&<p className="mc-apply-error" role="alert">{error}</p>}{result&&<div className="mc-apply-success" role="status" style={{marginTop:25,boxShadow:"none"}}><h2>{names[result.status]||"Application received"}</h2><p>Reference: <strong>{result.reference}</strong></p><p>This status is provided for information. Please await official communication regarding the next steps.</p></div>}</form></div></main></Shell>
}
