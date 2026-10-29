import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function Businesses(){
 return <BlueprintPage eyebrow="Business Community" title="Discover Enterprise in Buganda" description="Explore the sectors, networks and commercial connections that bring businesses together across Buganda." image={realPhotos.enterpriseGroup} imageCaption="A team outside the offices of Rexba Ltd, illustrating local enterprise." sections={[
  {
    "eyebrow": "Business connections",
    "title": "A broad and diverse business community",
    "text": "From small retailers and agricultural producers to manufacturers and service firms, enterprises contribute to the region's jobs, trade and livelihoods.",
    "cards": [
      {
        "title": "Agriculture & processing",
        "text": "Growers, processors, wholesalers and businesses involved in value addition."
      },
      {
        "title": "Trade & distribution",
        "text": "Markets, transport, wholesale networks and everyday retail enterprise."
      },
      {
        "title": "Professional & digital services",
        "text": "Finance, business advisory, technology and a wide range of other service providers."
      }
    ]
  },
  {
    "eyebrow": "Business directory",
    "title": "Organisation listings",
    "text": "A verified MCCL member and business directory has not yet been published on this website. The Chamber's official channels should be used to confirm membership or request an introduction.",
    "cards": [
      {
        "title": "Join the network",
        "text": "Learn about membership participation.",
        "href": "/membership"
      },
      {
        "title": "Commercial centres",
        "text": "Explore markets and trading areas.",
        "href": "/commercial-centres"
      },
      {
        "title": "Economic sectors",
        "text": "Read more about business activity in Buganda.",
        "href": "/economy/sectors"
      }
    ]
  }
]} action={{"label":"Explore membership","href":"/membership"}} />;
}
