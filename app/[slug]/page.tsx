import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Building2, GraduationCap, Handshake } from "lucide-react";
import { PageHero, Shell } from "../components";

type Detail = { title: string; description: string; intro: string; items: { title: string; text: string }[]; cta: string };

const pages: Record<string, Detail> = {
  about: {
    title: "About the Chamber",
    description: "An independent Chamber concept rooted in Buganda’s cultural pride and enterprise.",
    intro: "Mengo Chamber of Commerce is conceived as a platform to connect commercial centres, strengthen enterprise and support sustainable socioeconomic development. It draws inspiration from Buganda’s heritage of community, dignity and practical leadership, while remaining independent of the Kingdom until any formal affiliation is confirmed.",
    items: [
      { title: "Our Vision", text: "A dignified, connected and prosperous Buganda where local enterprise creates opportunity for communities." },
      { title: "Our Mission", text: "To strengthen market access, skills, trusted partnerships and visibility for traders, entrepreneurs and commercial centres." },
      { title: "Our Values", text: "Cultural respect, shared responsibility, integrity, innovation and sustainable prosperity." },
      { title: "Our Approach", text: "Bring businesses, communities, institutions and partners together around practical opportunities." },
    ],
    cta: "Partner With Us",
  },
  membership: {
    title: "Membership",
    description: "Belong to a network built to connect, represent and grow businesses.",
    intro: "Membership is designed for traders, entrepreneurs, business associations, commercial centres and partners seeking stronger connections and opportunities. Membership tiers, fees and application procedures will be confirmed by the Chamber.",
    items: [{ title: "Business Networking", text: "Connect with enterprises and potential collaborators." }, { title: "Market Opportunities", text: "Discover prospective buyers, suppliers and trade linkages." }, { title: "Training & Development", text: "Access information on workshops and business capacity building." }, { title: "Representation", text: "Participate in dialogue around enterprise challenges and priorities." }],
    cta: "Enquire About Membership",
  },
  "commercial-centres": {
    title: "Commercial Centres",
    description: "Connecting business communities across trading centres and markets.",
    intro: "A future searchable directory will help visitors discover commercial centres, sectors, associations and business contacts. Verified listings, mapping and centre profiles will be added with Chamber-approved data.",
    items: [{ title: "Centre Profiles", text: "Present each centre's location, trade sectors and business community." }, { title: "Trader Networks", text: "Help businesses connect within and across centres." }, { title: "Business Directory", text: "Find enterprises by sector, location and service." }, { title: "Local Opportunities", text: "Highlight collaboration and market access opportunities." }],
    cta: "Register Interest",
  },
  "market-linkages": {
    title: "Market Linkages",
    description: "Building bridges between traders, buyers, suppliers and opportunities.",
    intro: "The proposed market-linkage platform will help businesses discover commercial partnerships and express interest in verified opportunities. Listings and transaction workflows will be implemented after validation.",
    items: [{ title: "Buyer & Supplier Connections", text: "Make it easier to identify potential trade partners." }, { title: "Trade Opportunities", text: "Share calls for suppliers, partnerships and procurement interests." }, { title: "Product Discovery", text: "Showcase locally available products and services." }, { title: "Business Enquiries", text: "Enable structured introductions and follow-up." }],
    cta: "Explore a Partnership",
  },
  "business-development": {
    title: "Business Development",
    description: "Skills, guidance and connections for stronger enterprises.",
    intro: "Supporting businesses at different stages with proposed programmes focused on capability, resilience and sustainable growth.",
    items: [{ title: "Entrepreneurship Training", text: "Practical sessions on planning, marketing and business operations." }, { title: "Mentorship", text: "Connect emerging entrepreneurs with experienced business leaders." }, { title: "Digital Commerce", text: "Build digital skills and readiness for modern markets." }, { title: "Business Advisory", text: "Access information on compliance, financial literacy and enterprise development." }],
    cta: "Enquire About Programmes",
  },
  investment: {
    title: "Investment & Partnerships",
    description: "Discover ways to support enterprise and economic development.",
    intro: "The Chamber's proposed investment desk will connect stakeholders with potential partnerships and verified opportunities. No investment opportunities are being offered through this concept website.",
    items: [{ title: "Partnership Enquiries", text: "Introduce prospective partners to Chamber initiatives." }, { title: "Enterprise Support", text: "Identify businesses seeking strategic collaboration." }, { title: "Sector Insights", text: "Share research and emerging commercial priorities." }, { title: "Development Collaboration", text: "Support projects that contribute to community prosperity." }],
    cta: "Discuss a Partnership",
  },
  events: {
    title: "Events & Networking",
    description: "Bring business communities together to learn, connect and collaborate.",
    intro: "A dedicated events calendar will feature Chamber-confirmed trade fairs, workshops, business forums and networking activities. No event dates are published until verified.",
    items: [{ title: "Trade Exhibitions", text: "Showcase products, services and enterprise innovations." }, { title: "Business Forums", text: "Create space for commercial dialogue and partnership." }, { title: "Training Workshops", text: "Build practical business skills and knowledge." }, { title: "Networking Sessions", text: "Connect members and stakeholders across sectors." }],
    cta: "Ask About Events",
  },
  news: {
    title: "News & Insights",
    description: "Stories, ideas and updates from the world of commerce.",
    intro: "A future editorial hub for Chamber announcements, business insights, interviews and verified success stories. Published content will be managed through an editorial workflow.",
    items: [{ title: "Chamber Announcements", text: "Official news and organisational updates." }, { title: "Business Insights", text: "Market information and practical enterprise perspectives." }, { title: "Success Stories", text: "Profiles of businesses and communities creating impact." }, { title: "Publications", text: "Research, reports and downloadable resources." }],
    cta: "Submit an Enquiry",
  },
  impact: {
    title: "Community Impact",
    description: "Advancing opportunity and socioeconomic development.",
    intro: "Our proposed impact framework prioritises the contribution of enterprise to livelihoods, community resilience and inclusive development.",
    items: [{ title: "Youth Enterprise", text: "Promote entrepreneurship pathways for young people." }, { title: "Women in Business", text: "Support participation and leadership in commerce." }, { title: "Local Economic Growth", text: "Strengthen trade and business activity in commercial centres." }, { title: "Partnership for Development", text: "Collaborate on practical initiatives with measurable outcomes." }],
    cta: "Collaborate With Us",
  },
  contact: {
    title: "Contact & Enquiries",
    description: "Start a conversation about membership, partnerships and commercial opportunities.",
    intro: "We welcome enquiries from businesses, traders, associations, partners and institutions. Official Chamber contact details and an operational enquiry form will be published once verified.",
    items: [{ title: "Membership Enquiries", text: "Ask about becoming part of the Chamber." }, { title: "Business Partnerships", text: "Share a collaboration proposal or trade-related enquiry." }, { title: "Commercial Centres", text: "Express interest in registering a centre or business network." }, { title: "Programmes & Events", text: "Request information about future initiatives." }],
    cta: "Contact the Chamber",
  },
};

