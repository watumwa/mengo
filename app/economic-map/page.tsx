import { BlueprintPage } from "../BlueprintPage";

export default function EconomicMap() {
  return <BlueprintPage eyebrow="Regional Economy" title="Discover Buganda's Business Regions" description="Geography helps explain how markets, production areas, institutions and trading links connect across Buganda."
     sections={[
  {
    "eyebrow": "Regional connections",
    "title": "Six planning clusters",
    "text": "The Chamber's strategic framework identifies the Greater Kampala, Mpigi, Masaka, Mityana, Luweero and Mukono areas as regional economic clusters.",
    "cards": [
      {
        "title": "Greater Kampala",
        "text": "Urban trade, services, business networks and regional market links."
      },
      {
        "title": "Greater Masaka & Mpigi",
        "text": "Agricultural production, local enterprise and movement to wider markets."
      },
      {
        "title": "Greater Mityana, Luweero & Mukono",
        "text": "Enterprise, transport links and different agricultural and commercial activities."
      }
    ]
  },
  {
    "eyebrow": "Understanding places",
    "title": "Regional clusters and traditional counties",
    "text": "Economic planning clusters are not the same as Buganda's Masaza or Uganda's district boundaries. An interactive map with individual business records is not yet available on this page.",
    "cards": [
      {
        "title": "Masaza",
        "text": "Explore Buganda's traditional geography.",
        "href": "/kingdom/masaza"
      },
      {
        "title": "Commercial centres",
        "text": "Learn about trading centres and markets.",
        "href": "/commercial-centres"
      }
    ]
  }
]} action={{"label":"Explore commercial centres","href":"/commercial-centres"}} />;
}
