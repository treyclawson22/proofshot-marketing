import { Check, Star } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "5 projects/month",
    features: ["5 projects per month", "10 stored projects", "All 4 templates"],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
    featured: false,
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "/month",
    description: "Unlimited projects",
    features: [
      "Unlimited projects",
      "3 team members",
      "AI captions",
      "Remove branding",
    ],
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
    featured: true,
    badge: "Most Popular",
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Start free. Upgrade when you need more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.featured
                  ? "border-2 border-orange shadow-lg scale-105 z-10"
                  : "border border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    <Star className="w-3 h-3 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="font-display font-black text-4xl text-black">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500">{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href="https://app.proofshotpro.com/signup"
                variant={plan.ctaVariant}
                className="w-full"
                size="small"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* See Full Pricing Link */}
        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-orange hover:text-orange-hover font-medium transition-colors"
          >
            See full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}
