import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Landmark,
  TrendingUp,
  UsersRound,
  BarChart3,
  ShieldCheck,
  CalendarDays,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { Shell } from "./components";
import EcosystemSearch from "./EcosystemSearch";

const pillars = [
  { icon: UsersRound, title: "Business Connectivity", text: "Linking traders to markets and opportunities." },
  { icon: TrendingUp, title: "Enterprise Development", text: "Supporting growth and innovation." },
  { icon: Handshake, title: "Market Linkages", text: "Connecting buyers, suppliers and investors." },
  { icon: Building2, title: "Community Impact", text: "Creating jobs and inclusive economic development." },
  { icon: Landmark, title: "Trade Promotion", text: "Promoting Buganda as a destination for trade and investment." },
];

const areas = [
  {
    title: "Commercial Centres",
    description: "Discover trading centres, markets and business hubs across Buganda.",
    href: "/centres",
    action: "Explore Centres",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruits_stall_in_Kasubi_market.jpg?width=960",
    alt: "Real fruit stall photographed at Kasubi market in Kampala",
  },
  {
    title: "Business Directory",
    description: "Explore illustrative listings while business verification is being developed.",
    href: "/businesses",
    action: "Search Businesses",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kampala_Market.jpg?width=960",
    alt: "Real Kampala market photograph",
  },
  {
    title: "Market Opportunities",
    description: "Explore prospective local and regional trade and supply linkages.",
    href: "/exchange",
    action: "View Opportunities",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harvesting_Ugandan_coffee_1.jpg?width=960",
    alt: "Real Ugandan coffee farmers harvesting produce",
  },
  {
    title: "Business Development",
    description: "Training, membership and advisory services for growth.",
    href: "/business-development",
    action: "Learn More",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_farmers_harvesting_coffee.jpg?width=960",
    alt: "Real photograph of Ugandan farmers at work",
  },
];

