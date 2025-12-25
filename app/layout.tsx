import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serenity Health Center | Holistisk Hälsa & Välbefinnande",
  description: "Ett exklusivt health center där vi kombinerar traditionell visdom med modern vetenskap för att skapa varaktig balans i ditt liv.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-sage-900`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
