"use client";

import { useState } from "react";
import { ArrowRight, Building2, Crown, GitBranch, Info, Network, UsersRound } from "lucide-react";
import Link from "next/link";
import styles from "./InteractiveOrganogram.module.css";

type OrgUnit = { id: string; title: string; short?: string; function: string; detail: string; group: string };

const units: OrgUnit[] = [
  { id: "patron", title: "Kabaka of Buganda", short: "Patron & Founder", group: "Patronage", function: "Patron and Founder", detail: "The strategic-plan organogram places the Kabaka at the top as Patron and Founder of the Chamber." },
  { id: "ministry", title: "Ministry of Agriculture, Co-operatives, Commerce & Fisheries", short: "Sectoral relationship", group: "Institutional links", function: "Policy oversight and sector support", detail: "This is shown as an institutional relationship, not a Chamber staff appointment." },
  { id: "bicul", title: "Buganda Investment & Commercial Undertakings Limited (BICUL)", short: "Institutional relationship", group: "Institutional links", function: "Business and institutional linkages", detail: "The strategic plan depicts BICUL as an institutional partner in the governance framework." },
  { id: "annual", title: "Annual Stakeholders Meeting", short: "Consultative forum", group: "Governance", function: "Supreme consultative forum", detail: "A forum for representation, consultation and discussion of the Chamber's strategic direction. This does not imply a current meeting schedule." },
  { id: "board", title: "Board of Directors", short: "Strategic oversight", group: "Governance", function: "Strategic leadership and oversight", detail: "Responsible for the Chamber's strategic direction, board-level supervision, policy review and institutional oversight." },
  { id: "committees", title: "Board Committees", short: "Technical and policy support", group: "Governance", function: "Specialised Board support", detail: "The proposed committees cover membership drive and marketing; trade and investment promotion; finance, economics, policy and statistics; ethics and best practices; and public affairs." },
  { id: "secretariat", title: "The Secretariat", short: "Day-to-day management", group: "Execution", function: "Chief executive office and implementation", detail: "Responsible for day-to-day management and implementing the Board's decisions and policies." },
  { id: "support", title: "Support Services", short: "Administration & operations", group: "Specialised divisions", function: "Internal administration", detail: "Administration, human resources, finance, ICT, procurement and facilities management." },
  { id: "commercial", title: "Commercial Services", short: "Business development", group: "Specialised divisions", function: "Enterprise-facing services", detail: "Membership engagement, business advisory, events, sponsorship, marketing and branding." },
  { id: "research", title: "Research, Policy & Economic Development", short: "Data, policy & research", group: "Specialised divisions", function: "Research and economic analysis", detail: "Research, policy analysis, economic data and statistics, business intelligence and related research functions." },
  { id: "international", title: "International Business Affairs", short: "Trade & partnerships", group: "Specialised divisions", function: "International commercial relationships", detail: "International relations, trade facilitation, export promotion and strategic partnerships." },
  { id: "social", title: "Corporate Social Responsibility & Community Impact", short: "Community development", group: "Specialised divisions", function: "Social responsibility and inclusion", detail: "CSR programmes, sustainability, inclusive business and community development." },
  { id: "clusters", title: "Regional Chamber Cluster Committees", short: "Amabendobendo", group: "Member network", function: "Regional coordination", detail: "Six proposed regional clusters connect county committees and local enterprise representation across Buganda." },
  { id: "city", title: "City Chamber Committees", short: "City-level coordination", group: "Member network", function: "City enterprise engagement", detail: "The plan identifies Kampala and Masaka City Committees within the regional cluster framework." },
  { id: "county", title: "County Chamber Committees", short: "Ssaza-level coordination", group: "Member network", function: "County enterprise mobilisation", detail: "Coordinate and represent enterprises, business interests and local Chamber activities within each constituent Ssaza." },
  { id: "subcounty", title: "Sub-County Chamber Committees", short: "Grassroots representation", group: "Member network", function: "Community-level engagement", detail: "Member identification, grassroots mobilisation, enterprise support and local business representation." },
  { id: "members", title: "Enrolled Chamber Members", short: "The heart of the Chamber", group: "Member network", function: "Membership and participation", detail: "Enterprises and individuals enrolled in the Chamber. The plan presents members as the foundation of its business community." },
];
const index = new Map(units.map(unit => [unit.id, unit]));
function getUnit(id: string): OrgUnit {
  const unit = index.get(id);
  if (!unit) throw new Error("Missing organogram unit: " + id);
  return unit;
}
function Node({ id, selected, onSelect, compact = false }: { id: string; selected: boolean; onSelect: (id: string) => void; compact?: boolean }) {
  const unit = getUnit(id);
  return (
    <button
      type="button"
      className={[styles.node, compact ? styles.compact : "", selected ? styles.active : ""].join(" ")}
      aria-pressed={selected}
      onClick={() => onSelect(id)}
    >
      <strong>{unit.title}</strong>
      <span>{unit.short}</span>
      <span className={styles.nodeAction}>View role <ArrowRight size={14} aria-hidden="true" /></span>
    </button>
  );
}
function Flow({ label = "Structural connection" }: { label?: string }) {
  return (
    <div className={styles.flow} role="img" aria-label={label}>
      <svg viewBox="0 0 40 48" aria-hidden="true">
        <path className={styles.track} d="M20 0 V38" />
        <path className={styles.travelling} d="M20 0 V38" />
        <path className={styles.tip} d="M13 31 L20 39 L27 31" />
      </svg>
    </div>
  );
}

