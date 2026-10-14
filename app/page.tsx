import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Landmark,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

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
    image: "/images/kampala-market.jpg",
    alt: "Commerce at a Kampala market",
  },
  {
    title: "Business Directory",
    description: "Explore illustrative listings while business verification is being developed.",
    href: "/businesses",
    action: "Search Businesses",
    image: "/images/buganda-traditional-wear.jpg",
    alt: "Buganda community members in formal traditional dress",
  },
  {
    title: "Market Opportunities",
    description: "Explore prospective local and regional trade and supply linkages.",
    href: "/opportunities",
    action: "View Opportunities",
    image: "/images/buganda-royal-palace.jpg",
    alt: "Historic Buganda palace in Mengo, Kampala",
  },
  {
    title: "Business Development",
    description: "Training, membership and advisory services for growth.",
    href: "/business-development",
    action: "Learn More",
    image: "/images/buganda-gomesi.jpg",
    alt: "Traditional Buganda gomesi attire",
  },
];

export default function Home() {
  return <Shell><main className="editorial-home">
    <section className="hero editorial-hero">
      <div className="container"><div className="content">
        <div className="kicker">Uniting traders. Building opportunities.</div>
        <h1>A Stronger<br />Commercial Future<br />for <em>Buganda</em></h1>
        <p>Mengo Chamber of Commerce Limited, established by the Kingdom of Buganda, aims to connect businesses, traders and commercial centres, promote trade and investment, and strengthen enterprise development.</p>
        <div className="heroactions">
          <Link className="btn gold" href="/join">Join the Chamber <ArrowRight size={16} /></Link>
          <Link className="btn outline" href="/about">Explore our vision <ArrowUpRight size={16} /></Link>
        </div>
      </div></div>
    </section>

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

    <section className="editorial-areas"><div className="container">
      <div className="editorial-heading"><div className="eyebrow">Explore our key areas</div><h2>Building A Thriving Commercial Community</h2></div>
      <div className="editorial-area-grid">{areas.map(({ title, description, href, action, image, alt }) => <article className="editorial-area-card" key={title}>
        <img src={image} alt={alt} />
        <div><h3>{title}</h3><p>{description}</p><Link href={href}>{action} <span aria-hidden="true">→</span></Link></div>
      </article>)}</div>
    </div></section>

    <section className="editorial-feature-row" aria-label="Investment and heritage"><Link href="/opportunities" className="editorial-feature editorial-feature-invest">
      <div><span>Opportunity in view</span><h2>Invest in<br />Buganda’s Future</h2><p>Discover commercial opportunity across trade, tourism, agriculture and enterprise.</p><b>Explore Opportunities <ArrowRight size={15} /></b></div>
    </Link><Link href="/about" className="editorial-feature editorial-feature-heritage">
      <div><span>Our heritage, our strength</span><h2>Commerce for<br />A Prosperous Buganda</h2><p>Rooted in cultural confidence, we imagine a dynamic and inclusive commercial ecosystem.</p><b>About the Chamber <ArrowRight size={15} /></b></div>
    </Link></section>

    <section className="editorial-join"><div className="container"><div><h2>Connect with Traders and Businesses Across Buganda</h2><p>Be part of a stronger network driving trade, opportunity and inclusive economic transformation.</p></div><Link className="btn gold" href="/join">Become a Member <ArrowRight size={16} /></Link></div></section>

    <section className="editorial-disclaimer"><div className="container">Website frontend under development. Content is based on the Mengo Chamber of Commerce Limited 2026–2029 strategic plan; programme details require institutional confirmation.</div></section>
  </main></Shell>;
}
