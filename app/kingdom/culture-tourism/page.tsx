import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function CultureTourism() {
  return <BlueprintPage
    eyebrow="Culture & Tourism"
    title="Discover Buganda's Cultural Heritage"
    description="Historic places, traditional dress, crafts, language and ceremony are part of Buganda's living cultural landscape."
    image={realPhotos.coffee}
    imageCaption="Traditional Buganda dress — a glimpse of the Kingdom's living cultural heritage."
    source={{"label":"Visit the official Kingdom website","href":"https://buganda.or.ug/"}}
    sections={[
  {
    "eyebrow": "Places and traditions",
    "title": "A heritage worth exploring",
    "text": "Buganda's cultural landscape includes important places such as Bulange and the Kasubi Tombs, alongside traditions sustained through community life.",
    "cards": [
      {
        "title": "Heritage sites",
        "text": "Discover locations that reflect Buganda's historical and cultural identity."
      },
      {
        "title": "Language and tradition",
        "text": "Luganda, customary practices and shared heritage remain central to community life."
      },
      {
        "title": "Dress and craft",
        "text": "Traditional clothing and craftsmanship express cultural identity across generations."
      }
    ]
  },
  {
    "eyebrow": "Visiting respectfully",
    "title": "People, places and context",
    "text": "Cultural experiences are most meaningful when the people, places and traditions are represented accurately and respectfully.",
    "cards": [
      {
        "title": "Heritage information",
        "text": "Use the official Kingdom channels for the latest visitor guidance."
      },
      {
        "title": "Related places",
        "text": "Explore Masaza and local cultural geography.",
        "href": "/kingdom/masaza"
      }
    ]
  }
]}
    action={{"label":"Explore Buganda's heritage","href":"/kingdom/history"}}
  />;
}
