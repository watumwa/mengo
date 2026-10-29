import { BlueprintPage } from "../BlueprintPage";
import { realPhotos } from "../realPhotos";

export default function CommercialCentres() {
  return <BlueprintPage eyebrow="Markets & Trading Centres" title="Where Business Happens" description="Markets and commercial centres bring together traders, customers, suppliers and services throughout Buganda."
    image={realPhotos.market} imageCaption="Market activity in Kampala, illustrating local commerce." sections={[
  {
    "eyebrow": "Commercial life",
    "title": "Trading places and local markets",
    "text": "From established urban markets to town trading areas, commercial centres are important meeting points in the movement of goods and services.",
    "cards": [
      {
        "title": "Markets",
        "text": "Retail and wholesale places connect local customers, traders and suppliers."
      },
      {
        "title": "Trading centres",
        "text": "Town centres support transport, business services and everyday trade."
      },
      {
        "title": "Market access",
        "text": "Storage, distribution, standards and information all influence business opportunities."
      }
    ]
  },
  {
    "eyebrow": "Geography",
    "title": "Understanding the difference",
    "text": "Commercial centres describe places of trade; Masaza describe Buganda's traditional counties. Both matter, but they serve different purposes.",
    "cards": [
      {
        "title": "Traditional counties",
        "text": "Explore the Masaza and their cultural geography.",
        "href": "/kingdom/masaza"
      },
      {
        "title": "Business connections",
        "text": "Learn about the Chamber's enterprise and trade priorities.",
        "href": "/services"
      }
    ]
  }
]} action={{"label":"Explore the economy","href":"/economy"}} />;
}
