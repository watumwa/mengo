import { BlueprintPage } from "../BlueprintPage";

export default function Accessibility() {
  return <BlueprintPage eyebrow="Accessibility" title="An Accessible Web Experience" description="Mengo Chamber aims to make information easier to find and use across phones, tablets and desktop computers."
     sections={[
  {
    "eyebrow": "Using this website",
    "title": "Navigation and readability",
    "text": "The website provides keyboard-accessible navigation, clear links and responsive layouts intended to support different devices and ways of browsing.",
    "cards": [
      {
        "title": "Keyboard use",
        "text": "Use the Tab key to move between interactive elements and Enter to open a selected link."
      },
      {
        "title": "Mobile viewing",
        "text": "Navigation and content layouts adapt to smaller screens."
      },
      {
        "title": "Motion preferences",
        "text": "Where supported, reduced-motion settings limit decorative movement."
      }
    ]
  },
  {
    "eyebrow": "Feedback",
    "title": "Accessibility improvements",
    "text": "Accessibility is ongoing work. If a page is difficult to navigate or understand, the issue can be raised through the Chamber's official contact channels.",
    "cards": [
      {
        "title": "Clarity",
        "text": "Use descriptive headings and links to make navigation easier."
      },
      {
        "title": "Images",
        "text": "Photograph captions and alternative text help provide context."
      }
    ]
  }
]} action={{"label":"Explore the website","href":"/explore"}} />;
}
