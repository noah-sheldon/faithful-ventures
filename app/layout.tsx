import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaithfulVC Europe & UK | AI-Powered Digital Agency & Cybersecurity",
  description:
    "Premier AI-powered digital agency and cybersecurity consultancy serving Europe & UK. Expert web development, SEO, penetration testing, and compliance consulting.",
  keywords: [
    "AI digital agency",
    "cybersecurity consulting",
    "web development UK",
    "SEO services Europe",
    "penetration testing",
    "ISO 27001 compliance",
    "GDPR consulting",
    "FaithfulVC",
    "digital transformation",
    "AI automation",
    "cloud security",
    "enterprise software",
  ],
  authors: [{ name: "FaithfulVC Europe & UK", url: "faithful-ventures.vercel.app" }],
  creator: "FaithfulVC",
  openGraph: {
    title: "FaithfulVC Europe & UK | AI-Powered Digital Agency & Cybersecurity",
    description:
      "Transform your business with AI-powered digital solutions and enterprise-grade cybersecurity from Europe's leading consultancy.",
    url: "faithful-ventures.vercel.app",
    siteName: "FaithfulVC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FaithfulVC | AI Digital Agency & Cybersecurity",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "FaithfulVC Europe & UK | AI-Powered Digital Agency",
    description:
      "Leading AI-powered digital agency and cybersecurity consultancy transforming businesses across Europe & UK.",
    images: ["/logo.png"],
    creator: "@faithfulvc",
  },
  icons: {
    icon: "/favicon.png",
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
        <Footer></Footer>
      </body>
    </html>
  );
}
