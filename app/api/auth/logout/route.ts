import {cookies} from "next/headers";
import {NextResponse} from "next/server";
export async function POST(){
 const token=(await cookies()).get("mengo_session")?.value;
 const base=process.env.CHAMBER_API_URL;
 if(token&&base){try{await fetch(new URL("/api/v1/auth/logout/",base),{method:"POST",headers:{Authorization:`Token ${token}`},cache:"no-store",signal:AbortSignal.timeout(5000)});}catch{}}
 const response=NextResponse.json({ok:true});
 response.cookies.set("mengo_session","",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});
 return response;
}
