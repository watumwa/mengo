"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import { useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
  items?: Array<{ label: string; href: string; description: string }>;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Kingdom", href: "/kingdom", items: [
    { label: "Kingdom overview", href: "/kingdom", description: "Heritage, institutions and economic identity" },
    { label: "History & Heritage", href: "/kingdom/history", description: "Context, eras and cultural continuity" },
    { label: "Kingdom Leadership", href: "/kingdom/leadership", description: "Roles and official reference links" },
    { label: "Masaza & Gombolola", href: "/kingdom/masaza", description: "Traditional county explorer" },
    { label: "Kingdom Institutions", href: "/kingdom/institutions", description: "Documented institutional profiles" },
    { label: "Culture & Tourism", href: "/kingdom/culture-tourism", description: "Places, heritage and visitor context" },
  ] },
  { label: "Chamber", href: "/about", items: [
    { label: "Our Story & Mandate", href: "/about", description: "MCCL's role and institutional purpose" },
    { label: "Leadership & Governance", href: "/about/leadership", description: "Leadership and institutional roles" },
    { label: "Interactive Organogram", href: "/governance#interactive-organogram", description: "Explore roles, committees and animated governance connections" },
    { label: "Our Strategy", href: "/strategy", description: "Vision, priorities and business impact" },
    { label: "Membership", href: "/membership", description: "Who can join and how to participate" },
    { label: "Services", href: "/services", description: "Confirmed Chamber support pathways" },
  ] },
  { label: "Economy", href: "/economy", items: [
    { label: "Economic Sectors", href: "/economy/sectors", description: "Sectors, institutions and context" },
    { label: "Business Directory", href: "/businesses", description: "Enterprise and sector information" },
    { label: "SACCOs & Cooperatives", href: "/cooperatives", description: "Cooperative enterprise discovery" },
    { label: "Commercial Centres", href: "/commercial-centres", description: "Markets and trading areas" },
    { label: "Economic Map", href: "/economic-map", description: "Regional business geography" },
    { label: "Regional Chamber Clusters", href: "/centres", description: "Interact with the six Amabendobendo and 18 Ssaza" },
  ] },
  { label: "Invest", href: "/invest", items: [
    { label: "Trade & Investment", href: "/invest", description: "Sectors, partnerships and market links" },
    { label: "Trade Opportunities", href: "/opportunities", description: "Trade and partnership information" },
    { label: "Investor Enquiries", href: "/contact?subject=investment", description: "Start an investment conversation" },
  ] },
  { label: "Updates", href: "/insights", items: [
    { label: "Latest News", href: "/insights", description: "Business stories and updates" },
    { label: "Events Calendar", href: "/events-calendar", description: "Forums, workshops and networking" },
    { label: "Publications & Reports", href: "/publications", description: "Research and strategic information" },
  ] },
  { label: "Contact", href: "/contact" },
];

const socialPlatforms = [
  { name: "Facebook", icon: "/images/social/facebook.svg" },
  { name: "Instagram", icon: "/images/social/instagram.svg" },
  { name: "X", icon: "/images/social/x.svg" },
  { name: "LinkedIn", icon: "/images/social/linkedin.svg" },
  { name: "YouTube", icon: "/images/social/youtube.svg" },
] as const;

