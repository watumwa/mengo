import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  MapPinned,
  Megaphone,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  Target,
  UsersRound,
} from "lucide-react";
import { ResponsivePhoto } from "../ResponsivePhoto";
import { Shell } from "../components";
import { realPhotos, type ChamberPhoto } from "../realPhotos";
import "./about.css";

export const metadata: Metadata = {
  title: "About Mengo Chamber of Commerce Limited",
  description:
    "Discover the mandate, vision, mission, strategic direction and regional business network of Mengo Chamber of Commerce Limited.",
};

const propositions = [
  {
    name: "Connect",
    text: "Bring businesses closer to markets, investors, finance, technology and strategic partners.",
    href: "/connect",
    icon: Network,
  },
  {
    name: "Develop",
    text: "Build enterprise capacity, productivity, resilience and competitiveness through practical support.",
    href: "/business-advisory",
    icon: GraduationCap,
  },
  {
    name: "Advocate",
    text: "Represent business interests and support evidence-based dialogue for a better business environment.",
    href: "/policy-advocacy",
    icon: Megaphone,
  },
  {
    name: "Promote",
    text: "Showcase trade, investment, market opportunities and the enterprises creating value across Buganda.",
    href: "/invest",
    icon: Globe2,
  },
  {
    name: "Transform",
    text: "Strengthen regional enterprise ecosystems through innovation, inclusion and sustainable growth.",
    href: "/economic-map",
    icon: Sparkles,
  },
];

const audiences = [
  {
    title: "Entrepreneurs & SMEs",
    text: "Growing enterprises seeking connections, knowledge, visibility and market pathways.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Traders & manufacturers",
    text: "Businesses moving goods, adding value, creating jobs and serving local and wider markets.",
    icon: Store,
  },
  {
    title: "Cooperatives & SACCOs",
    text: "Member-led organisations building collective participation, finance and enterprise opportunity.",
    icon: UsersRound,
  },
  {
    title: "Agribusinesses",
    text: "Producers and value-chain businesses working across agriculture, processing and distribution.",
    icon: Sprout,
  },
  {
    title: "Investors & diaspora",
    text: "People and organisations looking for credible commercial connections within Buganda and Uganda.",
    icon: Globe2,
  },
  {
    title: "Institutions & partners",
    text: "Public, private and development partners interested in sustainable enterprise collaboration.",
    icon: Building2,
  },
];

const values = ["Co-operation", "Innovation", "Integrity", "Service Excellence", "Loyalty"];

const chamberDelegation: ChamberPhoto = {
  src: "https://nilepost.co.ug/new_cms/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-16.24.35-1.jpeg",
  alt: "Mengo Chamber delegation photographed at Bulange during discussions on trade exhibitions",
  position: "center 43%",
};

