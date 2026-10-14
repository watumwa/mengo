import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Building2, GraduationCap, Handshake } from "lucide-react";
import { PageHero, Shell } from "../components";

type Detail = { title: string; description: string; intro: string; items: { title: string; text: string }[]; cta: string };

const pages: Record<string, Detail> = {
  "policy-advocacy":{title:"Policy Advocacy",description:"Business environment priorities, consultations and public-private dialogue.",intro:"Business environment priorities, consultations and public-private dialogue.",items:[{title:"Overview",text:"Business environment priorities, consultations and public-private dialogue."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "policy-briefs":{title:"Policy Briefs & Position Papers",description:"Approved policy briefs, consultations and position papers.",intro:"Approved policy briefs, consultations and position papers.",items:[{title:"Overview",text:"Approved policy briefs, consultations and position papers."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "resources":{title:"Business Resources",description:"Compliance, export readiness, standards and digitalisation guidance.",intro:"Compliance, export readiness, standards and digitalisation guidance.",items:[{title:"Overview",text:"Compliance, export readiness, standards and digitalisation guidance."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "news-announcements":{title:"News & Announcements",description:"Verified news releases, updates and enterprise stories.",intro:"Verified news releases, updates and enterprise stories.",items:[{title:"Overview",text:"Verified news releases, updates and enterprise stories."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "media-gallery":{title:"Media Gallery",description:"Approved photographs, videos, speeches and event coverage.",intro:"Approved photographs, videos, speeches and event coverage.",items:[{title:"Overview",text:"Approved photographs, videos, speeches and event coverage."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "regional-networks":{title:"Regional & Ssaza Networks",description:"Ssaza business clusters, local networks and regional programmes.",intro:"Ssaza business clusters, local networks and regional programmes.",items:[{title:"Overview",text:"Ssaza business clusters, local networks and regional programmes."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "faq":{title:"Help Centre & FAQs",description:"Membership, services, applications and directory guidance.",intro:"Membership, services, applications and directory guidance.",items:[{title:"Overview",text:"Membership, services, applications and directory guidance."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "privacy":{title:"Privacy Policy",description:"Final privacy terms require legal approval before personal data is collected.",intro:"Final privacy terms require legal approval before personal data is collected.",items:[{title:"Overview",text:"Final privacy terms require legal approval before personal data is collected."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "terms":{title:"Terms & Conditions",description:"Platform terms require legal and institutional approval before publication.",intro:"Platform terms require legal and institutional approval before publication.",items:[{title:"Overview",text:"Platform terms require legal and institutional approval before publication."},{title:"Further information",text:"Verified details will be added after formal institutional review."}],cta:"Contact the Chamber"},
  "business-advisory":{title:"Business Advisory & Consultancy",description:"Business planning, financial management, governance and branding guidance.",intro:"Business planning, financial management, governance and branding guidance.",items:[{title:"Overview",text:"Business planning, financial management, governance and branding guidance."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "training":{title:"Training & Capacity Building",description:"Workshop catalogue, learning resources and programme enquiries.",intro:"Workshop catalogue, learning resources and programme enquiries.",items:[{title:"Overview",text:"Workshop catalogue, learning resources and programme enquiries."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "entrepreneurship":{title:"Entrepreneurship & Innovation",description:"Mentorship, startup support and digital commerce readiness.",intro:"Mentorship, startup support and digital commerce readiness.",items:[{title:"Overview",text:"Mentorship, startup support and digital commerce readiness."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "agriculture":{title:"Agricultural Transformation",description:"Agro-processing, value addition, standards and market access.",intro:"Agro-processing, value addition, standards and market access.",items:[{title:"Overview",text:"Agro-processing, value addition, standards and market access."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "arbitration":{title:"Arbitration & Business Governance",description:"Proposed dispute-resolution and governance services; not yet operational.",intro:"Proposed dispute-resolution and governance services; not yet operational.",items:[{title:"Overview",text:"Proposed dispute-resolution and governance services; not yet operational."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "trade-investment":{title:"Trade & Investment Hub",description:"Trade facilitation, investment enquiries and business connections.",intro:"Trade facilitation, investment enquiries and business connections.",items:[{title:"Overview",text:"Trade facilitation, investment enquiries and business connections."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "international-trade":{title:"International Trade & Diaspora",description:"International markets, export readiness and diaspora connections.",intro:"International markets, export readiness and diaspora connections.",items:[{title:"Overview",text:"International markets, export readiness and diaspora connections."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "trade-missions":{title:"Trade Missions & B2B Networking",description:"Trade fairs, delegations, networking sessions and commercial introductions.",intro:"Trade fairs, delegations, networking sessions and commercial introductions.",items:[{title:"Overview",text:"Trade fairs, delegations, networking sessions and commercial introductions."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "research":{title:"Research & Publications",description:"Approved reports, sector research and publication downloads.",intro:"Approved reports, sector research and publication downloads.",items:[{title:"Overview",text:"Approved reports, sector research and publication downloads."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "market-intelligence":{title:"Market Intelligence",description:"Sector trends, market briefs and a future business data platform.",intro:"Sector trends, market briefs and a future business data platform.",items:[{title:"Overview",text:"Sector trends, market briefs and a future business data platform."},{title:"Programmes and resources",text:"Published information is subject to institutional review and confirmation."}],cta:"Enquire About Services"},
  "vision-mission-values": {
    title:"Vision, Mission & Values",
    description:"A strategic direction rooted in enterprise and Buganda's development aspirations.",
    intro:"The Chamber's 2026–2029 plan presents a vision for responsible businesses that create opportunities, jobs and improved livelihoods, supported by business services, partnerships and advocacy.",
    items:[
      {title:"Vision",text:"A kingdom where vibrant, competitive and responsible businesses creates opportunities, jobs and improved livelihoods for communities."},
      {title:"Mission",text:"To facilitate trade, investment, enterprise growth, agricultural transformation, and industrial development by providing quality business services, strategic linkages, and effective advocacy for a competitive business environment in Uganda."},
      {title:"Co-operation",text:"Promoting unity for shared growth and development."},
      {title:"Innovation",text:"Encouraging continuous learning, creativity, and improvement."},
      {title:"Integrity",text:"Upholding transparency, accountability, and ethical conduct."},
      {title:"Service Excellence",text:"Delivering professional, timely, and high-quality services."},
      {title:"Loyalty",text:"Commitment to the Kabaka, the Kingdom, and its socio-economic vision."}
    ],
    cta:"Explore Our Strategic Plan",
  },
  "leadership":{
    title:"Leadership & Board",description:"Strategic oversight, institutional accountability and stewardship.",
    intro:"The strategic plan describes governance through a Governing Council, Secretariat and decentralised cluster structures. Names and portraits of individual office bearers will be published only after official confirmation.",
    items:[
      {title:"Governing Council",text:"Provides overall policy direction and strategic oversight for the Chamber."},
      {title:"Secretariat",text:"Provides professional, technical and administrative coordination and support."},
      {title:"Regional and Ssaza Clusters",text:"Support local leadership, mobilisation, representation and stakeholder engagement within delegated authority."},
      {title:"Governance Standards",text:"The plan emphasises confidentiality, conflict-of-interest management, integrity, inclusiveness and accountability."}
    ],cta:"Governance Enquiry"
  },
  "secretariat":{
    title:"Secretariat & Governance",description:"The institutional systems behind effective service delivery.",
    intro:"The strategic plan calls for a professional Secretariat, technical committees, service standards, digital infrastructure, a customer relationship management system, and monitoring and evaluation.",
    items:[
      {title:"Professional Secretariat",text:"Coordinate administration, programmes, partnerships and member support."},
      {title:"Technical Committees",text:"Support specialised business development, advocacy and programme functions."},
      {title:"Service Desk and CRM",text:"Proposed customer relationship management and structured enquiry handling."},
      {title:"Monitoring and Evaluation",text:"Track programme delivery, results and institutional performance."},
      {title:"Risk Management",text:"Maintain a reviewed risk register with risk owners, likelihood and impact ratings, mitigation measures and early-warning indicators."}
    ],cta:"Institutional Enquiry"
  },
  "strategic-plan": {
    title:"Strategic Plan 2026–2029",
    description:"Twezimbe — Building a Competitive, Connected, and Sustainable Business Ecosystem in Buganda.",
    intro:"The three-year strategy provides the Chamber's direction for institutional sustainability, stronger membership, trade and investment connections, business advocacy and data-driven services. Planned programmes and performance targets are not presented as completed achievements.",
    items:[
      {title:"Revenue Sustainability",text:"Strengthen diversified, predictable and sustainable revenue streams."},
      {title:"Membership Growth and Engagement",text:"Expand membership, improve member value, retention and participation."},
      {title:"Institutional Capacity Development",text:"Build governance, leadership, human-resource capacity and effective systems."},
      {title:"Trade, Investment and Networking Promotion",text:"Facilitate business linkages, trade promotion, exhibitions, partnerships and networking."},
      {title:"Policy Advocacy and Research",text:"Represent members' interests and produce evidence-based recommendations."},
      {title:"Market Intelligence and Data Systems",text:"Provide reliable business and market information for better decisions."}
    ],
    cta:"Discuss the Strategy",
  },
  "partners":{title:"Partners & Affiliations",description:"Strategic partnerships",intro:"Approved partner profiles and opportunities for collaboration.",items:[{title:"Overview",text:"Approved partner profiles and opportunities for collaboration."},{title:"Explore further",text:"Detailed information and verified records will be added following institutional approval."}],cta:"Contact the Chamber"},
  "membership-categories": {
    title:"Membership Categories",
    description:"Seven pathways for businesses, institutions and individuals to participate.",
    intro:"The 2026–2029 strategic plan proposes seven membership categories to serve enterprises and stakeholders across sectors and communities. Eligibility, subscriptions and rights remain subject to the Chamber's governing instruments and approved policies.",
    items:[
      {title:"Corporate Membership",text:"Registered companies, partnerships, associations, foundations, cooperatives, professional organisations and incorporated entities. Proposed access includes advocacy, networking, business development and market initiatives."},
      {title:"International and Bilateral Membership",text:"Foreign businesses, multinational corporations, foreign chambers, diplomatic business missions and international organisations seeking commercial connections with Buganda and Uganda."},
      {title:"Associate Membership",text:"Universities, training and research institutions, NGOs, professional bodies, development partners and sector-support institutions whose objectives complement the Chamber."},
      {title:"Small and Medium Enterprise Membership",text:"Micro, small and medium enterprises, with proposed advisory, capacity-building, finance-linkage, market-development, networking and mentorship support."},
      {title:"Ambassadors of Mengo Chamber",text:"Nominated distinguished individuals who promote the Chamber's mission, mobilise partnerships and help connect business opportunities."},
      {title:"Ordinary (Individual) Membership",text:"Individual entrepreneurs, professionals, consultants, investors and businesspeople participating in their personal capacity."},
      {title:"Community Membership",text:"CBOs, cooperatives, savings and credit groups, producer associations, local enterprises and community entrepreneurs; proposed support includes formalisation, skills, markets and financial inclusion."}
    ],
    cta:"Enquire About Membership",
  },
  "membership-fees": {
    title:"Proposed Membership Fees",
    description:"Recommended admission and annual subscriptions in the strategic plan.",
    intro:"The strategic plan includes recommended USD fee figures, but these are proposals rather than confirmed public charges. The Chamber must approve the final fee schedule, classification rules and payment arrangements before collection.",
    items:[
      {title:"Corporate Membership",text:"Proposed one-time admission: USD 300; annual subscription: USD 500–1,000 depending on enterprise size."},
      {title:"International & Bilateral Membership",text:"Proposed one-time admission: USD 1,000; annual subscription: USD 2,500."},
      {title:"Associate Membership",text:"Proposed one-time admission: USD 200; annual subscription: USD 350."},
      {title:"SME Membership",text:"Proposed one-time admission: USD 50; annual subscription: USD 100."},
      {title:"Ambassadors",text:"By invitation; proposed annual contribution USD 500 or waived."},
      {title:"Ordinary Individual Membership",text:"Proposed one-time admission: USD 40; annual subscription: USD 75."},
      {title:"Community Membership",text:"Proposed one-time admission: USD 20; annual subscription: USD 40."}
    ],
    cta:"Confirm Membership Fees",
  },
  "special-interest-groups": {
    title:"Special Interest Groups",
    description:"Proposed networks for targeted business support.",
    intro:"The strategic plan envisages targeted networking, mentorship and advocacy for emerging business communities. These groups are proposed and not represented as operational.",
    items:[
      {title:"Young Entrepreneurs",text:"Business mentoring and enterprise networks."},
      {title:"Women Entrepreneurs",text:"Networking, mentorship and enterprise support."},
      {title:"Entrepreneurs with Disabilities",text:"Inclusive business participation and access."},
      {title:"Faith-Based Businesses",text:"Enterprise cooperation and sector connections."},
      {title:"School-Based Enterprises",text:"School entrepreneurship clubs and projects."},
      {title:"Diaspora Business Network",text:"Business connections beyond Uganda."},
      {title:"Creative Industries",text:"Creative sector networking and enterprise development."},
      {title:"Agribusiness Entrepreneurs",text:"Agricultural value addition and market linkages."},
      {title:"Technology and Innovation",text:"Digital commerce and technology enterprise."}
    ],
    cta:"Enquire About Networks",
  },
  "success-stories":{title:"Member Success Stories",description:"Enterprise achievements",intro:"Verified member stories and case studies will be published after approval.",items:[{title:"Overview",text:"Verified member stories and case studies will be published after approval."},{title:"Explore further",text:"Detailed information and verified records will be added following institutional approval."}],cta:"Contact the Chamber"},
  about: {
    title: "About Mengo Chamber of Commerce Limited",
    description: "Building a competitive, connected and sustainable business ecosystem in Buganda.",
    intro: "Mengo Chamber of Commerce Limited is a company limited by guarantee, registered under Section 18(3) of the Companies Act, 2012 (Certificate No. 8003468736068). Established by the Kingdom of Buganda, the Chamber is envisioned as a consortium of affiliated members advancing enterprise growth, trade development and investment opportunities within Buganda and beyond.",
    items: [
      { title: "Our Vision", text: "A kingdom where vibrant, competitive and responsible businesses creates opportunities, jobs and improved livelihoods for communities." },
      { title: "Our Mission", text: "To facilitate trade, investment, enterprise growth, agricultural transformation, and industrial development by providing quality business services, strategic linkages, and effective advocacy for a competitive business environment in Uganda." },
      { title: "Strategic Theme", text: "Building a Competitive, Connected, and Sustainable Business Ecosystem in Buganda." },
      { title: "Core Values", text: "Co-operation, Innovation, Integrity, Service Excellence and Loyalty." },
    ],
    cta: "Contact the Chamber",
  },
  "strategic-goals": {
    title: "Six Strategic Goals",
    description: "The Chamber's 2026–2029 strategic implementation priorities.",
    intro: "The six strategic goals are Revenue Generation, Membership Growth and Expansion, Institutional Capacity Development, Trade Promotion and Investment Linkages, Policy Advocacy and Research, and Market Intelligence and Data Systems. The goals set out intended action, not verified delivery.",
    items: [
      {title:"Revenue Generation",text:"Diversify income through membership subscriptions, training, advisory services, partnerships and sponsorship."},
      {title:"Membership Growth and Expansion",text:"Expand membership across sectors and regions through engagement, onboarding and digital recruitment."},
      {title:"Institutional Capacity Development",text:"Strengthen governance, Secretariat, CRM, service standards, digital systems and monitoring and evaluation."},
      {title:"Trade Promotion and Investment Linkages",text:"Facilitate B2B engagements, trade missions, sector networking and business dialogue."},
      {title:"Policy Advocacy and Research",text:"Develop policy briefs, position papers, research and public-private dialogue."},
      {title:"Market Intelligence and Data Systems",text:"Publish market intelligence, undertake surveys and establish integrated data systems."}
    ],
    cta: "Explore Strategic Partnerships",
  },
  "strategic-propositions": {
    title: "Five Strategic Propositions",
    description: "Connect. Develop. Advocate. Promote. Transform.",
    intro: "The strategic plan positions the Chamber as a business ecosystem platform for Buganda, extending beyond conventional membership services.",
    items: [
      {title:"Connect",text:"Connect businesses to markets, investors, finance, technology and strategic partners."},
      {title:"Develop",text:"Build the capacity, productivity and competitiveness of enterprises."},
      {title:"Advocate",text:"Represent business interests and promote a conducive business environment."},
      {title:"Promote",text:"Promote Buganda as a destination for trade, investment, tourism and enterprise."},
      {title:"Transform",text:"Drive value addition, digitalisation, innovation and inclusive enterprise growth."}
    ],
    cta: "Explore Our Strategy",
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
  const visual = visualBySlug[slug] ?? { src: "/images/kampala-market.jpg", alt: "Commercial activity in Kampala" };
  const membershipPage = slug.startsWith("membership") || slug === "special-interest-groups";
  const strategyPage = slug.startsWith("strategic") || slug === "vision-mission-values";
  const governancePage = ["about","leadership","secretariat","partners"].includes(slug);
  const editorialLabel = strategyPage ? "Strategic direction" : membershipPage ? "Membership pathways" : governancePage ? "Our institution" : "Explore the Chamber";
  const primaryHref = membershipPage ? "/join" : "/contact";
  const related = strategyPage ? [
    {title:"Six Strategic Goals",href:"/strategic-goals"},
    {title:"Five Strategic Propositions",href:"/strategic-propositions"},
    {title:"Strategic Plan 2026–2029",href:"/strategic-plan"}
  ] : membershipPage ? [
    {title:"Membership Categories",href:"/membership-categories"},
    {title:"Proposed Fees",href:"/membership-fees"},
    {title:"Special Interest Groups",href:"/special-interest-groups"}
  ] : [
    {title:"Explore All Pages",href:"/explore"},
    {title:"Business Services",href:"/business-development"},
    {title:"Contact the Chamber",href:"/contact"}
  ];

  return <Shell><main className="detail-editorial">
    <PageHero title={data.title} description={data.description} />
    <section className="detail-intro-section"><div className="container detail-intro-grid">
      <div className="detail-intro-copy"><div className="eyebrow">{editorialLabel}</div>
        <h2>{data.title}</h2><p>{data.intro}</p>
        <div className="detail-actions"><Link className="btn navy" href={primaryHref}>{data.cta} <ArrowUpRight size={16}/></Link><Link className="detail-text-link" href="/explore">Explore the Chamber <ArrowRight size={16}/></Link></div>
      </div>
      <div className="detail-image"><img src={visual.src} alt={visual.alt}/><span>Mengo Chamber of Commerce Limited · Twezimbe 2026–2029</span></div>
    </div></section>
    <section className="detail-priorities section cream"><div className="container">
      <div className="sectionhead"><div><div className="eyebrow">Explore in detail</div><h2>{strategyPage ? "Our strategic priorities" : membershipPage ? "Membership information" : "Key areas and opportunities"}</h2></div>
        <p>{strategyPage ? "The priorities below reflect the Chamber's 2026–2029 strategic plan." : "Discover the areas outlined for this section. Future services and programmes remain subject to confirmation."}</p></div>
      <div className="detail-feature-grid">{data.items.map((item,index)=><article className="detail-feature" key={item.title}>
        <span className="detail-feature-number">{String(index+1).padStart(2,"0")}</span>
        <h3>{item.title}</h3><p>{item.text}</p>
      </article>)}</div>
    </div></section>
    <section className="detail-related"><div className="container"><div className="eyebrow">Continue exploring</div><h2>Discover more from the Chamber</h2>
      <div className="detail-related-grid">{related.map(link=><Link href={link.href} key={link.href}>{link.title}<ArrowUpRight size={18}/></Link>)}</div>
    </div></section>
    <section className="cta"><div className="container"><div><div className="kicker">Connect with us</div><h2>Build connections. Create opportunity.</h2><p>Explore membership, enterprise services and partnerships in Buganda and beyond.</p></div><Link className="btn gold" href="/contact">Contact us <ArrowRight size={16}/></Link></div></section>
  </main></Shell>;
}
