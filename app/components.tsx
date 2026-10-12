"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin, Menu, Search, X } from "lucide-react";

export const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Membership", "/membership"],
  ["Commercial Centres", "/centres"],
  ["Business Directory", "/businesses"],
  ["Opportunities", "/opportunities"],
  ["Programmes", "/business-development"],
  ["Events", "/events-calendar"],
  ["News", "/insights"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return <>
    <div className="topline"><div className="container"><span>Rooted in heritage. Advancing commerce and prosperity.</span><span>Buganda, Uganda · Connecting enterprise to opportunity</span></div></div>
    <header className="nav">
      <div className="container navinner">
        <Link href="/" className="brand" onClick={closeMenu}><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link>
        <nav id="primary-navigation" className={`navlinks ${open ? "open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, url]) => <Link key={url} href={url} onClick={closeMenu}>{label}</Link>)}
          <Link className="mobile-nav-cta btn navy" href="/join" onClick={closeMenu}>Become a Member <ArrowUpRight size={15} /></Link>
        </nav>
        <div className="navactions">
          <Link className="nav-search" href="/directory" aria-label="Search the Chamber directory"><Search size={18} /></Link>
          <Link className="header-login" href="/login">Login</Link>
          <Link className="btn navy" href="/join">Join Now <ArrowUpRight size={15} /></Link>
          <button className="menubutton" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-controls="primary-navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
    {open && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container"><div className="footgrid"><div><Link href="/" className="brand"><span className="brandmark">M</span><span><strong>Mengo Chamber</strong><small>of Commerce</small></span></Link><p>Connecting businesses, strengthening commercial centres, and creating pathways to inclusive economic prosperity.</p><p>Independent website concept pending institutional and brand approval.</p></div><div><h4>Explore</h4><Link href="/about">About the Chamber</Link><Link href="/membership">Membership</Link><Link href="/commercial-centres">Commercial Centres</Link><Link href="/market-linkages">Market Linkages</Link></div><div><h4>Opportunities</h4><Link href="/business-development">Business Development</Link><Link href="/investment">Investment</Link><Link href="/events">Events & Programmes</Link><Link href="/impact">Community Impact</Link></div><div><h4>Connect</h4><p><MapPin size={14} /> Mengo, Kampala, Uganda</p><p>Official address and contact channels to be confirmed.</p><Link href="/contact">Send an enquiry <ArrowRight size={13} /></Link></div></div><div className="footbottom"><span>© {new Date().getFullYear()} Mengo Chamber of Commerce · Design concept</span><span>Privacy · Terms · Accessibility</span></div></div></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>;
}

export function PageHero({ title, description }: { title: string; description: string }) {
  return <section className="pagehero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / {title}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
