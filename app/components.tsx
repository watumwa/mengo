"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, MapPin, Menu, Search, X, House, Languages } from "lucide-react";

export const nav = [
 ["Explore", "/businesses"],["Connect", "/connect"],["Grow", "/business-advisory"],["Influence", "/policy-advocacy"],["About", "/about"]
];
const menus=[
 {title:"Explore",links:[["Business Directory","/businesses"],["Opportunity Exchange","/exchange"],["Invest in Buganda","/invest"],["Market Intelligence","/intelligence"],["Regional Economic Map","/economic-map"],["Opportunity Navigator","/opportunity-navigator"],["Data Explorer","/data-explorer"],["Calendar Preview","/calendar-preview"],["Language Preview","/language-preview"],["All Services","/explore"]]},
 {title:"Connect",links:[["MCCL Connect","/connect"],["Membership","/membership"],["Apply to Join","/join"],["Events","/events-calendar"],["Trade Missions","/trade-missions"],["Diaspora Network","/diaspora-network"]]},
 {title:"Grow",links:[["Business Advisory","/business-advisory"],["Training","/training"],["Mentorship","/mentorship"],["Market Access","/market-linkages"],["Value Chain Explorer","/value-chains"]]},
 {title:"Influence",links:[["Policy & Advocacy","/policy-advocacy"],["Research","/intelligence"],["Business Issue Tracker","/business-issues"],["Policy Briefs","/policy-briefs"]]},
 {title:"About",links:[["About the Chamber","/about"],["Leadership","/leadership"],["Governance","/governance"],["Strategic Framework","/strategy"],["Regional Clusters","/economic-map"],["Contact","/contact"]]}
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const [language,setLanguage]=useState<"en"|"lg">("en");
  const closeMenu = useCallback(() => {setOpen(false);setExpanded(null);}, []);
  useEffect(()=>{const onEscape=(event:KeyboardEvent)=>{if(event.key==="Escape")closeMenu()};window.addEventListener("keydown",onEscape);return ()=>window.removeEventListener("keydown",onEscape)},[closeMenu]);

  return <>
    <div className="topline"><div className="container"><span>Rooted in heritage. Advancing commerce and prosperity.</span><span>Buganda, Uganda · Connecting enterprise to opportunity</span></div></div>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="nav">
      <div className="container navinner">
        <Link href="/" className="brand" onClick={closeMenu}><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link>
        <nav id="primary-navigation" className={`navlinks ${open ? "open" : ""}`} aria-label="Primary navigation">
          <Link href="/" className="mcc-home-link" onClick={closeMenu} aria-current={pathname==="/"?"page":undefined}><House size={16}/> {language==="en"?"Home":"Awaka"}</Link>{menus.map(group=><div className="ecosystem-nav-group" key={group.title}><button type="button" aria-expanded={expanded===group.title} aria-controls={`nav-${group.title.toLowerCase()}`} onClick={()=>setExpanded(expanded===group.title?null:group.title)}>{language==="lg"?({Explore:"Noonya",Connect:"Yungagana",Grow:"Kula",Influence:"Wagira",About:"Ebikwata ku ffe"} as Record<string,string>)[group.title]:group.title}<span aria-hidden="true">⌄</span></button><div id={`nav-${group.title.toLowerCase()}`} className={`ecosystem-nav-dropdown ${expanded===group.title?"visible":""}`}>{group.links.map(([label,url])=><Link key={url} href={url} onClick={closeMenu} aria-current={pathname===url?"page":undefined}>{label}</Link>)}</div></div>)}
          <Link className="mobile-nav-cta btn navy" href="/join" onClick={closeMenu}>Become a Member <ArrowUpRight size={15} /></Link>
        </nav>
        <div className="navactions"><button type="button" className="mcc-language-switch" aria-label="Switch navigation language" title="Toggle English and Luganda navigation labels" onClick={()=>setLanguage(v=>v==="en"?"lg":"en")}><Languages size={16}/>{language==="en"?"EN":"LG"}</button>
          <Link className="nav-search" href="/search" aria-label="Search the Chamber ecosystem"><Search size={18} /></Link>
          <Link className="header-login" href="/portal-preview">Workspace Preview</Link>
          <Link className="btn navy" href="/join">Join the Chamber <ArrowUpRight size={15} /></Link>
          <button className="menubutton" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-controls="primary-navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
    {open && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container"><div className="footgrid"><div><Link href="/" className="brand"><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link><p>Connecting businesses, strengthening commercial centres, and creating pathways to inclusive economic prosperity.</p><p>Website content and service availability are being reviewed against the 2026–2029 strategic plan.</p></div><div><h4>Explore</h4><Link href="/">Home</Link><Link href="/about">About the Chamber</Link><Link href="/membership">Membership</Link><Link href="/strategy">Strategic Framework</Link><Link href="/strategic-goals">Strategic Goals</Link><Link href="/explore">Explore All Pages</Link><Link href="/connect">MCCL Connect</Link><Link href="/economic-map">Regional Clusters</Link><Link href="/value-chains">Value Chains</Link><Link href="/diaspora-network">Diaspora Network</Link><Link href="/business-issues">Business Issue Tracker</Link><Link href="/centres">Commercial Centres</Link><Link href="/exchange">Market Opportunities</Link></div><div><h4>Opportunities</h4><Link href="/business-advisory">Business Advisory</Link><Link href="/invest">Investment</Link><Link href="/events-calendar">Events & Programmes</Link><Link href="/intelligence">Market Intelligence</Link><Link href="/portal-preview">Workspace Designs</Link></div><div><h4>Connect</h4><p><MapPin size={14} /> Mengo, Kampala, Uganda</p><p>Bulange – Mengo · P.O. Box 4951, Kampala, Uganda. Other contact channels pending confirmation.</p><Link href="/contact">Send an enquiry <ArrowRight size={13} /></Link></div></div><p className="mcc-image-credits">Documentary photography: <a href="https://commons.wikimedia.org/wiki/File:Bulange_Mengo.jpg" target="_blank" rel="noopener noreferrer">Alvinategyeka (Bulange Mengo)</a> · <a href="https://commons.wikimedia.org/wiki/File:Harvesting_Ugandan_coffee_1.jpg" target="_blank" rel="noopener noreferrer">Denis kasozi (Ugandan coffee)</a> · <a href="https://commons.wikimedia.org/wiki/File:Coffee_farmers_harvesting_coffee.jpg" target="_blank" rel="noopener noreferrer">Jameswasswa (coffee farmers)</a> · <a href="https://commons.wikimedia.org/wiki/File:Kampala_Market.jpg" target="_blank" rel="noopener noreferrer">Kevin Gabbert (Kampala market)</a>. Wikimedia Commons; check each file page for licensing and attribution details. Images illustrate places and industries, not MCCL events or members.</p><div className="footbottom"><span>© {new Date().getFullYear()} Mengo Chamber of Commerce Limited · Website development</span><span><Link href="/privacy">Privacy notice (draft)</Link><Link href="/terms">Terms (draft)</Link></span></div></div></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><Header /><div id="main-content">{children}</div><Footer /></>;
}

export function PageHero({ title, description }: { title: string; description: string }) {
  const category=/about|leadership|governance|chamber|strategy|heritage/i.test(title)?"institution":/agricultur|coffee|value chain|farmer/i.test(title)?"agriculture":/market|trade|opportunit|business|commerce|investment|enterprise/i.test(title)?"commerce":/training|mentorship|learning|capacity/i.test(title)?"learning":"general";
  return <section className={`pagehero mcc-hero-${category}`}><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / {title}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
