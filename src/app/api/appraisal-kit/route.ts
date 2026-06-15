import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appraisalKitSchema, SHIPPING_METHODS } from "@/lib/appraisal-kit-schema";
import { SITE } from "@/data/business";

export const runtime = "nodejs";

const TO = process.env.LEAD_INBOX ?? SITE.email;
const FROM = process.env.LEAD_FROM ?? "Cash for Gold VA <onboarding@resend.dev>";

const methodLabel = (id: string) => SHIPPING_METHODS.find((m) => m.id === id)?.label ?? id;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = appraisalKitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { company, ...lead } = parsed.data;
  // Honeypot tripped → silently accept, drop the lead.
  if (company) return NextResponse.json({ ok: true });

  const text = [
    `New appraisal-kit request from cashforgoldva.com`,
    ``,
    `Name:      ${lead.name}`,
    `Phone:     ${lead.phone}`,
    `Email:     ${lead.email}`,
    `Shipping:  ${methodLabel(lead.shippingMethod)}`,
    `Address:   ${lead.street}, ${lead.city}, ${lead.state} ${lead.zip}`,
    `Sending:   ${lead.itemType || "(not specified)"}`,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[appraisal-kit] RESEND_API_KEY not set. Lead:", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: lead.email,
      subject: `New appraisal-kit request, ${methodLabel(lead.shippingMethod)}`,
      text,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[appraisal-kit] email send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
