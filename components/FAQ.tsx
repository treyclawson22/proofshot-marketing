'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    question: 'Is there a free trial?',
    answer:
      'Yes! New users can try Pro features free for 14 days. After that, you can continue with our Free plan or upgrade to Pro. No credit card required to start.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We use industry-standard encryption for all data in transit and at rest. Photos are stored securely in the cloud with automatic backups. We never share or sell your data.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about ProofShot Pro.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-200 ${
                openIndex === index
                  ? 'border-[#0d479b] shadow-md'
                  : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-slate-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
