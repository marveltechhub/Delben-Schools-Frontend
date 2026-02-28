import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { username, password } = body || {};

  // Use env vars, fallback to defaults
  const ADMIN_USER = process.env.ADMIN_USER || "admin";
  const ADMIN_PASS = process.env.ADMIN_PASS || "password";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Very simple token (not secure) — for demo only
    const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");
    return NextResponse.json({ ok: true, token });
  }

  return new NextResponse(JSON.stringify({ ok: false, message: "Invalid credentials" }), { status: 401 });
}