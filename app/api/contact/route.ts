import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  propertyTypes?: string[];
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    const errors: string[] = [];
    if (!body.firstName?.trim()) errors.push("First name is required");
    if (!body.lastName?.trim()) errors.push("Last name is required");
    if (!body.email?.trim()) errors.push("Email is required");
    if (!body.service?.trim()) errors.push("Service is required");
    if (!body.message?.trim()) errors.push("Message is required");

    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push("Invalid email address");
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(". ") }, { status: 400 });
    }

    const resend = getResend();
    if (!resend) {
      console.warn("RESEND_API_KEY not configured — contact form submission skipped");
      return NextResponse.json({ success: true, note: "Message received (email sending not configured)" });
    }

    const propertyTypes = body.propertyTypes?.length ? body.propertyTypes.join(", ") : "Not specified";

    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
        <tr><td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;">Name</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${body.firstName} ${body.lastName}</td></tr>
        <tr><td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;">Email</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${body.email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;">Phone</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${body.phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;">Service</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${body.service}</td></tr>
        <tr><td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;">Property Type</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${propertyTypes}</td></tr>
      </table>
      <h3 style="margin-top:20px;">Message</h3>
      <p style="padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;">${body.message}</p>
    `;

    await resend.emails.send({
      from: "ENAMIS Contact <onboarding@resend.dev>",
      to: ["enamissystems@gmail.com"],
      subject: `New Contact: ${body.firstName} ${body.lastName} — ${body.service}`,
      html,
      replyTo: body.email,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Contact form error:", message);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