export default function Home() {
  return <Shell><main className="editorial-home">
    <section className="hero editorial-hero">
      <div className="container"><div className="content">
        <div className="kicker">MCCL CONNECT · The Business Ecosystem of Buganda</div>
        <h1>Where Buganda’s<br />Businesses <em>Connect,</em><br />Grow &amp; Trade</h1>
        <p>Connecting enterprises, investors, markets, knowledge and opportunities across Buganda and beyond. A Chamber established by the Kingdom of Buganda to advance commerce and enterprise growth.</p>
        <div className="heroactions">
          <Link className="btn gold" href="/businesses">Explore Businesses <ArrowRight size={16} /></Link>
          <Link className="btn outline" href="/exchange">Find Opportunities <ArrowUpRight size={16} /></Link><Link className="btn outline" href="/join">Join the Chamber <ArrowUpRight size={16} /></Link>
        </div>
      </div></div>
    </section>

    <section className="container mcc-search-above"><EcosystemSearch compact/></section>

    <section className="ecosystem-shortcuts"><div className="container"><div className="ecosystem-shortcuts-heading"><span className="eyebrow">Explore MCCL CONNECT</span><h2>Your gateway to business and opportunity</h2></div><div className="ecosystem-shortcuts-grid">{[["Business Directory","/businesses"],["Trade & Investment","/invest"],["Market Intelligence","/intelligence"],["Opportunities","/exchange"],["Membership","/join"],["Events & Programmes","/events-calendar"]].map(([label,url])=><Link href={url} key={url}><span>{label}</span><ArrowUpRight size={18}/></Link>)}</div></div></section>

    <section className="editorial-pillars" aria-label="Chamber focus areas"><div className="container">
      <div className="editorial-pillar-grid">{pillars.map(({ icon: Icon, title, text }) => <article className="editorial-pillar" key={title}>
        <span className="editorial-icon"><Icon size={24} strokeWidth={1.7} /></span><div><h2>{title}</h2><p>{text}</p></div>
      </article>)}</div>
    </div></section>

    <section className="editorial-impact"><div className="container">
      <div className="editorial-impact-grid">
        <div className="editorial-stat"><b>Connect</b><span>Businesses and markets</span></div>
        <div className="editorial-stat"><b>Develop</b><span>Enterprise capability</span></div>
        <div className="editorial-stat"><b>Advocate</b><span>Business interests</span></div>
        <div className="editorial-stat"><b>Promote</b><span>Buganda trade and investment</span></div>
      </div>
      <p className="editorial-note">Five strategic propositions: Connect, Develop, Advocate, Promote and Transform. These describe priorities, not completed outcomes.</p>
    </div></section>

    <section className="mcc-journeys"><div className="container"><div className="mcc-journeys-header"><div><span className="eyebrow">Your business journey</span><h2>What would you like to achieve?</h2><p>Choose a goal and go directly to the right part of the Chamber ecosystem.</p></div><Link href="/explore">Explore all services <ArrowUpRight size={17}/></Link></div><div className="mcc-journey-grid"><Link href="/connect"><Handshake size={29}/><strong>Find business partners</strong><span>Explore introductions and commercial networks.</span><ArrowUpRight size={18}/></Link><Link href="/exchange"><TrendingUp size={29}/><strong>Discover opportunities</strong><span>Explore trade, supply and investment concepts.</span><ArrowUpRight size={18}/></Link><Link href="/value-chains"><Building2 size={29}/><strong>Understand value chains</strong><span>See how enterprises connect across sectors.</span><ArrowUpRight size={18}/></Link><Link href="/business-issues"><Landmark size={29}/><strong>Raise business priorities</strong><span>Explore advocacy and issue-tracking workflows.</span><ArrowUpRight size={18}/></Link></div></div></section>

    <section className="editorial-areas"><div className="container">
      <div className="editorial-heading"><div className="eyebrow">Explore our key areas</div><h2>Building A Thriving Commercial Community</h2></div>
      <div className="editorial-area-grid">{areas.map(({ title, description, href, action, image, alt }) => <article className="editorial-area-card" key={title}>
        {image?<img src={image} alt={alt}/>:<div className="mcc-illustration" aria-hidden="true"><span>{title==="Business Directory"?<Building2 size={48}/>:title==="Market Opportunities"?<TrendingUp size={48}/>:<Handshake size={48}/>}</span><i>{title==="Business Directory"?"DISCOVER ENTERPRISES":title==="Market Opportunities"?"CONNECT TO MARKETS":"BUILD BUSINESS CAPACITY"}</i></div>}
        <div>{<a className="mcc-photo-credit" href={title==="Commercial Centres"?"https://commons.wikimedia.org/wiki/File:Fruits_stall_in_Kasubi_market.jpg":title==="Business Directory"?"https://commons.wikimedia.org/wiki/File:Kampala_Market.jpg":title==="Market Opportunities"?"https://commons.wikimedia.org/wiki/File:Harvesting_Ugandan_coffee_1.jpg":"https://commons.wikimedia.org/wiki/File:Coffee_farmers_harvesting_coffee.jpg"} target="_blank" rel="noopener noreferrer">Photo: Wikimedia Commons · View author &amp; licence</a>}<h3>{title}</h3><p>{description}</p><Link href={href}>{action} <span aria-hidden="true">→</span></Link></div>
      </article>)}</div>
    </div></section>

    <section className="editorial-feature-row" aria-label="Investment and heritage"><Link href="/exchange" className="editorial-feature editorial-feature-invest">
      <div><span>Opportunity in view</span><h2>Invest in<br />Buganda’s Future</h2><p>Discover commercial opportunity across trade, tourism, agriculture and enterprise.</p><b>Explore Opportunities <ArrowRight size={15} /></b></div>
    </Link><Link href="/about" className="editorial-feature editorial-feature-heritage">
      <div><span>Our heritage, our strength</span><h2>Commerce for<br />A Prosperous Buganda</h2><p>Rooted in cultural confidence, we imagine a dynamic and inclusive commercial ecosystem.</p><b>About the Chamber <ArrowRight size={15} /></b></div>
    </Link></section>

    <section className="mcc-platform" aria-labelledby="mcc-platform-heading"><div className="container">
      <div className="mcc-platform-head"><div><span className="eyebrow">One connected ecosystem</span><h2 id="mcc-platform-heading">Built for every part of the business journey.</h2><p>Explore the three connected experiences envisioned for Mengo Chamber. These are frontend previews; live accounts, payments and approvals will be enabled in a later phase.</p></div><Link href="/explore">Explore the platform <ArrowUpRight size={17}/></Link></div>
      <div className="mcc-platform-grid">
        <article className="mcc-platform-card"><span className="mcc-platform-number">01 / DISCOVER</span><div className="mcc-platform-symbol"><Building2 size={30}/></div><h3>Public business gateway</h3><p>Find enterprises, commercial centres, programmes and investment opportunities across Buganda.</p><div className="mcc-platform-tags"><span>Directory</span><span>Investment</span><span>Events</span></div><Link href="/businesses">Explore businesses <ArrowRight size={16}/></Link></article>
        <article className="mcc-platform-card"><span className="mcc-platform-number">02 / BELONG</span><div className="mcc-platform-symbol"><UsersRound size={30}/></div><h3>Membership experience</h3><p>Discover membership categories, benefits and the proposed digital member journey.</p><div className="mcc-platform-tags"><span>Applications</span><span>Member portal</span><span>Services</span></div><Link href="/join">Explore membership <ArrowRight size={16}/></Link></article>
        <article className="mcc-platform-card"><span className="mcc-platform-number">03 / LEAD</span><div className="mcc-platform-symbol"><BarChart3 size={30}/></div><h3>Chamber command centre</h3><p>Preview the operational and strategic tools for membership, finance, programmes and performance.</p><div className="mcc-platform-tags"><span>CRM</span><span>Reporting</span><span>KPIs</span></div><Link href="/strategy">View strategic framework <ArrowRight size={16}/></Link></article>
      </div>
    </div></section>

    <section className="mcc-strategy" aria-labelledby="mcc-strategy-heading"><div className="container">
      <div className="mcc-strategy-intro"><span className="eyebrow">2026–2029 · Twezimbe</span><h2 id="mcc-strategy-heading">Six priorities. One stronger business ecosystem.</h2><p>Our digital vision follows the Chamber's six strategic pillars. Select a priority to explore its related experience.</p></div>
      <div className="mcc-strategy-grid">
        {[
          {icon:CreditCard,title:"Revenue sustainability",desc:"Membership, programmes and sustainable services.",href:"/membership"},
          {icon:UsersRound,title:"Membership growth",desc:"Welcoming and connecting enterprises of every size.",href:"/join"},
          {icon:ShieldCheck,title:"Institutional capacity",desc:"Governance, service delivery and operational excellence.",href:"/governance"},
          {icon:Handshake,title:"Trade & investment",desc:"Business linkages, partnerships and market access.",href:"/exchange"},
          {icon:Landmark,title:"Policy & advocacy",desc:"Research and a stronger voice for business.",href:"/policy-advocacy"},
          {icon:BookOpen,title:"Market intelligence",desc:"Evidence, insight and informed commercial decisions.",href:"/intelligence"}
        ].map(({icon:Icon,title,desc,href},i)=><Link className="mcc-strategy-item" href={href} key={title}><span className="mcc-strategy-index">0{i+1}</span><Icon size={24} strokeWidth={1.7}/><strong>{title}</strong><span>{desc}</span><ArrowUpRight className="mcc-strategy-arrow" size={17}/></Link>)}
      </div>
      <div className="mcc-strategy-foot"><span><CalendarDays size={17}/> Inspired by the MCCL Three-Year Strategic Plan, 2026–2029</span><Link href="/strategy">Explore the strategic plan <ArrowRight size={16}/></Link></div>
    </div></section>

    <section className="editorial-join"><div className="container"><div><h2>Connect with Traders and Businesses Across Buganda</h2><p>Be part of a stronger network driving trade, opportunity and inclusive economic transformation.</p></div><Link className="btn gold" href="/join">Become a Member <ArrowRight size={16} /></Link></div></section>

    <section className="editorial-disclaimer"><div className="container">Website frontend under development. Content is based on the Mengo Chamber of Commerce Limited 2026–2029 strategic plan; programme details require institutional confirmation.</div></section>
  </main></Shell>;
}
