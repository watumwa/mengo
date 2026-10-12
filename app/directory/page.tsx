"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, Filter, MapPin, Search } from "lucide-react";
import { Shell, PageHero } from "../components";
import { businesses, centres } from "../data";

type DirectoryTab = "centres" | "businesses";

export default function Directory() {
  const [tab, setTab] = useState<DirectoryTab>("centres");
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All sectors");
  const records = tab === "centres" ? centres : businesses;
  const sectors = ["All sectors", ...new Set(records.map((record) => tab === "centres" ? (record as typeof centres[number]).category : (record as typeof businesses[number]).sector))];
  const selectTab = (nextTab: DirectoryTab) => { setTab(nextTab); setSector("All sectors"); };
  const results = useMemo(() => records.filter((record) => JSON.stringify(record).toLowerCase().includes(query.toLowerCase()) && (sector === "All sectors" || (tab === "centres" ? (record as typeof centres[number]).category : (record as typeof businesses[number]).sector) === sector)), [records, query, sector, tab]);

  return <Shell><PageHero title="Explore the Business Network" description="Discover commercial centres and enterprise categories across the region. All current records are clearly marked demonstration data." /><section className="section cream"><div className="container">
    <div className="directory-toolbar">
      <div className="tabs" role="tablist" aria-label="Directory category">
        <button id="centres-tab" type="button" role="tab" aria-selected={tab === "centres"} aria-controls="directory-results" className={tab === "centres" ? "selected" : ""} onClick={() => selectTab("centres")} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); selectTab("businesses"); } }}>Commercial Centres</button>
        <button id="businesses-tab" type="button" role="tab" aria-selected={tab === "businesses"} aria-controls="directory-results" className={tab === "businesses" ? "selected" : ""} onClick={() => selectTab("businesses")} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); selectTab("centres"); } }}>Business Directory</button>
      </div>
      <div className="filters"><label className="searchbox"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name or location..." aria-label="Search directory" /></label><label className="selectbox"><Filter size={17} /><select value={sector} onChange={(event) => setSector(event.target.value)} aria-label="Filter sector">{sectors.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    </div>
    <p className="notice">Preview records only. Centre affiliations, business identities and membership status have not been verified by the Chamber.</p>
    <p className="resultcount">{results.length} results found</p>
    <div id="directory-results" role="tabpanel" aria-labelledby={`${tab}-tab`} className="featuregrid">{results.map((record) => <article className="featurecard directorycard" key={record.id}><span className="serviceicon"><Building2 size={24} /></span><span className="tag">{"category" in record ? record.category : record.sector}</span><h3>{record.name}</h3><p><MapPin size={14} style={{ verticalAlign: "middle" }} /> {"district" in record ? record.district : record.location}</p><p>{record.description}</p><Link className="textlink" href="/contact">Enquire about listing <ArrowUpRight size={15} /></Link></article>)}</div>
    {results.length === 0 && <div className="empty">No matching results. Try another keyword or sector.</div>}
  </div></section></Shell>;
}
