import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  LineChart,
  Scale,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";

const services = [
  {
    number: "01",
    name: "Trade & investment",
    summary: "Connecting businesses to markets, buyers, investors, trade missions and commercial partnerships.",
    href: "/trade-investment",
    icon: Handshake,
  },
  {
    number: "02",
    name: "Business development",
    summary: "Building stronger enterprises through advisory, capacity building and practical growth support.",
    href: "/business-advisory",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    name: "Advocacy & research",
    summary: "Bringing business experience and evidence into constructive dialogue and policy engagement.",
    href: "/policy-advocacy",
    icon: Scale,
  },
  {
    number: "04",
    name: "Market intelligence",
    summary: "Making useful business insight and opportunity-focused information easier to access.",
    href: "/intelligence",
    icon: LineChart,
  },
];

const pathways = [
  {
    title: "Businesses",
    text: "Join a network that helps you find support, build visibility and create valuable business relationships.",
    href: "/membership",
    action: "Explore membership",
    icon: UsersRound,
  },
  {
    title: "Investors & buyers",
    text: "Start a conversation around investment, supply, partnerships and enterprise opportunities in Buganda.",
    href: "/invest",
    action: "Explore opportunities",
    icon: LineChart,
  },
  {
    title: "Partners & institutions",
    text: "Work with MCCL on enterprise, trade and inclusive economic progress across the Kingdom.",
    href: "/contact?subject=partnership",
    action: "Build a partnership",
    icon: Building2,
  },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="mc-home">
        <section className="mc-hero" aria-labelledby="home-title">
          <div className="bp-shell mc-hero-grid">
            <div className="mc-hero-copy">
              <p className="mc-kicker">Mengo Chamber of Commerce Limited</p>
              <h1 id="home-title">A stronger home for business in Buganda.</h1>
              <p className="mc-hero-intro">
                We bring businesses, investors and institutions together to unlock trade, grow enterprise and create a stronger voice for business.
              </p>
              <div className="mc-hero-actions">
                <Link href="/membership" className="mc-button mc-button-primary">Join the Chamber <ArrowRight size={17} /></Link>
                <Link href="/services" className="mc-button mc-button-secondary">Explore our services <ArrowUpRight size={16} /></Link>
              </div>
              <p className="mc-hero-signoff">Uplifting Livelihoods through enterprise and collaboration.</p>
            </div>

            <figure className="mc-hero-figure">
              <img src="/images/mengo-board-inauguration.jpeg" alt="Guests at a Mengo Chamber of Commerce gathering" />
              <figcaption>
                <span>Mengo Chamber of Commerce</span>
                <strong>Connecting commerce with opportunity.</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mc-quick-start" aria-label="How the Chamber helps">
          <div className="bp-shell mc-quick-start-grid">
            <div className="mc-quick-start-intro">
              <p>What we do</p>
              <strong>Practical support for your next move.</strong>
            </div>
            <div className="mc-quick-start-item"><Handshake size={21} /><span><strong>Connect</strong><small>to markets, buyers and investors</small></span></div>
            <div className="mc-quick-start-item"><BriefcaseBusiness size={21} /><span><strong>Develop</strong><small>your enterprise and its capability</small></span></div>
            <div className="mc-quick-start-item"><Scale size={21} /><span><strong>Advocate</strong><small>for a better business environment</small></span></div>
          </div>
        </section>

        <section className="mc-introduction">
          <div className="bp-shell mc-introduction-grid">
            <div>
              <p className="mc-kicker">The Chamber&apos;s role</p>
              <h2>We turn relationships into useful business opportunities.</h2>
            </div>
            <div className="mc-introduction-copy">
              <p>
                Established by the Kingdom of Buganda, MCCL is a business membership organisation for enterprises, cooperatives,
                investors, professionals and institutions. We create the connections, support and collective momentum that help business move forward.
              </p>
              <Link href="/about" className="mc-text-link">Discover our mandate <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="mc-services" aria-labelledby="services-title">
          <div className="bp-shell">
            <div className="mc-section-heading">
              <div>
                <p className="mc-kicker">How MCCL serves business</p>
                <h2 id="services-title">Support that leads somewhere.</h2>
              </div>
              <p>Clear pathways for businesses looking to connect, grow and participate in a stronger Buganda economy.</p>
            </div>
            <ol className="mc-service-list">
              {services.map(({ number, name, summary, href, icon: Icon }) => (
                <li key={name}>
                  <span className="mc-service-number">{number}</span>
                  <span className="mc-service-icon"><Icon size={23} /></span>
                  <div><h3>{name}</h3><p>{summary}</p></div>
                  <Link href={href} aria-label={`Explore ${name}`}><ArrowRight size={20} /></Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mc-ecosystem" aria-labelledby="ecosystem-title">
          <div className="bp-shell">
            <div className="mc-ecosystem-intro">
              <div>
                <p className="mc-kicker">Your place at the table</p>
                <h2 id="ecosystem-title">One Chamber. A wider business ecosystem.</h2>
              </div>
              <p>Choose the conversation that matches your role, then let&apos;s make the next connection count.</p>
            </div>
            <div className="mc-pathways">
              {pathways.map(({ title, text, href, action, icon: Icon }) => (
                <article key={title}>
                  <Icon size={23} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href={href}>{action} <ArrowRight size={15} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-closing">
          <div className="bp-shell mc-closing-inner">
            <div>
              <p className="mc-kicker">Let&apos;s move business forward</p>
              <h2>Bring your ambition, expertise or opportunity to the Chamber.</h2>
            </div>
            <div className="mc-closing-actions">
              <Link href="/membership" className="mc-button mc-button-primary">Become a member <ArrowRight size={17} /></Link>
              <Link href="/contact" className="mc-text-link">Talk to MCCL <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
