import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProofShot Pro - Document Your Work. Get Paid Faster.",
  description: "The easiest way for contractors and service professionals to capture before & after photos, generate professional reports, and share proof of completed work with clients.",
  keywords: ["contractor app", "before after photos", "job documentation", "service professionals", "photo reports", "proof of work"],
  openGraph: {
    title: "ProofShot Pro - Document Your Work. Get Paid Faster.",
    description: "The easiest way for contractors to capture before & after photos and share proof of completed work.",
    type: "website",
    url: "https://proofshotpro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofShot Pro - Document Your Work. Get Paid Faster.",
    description: "The easiest way for contractors to capture before & after photos and share proof of completed work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
