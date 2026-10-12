"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Shell} from "../components";
export default function Login(){
 const router=useRouter();
 const [username,setUsername]=useState("");
 const [password,setPassword]=useState("");
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState("");
 async function signIn(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();setBusy(true);setError("");
  try{
   const response=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username,password})});
   if(!response.ok){setError("Sign in failed. Check your credentials or try again later.");return;}
   router.replace("/dashboard");router.refresh();
  }catch{setError("Unable to reach the authentication service.");}
  finally{setBusy(false);}
 }
 return <Shell><main className="member-login"><section className="member-login-card"><div className="member-login-intro"><div className="kicker">Mengo Chamber of Commerce</div><h1>Welcome back.</h1><p>Sign in to your Chamber workspace to manage your business presence and discover opportunities.</p></div><div className="member-login-form"><h2>Member sign in</h2><p>Use your registered username and password.</p><form onSubmit={signIn}><label>Username<input required autoComplete="username" value={username} onChange={e=>setUsername(e.target.value)}/></label><label>Password<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{error&&<p role="alert" className="member-login-error">{error}</p>}<button className="btn navy" type="submit" disabled={busy}>{busy?"Signing in...":"Sign in"}</button></form><p>Not yet a member? <Link href="/join">Explore membership</Link></p></div></section></main></Shell>
}
