import { BlueprintPage } from "../BlueprintPage";

export default function Services() {
  return <BlueprintPage eyebrow="Business Services" title="Supporting Enterprise Growth" description="Explore the areas in which the Chamber aims to support business connections, development and representation."
     sections={[
  {
    "eyebrow": "Enterprise development",
    "title": "Practical areas of support",
    "text": "The Chamber's strategic direction covers business advisory, skills, trade promotion, research and advocacy. Specific programme availability and eligibility should be confirmed through official Chamber channels.",
    "cards": [
      {
        "title": "Business development",
        "text": "Enterprise planning, financial capability, management skills and competitiveness."
      },
      {
        "title": "Trade facilitation",
        "text": "Market connections, supplier relationships and business-to-business engagement."
      },
      {
        "title": "Training and mentorship",
        "text": "Skills development and knowledge exchange relevant to enterprise needs."
      },
      {
        "title": "Policy advocacy",
        "text": "Business representation, stakeholder engagement and informed policy dialogue."
      },
      {
        "title": "Investment connections",
        "text": "Linking potential partners with relevant business and sector information."
      },
      {
        "title": "Market intelligence",
        "text": "Research and economic information to help businesses make better decisions."
      }
    ]
  },
  {
    "eyebrow": "Find your starting point",
    "title": "Choose the area that matters to you",
    "text": "Different businesses need different kinds of support. Start by exploring the Chamber's membership pathways or strategic priorities.",
    "cards": [
      {
        "title": "Membership",
        "text": "Understand opportunities to participate in the Chamber.",
        "href": "/membership"
      },
      {
        "title": "Trade and investment",
        "text": "Explore trade and investment focus areas.",
        "href": "/invest"
      }
    ]
  }
]} action={{"label":"Discover membership","href":"/membership"}} />;
}
