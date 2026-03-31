import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Pezcrete Website" <${process.env.GMAIL_USER}>`,
    to: "alananoaj@gmail.com",
    replyTo: email,
    subject: `New Quote Request — ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; color: #1a1a1a;">
        <h2 style="margin-bottom: 24px;">New enquiry from Pezcrete website</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #555; width: 100px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #555;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #555; margin-bottom: 8px;">Message</p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
