"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Commitment = {
  name: string;
  text: string;
  href: string;
};

export function AboutCommitments({ priorities }: { priorities: Commitment[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const active = priorities[activeIndex];

  if (!active) return null;

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % priorities.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + priorities.length) % priorities.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = priorities.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className="mc-about-v2-priority-explorer">
      <div className="mc-about-v2-priority-tabs" role="tablist" aria-label="Explore the Chamber's five commitments">
        {priorities.map((priority, index) => (
          <button
            key={priority.name}
            ref={(button) => { buttons.current[index] = button; }}
            id={"mc-about-v2-tab-" + index}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="mc-about-v2-priority-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            className={"mc-about-v2-priority-tab" + (activeIndex === index ? " is-selected" : "")}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            <span aria-hidden="true">0{index + 1}</span>
            <strong>{priority.name}</strong>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div
        id="mc-about-v2-priority-panel"
        className="mc-about-v2-priority-detail"
        role="tabpanel"
        aria-labelledby={"mc-about-v2-tab-" + activeIndex}
        tabIndex={0}
      >
        <p className="mc-about-v2-priority-overline">Our commitment · 0{activeIndex + 1} / 05</p>
        <h3>{active.name}</h3>
        <p>{active.text}</p>
        <Link href={active.href}>
          Explore {active.name.toLowerCase()} <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
