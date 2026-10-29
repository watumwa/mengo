import Link from "next/link";
import { ArrowRight, ArrowUpRight, Landmark, MapPin, UsersRound } from "lucide-react";
import { Shell } from "../components";
import { realPhotos } from "../realPhotos";
import { ResponsivePhoto } from "../ResponsivePhoto";
import styles from "./kingdom-showcase.module.css";

const stories = [
  {
    eyebrow: "History & Heritage",
    title: "A legacy that lives on",
    description: "Discover the historical sites, traditions and places that carry Buganda's story across generations.",
    caption: "The royal palace in Mengo. Photograph: Samson Ssemakadde, CC0.",
    image: realPhotos.palace,
    href: "/kingdom/history",
  },
  {
    eyebrow: "Leadership & Institutions",
    title: "The institutions of the Kingdom",
    description: "Learn about the Kabaka, the Katikkiro, the Lukiiko and the cultural institutions of Buganda.",
    caption: "Clan heads meeting at Bulange, Mengo. Photo: Samson Ssemakadde, CC0.",
    image: realPhotos.heritage,
    href: "/kingdom/leadership",
  },
  {
    eyebrow: "Culture & Tourism",
    title: "Traditions in motion",
    description: "Explore cultural performances, heritage sites, dress, language and the arts of Buganda.",
    caption: "A cultural performance from the supplied Buganda Royal collection.",
    image: realPhotos.culturalPerformance,
    href: "/kingdom/culture-tourism",
  },
  {
    eyebrow: "Community Development",
    title: "Investing in people",
    description: "See how education, cultural programmes and community initiatives contribute to Buganda's social life.",
    caption: "An Ekisaakaate programme display from the client photograph collection.",
    image: realPhotos.ekisaakaate,
    href: "/kingdom/achievements",
  },
  {
    eyebrow: "Education & Institutions",
    title: "Learning and opportunity",
    description: "Find out more about education and the organisations contributing to everyday life in the Kingdom.",
    caption: "Graduates celebrating at a ceremony in the supplied photo collection.",
    image: realPhotos.educationCelebration,
    href: "/kingdom/institutions",
  },
  {
    eyebrow: "People & Communities",
    title: "A Kingdom brought together",
    description: "Discover the traditional counties, the people and the regional identities that make up Buganda.",
    caption: "Community gathering at CBS Enkuuka.",
    image: realPhotos.enkuuka,
    href: "/kingdom/masaza",
  },
];

export default function Kingdom() {
  return (
    <Shell>
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="kingdom-title">
          <ResponsivePhoto
            photo={realPhotos.bulange}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className={styles.heroPhoto}
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.shell}>
            <div className={styles.heroBody}>
              <p className={styles.kicker}>THE KINGDOM OF BUGANDA</p>
              <h1 id="kingdom-title">Rooted in heritage.<br /><em>Alive with purpose.</em></h1>
              <p className={styles.heroText}>Explore Buganda through its history, traditional leadership, culture and the people who sustain its communities.</p>
              <div className={styles.heroActions}>
                <Link href="/kingdom/history" className={styles.primaryAction}>Discover Our Heritage <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link href="/kingdom/leadership" className={styles.secondaryAction}>Kingdom Leadership <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <p className={styles.heroCredit}>Bulange, Mengo · Photograph: Alvinategyeka, <a href="https://commons.wikimedia.org/wiki/File:Bulange_Mengo.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
        </section>

        <section className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.shell}>
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionKicker}>THE HEART OF BUGANDA</p>
                <h2 id="intro-title">A living Kingdom with a remarkable story.</h2>
              </div>
              <div className={styles.introText}>
                <p>Buganda's identity can be seen in its institutions, its traditional counties, its language and its everyday cultural life. From Bulange in Mengo to gatherings across the Kingdom, these connections continue to shape communities.</p>
                <p>Explore these stories through genuine photographs of places, people and activities — with a focus on what each image actually shows.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.discover} aria-labelledby="discover-title">
          <div className={styles.shell}>
            <div className={styles.discoverHeading}>
              <div><p className={styles.sectionKicker}>EXPLORE THE KINGDOM</p><h2 id="discover-title">Heritage, leadership and community life.</h2></div>
              <p>Discover the places, institutions and experiences that tell Buganda's story.</p>
            </div>
            <div className={styles.storyGrid}>
              {stories.map(story => (
                <Link href={story.href} className={styles.storyCard} key={story.href}>
                  <div className={styles.photoFrame}>
                    <ResponsivePhoto photo={story.image} width={680} height={450} sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardEyebrow}>{story.eyebrow}</span>
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                    <small className={styles.photoCaption}>{story.caption}</small>
                    <span className={styles.readMore}>Explore <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.community} aria-labelledby="community-title">
          <div className={styles.communityPhoto}>
            <ResponsivePhoto
              photo={realPhotos.birthdayRun}
              width={1080}
              height={770}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <span>Kabaka Birthday Run — community participation</span>
          </div>
          <div className={styles.communityText}>
            <p className={styles.sectionKicker}>PEOPLE AT THE CENTRE</p>
            <h2 id="community-title">A shared spirit of belonging.</h2>
            <p>Public events, cultural celebrations and community programmes bring people together across Buganda. They are part of the wider social fabric in which enterprise and livelihoods grow.</p>
            <Link href="/kingdom/achievements" className={styles.inlineAction}>Community & Development <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className={styles.linksSection}>
          <div className={styles.shell}>
            <div className={styles.linkGrid}>
              <Link href="/kingdom/masaza"><MapPin size={24} aria-hidden="true" /><span><strong>Masaza & Gombolola</strong><small>Explore Buganda's traditional counties and regional identity.</small></span><ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="/kingdom/institutions"><Landmark size={24} aria-hidden="true" /><span><strong>Kingdom Institutions</strong><small>Learn about the organisations and institutions serving communities.</small></span><ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="/about"><UsersRound size={24} aria-hidden="true" /><span><strong>Mengo Chamber of Commerce</strong><small>Discover the Chamber's role in enterprise and opportunity.</small></span><ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <p className={styles.officialLink}>For official Kingdom announcements and current institutional information, visit <a href="https://buganda.or.ug/" target="_blank" rel="noopener noreferrer">the Buganda Kingdom website <ArrowUpRight size={14} aria-hidden="true" /></a>.</p>
          </div>
        </section>
      </main>
    </Shell>
  );
}
