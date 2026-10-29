/** Regional cluster composition transcribed from MCCL Strategic Plan 2026–2029, printed page 35.
 * mapPlace is a familiar reference town for navigating Google Maps, NOT an official county boundary.
 */
export type ChamberRegion = { id: string; name: string; counties: string[]; city?: string; note: string; mapPlace: string };
export const chamberRegions: ChamberRegion[] = [
  { id: "kampala", name: "Greater Kampala", counties: ["Kyaddondo", "Busiro"], city: "Kampala City Committee", mapPlace: "Kampala Uganda", note: "Regional coordination for the two constituent Ssaza, the Kampala City Committee and sub-county committees." },
  { id: "mpigi", name: "Greater Mpigi", counties: ["Gomba", "Butambala", "Mawokota"], mapPlace: "Mpigi Uganda", note: "Three constituent Ssaza with local representation through sub-county committees." },
  { id: "masaka", name: "Greater Masaka", counties: ["Buddu", "Kkooki", "Kabula", "Ssese", "Mawogola"], city: "Masaka City Committee", mapPlace: "Masaka Uganda", note: "Five constituent Ssaza, together with the Masaka City Committee and sub-county committees." },
  { id: "mityana", name: "Greater Mityana", counties: ["Ssingo", "Busujju", "Buweekula"], mapPlace: "Mityana Uganda", note: "Three constituent Ssaza with coordination extending to sub-county committees." },
  { id: "luweero", name: "Greater Luweero", counties: ["Buluuli", "Bulemeezi"], mapPlace: "Luweero Uganda", note: "Two constituent Ssaza with local sub-county committee representation." },
  { id: "mukono", name: "Greater Mukono", counties: ["Kyaggwe", "Bugerere", "Buvuma"], mapPlace: "Mukono Uganda", note: "Three constituent Ssaza with local sub-county committee representation." },
];
