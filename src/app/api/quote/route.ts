import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteSchema } from "@/lib/quote-schema";
import { SITE } from "@/data/business";

export const runtime = "nodejs";

// Where leads are delivered. Set these in Vercel env (see .env.example).
const TO = process.env.LEAD_INBOX ?? SITE.email;
const FROM = process.env.LEAD_FROM ?? "Cash for Gold VA <onboarding@resend.dev>";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { company, ...lead } = parsed.data;
  // Honeypot tripped → silently accept, drop the lead.
  if (company) return NextResponse.json({ ok: true });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // No email provider configured yet, log so local dev still works.
    console.warn("[quote] RESEND_API_KEY not set. Lead:", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: lead.email,
      subject: `New quote request, ${lead.itemType} (${lead.location})`,
      text: [
        `New quote request from cashforgoldva.com`,
        ``,
        `Name:     ${lead.name}`,
        `Phone:    ${lead.phone}`,
        `Email:    ${lead.email}`,
        `Selling:  ${lead.itemType}`,
        `Location: ${lead.location}`,
        ``,
        `Details:`,
        lead.message || "(none)",
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[quote] email send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
