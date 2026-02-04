'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What types of contractors use ProofShot Pro?',
    answer:
      'ProofShot Pro is used by a wide range of service professionals including landscapers, painters, cleaners, plumbers, electricians, HVAC technicians, roofers, and general contractors. Anyone who wants to document their work and share proof with clients can benefit.',
  },
  {
    question: 'Can I use ProofShot Pro offline?',
    answer:
      'Yes! ProofShot Pro works offline, which is perfect for job sites with poor connectivity. Your photos and project data are stored locally and automatically sync to the cloud when you reconnect to the internet.',
  },
  {
    question: 'How do clients view the reports I send?',
    answer:
      'Clients receive a link that opens directly in their web browser. They can view all photos, job details, and download a PDF report without installing any app. It works on any device.',
  },
  {
    question: 'What happens to my projects if I cancel?',
    answer:
      'If you cancel your Pro subscription, you keep access to your existing projects but with Free tier limits. You can export all your data anytime. We never delete your projects without notice.',
  },
  {
    question: 'Can I add my company branding?',
    answer:
      'Pro subscribers can remove ProofShot branding and add their own company logo, business name, and contact info to all reports. Your reports look 100% professional and branded to your business.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes! Our Free tier gives you full access to core features including AI-powered captions, all templates, and PDF reports — forever. Upgrade to Pro when you need unlimited projects, team members, or want to remove ProofShot branding.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 lg:px-8 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.75rem)] text-gray-900 tracking-[-0.03em] mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Everything you need to know about ProofShot Pro.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
