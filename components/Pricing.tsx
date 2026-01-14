import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: '5 projects per month',
    features: [
      '5 projects per month',
      '10 stored projects',
      'Before & after photos',
      'Basic sharing',
      'ProofShot branding',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29.99',
    period: '/mo',
    description: 'Unlimited projects',
    badge: 'Most Popular',
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
    featured: true,
  },
  {
    name: 'Annual',
    price: '$249.99',
    period: '/yr',
    description: 'Save 30%',
    features: [
      'Everything in Pro',
      '30% savings vs monthly',
      'Lock in your rate',
      'Annual billing',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.75rem)] text-gray-900 tracking-[-0.03em] mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Start free, upgrade when you need more. No hidden fees.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-[20px] p-8 ${
              plan.featured
                ? 'bg-white border-2 border-orange shadow-xl'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {plan.badge}
              </div>
            )}

            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
              {plan.name}
            </h3>

            <div className="mb-1">
              <span className="font-display font-extrabold text-[2.75rem] text-gray-900 tracking-[-0.03em]">
                {plan.price}
              </span>
              <span className="text-gray-500 font-medium">{plan.period}</span>
            </div>

            <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2.5 text-gray-700 text-[0.95rem]">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="https://app.proofshotpro.com/signup"
              className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                plan.featured
                  ? 'bg-orange text-white hover:bg-orange-hover shadow-[0_4px_14px_rgba(233,122,53,0.35)] hover:shadow-[0_6px_20px_rgba(233,122,53,0.4)] hover:-translate-y-0.5'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
