"use client";

import Image from "next/image";
import { Button } from "../ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-light/30 via-white to-white" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-light text-orange px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              NEW — AI-powered captions
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-[2.75rem] md:text-6xl lg:text-[5rem] leading-[0.92] tracking-[-0.04em] text-black uppercase mb-6">
              Share
              <br />
              The
              <br />
              Proof.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Before & after documentation for contractors who mean business.
              <br className="hidden md:block" />
              Combine, brand, share — in 30 seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="https://app.proofshotpro.com/signup" showArrow>
                Claim My Free Account
              </Button>
              <Button href="#features" variant="secondary">
                See How It Works
              </Button>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                AI-powered captions
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                30-second workflow
              </span>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-notch" />
                  <div className="flex-1 bg-gray-900 overflow-hidden">
                    <Image
                      src="/screenshots/project-overview.png"
                      alt="ProofShot Pro app showing a completed before and after project"
                      width={280}
                      height={607}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg px-4 py-3 animate-float hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    PDF Report Ready
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg px-4 py-3 animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Sent to Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
