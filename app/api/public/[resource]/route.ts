import {NextRequest,NextResponse} from "next/server";
const allowed=new Set(["centres","businesses","opportunities","events","articles"]);
export async function GET(request:NextRequest,{params}:{params:Promise<{resource:string}>}){
 const {resource}=await params;
 if(!allowed.has(resource))return NextResponse.json({error:"Unknown resource"},{status:404});
 const base=process.env.CHAMBER_BACKEND_URL;
 if(!base)return NextResponse.json({error:"Backend not configured"},{status:503});
 try{
  const url=new URL(`/api/v1/${resource}/`,base);
  const q=request.nextUrl.searchParams.get("q");
  if(q)url.searchParams.set("q",q.slice(0,100));
  const response=await fetch(url,{cache:"no-store",signal:AbortSignal.timeout(8000)});
  if(!response.ok)return NextResponse.json({error:"Directory service unavailable"},{status:502});
  return NextResponse.json(await response.json(),{headers:{"Cache-Control":"no-store"}});
 }catch{return NextResponse.json({error:"Could not connect to Chamber service"},{status:502});}
}
