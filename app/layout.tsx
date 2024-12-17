import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faithful Ventures | Innovative Software Solutions",
  description:
    "Faithful Ventures provides exceptional software consulting, custom development, and innovative product solutions tailored to your business needs.",
  keywords: [
    "software consulting",
    "custom software development",
    "product innovation",
    "Faithful Ventures",
    "software solutions",
    "business technology",
    "tech strategy",
  ],
  authors: [{ name: "Faithful Ventures", url: "https://faithfulvc.com" }],
  creator: "Faithful Ventures",
  openGraph: {
    title: "Faithful Ventures | Innovative Software Solutions",
    description:
      "Transform your business with innovative software solutions and expert consulting from Faithful Ventures.",
    url: "https://faithfulvc.com",
    siteName: "Faithful Ventures",
    images: [
      {
        url: "/og-image.png", // Add an Open Graph image in your public folder
        width: 1200,
        height: 630,
        alt: "Faithful Ventures | Software Consulting",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faithful Ventures | Innovative Software Solutions",
    description:
      "Expert software consulting and custom development to bring your vision to life.",
    images: ["/og-image.png"], // Update with your Open Graph image
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
