import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  Handshake,
  Landmark,
  Scale,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const quickActions = [
  { label: "JOIN THE CHAMBER", href: "/membership", icon: UsersRound },
  { label: "EXPLORE TRADE & INVESTMENT", href: "/trade-investment", icon: Handshake },
  { label: "SHARE A BUSINESS ISSUE", href: "/policy-advocacy", icon: Scale },
  { label: "GET MARKET INTELLIGENCE", href: "/intelligence", icon: BarChart3 },
];

const strategicRoles = [
  { title: "Connect", text: "Markets, investors, finance, technology and strategic partners.", href: "/trade-investment", icon: Handshake },
  { title: "Develop", text: "Capacity, productivity, quality, innovation and value addition.", href: "/services", icon: BriefcaseBusiness },
  { title: "Advocate", text: "A conducive business environment and a stronger business voice.", href: "/policy-advocacy", icon: Scale },
  { title: "Promote", text: "Buganda as a destination for trade, investment, tourism and enterprise.", href: "/invest", icon: Landmark },
  { title: "Transform", text: "Digitalisation, inclusive enterprise growth and new commercial opportunity.", href: "/intelligence", icon: BarChart3 },
];

const planPriorities = [
  { title: "Membership & engagement", text: "A broad, active and representative business community.", href: "/membership" },
  { title: "Trade & investment", text: "B2B connections, trade missions, investment forums and market linkages.", href: "/trade-investment" },
  { title: "Policy advocacy & research", text: "Evidence, dialogue and representation for a better business environment.", href: "/policy-advocacy" },
  { title: "Market intelligence", text: "Useful reports, surveys and data for more informed business decisions.", href: "/intelligence" },
];

