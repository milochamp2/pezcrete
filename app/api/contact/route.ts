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
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Pezcrete Website" <${process.env.GMAIL_USER}>`,
      to: "Pezcrete@outlook.com.au",
      replyTo: email,
      subject: `New Quote Request — ${name}${service ? ` · ${service}` : ""}`,
      html,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        "Importance": "high",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Mail send error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
