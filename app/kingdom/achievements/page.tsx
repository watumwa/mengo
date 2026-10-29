import { BlueprintPage } from "../../BlueprintPage";

export default function Achievements() {
  return <BlueprintPage
    eyebrow="Kingdom Development"
    title="Community & Economic Development"
    description="Explore the themes connecting enterprise, institutions and community development across Buganda."
    sections={[
  {
    "eyebrow": "Areas of contribution",
    "title": "Development that matters to communities",
    "text": "Agriculture, education, health, heritage, enterprise and infrastructure are important areas for community livelihoods and institutional engagement.",
    "cards": [
      {
        "title": "Agriculture and enterprise",
        "text": "Production, value addition, trade and community enterprise create links across the economy."
      },
      {
        "title": "Education and skills",
        "text": "Learning and skills development help prepare people for employment and entrepreneurship."
      },
      {
        "title": "Culture and tourism",
        "text": "Heritage conservation and visitor activity contribute to Buganda's social and economic landscape."
      }
    ]
  },
  {
    "eyebrow": "Chamber connections",
    "title": "Where enterprise fits in",
    "text": "The Chamber's role is to help promote commerce and business participation. Programme achievements should be attributed to the organisations responsible for them.",
    "cards": [
      {
        "title": "Business services",
        "text": "Explore enterprise support priorities.",
        "href": "/services"
      },
      {
        "title": "Economic sectors",
        "text": "Discover sectors connected to local development.",
        "href": "/economy/sectors"
      }
    ]
  }
]}
    action={{"label":"Explore economic sectors","href":"/economy/sectors"}}
  />;
}
