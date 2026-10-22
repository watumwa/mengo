import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Factory,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Network,
  Scale,
  Sprout,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";
import { HeroServiceCards } from "./HeroServiceCards";
import { ResponsivePhoto } from "./ResponsivePhoto";
import { realPhotos } from "./realPhotos";

const services = [
  {
    title: "Trade & investment",
    description: "Open routes to markets, buyers, investors, trade missions and strategic partnerships.",
    href: "/trade-investment",
    icon: Handshake,
    label: "Connect",
  },
  {
    title: "Business development",
    description: "Support enterprises with capacity building, advisory, practical skills and growth pathways.",
    href: "/business-advisory",
    icon: BriefcaseBusiness,
    label: "Develop",
  },
  {
    title: "Advocacy & research",
    description: "Bring evidence and business voices into dialogue for a more enabling business environment.",
    href: "/policy-advocacy",
    icon: Scale,
    label: "Advocate",
  },
  {
    title: "Market intelligence",
    description: "Build access to trusted business information, sector insight and opportunity-focused data.",
    href: "/intelligence",
    icon: BarChart3,
    label: "Transform",
  },
];

const strategicPriorities = [
  { title: "Revenue sustainability", detail: "Build diverse, reliable resources that sustain quality Chamber services.", icon: Building2 },
  { title: "Membership growth", detail: "Bring businesses together across sectors, communities and regions.", icon: UsersRound },
  { title: "Institutional capacity", detail: "Strengthen governance, systems and professional service delivery.", icon: Landmark },
  { title: "Trade & investment", detail: "Create business linkages, market access, forums and partnerships.", icon: Network },
  { title: "Policy & research", detail: "Represent business interests through evidence-led engagement.", icon: Megaphone },
  { title: "Data & intelligence", detail: "Develop useful information systems for confident business decisions.", icon: Lightbulb },
];

const sectorPathways = [
  { title: "Agribusiness & value addition", href: "/value-chains", icon: Sprout, photo: realPhotos.market },
  { title: "Trade, logistics & commerce", href: "/commercial-centres", icon: Factory, photo: realPhotos.bulange },
  { title: "Enterprise, services & innovation", href: "/economy/sectors", icon: Building2, photo: realPhotos.heritage },
];

