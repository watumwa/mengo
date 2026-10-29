import Link from "next/link";
import { Shell } from "../../components";
import "./leadership.css";

type Leader={name:string;role:string;photo?:string};
const patron:Leader={name:"Owek. Charles Peter Mayiga",role:"Katikkiro of Buganda · Patron / Overseer"};
const chair:Leader={name:"Chief John Fred Kiyimba Freeman",role:"Board Chair"};
const vice:Leader={name:"Owek. Steven Kayiwa",role:"Vice Chair"};
const members:Leader[]=[
 {name:"Hajji Musa Bugere",role:"Board Member"},
 {name:"Sarah Kironde Ssemanda",role:"Board Member"},
 {name:"Owek. Ritah Namyalo",role:"Board Member"},
 {name:"Robert Nsereko",role:"Board Member"},
];
function Portrait({leader}:{leader:Leader}){
 return <div className="mcl-portrait" aria-label={`Portrait pending for ${leader.name}`}>
  {leader.photo?<img src={leader.photo} alt={`Portrait of ${leader.name}`} width={360} height={400}/>:<span aria-hidden="true" className="mcl-portrait-empty" />}
 </div>;
}
function MainLeader({leader}:{leader:Leader}){
 return <article className="mcl-main-person"><Portrait leader={leader}/><div><p className="mcl-person-role">{leader.role}</p><h2>{leader.name}</h2></div></article>;
}
export const metadata={title:"Leadership & Governance | Mengo Chamber of Commerce",description:"Meet the governance and leadership structure of Mengo Chamber of Commerce Limited."};
export default function Leadership(){
 return <Shell><main className="mcl-page">
  <header className="mcl-heading"><div className="bp-shell"><p>ABOUT THE CHAMBER</p><h1>Governance & Key Leadership</h1><span>Institutional oversight, board leadership and representation.</span></div></header>
  <section className="mcl-chart" aria-label="Mengo Chamber leadership hierarchy"><div className="bp-shell">
    <div className="mcl-tier"><MainLeader leader={patron}/></div>
    <div className="mcl-connector" aria-hidden="true"/>
    <div className="mcl-tier"><MainLeader leader={chair}/></div>
    <div className="mcl-connector" aria-hidden="true"/>
    <div className="mcl-tier"><MainLeader leader={vice}/></div>
    <div className="mcl-connector" aria-hidden="true"/>
    <div className="mcl-board-label">BOARD MEMBERS</div>
    <div className="mcl-member-grid">{members.map(person=><article className="mcl-member" key={person.name}><Portrait leader={person}/><div><p className="mcl-person-role">{person.role}</p><h3>{person.name}</h3></div></article>)}</div>
    <p className="mcl-photo-note">Official individual portraits will be published when provided by the Chamber.</p>
    <div className="mcl-footer-links"><Link href="/about">About the Chamber</Link><Link href="/governance">Governance & accountability</Link></div>
  </div></section>
 </main></Shell>;
}
