import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { Industry, getRelatedIndustries } from "@/lib/industries";
import {
  AlertTriangle,
  Check,
  Camera,
  FileText,
  Share2,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface IndustryPageProps {
  industry: Industry;
}

export function IndustryPageTemplate({ industry }: IndustryPageProps) {
  const relatedIndustries = getRelatedIndustries(industry.slug);

  return (
    <>
      <Navigation />
      <main id="main" className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-light/50 to-white">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
            <p className="text-orange font-display font-bold uppercase tracking-wide mb-4">
              For {industry.name} Professionals
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              {industry.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {industry.tagline}
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required
            </p>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                The {industry.name} Challenge
              </h2>
              <p className="text-lg text-gray-600">
                Sound familiar? You&apos;re not alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {industry.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-6">
                  ProofShot Pro for {industry.name}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Document every job in 30 seconds. Add your before and after photos,
                  apply your branding automatically, and share professional results
                  with customers and on social media.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Create in seconds</strong> — add before photo, add after photo, done
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Your branding</strong> — logo automatically applied to every image
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Professional templates</strong> — 4 layouts to choose from
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Works offline</strong> — perfect for job sites without service
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-3xl p-4 shadow-xl">
                <div className="bg-gray-800 rounded-2xl aspect-[9/16] max-w-[280px] mx-auto flex items-center justify-center">
                  <span className="text-gray-500 text-sm text-center px-4">
                    {industry.name} example screenshot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                How {industry.name} Pros Use ProofShot
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {industry.useCases.map((useCase, index) => {
                const icons = [Camera, FileText, Share2, Shield];
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-gray-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Example Gallery Placeholder */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                {industry.name} Before & Afters
              </h2>
              <p className="text-lg text-gray-600">
                See what&apos;s possible with ProofShot Pro.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Example {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Ready to Document Your {industry.name} Work?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join {industry.name.toLowerCase()} professionals who document smarter, not harder.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
          </div>
        </section>

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16 lg:py-20 bg-gray-900">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-2">
                  Also Popular With
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {relatedIndustries.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/industries/${related.slug}`}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors"
                  >
                    {related.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
