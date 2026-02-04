import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("handyman");

export const metadata: Metadata = {
  title: "Before & After Photos for Handyman Services — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    title: "Before & After Photos for Handyman Services — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/handyman",
    siteName: "ProofShot Pro",
    type: "website",
  },
};

export default function HandymanPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
