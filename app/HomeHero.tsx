import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="reference-hero" aria-labelledby="home-hero-title">
      <div className="container reference-hero-content">
        <p className="reference-kicker">Heritage · Enterprise · Opportunity</p>
        <h1 id="home-hero-title">Building a Prosperous<br />Buganda Together</h1>
        <p className="reference-hero-copy">
          The Mengo Chamber of Commerce Limited connects people, businesses,
          and opportunities to drive trade, investment and sustainable
          development across Buganda.
        </p>
        <div className="reference-hero-actions">
          <Link href="/join" className="reference-gold-button">
            Join the Chamber <ArrowRight size={16} />
          </Link>
          <Link href="/centres" className="reference-outline-button">
            Explore Buganda
          </Link>
        </div>
        <div className="reference-hero-pagination" aria-label="Hero slide 1 of 3">
          <strong>01</strong><span>/ 03</span>
          <button type="button" aria-label="Previous feature"><ChevronLeft size={16} /></button>
          <button type="button" aria-label="Next feature"><ChevronRight size={16} /></button>
        </div>
      </div>
      <p className="reference-hero-location">Mengo, Kampala<br /><span>Seat of the Buganda Kingdom</span></p>
    </section>
  );
}
