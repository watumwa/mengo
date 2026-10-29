import { BlueprintPage } from "../BlueprintPage";

export default function Publications() {
  return <BlueprintPage eyebrow="Reports & Publications" title="Knowledge, Research & Reports" description="Learn about the strategic documents and information resources that support business planning and Chamber priorities."
     sections={[
  {
    "eyebrow": "Key documents",
    "title": "The Chamber's strategic direction",
    "text": "The Twezimbe strategy outlines priorities for membership, enterprise development, trade and investment linkages, advocacy and market intelligence.",
    "cards": [
      {
        "title": "Our Strategy",
        "text": "Explore the Chamber's priorities and long-term direction.",
        "href": "/strategy"
      },
      {
        "title": "Market intelligence",
        "text": "Learn about the intended role of research and market information.",
        "href": "/intelligence"
      },
      {
        "title": "Investment information",
        "text": "Discover areas of economic and investment interest.",
        "href": "/invest"
      }
    ]
  },
  {
    "eyebrow": "Official resources",
    "title": "Published material",
    "text": "Formal documents and reports should be obtained from their issuing organisations. This page does not currently offer an official downloadable publication library.",
    "cards": [
      {
        "title": "Source and context",
        "text": "Check the issuing organisation and publication date when consulting reports."
      },
      {
        "title": "Contact information",
        "text": "Use official Chamber channels for requests concerning authorised documents."
      }
    ]
  }
]} action={{"label":"Explore our strategy","href":"/strategy"}} />;
}
