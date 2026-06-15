import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  itemType: z.string().min(1, "Please choose what you're selling"),
  location: z.string().min(1, "Please choose a location"),
  message: z.string().max(2000).optional().or(z.literal("")),
  // Honeypot, real users leave this empty; bots fill it. Validated loosely
  // here so the API can silently accept-and-drop instead of erroring.
  company: z.string().max(200).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
