import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Cooperatives() {
  return <BlueprintPage presentation="split" eyebrow="SACCOs & Cooperatives" title="Working Together for Enterprise" description="Savings groups, producer cooperatives and community organisations play an important role in collective economic participation."
     image={realPhotos.essuubiCommunity} imageCaption="Group at an Essuubi Lyo Zambogo office, from the supplied photo collection." gallery={[{ photo: realPhotos.pewosaAgriculture, label: "Agricultural production demonstration from CBS PEWOSA" }, { photo: realPhotos.pewosaEnterprise, label: "Community enterprise activity from CBS PEWOSA" }]} sections={[
  {
    "eyebrow": "Cooperative enterprise",
    "title": "Strength in shared purpose",
    "text": "Cooperative organisations can help members mobilise savings, access services, pool resources and reach markets.",
    "cards": [
      {
        "title": "SACCOs",
        "text": "Savings and credit cooperatives can support financial participation for eligible members."
      },
      {
        "title": "Producer groups",
        "text": "Farmers and producers may organise around shared procurement, processing or marketing."
      },
      {
        "title": "Community initiatives",
        "text": "Collective enterprise can strengthen local skills and commercial networks."
      }
    ]
  },
  {
    "eyebrow": "Explore related sectors",
    "title": "From saving to trade",
    "text": "Cooperative enterprises intersect with agriculture, financial services and value chains across the economy. This page provides sector information rather than an official register of individual SACCOs.",
    "cards": [
      {
        "title": "Agribusiness",
        "text": "Explore the wider agricultural and enterprise sectors.",
        "href": "/economy/sectors"
      },
      {
        "title": "Business support",
        "text": "Learn more about enterprise services.",
        "href": "/services"
      }
    ]
  }
]} action={{"label":"Explore economic sectors","href":"/economy/sectors"}} />;
}
