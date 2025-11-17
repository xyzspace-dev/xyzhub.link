"use server";

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

export async function sendEmail(name: string, from: string, text: string) {
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

    console.log("Email sent successfully");
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.log("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
