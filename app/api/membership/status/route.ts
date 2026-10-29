import { NextRequest, NextResponse } from "next/server";
export const runtime="nodejs";
export async function POST(request:NextRequest){
 const backend=process.env.CHAMBER_BACKEND_URL;
 if(!backend)return NextResponse.json({detail:"Application tracking is not yet available."},{status:503});
 let url:URL;
 try{url=new URL("/api/v1/membership/status/",backend);}catch{return NextResponse.json({detail:"Application tracking is not configured."},{status:503});}
 const input=await request.json().catch(()=>null);
 if(!input||typeof input.reference!=="string"||typeof input.email!=="string"||input.reference.length>40||input.email.length>254)return NextResponse.json({detail:"Provide a valid reference and email."},{status:400});
 try{
  const result=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference:input.reference.trim(),email:input.email.trim()}),cache:"no-store",signal:AbortSignal.timeout(12000)});
  const response=await result.json().catch(()=>({}));
  if(!result.ok)return NextResponse.json({detail:result.status===404?"No matching application was found.":result.status===429?"Too many requests. Please try again later.":"Unable to retrieve application status."},{status:result.status});
  return NextResponse.json({reference:response.reference,status:response.status,submitted_at:response.submitted_at},{headers:{"Cache-Control":"no-store"}});
 }catch{return NextResponse.json({detail:"Application tracking is temporarily unavailable."},{status:503});}
}
