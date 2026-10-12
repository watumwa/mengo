import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  ChartNoAxesCombined,
  GraduationCap,
  Handshake,
  MapPinned,
  Store,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const services = [
  { icon: Handshake, title: "Market Access & Trade Linkages", text: "Build connections between traders, buyers, suppliers and emerging markets.", href: "/market-linkages" },
  { icon: Store, title: "Commercial Centre Networks", text: "Bring businesses together across commercial centres to collaborate and grow.", href: "/commercial-centres" },
  { icon: GraduationCap, title: "Enterprise Development", text: "Equip entrepreneurs with practical training, mentorship and advisory support.", href: "/business-development" },
  { icon: ChartNoAxesCombined, title: "Investment & Partnerships", text: "Connect promising businesses and local opportunities with potential partners.", href: "/investment" },
  { icon: UsersRound, title: "Membership & Advocacy", text: "Create a collective voice for businesses and strengthen the enterprise ecosystem.", href: "/membership" },
  { icon: CalendarDays, title: "Trade Events & Networking", text: "Discover forums, exhibitions and opportunities to build meaningful relationships.", href: "/events" },
];

export default function Home() {
  return <Shell><main>
    <section className="hero">
      <div className="container"><div className="content">
        <div className="kicker">Mengo, Buganda</div>
        <h1>Commerce with purpose.<br />Prosperity for <em>Buganda.</em></h1>
        <p>A Chamber concept rooted in Buganda’s heritage of community, enterprise and responsible leadership—connecting traders, businesses and commercial centres to wider opportunity.</p>
        <div className="heroactions">
          <Link className="btn gold" href="/join">Join the Chamber <ArrowUpRight size={16} /></Link>
          <Link className="btn outline" href="/about">Our vision & mission <ArrowRight size={16} /></Link>
        </div>
        <div className="herofoot"><div><b>01</b>Honour heritage</div><div><b>02</b>Enable enterprise</div><div><b>03</b>Grow communities</div></div>
      </div></div>
    </section>

    <div className="quicklinks"><div className="container quickgrid">
      {[{ icon: UsersRound, title: "Become a Member", text: "Grow your network and influence", href: "/membership" }, { icon: MapPinned, title: "Find a Commercial Centre", text: "Explore local business communities", href: "/commercial-centres" }, { icon: Handshake, title: "Discover Opportunities", text: "Connect to markets and partners", href: "/market-linkages" }, { icon: CalendarDays, title: "Upcoming Events", text: "Learn, connect and collaborate", href: "/events" }].map(({ icon: Icon, title, text, href }) => <Link href={href} className="quickcard" key={title}><span className="quickicon"><Icon size={22} /></span><div><h3>{title} ↗</h3><p>{text}</p></div></Link>)}
    </div></div>

    <section className="section"><div className="container split">
      <div><img src="/images/buganda-traditional-wear.jpg" alt="Buganda community members in traditional dress" /></div>
      <div className="intro">
        <div className="eyebrow">Our identity</div>
        <h2>Rooted in Buganda. Built for shared prosperity.</h2>
        <p>Mengo Chamber of Commerce is an independent concept for a trusted bridge between local enterprise, markets, institutions and communities.</p>
        <p>We see culture as a strength for practical development: a foundation for trusted relationships, responsible leadership and enterprise that improves everyday life.</p>
        <div className="checks"><span className="check"><BadgeCheck size={18} /> Cultural dignity</span><span className="check"><BadgeCheck size={18} /> Local enterprise</span><span className="check"><BadgeCheck size={18} /> Shared opportunity</span><span className="check"><BadgeCheck size={18} /> Sustainable growth</span></div>
        <Link href="/about" className="btn navy">Learn about the Chamber <ArrowRight size={15} /></Link>
      </div>
    </div></section>

    <section className="section cream"><div className="container">
      <div className="sectionhead"><div><div className="eyebrow">A Buganda-rooted vision</div><h2>Enterprise that honours people,<br />place and possibility.</h2></div><p>These proposed guiding statements draw inspiration from Buganda’s cultural pride, community spirit and development ambitions. They are not an official Kingdom declaration.</p></div>
      <div className="cards">
        <article className="articlecard"><img className="picture" src="/images/buganda-royal-palace.jpg" alt="Buganda royal palace in Mengo, Kampala" /><div className="body"><span className="tag">Our vision</span><h3>A dignified, prosperous Buganda</h3><p>Communities where traders, entrepreneurs and commercial centres have the confidence, connections and opportunity to thrive.</p></div></article>
        <article className="articlecard"><img className="picture" src="/images/kampala-market.jpg" alt="Kampala market traders and commerce" /><div className="body"><span className="tag">Our mission</span><h3>Turn connection into opportunity</h3><p>Strengthen market access, trusted partnerships, business skills and visibility for enterprise across Buganda.</p></div></article>
        <article className="articlecard"><img className="picture" src="/images/buganda-gomesi.jpg" alt="Traditional Buganda gomesi attire" /><div className="body"><span className="tag">Our promise</span><h3>Progress with cultural confidence</h3><p>Bring contemporary business practice and Buganda’s living heritage together with care, dignity and shared responsibility.</p></div></article>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="sectionhead"><div><div className="eyebrow">What we do</div><h2>Practical pathways for<br />business growth.</h2></div><p>From commercial-centre networks to market opportunities and enterprise support, the service pillars are designed around the needs of Buganda’s business community.</p></div>
      <div className="cards">{services.map(({ icon: Icon, title, text, href }) => <Link className="servicecard" href={href} key={title}><div className="body"><span className="serviceicon"><Icon size={26} /></span><h3>{title}</h3><p>{text}</p><span className="textlink">Explore service <ArrowUpRight size={15} /></span></div></Link>)}</div>
    </div></section>

    <section className="section cream"><div className="container split">
      <div className="intro"><div className="eyebrow">Commerce without barriers</div><h2>From Kampala’s markets to opportunity across Buganda.</h2><p>Build a more connected trading ecosystem where a business in one commercial centre can find buyers, suppliers, training and collaborators across the region.</p><Link href="/directory" className="btn navy">Explore commercial centres <ArrowRight size={15} /></Link></div>
      <img src="/images/kampala-market.jpg" alt="Commerce at a Kampala market" />
    </div></section>

    <section className="cta"><div className="container"><div><div className="kicker">Let’s grow together</div><h2>Build a stronger commercial<br />future for Buganda.</h2><p>Whether you are a trader, business owner, investor or partner, discover opportunities to collaborate and grow.</p></div><Link href="/contact" className="btn gold">Get in touch <ArrowUpRight size={17} /></Link></div></section>
  </main></Shell>;
}
