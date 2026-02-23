import React from "react"
import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";

import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Scholr",
  description:
    "Transform your PDFs and research papers into a smarter, interactive study system. Notes, flashcards, quizzes, and citations - all powered by AI.",
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
