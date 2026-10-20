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
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bulange_Mengo.jpg?width=1600",
    alt: "Authentic photograph of Bulange, the administrative headquarters of Buganda Kingdom, by Alvinategyeka (2020), CC BY-SA 4.0",
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
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Buganda_kingdom_Clan_heads_meeting_in_Bulange_Mmengo%2C_Kampala.09.jpg?width=1600",
    alt: "Real photograph of a Buganda Kingdom clan heads meeting at Bulange, by Samson Ssemakadde (2025), CC0",
    position: "center",
  },
} satisfies Record<string, ChamberPhoto>;
