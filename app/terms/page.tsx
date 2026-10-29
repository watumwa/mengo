import { BlueprintPage } from "../BlueprintPage";

export default function Terms() {
  return <BlueprintPage eyebrow="Website Information" title="Terms of Website Use" description="General information about browsing this Chamber of Commerce website and accessing external resources."
     sections={[
  {
    "eyebrow": "Using this website",
    "title": "Content and service availability",
    "text": "The formal website terms have not yet been published. Information on this website is provided for general reference and does not itself constitute an offer, membership approval or investment advice.",
    "cards": [
      {
        "title": "External websites",
        "text": "Links to other organisations are provided for information; their own terms apply."
      },
      {
        "title": "Business opportunities",
        "text": "Confirm any opportunity, fee or application directly with the responsible organisation."
      },
      {
        "title": "Website content",
        "text": "Publication and image rights remain with their respective owners where applicable."
      }
    ]
  }
]} action={{"label":"Privacy information","href":"/privacy"}} />;
}
