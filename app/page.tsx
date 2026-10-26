import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Megaphone,
  Network,
  Scale,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const services = [
  {
    title: "Trade & investment connections",
    description: "We create routes to buyers, suppliers, investors, trade missions and strategic commercial partnerships.",
    href: "/trade-investment",
    icon: Handshake,
    number: "01",
  },
  {
    title: "Enterprise growth support",
    description: "We help businesses build practical capability through advisory, skills, information and growth pathways.",
    href: "/business-advisory",
    icon: BriefcaseBusiness,
    number: "02",
  },
  {
    title: "Business voice & advocacy",
    description: "We bring business concerns, evidence and ideas into constructive policy and stakeholder dialogue.",
    href: "/policy-advocacy",
    icon: Scale,
    number: "03",
  },
  {
    title: "Market intelligence",
    description: "We develop useful sector insight, market information and opportunity-focused data for better decisions.",
    href: "/intelligence",
    icon: BarChart3,
    number: "04",
  },
];

const audiences = [
  {
    eyebrow: "For businesses",
    title: "Join a network built to help you grow.",
    description: "Connect to peers, market pathways, business support and collective representation.",
    href: "/membership",
    link: "Explore membership",
    icon: UsersRound,
  },
  {
    eyebrow: "For investors & buyers",
    title: "Find commercial opportunity in Buganda.",
    description: "Start a conversation around investment, supply, partnerships and enterprise linkages.",
    href: "/invest",
    link: "Explore opportunities",
    icon: Network,
  },
  {
    eyebrow: "For institutions & partners",
    title: "Build practical partnerships that create value.",
    description: "Work with the Chamber to support enterprise, trade and inclusive economic progress.",
    href: "/contact?subject=partnership",
    link: "Partner with MCCL",
    icon: Building2,
  },
];

