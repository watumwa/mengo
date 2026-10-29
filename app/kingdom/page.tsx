import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Kingdom() {
  return <BlueprintPage
    eyebrow="The Kingdom of Buganda"
    title="Heritage, Identity & Opportunity"
    description="Explore Buganda's cultural heritage, traditional institutions and the communities that shape its social and economic life."
    image={realPhotos.bulange}
    imageCaption="Bulange, Mengo — the Buganda Kingdom's administrative headquarters. Photograph credited in the source."
    source={{"label":"Visit the Buganda Kingdom website","href":"https://buganda.or.ug/"}}
    sections={[
  {
    "eyebrow": "Discover Buganda",
    "title": "A living heritage",
    "text": "Buganda's history and cultural institutions form an important part of the region's identity. Explore the places, traditions and structures that give this heritage its distinctive character.",
    "cards": [
      {
        "title": "History & heritage",
        "text": "Learn about Buganda's historical context and living traditions.",
        "href": "/kingdom/history"
      },
      {
        "title": "Kingdom leadership",
        "text": "Explore traditional leadership and institutional roles.",
        "href": "/kingdom/leadership"
      },
      {
        "title": "Masaza & Gombolola",
        "text": "Learn about Buganda's traditional counties and local geography.",
        "href": "/kingdom/masaza"
      }
    ]
  },
  {
    "eyebrow": "People and places",
    "title": "From heritage to community life",
    "text": "Education, culture, commerce and community institutions are all part of Buganda's wider story.",
    "cards": [
      {
        "title": "Institutions",
        "text": "Explore Kingdom-linked institutions and their different roles.",
        "href": "/kingdom/institutions"
      },
      {
        "title": "Culture & tourism",
        "text": "Discover the cultural and tourism dimensions of the Kingdom.",
        "href": "/kingdom/culture-tourism"
      },
      {
        "title": "Buganda economy",
        "text": "Explore the sectors and enterprises contributing to local livelihoods.",
        "href": "/economy"
      }
    ]
  }
]}
    action={{"label":"Discover the Chamber","href":"/about"}}
  />;
}
