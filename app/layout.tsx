"use client";

import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import {LibraryBig} from "lucide-react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <title>Jespersen.space</title>
            <meta name="description" content="Jespersen.space"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body className="min-h-screen flex flex-col bg-zinc-900 text-zinc-100 transition-colors duration-300">
        <header className="border-b border-zinc-700">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className={"flex"}>
                    <Link
                        href="/"
                        className="flex items-center gap-3 font-semibold text-xl text-white hover:text-zinc-400 transition-colors"
                    >
                        <span className={"inline-flex"}>
                            <img
                                src={"https://github.com/Crystopia.png"}
                                alt={"Crystopia"}
                                width={50}
                                height={50}
                                className={"mr-2 w-4 h-4 md:w-16 lg:h-16"}
                                onClick={() => window.open("https://github.com/Crystopia?tab=repositories")}
                            />
                            <span className={"text-5xl mr-2 hidden md:flex"}>/</span>
                            <img
                                src={"https://github.com/DisBotDevelopment.png"}
                                alt={"Crystopia"}
                                width={50}
                                height={50}
                                className={"mr-2 w-4 h-4 md:w-16 lg:h-16"}
                                onClick={() => window.open("https://github.com/DisBotDevelopment?tab=repositories")}
                            />
                            <span className={"text-5xl mr-2 hidden md:flex"}>/</span>
                            <LibraryBig
                                className={"w-4 h-4 md:w-16 lg:h-16"}
                                size={50}
                                onClick={() => window.open("https://github.com/jesperrichert?tab=repositories")}
                            />
                        </span>
                    </Link>
                </div>

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
                    <Link
                        href="/status"
                        className="hover:text-zinc-400 transition-colors"
                        aria-label="contact"
                    >
                        Status
                    </Link>
                </nav>
            </div>
        </header>

        <main className="flex-grow max-w-6xl mx-auto px-6 py-8">
            {children}
        </main>

        <footer className="border-t border-zinc-700 py-6 text-center text-sm text-zinc-500 select-none flex flex-col">
            <span>
                © {new Date().getFullYear()} Jespersen.zip – All rights reserved.
            </span>
            <span>
                <Link href={"/pages/imprint-notice"}>Imprint Notice</Link>
            </span>
        </footer>
        </body>
        </html>
    );
}
