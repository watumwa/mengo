import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, BriefcaseBusiness, Landmark, MapPinned,
  ShieldCheck, UsersRound
} from "lucide-react";
import { ResponsivePhoto } from "../ResponsivePhoto";
import { AboutCommitments } from "./AboutCommitments";
import { Shell } from "../components";
import { realPhotos, type ChamberPhoto } from "../realPhotos";
import "./about.css";

export const metadata: Metadata = {
  title: "About Mengo Chamber of Commerce Limited",
  description: "Explore the Chamber's story, mission, leadership and priorities for enterprise development across Buganda.",
};

const priorities = [
  {
    name: "Connect",
    text: "Bring businesses closer to markets, investors, finance, technology and strategic partners.",
    href: "/connect",
  },
  {
    name: "Develop",
    text: "Build enterprise capacity, productivity, resilience and competitiveness through practical support.",
    href: "/business-advisory",
  },
  {
    name: "Advocate",
    text: "Represent business interests and support evidence-based dialogue for a better business environment.",
    href: "/policy-advocacy",
  },
  {
    name: "Promote",
    text: "Showcase trade, investment, market opportunities and the enterprises creating value across Buganda.",
    href: "/invest",
  },
  {
    name: "Transform",
    text: "Strengthen regional enterprise ecosystems through innovation, inclusion and sustainable growth.",
    href: "/economic-map",
  },
];

