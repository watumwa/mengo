import Link from "next/link";
import {Shell} from "../components";
import {publicContent,safePage,formatUGDateTime,type ApiPage,type ChamberEvent} from "../cmsData";
import "../content-hub.css";
export const metadata={title:"Events & Programmes | Mengo Chamber",description:"Upcoming verified Chamber events, forums, trade exhibitions and programmes."};
export const revalidate=90;
export default async function EventsCalendar({searchParams}:{searchParams:Promise<{page?:string;q?:string}>}){
 const filters=await searchParams;const page=safePage(filters.page);const q=typeof filters.q==="string"?filters.q.trim().slice(0,100):"";
 const params=new URLSearchParams({page:String(page)});if(q)params.set("q",q);
 const events=await publicContent<ApiPage<ChamberEvent>>(`/api/v1/events/?${params}`);
 const href=(p:number)=>{const v=new URLSearchParams(params);v.set("page",String(p));return "/events-calendar?"+v};
 return <Shell><main className="mc-content-hub"><header className="mc-content-hero"><div className="bp-shell"><p>BUSINESS COMMUNITY</p><h1>Events & Programmes</h1><span>Business forums, trade exhibitions, training and opportunities to meet.</span></div></header><div className="bp-shell mc-content-main">
 <div className="mc-content-section-heading"><div><p className="mc-content-label">CONFIRMED SCHEDULE</p><h2>Upcoming Chamber events</h2></div><Link href="/insights">News & announcements →</Link></div>
 <form className="mc-content-search" method="get" action="/events-calendar" role="search"><label htmlFor="event-search">Search events</label><input id="event-search" name="q" type="search" defaultValue={q} maxLength={100} placeholder="Event, venue or programme"/><button type="submit">Search</button>{q&&<Link href="/events-calendar">Clear</Link>}</form>
 {events===null?<div className="mc-content-message"><h3>Event calendar not connected</h3><p>Verified Chamber events will appear here once the publishing service is available. No unconfirmed event dates are displayed.</p></div>:<>
 {events.results.length===0?<div className="mc-content-message"><h3>No upcoming events listed</h3><p>Check back for confirmed business forums, training sessions and Chamber announcements.</p></div>:<div className="mc-content-grid">{events.results.map(event=><article className="mc-content-card" key={event.id}><p className="mc-content-label">{formatUGDateTime(event.starts_at)}</p><h3>{event.title}</h3><p className="mc-content-venue">{event.venue}</p><p>{event.description.length>220?event.description.slice(0,220)+"…":event.description}</p><Link href={`/events-calendar/${event.id}`}>Event details →</Link></article>)}</div>}
 <nav className="mc-content-pagination" aria-label="Event pages">{page>1&&<Link href={href(page-1)}>← Previous</Link>}<span>Page {page}</span>{events.next&&<Link href={href(page+1)}>Next →</Link>}</nav></>}
 </div></main></Shell>;
}
