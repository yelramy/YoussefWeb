import "./globals.css";
import { Inter, Sora } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-heading" });

export const metadata = {
  title: "Echolume Studio | Ritual interiors for hybrid living",
  description:
    "Echolume Studio creates multi-sensory rituals for modern homes by choreographing light, scent, and sound into daily cues.",
  keywords: ["interior design", "ritual", "sensory", "light design", "soundscapes"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#04040b] font-sans text-white antialiased">{children}</body>
    </html>
  );
}
