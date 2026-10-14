import Link from "next/link";
import {ArrowLeft,ArrowUpRight,BarChart3,Bell,BookOpen,BriefcaseBusiness,CalendarDays,CheckCircle2,FileText,Handshake,LayoutDashboard,Settings2,UserRound} from "lucide-react";
import {Shell} from "../../components";

const tiles=[
 {label:"Membership profile",value:"Under review",hint:"Illustrative status only",icon:UserRound},
 {label:"Business listings",value:"01",hint:"Example profile",icon:BriefcaseBusiness},
 {label:"Event bookings",value:"02",hint:"Sample reservations",icon:CalendarDays},
 {label:"Service requests",value:"03",hint:"Sample requests",icon:FileText}
];
const tasks=[
 {title:"Complete your business profile",detail:"Add registration details and sector information",status:"Draft"},
 {title:"Membership category review",detail:"SME membership · demonstration record",status:"Under review"},
 {title:"Training interest",detail:"Business finance and record keeping",status:"Submitted"}
];
const menu=[{title:"Overview",icon:LayoutDashboard},{title:"My membership",icon:UserRound},{title:"Business profile",icon:BriefcaseBusiness},{title:"Opportunities",icon:Handshake},{title:"Events & training",icon:CalendarDays},{title:"Documents",icon:BookOpen},{title:"Settings",icon:Settings2}];
export default function MemberInterfacePreview(){return <Shell><main className="workspace-shell">
 <div className="container workspace-top"><Link href="/portal-preview"><ArrowLeft size={15}/> All workspace designs</Link><span>Frontend-only demonstration · No live member data</span></div>
 <div className="container workspace-grid"><aside className="workspace-sidebar"><div className="workspace-brand"><span>M</span><div><strong>Member workspace</strong><small>Interface preview</small></div></div><nav aria-label="Member preview navigation">{menu.map(({title,icon:Icon},i)=><div className={i===0?"selected":""} key={title}><Icon size={18}/>{title}</div>)}</nav><div className="workspace-sidebar-foot"><CheckCircle2 size={17}/> Sample data only</div></aside>
 <div className="workspace-main"><header className="workspace-header"><div><span className="eyebrow">Member dashboard</span><h1>Welcome to your Chamber</h1><p>A clearer view of your membership, opportunities and services.</p></div><span className="workspace-avatar"><Bell size={19}/></span></header>
 <div className="workspace-banner"><div><span>Membership experience</span><h2>Your business, connected to opportunity.</h2><p>Manage your profile and discover the Chamber's proposed member services in one workspace.</p></div><Link href="/membership">Explore membership <ArrowUpRight size={16}/></Link></div>
 <div className="workspace-actions"><Link href="/portal-preview/member/connections">Manage sample introductions <ArrowUpRight size={15}/></Link><Link href="/portal-preview/member/profile">View sample business profile <ArrowUpRight size={15}/></Link></div><section className="workspace-tiles" aria-label="Illustrative member summary">{tiles.map(({label,value,hint,icon:Icon})=><article key={label}><Icon size={21}/><span>{label}</span><strong>{value}</strong><small>{hint}</small></article>)}</section>
 <div className="workspace-panels"><section className="workspace-panel"><div className="workspace-panel-head"><div><h2>My activity</h2><p>Example tasks and application statuses</p></div><span>03 records</span></div><div className="workspace-task-list">{tasks.map(item=><div key={item.title}><div><strong>{item.title}</strong><p>{item.detail}</p></div><span>{item.status}</span></div>)}</div></section>
 <section className="workspace-panel"><div className="workspace-panel-head"><div><h2>Quick access</h2><p>Explore proposed services</p></div></div><div className="workspace-shortcuts"><Link href="/opportunities"><Handshake size={18}/> Market opportunities <ArrowUpRight size={15}/></Link><Link href="/events-calendar"><CalendarDays size={18}/> Events & programmes <ArrowUpRight size={15}/></Link><Link href="/training"><BarChart3 size={18}/> Training & learning <ArrowUpRight size={15}/></Link><Link href="/research"><BookOpen size={18}/> Research resources <ArrowUpRight size={15}/></Link></div></section></div>
 <p className="workspace-footnote">Design prototype only. All statuses, counts and records shown are fictional. This interface does not connect to accounts, process payments or save information.</p>
 </div></div></main></Shell>}
