import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function KingdomLeadership() {
  return <BlueprintPage
    eyebrow="Kingdom Leadership"
    title="Traditional Leadership & Institutions"
    description="An introduction to the institutions and traditional leadership structures of the Kingdom of Buganda."
    image={realPhotos.heritage}
    imageCaption="Clan leaders at Bulange, Mengo. Contextual photograph, not an official leadership portrait."
    source={{"label":"Official Kingdom website","href":"https://buganda.or.ug/"}}
    sections={[
  {
    "eyebrow": "Traditional leadership",
    "title": "The institutions of the Kingdom",
    "text": "The Kabaka is central to Buganda's traditional monarchy. The Katikkiro and the Lukiiko are among the institutions associated with the Kingdom's administration and public life.",
    "cards": [
      {
        "title": "The Kabaka",
        "text": "The Kingdom's traditional monarch and a central symbol of cultural identity."
      },
      {
        "title": "The Katikkiro",
        "text": "The office associated with coordinating the Kingdom's administration."
      },
      {
        "title": "The Lukiiko",
        "text": "An important institution within the Kingdom's public and administrative life."
      }
    ]
  },
  {
    "eyebrow": "Local organisation",
    "title": "Masaza and Gombolola",
    "text": "Traditional county and subcounty structures help explain Buganda's historical and cultural geography. They should not be confused with Uganda's current district administration.",
    "cards": [
      {
        "title": "Masaza",
        "text": "Explore the traditional counties of Buganda.",
        "href": "/kingdom/masaza"
      },
      {
        "title": "Official information",
        "text": "For current officeholders and formal institutional details, consult the Kingdom's official channels."
      }
    ]
  }
]}
    action={{"label":"Explore Masaza","href":"/kingdom/masaza"}}
  />;
}
