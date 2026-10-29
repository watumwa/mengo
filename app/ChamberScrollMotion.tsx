"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement-only reveals.
 * All content stays visible before hydration, without JS, or with reduced motion.
 * Each element animates once as it enters view, with one observer per route.
 */
const revealSelector = [
  ".bp-editorial-page .bp-editorial-heading",
  ".bp-editorial-page .bp-editorial-intro-split",
  ".bp-editorial-page .bp-editorial-media figure",
  ".bp-editorial-page .bp-editorial-card-grid article",
  ".bp-editorial-page .bp-related-photo-grid figure",
  ".bp-editorial-page .bp-editorial-cta .bp-shell",
  ".mc-client-gallery-card",
  ".mc-nema-quick-grid > a",
  ".mc-nema-priority-grid > *",
  ".mc-nema-explore-grid > *",
  "[data-chamber-reveal]",
].join(", ");

export function ChamberScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("chamber-is-visible");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -28px 0px", threshold: 0.08 });

    targets.forEach((element, index) => {
      element.classList.add("chamber-scroll-reveal");
      element.style.setProperty("--chamber-reveal-delay", `${(index % 3) * 65}ms`);
      observer.observe(element);
    });
    document.documentElement.setAttribute("data-chamber-motion", "ready");

    return () => {
      observer.disconnect();
      document.documentElement.removeAttribute("data-chamber-motion");
      for (const element of targets) {
        element.classList.remove("chamber-scroll-reveal", "chamber-is-visible");
        element.style.removeProperty("--chamber-reveal-delay");
      }
    };
  }, [pathname]);

  return null;
}
