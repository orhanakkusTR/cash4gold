import { z } from "zod";

// Shipping options the customer can pick, mirrors the mail-in flow.
export const SHIPPING_METHODS = [
  { id: "fedex-mailer", label: "FedEx Mailer", note: "Free insured box shipped to you", speed: "Faster" },
  { id: "usps-mailer", label: "USPS Mailer", note: "Free insured pouch shipped to you", speed: "Fast" },
  { id: "fedex-label", label: "FedEx Label", note: "Print a prepaid label at home", speed: "Instant" },
] as const;

export const SHIPPING_IDS = SHIPPING_METHODS.map((m) => m.id) as [string, ...string[]];

export const appraisalKitSchema = z.object({
  shippingMethod: z.enum(SHIPPING_IDS, { message: "Choose how you'd like to ship" }),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  street: z.string().min(3, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state"),
  zip: z.string().min(4, "Please enter your ZIP code"),
  itemType: z.string().max(200).optional().or(z.literal("")),
  consent: z.literal(true, { message: "Please accept to continue" }),
  // Honeypot, real users leave this empty.
  company: z.string().max(200).optional(),
});

export type AppraisalKitInput = z.infer<typeof appraisalKitSchema>;
