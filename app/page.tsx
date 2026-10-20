import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CalendarDays, GraduationCap, Handshake, HeartPulse, Landmark, MapPinned, Network, Sprout, Store, Users, UsersRound, Camera, Globe2, ShieldCheck } from "lucide-react";
import { Shell } from "./components";
import { HomeHero } from "./HomeHero";
import { realPhotos } from "./realPhotos";
import { ResponsivePhoto } from "./ResponsivePhoto";
import "./home-redesign.css";

const shortcuts = [
  {title:"About MCCL",subtitle:"Our story and mandate",href:"/about",icon:Landmark},
  {title:"Membership",subtitle:"Join and benefit",href:"/membership",icon:UsersRound},
  {title:"Explore Buganda",subtitle:"Heritage and regions",href:"/centres",icon:MapPinned},
  {title:"Investment",subtitle:"Trade and opportunity",href:"/invest",icon:BriefcaseBusiness},
  {title:"SACCOs & Enterprise",subtitle:"Community growth",href:"/businesses",icon:Network},
  {title:"News & Events",subtitle:"Latest information",href:"/insights",icon:CalendarDays},
];
const impact = [
  {title:"Agriculture",detail:"Farming, value addition and market access",icon:Sprout,href:"/services",photo:realPhotos.coffee},
  {title:"Education",detail:"Skills, learning and enterprise development",icon:GraduationCap,href:"/training",photo:realPhotos.bulange},
  {title:"Health",detail:"Community wellbeing and productive livelihoods",icon:HeartPulse,href:"/insights",photo:realPhotos.market},
  {title:"Tourism",detail:"Heritage and visitor opportunities",icon:Camera,href:"/invest",photo:realPhotos.bulange},
  {title:"Community",detail:"Cooperatives and grassroots enterprise",icon:Users,href:"/membership",photo:realPhotos.market},
  {title:"Trade",detail:"Business connections and partnerships",icon:Globe2,href:"/exchange",photo:realPhotos.kampala},
];
const services = [
  {title:"Business Advisory",icon:Handshake,href:"/business-advisory"},
  {title:"Trade Facilitation",icon:Globe2,href:"/exchange"},
  {title:"Investment Promotion",icon:BriefcaseBusiness,href:"/invest"},
  {title:"Training & Capacity",icon:GraduationCap,href:"/training"},
  {title:"Enterprise Development",icon:Store,href:"/services"},
  {title:"Policy & Advocacy",icon:ShieldCheck,href:"/policy-advocacy"},
];

