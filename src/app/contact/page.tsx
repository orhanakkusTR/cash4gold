import { redirect } from "next/navigation";

// Canonical contact URL mirrors the original site taxonomy.
export default function ContactRedirect() {
  redirect("/contact-us-cash-for-gold-locations");
}
