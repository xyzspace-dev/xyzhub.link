"use server";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const data = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT as unknown as number,
  secure: process.env.EMAIL_SECURE == "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

type RequestData = {
  name: string;
  from: string;
  text: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as RequestData;
  const from = body.from;
  const text = body.text;
  const name = body.name;

  const transporter = nodemailer.createTransport({
    host: data.host,
    port: data.port,
    secure: data.secure,
    auth: {
      user: data.auth.user,
      pass: data.auth.pass,
    },
    tls: {
      rejectUnauthorized: process.env.IGNORE_TLS === "true" ? false : true,
    },
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });

  try {
    await transporter.sendMail({
      from: `Message from xyzhub <${data.auth.user}>`,
      to: data.auth.user,
      subject: `New message from ${name} <${from}>`,
      text: `Name: ${name}\nEmail: ${from}\nMessage:\n${text}`,
    });

    console.log("test");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
