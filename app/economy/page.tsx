import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Economy() {
  return <BlueprintPage eyebrow="Buganda Economy" title="Enterprise Across Buganda" description="Agriculture, trade, manufacturing, tourism and services connect communities and markets throughout Buganda."
    image={realPhotos.coffeeProducts} imageCaption="Mwanyi Terimba coffee products displayed at the company's premises." sections={[
  {
    "eyebrow": "Economic activity",
    "title": "The sectors behind livelihoods",
    "text": "Buganda's economy brings together a wide range of enterprises, from small traders and farming communities to manufacturers and service providers.",
    "cards": [
      {
        "title": "Agriculture & agribusiness",
        "text": "Farming, processing, storage and the movement of produce to markets."
      },
      {
        "title": "Trade & services",
        "text": "Wholesale, retail, transport, finance and other services serving households and enterprises."
      },
      {
        "title": "Industry & innovation",
        "text": "Manufacturing, technology, training and growing enterprise capability."
      }
    ]
  },
  {
    "eyebrow": "Explore opportunities",
    "title": "Connect with the commercial ecosystem",
    "text": "The Chamber's priorities include stronger market linkages, enterprise development and useful business information.",
    "cards": [
      {
        "title": "Economic sectors",
        "text": "Explore the industries shaping local business.",
        "href": "/economy/sectors"
      },
      {
        "title": "Commercial centres",
        "text": "Learn about markets and trading areas.",
        "href": "/commercial-centres"
      },
      {
        "title": "Cooperatives",
        "text": "Understand the place of SACCOs and producer groups.",
        "href": "/cooperatives"
      }
    ]
  }
]} action={{"label":"Explore economic sectors","href":"/economy/sectors"}} />;
}
