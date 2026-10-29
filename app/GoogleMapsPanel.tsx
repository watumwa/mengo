"use client";

import { useState } from "react";
import { ExternalLink, Layers3, Map, MapPinned, Satellite } from "lucide-react";
import styles from "./GoogleMapsPanel.module.css";

type GoogleMapsPanelProps = {
  place: string;
  heading: string;
  context?: string;
  zoom?: number;
};

export function GoogleMapsPanel({ place, heading, context, zoom = 10 }: GoogleMapsPanelProps) {
  const [satellite, setSatellite] = useState(false);
  const search = encodeURIComponent(place);
  // Google Maps' share/embed URL supports an interactive map without adding credentials to the repository.
  // A verified traditional-county polygon dataset is NOT supplied by this map.
  const src = `https://maps.google.com/maps?q=${search}&z=${zoom}&t=${satellite ? "k" : "m"}&output=embed`;
  const external = `https://www.google.com/maps/search/?api=1&query=${search}`;

  return (
    <section className={styles.frame} aria-label="Interactive Google Maps">
      <div className={styles.toolbar}>
        <div className={styles.heading}>
          <span><MapPinned size={15} aria-hidden="true" /> GOOGLE MAPS</span>
          <strong>{heading}</strong>
          {context && <small>{context}</small>}
        </div>
        <div className={styles.controls} aria-label="Google Maps display type">
          <button type="button" className={!satellite ? styles.selected : ""} aria-pressed={!satellite} onClick={() => setSatellite(false)}><Map size={15} aria-hidden="true" /> Map</button>
          <button type="button" className={satellite ? styles.selected : ""} aria-pressed={satellite} onClick={() => setSatellite(true)}><Satellite size={15} aria-hidden="true" /> Satellite</button>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          key={src}
          title={`Google Maps: ${heading}`}
          src={src}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className={styles.footer}>
        <p><Layers3 size={15} aria-hidden="true" /> Google Maps displays contemporary geography and places; historical Ssaza boundaries are not verified overlays.</p>
        <a href={external} target="_blank" rel="noopener noreferrer">Open in Google Maps <ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
