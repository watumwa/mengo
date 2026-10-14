"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, MapPin, Menu, Search, X } from "lucide-react";

export const nav = [
  ["Home", "/"],
  ["Explore", "/search"],
  ["MCCL Connect", "/connect"],
  ["Businesses", "/businesses"],
  ["Opportunities", "/exchange"],
  ["Regional Clusters", "/economic-map"],
  ["Intelligence", "/intelligence"],
  ["Membership", "/membership"],
  ["About", "/about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  return <>
    <div className="topline"><div className="container"><span>Rooted in heritage. Advancing commerce and prosperity.</span><span>Buganda, Uganda · Connecting enterprise to opportunity</span></div></div>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="nav">
      <div className="container navinner">
        <Link href="/" className="brand" onClick={closeMenu}><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link>
        <nav id="primary-navigation" className={`navlinks ${open ? "open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, url]) => <Link key={url} href={url} onClick={closeMenu} aria-current={pathname === url ? "page" : undefined}>{label}</Link>)}
          <Link className="mobile-nav-cta btn navy" href="/join" onClick={closeMenu}>Become a Member <ArrowUpRight size={15} /></Link>
        </nav>
        <div className="navactions">
          <Link className="nav-search" href="/search" aria-label="Search the Chamber ecosystem"><Search size={18} /></Link>
          <Link className="header-login" href="/login">Member Login</Link>
          <Link className="btn navy" href="/join">Join the Chamber <ArrowUpRight size={15} /></Link>
          <button className="menubutton" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-controls="primary-navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
    {open && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container"><div className="footgrid"><div><Link href="/" className="brand"><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link><p>Connecting businesses, strengthening commercial centres, and creating pathways to inclusive economic prosperity.</p><p>Website content and service availability are being reviewed against the 2026–2029 strategic plan.</p></div><div><h4>Explore</h4><Link href="/about">About the Chamber</Link><Link href="/membership">Membership</Link><Link href="/strategic-plan">Strategic Plan</Link><Link href="/strategic-goals">Strategic Goals</Link><Link href="/explore">Explore All Pages</Link><Link href="/connect">MCCL Connect</Link><Link href="/economic-map">Regional Clusters</Link><Link href="/centres">Commercial Centres</Link><Link href="/opportunities">Market Linkages</Link></div><div><h4>Opportunities</h4><Link href="/business-development">Business Development</Link><Link href="/investment">Investment</Link><Link href="/events-calendar">Events & Programmes</Link><Link href="/research">Research & Publications</Link><Link href="/portal-preview">Workspace Designs</Link></div><div><h4>Connect</h4><p><MapPin size={14} /> Mengo, Kampala, Uganda</p><p>Bulange – Mengo · P.O. Box 4951, Kampala, Uganda. Other contact channels pending confirmation.</p><Link href="/contact">Send an enquiry <ArrowRight size={13} /></Link></div></div><div className="footbottom"><span>© {new Date().getFullYear()} Mengo Chamber of Commerce Limited · Website development</span><span><Link href="/privacy">Privacy notice (draft)</Link><Link href="/terms">Terms (draft)</Link></span></div></div></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><Header /><div id="main-content">{children}</div><Footer /></>;
}

export function PageHero({ title, description }: { title: string; description: string }) {
  return <section className="pagehero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / {title}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
