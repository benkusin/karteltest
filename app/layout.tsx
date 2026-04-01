import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartel — AI Creative Supply Chain, Built & Operated",
  description:
    "Kartel builds and operates your AI creative supply chain. One brief, 50+ brand-accurate outputs across every channel. Start with one project.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap"
          rel="stylesheet"
        />
        {/* Inline favicon — "K" text emoji */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-weight='bold'>K</text></svg>"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1B1F2A]">
        {children}
      </body>
    </html>
  );
}
