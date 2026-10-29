import { PageHero, Shell } from "../components";
import { RegionalClusterExplorer } from "../RegionalClusterExplorer";

export default function EconomicMap() {
  return <Shell><main>
    <PageHero eyebrow="Regional Economy" title="Interactive Regional Chamber Clusters" description="Explore the Amabendobendo and their constituent Ssaza, based on pages 34–35 of the 2026–2029 Chamber Strategic Plan."/>
    <RegionalClusterExplorer/>
  </main></Shell>;
}