const visualBySlug: Record<string, { src: string; alt: string }> = {
  about: { src: "/images/buganda-royal-palace.jpg", alt: "Buganda royal palace in Mengo, Kampala" },
  "commercial-centres": { src: "/images/kampala-market.jpg", alt: "Kampala market and commercial activity" },
  "market-linkages": { src: "/images/kampala-market.jpg", alt: "Kampala market and commercial activity" },
  events: { src: "/images/buganda-traditional-wear.jpg", alt: "Buganda community gathering in traditional dress" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = pages[slug];
  if (!data) notFound();
  const visual = visualBySlug[slug] ?? { src: "/images/buganda-gomesi.jpg", alt: "Traditional Buganda gomesi attire" };

  return <Shell><main>
    <PageHero title={data.title} description={data.description} />
    <section className="section"><div className="container"><div className="split">
      <div className="intro"><div className="eyebrow">Mengo Chamber of Commerce</div><h2>Connecting people, enterprise and opportunity.</h2><p>{data.intro}</p><Link className="btn navy" href="/contact">{data.cta} <ArrowUpRight size={16} /></Link></div>
      <img src={visual.src} alt={visual.alt} />
    </div></div></section>
    <section className="section cream"><div className="container"><div className="sectionhead"><div><div className="eyebrow">Key priorities</div><h2>What this means for you.</h2></div><p>Practical areas where the Chamber aims to connect stakeholders and support the growth of the business community.</p></div><div className="featuregrid">{data.items.map((item, index) => <article className="featurecard" key={item.title}><span className="serviceicon">{index % 3 === 0 ? <Handshake size={24} /> : index % 3 === 1 ? <Building2 size={24} /> : <GraduationCap size={24} />}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="cta"><div className="container"><div><div className="kicker">Connect with us</div><h2>Let’s create opportunities together.</h2><p>Get in touch to explore collaboration, membership or commercial development.</p></div><Link className="btn gold" href="/contact">Contact us <ArrowRight size={16} /></Link></div></section>
  </main></Shell>;
}
