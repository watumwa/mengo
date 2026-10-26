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
  { title: "Trade & investment", href: "/trade-investment", icon: Handshake },
  { title: "Business development", href: "/business-advisory", icon: BriefcaseBusiness },
  { title: "Advocacy & research", href: "/policy-advocacy", icon: Scale },
  { title: "Market intelligence", href: "/intelligence", icon: BarChart3 },
  { title: "Membership & networks", href: "/membership", icon: UsersRound },
  { title: "Commercial centres", href: "/commercial-centres", icon: Building2 },
];

const quickAccess = [
  { label: "Join the Chamber", href: "/membership", icon: UsersRound },
  { label: "Find business support", href: "/services", icon: BriefcaseBusiness },
  { label: "Explore opportunities", href: "/opportunities", icon: Handshake },
  { label: "Talk to MCCL", href: "/contact", icon: Megaphone },
];

const resources = [
  { title: "Strategic Plan 2026–2029", text: "Twezimbe: a connected, competitive and sustainable business ecosystem.", href: "/strategy", icon: Landmark },
  { title: "Membership information", text: "Understand the Chamber, participation pathways and member value.", href: "/membership", icon: UsersRound },
  { title: "Investment & opportunities", text: "Start a conversation around investment, partnerships and trade.", href: "/invest", icon: Network },
  { title: "Publications & resources", text: "Access approved documents, reports and Chamber information.", href: "/publications", icon: FileText },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-public-home">
        <section className="mc-public-hero" aria-labelledby="home-title">
          <div className="mc-public-hero-photo" aria-hidden="true" />
          <div className="mc-public-hero-shade" aria-hidden="true" />
          <div className="bp-shell mc-public-hero-grid">
            <div className="mc-public-hero-copy">
              <p>Mengo Chamber of Commerce Limited</p>
              <h1 id="home-title">Connecting commerce. <em>Building prosperity.</em></h1>
              <span>
                MCCL brings businesses, investors and institutions together to grow trade, enterprise, investment and opportunity across Buganda.
              </span>
              <div className="mc-public-hero-actions">
                <Link href="/membership">Join the Chamber <ArrowRight size={17} /></Link>
                <Link href="/services">Explore services <ArrowUpRight size={16} /></Link>
              </div>
            </div>
            <aside className="mc-public-hero-panel" aria-label="MCCL service priorities">
              <span>Business support starts here</span>
              <strong>One connected platform for commerce in Buganda.</strong>
              <ul>
                <li><Handshake size={17} /> Trade &amp; investment connections</li>
                <li><BriefcaseBusiness size={17} /> Business growth support</li>
                <li><Scale size={17} /> Advocacy and a stronger business voice</li>
              </ul>
              <Link href="/about">About the Chamber <ArrowRight size={15} /></Link>
            </aside>
          </div>
          <div className="mc-public-hero-dots" aria-hidden="true"><i /><i className="is-active" /><i /><i /></div>
        </section>

        <nav className="mc-topic-nav" aria-label="Featured Chamber topics">
          <div className="bp-shell">
            <Link href="/membership">Membership</Link>
            <Link href="/trade-investment">Trade &amp; investment</Link>
            <Link href="/businesses">Business directory</Link>
            <Link href="/economic-map">Economic map</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/events-calendar">Events</Link>
            <Link href="/contact">Contact MCCL</Link>
          </div>
        </nav>

        <section className="mc-quick-access" aria-label="Quick access">
          <div className="bp-shell mc-quick-access-grid">
            {quickAccess.map(({ label, href, icon: Icon }) => (
              <Link href={href} key={label}><span><Icon size={23} /></span>{label}<ArrowRight size={17} /></Link>
            ))}
          </div>
        </section>

        <section className="mc-mandate" aria-labelledby="mandate-title">
          <div className="bp-shell mc-mandate-grid">
            <div className="mc-mandate-intro">
              <p><Landmark size={29} /> Our mandate</p>
              <h2 id="mandate-title">A stronger business ecosystem for Buganda.</h2>
              <span>
                MCCL is a business-development platform for enterprises, cooperatives, investors, professionals and institutions. We bring commercial relationships, practical support and collective representation together in one place.
              </span>
              <Link href="/about">Read our mandate <ArrowRight size={16} /></Link>
            </div>
            <div className="mc-mandate-services">
              {serviceAreas.map(({ title, href, icon: Icon }) => (
                <article key={title}>
                  <Icon size={34} />
                  <h3>{title}</h3>
                  <Link href={href}>Explore <ArrowRight size={14} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-resources" aria-labelledby="resources-title">
          <div className="bp-shell">
            <div className="mc-resources-heading">
              <div><p>Resources &amp; opportunities</p><h2 id="resources-title">Useful information for the next business move.</h2></div>
              <Link href="/explore">View all resources <ArrowRight size={16} /></Link>
            </div>
            <div className="mc-resources-grid">
              {resources.map(({ title, text, href, icon: Icon }) => (
                <Link href={href} key={title}>
                  <Icon size={23} />
                  <span><strong>{title}</strong><small>{text}</small></span>
                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-updates" aria-labelledby="updates-title">
          <div className="bp-shell mc-updates-grid">
            <div>
              <p>Information centre</p>
              <h2 id="updates-title">Stay connected to Chamber activity.</h2>
              <span>Updates, events, opportunities and verified publications will be shared through the Chamber&apos;s official channels.</span>
              <Link href="/insights">Read the latest updates <ArrowRight size={16} /></Link>
            </div>
            <div className="mc-update-list">
              <Link href="/insights"><span><FileText size={20} /> News &amp; announcements</span><ArrowRight size={17} /></Link>
              <Link href="/events-calendar"><span><CalendarDays size={20} /> Events calendar</span><ArrowRight size={17} /></Link>
              <Link href="/publications"><span><FileText size={20} /> Publications &amp; reports</span><ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="mc-public-cta">
          <div className="bp-shell">
            <div><p>Uplifting livelihoods</p><h2>Bring your business, expertise or opportunity to the Chamber.</h2></div>
            <div><Link href="/membership">Become a member <ArrowRight size={17} /></Link><Link href="/contact">Talk to MCCL <ArrowUpRight size={16} /></Link></div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
