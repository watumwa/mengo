import Link from "next/link";
import { ArrowUpRight, Building2, CalendarDays, ChartNoAxesCombined, ClipboardList, FileText, Handshake, LayoutDashboard, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero, Shell } from "../components";

const member = ["Overview dashboard","My membership","My business profile","My opportunities","B2B networking","Events and bookings","Training and learning","Payments and subscriptions","Service requests","Documents and resources","Account settings","Login and recovery"];
const staff = ["Executive dashboard","Membership management","Business directory","CRM and stakeholders","Opportunity management","Events and training","Finance and subscriptions","Research and publications","News and content","Regional networks","Service desk","Partnerships","Monitoring and evaluation","Users, roles and audit"];
const cards = [
  {title:"Member experience",icon:UsersRound,description:"A clear workspace for membership status, business visibility, services and networking.",items:member},
  {title:"Secretariat experience",icon:ShieldCheck,description:"An operational design blueprint for review queues, publishing, finance and oversight.",items:staff},
];
export default function PortalPreview(){
 return <Shell><main>
   <PageHero title="Digital Workspace Designs" description="Frontend-only interface blueprint for Chamber members and authorised Secretariat teams."/>
   <section className="section cream"><div className="container">
     <p className="notice">Design preview only. These are proposed screen types, not active member or staff functions. This page contains no private records, real account information or administrative controls.</p>
     <div className="portal-preview-launch"><h2>Explore the dashboard designs</h2><p>These are interactive navigation previews with illustrative data, not live accounts.</p><div><Link className="btn navy" href="/portal-preview/member">Member Dashboard <ArrowUpRight size={15}/></Link><Link className="btn gold" href="/portal-preview/secretariat">Secretariat Dashboard <ArrowUpRight size={15}/></Link></div></div><div className="portal-preview-grid">
       {cards.map(({title,icon:Icon,description,items})=><article className="portal-preview-card" key={title}>
         <div className="portal-preview-head"><span className="serviceicon"><Icon size={25}/></span><div><h2>{title}</h2><p>{description}</p></div></div>
         <div className="portal-preview-list">{items.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div>
       </article>)}
     </div>
     <div className="portal-preview-features">
       {[{icon:LayoutDashboard,title:"Role-based navigation",text:"Focused screens with only relevant tasks visible."},{icon:ClipboardList,title:"Approval workflows",text:"Clear statuses, review steps and audit-ready records."},{icon:ChartNoAxesCombined,title:"Reporting",text:"Executive metrics and programme performance layouts."},{icon:Building2,title:"Business management",text:"Directory profiles, verification and publication states."},{icon:CalendarDays,title:"Events",text:"Programme listings, registrations and calendars."},{icon:FileText,title:"Document centre",text:"Structured publications and resources."},{icon:Handshake,title:"Networking",text:"B2B introduction and opportunity interfaces."}].map(({icon:Icon,title,text})=><article key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}
     </div>
     <Link className="btn navy" href="/membership">Explore membership <ArrowUpRight size={16}/></Link>
   </div></section>
 </main></Shell>;
}
