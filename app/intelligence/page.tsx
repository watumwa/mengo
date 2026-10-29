import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Intelligence(){ return <BlueprintPage eyebrow="Market Intelligence" title="Knowledge for Better Business Decisions" description="Research, market information and business insight can help entrepreneurs understand change and plan for growth." image={realPhotos.businessForum} imageCaption="Participants discussing business issues at the BBS Business Forum." sections={[
  {
    "eyebrow": "Business research",
    "title": "Why market information matters",
    "text": "Information about supply, demand, customers, sector performance and the business environment helps enterprises assess their options.",
    "cards": [
      {
        "title": "Market trends",
        "text": "Changes in customer demand, trade conditions and commercial activity."
      },
      {
        "title": "Sector research",
        "text": "Information about agriculture, industry, services and regional value chains."
      },
      {
        "title": "Policy and business conditions",
        "text": "Research that can support informed dialogue on challenges facing enterprise."
      }
    ]
  },
  {
    "eyebrow": "Chamber priorities",
    "title": "Developing useful information services",
    "text": "Market intelligence and research are part of the Chamber's strategic direction. No official MCCL market reports or live economic datasets are available for download in this section at present.",
    "cards": [
      {
        "title": "Economic sectors",
        "text": "Read about sectors represented in Buganda's economy.",
        "href": "/economy/sectors"
      },
      {
        "title": "Publications",
        "text": "Find information about the Chamber's reports and resources.",
        "href": "/publications"
      },
      {
        "title": "Our strategy",
        "text": "Explore the wider strategic priorities.",
        "href": "/strategy"
      }
    ]
  }
]} action={{"label":"Explore economic sectors","href":"/economy/sectors"}} />; }
