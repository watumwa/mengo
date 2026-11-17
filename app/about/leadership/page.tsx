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

function Portrait({ leader, sizes }: { leader: Leader; sizes: string }) {
  if (!leader.photo) return null;

  return (
    <figure className="mcl-portrait">
      <ResponsivePhoto
        photo={leader.photo}
        width={600}
        height={900}
        sizes={sizes}
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </figure>
  );
}

function LeadershipProfile({ leader, rank }: { leader: Leader; rank: "chair" | "vice" }) {
  return (
    <article className={"mcl-leader mcl-leader--" + rank}>
      <Portrait leader={leader} sizes="(max-width: 620px) 36vw, 210px" />
      <div className="mcl-leader-copy">
        <p className="mcl-position">{leader.role}</p>
        <h3>{leader.name}</h3>
        <p className="mcl-affiliation">Mengo Chamber of Commerce Limited</p>
      </div>
    </article>
  );
}

function BoardProfile({ leader }: { leader: Leader }) {
  return (
    <article className={"mcl-member" + (leader.photo ? " mcl-member--photo" : " mcl-member--text")}>
      {leader.photo ? (
        <Portrait leader={leader} sizes="(max-width: 650px) 40vw, (max-width: 1020px) 42vw, 340px" />
      ) : (
        <div className="mcl-member-type" aria-hidden="true">MCCL</div>
      )}
      <div className="mcl-member-info">
        <p className="mcl-position">{leader.role}</p>
        <h3>{leader.name}</h3>
        {leader.affiliation && <p className="mcl-affiliation">{leader.affiliation}</p>}
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
            <div className="mcl-intro-grid">
              <div>
                <p className="mcl-eyebrow">Mengo Chamber of Commerce Limited</p>
                <h1>Our leadership</h1>
              </div>
              <p>
                Meet the people serving in the Chamber's published leadership
                and Board positions.
              </p>
            </div>
          </div>
        </header>

        <section className="mcl-structure" aria-labelledby="mcl-structure-title">
          <div className="bp-shell">
            <div className="mcl-structure-heading">
              <p className="mcl-eyebrow">Chamber leadership</p>
              <h2 id="mcl-structure-title">Leadership at a glance</h2>
              <p className="mcl-structure-note">
                This diagram groups published positions for easy reference;
                it does not define formal reporting relationships.
              </p>
            </div>

            <div className="mcl-org-chart">
              <div className="mcl-level mcl-level--chair">
                <LeadershipProfile leader={chair} rank="chair" />
              </div>

              <div className="mcl-chart-connector" aria-hidden="true" />

              <div className="mcl-level mcl-level--vice">
                <LeadershipProfile leader={vice} rank="vice" />
              </div>

              <div className="mcl-board-heading">
                <span className="mcl-board-rule" aria-hidden="true" />
                <div>
                  <p className="mcl-eyebrow">Board of Directors</p>
                  <h2 id="mcl-board-title">Board members</h2>
                </div>
                <span className="mcl-board-rule" aria-hidden="true" />
              </div>

              <div className="mcl-board-branches" aria-hidden="true" />

              <div className="mcl-member-grid" aria-labelledby="mcl-board-title">
                {members.map((leader) => (
                  <BoardProfile key={leader.name} leader={leader} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mcl-governance" aria-labelledby="mcl-governance-title">
          <div className="bp-shell mcl-governance-grid">
            <div>
              <p className="mcl-eyebrow">Governance and enquiries</p>
              <h2 id="mcl-governance-title">More about the Chamber</h2>
            </div>
            <div>
              <p>
                Explore the Chamber's governance information or contact its
                office for verified leadership and institutional enquiries.
                Additional official portraits and profiles can be added as they become available.
              </p>
              <div className="mcl-governance-links">
                <Link href="/governance">
                  Governance &amp; accountability <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/contact">
                  Contact the Chamber <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
