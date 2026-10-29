import Link from "next/link";
import {notFound} from "next/navigation";
import {Shell} from "../../components";
import {publicContent,formatUGDateTime,type ChamberEvent} from "../../cmsData";
import "../../content-hub.css";
export const revalidate=90;
export default async function EventPage({params}:{params:Promise<{id:string}>}){
 const {id}=await params;if(!/^[0-9]+$/.test(id))notFound();
 const event=await publicContent<ChamberEvent>(`/api/v1/events/${id}/`);
 if(!event)notFound();
 return <Shell><main className="mc-content-hub"><div className="bp-shell mc-content-article"><Link href="/events-calendar" className="mc-content-back">← All events</Link><p className="mc-content-label">UPCOMING CHAMBER EVENT</p><h1>{event.title}</h1><dl className="mc-content-event-meta"><dt>Start</dt><dd>{formatUGDateTime(event.starts_at)}</dd><dt>End</dt><dd>{formatUGDateTime(event.ends_at)}</dd><dt>Venue</dt><dd>{event.venue}</dd></dl><div className="mc-content-body">{event.description.split(/\n\s*\n/).filter(Boolean).map((p,i)=><p key={i}>{p}</p>)}</div></div></main></Shell>;
}
