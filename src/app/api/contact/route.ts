import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Email to Admin (Shashi)
    const adminMailOptions = {
      from: `"${name} (Portfolio)" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'shashibjha271299@gmail.com', 
      subject: `New Lead: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #164343;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #1ea173; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 2. Email to User (Auto-responder)
    const userMailOptions = {
      from: `"Shashi Bhushan Jha" <${process.env.SMTP_USER}>`,
      to: email, 
      subject: `Re: ${subject} - Thank you for reaching out!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #1ea173;">Hello ${name},</h2>
          <p>Thank you for getting in touch! This is an automated email to confirm that I have received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I will review your inquiry and get back to you as soon as possible.</p>
          <p>Best regards,<br/><strong>Shashi Bhushan Jha</strong><br/>Software Developer</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <em style="color: #888; font-size: 12px;">Your original message:<br/><br/>${message}</em>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 });

  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
  }
}