const valuePillars = [
  {
    title: "Connect",
    text: "Businesses with markets, investors, finance, technology and the right partners.",
    icon: Handshake,
  },
  {
    title: "Develop",
    text: "Enterprise capability, productivity, visibility and long-term competitiveness.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Advocate",
    text: "A clear, evidence-led business voice for a more enabling operating environment.",
    icon: Megaphone,
  },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="bp-home">
        <section className="bp-home-hero" aria-labelledby="home-title">
          <div className="bp-home-hero-photo" aria-hidden="true" />
          <div className="bp-home-hero-overlay" aria-hidden="true" />
          <div className="bp-shell bp-home-hero-content">
            <div className="bp-hero-layout">
              <div className="bp-hero-copy">
                <p className="bp-eyebrow">Mengo Chamber of Commerce Limited</p>
                <h1 id="home-title">Business growth starts with stronger connections.</h1>
                <p className="bp-hero-lede">
                  MCCL is Buganda&apos;s business membership organisation—connecting enterprises to trade, investment,
                  practical support and a stronger collective voice.
                </p>
                <div className="bp-hero-actions">
                  <Link href="/membership" className="bp-button bp-button-gold">Join the Chamber <ArrowRight size={17} /></Link>
                  <Link href="/services" className="bp-button bp-button-ghost">What we do <ArrowUpRight size={17} /></Link>
                </div>
                <p className="bp-hero-note">Uplifting Livelihoods across Buganda through enterprise and collaboration.</p>
              </div>

              <aside className="bp-hero-work-panel" aria-label="How the Chamber helps businesses">
                <div className="bp-hero-work-heading">
                  <span>What a Chamber does</span>
                  <h2>We make it easier for business to move forward.</h2>
                </div>
                <ul>
                  <li><Handshake size={20} /><span><strong>Open doors</strong><small>to markets, investors and commercial partners</small></span></li>
                  <li><BriefcaseBusiness size={20} /><span><strong>Build capability</strong><small>through guidance, skills and useful information</small></span></li>
                  <li><Scale size={20} /><span><strong>Represent business</strong><small>with a clear voice in dialogue and advocacy</small></span></li>
                </ul>
                <Link href="/about" className="bp-hero-work-link">About MCCL <ArrowRight size={15} /></Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="bp-action-strip" aria-label="Start with the Chamber">
          <div className="bp-shell bp-action-strip-inner">
            <p>Start with the Chamber</p>
            <div className="bp-action-strip-grid">
              <Link href="/membership"><UsersRound size={21} /><span><strong>Become a member</strong><small>Join the business network</small></span><ArrowRight size={17} /></Link>
              <Link href="/services"><BriefcaseBusiness size={21} /><span><strong>Explore our services</strong><small>See how MCCL can help</small></span><ArrowRight size={17} /></Link>
              <Link href="/contact"><Handshake size={21} /><span><strong>Start a conversation</strong><small>Bring an opportunity or partnership</small></span><ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="bp-purpose-section">
          <div className="bp-shell bp-purpose-grid">
            <div className="bp-purpose-copy">
              <p className="bp-eyebrow">Our role in Buganda&apos;s economy</p>
              <h2>A business platform with Kingdom reach.</h2>
              <p>
                Established by the Kingdom of Buganda, MCCL brings together enterprises, cooperatives, investors,
                professionals and institutions around practical commercial progress. We turn relationships into useful
                business connections, support and opportunity.
              </p>
              <Link href="/about" className="bp-inline-link">Our story &amp; mandate <ArrowRight size={16} /></Link>
            </div>
            <aside className="bp-mission-card">
              <span>Our mission</span>
              <strong>Facilitate trade, investment, enterprise growth, agricultural transformation and industrial development.</strong>
              <p>Through quality business services, strategic linkages and effective advocacy for a competitive business environment.</p>
              <Link href="/strategy">Read the 2026–2029 direction <ArrowUpRight size={15} /></Link>
            </aside>
          </div>
        </section>

        <section className="bp-service-section">
          <div className="bp-shell">
            <div className="bp-section-heading">
              <div>
                <p className="bp-eyebrow">How we help</p>
                <h2>Four practical ways MCCL serves business.</h2>
              </div>
              <p>From the first introduction to a stronger business environment, the Chamber focuses on help that leads somewhere useful.</p>
            </div>
            <div className="bp-service-grid">
              {services.map(({ title, description, href, icon: Icon, number }) => (
                <Link href={href} className="bp-service-card" key={title}>
                  <span className="bp-service-number">{number}</span>
                  <span className="bp-service-icon"><Icon size={25} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="bp-card-link">Explore this service <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-value-section">
          <div className="bp-shell">
            <div className="bp-value-heading">
              <div>
                <p className="bp-eyebrow">The MCCL difference</p>
                <h2>One trusted table for business, opportunity and progress.</h2>
              </div>
              <p>We bring together the relationships and practical support that help enterprises participate in a more connected Buganda economy.</p>
            </div>
            <div className="bp-value-grid">
              {valuePillars.map(({ title, text, icon: Icon }) => (
                <article key={title}>
                  <span className="bp-value-icon"><Icon size={23} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-audience-section">
          <div className="bp-shell">
            <div className="bp-section-heading bp-audience-heading">
              <div>
                <p className="bp-eyebrow">Work with the Chamber</p>
                <h2>There is a place for you at the table.</h2>
              </div>
              <p>Whether you are running a business, looking for opportunity or building an institution, begin with the path that fits your role.</p>
            </div>
            <div className="bp-audience-grid">
              {audiences.map(({ eyebrow, title, description, href, link, icon: Icon }) => (
                <article key={eyebrow}>
                  <span className="bp-audience-icon"><Icon size={23} /></span>
                  <p>{eyebrow}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                  <Link href={href}>{link} <ArrowRight size={15} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-home-cta">
          <div className="bp-shell bp-home-cta-grid">
            <div>
              <p className="bp-eyebrow">Make your next connection count</p>
              <h2>Bring your business, expertise or partnership to the table.</h2>
              <p>Join a Chamber designed to help Buganda&apos;s businesses connect, compete and grow responsibly.</p>
            </div>
            <div className="bp-home-cta-actions">
              <Link href="/membership" className="bp-button bp-button-gold">Become a member <ArrowRight size={17} /></Link>
              <Link href="/contact" className="bp-button bp-button-ghost">Talk to MCCL <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
