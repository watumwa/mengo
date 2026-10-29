import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Shell } from "../components";
import { RegionalClusterExplorer } from "../RegionalClusterExplorer";
import { PhotoMoments } from "../PhotoMoments";
import { realPhotos } from "../realPhotos";

export default function RegionalCentres() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Regional Chamber Network"
          title="Explore the Amabendobendo"
          description="Interact with the six Regional Chamber Clusters and the Ssaza that make up the Chamber's regional representation framework."
        />
        <RegionalClusterExplorer/>
        <PhotoMoments
          label="Community and commercial activity in Buganda"
          items={[
            { photo: realPhotos.marketStalls, caption: "Trading activity from the REXBA photograph collection" },
            { photo: realPhotos.pewosaAgriculture, caption: "Agricultural enterprise activity at a CBS PEWOSA event" },
            { photo: realPhotos.coffeeExport, caption: "Coffee exports from the Mwanyi Terimba collection" },
          ]}
        />
        <section className="bp-editorial-cta"><div className="bp-shell"><div>
          <p className="bp-eyebrow">UNDERSTAND THE STRUCTURE</p>
          <h2>From institutional governance to local enterprise.</h2>
          <p>See how the organisational framework links the Secretariat, specialised service divisions, regional clusters and Chamber members.</p>
        </div><Link href="/governance#interactive-organogram">View interactive organogram <ArrowRight size={18} aria-hidden="true"/></Link></div></section>
      </main>
    </Shell>
  );
}
