"use client";
import {businesses,centres,opportunities} from "../data";
const previewRecords={
 centres:centres.map(({id,name,district,description})=>({id,name,district,description})),
 businesses:businesses.map(({id,name,sector,location,description,verified})=>({id,name,sector,district:location,description,verified})),
 opportunities:opportunities.map(({id,title,category,sector,location,description})=>({id,title,category,sector,district:location,description,closes_at:null})),
 events:[],
 articles:[]
};
export function useChamberRecords<T>(resource:"centres"|"businesses"|"opportunities"|"events"|"articles"){
 return {records:previewRecords[resource] as T[],loading:false,error:""};
}
