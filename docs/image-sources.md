# Photography sources and placement policy

The site uses **authentic documentary photographs** with accurate, subject-specific captions. The core client-supplied collection is stored in `public/images/client/`; the Mengo Chamber inauguration photograph is stored at `public/images/mengo-board-inauguration.jpeg`.

## Source distinctions

- **Client-supplied photographs:** the business, cultural and community images under `public/images/client/` and the Chamber inauguration image. These illustrate the depicted organisation or activity; they do **not** imply that the depicted people are Chamber members or that the Chamber organised the activity.
- **Wikimedia Commons photographs:** `buganda-royal-palace.jpg` (Samson Ssemakadde, CC0), `kampala-market.jpg` (Kevin Gabbert, public domain), `buganda-traditional-wear.jpg` (CC0), and `buganda-gomesi.jpg` (CC0). Keep creator and licence credits when displayed.
- **Externally hosted credited documentary images:** the Bulange heritage imagery and the source news photograph have their own attribution and should be retained only when the credited source remains accessible.
- Confirm publication permission for all client-provided photos before final client launch; having the files does not itself demonstrate licensing or subject consent.

## Placement rules

1. Choose a photo by its **actual subject**, not merely to fill a section. Never relabel an external organisation's event as a Chamber programme.
2. The homepage's featured carousel, mandate montage and community-gallery cards should not reuse the same photograph. The production build runs `npm run check:photos` to enforce this.
3. The About page prioritises an actual Chamber image. Trading, agriculture, heritage, education and community pages use photographs matching their own topic.
4. Reuse is acceptable where the same story is shown in a preview and full article, or when a photograph genuinely illustrates two separate pieces of content. Do not repeatedly use a small selection when better originals are available.
5. Add new photographs in `public/images/client/` and register their source, factual alt text and preferred crop in `app/realPhotos.ts`. Avoid generic stock or AI-generated substitutes when the client has supplied an appropriate original.
