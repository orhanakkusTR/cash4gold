import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";

// Lightweight, dependency-free admin auth for the single-operator analytics
// panel. We don't need user accounts — just one set of credentials in env vars
// and a tamper-proof signed cookie. No data store, no third-party lib.
//
// Required env vars (set as DO app secrets, never committed):
//   ADMIN_USER            — the login username
//   ADMIN_PASSWORD        — the login password (plaintext compare, constant-time)
//   ADMIN_SESSION_SECRET  — long random string used to HMAC-sign the session

export const COOKIE_NAME = "c4g_admin";
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

function secret(): string {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function b64url(buf: Buffer | string): string {
  return Buffer.from(buf).toString("base64url");
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

/** Validate a username/password pair against the configured admin credentials. */
export function checkCredentials(user: string, pass: string): boolean {
  const U = process.env.ADMIN_USER || "";
  const P = process.env.ADMIN_PASSWORD || "";
  if (!U || !P) return false;
  // Evaluate both comparisons (no short-circuit) to keep timing uniform.
  const okUser = timingSafeEqualStr(user, U);
  const okPass = timingSafeEqualStr(pass, P);
  return okUser && okPass;
}

/** Create a signed session token: base64url(payload).base64url(hmac). */
export function createSessionToken(user: string): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload = b64url(JSON.stringify({ u: user, exp }));
  const sig = b64url(crypto.createHmac("sha256", secret()).update(payload).digest());
  return `${payload}.${sig}`;
}

/** Verify a session token; returns the username or null if invalid/expired. */
export function verifySessionToken(token: string | undefined): string | null {
  if (!token || !secret()) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = b64url(crypto.createHmac("sha256", secret()).update(payload).digest());
  if (!timingSafeEqualStr(sig, expected)) return null;
  try {
    const { u, exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof exp !== "number" || exp < Math.floor(Date.now() / 1000)) return null;
    return typeof u === "string" ? u : null;
  } catch {
    return null;
  }
}

/** Read the current admin session from the request cookies (server only). */
export async function getAdminUser(): Promise<string | null> {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}
