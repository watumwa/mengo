import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function Masaza() {
  return <BlueprintPage
    eyebrow="Masaza & Gombolola"
    title="The Traditional Counties of Buganda"
    description="Explore the traditional Masaza and the regional identity they represent within the Kingdom of Buganda."
    image={realPhotos.bulange}
    imageCaption="Bulange, Mengo — contextual photograph of the Kingdom's headquarters."
    sections={[
  {
    "eyebrow": "Traditional geography",
    "title": "Understanding the Masaza",
    "text": "Buganda's 18 traditional Masaza form part of its historical and cultural geography. Their boundaries and administration differ from present-day districts.",
    "cards": [
      {
        "title": "Buddu, Bugerere & Bulemeezi",
        "text": "Traditional county names in Buganda's historical geography."
      },
      {
        "title": "Buluuli, Busiro & Busujju",
        "text": "Explore the relationship between the Kingdom's regions and local communities."
      },
      {
        "title": "Other Masaza",
        "text": "Butambala, Buvuma, Buweekula, Gomba, Kabula, Kooki, Kyaddondo, Kyaggwe, Mawogola, Mawokota, Ssese and Ssingo."
      }
    ]
  },
  {
    "eyebrow": "Communities and commerce",
    "title": "Local identity, local enterprise",
    "text": "The Masaza provide valuable cultural context for understanding place-based traditions, community links and commercial activity.",
    "cards": [
      {
        "title": "Culture",
        "text": "Explore local heritage and cultural practices.",
        "href": "/kingdom/culture-tourism"
      },
      {
        "title": "Commercial centres",
        "text": "Learn about trading areas and markets without confusing them with traditional county administration.",
        "href": "/commercial-centres"
      }
    ]
  }
]}
    action={{"label":"Explore the Kingdom","href":"/kingdom"}}
  />;
}
