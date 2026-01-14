import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Perfect for trying out ProofShot',
    features: [
      '5 projects per month',
      '10 stored projects',
      'Before & after photos',
      'Basic sharing',
      'ProofShot branding',
    ],
    cta: 'Get Started',
    ctaStyle: 'secondary',
  },
  {
    name: 'Pro Monthly',
    price: '$29.99',
    period: '/month',
    description: 'For active professionals',
    popular: true,
    promo: 'First month just $9.99',
    features: [
      'Unlimited projects',
      '100 stored projects',
      '3 team members included',
      'Remove ProofShot branding',
      'AI captions & descriptions',
      'PDF reports',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
  },
  {
    name: 'Pro Annual',
    price: '$249.99',
    period: '/year',
    description: 'Best value - save 30%',
    features: [
      'Everything in Pro Monthly',
      '30% savings vs monthly',
      'Lock in your rate',
      'Annual billing',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'secondary',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-[#0d479b] text-white ring-4 ring-[#0d479b]/20 scale-105'
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-blue-200' : 'text-slate-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={plan.popular ? 'text-blue-200' : 'text-slate-500'}
                >
                  {plan.period}
                </span>
                {plan.promo && (
                  <p className="text-green-400 text-sm font-semibold mt-2">
                    {plan.promo}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? 'text-green-400' : 'text-green-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-blue-100' : 'text-slate-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.proofshotpro.com/signup"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-white text-[#0d479b] hover:bg-blue-50'
                    : plan.popular
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-[#0d479b] text-white hover:bg-[#0a3a7d]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Lifetime deal callout */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
              Limited Time
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Lifetime Deal - $499
            </h3>
            <p className="text-slate-600 mb-4">
              Pay once, use forever. Includes 30 team members. Only available to
              the first 50 customers.
            </p>
            <Link
              href="https://app.proofshotpro.com/signup"
              className="inline-flex items-center justify-center bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Get Lifetime Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
