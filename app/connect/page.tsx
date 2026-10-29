import { redirect } from "next/navigation";
// Historic concept URL retained for incoming links; direct visitors to published information.
export default function Page(){ redirect("/services"); }
