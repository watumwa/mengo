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
  palace: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/07/The_Buganda_Kingdom_royal_Palace_in_Mengo%2C_Kampala.jpg",
    alt: "The royal palace building at Mengo, Kampala, photographed by Samson Ssemakadde (CC0)",
    position: "center 45%",
  },
  heritage: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Buganda_kingdom_Clan_heads_meeting_in_Bulange_Mmengo%2C_Kampala.09.jpg?width=1600",
    alt: "Real photograph of a Buganda Kingdom clan heads meeting at Bulange, by Samson Ssemakadde (2025), CC0",
    position: "center",
  },
  coffeeProducts: {
    src: "/images/client/mwanyi-coffee-products.jpg",
    alt: "Mwanyi Terimba coffee products displayed at the business premises",
    position: "center 45%",
  },
  coffeeExport: {
    src: "/images/client/mwanyi-coffee-export.jpg",
    alt: "Coffee sacks marked for export being loaded into a shipping container",
    position: "center 50%",
  },
  coffeeContainer: {
    src: "/images/client/mwanyi-export-container.jpg",
    alt: "Bags of coffee stacked in a shipping container",
    position: "center",
  },
  businessForum: {
    src: "/images/client/bbs-business-forum.jpg",
    alt: "Panelists taking part in the BBS Business Forum",
    position: "center 45%",
  },
  marketStalls: {
    src: "/images/client/rexba-market.jpg",
    alt: "A market passage with stalls and goods for sale",
    position: "center",
  },
  enterpriseGroup: {
    src: "/images/client/rexba-enterprise-team.jpg",
    alt: "A group of business people outside the Rexba Ltd premises",
    position: "center 46%",
  },
  birthdayRun: {
    src: "/images/client/kabaka-birthday-run.jpg",
    alt: "Large crowd participating in the Kabaka Birthday Run",
    position: "center 52%",
  },
  birthdayRunGroup: {
    src: "/images/client/kabaka-run-team.jpg",
    alt: "Group in Kabaka Birthday Run shirts standing in front of an event banner",
    position: "center 65%",
  },
  culturalPerformance: {
    src: "/images/client/royal-cultural-performance.jpg",
    alt: "Performers in traditional attire at a cultural celebration",
    position: "center 50%",
  },
  ekisaakaate: {
    src: "/images/client/nnaabagereka-ekisaakaate.jpg",
    alt: "Woman standing beside an Ekisaakaate display",
    position: "center",
  },
  pewosaAgriculture: {
    src: "/images/client/cbs-pewosa-agriculture.jpg",
    alt: "People inspecting seedlings at a CBS PEWOSA agribusiness demonstration",
    position: "center",
  },
  essuubiCommunity: {
    src: "/images/client/essuubi-community.jpg",
    alt: "People holding a publication at an Essuubi Lyo Zambogo office",
    position: "center",
  },
  enkuuka: {
    src: "/images/client/cbs-enkuuka-community.jpg",
    alt: "Community gathering at CBS Enkuuka",
    position: "center 55%",
  },
  k2Launch: {
    src: "/images/client/k2-telecom-launch.jpg",
    alt: "Group photograph in front of a red Kibuga event backdrop",
    position: "center 43%",
  },
  educationCelebration: {
    src: "/images/client/muteesa-community-graduation.jpg",
    alt: "Graduates celebrating at an education ceremony",
    position: "center",
  },
  institutionVisit: {
    src: "/images/client/rex-institution-visit.jpg",
    alt: "Group during a visit to an institutional office",
    position: "center",
  },
  pewosaEnterprise: {
    src: "/images/client/cbs-pewosa-enterprise.jpg",
    alt: "People taking part in a CBS PEWOSA programme event",
    position: "center",
  },
} satisfies Record<string, ChamberPhoto>;
