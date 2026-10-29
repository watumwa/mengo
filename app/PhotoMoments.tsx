import { ResponsivePhoto } from "./ResponsivePhoto";
import type { ChamberPhoto } from "./realPhotos";

export type PhotoMoment = { photo: ChamberPhoto; caption: string };

export function PhotoMoments({ items, label = "Scenes from Buganda" }: { items: PhotoMoment[]; label?: string }) {
  return (
    <section className="mc-photo-moments" aria-label={label}>
      <div className="bp-shell mc-photo-moments-grid">
        {items.map(({ photo, caption }) => (
          <figure key={photo.src} className="mc-photo-moment">
            <ResponsivePhoto photo={photo} width={800} height={500} sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" />
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
