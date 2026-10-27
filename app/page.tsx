import Link from "next/link";
import {
  ArrowRight,
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
              <h2>A business ecosystem platform for Buganda.</h2>
              <div className="mc-nema-hero-rule" />
              <p className="mc-nema-hero-summary">We facilitate trade, investment, enterprise growth, agricultural transformation and industrial development through quality business services, strategic linkages and advocacy.</p>
              <Link href="/membership" className="mc-nema-primary-action">JOIN THE CHAMBER <ArrowRight size={17} /></Link>
            </div>

            <aside className="mc-nema-service-panel" aria-label="MCCL service pathways">
              <div className="mc-nema-panel-photo" aria-hidden="true" />
              <div className="mc-nema-panel-heading"><span>WELCOME TO</span><strong>MCCL</strong><p>Your platform for business growth, trade and investment in Buganda.</p></div>
              <div className="mc-nema-panel-services">
                <Link href="/membership"><UsersRound size={15} /><span>Membership<small>Participate and grow</small></span></Link>
                <Link href="/trade-investment"><Handshake size={15} /><span>Trade &amp; investment<small>Connect to opportunity</small></span></Link>
                <Link href="/services"><BriefcaseBusiness size={15} /><span>Enterprise support<small>Build competitiveness</small></span></Link>
                <Link href="/intelligence"><BarChart3 size={15} /><span>Market intelligence<small>Make informed decisions</small></span></Link>
              </div>
            </aside>
          </div>
          <div className="mc-nema-slider-dots" aria-hidden="true"><i className="is-active" /><i /><i /><i /><i /></div>
        </section>

        <nav className="mc-nema-topic-nav" aria-label="Featured Chamber topics"><div className="bp-shell">
          <Link href="/membership">Membership</Link><Link href="/trade-investment">Trade &amp; Investment</Link><Link href="/services">Enterprise Growth</Link><Link href="/policy-advocacy">Advocacy &amp; Research</Link><Link href="/intelligence">Market Intelligence</Link><Link href="/economy">Buganda Economy</Link><Link href="/publications">Resources</Link><Link href="/contact">Contact</Link>
        </div></nav>

        <section className="mc-nema-quick-actions" aria-label="Quick actions"><div className="bp-shell mc-nema-quick-grid">
          {quickActions.map(({ label, href, icon: Icon }) => <Link href={href} key={label}><Icon size={24} /><span>{label}</span></Link>)}
        </div></section>

        <section className="mc-nema-mandate" aria-labelledby="mandate-title"><div className="bp-shell mc-nema-mandate-layout">
          <div className="mc-nema-mandate-intro">
            <p><Landmark size={25} /> Mandate</p>
            <h2 id="mandate-title">Building a connected, competitive and sustainable business ecosystem.</h2>
            <span>MCCL is a Company Limited by Guarantee established by the Kingdom of Buganda to promote business growth, trade development and investment opportunities within Buganda and beyond.</span>
            <Link href="/about">READ MORE <ArrowRight size={15} /></Link>
            <Link href="/strategy" className="mc-nema-plan-card"><small>MENGO CHAMBER OF COMMERCE LIMITED</small><strong>3 YEAR<br />STRATEGIC PLAN</strong><span>2026—2029</span><b>“Twezimbe”</b><em>READ THE PLAN <ArrowRight size={13} /></em></Link>
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
