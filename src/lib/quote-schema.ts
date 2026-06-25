import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  phone: z.string().min(7, "Please enter a valid phone number").max(30),
  email: z.string().email("Please enter a valid email").max(200),
  itemType: z.string().min(1, "Please choose what you're selling").max(100),
  location: z.string().min(1, "Please choose a location").max(100),
  message: z.string().max(2000).optional().or(z.literal("")),
  // Honeypot, real users leave this empty; bots fill it. Validated loosely
  // here so the API can silently accept-and-drop instead of erroring.
  company: z.string().max(200).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
