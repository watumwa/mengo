"use client";
import {useEffect,useState} from "react";
import {businesses,centres,opportunities} from "../data";

const previewRecords={
 centres:centres.map(({id,name,district,description})=>({id,name,district,description})),
 businesses:businesses.map(({id,name,sector,location,description,verified})=>({id,name,sector,district:location,description,verified})),
 opportunities:opportunities.map(({id,title,category,sector,location,description})=>({id,title,category,sector,district:location,description,closes_at:null})),
 events:[],
 articles:[]
};

export function useChamberRecords<T>(resource:"centres"|"businesses"|"opportunities"|"events"|"articles"){
 const [records,setRecords]=useState<T[]>([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");
 useEffect(()=>{
  const controller=new AbortController();
  setLoading(true);
  fetch(`/api/public/${resource}`,{signal:controller.signal})
   .then(async response=>{if(!response.ok)throw new Error("Service unavailable");const data=await response.json();return Array.isArray(data)?data:data.results;})
   .then(data=>{if(!Array.isArray(data))throw new Error("Invalid response");setRecords(data);setError("");})
   .catch(e=>{if(e.name!=="AbortError"){setRecords(previewRecords[resource] as T[]);setError("");}})
   .finally(()=>{if(!controller.signal.aborted)setLoading(false);});
  return ()=>controller.abort();
 },[resource]);
 return {records,loading,error};
}
