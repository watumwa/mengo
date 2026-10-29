import { BlueprintPage } from "../../BlueprintPage";

export default function AboutLeadership() {
  return <BlueprintPage
    eyebrow="Chamber Leadership"
    title="Leadership & Governance"
    description="Institutional oversight and responsible stewardship are essential to a trusted business chamber."
    sections={[
  {
    "eyebrow": "Governance",
    "title": "How the Chamber is structured",
    "text": "The Chamber's governance framework distinguishes strategic oversight from day-to-day coordination and member services.",
    "cards": [
      {
        "title": "Governing Council",
        "text": "Strategic direction, institutional accountability and policy oversight."
      },
      {
        "title": "Secretariat",
        "text": "Coordination of operations, member engagement and Chamber programmes."
      },
      {
        "title": "Regional engagement",
        "text": "Connections with local enterprises and stakeholders across Buganda."
      }
    ]
  },
  {
    "eyebrow": "Public information",
    "title": "Leadership profiles",
    "text": "Official names, appointments and portraits should be obtained from the Chamber's authorised records. For current leadership information, use the Chamber's official channels.",
    "cards": [
      {
        "title": "Governance and accountability",
        "text": "Understand the institutional approach to transparency and representation.",
        "href": "/governance"
      },
      {
        "title": "Strategic priorities",
        "text": "Read about the work guiding the Chamber.",
        "href": "/strategy"
      }
    ]
  }
]}
    action={{"label":"Explore governance","href":"/governance"}}
  />;
}
