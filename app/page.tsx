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
import { realPhotos } from "./realPhotos";
import { ResponsivePhoto } from "./ResponsivePhoto";


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
  { title: "Our Strategy", text: "Explore MCCL’s vision, priorities and plans for lasting business growth.", href: "/strategy", icon: FileText },
  { title: "Membership information", text: "See how businesses and institutions can participate in the Chamber.", href: "/membership", icon: UsersRound },
  { title: "Investment & opportunities", text: "Begin a conversation around investment, partnership and trade.", href: "/invest", icon: Handshake },
  { title: "Events & updates", text: "Follow Chamber activity, forums, publications and announcements.", href: "/events-calendar", icon: CalendarDays },
];

const communityStories = [
  {
    title: "Coffee, value addition and exports",
    context: "TRADE & AGRIBUSINESS",
    description: "Coffee products and business activity from Mwanyi Terimba.",
    href: "/economy",
    photo: realPhotos.coffeeProducts,
  },
  {
    title: "Business dialogue",
    context: "ENTERPRISE & MARKETS",
    description: "A discussion at the BBS Business Forum.",
    href: "/services",
    photo: realPhotos.businessForum,
  },
  {
    title: "Community in action",
    context: "SPORT & COMMUNITY",
    description: "A crowd gathered for the Kabaka Birthday Run.",
    href: "/events-calendar",
    photo: realPhotos.birthdayRun,
  },
  {
    title: "Culture and tradition",
    context: "KINGDOM & HERITAGE",
    description: "Cultural performers at a celebration in Buganda.",
    href: "/kingdom/culture-tourism",
    photo: realPhotos.culturalPerformance,
  },
  {
    title: "Markets and trading centres",
    context: "LOCAL COMMERCE",
    description: "Market stalls and the everyday business of trade.",
    href: "/commercial-centres",
    photo: realPhotos.marketStalls,
  },
  {
    title: "Enterprise and partnerships",
    context: "BUSINESS COMMUNITY",
    description: "A business team outside the Rexba Ltd offices.",
    href: "/businesses",
    photo: realPhotos.enterpriseGroup,
  },
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
              {/* Keep the original MCCL inauguration group photograph. */}
              <div className="mc-nema-panel-photo" role="img" aria-label="Mengo Chamber officials at the Chamber's inauguration" />
              <div className="mc-nema-panel-heading">
                <span>WELCOME TO MCCL</span>
                <h3>Connecting business to opportunity.</h3>
                <p>Discover the services and connections helping enterprises grow across Buganda.</p>
              </div>
              <nav className="mc-nema-panel-services" aria-label="Explore Chamber services">
                <Link href="/membership"><UsersRound size={18} aria-hidden="true" /><strong>Membership</strong><ArrowUpRight size={14} aria-hidden="true" /></Link>
                <Link href="/trade-investment"><Handshake size={18} aria-hidden="true" /><strong>Trade &amp; investment</strong><ArrowUpRight size={14} aria-hidden="true" /></Link>
                <Link href="/services"><BriefcaseBusiness size={18} aria-hidden="true" /><strong>Enterprise support</strong><ArrowUpRight size={14} aria-hidden="true" /></Link>
                <Link href="/intelligence"><BarChart3 size={18} aria-hidden="true" /><strong>Market intelligence</strong><ArrowUpRight size={14} aria-hidden="true" /></Link>
              </nav>
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

        <section className="mc-nema-mandate" aria-labelledby="mandate-title">
          <div className="mc-nema-mandate-photos" aria-hidden="true">
            {[realPhotos.pewosaAgriculture, realPhotos.coffeeExport, realPhotos.businessForum, realPhotos.enterpriseGroup].map((photo) => (
              <div key={photo.src} className="mc-nema-mandate-photo" style={{ backgroundImage: `url("${photo.src}")` }} />
            ))}
          </div>
          <div className="bp-shell">
          <div className="mc-nema-mandate-top">
            <div className="mc-nema-mandate-intro">
              <p><Landmark size={25} /> Mandate</p>
              <h2 id="mandate-title">A stronger business ecosystem for Buganda.</h2>
              <span>MCCL is a Company Limited by Guarantee established by the Kingdom of Buganda to promote business growth, trade development and investment opportunities within Buganda and beyond.</span>
              <Link href="/about">READ OUR MANDATE <ArrowRight size={15} /></Link>
            </div>
            <Link href="/strategy" className="mc-nema-plan-summary"><div><small>OUR SHARED DIRECTION</small><strong>“Twezimbe”</strong><span>Building opportunity</span></div><p>A connected, competitive and sustainable business ecosystem.</p><em>READ THE PLAN <ArrowRight size={14} /></em></Link>
          </div>
          <div className="mc-nema-role-grid">
            {strategicRoles.map(({ title, text, href, icon: Icon }) => <Link href={href} key={title}><Icon size={25} /><strong>{title}</strong><span>{text}</span><small>MORE <ArrowRight size={12} /></small></Link>)}
          </div>
          <p className="mc-nema-mandate-photo-credit">Photographs: CBS PEWOSA, Mwanyi Terimba, BBS Business Forum and REXBA client collections.</p>
        </div></section>

        <section className="mc-client-gallery" aria-labelledby="community-gallery-title">
          <div className="bp-shell">
            <div className="mc-client-gallery-heading">
              <div>
                <p className="mc-client-gallery-kicker">BUGANDA IN PICTURES</p>
                <h2 id="community-gallery-title">People, enterprise and community life.</h2>
                <p>Genuine photographs from business, cultural and community activities across Buganda.</p>
              </div>
              <Link href="/explore" className="mc-client-gallery-more">EXPLORE THE CHAMBER <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
            <div className="mc-client-gallery-grid">
              {communityStories.map(({title,context,description,href,photo}) =>
                <Link href={href} key={title} className="mc-client-gallery-card">
                  <div className="mc-client-gallery-photo">
                    <ResponsivePhoto photo={photo} width={840} height={560} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  </div>
                  <div className="mc-client-gallery-body">
                    <span>{context}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <small>DISCOVER MORE <ArrowUpRight size={15} aria-hidden="true"/></small>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="mc-nema-priorities" aria-labelledby="priorities-title"><div className="bp-shell">
          <div className="mc-nema-section-title"><FileText size={29} /><div><h2 id="priorities-title">MCCL Strategic Priorities</h2><p>Turning the Chamber’s priorities into meaningful value for business.</p></div></div>
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
