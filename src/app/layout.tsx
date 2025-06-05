import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Using Bebas Neue as a substitute for Lastica (bold, uppercase display font)
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lastica",
  display: "swap",
});

// Using Inter for TT Interphases
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-interphases",
  display: "swap",
});

// Using JetBrains Mono for Anonymous Pro
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-anonymous",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://journeyviral.com"),
  title: "Journeyviral - Transform Corporate Social Media into Viral Success",
  description:
    "Master viral content creation & social media strategy that makes your content stand out. No agency, just results.",
  keywords:
    "viral content, social media strategy, content creation, corporate social media, viral marketing",
  authors: [{ name: "Journeyviral" }],
  openGraph: {
    title: "Journeyviral - Transform Corporate Social Media into Viral Success",
    description:
      "Master viral content creation & social media strategy that makes your content stand out.",
    url: "https://journeyviral.com",
    siteName: "Journeyviral",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Journeyviral - Viral Content Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journeyviral - Transform Corporate Social Media into Viral Success",
    description: "Master viral content creation & social media strategy",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
