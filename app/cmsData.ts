import "server-only";
export type ApiPage<T>={count:number;next:string|null;previous:string|null;results:T[]};
export type ChamberArticle={id:number;slug:string;title:string;summary:string;body:string;published_at:string};
export type ChamberEvent={id:number;title:string;description:string;venue:string;starts_at:string;ends_at:string};
export async function publicContent<T>(path:string):Promise<T|null>{
 const base=process.env.CHAMBER_BACKEND_URL;
 if(!base)return null;
 try{
  const target=new URL(path,base);
  if(process.env.NODE_ENV==="production" && target.protocol!=="https:")return null;
  const response=await fetch(target.toString(),{next:{revalidate:90},signal:AbortSignal.timeout(8500)});
  if(!response.ok)return null;
  return await response.json() as T;
 }catch{return null}
}
export function safePage(input:string|undefined){
 const parsed=Number.parseInt(input||"1",10);
 return Number.isFinite(parsed)?Math.max(1,Math.min(parsed,5000)):1;
}
export function formatUGDate(input:string){
 return new Intl.DateTimeFormat("en-UG",{dateStyle:"medium",timeZone:"Africa/Kampala"}).format(new Date(input));
}
export function formatUGDateTime(input:string){
 return new Intl.DateTimeFormat("en-UG",{dateStyle:"medium",timeStyle:"short",timeZone:"Africa/Kampala"}).format(new Date(input));
}
