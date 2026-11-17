export type ChamberPhoto = {
  src: string;
  alt: string;
  position?: string;
  fit?: "cover" | "contain";
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
  kabakaPortrait: {
    src: "/images/leadership/kabaka.jpg",
    alt: "Portrait of the Kabaka in ceremonial attire",
    position: "center 24%",
    fit: "contain",
  },
  kabakaPalaceHero: {
    src: "/images/leadership/kabakas-palace.jpeg",
    alt: "The Kabaka's Palace in Mengo",
    position: "right 50%",
  },
  katikkiroPortrait: {
    src: "/images/leadership/katikkiro-of-buganda.jpg",
    alt: "Portrait of Owek. Charles Peter Mayiga, Katikkiro of Buganda",
    position: "center 22%",
    fit: "contain",
  },
  chamberChairKiyimba: {
    src: "/images/leadership/chamber/john-fred-freeman-kiyimba.webp",
    alt: "Portrait of Omuk. John Fred Freeman Kiyimba, Chairman of Mengo Chamber of Commerce",
    position: "center 22%",
  },
  chamberViceChairKayiwa: {
    src: "/images/leadership/chamber/steven-kayiwa.jpg",
    alt: "Portrait of Owek. Steven Kayiwa, Vice Chairman of Mengo Chamber of Commerce",
    position: "center 22%",
  },
  chamberMemberSarahSsemanda: {
    src: "/images/leadership/chamber/sarah-kironde-ssemanda.jpg",
    alt: "Portrait of Omuk. Sarah Kironde Ssemanda, Mengo Chamber of Commerce board member",
    position: "center 20%",
  },
  chamberMemberMusaMugere: {
    src: "/images/leadership/chamber/musa-mugere.jpg",
    alt: "Portrait of Hajji Musa Mugere, Mengo Chamber of Commerce board member",
    position: "center 22%",
  },
  budgetAssembly: {
    src: "/images/client/buganda-budget-assembly.jpg",
    alt: "Buganda Lukiiko members seated during a budget reading",
    position: "center 52%",
  },
  budgetAddress: {
    src: "/images/client/buganda-budget-address.jpg",
    alt: "A speaker delivering the Buganda budget address in the Lukiiko",
    position: "center 35%",
  },
  ceoRetreatGroup: {
    src: "/images/client/buganda-ceo-retreat-group.jpg",
    alt: "Participants in a group photograph at the Buganda CEOs Retreat",
    position: "center 44%",
  },
  ceoRetreatSession: {
    src: "/images/client/buganda-ceo-retreat-session.jpg",
    alt: "A speaker addressing participants at the Buganda CEOs Retreat",
    position: "center 40%",
  },
  lukiikoAssembly: {
    src: "/images/client/buganda-lukiiko-assembly.jpg",
    alt: "Members seated in the Buganda Lukiiko",
    position: "center 52%",
  },
  lukiikoSession: {
    src: "/images/client/buganda-lukiiko-session.jpg",
    alt: "A formal session in the Buganda Lukiiko",
    position: "center 45%",
  },
  womenCelebration: {
    src: "/images/client/buganda-women-celebration.jpg",
    alt: "Women attending a Buganda Women's Day celebration",
    position: "center 50%",
  },
  royalCeremony: {
    src: "/images/client/buganda-royal-ceremony.jpg",
    alt: "A ceremonial procession during a Buganda Royal event",
    position: "center 48%",
  },
  youthInitiative: {
    src: "/images/client/buganda-youth-initiative.jpg",
    alt: "Young people and leaders gathered at a Buganda youth initiative",
    position: "center 48%",
  },
  bikaTournament: {
    src: "/images/client/buganda-bika-tournament.jpg",
    alt: "Teams and supporters gathered at a Buganda Bika tournament",
    position: "center 50%",
  },
  masazaCup: {
    src: "/images/client/buganda-masaza-cup.jpg",
    alt: "Team jersey presentation at the Buganda Masaza Cup launch",
    position: "center 42%",
  },
  muslimDinner: {
    src: "/images/client/buganda-muslim-dinner.jpg",
    alt: "Guests seated at a Buganda Muslim community dinner",
    position: "center 48%",
  },
  oluwaloCeremony: {
    src: "/images/client/buganda-oluwalo-ceremony.jpg",
    alt: "Participants during a presentation at an Oluwalo event",
    position: "center 45%",
  },
  ekisaakaatePanel: {
    src: "/images/client/nnaabagereka-ekisaakaate-panel.jpg",
    alt: "Panel at the Nnaabagereka Ekisaakaate programme",
    position: "center 43%",
  },
  birthdayRunLaunch: {
    src: "/images/client/kabaka-birthday-run-launch.jpg",
    alt: "Group on stage at the launch of the Kabaka Birthday Run",
    position: "center 43%",
  },
  coffeeProducts: {
    src: "/images/client/mwanyi-coffee-products.jpg",
    alt: "Mwanyi Terimba coffee products displayed at the business premises",
    position: "center 45%",
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
  chamberInauguration: {
    src: "/images/mengo-board-inauguration.jpeg",
    alt: "Mengo Chamber of Commerce inauguration group photograph",
    position: "center 40%",
  },
  masazaMap: {
    src: "/images/buganda-amasaza-map.jpg",
    alt: "Map illustrating Buganda traditional counties",
    position: "center",
  },
  palaceLocal: {
    src: "/images/buganda-royal-palace.jpg",
    alt: "Photograph of the royal palace building in Mengo",
    position: "center",
  },
} satisfies Record<string, ChamberPhoto>;