export default function About() {
  return (
    <Shell>
      <main className="mc-about">
        <section className="mc-about-hero" aria-labelledby="mc-about-title">
          <div className="bp-shell mc-about-hero-grid">
            <div className="mc-about-hero-copy">
              <p className="mc-about-kicker">
                <Landmark size={16} aria-hidden="true" /> About the Chamber
              </p>
              <h1 id="mc-about-title">
                Mengo Chamber
                <span>of Commerce Limited</span>
              </h1>
              <p className="mc-about-hero-lead">
                A business-facing institution connecting enterprises, markets and partnerships to advance commerce, investment and stronger livelihoods across Buganda and beyond.
              </p>
              <div className="mc-about-hero-actions">
                <Link href="/membership">
                  Join the Chamber <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/services" className="mc-about-secondary-action">
                  Explore our services
                </Link>
              </div>
              <p className="mc-about-origin">
                <ShieldCheck size={18} aria-hidden="true" /> Established by the Kingdom of Buganda to advance enterprise growth, trade development and investment opportunity.
              </p>
            </div>
            <figure className="mc-about-hero-media">
              <ResponsivePhoto
                photo={realPhotos.chamberInauguration}
                width={1200}
                height={850}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="eager"
              />
              <figcaption>
                <span>Institutional moment</span>
                Mengo Chamber of Commerce inauguration group photograph.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mc-about-profile" aria-label="Mengo Chamber institutional profile">
          <div className="bp-shell mc-about-profile-grid">
            <article>
              <span>Institutional form</span>
              <strong>Company Limited by Guarantee</strong>
            </article>
            <article>
              <span>Institutional origin</span>
              <strong>Established by the Kingdom of Buganda</strong>
            </article>
            <article>
              <span>Enterprise reach</span>
              <strong>Buganda, Uganda and beyond</strong>
            </article>
          </div>
        </section>

        <section className="mc-about-intro" aria-labelledby="mc-about-who-title" data-chamber-reveal>
          <div className="bp-shell mc-about-intro-grid">
            <div className="mc-about-section-heading">
              <p>Who we are</p>
              <h2 id="mc-about-who-title">A Chamber built around business.</h2>
            </div>
            <div className="mc-about-intro-copy">
              <p className="mc-about-intro-lead">
                Mengo Chamber of Commerce Limited is a consortium of affiliated members working to create a competitive, connected and sustainable business ecosystem in Buganda.
              </p>
              <p>
                The Chamber brings together enterprises, institutions, cooperatives, investors and partners around market access, business development, trade and investment linkages, research and constructive policy dialogue. Its role is to help business participation move from isolated effort to shared opportunity.
              </p>
              <div className="mc-about-mandate">
                <Target size={24} aria-hidden="true" />
                <div>
                  <span>Our mandate</span>
                  <p>Enable enterprises to connect, grow, compete and contribute to lasting economic opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-about-propositions" aria-labelledby="mc-about-propositions-title">
          <div className="bp-shell">
            <div className="mc-about-propositions-heading" data-chamber-reveal>
              <div>
                <p>Our strategic role</p>
                <h2 id="mc-about-propositions-title">Five commitments to enterprise.</h2>
              </div>
              <p>
                MCCL’s five strategic propositions translate the Chamber’s purpose into clear pathways for business participation and impact.
              </p>
            </div>
            <div className="mc-about-proposition-grid">
              {propositions.map(({ name, text, href, icon: Icon }, index) => (
                <Link href={href} key={name} data-chamber-reveal>
                  <span className="mc-about-proposition-number">0{index + 1}</span>
                  <Icon size={27} aria-hidden="true" />
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <span className="mc-about-card-action">
                    Explore {name.toLowerCase()} <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mc-about-source-note">
              These strategic propositions reflect the Chamber’s planning priorities. They describe its direction and do not imply that every proposed programme is already operational.
            </p>
          </div>
        </section>

        <section className="mc-about-audiences" aria-labelledby="mc-about-audiences-title">
          <div className="bp-shell mc-about-audiences-grid">
            <div className="mc-about-audiences-intro" data-chamber-reveal>
              <p>Who we serve</p>
              <h2 id="mc-about-audiences-title">A home for enterprise at every scale.</h2>
              <span>
                The Chamber is designed to connect established institutions and emerging businesses within one wider commercial community.
              </span>
              <Link href="/membership">
                Explore membership <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mc-about-audience-list">
              {audiences.map(({ title, text, icon: Icon }) => (
                <article key={title} data-chamber-reveal>
                  <span><Icon size={22} aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-about-direction" aria-labelledby="mc-about-direction-title">
          <div className="bp-shell">
            <div className="mc-about-direction-heading" data-chamber-reveal>
              <p>Our institutional direction</p>
              <h2 id="mc-about-direction-title">Purpose that guides every connection.</h2>
            </div>
            <div className="mc-about-direction-grid">
              <article className="mc-about-vision" data-chamber-reveal>
                <div className="mc-about-direction-label"><Compass size={22} aria-hidden="true" /> Our vision</div>
                <p>A vibrant, competitive chamber of commerce that creates business opportunities, jobs and improves livelihoods for the communities.</p>
              </article>
              <article className="mc-about-mission" data-chamber-reveal>
                <div className="mc-about-direction-label"><Target size={22} aria-hidden="true" /> Our mission</div>
                <p>To facilitate trade, investment, enterprise growth, agricultural transformation, and industrial development by providing quality business services, strategic linkages, and effective advocacy for a competitive business environment in Uganda.</p>
              </article>
            </div>
            <div className="mc-about-values" data-chamber-reveal>
              <span>Our values</span>
              <div>{values.map((value) => <strong key={value}>{value}</strong>)}</div>
              <Link href="/strategy">Explore our strategy <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="mc-about-reach" aria-labelledby="mc-about-reach-title">
          <div className="bp-shell mc-about-reach-grid">
            <figure className="mc-about-reach-map" data-chamber-reveal>
              <ResponsivePhoto
                photo={realPhotos.masazaMap}
                width={1100}
                height={900}
                sizes="(max-width: 820px) 100vw, 50vw"
              />
              <figcaption>Buganda traditional counties reference map.</figcaption>
            </figure>
            <div className="mc-about-reach-copy" data-chamber-reveal>
              <p>Regional Chamber network</p>
              <h2 id="mc-about-reach-title">Local representation. One connected Chamber.</h2>
              <span>
                The Chamber connects institutional coordination with regional, county and sub-county business representation.
              </span>
              <div className="mc-about-reach-metrics" aria-label="Regional Chamber framework overview">
                <div><strong>06</strong><span>Regional clusters</span></div>
                <div><strong>18</strong><span>Constituent Ssaza</span></div>
              </div>
              <ol>
                <li><span>01</span> Regional Chamber Cluster Committees</li>
                <li><span>02</span> City and County Chamber Committees</li>
                <li><span>03</span> Sub-County representation and enrolled members</li>
              </ol>
              <Link href="/centres">
                Explore the regional network <MapPinned size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mc-about-governance" aria-labelledby="mc-about-governance-title">
          <div className="bp-shell">
            <div className="mc-about-governance-heading" data-chamber-reveal>
              <div>
                <p>Leadership & accountability</p>
                <h2 id="mc-about-governance-title">Built for responsible institutional leadership.</h2>
              </div>
              <p>
                MCCL’s framework connects patronage, strategic oversight, a Secretariat, specialised service divisions and regional member representation.
              </p>
            </div>
            <div className="mc-about-governance-grid">
              <Link href="/about/leadership" data-chamber-reveal>
                <UsersRound size={25} aria-hidden="true" />
                <span>Leadership</span>
                <h3>Meet the Chamber’s key leadership</h3>
                <p>Explore institutional oversight, board leadership and representation.</p>
                <strong>View leadership <ArrowUpRight size={16} aria-hidden="true" /></strong>
              </Link>
              <Link href="/governance#interactive-organogram" data-chamber-reveal>
                <Scale size={25} aria-hidden="true" />
                <span>Governance</span>
                <h3>Understand how the Chamber connects</h3>
                <p>Explore the interactive organisational framework from oversight to members.</p>
                <strong>View the organogram <ArrowUpRight size={16} aria-hidden="true" /></strong>
              </Link>
              <Link href="/strategy" data-chamber-reveal>
                <ShieldCheck size={25} aria-hidden="true" />
                <span>Strategy</span>
                <h3>See the priorities shaping MCCL</h3>
                <p>Review the Chamber’s vision, mission, strategic goals and propositions.</p>
                <strong>View the strategy <ArrowUpRight size={16} aria-hidden="true" /></strong>
              </Link>
            </div>
          </div>
        </section>

        <section className="mc-about-stories" aria-labelledby="mc-about-stories-title">
          <div className="bp-shell">
            <div className="mc-about-stories-heading" data-chamber-reveal>
              <p>The Chamber in context</p>
              <h2 id="mc-about-stories-title">Business conversations grounded in real enterprise.</h2>
            </div>
            <div className="mc-about-story-grid">
              <article data-chamber-reveal>
                <figure>
                  <ResponsivePhoto photo={chamberDelegation} width={1000} height={680} sizes="(max-width: 760px) 100vw, 50vw" />
                  <figcaption>Mengo Chamber delegation at Bulange during discussions on trade exhibitions.</figcaption>
                </figure>
                <div>
                  <span>Chamber news</span>
                  <h3>Trade exhibitions can unlock business growth.</h3>
                  <p>The Chamber encourages enterprises to use exhibitions to build visibility, connections and new market opportunities.</p>
                  <Link href="/insights/trade-exhibitions-business-growth">Read the Chamber story <ArrowRight size={15} aria-hidden="true" /></Link>
                </div>
              </article>
              <article data-chamber-reveal>
                <figure>
                  <ResponsivePhoto photo={realPhotos.businessForum} width={1000} height={680} sizes="(max-width: 760px) 100vw, 50vw" />
                  <figcaption>Panel discussion at the BBS Business Forum, shown as wider business ecosystem context.</figcaption>
                </figure>
                <div>
                  <span>Business ecosystem</span>
                  <h3>Stronger enterprise begins with stronger connections.</h3>
                  <p>Forums, partnerships and market intelligence help turn shared commercial challenges into practical business conversations.</p>
                  <Link href="/services">Explore business services <ArrowRight size={15} aria-hidden="true" /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mc-about-cta" aria-labelledby="mc-about-cta-title">
          <div className="bp-shell mc-about-cta-grid">
            <div data-chamber-reveal>
              <p>Take part in the Chamber</p>
              <h2 id="mc-about-cta-title">Build the next business connection with MCCL.</h2>
              <span>Join the network, explore a partnership or start a conversation with the Chamber.</span>
            </div>
            <div className="mc-about-cta-actions" data-chamber-reveal>
              <Link href="/membership">
                <Handshake size={21} aria-hidden="true" />
                <span><strong>Become a member</strong><small>Explore Chamber membership</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/contact?subject=partnership">
                <Building2 size={21} aria-hidden="true" />
                <span><strong>Partner with MCCL</strong><small>Discuss institutional collaboration</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/contact">
                <Compass size={21} aria-hidden="true" />
                <span><strong>Contact the Chamber</strong><small>Start an enquiry</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
