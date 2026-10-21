import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Building2, Factory, GraduationCap, HeartPulse, Landmark, MapPinned, Radio, Sprout, UsersRound } from "lucide-react";
import { Shell } from "./components";
import { ResponsivePhoto } from "./ResponsivePhoto";
import { realPhotos } from "./realPhotos";

const documentaryPhoto=(src:string,alt:string)=>({src,alt,position:"center"});
const sectors = [
 {title:"Agriculture & Agribusiness",href:"/economy/sectors",icon:Sprout,photo:documentaryPhoto("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1100&q=85","Real agricultural landscape, illustrating farming and value chains"),note:"Coffee growing · Mwanyi Terimba · value addition"},
 {title:"Education & Skills",href:"/kingdom#institutions",icon:GraduationCap,photo:documentaryPhoto("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1100&q=85","Real graduation ceremony illustrating higher education"),note:"Muteesa I Royal University · Buganda Royal Institute"},
 {title:"Health & Community",href:"/kingdom#achievements",icon:HeartPulse,photo:documentaryPhoto("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1100&q=85","Real medical practitioner providing healthcare"),note:"Kabaka Birthday Run · HIV awareness · community health"},
 {title:"Finance & Cooperatives",href:"/businesses",icon:Landmark,photo:documentaryPhoto("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1100&q=85","Real payment transaction representing access to finance"),note:"SACCOs · savings · financial inclusion"},
 {title:"Infrastructure & Property",href:"/invest",icon:Building2,photo:realPhotos.bulange,note:"Kingdom institutions · property · investment"},
 {title:"Tourism & Heritage",href:"/kingdom#tourism",icon:Landmark,photo:documentaryPhoto("https://commons.wikimedia.org/wiki/Special:FilePath/Kasubi_Tombs_20250815_1.jpg?width=1200","Kasubi Royal Tombs, photographed in August 2025 by Z thomas, CC BY 4.0"),note:"Kasubi Royal Tombs · Bulange · royal heritage"},
 {title:"Media & Communications",href:"/kingdom#institutions",icon:Radio,photo:documentaryPhoto("https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1100&q=85","Real professional broadcast microphone in a radio studio"),note:"CBS FM · BBS Terefayina · Luganda-language media"}
];
