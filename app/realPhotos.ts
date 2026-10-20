export type ChamberPhoto = {
  src: string;
  alt: string;
  position?: string;
};

/*
 * These are local project assets. They are used as contextual Buganda imagery,
 * rather than presented as photographs of Chamber programmes or members.
 */
export const realPhotos = {
  bulange: {
    src: "/images/buganda-royal-palace.jpg",
    alt: "A Buganda palace building in Mengo",
    position: "center",
  },
  coffee: {
    src: "/images/buganda-gomesi.jpg",
    alt: "A woman wearing traditional Buganda dress",
    position: "center 30%",
  },
  market: {
    src: "/images/kampala-market.jpg",
    alt: "A Kampala market scene",
    position: "center",
  },
  kampala: {
    src: "/images/buganda-traditional-wear.jpg",
    alt: "People in traditional Buganda attire",
    position: "center",
  },
  heritage: {
    src: "/images/mengo-hero-v2.png",
    alt: "A heritage-inspired view of Mengo and Kampala",
    position: "center",
  },
} satisfies Record<string, ChamberPhoto>;
