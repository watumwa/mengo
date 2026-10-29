import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Contact() {
  return <BlueprintPage presentation="split" eyebrow="Contact the Chamber" title="Connect with Mengo Chamber" description="For membership, partnership, trade and investment enquiries, please use the Chamber's official communication channels."
     image={realPhotos.chamberInauguration} imageCaption="Mengo Chamber inauguration photograph. This is contextual imagery, not a photograph of the contact office" sections={[
  {
    "eyebrow": "General enquiries",
    "title": "Start with the right information",
    "text": "Contact details have not yet been confirmed for publication on this website. Please refer to the Chamber's recognised communication channels for current contact information.",
    "cards": [
      {
        "title": "Membership",
        "text": "Enquire about membership categories, eligibility and participation."
      },
      {
        "title": "Partnerships",
        "text": "Discuss potential enterprise, community and institutional partnerships."
      },
      {
        "title": "Trade & investment",
        "text": "Ask about the Chamber's approach to business and market connections."
      }
    ]
  },
  {
    "eyebrow": "Find out more",
    "title": "Explore the Chamber's work",
    "text": "Learn more about the institution and its priorities before making an enquiry.",
    "cards": [
      {
        "title": "About MCCL",
        "text": "Read about the Chamber's identity and mandate.",
        "href": "/about"
      },
      {
        "title": "Our strategy",
        "text": "Explore enterprise development and trade priorities.",
        "href": "/strategy"
      }
    ]
  }
]} action={{"label":"Explore membership","href":"/membership"}} />;
}
