"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, MapPinned, Search, UsersRound, X } from "lucide-react";
import styles from "./RegionalClusterExplorer.module.css";

type Region = { id: string; name: string; counties: string[]; city?: string; note: string };
const regions: Region[] = [
  { id: "kampala", name: "Greater Kampala", counties: ["Kyaddondo", "Busiro"], city: "Kampala City Committee", note: "Regional coordination for the two constituent Ssaza, the Kampala City Committee and sub-county committees." },
  { id: "mpigi", name: "Greater Mpigi", counties: ["Gomba", "Butambala", "Mawokota"], note: "Three constituent Ssaza with local representation through sub-county committees." },
  { id: "masaka", name: "Greater Masaka", counties: ["Buddu", "Kkooki", "Kabula", "Ssese", "Mawogola"], city: "Masaka City Committee", note: "Five constituent Ssaza, together with the Masaka City Committee and sub-county committees." },
  { id: "mityana", name: "Greater Mityana", counties: ["Ssingo", "Busujju", "Buweekula"], note: "Three constituent Ssaza with coordination extending to sub-county committees." },
  { id: "luweero", name: "Greater Luweero", counties: ["Buluuli", "Bulemeezi"], note: "Two constituent Ssaza with local sub-county committee representation." },
  { id: "mukono", name: "Greater Mukono", counties: ["Kyaggwe", "Bugerere", "Buvuma"], note: "Three constituent Ssaza with local sub-county committee representation." },
];
const countyCount = regions.reduce((n, region) => n + region.counties.length, 0);

export function RegionalClusterExplorer() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("kampala");
  const [county, setCounty] = useState("Kyaddondo");
  const active = regions.find(region => region.id === activeId) ?? regions[0];
  const matched = useMemo(() => {
    const text = query.trim().toLocaleLowerCase();
    return regions.filter(region => !text || [region.name, region.city ?? "", ...region.counties].some(value => value.toLocaleLowerCase().includes(text)));
  }, [query]);
  const selectRegion = (region: Region) => { setActiveId(region.id); setCounty(region.counties[0]); };
  const selectedCounty = active.counties.includes(county) ? county : active.counties[0];

  return (
    <section id="regional-clusters" className={styles.section} aria-labelledby="cluster-heading">
      <div className={styles.shell}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}><MapPinned size={17} aria-hidden="true"/> STRATEGIC PLAN · PAGE 35</p>
          <h2 id="cluster-heading">Six regions. One connected Chamber.</h2>
          <p>Explore the Regional Chamber Clusters (Amabendobendo) in the 2026–2029 strategic framework. Search for a Ssaza or select a cluster to see its proposed representation structure.</p>
        </div>
        <div className={styles.metrics} aria-label="Regional framework overview">
          <div><strong>06</strong><span>Regional clusters</span></div>
          <div><strong>{countyCount.toString().padStart(2,"0")}</strong><span>Constituent Ssaza</span></div>
          <div><strong>02</strong><span>Named city committees</span></div>
          <div><strong><CheckCircle2 size={20} aria-hidden="true" /> Interactive</strong><span>Explore by county or cluster</span></div>
        </div>
        <div className={styles.workspace}>
          <div className={styles.browser}>
            <label className={styles.search}>
              <Search size={19} aria-hidden="true" />
              <span className={styles.srOnly}>Search regions, cities and Ssaza</span>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search cluster, city or Ssaza..." />
              {query&&<button type="button" onClick={()=>setQuery("")} aria-label="Clear search"><X size={17} /></button>}
            </label>
            <p className={styles.matches}>{matched.length} of {regions.length} regional clusters</p>
            <div className={styles.regionList} aria-label="Choose a regional Chamber cluster">
              {matched.map((region)=>(
                <button key={region.id} type="button" className={[styles.region,active.id===region.id?styles.regionActive:""].join(" ")} onClick={()=>selectRegion(region)} aria-pressed={active.id===region.id}>
                  <span className={styles.regionNumber}>{String(regions.indexOf(region)+1).padStart(2,"0")}</span>
                  <span className={styles.regionCopy}><strong>{region.name}</strong><small>{region.counties.length} Ssaza · {region.city ? region.city : "Sub-county committees"}</small></span>
                  <ArrowRight size={18} aria-hidden="true"/>
                </button>
              ))}
              {matched.length===0&&<div className={styles.empty}><p>No matching regional cluster or Ssaza.</p><button type="button" onClick={()=>setQuery("")}>Show all regions</button></div>}
            </div>
          </div>

          <div className={styles.detail} aria-live="polite">
            <div className={styles.detailTop}>
              <span><Building2 size={18} aria-hidden="true" /> REGIONAL CHAMBER CLUSTER</span>
              <h3>{active.name}</h3>
              <p>{active.note}</p>
            </div>
            <div className={styles.network} aria-label="How the selected cluster connects to local committees">
              <div className={styles.networkNode}><strong>Mengo Chamber of Commerce</strong><small>Institutional coordination</small></div>
              <div className={styles.connector} aria-hidden="true"><span /></div>
              <div className={[styles.networkNode,styles.networkSelected]}><strong>{active.name}</strong><small>Regional cluster committee</small></div>
              <div className={styles.connector} aria-hidden="true"><span /></div>
              <div className={styles.committees}>
                {active.city&&<div className={styles.committee}><strong>{active.city}</strong><small>City-level representation</small></div>}
                <div className={styles.committee}><strong>County Chamber Committees</strong><small>{active.counties.length} constituent Ssaza</small></div>
              </div>
              <div className={styles.connector} aria-hidden="true"><span /></div>
              <div className={styles.networkNode}><strong>Sub-County Chamber Committees</strong><small>Grassroots business engagement</small></div>
            </div>
            <div className={styles.countySection}>
              <div className={styles.countyHead}><h4>Constituent Ssaza</h4><span>Select a county</span></div>
              <div className={styles.countyGrid}>
                {active.counties.map(name=><button type="button" key={name} className={[styles.county,name===selectedCounty?styles.countyActive:""].join(" ")} aria-pressed={name===selectedCounty} onClick={()=>setCounty(name)}>{name}</button>)}
              </div>
              <div className={styles.countyInfo}>
                <span><UsersRound size={17} aria-hidden="true"/> SELECTED COUNTY</span>
                <strong>Ssaza {selectedCounty}</strong>
                <p>Part of the {active.name} Chamber cluster. Its detailed committee membership and active programmes require official confirmation.</p>
                <a href={"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(selectedCounty+" Buganda Uganda")} target="_blank" rel="noopener noreferrer">Search approximate area on Google Maps <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapPanel}>
          <div>
            <p className={styles.eyebrow}>GEOGRAPHICAL REFERENCE</p>
            <h3>Traditional counties and regional coordination</h3>
            <p>The reference map illustrates traditional areas of Buganda. The interactive cluster selector above uses the exact Ssaza groupings from the strategic plan, not invented polygon boundaries.</p>
            <Link href="/governance#interactive-organogram">See the animated governance organogram <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <figure>
            <Image src="/images/buganda-amasaza-map.jpg" alt="Illustrative map of the traditional Ssaza of Buganda" width={840} height={540} unoptimized/>
            <figcaption>Illustrative traditional-county map. Not an authoritative administrative or cadastral boundary dataset.</figcaption>
          </figure>
        </div>
        <p className={styles.note}>Source: MCCL Strategic Plan 2026–2029, printed pages 34–35. These are strategic organisational arrangements, not a live member registry. Committee members, officeholders and verified geographical boundaries can be connected when official data is supplied.</p>
      </div>
    </section>
  );
}