const exploreLinks = [
  { title: "Strategic Plan 2026–2029", text: "Understand MCCL’s direction, vision and priorities for the next three years.", href: "/strategy", icon: FileText },
  { title: "Membership information", text: "See how businesses and institutions can participate in the Chamber.", href: "/membership", icon: UsersRound },
  { title: "Investment & opportunities", text: "Begin a conversation around investment, partnership and trade.", href: "/invest", icon: Handshake },
  { title: "Events & updates", text: "Follow Chamber activity, forums, publications and announcements.", href: "/events-calendar", icon: CalendarDays },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-nema-home">
        <section className="mc-nema-hero" aria-labelledby="home-title">
          <div className="bp-shell mc-nema-hero-grid">
            <div className="mc-nema-hero-copy">
              <p>MENGO CHAMBER OF COMMERCE LIMITED</p>
              <h1 id="home-title">Mengo Chamber <span>of Commerce Limited</span></h1>
              <h2>Uplifting Livelihoods.</h2>
              <div className="mc-nema-hero-rule" />
              <p className="mc-nema-hero-summary">We facilitate trade, investment, enterprise growth, agricultural transformation and industrial development through quality business services, strategic linkages and advocacy.</p>
              <Link href="/membership" className="mc-nema-primary-action">JOIN THE CHAMBER <ArrowRight size={17} /></Link>
            </div>

            <aside className="mc-nema-service-panel" aria-label="Explore Mengo Chamber services">
              {/* Retain the Chamber's original inauguration photograph. */}
              <div className="mc-nema-panel-photo" role="img" aria-label="Mengo Chamber officials at the Chamber's inauguration" />
              <div className="mc-nema-panel-heading">
                <span>WELCOME TO MCCL</span>
                <h3>Connecting business. Creating opportunity.</h3>
                <p>Your gateway to partnerships, enterprise growth and investment in Buganda.</p>
              </div>
              <nav className="mc-nema-panel-services" aria-label="Explore Chamber services">
                <Link href="/membership">
                  <span className="mc-nema-service-symbol"><UsersRound size={18} aria-hidden="true" /></span>
                  <span className="mc-nema-service-copy"><strong>Membership</strong><small>Connect and grow</small></span>
                  <ArrowUpRight className="mc-nema-service-arrow" size={15} aria-hidden="true" />
                </Link>
                <Link href="/trade-investment">
                  <span className="mc-nema-service-symbol"><Handshake size={18} aria-hidden="true" /></span>
                  <span className="mc-nema-service-copy"><strong>Trade &amp; investment</strong><small>Explore opportunities</small></span>
                  <ArrowUpRight className="mc-nema-service-arrow" size={15} aria-hidden="true" />
                </Link>
                <Link href="/services">
                  <span className="mc-nema-service-symbol"><BriefcaseBusiness size={18} aria-hidden="true" /></span>
                  <span className="mc-nema-service-copy"><strong>Enterprise support</strong><small>Build competitiveness</small></span>
                  <ArrowUpRight className="mc-nema-service-arrow" size={15} aria-hidden="true" />
                </Link>
                <Link href="/intelligence">
                  <span className="mc-nema-service-symbol"><BarChart3 size={18} aria-hidden="true" /></span>
                  <span className="mc-nema-service-copy"><strong>Market intelligence</strong><small>Insights and reports</small></span>
                  <ArrowUpRight className="mc-nema-service-arrow" size={15} aria-hidden="true" />
                </Link>
              </nav>
              <div className="mc-nema-panel-footer">
                <Link href="/about">Discover the Chamber <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </aside>
          </div>
          <p className="mc-nema-photo-credit">Bulange Mengo photo: <a href="https://commons.wikimedia.org/wiki/File:Buganda_Court_Building1.jpg" target="_blank" rel="noopener noreferrer">Dixon099</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> · cropped and darkened</p>
          <div className="mc-nema-slider-dots" aria-hidden="true"><i className="is-active" /><i /><i /><i /><i /></div>
        </section>

        <nav className="mc-nema-topic-nav" aria-label="Featured Chamber topics"><div className="bp-shell">
          <Link href="/membership">Membership</Link><Link href="/trade-investment">Trade &amp; Investment</Link><Link href="/services">Enterprise Growth</Link><Link href="/policy-advocacy">Advocacy &amp; Research</Link><Link href="/intelligence">Market Intelligence</Link><Link href="/economy">Buganda Economy</Link><Link href="/publications">Resources</Link><Link href="/contact">Contact</Link>
        </div></nav>

        <section className="mc-nema-quick-actions" aria-label="Quick actions"><div className="bp-shell mc-nema-quick-grid">
          {quickActions.map(({ label, href, icon: Icon }) => <Link href={href} key={label}><Icon size={24} /><span>{label}</span></Link>)}
        </div></section>

        <section className="mc-nema-mandate" aria-labelledby="mandate-title"><div className="bp-shell">
          <div className="mc-nema-mandate-top">
            <div className="mc-nema-mandate-intro">
              <p><Landmark size={25} /> Mandate</p>
              <h2 id="mandate-title">A stronger business ecosystem for Buganda.</h2>
              <span>MCCL is a Company Limited by Guarantee established by the Kingdom of Buganda to promote business growth, trade development and investment opportunities within Buganda and beyond.</span>
              <Link href="/about">READ OUR MANDATE <ArrowRight size={15} /></Link>
            </div>
            <Link href="/strategy" className="mc-nema-plan-summary"><div><small>MCCL STRATEGIC PLAN</small><strong>“Twezimbe”</strong><span>2026—2029</span></div><p>A connected, competitive and sustainable business ecosystem.</p><em>READ THE PLAN <ArrowRight size={14} /></em></Link>
          </div>
          <div className="mc-nema-role-grid">
            {strategicRoles.map(({ title, text, href, icon: Icon }) => <Link href={href} key={title}><Icon size={25} /><strong>{title}</strong><span>{text}</span><small>MORE <ArrowRight size={12} /></small></Link>)}
          </div>
        </div></section>

        <section className="mc-nema-priorities" aria-labelledby="priorities-title"><div className="bp-shell">
          <div className="mc-nema-section-title"><FileText size={29} /><div><h2 id="priorities-title">MCCL Strategic Priorities</h2><p>2026—2029: the work that turns the plan into value for business.</p></div></div>
          <div className="mc-nema-priority-grid">
            {planPriorities.map(({ title, text, href }, index) => <Link href={href} key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{text}</p><small>READ MORE <ArrowRight size={13} /></small></Link>)}
          </div>
        </div></section>

        <section className="mc-nema-explore" aria-labelledby="explore-title"><div className="bp-shell">
          <div className="mc-nema-section-title"><BriefcaseBusiness size={29} /><div><h2 id="explore-title">Explore MCCL</h2><p>Clear starting points for business, investment and participation.</p></div></div>
          <div className="mc-nema-explore-grid">
            {exploreLinks.map(({ title, text, href, icon: Icon }) => <Link href={href} key={title}><Icon size={23} /><div><strong>{title}</strong><p>{text}</p></div><ArrowRight size={18} /></Link>)}
          </div>
        </div></section>

        <section className="mc-nema-closing"><div className="bp-shell"><div><p>OUR VISION</p><h2>A Buganda where vibrant, competitive and responsible businesses create opportunity, jobs and improved livelihoods.</h2></div><Link href="/contact">START A CONVERSATION <ArrowRight size={17} /></Link></div></section>
      </main>
    </Shell>
  );
}