export default function HomePage(){
 return <Shell><main className="mcc-home">
   <HomeHero/>
   <section className="mcc-shortcuts" aria-label="Popular destinations"><div className="container mcc-shortcut-grid">{shortcuts.map(({title,subtitle,href,icon:Icon})=><Link href={href} key={title} className="mcc-shortcut"><Icon size={29} strokeWidth={1.55} aria-hidden="true"/><strong>{title}</strong><span>{subtitle}</span></Link>)}</div></section>

   <section className="mcc-section mcc-intro" aria-labelledby="mcc-intro-heading"><div className="container mcc-intro-grid">
    <div className="mcc-intro-copy"><span className="mcc-eyebrow">ABOUT US</span><h2 id="mcc-intro-heading">Mengo Chamber of <em>Commerce Limited</em></h2><p>Established by the Kingdom of Buganda, the Chamber is envisioned as a platform connecting enterprises, investors and institutions to strengthen trade, business development and economic opportunity.</p><p>Guided by the <strong>Twezimbe 2026–2029</strong> strategic direction, MCCL aims to support a competitive, connected and sustainable business ecosystem in Buganda and beyond.</p><Link href="/about" className="mcc-gold-btn">Learn more about MCCL <ArrowRight size={17}/></Link></div>
    <figure className="mcc-intro-visual"><ResponsivePhoto photo={realPhotos.bulange} width={980} height={680} sizes="(max-width:760px) 100vw, 48vw"/><figcaption>Bulange, Mengo — the Kingdom's administrative centre. Official MCCL board inauguration photography will be used once publication rights and a suitable original are available.</figcaption></figure>
   </div></section>

   <section className="mcc-blue-strip" aria-label="Our strategic priorities"><div className="container mcc-priorities">{[{icon:Landmark,label:"Kingdom heritage"},{icon:UsersRound,label:"Membership growth"},{icon:Handshake,label:"Trade & investment"},{icon:BookOpen,label:"Research & advocacy"}].map(({icon:Icon,label})=><div key={label}><Icon size={27} aria-hidden="true"/><strong>{label}</strong></div>)}</div></section>

   <section className="mcc-section mcc-regions" aria-labelledby="mcc-regions-heading"><div className="container mcc-regions-grid"><div><span className="mcc-eyebrow">OUR KINGDOM</span><h2 id="mcc-regions-heading">Explore <em>Buganda</em></h2><p>Discover the Kingdom's regional heritage and its commercial potential, from community enterprises to wider trade connections.</p><p className="mcc-disclosure">The full Masaza, Gombolola and local-leadership directory is planned for the next page-by-page design phase. We will publish only verified administrative information.</p><Link className="mcc-gold-btn" href="/centres">Explore regional business centres <ArrowRight size={17}/></Link></div><div className="mcc-regions-photo"><ResponsivePhoto photo={realPhotos.kampala} width={1000} height={720} sizes="(max-width:760px) 100vw, 48vw"/><div className="mcc-region-caption"><span>REGIONAL OPPORTUNITY</span><strong>Local roots. Wider markets.</strong><Link href="/exchange">Explore opportunities <ArrowUpRight size={16}/></Link></div></div></div></section>

   <section className="mcc-section mcc-impact" aria-labelledby="mcc-impact-heading"><div className="container"><div className="mcc-heading-row"><div><span className="mcc-eyebrow">DEVELOPMENT & IMPACT</span><h2 id="mcc-impact-heading">Building livelihoods <em>across Buganda</em></h2><p>Explore sectors that shape enterprise, opportunity and community wellbeing.</p></div><Link href="/insights" className="mcc-text-link">Explore insights <ArrowRight size={17}/></Link></div><div className="mcc-impact-grid">{impact.map(({title,detail,icon:Icon,href,photo})=><Link className="mcc-impact-card" href={href} key={title}><div className="mcc-impact-photo"><ResponsivePhoto photo={photo} width={450} height={300} sizes="(max-width:600px) 50vw, 17vw"/></div><div className="mcc-impact-body"><Icon size={20} aria-hidden="true"/><h3>{title}</h3><p>{detail}</p></div></Link>)}</div><p className="mcc-disclosure">These are sector themes, not claims that MCCL directly operates every Kingdom programme. Verified project case studies will be added to the dedicated sector pages.</p></div></section>

   <section className="mcc-section mcc-services" aria-labelledby="mcc-services-heading"><div className="container"><div className="mcc-heading-row"><div><span className="mcc-eyebrow">THE CHAMBER</span><h2 id="mcc-services-heading">Business support for a <em>thriving Buganda</em></h2><p>Strategic service areas intended to connect and strengthen businesses.</p></div><Link href="/services" className="mcc-text-link">All services <ArrowRight size={17}/></Link></div><div className="mcc-service-grid">{services.map(({title,icon:Icon,href})=><Link href={href} key={title} className="mcc-service"><Icon size={28} strokeWidth={1.6}/><strong>{title}</strong><ArrowUpRight size={16} className="mcc-service-arrow"/></Link>)}</div><p className="mcc-disclosure">Service delivery and programme availability should be confirmed with MCCL before public launch.</p></div></section>

   <section className="mcc-membership" aria-labelledby="mcc-membership-heading"><div className="mcc-membership-photo"><ResponsivePhoto photo={realPhotos.market} width={1050} height={570} sizes="(max-width:760px) 100vw, 50vw"/></div><div className="mcc-membership-copy"><span className="mcc-eyebrow">MEMBERSHIP</span><h2 id="mcc-membership-heading">Be part of a <em>growing network</em></h2><p>Connect with entrepreneurs, businesses, cooperatives, investors and partners working towards a prosperous Buganda.</p><div className="mcc-membership-actions"><Link href="/membership" className="mcc-gold-btn">Explore membership <ArrowRight size={17}/></Link><Link href="/join" className="mcc-white-link">Application steps <ArrowUpRight size={17}/></Link></div></div></section>

   <section className="mcc-section mcc-news" aria-labelledby="mcc-news-heading"><div className="container"><div className="mcc-heading-row"><div><span className="mcc-eyebrow">NEWS, EVENTS & KNOWLEDGE</span><h2 id="mcc-news-heading">Stories and <em>opportunities</em></h2></div><Link href="/insights" className="mcc-text-link">All updates <ArrowRight size={17}/></Link></div><div className="mcc-news-grid"><Link href="/strategy" className="mcc-news-card"><ResponsivePhoto photo={realPhotos.bulange} width={700} height={420} sizes="(max-width:760px) 100vw, 33vw"/><span>STRATEGIC DIRECTION</span><h3>Twezimbe: building a connected business ecosystem</h3><p>Explore the Chamber's 2026–2029 priorities.</p></Link><Link href="/businesses" className="mcc-news-card"><ResponsivePhoto photo={realPhotos.market} width={700} height={420} sizes="(max-width:760px) 100vw, 33vw"/><span>ENTERPRISE</span><h3>Discover businesses and community enterprises</h3><p>Explore business profiles and local commercial networks.</p></Link><Link href="/events-calendar" className="mcc-news-card"><ResponsivePhoto photo={realPhotos.kampala} width={700} height={420} sizes="(max-width:760px) 100vw, 33vw"/><span>PROGRAMMES</span><h3>Training, networking and future events</h3><p>Learn about proposed Chamber engagement programmes.</p></Link></div></div></section>

   <section className="mcc-closing"><div className="container"><div><span className="mcc-eyebrow">TWEZIMBE · BUILDING TOGETHER</span><h2>Let's build a more connected business future.</h2></div><Link href="/contact" className="mcc-gold-btn">Contact the Chamber <ArrowRight size={17}/></Link></div></section>
 </main></Shell>;
}
