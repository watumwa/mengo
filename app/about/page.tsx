import { BlueprintPage } from "../BlueprintPage";

export default function About() {
  return <BlueprintPage
    eyebrow="About the Chamber"
    title="Our Story & Mandate"
    description="Connecting enterprises, markets and partnerships to support stronger livelihoods across Buganda."
    sections={[
  {
    "eyebrow": "Who we are",
    "title": "A Chamber built around business",
    "text": "Mengo Chamber of Commerce Limited is a business-facing institution established by the Kingdom of Buganda to promote commerce, enterprise development and investment connections.",
    "cards": [
      {
        "title": "Our mandate",
        "text": "Bring enterprises and stakeholders together around market access, growth and constructive business dialogue."
      },
      {
        "title": "Who we serve",
        "text": "Traders, entrepreneurs, institutions, cooperatives and partners interested in Buganda's commercial development."
      },
      {
        "title": "Our direction",
        "text": "Connect, develop, advocate, promote and transform enterprise opportunities.",
        "href": "/strategy"
      }
    ]
  },
  {
    "eyebrow": "The Chamber at work",
    "title": "From local enterprise to wider markets",
    "text": "The Chamber's strategic focus brings together membership, trade promotion, business support and market information. These priorities guide its developing programmes and partnerships.",
    "cards": [
      {
        "title": "Membership",
        "text": "Learn about the Chamber's membership pathways.",
        "href": "/membership"
      },
      {
        "title": "Trade and investment",
        "text": "Explore the Chamber's approach to trade and investment linkages.",
        "href": "/invest"
      },
      {
        "title": "Business services",
        "text": "Discover enterprise support priorities.",
        "href": "/services"
      }
    ]
  }
]}
    action={{"label":"Explore membership","href":"/membership"}}
  />;
}
