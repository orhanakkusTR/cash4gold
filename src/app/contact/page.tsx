import { permanentRedirect } from "next/navigation";

// Canonical contact URL mirrors the original site taxonomy. permanentRedirect
// issues a 308 (permanent) so search engines consolidate to the canonical URL,
// instead of the temporary 307 that `redirect()` would emit.
export default function ContactRedirect() {
  permanentRedirect("/contact-us-cash-for-gold-locations");
}
