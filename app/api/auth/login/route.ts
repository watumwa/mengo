import {NextRequest,NextResponse} from "next/server";
export async function POST(request:NextRequest){
 const base=process.env.CHAMBER_BACKEND_URL;
 if(!base)return NextResponse.json({error:"Authentication service not configured"},{status:503});
 let credentials:{username?:string;password?:string};
 try{credentials=await request.json();}catch{return NextResponse.json({error:"Invalid request"},{status:400});}
 if(typeof credentials.username!=="string"||typeof credentials.password!=="string"||!credentials.username||!credentials.password)return NextResponse.json({error:"Username and password required"},{status:400});
 try{
  const response=await fetch(new URL("/api/v1/auth/login/",base),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(credentials),cache:"no-store",signal:AbortSignal.timeout(8000)});
  if(!response.ok)return NextResponse.json({error:"Invalid credentials"},{status:401});
  const data=await response.json();
  if(typeof data.token!=="string")throw new Error("Invalid authentication response");
  const result=NextResponse.json({user:data.user});
  result.cookies.set("mengo_session",data.token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*8});
  return result;
 }catch{return NextResponse.json({error:"Authentication service unavailable"},{status:502});}
}
