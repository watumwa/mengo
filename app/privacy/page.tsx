import { BlueprintPage } from "../BlueprintPage";

export default function Privacy() {
  return <BlueprintPage eyebrow="Privacy" title="Privacy & Personal Information" description="Information about how visitor and membership data may be handled on the Chamber website."
     sections={[
  {
    "eyebrow": "Current information",
    "title": "Formal privacy notice pending",
    "text": "A formal MCCL privacy notice has not yet been published on this website. Do not use the demonstration interfaces to submit confidential or sensitive information.",
    "cards": [
      {
        "title": "Membership enquiries",
        "text": "Any future application process should explain what data is collected and why."
      },
      {
        "title": "Your information",
        "text": "A published policy should explain retention, access and correction rights."
      },
      {
        "title": "External sites",
        "text": "When following external links, review the privacy information on those websites."
      }
    ]
  }
]} action={{"label":"Website accessibility","href":"/accessibility"}} />;
}
