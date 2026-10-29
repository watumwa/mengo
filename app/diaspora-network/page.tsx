import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Diaspora(){ return <BlueprintPage eyebrow="Diaspora & Enterprise" title="Connecting Buganda's Global Community" description="People living abroad can maintain strong links with local enterprise, culture and professional networks in Buganda." image={realPhotos.coffeeContainer} imageCaption="Coffee sacks in an export container, illustrating international market links." sections={[
  {
    "eyebrow": "Global connections",
    "title": "Knowledge, markets and partnerships",
    "text": "Diaspora engagement can create connections for skills exchange, enterprise development, trade and investment discussion.",
    "cards": [
      {
        "title": "Business networks",
        "text": "Professional and commercial contacts can help enterprises understand new markets."
      },
      {
        "title": "Skills and mentorship",
        "text": "Knowledge sharing can support entrepreneurship and business capability."
      },
      {
        "title": "Investment interests",
        "text": "An informed starting point for conversations about business sectors and opportunities."
      }
    ]
  },
  {
    "eyebrow": "Chamber connections",
    "title": "Explore the possibilities",
    "text": "A dedicated verified diaspora member directory or live introduction service has not been launched on this website.",
    "cards": [
      {
        "title": "Trade & investment",
        "text": "Learn about the sectors and partnerships in focus.",
        "href": "/invest"
      },
      {
        "title": "Membership",
        "text": "Explore the Chamber's approach to participation.",
        "href": "/membership"
      }
    ]
  }
]} action={{"label":"Explore trade & investment","href":"/invest"}} />; }
