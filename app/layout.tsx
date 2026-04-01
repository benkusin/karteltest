import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Databricks: Leading Data and AI Solutions for Enterprises",
  description:
    "More than 15,000 organizations worldwide — including Block, Comcast, Condé Nast, Rivian, Shell, and over 60% of the Fortune 500 — rely on the Databricks Data Intelligence Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9F7F4] text-[#1B3139]">
        {children}
      </body>
    </html>
  );
}
