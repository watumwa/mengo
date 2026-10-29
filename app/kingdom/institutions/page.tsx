import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function Institutions() {
  return <BlueprintPage
    eyebrow="Kingdom Institutions"
    title="Institutions & Community Life"
    description="Education, media, culture, enterprise and community organisations contribute in different ways to life across Buganda."
    image={realPhotos.k2Launch}
    imageCaption="A group photograph at a Kibuga-branded event; contextual Kingdom enterprise imagery."
    sections={[
  {
    "eyebrow": "Institutional landscape",
    "title": "Different organisations, different roles",
    "text": "The Kingdom's wider institutional landscape includes cultural bodies and organisations active in education, communication, enterprise and social development.",
    "cards": [
      {
        "title": "Education",
        "text": "Schools and learning institutions support skills and opportunity."
      },
      {
        "title": "Media and communication",
        "text": "Local media and communication networks connect communities and share information."
      },
      {
        "title": "Enterprise and development",
        "text": "Businesses and community organisations contribute to livelihoods and participation."
      }
    ]
  },
  {
    "eyebrow": "Explore more",
    "title": "Connecting institutions with enterprise",
    "text": "The Chamber focuses on commercial connections and support, while the Kingdom's cultural and other institutions retain their distinct responsibilities.",
    "cards": [
      {
        "title": "The Chamber",
        "text": "Learn about MCCL and its mandate.",
        "href": "/about"
      },
      {
        "title": "The economy",
        "text": "Explore economic sectors across Buganda.",
        "href": "/economy"
      }
    ]
  }
]}
    action={{"label":"Explore the economy","href":"/economy"}}
  />;
}
