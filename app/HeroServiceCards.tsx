"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, BriefcaseBusiness, Handshake, RotateCcw, Scale } from "lucide-react";
import { useEffect, useState } from "react";

const heroServices = [
  {
    title: "Trade & investment",
    description: "Business linkages, trade missions, investment connections and market access pathways.",
    href: "/trade-investment",
    image: "/images/kampala-market.jpg",
    icon: Handshake,
  },
  {
    title: "Business development",
    description: "Practical advisory, enterprise capability and growth support for businesses at every stage.",
    href: "/business-advisory",
    image: "/images/buganda-royal-palace.jpg",
    icon: BriefcaseBusiness,
  },
  {
    title: "Advocacy & research",
    description: "Evidence-led representation for a fairer, more enabling business environment.",
    href: "/policy-advocacy",
    image: "/images/buganda-traditional-wear.jpg",
    icon: Scale,
  },
  {
    title: "Market intelligence",
    description: "Business information, sector insight and data that support better decisions.",
    href: "/intelligence",
    image: "/images/buganda-gomesi.jpg",
    icon: BarChart3,
  },
];

export function HeroServiceCards() {
  const [activeCard, setActiveCard] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rotation = window.setInterval(() => setActiveCard((current) => (current + 1) % heroServices.length), 4600);
    return () => window.clearInterval(rotation);
  }, [paused]);

  return (
    <div className="bp-hero-service-grid" aria-label="Explore Chamber services" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {heroServices.map(({ title, description, href, image, icon: Icon }, index) => {
        const isFlipped = activeCard === index;
        return (
          <article className="bp-hero-service-card" key={title}>
            <div className={isFlipped ? "bp-hero-service-card-inner is-flipped" : "bp-hero-service-card-inner"}>
              <button type="button" className="bp-hero-service-face bp-hero-service-front" onClick={() => setActiveCard(index)} aria-pressed={isFlipped} aria-label={`Show ${title} details`}>
                <img src={image} alt="" loading="lazy" />
                <span className="bp-hero-service-front-overlay" />
                <span className="bp-hero-service-front-copy"><Icon size={22} /><strong>{title}</strong><small>Discover service <ArrowRight size={13} /></small></span>
              </button>
              <div className="bp-hero-service-face bp-hero-service-back">
                <Icon size={23} /><h2>{title}</h2><p>{description}</p>
                <Link href={href}>Explore service <ArrowRight size={14} /></Link>
                <button type="button" onClick={() => setActiveCard((index + 1) % heroServices.length)} aria-label={`Show the next Chamber service`}><RotateCcw size={13} /> Next service</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
