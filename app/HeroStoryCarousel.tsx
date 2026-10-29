"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { realPhotos } from "./realPhotos";

const stories = [
  {
    label: "CHAMBER NEWS",
    title: "Trade exhibitions can unlock business growth",
    description: "Board Chairperson John Fred Kiyimba Freeman encourages business owners to participate in trade exhibitions to expand their enterprises and unlock opportunities.",
    href: "/insights/trade-exhibitions-business-growth",
    photo: {src: "https://nilepost.co.ug/new_cms/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-16.24.35-1.jpeg", alt: "Mengo Chamber delegation photographed at Bulange during the meeting on trade exhibitions", position: "center 43%"},
  },
  {
    label: "BUSINESS & TRADE",
    title: "Connecting enterprise with opportunity",
    description: "A business forum brings together people working across enterprise and markets.",
    href: "/services",
    photo: realPhotos.businessForum,
  },
  {
    label: "AGRIBUSINESS",
    title: "Supporting value addition and trade",
    description: "Coffee products from Mwanyi Terimba illustrate opportunities for local enterprise and value addition.",
    href: "/economy",
    photo: realPhotos.coffeeProducts,
  },
] as const;

export function HeroStoryCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);
  useEffect(() => {
    if (paused || !pageVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((index) => (index + 1) % stories.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, pageVisible, active]);
  const next = () => setActive((index) => (index + 1) % stories.length);
  const previous = () => setActive((index) => (index - 1 + stories.length) % stories.length);
  return (
    <div className="mc-hero-slider" style={{ backgroundImage: `url("${stories[active].photo.src}")`, backgroundPosition: stories[active].photo.position ?? "center" }} aria-roledescription="carousel" aria-label="Chamber stories" onFocusCapture={() => setPaused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}>
      <div className="mc-hero-slider-photo">
        {stories.map((story, index) => (
          <img key={story.photo.src} src={story.photo.src} alt={story.photo.alt} className={index === active ? "is-active" : ""} style={{ objectPosition: story.photo.position }} width="880" height="588" aria-hidden={index !== active} />
        ))}
      </div>
      <div className="mc-hero-slider-detail" aria-live="off">
        <p className="mc-hero-slider-label">{stories[active].label}</p>
        <h3>{stories[active].title}</h3>
        <p className="mc-hero-slider-description">{stories[active].description}</p>
        <div className="mc-hero-slider-bottom">
          <Link href={stories[active].href}>READ MORE <ArrowRight size={15} aria-hidden="true" /></Link>
          <div className="mc-hero-slider-controls" aria-label="Slide navigation">
            <button type="button" onClick={previous} aria-label="Previous story"><ChevronLeft size={19}/></button>
            <span aria-label={`Story ${active + 1} of ${stories.length}`}>{String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</span>
            <button type="button" onClick={next} aria-label="Next story"><ChevronRight size={19}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
