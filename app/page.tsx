import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  MapPinned,
  Network,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import { Shell } from "./components";
import { HomeHero } from "./HomeHero";
import { realPhotos } from "./realPhotos";
import { ResponsivePhoto } from "./ResponsivePhoto";

const shortcuts = [
  { title: "About MCCL", subtitle: "Our story and mandate", href: "/about", icon: Landmark },
  { title: "Membership", subtitle: "Join and benefit", href: "/membership", icon: UsersRound },
  { title: "Masaza & Gombolola", subtitle: "Explore all counties", href: "/centres", icon: MapPinned },
  { title: "Investment Opportunities", subtitle: "Projects and partnerships", href: "/invest", icon: BriefcaseBusiness },
  { title: "SACCOs & Cooperatives", subtitle: "Grow together", href: "/businesses", icon: Network },
  { title: "News & Events", subtitle: "Latest updates", href: "/insights", icon: CalendarDays },
];

const statistics = [
  { value: "18", label: "Masaza Counties", icon: Landmark },
  { value: "200+", label: "Gombolola Sub-counties", icon: MapPinned },
  { value: "9.8M+", label: "People of Buganda (Estimated)", icon: Users },
  { value: "1000+", label: "Members, Businesses and Institutions", icon: BriefcaseBusiness },
  { value: "One Goal", label: "Uplifting Livelihoods", icon: TrendingUp },
];

const impact = [
  { title: "Agriculture", detail: "Food security & value addition", icon: Sprout, href: "/services", photo: realPhotos.coffee },
  { title: "Education", detail: "Skills & human capital", icon: GraduationCap, href: "/training", photo: realPhotos.kampala },
  { title: "Health", detail: "Stronger communities", icon: HeartPulse, href: "/insights", photo: realPhotos.heritage },
  { title: "Tourism", detail: "Our heritage, new opportunities", icon: MapPinned, href: "/invest", photo: realPhotos.bulange },
  { title: "Social Development", detail: "Inclusive local economies", icon: UsersRound, href: "/membership", photo: realPhotos.market },
  { title: "Youth & Women", detail: "Empowering future leaders", icon: Users, href: "/businesses", photo: realPhotos.kampala },
];

const services = [
  { title: "Business Advisory & Consultancy", icon: UsersRound, href: "/business-advisory" },
  { title: "Trade Facilitation & Market Access", icon: Network, href: "/exchange" },
  { title: "Investment Promotion", icon: BriefcaseBusiness, href: "/invest" },
  { title: "Training & Capacity Building", icon: GraduationCap, href: "/training" },
  { title: "Enterprise & SACCO Development", icon: Building2, href: "/services" },
  { title: "Policy Advocacy & Research", icon: ShieldCheck, href: "/policy-advocacy" },
];

const news = [
  { date: "Oct 10, 2025", title: "MCCL Launches New Enterprise Development Programme", photo: realPhotos.bulange },
  { date: "Sep 28, 2025", title: "Coffee Value Addition Project Targets Greater Farmer Incomes", photo: realPhotos.coffee },
  { date: "Sep 20, 2025", title: "Kalangala Tourism Investment Opportunities Unveiled", photo: realPhotos.market },
];

const events = [
  ["OCT", "26", "MCCL Business Forum", "Mengo, Kampala"],
  ["NOV", "15", "Trade & Investment Expo", "Kampala Serena Hotel"],
  ["DEC", "05", "SACCOs Leadership Training", "Mengo Conference Centre"],
];

const counties = [
  ["Bulemeezi", "top"],
  ["Buyikwe", "top-right"],
  ["Mityana", "upper-left"],
  ["Kassanda", "left"],
  ["Kyadondo", "upper-right"],
  ["Mawogola", "centre"],
  ["Mubende", "middle-left"],
  ["Mukono", "right"],
  ["Kabula­mali", "lower-left"],
  ["Gomba", "lower-centre"],
  ["Busiro", "middle"],
  ["Masaka", "bottom"],
  ["Kalangala", "islands"],
] as const;

