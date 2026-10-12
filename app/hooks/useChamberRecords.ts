"use client";
import {useEffect,useState} from "react";
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
   .catch(e=>{if(e.name!=="AbortError"){setRecords([]);setError("Live listings are unavailable. Please try again later.");}})
   .finally(()=>{if(!controller.signal.aborted)setLoading(false);});
  return ()=>controller.abort();
 },[resource]);
 return {records,loading,error};
}
