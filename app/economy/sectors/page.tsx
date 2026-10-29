import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function EconomySectors() {
  return <BlueprintPage presentation="feature" eyebrow="Economic Sectors" title="Industries & Enterprise" description="An introduction to the sectors that support trade, jobs, community life and investment across Buganda."
     image={realPhotos.coffeeExport} imageCaption="Coffee being loaded for export, from the Mwanyi Terimba collection." gallery={[{ photo: realPhotos.coffeeProducts, label: "Coffee value-addition products at Mwanyi Terimba" }, { photo: realPhotos.marketStalls, label: "Local market stalls from the REXBA collection" }]} sections={[
  {
    "eyebrow": "Core sectors",
    "title": "A diverse commercial landscape",
    "text": "Businesses of different sizes and specialisations contribute to local production, employment and access to essential services.",
    "cards": [
      {
        "title": "Agriculture & agribusiness",
        "text": "Production, processing, value addition, cooperatives and agricultural trade."
      },
      {
        "title": "Education & skills",
        "text": "Learning institutions, professional training and enterprise skills."
      },
      {
        "title": "Healthcare & community services",
        "text": "Medical services, community organisations and related supply chains."
      },
      {
        "title": "Property & infrastructure",
        "text": "Construction, transport, property services and infrastructure development."
      },
      {
        "title": "Media & ICT",
        "text": "Broadcasting, communications, software and digitally enabled commerce."
      },
      {
        "title": "Tourism & hospitality",
        "text": "Heritage, destinations, hospitality and visitor services."
      }
    ]
  },
  {
    "eyebrow": "Business connections",
    "title": "From sectors to market access",
    "text": "The Chamber seeks to encourage connections among entrepreneurs, investors and service providers, with particular attention to trade and enterprise growth.",
    "cards": [
      {
        "title": "Explore trade",
        "text": "Learn about the Chamber's trade and investment focus.",
        "href": "/invest"
      },
      {
        "title": "Business services",
        "text": "Explore the support areas relevant to enterprise growth.",
        "href": "/services"
      }
    ]
  }
]} action={{"label":"Discover the Chamber","href":"/about"}} />;
}
