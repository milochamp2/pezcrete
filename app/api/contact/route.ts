import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import ContactEmail from "@/emails/ContactEmail";

export async function POST(req: NextRequest) {
  const { name, phone, email, address, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const html = await render(
    ContactEmail({ name, phone: phone || "", email, address: address || "", service: service || "", message })
  );

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  await transporter.sendMail({
    from: `"Pezcrete Website" <${process.env.OUTLOOK_USER}>`,
    to: process.env.OUTLOOK_USER,
    replyTo: email,
    subject: `New Quote Request — ${name}${service ? ` · ${service}` : ""}`,
    html,
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      "Importance": "high",
    },
  });

  return NextResponse.json({ ok: true });
}
