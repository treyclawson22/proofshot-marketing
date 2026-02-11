import Image from "next/image";
import { Check } from "lucide-react";

interface ShowcaseSectionProps {
  headline: string;
  description: string;
  features: string[];
  imagePosition: "left" | "right";
  bgColor?: string;
  screenshot?: string;
  screenshotAlt?: string;
}

function ShowcaseSection({
  headline,
  description,
  features,
  imagePosition,
  bgColor = "white",
  screenshot,
  screenshotAlt,
}: ShowcaseSectionProps) {
  const isReversed = imagePosition === "left";

  return (
    <section className={`py-20 lg:py-24 ${bgColor === "gray" ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className={isReversed ? "lg:order-2" : ""}>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight leading-tight mb-6">
              {headline}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone Mockup */}
          <div
            className={`flex justify-center ${
              isReversed ? "lg:order-1 lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="flex-1 bg-gray-900 overflow-hidden">
                  {screenshot ? (
                    <Image
                      src={screenshot}
                      alt={screenshotAlt || "App screenshot"}
                      width={280}
                      height={607}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-600 text-sm">Screenshot</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppShowcaseCapture() {
  return (
    <ShowcaseSection
      headline="From Job Site to Pro Photo in 30 Seconds"
      description="No more fumbling with photo apps and editors. Add your before and after, pick a template, and you're done. Your logo is automatically applied."
      features={[
        "Add your before & after photos",
        "4 professional templates",
        "Your logo, your brand",
        "AI-powered captions",
      ]}
      imagePosition="right"
      screenshot="/screenshots/capture-screen.png"
      screenshotAlt="ProofShot Pro capture screen showing before photo added"
    />
  );
}

export function AppShowcaseReports() {
  return (
    <ShowcaseSection
      headline="Reports That Win Customers"
      description="Send professional PDF reports that make you look like a Fortune 500 company. Your branding, your contact info, even a QR code to your review page."
      features={[
        "Branded PDF reports",
        "Customer details & work notes",
        "QR code to your reviews",
        "Email or text in one tap",
      ]}
      imagePosition="left"
      bgColor="gray"
      screenshot="/screenshots/pdf-preview.png"
      screenshotAlt="ProofShot Pro PDF report preview with branding and before/after photos"
    />
  );
}

export function AppShowcaseMarketing() {
  return (
    <ShowcaseSection
      headline="Turn Every Job Into Marketing Gold"
      description="AI writes your social captions. Hashtags included. Post your work and attract new customers without lifting a finger."
      features={[
        "AI-generated captions",
        "Industry-specific hashtags",
        "Watermarked for social",
        "Clean versions saved",
      ]}
      imagePosition="right"
      screenshot="/screenshots/social-share.png"
      screenshotAlt="ProofShot Pro social media screen with AI-generated caption"
    />
  );
}
