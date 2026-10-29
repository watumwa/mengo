import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
const fields = ["organisation","organisation_type","district","sector","contact_name","email","phone","message"] as const;
export async function POST(request: NextRequest) {
 const origin=process.env.CHAMBER_BACKEND_URL;
 if(!origin)return NextResponse.json({detail:"Membership applications are not yet available. The Chamber service is not configured."},{status:503});
 let url:URL;
 try{url=new URL("/api/v1/membership/apply/",origin);}catch{return NextResponse.json({detail:"Membership service configuration is invalid."},{status:503});}
 let body:Record<string,unknown>;
 try{const parsed=await request.json();if(!parsed||typeof parsed!=="object"||Array.isArray(parsed))throw Error();body=parsed;}catch{return NextResponse.json({detail:"Invalid application data."},{status:400});}
 const payload:Record<string,string>={};
 for(const key of fields){const value=body[key];if(typeof value!=="string")return NextResponse.json({detail:`Invalid field: ${key}`},{status:400});payload[key]=value.trim();}
 if(fields.slice(0,-1).some(key=>!payload[key]))return NextResponse.json({detail:"Please complete all required fields."},{status:400});
 try{
  const response=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),cache:"no-store",signal:AbortSignal.timeout(12000)});
  const result=await response.json().catch(()=>({}));
  if(!response.ok)return NextResponse.json({detail:response.status===429?"Too many applications. Please try again later.":response.status>=500?"The membership service is unavailable.":result.detail||"Please check your application information."},{status:response.status});
  return NextResponse.json({reference:result.reference},{status:201});
 }catch{return NextResponse.json({detail:"Membership service is currently unavailable."},{status:503});}
}
