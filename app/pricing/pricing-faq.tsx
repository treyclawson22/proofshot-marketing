"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const pricingFaqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Try Pro free for 14 days. No credit card required. You'll have full access to all Pro features during the trial.",
  },
  {
    question: "What happens when I hit my project limit?",
    answer:
      "You'll get a warning and 30 days to export or delete projects. We never delete without notice. You can always upgrade to get more capacity.",
  },
  {
    question: "Can I switch plans?",
    answer:
      "Yes, upgrade or downgrade anytime. Changes apply immediately, and any payments are prorated. No penalties for switching.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major credit cards (Visa, Mastercard, American Express) via Stripe. We also accept debit cards.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 30 days for a full refund. No questions asked.",
  },
  {
    question: "What's the difference between monthly and annual?",
    answer:
      "Annual saves you 30% ($100/year). Same features, just billed yearly. Plus your rate is locked — no price increases ever.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[700px] mx-auto px-6 lg:px-8">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-10 text-center">
          Pricing Questions
        </h2>
        <div className="divide-y divide-gray-200">
          {pricingFaqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`pricing-faq-answer-${index}`}
                id={`pricing-faq-question-${index}`}
              >
                <span className="font-display font-semibold text-gray-900 pr-8 group-hover:text-orange transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`pricing-faq-answer-${index}`}
                role="region"
                aria-labelledby={`pricing-faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
