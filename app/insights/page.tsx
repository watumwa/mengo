import { BlueprintPage } from "../BlueprintPage";

export default function Insights(){
 return <BlueprintPage eyebrow="News & Insights" title="Stories from the Business Community" description="Follow the themes shaping enterprise development, trade and community opportunity in Buganda." sections={[
  {
    "eyebrow": "Areas of interest",
    "title": "Business, people and progress",
    "text": "The Chamber's areas of interest span enterprise growth, market access, regional development, investment, and the wider economic life of Buganda.",
    "cards": [
      {
        "title": "Enterprise & livelihoods",
        "text": "How entrepreneurs, traders and businesses contribute to local prosperity."
      },
      {
        "title": "Trade & market access",
        "text": "Connections among producers, buyers, service providers and wider markets."
      },
      {
        "title": "Culture & community",
        "text": "The people, places and institutions contributing to Buganda's identity and development."
      }
    ]
  },
  {
    "eyebrow": "Official updates",
    "title": "News and announcements",
    "text": "No official Chamber news articles have been published in this section yet. Updates will be added when publication information and relevant photographs are confirmed.",
    "cards": [
      {
        "title": "Reports & publications",
        "text": "Explore information about the Chamber's resources.",
        "href": "/publications"
      },
      {
        "title": "Events & programmes",
        "text": "Learn about the types of events associated with the Chamber's work.",
        "href": "/events-calendar"
      },
      {
        "title": "Our strategy",
        "text": "Explore the priorities behind the Chamber's direction.",
        "href": "/strategy"
      }
    ]
  }
]} action={{"label":"Explore publications","href":"/publications"}} />;
}
