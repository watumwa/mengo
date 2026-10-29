import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";
import Link from "next/link";

export default function Membership() {
  return <BlueprintPage presentation="feature" eyebrow="Membership" title="Connect with the Business Community" description="Discover how participation in a Chamber of Commerce can create connections, shared knowledge and a stronger business voice."
     feature={<section style={{background:"#edf4fa",padding:"30px 0"}}><div className="bp-shell" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}><div><strong style={{display:"block",fontSize:22,color:"#163f70"}}>Interested in Chamber membership?</strong><p style={{color:"#536e83",margin:"8px 0 0"}}>Submit your business details for review. No payment is required.</p></div><Link href="/membership/apply" style={{background:"#123f75",color:"#fff",borderRadius:6,padding:"15px 22px",fontWeight:800}}>Apply for membership →</Link></div></section>}
     image={realPhotos.businessForum} imageCaption="A business forum panel discussion, illustrating the value of industry connections." gallery={[{ photo: realPhotos.chamberInauguration, label: "Group photograph from the Chamber inauguration" }, { photo: realPhotos.enterpriseGroup, label: "Enterprise team photographed outside Rexba Ltd" }]} sections={[
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
    "text": "Membership categories, eligibility, application arrangements and any applicable fees require confirmation by the Chamber. You can submit an expression of interest online; formal categories, eligibility and fees remain subject to confirmation. No online membership payments are being collected.",
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
