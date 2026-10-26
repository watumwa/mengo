import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileText,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  Scale,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const serviceAreas = [
  { number: "01", title: "Trade & investment", detail: "Open routes to trade, investment and partnership.", href: "/trade-investment", icon: Handshake },
  { number: "02", title: "Business development", detail: "Help ambitious enterprises move with greater confidence.", href: "/business-advisory", icon: BriefcaseBusiness },
  { number: "03", title: "Advocacy & research", detail: "Bring evidence, insight and a stronger business voice together.", href: "/policy-advocacy", icon: Scale },
  { number: "04", title: "Market intelligence", detail: "Turn useful economic information into better decisions.", href: "/intelligence", icon: BarChart3 },
  { number: "05", title: "Membership & networks", detail: "Create relationships that become practical opportunities.", href: "/membership", icon: UsersRound },
  { number: "06", title: "Commercial centres", detail: "Strengthen the places where enterprise meets the market.", href: "/commercial-centres", icon: Building2 },
];

const audienceLinks = [
  { number: "01", label: "I run a business", text: "Find practical support, networks and a stronger platform for growth.", href: "/membership", cta: "Explore membership" },
  { number: "02", label: "I want to invest", text: "Start a grounded conversation around trade, investment and opportunity.", href: "/invest", cta: "Explore investment" },
  { number: "03", label: "I want to partner", text: "Work with a Chamber that connects business, institutions and communities.", href: "/contact", cta: "Talk to MCCL" },
];

const resources = [
  { title: "Strategic Plan 2026–2029", text: "Twezimbe: a connected, competitive and sustainable business ecosystem.", href: "/strategy", icon: Landmark },
  { title: "Business directory", text: "Discover enterprises and commercial activity across Buganda.", href: "/businesses", icon: Network },
  { title: "Events & updates", text: "Keep close to Chamber activity, opportunities and announcements.", href: "/events-calendar", icon: CalendarDays },
  { title: "Publications & resources", text: "Access approved documents, reports and Chamber information.", href: "/publications", icon: FileText },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-home">
        <section className="mc-home-hero" aria-labelledby="home-title">
          <div className="bp-shell mc-home-hero-layout">
            <div className="mc-home-hero-copy">
              <p className="mc-home-kicker"><span /> Mengo Chamber of Commerce Limited</p>
              <h1 id="home-title">Business moves further <em>when we move together.</em></h1>
              <p className="mc-home-hero-intro">MCCL connects enterprises, investors and institutions to grow trade, build stronger businesses and create opportunity across Buganda.</p>
              <div className="mc-home-hero-actions">
                <Link href="/membership">Join the Chamber <ArrowRight size={17} /></Link>
                <Link href="/about">What we do <ArrowUpRight size={17} /></Link>
              </div>
              <div className="mc-home-hero-note"><span>2026—2029</span><strong>Twezimbe: a connected, competitive and sustainable business ecosystem.</strong></div>
            </div>
            <div className="mc-home-hero-art" role="img" aria-label="Mengo Chamber of Commerce leadership and business community">
              <div className="mc-home-art-label"><span>MCCL</span><strong>The commercial voice of Buganda</strong></div>
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
            <div className="mc-home-introduction-mark"><span>Our role</span><i aria-hidden="true">M</i></div>
            <div>
              <p className="mc-home-kicker"><span /> Built for commercial momentum</p>
              <h2 id="introduction-title">The Chamber is where business relationships become <em>real progress.</em></h2>
              <p>MCCL is a business-development platform for enterprises, cooperatives, investors, professionals and institutions. We make room for stronger commercial relationships, practical support and collective representation.</p>
              <Link className="mc-home-text-link" href="/about">Discover the Chamber <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="mc-home-services" aria-labelledby="services-title">
          <div className="bp-shell">
            <div className="mc-home-section-heading">
              <div><p className="mc-home-kicker"><span /> How MCCL helps</p><h2 id="services-title">Six ways we turn connection into <em>commerce.</em></h2></div>
              <p>From a first conversation to a broader market opportunity, the Chamber gives business a more useful place to begin.</p>
            </div>
            <div className="mc-home-service-list">
              {serviceAreas.map(({ number, title, detail, href, icon: Icon }) => (
                <Link href={href} key={title} className="mc-home-service">
                  <span className="mc-home-service-number">{number}</span>
                  <Icon className="mc-home-service-icon" size={24} />
                  <strong>{title}</strong>
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
              <p className="mc-home-kicker"><span /> One Chamber, many possibilities</p>
              <h2 id="story-title">A platform for enterprise with a <em>shared purpose.</em></h2>
              <p>The Chamber brings together people who are building businesses, backing ideas and shaping the conditions in which enterprise can thrive.</p>
              <div className="mc-home-story-links">
                <Link href="/services"><BriefcaseBusiness size={20} /><span><strong>Business support</strong><small>Find the support pathway that fits your next move.</small></span><ArrowRight size={16} /></Link>
                <Link href="/opportunities"><Megaphone size={20} /><span><strong>Trade opportunities</strong><small>Explore conversations around trade and partnership.</small></span><ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-home-resources" aria-labelledby="resources-title">
          <div className="bp-shell">
            <div className="mc-home-section-heading mc-home-section-heading-light">
              <div><p className="mc-home-kicker"><span /> Intelligence for action</p><h2 id="resources-title">Useful starting points for your <em>next move.</em></h2></div>
              <Link className="mc-home-text-link" href="/explore">View all resources <ArrowRight size={17} /></Link>
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
            <div><p className="mc-home-kicker"><span /> Uplifting livelihoods</p><h2 id="closing-title">Bring your business, expertise or opportunity <em>to the table.</em></h2></div>
            <div><p>Whether you are growing a business, exploring an investment or looking to collaborate, MCCL is ready to make the right connection.</p><Link href="/contact">Start a conversation <ArrowRight size={17} /></Link></div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
