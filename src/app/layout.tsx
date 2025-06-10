import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono, Monoton } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/ui/nav";
import UnifiedBackground from "@/components/ui/layout/UnifiedBackground";
import "./globals.css";

// Font configurations with optimization
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lastica",
  display: "swap",
  preload: true,
  fallback: ["Arial Black", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-interphases",
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-anonymous",
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
  display: "swap",
  preload: true,
  fallback: ["Impact", "sans-serif"],
});

// Enhanced metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://journeyviral.com"),
  title: {
    default: "JourneyViral | Your Content Sucks. We'll Fix That. 🚀",
    template: "%s | JourneyViral",
  },
  description:
    "Stop making ads. Start breaking the internet. We turn corporate cringe into viral gold with AI-powered content creation that actually works.",
  keywords: [
    "viral content creation",
    "social media strategy",
    "content marketing",
    "viral marketing",
    "TikTok growth",
    "Instagram strategy",
    "AI content creation",
    "social media agency",
    "viral video production",
    "content optimization",
  ],
  authors: [
    {
      name: "JourneyViral",
      url: "https://journeyviral.com",
    },
  ],
  creator: "JourneyViral",
  publisher: "JourneyViral",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://journeyviral.com",
    siteName: "JourneyViral",
    title: "JourneyViral | Your Content Sucks. We'll Fix That. 🚀",
    description:
      "Stop making ads. Start breaking the internet. We turn corporate cringe into viral gold.",
    images: [
      {
        url: "/images/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "JourneyViral - Breaking the Internet Since 2024",
        type: "image/jpeg",
      },
      {
        url: "/images/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "JourneyViral Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@journeyviral",
    creator: "@journeyviral",
    title: "JourneyViral | Your Content Sucks. We'll Fix That. 🚀",
    description: "Stop making ads. Start breaking the internet.",
    images: {
      url: "/images/twitter-card.jpg",
      alt: "JourneyViral - Viral Content Experts",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://journeyviral.com",
  },
  category: "technology",
  classification: "Business",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff00ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0f2e" },
  ],
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JourneyViral",
  description: "Revolutionary AI-powered viral content creation agency",
  url: "https://journeyviral.com",
  logo: "https://journeyviral.com/images/logo.svg",
  sameAs: [
    "https://twitter.com/journeyviral",
    "https://instagram.com/journeyviral",
    "https://linkedin.com/company/journeyviral",
    "https://tiktok.com/@journeyviral",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-727-335-1355",
    contactType: "sales",
    email: "hello@journeyviral.com",
    areaServed: "US",
    availableLanguage: ["en"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
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
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} ${monoton.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon variations */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/videos/video_version_of_Homepage_hero_bg.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body
        className="bg-transparent text-white antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Unified background - moved to lower z-index */}
        <div className="fixed inset-0 z-0">
          <UnifiedBackground />
        </div>

        {/* Noise texture overlay */}
        <div
          className="fixed inset-0 opacity-[0.015] pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Global scripts */}
        <Script
          id="smooth-scroll-polyfill"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Add smooth scroll polyfill for Safari
              if (!('scrollBehavior' in document.documentElement.style)) {
                import('https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js');
              }

              // Console Easter Egg
              console.log('%c🚀 Welcome to JourneyViral!', 'font-size: 24px; font-weight: bold; color: #ff00ff;');
              console.log('%c💡 Want to work with us? Email hello@journeyviral.com', 'font-size: 14px; color: #00ffff;');
              console.log('%c🎮 Try the Konami code for a surprise!', 'font-size: 12px; color: #ff6ec7;');
            `,
          }}
        />

        {/* Analytics placeholder */}
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}