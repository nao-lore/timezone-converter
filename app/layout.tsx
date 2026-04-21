import type { Metadata } from "next";
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

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "Time Zone Converter - Convert Time Between Zones | timezone-converter",
  description:
    "Free online time zone converter. Convert time between any time zones worldwide. Compare multiple zones, check DST status, and find the current time anywhere.",
  keywords: [
    "timezone converter",
    "time zone converter",
    "world clock",
    "convert time zones",
    "time difference calculator",
    "utc converter",
  ],
  authors: [{ name: "timezone-converter" }],
  openGraph: {
    title: "Time Zone Converter - Convert Time Between Zones",
    description:
      "Free online tool to convert time between any time zones. Compare multiple zones at once with DST indicators.",
    url: "https://timezone-converter.vercel.app",
    siteName: "timezone-converter",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Zone Converter - Convert Time Between Zones",
    description:
      "Free online tool to convert time between any time zones. Compare multiple zones at once with DST indicators.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://timezone-converter.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Time Zone Converter",
              description:
                "Free online time zone converter. Convert time between any time zones worldwide with DST indicators and multi-zone comparison.",
              url: "https://timezone-converter.vercel.app",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Convert time between any time zones",
                "Compare multiple time zones at once",
                "Current time display for each zone",
                "DST indicator",
                "Date picker for specific date conversion",
                "Popular timezones quick access",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
