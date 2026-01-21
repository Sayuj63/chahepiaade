import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Chah E Piaa De - Authentic Indian Chai Experience",
  description: "Experience the authentic taste of traditional Indian chai, crafted with love and the finest spices from the heart of Punjab. Visit us for premium masala chai, adrak chai, and more.",
  keywords: "Indian chai, masala chai, authentic chai, Punjab tea, traditional chai, premium chai, chai cafe",
  authors: [{ name: "Chah E Piaa De" }],
  openGraph: {
    title: "Chah E Piaa De - Authentic Indian Chai Experience",
    description: "Where every sip tells a story. Experience the authentic taste of traditional Indian chai.",
    url: "https://chahpiaade.com",
    siteName: "Chah E Piaa De",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        width: 1200,
        height: 630,
        alt: "Chah E Piaa De - Traditional Indian Chai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chah E Piaa De - Authentic Indian Chai Experience",
    description: "Where every sip tells a story. Experience the authentic taste of traditional Indian chai.",
    images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96"],
  },
  robots: "index, follow",
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
        {children}
      </body>
    </html>
  );
}
