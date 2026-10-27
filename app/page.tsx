import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Handshake,
  Landmark,
  Scale,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const strategicPropositions = [
  { number: "01", verb: "Connect", title: "Markets, investment & partners", detail: "Connect businesses to markets, investors, finance, technology and strategic partners.", href: "/trade-investment", icon: Handshake },
  { number: "02", verb: "Develop", title: "Competitive enterprises", detail: "Build enterprise capacity, productivity, quality, innovation and value addition.", href: "/services", icon: BriefcaseBusiness },
  { number: "03", verb: "Advocate", title: "A better business environment", detail: "Represent business interests through research, policy engagement and collective advocacy.", href: "/policy-advocacy", icon: Scale },
  { number: "04", verb: "Promote", title: "Buganda for opportunity", detail: "Promote Buganda as a destination for trade, investment, tourism and enterprise.", href: "/invest", icon: Landmark },
  { number: "05", verb: "Transform", title: "Inclusive, digital growth", detail: "Drive value addition, digitalisation, innovation and inclusive enterprise growth.", href: "/intelligence", icon: BarChart3 },
];

const audienceLinks = [
  { number: "01", label: "Grow my enterprise", text: "Access membership, capability support and stronger commercial networks.", href: "/membership", cta: "Explore membership" },
  { number: "02", label: "Find opportunity", text: "Explore trade, investment and strategic commercial connections.", href: "/invest", cta: "Explore investment" },
  { number: "03", label: "Strengthen our voice", text: "Share the business conditions, policy issues and ideas that matter.", href: "/policy-advocacy", cta: "Explore advocacy" },
];

const resources = [
  { title: "Membership growth & engagement", text: "Build an active, representative business community across sectors and regions.", href: "/membership", icon: UsersRound },
  { title: "Trade & investment promotion", text: "Create B2B connections, trade missions, investment forums and sector networks.", href: "/trade-investment", icon: Handshake },
  { title: "Policy advocacy & research", text: "Champion a more conducive business environment through evidence and dialogue.", href: "/policy-advocacy", icon: Scale },
  { title: "Market intelligence & data", text: "Publish useful market information to support more informed business decisions.", href: "/intelligence", icon: BarChart3 },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-home">
        <section className="mc-home-hero" aria-labelledby="home-title">
          <div className="bp-shell mc-home-hero-layout">
            <div className="mc-home-hero-copy">
              <p className="mc-home-kicker"><span /> Buganda&apos;s commercial platform</p>
              <h1 id="home-title">Mengo Chamber <em>of Commerce Limited.</em></h1>
              <p className="mc-home-hero-intro">A business ecosystem platform for Buganda—connecting enterprises to markets, investment, knowledge, finance, technology and strategic opportunity.</p>
              <div className="mc-home-hero-actions">
                <Link href="/membership">Join the Chamber <ArrowRight size={17} /></Link>
                <Link href="/about">What we do <ArrowUpRight size={17} /></Link>
              </div>
              <div className="mc-home-hero-note"><span>2026—2029</span><strong>Twezimbe: building a connected, competitive and sustainable business ecosystem.</strong></div>
            </div>
            <div className="mc-home-hero-art" role="img" aria-label="Mengo Chamber of Commerce leadership and business community">
              <div className="mc-home-art-label"><span>MCCL • TWEZIMBE</span><strong>A stronger future for business in Buganda</strong></div>
              <div className="mc-home-art-orbit" aria-hidden="true"><i /><i /></div>
            </div>
          </div>
        </section>

        <nav className="mc-home-paths" aria-label="Choose a Chamber pathway">
          <div className="bp-shell mc-home-paths-grid">
            {audienceLinks.map(({ number, label, text, href, cta }) => (
              <Link href={href} key={label}>
                <span>{number}</span>
                <div><strong>{label}</strong><small>{text}</small></div>
                <b>{cta} <ArrowRight size={15} /></b>
              </Link>
            ))}
          </div>
        </nav>

        <section className="mc-home-introduction" aria-labelledby="introduction-title">
          <div className="bp-shell mc-home-introduction-grid">
            <div className="mc-home-introduction-mark"><span>2026—2029</span><i aria-hidden="true">3</i></div>
            <div>
              <p className="mc-home-kicker"><span /> The Chamber&apos;s role</p>
              <h2 id="introduction-title">A business ecosystem platform for <em>Buganda.</em></h2>
              <p>MCCL combines the Kingdom&apos;s institutional reach and networks with professional commercial services. We connect enterprises to the relationships, support and representation they need to grow.</p>
              <Link className="mc-home-text-link" href="/about">Read our mandate <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="mc-home-services" aria-labelledby="services-title">
          <div className="bp-shell">
            <div className="mc-home-section-heading">
              <div><p className="mc-home-kicker"><span /> What MCCL does</p><h2 id="services-title">Five ways we build a stronger business <em>ecosystem.</em></h2></div>
              <p>Our 2026–2029 plan centres on the practical roles the Chamber must play for business in Buganda.</p>
            </div>
            <div className="mc-home-service-list">
              {strategicPropositions.map(({ number, verb, title, detail, href, icon: Icon }) => (
                <Link href={href} key={title} className="mc-home-service">
                  <span className="mc-home-service-number">{number}</span>
                  <Icon className="mc-home-service-icon" size={24} />
                  <strong><i>{verb}</i>{title}</strong>
                  <small>{detail}</small>
                  <ArrowUpRight className="mc-home-service-arrow" size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-home-story" aria-labelledby="story-title">
          <div className="bp-shell mc-home-story-grid">
            <figure className="mc-home-story-photo">
              <div role="img" aria-label="A view of Mengo Palace in Buganda" />
              <figcaption><span /> Mengo, Buganda</figcaption>
            </figure>
            <div className="mc-home-story-copy">
              <p className="mc-home-kicker"><span /> A broad business community</p>
              <h2 id="story-title">A shared platform for enterprise and a <em>stronger voice.</em></h2>
              <p>The Chamber brings together MSMEs, cooperatives, farmers, manufacturers, traders, professionals, investors and institutions committed to sustainable economic growth.</p>
              <div className="mc-home-story-links">
                <Link href="/membership"><UsersRound size={20} /><span><strong>Membership</strong><small>Join a structured business community built for participation and growth.</small></span><ArrowRight size={16} /></Link>
                <Link href="/trade-investment"><Handshake size={20} /><span><strong>Trade &amp; investment</strong><small>Open a conversation around markets, partnerships and investment.</small></span><ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-home-resources" aria-labelledby="resources-title">
          <div className="bp-shell">
            <div className="mc-home-section-heading mc-home-section-heading-light">
              <div><p className="mc-home-kicker"><span /> The plan, made practical</p><h2 id="resources-title">What MCCL is building <em>to 2029.</em></h2></div>
              <Link className="mc-home-text-link" href="/strategy">Read the strategic plan <ArrowRight size={17} /></Link>
            </div>
            <div className="mc-home-resource-list">
              {resources.map(({ title, text, href, icon: Icon }) => (
                <Link href={href} key={title}>
                  <Icon size={25} />
                  <div><strong>{title}</strong><small>{text}</small></div>
                  <ArrowRight size={19} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-home-closing" aria-labelledby="closing-title">
          <div className="bp-shell mc-home-closing-layout">
            <div><p className="mc-home-kicker"><span /> Our vision</p><h2 id="closing-title">Vibrant, competitive businesses creating <em>better livelihoods.</em></h2></div>
            <div><p>Whether you are growing a business, exploring an investment or looking to collaborate, MCCL is here to make the right connection.</p><Link href="/contact">Start a conversation <ArrowRight size={17} /></Link></div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
