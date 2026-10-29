import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Shell } from "../../components";
import { ResponsivePhoto } from "../../ResponsivePhoto";
import { realPhotos } from "../../realPhotos";

export const metadata = {
  title: "Trade Exhibitions and Business Growth | Mengo Chamber of Commerce",
  description: "Mengo Chamber of Commerce calls for greater participation in trade exhibitions to drive business growth.",
};

export default function TradeExhibitionsStory() {
  return (
    <Shell>
      <main className="mc-news-article">
        <article className="bp-shell">
          <Link href="/insights" className="mc-news-back"><ArrowLeft size={16} /> News &amp; insights</Link>
          <p className="mc-featured-news-label">CHAMBER NEWS / TRADE &amp; ENTERPRISE</p>
          <h1>Mengo Chamber of Commerce Calls for Greater Participation in Trade Exhibitions to Drive Business Growth.</h1>
          <p className="mc-news-deck">The Chamber is encouraging wider business participation in trade exhibitions as a way to strengthen enterprise connections and market opportunities.</p>
          <figure>
            <ResponsivePhoto photo={realPhotos.chamberInauguration} width={1280} height={854} sizes="(max-width: 760px) 100vw, 1000px" />
            <figcaption>Mengo Chamber of Commerce representatives. Chamber photograph.</figcaption>
          </figure>
          <div className="mc-news-body">
            <p>Trade exhibitions offer businesses the chance to present products and services, meet potential customers and partners, and understand emerging market needs.</p>
            <p>Greater participation can help enterprises expand their networks, explore new business opportunities and increase visibility across sectors.</p>
            <p>For businesses interested in the Chamber's work and activities, explore the trade and investment information available through the website.</p>
            <Link href="/trade-investment" className="mc-featured-news-link">EXPLORE TRADE &amp; INVESTMENT <ArrowUpRight size={17} /></Link>
          </div>
        </article>
      </main>
    </Shell>
  );
}
