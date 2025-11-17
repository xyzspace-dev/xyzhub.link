"use client";

import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

type SendEmailCallback = {
  success: boolean;
  message: string;
};

export default function ContactPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    const send = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        from: email,
        text: message,
      }),
    });

    const data = (await send.json()) as SendEmailCallback;

    console.log(data.message);

    if (!data.success) throw new Error(data.message);
    alert(data.message);
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-2xl bg-zinc/90 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-8"
        >
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
            <Mail className="w-5 h-5 text-zinc-500" /> message@xyzhub.link
          </div>
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
            <MapPin className="w-5 h-5 text-zinc-500" /> Husum, Deutschland
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="space-y-5"
        >
          <div className="gap-4 flex flex-col sm:flex-auto">
            <div className="bg-zinc-600 dark:bg-zinc-800/70 border-none transition inline-flex justify-center w-full items-center rounded-md shadow-sm">
              <User className="ml-2" />
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="ring-0 border-none outline-none "
              />
            </div>
            <div className="bg-zinc-600 dark:bg-zinc-800/70 border-none transition inline-flex justify-center w-full items-center rounded-md shadow-sm">
              <Mail className="ml-2" />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-Mail"
                className="ring-0 border-none outline-none "
              />
            </div>
            <div className="bg-zinc-600 dark:bg-zinc-800/70 border-none transition inline-flex justify-center w-full items-center rounded-md shadow-sm">
              <Textarea
                placeholder="Your Message"
                id="message"
                name="message"
                rows={5}
                className="ring-0 border-none outline-none "
              />
            </div>
          </div>
          <Button
            onClick={() =>
              handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>)
            }
            className="cursor-pointer w-full flex items-center justify-center text-zinc-950 gap-2 bg-gradient-to-r from-zinc-400 to-zinc-500  font-semibold py-3 rounded-xl shadow-md hover:scale-[1.03] hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5" />
            Senden
          </Button>
        </motion.form>
      </motion.section>
    </main>
  );
}