const audiences = [
  { title: "Entrepreneurs & SMEs", text: "Growing enterprises seeking connections, knowledge, visibility and market pathways." },
  { title: "Traders & manufacturers", text: "Businesses moving goods, adding value, creating jobs and serving local and wider markets." },
  { title: "Cooperatives & SACCOs", text: "Member-led organisations building collective participation, finance and enterprise opportunity." },
  { title: "Agribusinesses", text: "Producers and value-chain businesses working across agriculture, processing and distribution." },
  { title: "Investors & diaspora", text: "People and organisations looking for credible commercial connections within Buganda and Uganda." },
  { title: "Institutions & partners", text: "Public, private and development partners interested in sustainable enterprise collaboration." },
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
      <main className="mc-about-v2">
        <header className="mc-about-v2-hero">
          <div className="bp-shell">
            <nav className="mc-about-v2-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <span aria-current="page">About the Chamber</span>
            </nav>
            <div className="mc-about-v2-hero-grid">
              <div className="mc-about-v2-hero-copy">
                <p className="mc-about-v2-kicker">Mengo Chamber of Commerce Limited</p>
                <h1>A Chamber built around business.</h1>
                <p className="mc-about-v2-hero-lead">
                  Bringing businesses, institutions and partners together to strengthen trade,
                  investment and livelihoods across Buganda and beyond.
                </p>
                <div className="mc-about-v2-actions">
                  <Link href="/membership/apply" className="mc-about-v2-primary">
                    Apply for membership <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                  <Link href="/about/leadership" className="mc-about-v2-quiet">
                    Meet our leadership <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="mc-about-v2-origin">
                  <Landmark size={19} aria-hidden="true" />
                  <span>Established by the Kingdom of Buganda to advance enterprise growth, trade development and investment opportunity.</span>
                </p>
              </div>
              <figure className="mc-about-v2-hero-image">
                <Image
                  src={realPhotos.chamberInauguration.src}
                  alt={realPhotos.chamberInauguration.alt}
                  width={1024}
                  height={683}
                  sizes="(max-width: 950px) 100vw, 51vw"
                  quality={85}
                  priority
                />
                <figcaption>Mengo Chamber of Commerce inauguration group photograph.</figcaption>
              </figure>
            </div>
          </div>
        </header>

        <nav className="mc-about-v2-section-nav" aria-label="On this page">
          <div className="bp-shell mc-about-v2-section-nav-inner">
            <span>Explore MCCL</span>
            <Link href="#mc-about-v2-who">Who we are</Link>
            <Link href="#mc-about-v2-direction">Vision &amp; mission</Link>
            <Link href="#mc-about-v2-priorities">Our commitments</Link>
            <Link href="#mc-about-v2-community">Who we serve</Link>
            <Link href="#mc-about-v2-network">Regional representation</Link>
            <Link href="#mc-about-v2-photos-title">In photographs</Link>
            <Link href="#mc-about-v2-leadership">Leadership</Link>
            <Link href="#mc-about-v2-story">From the Chamber</Link>
          </div>
        </nav>

        <section className="mc-about-v2-facts" aria-label="Chamber at a glance">
          <div className="bp-shell mc-about-v2-facts-grid">
            <div><span>Institutional form</span><strong>Company Limited by Guarantee</strong></div>
            <div><span>Established by</span><strong>The Kingdom of Buganda</strong></div>
            <div><span>Regional framework</span><strong>18 counties (Massaza)</strong></div>
            <div><span>Enterprise reach</span><strong>Buganda, Uganda and beyond</strong></div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-intro" aria-labelledby="mc-about-v2-who">
          <div className="bp-shell mc-about-v2-split">
            <div className="mc-about-v2-section-title">
              <p className="mc-about-v2-kicker">Who we are</p>
              <h2 id="mc-about-v2-who">Enterprise grows through connection.</h2>
            </div>
            <div className="mc-about-v2-intro-copy">
              <p className="mc-about-v2-highlight">
                Mengo Chamber of Commerce Limited is a consortium of affiliated members working
                to create a competitive, connected and sustainable business ecosystem in Buganda.
              </p>
              <p>
                The Chamber brings together enterprises, institutions, cooperatives, investors
                and partners around market access, business development, trade and investment
                linkages, research and constructive policy dialogue. Its role is to help business
                participation move from isolated effort to shared opportunity.
              </p>
              <div className="mc-about-v2-mandate">
                <Landmark size={21} aria-hidden="true" />
                <div>
                  <strong>Our institutional purpose</strong>
                  <p>Enable enterprises to connect, grow, compete and contribute to lasting economic opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-direction" aria-labelledby="mc-about-v2-direction">
          <div className="bp-shell">
            <div className="mc-about-v2-section-title">
              <p className="mc-about-v2-kicker">Our institutional direction</p>
              <h2 id="mc-about-v2-direction">What guides the Chamber.</h2>
            </div>
            <div className="mc-about-v2-direction-grid">
              <article>
                <h3>Our vision</h3>
                <p>A vibrant, competitive chamber of commerce that creates business opportunities, jobs and improves livelihoods for the communities.</p>
              </article>
              <article>
                <h3>Our mission</h3>
                <p>To facilitate trade, investment, enterprise growth, agricultural transformation, and industrial development by providing quality business services, strategic linkages, and effective advocacy for a competitive business environment in Uganda.</p>
              </article>
            </div>
            <div className="mc-about-v2-values">
              <strong>Our values</strong>
              <div>{values.map(value => <span key={value}>{value}</span>)}</div>
              <Link href="/strategy">View our strategy <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-priorities" aria-labelledby="mc-about-v2-priorities">
          <div className="bp-shell">
            <div className="mc-about-v2-section-bar">
              <div className="mc-about-v2-section-title">
                <p className="mc-about-v2-kicker">Our strategic role</p>
                <h2 id="mc-about-v2-priorities">Five commitments to enterprise.</h2>
              </div>
              <p>MCCL's five strategic propositions describe how the Chamber intends to connect, develop, advocate for, promote and transform enterprise opportunities. They express strategic direction, not a claim that every programme is already operational.</p>
            </div>
            <AboutCommitments priorities={priorities} />
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-community" aria-labelledby="mc-about-v2-community">
          <div className="bp-shell mc-about-v2-community-grid">
            <div className="mc-about-v2-community-copy">
              <div className="mc-about-v2-section-title">
                <p className="mc-about-v2-kicker">Who we serve</p>
                <h2 id="mc-about-v2-community">A wider community of enterprise.</h2>
              </div>
              <p>The Chamber's membership approach aims to connect established institutions and emerging businesses within one wider commercial community, supporting participation, shared knowledge and practical market opportunities.</p>
              <Link href="/membership">Explore membership <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="mc-about-v2-audience-grid">
              {audiences.map((audience) => (
                <article key={audience.title}>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-network" aria-labelledby="mc-about-v2-network">
          <div className="bp-shell mc-about-v2-network-grid">
            <figure className="mc-about-v2-network-map">
              <Image
                src={realPhotos.masazaMap.src}
                alt={realPhotos.masazaMap.alt}
                width={980}
                height={820}
                sizes="(max-width: 900px) 100vw, 48vw"
                quality={82}
              />
              <figcaption>Reference map showing the traditional counties of Buganda.</figcaption>
            </figure>
            <div className="mc-about-v2-network-copy">
              <p className="mc-about-v2-kicker">Regional representation</p>
              <h2 id="mc-about-v2-network">Local connections. A wider Chamber network.</h2>
              <p>The regional framework describes six proposed clusters and representation across 18 counties (Massaza), with county and sub-county participation.</p>
              <div className="mc-about-v2-network-stats">
                <div><strong>06</strong><span>Proposed regional clusters</span></div>
                <div><strong>18</strong><span>Counties (Massaza)</span></div>
              </div>
              <div className="mc-about-v2-network-levels">
                <h3>Proposed levels of representation</h3>
                <ol>
                  <li><span>01</span> Regional Chamber Cluster Committees</li>
                  <li><span>02</span> City and County Chamber Committees</li>
                  <li><span>03</span> Sub-County representation and enrolled members</li>
                </ol>
              </div>
              <Link href="/centres">Explore the regional framework <MapPinned size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-photo-stories" aria-labelledby="mc-about-v2-photos-title">
          <div className="bp-shell">
            <div className="mc-about-v2-photo-stories-heading">
              <div>
                <p className="mc-about-v2-kicker">In photographs</p>
                <h2 id="mc-about-v2-photos-title">People, enterprise and community.</h2>
              </div>
              <p>These genuine photographs show the wider business community. They are contextual examples, not MCCL-hosted events; verified Chamber activity photographs can be included when supplied.</p>
            </div>
            <div className="mc-about-v2-photo-stories-grid">
              <figure>
                <Image src={realPhotos.businessForum.src} alt={realPhotos.businessForum.alt} width={960} height={640} sizes="(max-width: 680px) 100vw, 46vw" quality={82} />
                <figcaption><strong>Business dialogue</strong><span>Participants at the BBS Business Forum (contextual business photograph).</span></figcaption>
              </figure>
              <figure>
                <Image src={realPhotos.enterpriseGroup.src} alt={realPhotos.enterpriseGroup.alt} width={960} height={640} sizes="(max-width: 680px) 100vw, 46vw" quality={82} />
                <figcaption><strong>Enterprise community</strong><span>Business team outside Rexba Ltd (contextual enterprise photograph).</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-leadership" aria-labelledby="mc-about-v2-leadership">
          <div className="bp-shell">
            <div className="mc-about-v2-section-title">
              <p className="mc-about-v2-kicker">Leadership & accountability</p>
              <h2 id="mc-about-v2-leadership">Get to know the institution.</h2>
              <p className="mc-about-v2-leadership-summary">Explore the Chamber's published Board leadership, governance principles, strategic priorities and business support areas. Formal responsibilities and operational details are described in the relevant sections.</p>
            </div>
            <div className="mc-about-v2-link-grid">
              <Link href="/about/leadership">
                <UsersRound size={24} aria-hidden="true" />
                <h3>Our leadership</h3>
                <p>Meet the published Chamber leadership and Board members.</p>
                <span>View leadership <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link href="/governance">
                <ShieldCheck size={24} aria-hidden="true" />
                <h3>Governance</h3>
                <p>Explore the Chamber's governance principles and institutional framework.</p>
                <span>Explore governance <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link href="/services">
                <BriefcaseBusiness size={24} aria-hidden="true" />
                <h3>Business support</h3>
                <p>Discover the Chamber's strategic service areas and enterprise priorities.</p>
                <span>Explore services <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link href="/strategy">
                <Landmark size={24} aria-hidden="true" />
                <h3>Our strategy</h3>
                <p>Review the vision, mission and five commitments shaping MCCL's intended direction.</p>
                <span>View strategy <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-section mc-about-v2-story" aria-labelledby="mc-about-v2-story">
          <div className="bp-shell mc-about-v2-story-grid">
            <figure>
              <ResponsivePhoto
                photo={chamberDelegation}
                width={1050}
                height={700}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <figcaption>Mengo Chamber delegation at Bulange discussing trade exhibitions.</figcaption>
            </figure>
            <div>
              <p className="mc-about-v2-kicker">From the Chamber</p>
              <h2 id="mc-about-v2-story">Trade exhibitions can unlock business growth.</h2>
              <p>The Chamber encourages enterprises to use trade exhibitions to improve visibility, build relationships and discover market opportunities. Forums, partnerships and market intelligence can help turn shared commercial challenges into practical conversations.</p>
              <div className="mc-about-v2-story-links">
                <Link href="/insights/trade-exhibitions-business-growth">Read the Chamber story <ArrowRight size={16} aria-hidden="true" /></Link>
                <Link href="/services">Explore business services <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mc-about-v2-cta" aria-labelledby="mc-about-v2-cta">
          <div className="bp-shell mc-about-v2-cta-grid">
            <div>
              <p className="mc-about-v2-kicker">Take part in the Chamber</p>
              <h2 id="mc-about-v2-cta">Build stronger business connections.</h2>
              <p>Explore Chamber membership or contact the office about partnerships and opportunities.</p>
            </div>
            <div className="mc-about-v2-cta-links">
              <Link href="/membership/apply">Apply for membership <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link href="/contact?subject=partnership">Partner with MCCL <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link href="/contact">Contact the Chamber <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
