import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ScrollRestoration } from "next-scroll-restoration";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteData = {
  name: "FashBrew",
  url: "https://fashbrew.com",
  description:
    "Jelajahi kafe-kafe aesthetic di Jember dengan FashBrew. Temukan spot foto instagramable, menu signature, dan rekomendasi outfit untuk OOTD kamu.",
};

const organizationData = {
  name: "FashBrew",
  url: "https://fashbrew.com",
  logo: "https://fashbrew.com/logo.png",
  socialLinks: [
    "https://instagram.com/fashbrew",
    "https://twitter.com/fashbrew",
  ],
};

export const metadata: Metadata = {
  title: "FashBrew - Temukan Kafe Aesthetic di Jember",

  description:
    "Jelajahi kafe-kafe aesthetic di Jember dengan FashBrew. Temukan spot foto instagramable, menu signature, dan rekomendasi outfit untuk OOTD kamu.",
  keywords:
    "kafe jember, coffee shop jember, tempat nongkrong jember, kafe aesthetic, spot foto instagramable, rekomendasi kafe",
  authors: [{ name: "FashBrew Team" }],
  openGraph: {
    title: "FashBrew - Temukan Kafe Aesthetic di Jember",
    description:
      "Jelajahi kafe-kafe aesthetic di Jember dengan FashBrew. Temukan spot foto instagramable, menu signature, dan rekomendasi outfit untuk OOTD kamu.",
    url: "https://fashbrew.com",
    siteName: "FashBrew",
    images: [
      {
        url: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751275238/fashbrew/Tangkapan_Layar_2025-06-30_pukul_16.20.13_bkunod.png",
        width: 800,
        height: 600,
        alt: "FashBrew - Kafe Aesthetic di Jember",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FashBrew - Temukan Kafe Aesthetic di Jember",
    description:
      "Jelajahi kafe-kafe aesthetic di Jember dengan FashBrew. Temukan spot foto instagramable, menu signature, dan rekomendasi outfit untuk OOTD kamu.",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751275238/fashbrew/Tangkapan_Layar_2025-06-30_pukul_16.20.13_bkunod.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <StructuredData type="website" data={websiteData} />
        <StructuredData type="organization" data={organizationData} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dvuza2lpc/image/upload/v1751993789/fashbrew/dreamina-2025-07-08-8782-buatkan_logo_brand_dengan_ketentuan_mini..._q2oyje.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollRestoration />
      </body>
    </html>
  );
}
