import { redirect } from "next/navigation";

// Preserve existing links while using a single Strategy page.
export default function AboutStrategy() {
  redirect("/strategy");
}
