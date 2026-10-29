"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { Shell } from "../../components";
import "./application.css";

type Fields = {organisation:string;organisation_type:string;district:string;sector:string;contact_name:string;email:string;phone:string;message:string};
const initial:Fields={organisation:"",organisation_type:"",district:"",sector:"",contact_name:"",email:"",phone:"",message:""};
export default function MembershipApply(){
 const [data,setData]=useState<Fields>(initial);
 const [consent,setConsent]=useState(false);
 const [sending,setSending]=useState(false);
 const [error,setError]=useState("");
 const [reference,setReference]=useState("");
 const update=(key:keyof Fields,value:string)=>setData(current=>({...current,[key]:value}));
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(sending||!consent)return;
  setError("");setSending(true);
  try{
   const response=await fetch("/api/membership/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
   const result=await response.json().catch(()=>({}));
   if(!response.ok){setError(typeof result.detail==="string"?result.detail:"The application could not be submitted. Please check the fields or try again.");return;}
   if(!result.reference){setError("The server did not return a confirmation reference. Please contact the Chamber before resubmitting.");return;}
   setReference(result.reference);
  }catch{setError("The application service is temporarily unavailable. Please try again later.");}
  finally{setSending(false)}
 }
 return <Shell><main className="mc-apply"><div className="bp-shell mc-apply-wrap">
  <Link href="/membership" className="mc-apply-back">← Membership overview</Link>
  <div className="mc-apply-intro"><p>MEMBERSHIP APPLICATION</p><h1>Apply to join the Chamber</h1><span>Provide your organisation and contact details for administrative review. Submission is not approval, and no payment is requested here.</span></div>
  {reference?<div className="mc-apply-success" role="status"><h2>Application received</h2><p>Your application has been submitted for review. Keep this reference for enquiries:</p><strong>{reference}</strong><p>The Chamber will need to confirm eligibility and next steps. This confirmation is not evidence of approved membership.</p><Link href="/membership/status">Track application status</Link> · <Link href="/membership">Return to membership</Link></div>:
  <form className="mc-apply-form" onSubmit={submit}>
   <h2>Organisation details</h2>
   <div className="mc-apply-fields">
   {([["organisation","Organisation / business name"],["organisation_type","Organisation type"],["district","District"],["sector","Business sector"],["contact_name","Contact person's full name"],["email","Email address"],["phone","Telephone number"]] as const).map(([key,label])=><label key={key}>{label}<input required maxLength={key==="organisation"?200:key==="contact_name"?150:key==="sector"?120:key==="district"?100:key==="organisation_type"?80:120} type={key==="email"?"email":key==="phone"?"tel":"text"} autoComplete={key==="email"?"email":key==="contact_name"?"name":key==="phone"?"tel":"off"} value={data[key]} onChange={event=>update(key,event.target.value)} /></label>)}
   <label className="mc-apply-message">Additional information (optional)<textarea rows={4} maxLength={3000} value={data.message} onChange={e=>update("message",e.target.value)} /></label>
   </div>
   <label className="mc-apply-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>I confirm that the information provided is accurate and agree to its use for reviewing this application.</span></label>
   {error&&<p className="mc-apply-error" role="alert">{error}</p>}
   <button type="submit" disabled={sending||!consent}>{sending?"Submitting…":"Submit application"}</button>
   <p className="mc-apply-footnote">Membership categories, fees and eligibility are subject to confirmation by the Chamber. Do not make a payment on the basis of this form.</p>
  </form>}
 </div></main></Shell>
}