export default function HomePage() {
  return (
    <Shell>
      <main className="bp-home">
        <section className="bp-home-hero" aria-labelledby="home-title">
          <div className="bp-home-hero-photo" aria-hidden="true" />
          <div className="bp-home-hero-overlay" />
          <div className="bp-shell bp-home-hero-content">
            <div className="bp-hero-layout">
              <div className="bp-hero-copy">
                <p className="bp-eyebrow">MCCL 2026–2029 Strategic Plan · Twezimbe</p>
                <h1 id="home-title" className="bp-hero-title">
                  <span>Mengo Chamber</span>
                  <span>of Commerce</span>
                </h1>
                <p className="bp-home-campaign">Uplifting Livelihoods</p>
                <p>
                  Mengo Chamber of Commerce brings businesses, communities, investors and institutions together to grow trade,
                  enterprise, investment and responsible prosperity across Buganda.
                </p>
                <div className="bp-hero-actions">
                  <Link href="/membership" className="bp-button bp-button-gold">Join the Chamber <ArrowRight size={17} /></Link>
                  <Link href="/strategy" className="bp-button bp-button-ghost">Explore our strategy <ArrowUpRight size={17} /></Link>
                </div>
              </div>
              <HeroServiceCards />
            </div>
          </div>
        </section>

        <section className="bp-action-strip" aria-label="Start with a Chamber service">
          <div className="bp-shell bp-action-strip-grid">
            <Link href="/membership"><UsersRound size={22} /><span><strong>Join the network</strong><small>Membership, participation and representation</small></span><ArrowRight size={17} /></Link>
            <Link href="/opportunity-navigator"><Handshake size={22} /><span><strong>Find an opportunity</strong><small>Trade, investment and partnership pathways</small></span><ArrowRight size={17} /></Link>
            <Link href="/business-advisory"><BriefcaseBusiness size={22} /><span><strong>Grow your business</strong><small>Advisory, capability and enterprise support</small></span><ArrowRight size={17} /></Link>
            <Link href="/contact"><Megaphone size={22} /><span><strong>Talk to the Chamber</strong><small>Partnerships, services and business issues</small></span><ArrowRight size={17} /></Link>
          </div>
        </section>

        <section className="bp-purpose-section">
          <div className="bp-shell bp-purpose-grid">
            <div className="bp-purpose-copy">
              <p className="bp-eyebrow">The Chamber&apos;s role</p>
              <h2>Kingdom reach. Professional business services.</h2>
              <p>
                Established by the Kingdom of Buganda, MCCL is a business-development platform for enterprises, cooperatives,
                investors, professionals and communities. It advances the Kingdom&apos;s socio-economic vision through practical,
                accountable commercial services.
              </p>
              <Link href="/about" className="bp-inline-link">Our story &amp; mandate <ArrowRight size={16} /></Link>
            </div>
            <aside className="bp-mission-card">
              <span>Our mission</span>
              <strong>Facilitate trade, investment, enterprise growth, agricultural transformation and industrial development.</strong>
              <p>Quality business services, strategic linkages and effective advocacy for a competitive business environment.</p>
              <Link href="/strategy">Read the 2026–2029 direction <ArrowUpRight size={15} /></Link>
            </aside>
          </div>
        </section>

        <section className="bp-service-section">
          <div className="bp-shell">
            <div className="bp-section-heading">
              <div><p className="bp-eyebrow">What MCCL does</p><h2>Services that move business forward.</h2></div>
              <p>One Chamber platform connecting enterprise needs with useful relationships, knowledge and commercial opportunity.</p>
            </div>
            <div className="bp-service-grid">
              {services.map(({ title, description, href, icon: Icon, label }) => (
                <Link href={href} className="bp-service-card" key={title}>
                  <span className="bp-service-number">{label}</span><Icon size={27} /><h3>{title}</h3><p>{description}</p><span className="bp-card-link">Explore service <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-strategy-section">
          <div className="bp-shell">
            <div className="bp-strategy-heading">
              <div><p className="bp-eyebrow">How we create value</p><h2>Five commitments. One connected Buganda economy.</h2></div>
              <p>The Chamber&apos;s strategic propositions turn Kingdom relationships and business energy into commercial progress.</p>
            </div>
            <div className="bp-proposition-grid">
              <article><span>01</span><strong>Connect</strong><p>Businesses to markets, investors, finance, technology and partners.</p></article>
              <article><span>02</span><strong>Develop</strong><p>Enterprise capability, productivity and competitiveness.</p></article>
              <article><span>03</span><strong>Advocate</strong><p>Business interests and a conducive operating environment.</p></article>
              <article><span>04</span><strong>Promote</strong><p>Buganda for trade, investment, tourism and enterprise.</p></article>
              <article><span>05</span><strong>Transform</strong><p>Value addition, digitalisation, innovation and inclusive growth.</p></article>
            </div>
          </div>
        </section>

        <section className="bp-priorities-section">
          <div className="bp-shell">
            <div className="bp-section-heading">
              <div><p className="bp-eyebrow">2026–2029 strategic priorities</p><h2>Building the foundations for lasting business impact.</h2></div>
              <Link href="/strategy" className="bp-inline-link">View strategic direction <ArrowRight size={16} /></Link>
            </div>
            <div className="bp-priority-grid">
              {strategicPriorities.map(({ title, detail, icon: Icon }, index) => (
                <article key={title}><span>0{index + 1}</span><Icon size={23} /><h3>{title}</h3><p>{detail}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-sector-section">
          <div className="bp-shell">
            <div className="bp-section-heading">
              <div><p className="bp-eyebrow">Business ecosystem</p><h2>Built around the enterprises that power Buganda.</h2></div>
              <p>Explore commercial pathways across productive sectors, trading centres and growing businesses.</p>
            </div>
            <div className="bp-sector-grid">
              {sectorPathways.map(({ title, href, icon: Icon, photo }) => (
                <Link href={href} className="bp-sector-card" key={title}>
                  <ResponsivePhoto photo={photo} width={760} height={620} sizes="(max-width:700px) 100vw, 33vw" />
                  <span className="bp-sector-shade" /><span className="bp-sector-icon"><Icon size={20} /></span>
                  <span className="bp-sector-copy"><strong>{title}</strong><small>Explore the Chamber pathway <ArrowRight size={14} /></small></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-home-cta">
          <div className="bp-shell bp-home-cta-grid">
            <div><p className="bp-eyebrow">Be part of the movement</p><h2>Bring your business, expertise or partnership to the table.</h2><p>Join a Chamber designed to help Buganda&apos;s businesses connect, compete and grow responsibly.</p></div>
            <div className="bp-home-cta-actions"><Link href="/membership" className="bp-button bp-button-gold">Become a member <ArrowRight size={17} /></Link><Link href="/contact" className="bp-button bp-button-ghost">Partner with MCCL <ArrowUpRight size={17} /></Link></div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
