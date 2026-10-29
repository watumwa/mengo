import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Membership() {
  return <BlueprintPage eyebrow="Membership" title="Connect with the Business Community" description="Discover how participation in a Chamber of Commerce can create connections, shared knowledge and a stronger business voice."
     image={realPhotos.businessForum} imageCaption="A business forum panel discussion, illustrating the value of industry connections." sections={[
  {
    "eyebrow": "Why membership matters",
    "title": "Be part of a wider network",
    "text": "The Chamber's membership approach is intended to bring together businesses, institutions and professionals who share an interest in enterprise development across Buganda.",
    "cards": [
      {
        "title": "Business connections",
        "text": "Meet and learn from enterprises and stakeholders with related interests."
      },
      {
        "title": "A shared voice",
        "text": "Participate in constructive discussion about the business environment."
      },
      {
        "title": "Information and development",
        "text": "Access news about the Chamber's focus areas, activities and enterprise initiatives."
      }
    ]
  },
  {
    "eyebrow": "Membership information",
    "title": "Before applying",
    "text": "Membership categories, eligibility, application arrangements and any applicable fees require confirmation by the Chamber. This website is not currently accepting paid membership applications.",
    "cards": [
      {
        "title": "Who can participate",
        "text": "Find information about the Chamber's intended business community."
      },
      {
        "title": "How to enquire",
        "text": "Use confirmed official Chamber channels for current application arrangements."
      },
      {
        "title": "Explore services",
        "text": "See the areas of support connected to the Chamber's mandate.",
        "href": "/services"
      }
    ]
  }
]} action={{"label":"Explore the Chamber","href":"/about"}} />;
}
