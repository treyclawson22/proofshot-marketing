import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("landscaping");

export const metadata: Metadata = {
  title: "Showcase Your Landscaping Transformations — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    title: "Showcase Your Landscaping Transformations — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/landscaping",
    siteName: "ProofShot Pro",
    type: "website",
  },
};

export default function LandscapingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
