import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import ContactEmail from "@/emails/ContactEmail";

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const html = await render(
    ContactEmail({ name, phone: phone || "", email, message })
  );

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
    html,
  });

  return NextResponse.json({ ok: true });
}
