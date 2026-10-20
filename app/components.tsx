"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const mainNavigation = [
  ["Home", "/"],
  ["The Kingdom", "/centres"],
  ["Leadership", "/leadership"],
  ["Our Impact", "/insights"],
  ["Buganda Economy", "/businesses"],
  ["The Chamber", "/about"],
  ["Opportunities", "/exchange"],
  ["News & Events", "/events-calendar"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="mcc-site-header">
      <div className="mcc-topbar">
        <div className="container">
          <span>Obwakabaka bwa Buganda <i /> Kingdom of Buganda</span>
          <span><Link href="/contact">Contact</Link><i /> <Link href="/insights">FAQs</Link><i /> English <i /> Luganda</span>
        </div>
      </div>
      <div className="mcc-main-nav">
        <div className="container mcc-main-nav-inner">
          <Link href="/" className="mcc-brand" onClick={close} aria-label="Mengo Chamber of Commerce home">
            <Image src="/icons/mccl-icon.svg" alt="" width={52} height={52} priority />
            <span><strong>Mengo Chamber</strong><b>of Commerce Limited</b><small>Building for a Prosperous Buganda</small></span>
          </Link>
          <nav className={open ? "mcc-primary-nav is-open" : "mcc-primary-nav"} aria-label="Primary navigation">
            {mainNavigation.map(([label, href]) => (
              <Link href={href} key={label} onClick={close}>{label}{label !== "Home" && label !== "News & Events" ? <em>⌄</em> : null}</Link>
            ))}
          </nav>
          <div className="mcc-nav-actions">
            <Link href="/search" className="mcc-search" aria-label="Search"><Search size={17} /></Link>
            <Link href="/join" className="mcc-header-join">Join the Chamber <ArrowRight size={14} /></Link>
            <button type="button" className="mcc-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mcc-reference-footer">
      <div className="container">
        <div className="mcc-footer-grid">
          <div className="mcc-footer-brand">
            <Link href="/" className="mcc-brand">
              <Image src="/icons/mccl-icon.svg" alt="" width={54} height={54} />
              <span><strong>Mengo Chamber</strong><b>of Commerce Limited</b><small>Building for a Prosperous Buganda</small></span>
            </Link>
            <p>Connecting people, businesses and opportunities for a prosperous, competitive and inclusive Buganda.</p>
            <div className="mcc-socials"><span>f</span><span>𝕏</span><span>in</span><span>▶</span><span>◎</span></div>
          </div>
          <div><h2>Quick Links</h2><Link href="/">Home</Link><Link href="/about">About MCCL</Link><Link href="/centres">The Kingdom</Link><Link href="/leadership">Leadership</Link><Link href="/membership">Membership</Link><Link href="/exchange">Opportunities</Link></div>
          <div><h2>Our Focus</h2><Link href="/services">Agriculture</Link><Link href="/training">Education</Link><Link href="/insights">Health</Link><Link href="/invest">Tourism</Link><Link href="/businesses">SACCOs & Cooperatives</Link><Link href="/exchange">Trade & Investment</Link></div>
          <div><h2>Support</h2><Link href="/events-calendar">News & Events</Link><Link href="/policy-advocacy">Publications</Link><Link href="/governance">Gallery</Link><Link href="/insights">FAQs</Link><Link href="/contact">Contact Us</Link><Link href="/join">Join the Chamber</Link></div>
          <div className="mcc-footer-newsletter"><h2>Newsletter</h2><p>Subscribe for the latest updates</p><form action="/contact"><input type="email" name="email" aria-label="Email address" placeholder="Email address" required /><button type="submit">Subscribe <ArrowRight size={14} /></button></form></div>
        </div>
        <div className="mcc-footer-bottom"><span>© 2025 Mengo Chamber of Commerce Limited. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/accessibility">Accessibility</Link></span></div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><Header /><div id="main-content">{children}</div><Footer /></>;
}

export function PageHero({ title, description }: { title: string; description: string }) {
  return <section className="pagehero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / {title}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
