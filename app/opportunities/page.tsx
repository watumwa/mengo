import { BlueprintPage } from "../BlueprintPage";

export default function Opportunities(){
 return <BlueprintPage eyebrow="Market Opportunities" title="Trade, Markets & Partnerships" description="Explore the different ways enterprises can develop commercial relationships and reach new markets." sections={[
  {
    "eyebrow": "Business opportunities",
    "title": "Connections across the value chain",
    "text": "Market access often depends on clear product standards, reliable suppliers, distribution networks and the right business relationships.",
    "cards": [
      {
        "title": "Buyer–supplier links",
        "text": "Connections between producers, distributors, retailers and service providers."
      },
      {
        "title": "Business partnerships",
        "text": "Collaboration in areas such as processing, logistics, technology and skills."
      },
      {
        "title": "Trade readiness",
        "text": "Information, standards, packaging and commercial preparation for wider markets."
      }
    ]
  },
  {
    "eyebrow": "Opportunity notices",
    "title": "Check live availability",
    "text": "There are no independently verified live offers or tenders listed in this section at present. Confirm any specific commercial opportunity with the organisation issuing it.",
    "cards": [
      {
        "title": "Economic sectors",
        "text": "Discover sector-level business opportunities.",
        "href": "/economy/sectors"
      },
      {
        "title": "Investment",
        "text": "Explore investment themes and Chamber priorities.",
        "href": "/invest"
      }
    ]
  }
]} action={{"label":"Explore trade & investment","href":"/invest"}} />;
}
