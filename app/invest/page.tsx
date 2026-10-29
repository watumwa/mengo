import { BlueprintPage } from "../BlueprintPage";

export default function Invest(){
 return <BlueprintPage eyebrow="Trade & Investment" title="Explore Investment Potential in Buganda" description="Understand the sectors, partnerships and enterprise opportunities that can support long-term economic growth." sections={[
  {
    "eyebrow": "Investment landscape",
    "title": "Where enterprise meets opportunity",
    "text": "The region's economic activity spans agriculture, processing, trade, logistics, tourism, industry, services and technology.",
    "cards": [
      {
        "title": "Agriculture & value addition",
        "text": "Processing, storage, quality improvement and routes to market."
      },
      {
        "title": "Manufacturing & industry",
        "text": "Enterprise expansion, industrial services and productive capacity."
      },
      {
        "title": "Tourism & hospitality",
        "text": "Heritage, destinations, accommodation and visitor services."
      },
      {
        "title": "Trade & distribution",
        "text": "Market links, logistics, supply networks and commercial infrastructure."
      }
    ]
  },
  {
    "eyebrow": "Responsible engagement",
    "title": "Explore before committing",
    "text": "The Chamber seeks to support business linkages and informed investment conversations. Named projects, financial returns and offers must be confirmed with their promoters and the appropriate authorities.",
    "cards": [
      {
        "title": "Sector overview",
        "text": "Explore the wider business landscape.",
        "href": "/economy/sectors"
      },
      {
        "title": "Our strategy",
        "text": "Read about the Chamber's trade and investment priorities.",
        "href": "/strategy"
      },
      {
        "title": "Contact information",
        "text": "Find guidance about reaching the Chamber through official channels.",
        "href": "/contact"
      }
    ]
  }
]} action={{"label":"Explore economic sectors","href":"/economy/sectors"}} />;
}
