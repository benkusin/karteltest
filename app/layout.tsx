import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F9F7F4] text-[#1B3139]">
        {children}
      </body>
    </html>
  );
}
