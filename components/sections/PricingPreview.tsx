import { Check } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "5 projects/month",
    features: ["5 projects per month", "10 stored projects", "All 4 templates"],
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white rounded-2xl p-8 border border-gray-200"
            >
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
                variant="primary"
                className="w-full"
                size="small"
              >
                Claim My Free Account
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
