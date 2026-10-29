import { NextRequest, NextResponse } from "next/server";
export async function POST(request:NextRequest){
 const base=process.env.CHAMBER_BACKEND_URL;
 if(!base)return NextResponse.json({error:"Membership service is not configured yet."},{status:503});
 let payload:Record<string,unknown>;
 try{payload=await request.json();}catch{return NextResponse.json({error:"Invalid JSON."},{status:400});}
 const fields=["organisation","organisation_type","district","sector","contact_name","email","phone"];
 if(fields.some(k=>typeof payload[k]!=="string"||!(payload[k] as string).trim()))return NextResponse.json({error:"Please complete all required fields."},{status:400});
 if(JSON.stringify(payload).length>10000)return NextResponse.json({error:"Request too large."},{status:413});
 try{
  const response=await fetch(new URL("/api/v1/membership/apply/",base),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),cache:"no-store",signal:AbortSignal.timeout(10000)});
  const result=await response.json();
  return NextResponse.json(result,{status:response.status});
 }catch{return NextResponse.json({error:"Membership service is temporarily unavailable."},{status:502});}
}
