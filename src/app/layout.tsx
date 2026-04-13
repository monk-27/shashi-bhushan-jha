import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashi Bhushan Jha | Software Developer",
  description: "Software Developer turning ideas into scalable products using Next.js, React, React Native, TypeScript, Node.js, and Flutter. Delivering high-quality full-stack web and mobile applications.",
  keywords: [
    "Shashi Bhushan Jha",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Flutter",
    "Portfolio"
  ],
  authors: [{ name: "Shashi Bhushan Jha" }],
  creator: "Shashi Bhushan Jha",
  publisher: "Shashi Bhushan Jha",
  robots: "index, follow",
  alternates: {
    canonical: "https://shashibjha.com", // Replace with actual domain later
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashibjha.com", // Replace with actual domain later
    title: "Shashi Bhushan Jha | Software Developer",
    description: "Software Developer turning ideas into scalable products using Next.js, React, React Native, TypeScript, Node.js, and Flutter.",
    siteName: "Shashi Bhushan Jha",
    images: [
      {
        url: "/og-image.jpg", // Create or placeholder
        width: 1200,
        height: 630,
        alt: "Shashi Bhushan Jha Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashi Bhushan Jha | Software Developer",
    description: "Software Developer turning ideas into scalable products using Next.js, React, React Native, TypeScript, Node.js, and Flutter.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
