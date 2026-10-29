import Link from "next/link";
import { PhotoMoments } from "../PhotoMoments";
import { realPhotos } from "../realPhotos";
import { ArrowUpRight, BookOpen, Building2, Handshake, Landmark, Newspaper } from "lucide-react";
import { PageHero, Shell } from "../components";

const sections = [
  { title: "The Kingdom", icon: Landmark, links: [
    ["Kingdom Overview", "/kingdom"], ["History & Heritage", "/kingdom/history"],
    ["Leadership & Institutions", "/kingdom/leadership"], ["Masaza & Gombolola", "/kingdom/masaza"],
    ["Culture & Tourism", "/kingdom/culture-tourism"]
  ]},
  { title: "The Chamber", icon: Landmark, links: [
    ["About the Chamber", "/about"], ["Leadership & Governance", "/about/leadership"],
    ["Our Strategy", "/strategy"], ["Membership", "/membership"], ["Business Services", "/services"]
  ]},
  { title: "Economy & Business", icon: Building2, links: [
    ["Buganda Economy", "/economy"], ["Economic Sectors", "/economy/sectors"],
    ["Business Community", "/businesses"], ["SACCOs & Cooperatives", "/cooperatives"],
    ["Commercial Centres", "/commercial-centres"], ["Regional Economy", "/economic-map"]
  ]},
  { title: "Trade & Investment", icon: Handshake, links: [
    ["Trade & Investment", "/invest"], ["Market Opportunities", "/opportunities"],
    ["Market Intelligence", "/intelligence"], ["Business Advocacy", "/policy-advocacy"]
  ]},
  { title: "News & Resources", icon: Newspaper, links: [
    ["News & Insights", "/insights"], ["Events & Programmes", "/events-calendar"],
    ["Reports & Publications", "/publications"]
  ]},
  { title: "Information & Support", icon: BookOpen, links: [
    ["Contact", "/contact"], ["Accessibility", "/accessibility"],
    ["Privacy", "/privacy"], ["Website Terms", "/terms"]
  ]}
];
export default function ExplorePage() {
 return <Shell><main>
  <PageHero title="Explore the Chamber" description="Find information about the Kingdom, business community, membership, trade, investment and the Chamber's work." />
<PhotoMoments label="Explore Buganda through heritage, enterprise and community photographs" items={[{ photo: realPhotos.palaceLocal, caption: "The royal palace building in Mengo" }, { photo: realPhotos.coffeeProducts, caption: "Coffee value-addition products at Mwanyi Terimba" }, { photo: realPhotos.birthdayRun, caption: "Community participation in the Kabaka Birthday Run" }]} />
  <section className="section cream"><div className="container">
   <div className="site-index-grid">{sections.map(({title,icon:Icon,links}) =>
    <section className="site-index-card" key={title}>
     <div className="site-index-heading"><span className="serviceicon"><Icon size={22}/></span><h2>{title}</h2></div>
     <ul>{links.map(([label,url])=><li key={url}><Link href={url}>{label}<ArrowUpRight size={15}/></Link></li>)}</ul>
    </section>
   )}</div>
  </div></section>
 </main></Shell>;
}