function Brand({ onClick, compact = false }: { onClick?: () => void; compact?: boolean }) {
  const crest = compact ? "/images/buganda-kingdom-crest-mark.png" : "/images/buganda-kingdom-crest.png";
  return <Link href="/" className={compact ? "bp-brand bp-brand-compact" : "bp-brand"} onClick={onClick} aria-label="Mengo Chamber of Commerce Limited home"><Image src={crest} alt="" width={64} height={64} priority /><span><strong>Mengo Chamber</strong><b>of Commerce Limited</b><small>Uplifting Livelihoods</small></span></Link>;
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroups, setMobileGroups] = useState<string[]>([]);
  const close = () => { setOpenMenu(null); setMobileOpen(false); };
  const toggleMobileGroup = (label: string) => setMobileGroups((groups) => groups.includes(label) ? groups.filter((group) => group !== label) : [...groups, label]);

  return <header className="bp-header">
    <a className="bp-skip-link" href="#main-content">Skip to content</a>
    <div className="bp-utility-bar"><div className="bp-shell bp-utility-content"><p>Obwakabaka bwa Buganda <span className="bp-utility-separator" aria-hidden="true">•</span> <span className="bp-utility-translation">Kingdom of Buganda</span></p><div className="bp-utility-socials" aria-label="Mengo Chamber social media">
      {socialPlatforms.map(({ name, icon }) => (
        <span key={name} className="bp-social-brand" role="img" aria-label={`${name} — official profile link to be added`} title={`${name} — official profile link to be added`}>
          <Image src={icon} alt="" width={19} height={19} unoptimized aria-hidden="true" />
        </span>
      ))}
    </div></div></div>
    <div className="bp-nav-wrap"><div className="bp-shell bp-nav"><Brand onClick={close} compact/><nav className="bp-desktop-nav" aria-label="Primary navigation">{navigation.map((entry) => entry.items ? <div className="bp-nav-group" key={entry.label} onMouseLeave={() => setOpenMenu(null)}><button type="button" className="bp-nav-trigger" onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)} aria-haspopup="true" aria-expanded={openMenu === entry.label}>{entry.label} <ChevronDown size={14} aria-hidden="true"/></button><div className={openMenu === entry.label ? "bp-mega-menu is-open" : "bp-mega-menu"}><Link href={entry.href} className="bp-mega-intro" onClick={close}><span>Explore</span><strong>{entry.label}</strong><small>Start with the overview <ArrowRight size={14}/></small></Link><div className="bp-mega-links">{entry.items.map((item) => <Link href={item.href} key={item.href} onClick={close}><strong>{item.label}</strong><small>{item.description}</small></Link>)}</div></div></div> : <Link href={entry.href} className="bp-nav-link" key={entry.label} onClick={close}>{entry.label}</Link>)}</nav><div className="bp-nav-actions"><Link className="bp-search-button" href="/search" aria-label="Search the website"><Search size={19}/></Link><Link className="bp-join-button" href="/membership">Join the Chamber <ArrowRight size={15}/></Link><button type="button" className="bp-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X/> : <Menu/>}</button></div></div><nav className={mobileOpen ? "bp-mobile-nav is-open" : "bp-mobile-nav"} aria-label="Mobile navigation"><div className="bp-shell">{navigation.map((entry) => entry.items ? <div className="bp-mobile-group" key={entry.label}><div><Link href={entry.href} onClick={close}>{entry.label}</Link><button type="button" onClick={() => toggleMobileGroup(entry.label)} aria-label={`Show ${entry.label} pages`} aria-expanded={mobileGroups.includes(entry.label)}><ChevronDown size={18}/></button></div><div className={mobileGroups.includes(entry.label) ? "bp-mobile-subnav is-open" : "bp-mobile-subnav"}>{entry.items.map((item) => <Link href={item.href} key={item.href} onClick={close}><ChevronRight size={14}/>{item.label}</Link>)}</div></div> : <Link className="bp-mobile-direct" href={entry.href} key={entry.label} onClick={close}>{entry.label}</Link>)}<Link href="/membership" className="bp-mobile-join" onClick={close}>Join the Chamber <ArrowRight size={16}/></Link></div></nav></div>
  </header>;
}

const footerColumns = [
  { title: "Discover", links: [["Our Kingdom", "/kingdom"], ["Buganda Economy", "/economy"], ["Investment & Opportunities", "/invest"], ["News & Events", "/insights"], ["Economic Map", "/economic-map"]] },
  { title: "The Chamber", links: [["Our Story & Mandate", "/about"], ["Membership", "/membership"], ["Services", "/services"], ["Our Strategy", "/strategy"], ["Contact", "/contact"]] },
  { title: "Resources", links: [["Publications", "/publications"], ["Business Directory", "/businesses"], ["Commercial Centres", "/commercial-centres"], ["Accessibility", "/accessibility"], ["Privacy", "/privacy"]] },
];

export function Footer() { return <footer className="bp-footer"><div className="bp-shell"><div className="bp-footer-grid"><div className="bp-footer-brand"><Brand/><p>Mengo Chamber of Commerce Limited is a business-facing institution that helps showcase, connect and enable enterprise participation across Buganda.</p><Link href="/contact" className="bp-footer-contact">Contact information <ArrowRight size={15}/></Link></div>{footerColumns.map((column) => <div key={column.title}><h2>{column.title}</h2>{column.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>)}<div className="bp-footer-note"><h2>Stay informed</h2><p>Explore the Chamber's business themes, event information and publications.</p><Link href="/insights">Explore news and insights <ArrowRight size={15}/></Link></div></div><div className="bp-footer-bottom"><span>© 2026 Mengo Chamber of Commerce Limited. All rights reserved.</span></div></div></footer>; }

export function Shell({ children }: { children: React.ReactNode }) { return <><Header/><div id="main-content">{children}</div><Footer/></>; }

export function PageHero({ title, description, eyebrow = "Mengo Chamber of Commerce Limited" }: { title: string; description: string; eyebrow?: string }) { return <section className="bp-page-hero"><div className="bp-shell"><p className="bp-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div></section>; }
