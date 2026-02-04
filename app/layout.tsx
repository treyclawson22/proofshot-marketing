import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proofshotpro.com"),
  title: "ProofShot Pro — Before & After Photo Documentation for Contractors",
  description:
    "Turn your before & after photos into professional branded images, generate PDF reports, and create marketing content in seconds. Free for contractors.",
  keywords: [
    "before after photos",
    "contractor documentation",
    "PDF reports",
    "job site photos",
    "pressure washing",
    "pest control",
    "landscaping",
    "HVAC",
    "contractor app",
    "proof of work",
  ],
  authors: [{ name: "ProofShot Pro" }],
  creator: "ProofShot Pro",
  publisher: "ProofShot Pro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proofshotpro.com",
    siteName: "ProofShot Pro",
    title: "ProofShot Pro — Document Your Work. Get Paid Faster.",
    description:
      "Before & after photos, branded PDF reports, and marketing content — all from your phone in 30 seconds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProofShot Pro - Before & After Photo Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@proofshotpro",
    creator: "@proofshotpro",
    title: "ProofShot Pro — Document Your Work. Get Paid Faster.",
    description:
      "Before & after photos, branded PDF reports, and marketing content — all from your phone in 30 seconds.",
    images: ["/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://proofshotpro.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ProofShot Pro",
              description:
                "Before & after photo documentation app for contractors",
              applicationCategory: "BusinessApplication",
              operatingSystem: "iOS, Android, Web",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free",
                  description: "5 projects per month",
                },
                {
                  "@type": "Offer",
                  price: "29.99",
                  priceCurrency: "USD",
                  name: "Pro Monthly",
                  description: "Unlimited projects, team features",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
