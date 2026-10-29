import { BlueprintPage } from "../../BlueprintPage";
import { realPhotos } from "../../realPhotos";

export default function KingdomHistory() {
  return <BlueprintPage
    eyebrow="Kingdom Heritage"
    title="Buganda's History & Heritage"
    description="A rich cultural history reflected in Buganda's institutions, language, traditions and historic places."
    image={realPhotos.bulange}
    imageCaption="Bulange, Mengo — an important centre of the Kingdom's administrative life."
    source={{"label":"Official Buganda Kingdom information","href":"https://buganda.or.ug/"}}
    sections={[
  {
    "eyebrow": "Living history",
    "title": "A heritage carried across generations",
    "text": "The Kingdom's historical narrative includes its traditional leadership, political changes, community life and cultural practices.",
    "cards": [
      {
        "title": "Origins and leadership",
        "text": "Explore the development of the Kingdom and the traditional structures of governance."
      },
      {
        "title": "Historical transitions",
        "text": "Understand how institutions and society have evolved over time."
      },
      {
        "title": "Preservation",
        "text": "Heritage buildings, records, language and customs help connect past and present."
      }
    ]
  },
  {
    "eyebrow": "Cultural identity",
    "title": "Traditions that remain part of daily life",
    "text": "Language, clan identity, crafts, dress and ceremony continue to shape Buganda's cultural landscape.",
    "cards": [
      {
        "title": "Language and identity",
        "text": "Luganda and shared cultural expressions remain central to community life."
      },
      {
        "title": "Historic places",
        "text": "Discover architecture and landmarks associated with the Kingdom."
      },
      {
        "title": "Further reading",
        "text": "Consult the Kingdom's official sources for historical accounts and records."
      }
    ]
  }
]}
    action={{"label":"Explore the Kingdom","href":"/kingdom"}}
  />;
}
