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
import { HeroStoryCarousel } from "./HeroStoryCarousel";
import { LatestChamberUpdates } from "./LatestChamberUpdates";


const quickActions = [
  { eyebrow: "Membership", title: "Apply to join", text: "Submit your organisation for Chamber review and begin engaging with the business community.", href: "/membership/apply", icon: UsersRound },
  { eyebrow: "Business directory", title: "Find a business", text: "Search approved profiles by sector and district across Buganda.", href: "/businesses", icon: BriefcaseBusiness },
  { eyebrow: "Trade & investment", title: "Explore opportunities", text: "Review published trade and partnership opportunities.", href: "/opportunities", icon: Handshake },
  { eyebrow: "Business support", title: "Access business support", text: "Explore advisory services, enterprise development and market-readiness pathways.", href: "/services", icon: BriefcaseBusiness },
];

const strategicRoles = [
  { title: "Connect", text: "Markets, investors, finance, technology and strategic partners.", href: "/trade-investment", icon: Handshake },
  { title: "Develop", text: "Capacity, productivity, quality, innovation and value addition.", href: "/services", icon: BriefcaseBusiness },
  { title: "Advocate", text: "A conducive business environment and a stronger business voice.", href: "/policy-advocacy", icon: Scale },
  { title: "Promote", text: "Buganda as a destination for trade, investment, tourism and enterprise.", href: "/invest", icon: Landmark },
  { title: "Transform", text: "Digitalisation, inclusive enterprise growth and new commercial opportunity.", href: "/intelligence", icon: BarChart3 },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-nema-home">
        <section className="mc-nema-hero" aria-labelledby="home-title">
          <div className="bp-shell mc-nema-hero-grid">
            <div className="mc-nema-hero-copy">
              <h1 id="home-title"><span className="mc-nema-brand-name">Mengo Chamber </span><span className="mc-nema-brand-description">of Commerce Limited</span></h1>
              <p className="mc-nema-twezimbe">Twezimbe</p>
              <h2>Uplifting livelihoods.</h2>
              <div className="mc-nema-hero-rule" />
              <p className="mc-nema-hero-summary">Connecting businesses to markets, investment and opportunity across Buganda and beyond.</p>
              <div className="mc-nema-hero-actions">
                <Link href="/membership" className="mc-nema-primary-action">Explore membership <ArrowRight size={17} /></Link>
                <Link href="/opportunities" className="mc-nema-secondary-action">Explore opportunities <ArrowUpRight size={16} /></Link>
              </div>
              <p className="mc-nema-hero-meta">Established by the Kingdom of Buganda <span aria-hidden="true">·</span> Company Limited by Guarantee</p>
            </div>
          </div>
          <p className="mc-nema-photo-credit">Bulange Mengo photo: <a href="https://commons.wikimedia.org/wiki/File:Buganda_Court_Building1.jpg" target="_blank" rel="noopener noreferrer">Dixon099</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> · cropped and darkened</p>
        </section>

        <section className="mc-home-proof" aria-label="Mengo Chamber institutional profile">
          <div className="bp-shell mc-home-proof-grid">
            <article><span>Institutional form</span><strong>Company Limited by Guarantee</strong></article>
            <article><span>Institutional origin</span><strong>Established by the Kingdom of Buganda</strong></article>
            <article><span>Strategic framework</span><strong>2026–2029</strong></article>
            <article><span>Regional reach</span><strong>Six clusters · 18 Ssaza</strong></article>
          </div>
        </section>

        <section className="mc-nema-quick-actions" aria-labelledby="business-gateway-title"><div className="bp-shell">
          <div className="mc-nema-quick-heading">
            <div><p>Business gateway</p><h2 id="business-gateway-title">Start with a business need.</h2></div>
            <p>Join the Chamber, discover enterprises, explore opportunities or access support for business growth.</p>
          </div>
          <div className="mc-nema-quick-grid">
            {quickActions.map(({ eyebrow, title, text, href, icon: Icon }) => <Link href={href} key={title}>
              <div><Icon size={23} /><small>{eyebrow}</small></div>
              <strong>{title}</strong>
              <span>{text}</span>
              <em>Explore <ArrowRight size={13} /></em>
            </Link>)}
          </div>
        </div></section>

        <section className="mc-home-about" aria-labelledby="mc-home-about-title">
          <div className="bp-shell">
            <p className="mc-home-about-kicker">About us</p>
            <div className="mc-home-about-grid">
              <div className="mc-home-about-heading">
                <h2 id="mc-home-about-title">A Chamber built around business.</h2>
                <p>Mengo Chamber of Commerce Limited is a consortium of affiliated members working to create a competitive, connected and sustainable business ecosystem in Buganda.</p>
              </div>
              <div className="mc-home-about-copy">
                <p>The Chamber brings together enterprises, institutions, cooperatives, investors and partners around market access, business development, trade, investment and constructive policy dialogue.</p>
                <div className="mc-home-about-origin">
                  <Landmark size={21} aria-hidden="true" />
                  <span>Established by the Kingdom of Buganda to advance enterprise growth, trade development and investment opportunity.</span>
                </div>
                <div className="mc-home-about-actions">
                  <Link href="/about">Discover our Chamber <ArrowRight size={15} aria-hidden="true" /></Link>
                  <Link href="/strategy">Explore our strategy <ArrowUpRight size={15} aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-nema-mandate" aria-labelledby="mandate-title">
          <div className="bp-shell">
            <div className="mc-nema-mandate-top">
              <div className="mc-nema-mandate-intro">
                <p><Landmark size={25} /> Our work</p>
                <h2 id="mandate-title">Five commitments to enterprise.</h2>
                <span>Connect, Develop, Advocate, Promote and Transform define how MCCL creates meaningful value for businesses and communities.</span>
                <Link href="/services">Explore business support <ArrowRight size={15} /></Link>
              </div>
              <Link href="/strategy" className="mc-nema-plan-summary"><div><small>Our shared direction</small><strong>“Twezimbe”</strong><span>Building opportunity</span></div><p>A connected, competitive and sustainable business ecosystem.</p><em>Read the plan <ArrowRight size={14} /></em></Link>
            </div>
            <div className="mc-nema-role-grid">
              {strategicRoles.map(({ title, text, href, icon: Icon }) => <Link href={href} key={title}><Icon size={25} /><strong>{title}</strong><span>{text}</span><small>Learn more <ArrowRight size={12} /></small></Link>)}
            </div>
          </div>
        </section>

        <section className="mc-home-featured" aria-labelledby="mc-home-featured-title">
          <div className="bp-shell">
            <div className="mc-home-featured-heading">
              <div>
                <p>News &amp; opportunities</p>
                <h2 id="mc-home-featured-title">What is happening across the Chamber.</h2>
              </div>
              <div>
                <p>Follow Chamber activity, enterprise stories, trade opportunities and upcoming business events.</p>
                <div className="mc-home-featured-links">
                  <Link href="/insights">Latest updates <ArrowUpRight size={15} aria-hidden="true" /></Link>
                  <Link href="/opportunities">Opportunities <ArrowUpRight size={15} aria-hidden="true" /></Link>
                  <Link href="/events-calendar">Events <ArrowUpRight size={15} aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
            <div className="mc-home-featured-carousel">
              <HeroStoryCarousel />
            </div>
          </div>
        </section>


        <LatestChamberUpdates />

        <section className="mc-home-membership" aria-labelledby="mc-home-membership-title">
          <div className="bp-shell mc-home-membership-grid">
            <div>
              <p>Membership</p>
              <h2 id="mc-home-membership-title">Build stronger business connections through MCCL.</h2>
            </div>
            <div className="mc-home-membership-copy">
              <p>Connect with enterprises, institutions, cooperatives, investors and partners working to expand opportunity across Buganda and beyond.</p>
              <div className="mc-home-membership-actions">
                <Link href="/membership/apply">Apply to join <ArrowRight size={16} aria-hidden="true" /></Link>
                <Link href="/membership">Explore membership <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
