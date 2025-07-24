import "./globals.css";
import { Inter, Sora } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora  = Sora({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-heading" });

export const metadata = {
  title:       "Websites That Don’t Suck | Youssef El Ramy",
  description: "Fast, clean websites for home‑service businesses.",
  keywords:    ["web design", "plumber", "HVAC", "Next.js", "Tailwind CSS"],
  icons: {
    icon: "/logoSite.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}> 
      <body className="bg-dark text-light antialiased">{children}</body>
    </html>
  );
}
