import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartel — The AI Creative Supply Chain",
  description:
    "Kartel builds and operates the entire creative production pipeline for brands and studios: platform, orchestration, talent, tools, and data/model training. All under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1B1F2A]">
        {children}
      </body>
    </html>
  );
}