export function InteractiveOrganogram() {
  const [selected, setSelected] = useState("board");
  const active = getUnit(selected);
  const select = (id: string) => setSelected(id);
  return (
    <section id="interactive-organogram" className={styles.section} aria-labelledby="organogram-heading">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}><Network size={16} aria-hidden="true" /> STRATEGIC PLAN · PAGE 32</p>
            <h2 id="organogram-heading">An institution built to connect.</h2>
            <p>Explore the Chamber's planned governance and service structure. Select any office, committee or division to understand its place in the framework.</p>
          </div>
          <Link className={styles.exploreLink} href="/centres">Explore the six regional clusters <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className={styles.statusLine}><span className={styles.liveDot} aria-hidden="true" /> INTERACTIVE ORGANISATIONAL STRUCTURE <span className={styles.statusSecondary}>Animated lines show organisational connections, not live personnel movements.</span></div>

        <div className={styles.chart} aria-label="Mengo Chamber organisational chart">
          <div className={styles.single}><Node id="patron" selected={selected === "patron"} onSelect={select}/></div>
          <div className={styles.partnerRow}>
            <div><span className={styles.partnerLabel}><Crown size={14} aria-hidden="true" /> INSTITUTIONAL RELATIONSHIPS</span></div>
            <div className={styles.partners}>
              <Node id="ministry" selected={selected === "ministry"} onSelect={select} compact/>
              <Node id="bicul" selected={selected === "bicul"} onSelect={select} compact/>
            </div>
          </div>
          <Flow label="Patronage connection to the governance structure" />
          <div className={styles.three}>
            <Node id="annual" selected={selected === "annual"} onSelect={select}/>
            <Node id="board" selected={selected === "board"} onSelect={select}/>
            <Node id="committees" selected={selected === "committees"} onSelect={select}/>
          </div>
          <p className={styles.relationCaption}><GitBranch size={15} aria-hidden="true"/> Consultation, strategic oversight and specialist committee support</p>
          <Flow label="Board oversight to Secretariat implementation" />
          <div className={styles.single}><Node id="secretariat" selected={selected === "secretariat"} onSelect={select}/></div>
          <Flow label="Secretariat coordinating five specialised service divisions"/>
          <p className={styles.tierHeading}><Building2 size={16} aria-hidden="true"/> FIVE SPECIALISED SERVICE DIVISIONS</p>
          <div className={styles.divisions}>
            {["support","commercial","research","international","social"].map(id=><Node key={id} id={id} selected={selected===id} onSelect={select} compact/>)}
          </div>
          <Flow label="Service divisions linked to regional and member networks"/>
          <p className={styles.tierHeading}><UsersRound size={16} aria-hidden="true"/> REGIONAL AND MEMBER REPRESENTATION</p>
          <div className={styles.single}><Node id="clusters" selected={selected==="clusters"} onSelect={select}/></div>
          <Flow label="Regional cluster coordination with city and county committees"/>
          <div className={styles.two}>
            <Node id="city" selected={selected==="city"} onSelect={select}/>
            <Node id="county" selected={selected==="county"} onSelect={select}/>
          </div>
          <Flow label="Local committees reaching sub-county level"/>
          <div className={styles.single}><Node id="subcounty" selected={selected==="subcounty"} onSelect={select}/></div>
          <Flow label="Chamber representation connecting with enrolled members"/>
          <div className={styles.single}><Node id="members" selected={selected==="members"} onSelect={select}/></div>
        </div>

        <aside className={styles.details} aria-labelledby="org-detail-heading" aria-live="polite">
          <span className={styles.detailIcon}><Info size={22} aria-hidden="true" /></span>
          <div key={selected}>
            <p>{active.group} · Selected unit</p>
            <h3 id="org-detail-heading">{active.title}</h3>
            <strong>{active.function}</strong>
            <p>{active.detail}</p>
            {selected==="clusters"&&<Link href="/centres">Open interactive cluster explorer <ArrowRight size={15} aria-hidden="true"/></Link>}
          </div>
        </aside>
        <p className={styles.note}>Based on the MCCL 2026–2029 Strategic Plan, printed page 32. This is an interactive representation of the plan, not a verified directory of current officeholders, staff appointments or operational committees.</p>
      </div>
    </section>
  );
}
