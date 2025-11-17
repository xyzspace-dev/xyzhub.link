"use client";

import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <title>xyzhub</title>
        <meta name="description" content="xyzhub – Modernes Webportal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col bg-zinc-900 text-zinc-100 transition-colors duration-300">
        <header className="border-b border-zinc-700">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 font-semibold text-xl text-white hover:text-zinc-400 transition-colors"
            >
              <Image src="/space.png" alt="Logo" width={36} height={36} />
              <span>xyzhub</span>
            </Link>

            <nav className="flex gap-8 text-sm font-medium text-zinc-300">
              <Link
                href="/"
                className="hover:text-zinc-400 transition-colors"
                aria-label="homepage"
              >
                Home
              </Link>
              <Link
                href="/message"
                className="hover:text-zinc-400 transition-colors"
                aria-label="contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="border-t border-zinc-700 py-6 text-center text-sm text-zinc-500 select-none">
          © {new Date().getFullYear()} xyzhub.link – All rights reserved.
        </footer>
      </body>
    </html>
  );
}
