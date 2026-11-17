import Link from "next/link";
import { Shell } from "../../components";
import { ResponsivePhoto } from "../../ResponsivePhoto";
import { realPhotos, type ChamberPhoto } from "../../realPhotos";
import "./leadership.css";

type Leader={name:string;role:string;photo?:ChamberPhoto;affiliation?:string};
const patron:Leader={name:"Owek. Charles Peter Mayiga",role:"Katikkiro of Buganda · Patron / Overseer",photo:realPhotos.katikkiroPortrait};
const chair:Leader={name:"Omuk. John Fred Freeman Kiyimba",role:"Chairman",photo:realPhotos.chamberChairKiyimba};
const vice:Leader={name:"Owek. Steven Kayiwa",role:"Vice Chairman",photo:realPhotos.chamberViceChairKayiwa};
const members:Leader[]=[
 {name:"Omuk. Sarah Kironde Ssemanda",role:"Member",photo:realPhotos.chamberMemberSarahSsemanda},
 {name:"Owek. Ritah Namyalo",role:"Member"},
 {name:"Omuk. Robert Nsereko",role:"Member"},
 {name:"Hajji Musa Mugere",role:"Member",photo:realPhotos.chamberMemberMusaMugere},
 {name:"Francis Asisi Kimbowa",role:"Secretary",affiliation:"Buganda Royal Law Chambers"},
];
function Portrait({leader}:{leader:Leader}){
 return <div className="mcl-portrait" aria-label={leader.photo ? undefined : `Portrait pending for ${leader.name}`}>
  {leader.photo?<ResponsivePhoto photo={leader.photo} width={360} height={400} sizes="(max-width: 600px) 115px, 180px"/>:<span aria-hidden="true" className="mcl-portrait-empty" />}
 </div>;
}
function MainLeader({leader}:{leader:Leader}){
 return <article className="mcl-main-person"><Portrait leader={leader}/><div><p className="mcl-person-role">{leader.role}</p><h2>{leader.name}</h2>{leader.affiliation&&<p className="mcl-person-affiliation">{leader.affiliation}</p>}</div></article>;
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
    <div className="mcl-board-label">BOARD OF DIRECTORS</div>
    <div className="mcl-member-grid">{members.map(person=><article className="mcl-member" key={person.name}><Portrait leader={person}/><div><p className="mcl-person-role">{person.role}</p><h3>{person.name}</h3>{person.affiliation&&<p className="mcl-person-affiliation">{person.affiliation}</p>}</div></article>)}</div>
    <p className="mcl-photo-note">Portraits for the remaining board members will be published when provided by the Chamber.</p>
    <div className="mcl-footer-links"><Link href="/about">About the Chamber</Link><Link href="/governance">Governance & accountability</Link></div>
  </div></section>
 </main></Shell>;
}