export default function HomePage() {
  return (
    <Shell>
      <main className="mcc-home reference-home">
        <HomeHero />

        <section className="reference-shortcuts" aria-label="Explore the Chamber">
          <div className="container reference-shortcuts-grid">
            {shortcuts.map(({ title, subtitle, href, icon: Icon }) => (
              <Link href={href} key={title} className="reference-shortcut">
                <Icon size={27} strokeWidth={1.55} aria-hidden="true" />
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="reference-intro section-pad" aria-labelledby="about-mccl">
          <div className="container reference-intro-grid">
            <div className="reference-section-copy">
              <p className="reference-eyebrow">About us</p>
              <h2 id="about-mccl">Mengo Chamber of Commerce Limited</h2>
              <p>
                Established by the Kingdom of Buganda, Mengo Chamber of Commerce
                Limited is a member-driven institution promoting business growth,
                trade development, investment opportunities and improved
                livelihoods across Buganda.
              </p>
              <Link href="/about" className="reference-gold-button">
                Learn More About MCCL <ArrowRight size={16} />
              </Link>
            </div>
            <figure className="reference-board-card">
              <ResponsivePhoto photo={realPhotos.bulange} width={980} height={620} sizes="(max-width: 760px) 100vw, 51vw" />
              <div className="reference-play" aria-hidden="true"><CirclePlay size={54} /></div>
              <figcaption>Discover the Chamber&apos;s leadership and strategic direction</figcaption>
            </figure>
          </div>
        </section>

        <section className="reference-stat-band" aria-label="Buganda at a glance">
          <div className="container reference-stat-grid">
            {statistics.map(({ value, label, icon: Icon }) => (
              <div key={label} className="reference-stat">
                <Icon size={32} aria-hidden="true" />
                <div><strong>{value}</strong><span>{label}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="reference-kingdom section-pad" aria-labelledby="explore-buganda">
          <div className="container">
            <div className="reference-kingdom-grid">
              <div className="reference-section-copy">
                <p className="reference-eyebrow">Our kingdom</p>
                <h2 id="explore-buganda">Explore Buganda</h2>
                <p>
                  Discover the 18 Masaza (counties), their sub-counties,
                  leaders, economic activities, and development opportunities.
                </p>
                <Link href="/centres" className="reference-gold-button">
                  View All Counties <ArrowRight size={16} />
                </Link>
              </div>
              <div className="reference-map" role="img" aria-label="Illustrative map of Buganda and its counties">
                {counties.map(([county, position]) => <span key={county} className={"reference-map-label " + position}>{county}</span>)}
              </div>
              <Link className="reference-feature-place" href="/centres">
                <ResponsivePhoto photo={realPhotos.heritage} width={680} height={500} sizes="(max-width: 760px) 100vw, 28vw" />
                <span className="reference-place-overlay">
                  <strong>Kalangala</strong>
                  <small>Beautiful islands, tourism, fisheries, and investment opportunities.</small>
                  <span><ArrowUpRight size={16} /> <i>01 / 18</i> <ArrowRight size={16} /></span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="reference-impact section-pad" aria-labelledby="impact-title">
          <div className="container">
            <div className="reference-title-row">
              <div>
                <p className="reference-eyebrow">Our impact</p>
                <h2 id="impact-title">Transforming Lives Across Buganda</h2>
                <p>Working with communities, partners and institutions to advance inclusive development and economic growth.</p>
              </div>
              <Link href="/insights" className="reference-gold-button">View All Sectors <ArrowRight size={16} /></Link>
            </div>
            <div className="reference-impact-grid">
              {impact.map(({ title, detail, icon: Icon, href, photo }) => (
                <Link className="reference-impact-card" href={href} key={title}>
                  <ResponsivePhoto photo={photo} width={380} height={260} sizes="(max-width: 760px) 50vw, 17vw" />
                  <span className="reference-impact-icon"><Icon size={18} /></span>
                  <strong>{title}</strong><small>{detail}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reference-services section-pad" aria-labelledby="services-title">
          <div className="container">
            <div className="reference-title-row">
              <div>
                <p className="reference-eyebrow">The Chamber</p>
                <h2 id="services-title">Business Support for a Thriving Buganda</h2>
                <p>We provide services that help businesses, SACCOs, cooperatives and communities grow and compete.</p>
              </div>
              <Link href="/services" className="reference-gold-button">Explore Our Services <ArrowRight size={16} /></Link>
            </div>
            <div className="reference-service-grid">
              {services.map(({ title, icon: Icon, href }) => (
                <Link href={href} key={title} className="reference-service">
                  <Icon size={30} strokeWidth={1.55} />
                  <strong>{title}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reference-membership" aria-labelledby="membership-title">
          <div className="reference-membership-photo">
            <ResponsivePhoto photo={realPhotos.heritage} width={1100} height={560} sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="reference-membership-copy">
            <p className="reference-eyebrow">Membership</p>
            <h2 id="membership-title">Be Part of a Growing Network</h2>
            <p>Join a vibrant community of businesses, cooperatives, SACCOs and partners committed to a prosperous Buganda.</p>
            <div>
              <Link href="/join" className="reference-gold-button">Join the Chamber <ArrowRight size={16} /></Link>
              <Link href="/membership" className="reference-membership-link">Membership Benefits <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="reference-updates section-pad" aria-labelledby="updates-title">
          <div className="container reference-updates-grid">
            <div className="reference-news-intro">
              <p className="reference-eyebrow">Latest news</p>
              <h2 id="updates-title">Stories from Buganda&apos;s Business Community</h2>
              <Link href="/insights" className="reference-outline-blue">View All News <ArrowRight size={15} /></Link>
            </div>
            <div className="reference-news-grid">
              {news.map(({ date, title, photo }) => (
                <Link href="/insights" className="reference-news-card" key={title}>
                  <ResponsivePhoto photo={photo} width={420} height={240} sizes="(max-width: 760px) 100vw, 20vw" />
                  <small>{date}</small><strong>{title}</strong><span>Read More <ArrowRight size={14} /></span>
                </Link>
              ))}
            </div>
            <aside className="reference-events" aria-labelledby="events-title">
              <div><p className="reference-eyebrow">Upcoming events</p><Link href="/events-calendar">View Calendar <ArrowRight size={14} /></Link></div>
              <h2 id="events-title" className="sr-only">Upcoming events</h2>
              {events.map(([month, day, title, venue]) => (
                <Link href="/events-calendar" className="reference-event" key={title}>
                  <time><span>{month}</span><strong>{day}</strong></time>
                  <span><strong>{title}</strong><small>{venue}</small></span>
                </Link>
              ))}
            </aside>
          </div>
        </section>

        <section className="reference-partners" aria-labelledby="partners-title">
          <div className="container">
            <p className="reference-eyebrow">Our partners</p>
            <div className="reference-partners-heading">
              <h2 id="partners-title">Working Together for a Prosperous Buganda</h2>
              <span><ChevronLeft size={17} /><ChevronRight size={17} /></span>
            </div>
            <div className="reference-partner-grid" aria-label="Partner logos">
              {["MCCL", "UIA", "ITC", "UNDP", "WORLD BANK GROUP", "AFD", "EU", "BUGANDA"].map((partner) => (
                <span key={partner}>{partner === "MCCL" ? <Landmark size={31} /> : <b>{partner}</b>}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
