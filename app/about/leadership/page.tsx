import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Shell } from "../../components";
import { ResponsivePhoto } from "../../ResponsivePhoto";
import { realPhotos, type ChamberPhoto } from "../../realPhotos";
import "./leadership.css";

type Leader = {
  name: string;
  role: string;
  photo?: ChamberPhoto;
  affiliation?: string;
};

const chair: Leader = {
  name: "Omuk. John Fred Freeman Kiyimba",
  role: "Chairman",
  photo: realPhotos.chamberChairKiyimba,
};
const vice: Leader = {
  name: "Owek. Steven Kayiwa",
  role: "Vice Chairman",
  photo: realPhotos.chamberViceChairKayiwa,
};
const members: Leader[] = [
  { name: "Omuk. Sarah Kironde Ssemanda", role: "Member", photo: realPhotos.chamberMemberSarahSsemanda },
  { name: "Owek. Ritah Namyalo", role: "Member" },
  { name: "Omuk. Robert Nsereko", role: "Member" },
  { name: "Hajji Musa Mugere", role: "Member", photo: realPhotos.chamberMemberMusaMugere },
  { name: "Francis Asisi Kimbowa", role: "Secretary", affiliation: "Buganda Royal Law Chambers" },
];

function LeaderPortrait({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  if (!leader.photo) return null;

  return (
    <figure className={featured ? "mcl-portrait mcl-portrait--featured" : "mcl-portrait mcl-portrait--board"}>
      <ResponsivePhoto
        photo={leader.photo}
        width={600}
        height={900}
        sizes={featured ? "(max-width: 820px) 90vw, 340px" : "(max-width: 680px) 90vw, (max-width: 1040px) 44vw, 340px"}
        loading={featured ? "eager" : "lazy"}
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </figure>
  );
}

function FeaturedLeader({ leader, variant }: { leader: Leader; variant: "chair" | "vice" }) {
  return (
    <article className={variant === "chair" ? "mcl-feature mcl-feature--chair" : "mcl-feature mcl-feature--vice"}>
      <LeaderPortrait leader={leader} featured />
      <div className="mcl-feature-copy">
        <p className="mcl-role">{leader.role}</p>
        <h3>{leader.name}</h3>
        <p className="mcl-feature-institution">Mengo Chamber of Commerce Limited</p>
      </div>
    </article>
  );
}

export const metadata = {
  title: "Our Leadership | Mengo Chamber of Commerce Limited",
  description: "Meet the Chairman, Vice Chairman and Board members of Mengo Chamber of Commerce Limited.",
};

export default function Leadership() {
  return (
    <Shell>
      <main className="mcl-page">
        <header className="mcl-intro">
          <div className="bp-shell">
            <nav className="mcl-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/about">About the Chamber</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Leadership</span>
            </nav>
            <p className="mcl-kicker">Mengo Chamber of Commerce Limited</p>
            <h1>Our leadership</h1>
            <p className="mcl-intro-text">
              Meet the Chamber’s leadership and Board members, and explore its governance
              information and official contact channels.
            </p>
          </div>
        </header>

        <section className="mcl-leadership" aria-labelledby="mcl-leadership-title">
          <div className="bp-shell">
            <div className="mcl-section-heading">
              <p className="mcl-kicker">Chamber leadership</p>
              <h2 id="mcl-leadership-title">The people leading MCCL</h2>
            </div>
            <div className="mcl-feature-grid">
              <FeaturedLeader leader={chair} variant="chair" />
              <FeaturedLeader leader={vice} variant="vice" />
            </div>
          </div>
        </section>

        <section className="mcl-board" aria-labelledby="mcl-board-title">
          <div className="bp-shell">
            <div className="mcl-section-heading mcl-section-heading--board">
              <div>
                <p className="mcl-kicker">Board of Directors</p>
                <h2 id="mcl-board-title">Board members</h2>
              </div>
              <p>Members are listed with their current published Chamber roles. Additional portraits and professional profiles can be added when officially provided.</p>
            </div>
            <div className="mcl-board-grid">
              {members.map((person) => (
                <article
                  className={person.photo ? "mcl-board-card mcl-board-card--photo" : "mcl-board-card mcl-board-card--text"}
                  key={person.name}
                >
                  {person.photo && <LeaderPortrait leader={person} />}
                  <div className="mcl-board-card-copy">
                    {!person.photo && <span className="mcl-text-card-label">Chamber board</span>}
                    <p className="mcl-role">{person.role}</p>
                    <h3>{person.name}</h3>
                    {person.affiliation && <p className="mcl-affiliation">{person.affiliation}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mcl-governance" aria-labelledby="mcl-governance-title">
          <div className="bp-shell mcl-governance-inner">
            <div>
              <p className="mcl-kicker">Governance &amp; enquiries</p>
              <h2 id="mcl-governance-title">Learn more about the Chamber</h2>
            </div>
            <div className="mcl-governance-content">
              <p>For information about MCCL’s governance structure, institutional responsibilities or official leadership enquiries, use the Chamber’s published resources and contact page.</p>
              <div className="mcl-governance-links">
                <Link href="/governance">Governance &amp; accountability <ArrowUpRight size={17} aria-hidden="true" /></Link>
                <Link href="/contact">Contact the Chamber <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
