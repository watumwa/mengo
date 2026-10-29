"use client";

import { useState } from "react";
import { ChevronRight, Compass, MapPinned, Search, UsersRound } from "lucide-react";
import { GoogleMapsPanel } from "./GoogleMapsPanel";
import { chamberRegions, type ChamberRegion } from "./chamberRegions";
import styles from "./MasazaGoogleExplorer.module.css";

export function MasazaGoogleExplorer() {
  const [selectedRegion, setSelectedRegion] = useState(chamberRegions[0].id);
  const [selectedCounty, setSelectedCounty] = useState(chamberRegions[0].counties[0]);
  const [focus, setFocus] = useState<"region" | "county">("region");
  const [filter, setFilter] = useState("");

  const active = chamberRegions.find(region => region.id === selectedRegion) ?? chamberRegions[0];
  const counties = active.counties;
  const query = focus === "region" ? active.mapPlace : `${selectedCounty} Buganda Uganda`;
  const heading = focus === "region" ? `${active.name} — map overview` : `Ssaza ${selectedCounty} — Google Maps search`;
  const filtered = chamberRegions.filter(region => [region.name, ...region.counties, region.city ?? ""].some(label => label.toLowerCase().includes(filter.trim().toLowerCase())));

  function chooseRegion(region: ChamberRegion) {
    setSelectedRegion(region.id);
    setSelectedCounty(region.counties[0]);
    setFocus("region");
  }

  return (
    <section id="live-google-map" className={styles.section} aria-labelledby="masaza-google-map-heading">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}><MapPinned size={17} aria-hidden="true" /> INTERACTIVE GOOGLE MAPS · BUGANDA</p>
            <h2 id="masaza-google-map-heading">Discover the Masaza on a real map.</h2>
            <p>Select a regional cluster or traditional county to explore its approximate location using Google Maps. You can pan, zoom, switch to satellite view and open the location in Google Maps.</p>
          </div>
        </div>
        <div className={styles.layout}>
          <aside className={styles.controls} aria-label="Choose regional Chamber cluster and Ssaza">
            <label className={styles.search}><Search size={17} aria-hidden="true" /><span className={styles.visuallyHidden}>Search for a regional cluster or Ssaza</span><input value={filter} onChange={event => setFilter(event.target.value)} placeholder="Find a cluster or Ssaza" /></label>
            <h3><Compass size={16} aria-hidden="true" /> Select a regional cluster</h3>
            <div className={styles.regionList}>
              {filtered.map((region, index) =>
                <button key={region.id} type="button" className={[styles.regionButton,region.id === active.id ? styles.activeRegion : ""].join(" ")} aria-pressed={region.id === active.id} onClick={() => chooseRegion(region)}>
                  <span>{String(chamberRegions.indexOf(region) + 1).padStart(2,"0")}</span><strong>{region.name}</strong><ChevronRight size={18} aria-hidden="true"/>
                </button>
              )}
              {filtered.length === 0 && <p className={styles.noResults}>No matching region or Ssaza. Try another search.</p>}
            </div>
            <div className={styles.counties}>
              <h3><UsersRound size={16} aria-hidden="true" /> Ssaza of {active.name}</h3>
              <div className={styles.countyButtons}>
                {counties.map(name =>
                  <button key={name} type="button" className={[styles.countyButton,focus === "county" && selectedCounty === name ? styles.selectedCounty : ""].join(" ")} aria-pressed={focus === "county" && selectedCounty === name} onClick={() => { setSelectedCounty(name);setFocus("county"); }}>{name}</button>
                )}
              </div>
              {focus === "county" && <button type="button" className={styles.backToRegion} onClick={() => setFocus("region")}>View the full {active.name} area</button>}
              {active.city && <p className={styles.city}>Related city representation: {active.city}</p>}
            </div>
          </aside>
          <div className={styles.googleMap}>
            <GoogleMapsPanel place={query} heading={heading} context={focus === "region" ? "Google Maps centred on a reference town, not a historical polygon" : "Google Maps place-name search, not a verified Ssaza boundary"} zoom={focus === "region" ? 9 : 11} />
            <p className={styles.boundaries}>The Chamber's 2026–2029 strategic plan defines the six cluster groupings. Google Maps does not automatically provide the official historical Ssaza boundaries; their accurate outlines would require a verified geographic boundary dataset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
