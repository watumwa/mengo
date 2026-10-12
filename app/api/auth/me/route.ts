import {cookies} from "next/headers";
import {NextResponse} from "next/server";
export async function GET(){
 const token=(await cookies()).get("mengo_session")?.value;
 const base=process.env.CHAMBER_BACKEND_URL;
 if(!token)return NextResponse.json({error:"Not authenticated"},{status:401});
 if(!base)return NextResponse.json({error:"Service unavailable"},{status:503});
 try{
  const response=await fetch(new URL("/api/v1/auth/me/",base),{headers:{Authorization:`Token ${token}`},cache:"no-store",signal:AbortSignal.timeout(8000)});
  if(!response.ok)return NextResponse.json({error:"Session expired"},{status:401});
  return NextResponse.json(await response.json(),{headers:{"Cache-Control":"no-store"}});
 }catch{return NextResponse.json({error:"Service unavailable"},{status:502});}
}
