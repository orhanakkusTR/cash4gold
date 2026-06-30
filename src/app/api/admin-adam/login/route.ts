import { NextRequest, NextResponse } from "next/server";
import {
  checkCredentials,
  createSessionToken,
  COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const user = typeof body?.user === "string" ? body.user : "";
  const pass = typeof body?.pass === "string" ? body.pass : "";

  if (!checkCredentials(user, pass)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, createSessionToken(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
