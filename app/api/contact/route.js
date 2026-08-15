import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where inquiry emails are delivered. Override with CONTACT_TO env var.
const TO = process.env.CONTACT_TO || "info@alloy.homes";
// Must be a domain you've verified in Resend (or use onboarding@resend.dev to test).
const FROM = process.env.CONTACT_FROM || "Alloy Homes <onboarding@resend.dev>";

function escape(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, location, timeline, message, company } = data || {};

  // Honeypot — bots fill this in. Mirror the success shape exactly so a
  // bot can't tell it was caught.
  if (company) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 }
    );
  }

  const html = `
    <h2>New inquiry — Alloy Homes</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Phone:</strong> ${escape(phone) || "—"}</p>
    <p><strong>Build location:</strong> ${escape(location) || "—"}</p>
    <p><strong>Timeline:</strong> ${escape(timeline) || "—"}</p>
    <p><strong>Message:</strong><br/>${escape(message).replace(/\n/g, "<br/>") || "—"}</p>
  `;

  const key = process.env.RESEND_API_KEY;

  // Report the misconfiguration instead of returning ok. Answering "200,
  // thanks!" while dropping the inquiry loses real customers silently —
  // they believe they've reached Justin and he never hears about them.
  if (!key) {
    console.error(
      "[contact] RESEND_API_KEY is not set — inquiry was NOT delivered:",
      { name, email, phone, location, timeline }
    );
    return NextResponse.json(
      { ok: false, delivered: false, error: "not_configured" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New inquiry — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend rejected the send:", res.status, detail);
      return NextResponse.json(
        { ok: false, delivered: false, error: "send_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { ok: false, delivered: false, error: "send_failed" },
      { status: 500 }
    );
  }
}
