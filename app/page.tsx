import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Hero,
  SocialProofBar,
  ValueProps,
  AppShowcaseCapture,
  AppShowcaseReports,
  AppShowcaseMarketing,
  PricingPreview,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <SocialProofBar />
        <ValueProps />
        <AppShowcaseCapture />
        <AppShowcaseReports />
        <AppShowcaseMarketing />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
