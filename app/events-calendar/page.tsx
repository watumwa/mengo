import { BlueprintPage } from "../BlueprintPage";

export default function EventsCalendar(){
 return <BlueprintPage eyebrow="Events & Programmes" title="Bringing Business People Together" description="Business forums, training and networking can help enterprises exchange ideas and build stronger connections." sections={[
  {
    "eyebrow": "Business engagement",
    "title": "Ways to meet and collaborate",
    "text": "The Chamber's strategic priorities include opportunities for dialogue, sector engagement and business development.",
    "cards": [
      {
        "title": "Business forums",
        "text": "Conversations among enterprise leaders, institutions and stakeholders."
      },
      {
        "title": "Trade exhibitions",
        "text": "Opportunities to showcase products, services and commercial ideas."
      },
      {
        "title": "Skills workshops",
        "text": "Learning activities focused on practical business needs."
      },
      {
        "title": "Networking events",
        "text": "Meeting people and organisations with complementary interests."
      }
    ]
  },
  {
    "eyebrow": "Event information",
    "title": "Confirmed dates and registration",
    "text": "No verified event schedule or online registration is currently published on this page. Please check the Chamber's official communication channels for event announcements.",
    "cards": [
      {
        "title": "Stay informed",
        "text": "Read the website's news and information sections.",
        "href": "/insights"
      },
      {
        "title": "Membership",
        "text": "Learn more about participating in the Chamber.",
        "href": "/membership"
      }
    ]
  }
]} action={{"label":"Explore the Chamber","href":"/about"}} />;
}
