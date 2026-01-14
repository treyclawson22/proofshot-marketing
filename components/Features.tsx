import { Check } from 'lucide-react';

const features = [
  {
    title: 'Capture Before & After in Seconds',
    description:
      'Open the app, snap your before photo, complete the job, then capture the after. ProofShot automatically organizes everything into a professional comparison.',
    points: [
      'Side-by-side photo comparisons',
      'Add job details and notes',
      'GPS location and timestamp',
      'Works offline in the field',
    ],
    imageSide: 'right',
  },
  {
    title: 'Generate Professional Reports',
    description:
      'Turn your project photos into polished PDF reports with your company branding. Perfect for client records, invoicing, and dispute protection.',
    points: [
      'Your logo and company info',
      'Customizable templates',
      'Job details and descriptions',
      'AI-powered captions (Pro)',
    ],
    imageSide: 'left',
  },
  {
    title: 'Share with Clients Instantly',
    description:
      'Send professional reports to clients with one tap. They can view on any device without downloading an app. Build trust and get paid faster.',
    points: [
      'Email or shareable link',
      'No app required to view',
      'Track when reports are viewed',
      'Download as PDF anytime',
    ],
    imageSide: 'right',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How ProofShot Pro Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple workflow that fits naturally into how you already work.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                feature.imageSide === 'left' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`mb-8 lg:mb-0 ${
                  feature.imageSide === 'left' ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0d479b] text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image placeholder */}
              <div
                className={`${
                  feature.imageSide === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-6">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#0d479b]/10 rounded-2xl flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-[#0d479b]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-500">Feature Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
