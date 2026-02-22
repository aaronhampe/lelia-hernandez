import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeInitScript from "@/components/ThemeInitScript";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klavierunterricht Hannover | Lelia Hernández",
  description: "Professioneller Klavierunterricht in Hannover für Kinder und Erwachsene. Klassik, Rock & Pop. Jetzt kostenlose Schnupperstunde vereinbaren!",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Klavierunterricht Hannover | Lelia Hernández",
    description:
      "Professioneller Klavierunterricht in Hannover für Kinder und Erwachsene. Klassik, Rock & Pop. Jetzt kostenlose Schnupperstunde vereinbaren!",
    url: "/",
    siteName: "Lelia Hernández – Klavierunterricht Hannover",
    images: [
      {
        url: "/images/lelia-hernandez-klavier-hannover.webp",
        width: 1600,
        height: 2400,
        alt: "Lelia Hernández am Flügel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klavierunterricht Hannover | Lelia Hernández",
    description:
      "Professioneller Klavierunterricht in Hannover für Kinder und Erwachsene. Klassik, Rock & Pop. Jetzt kostenlose Schnupperstunde vereinbaren!",
    images: ["/images/lelia-hernandez-klavier-hannover.webp"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#lelia-hernandez`,
  name: "Lelia Hernández San Martín",
  jobTitle: "Klavierlehrerin",
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/lelia-hernandez-klavier-hannover.webp`,
  telephone: "0511/629305",
  address: {
    "@type": "PostalAddress",
    postalCode: "30177",
    addressLocality: "Hannover",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Hannover",
  },
  sameAs: ["https://www.facebook.com/lelia.hernandez.9"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-white to-zinc-50 text-zinc-950 dark:from-zinc-950 dark:to-zinc-950 dark:text-zinc-50`}
      >
        <Navbar />
        <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
