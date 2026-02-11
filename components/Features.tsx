const showcases = [
  {
    title: 'ADD YOUR BEFORE & AFTER',
    description: 'Add your before photo, do the job, then add the after. ProofShot automatically combines them into a professional side-by-side comparison with your branding.',
    features: [
      'Side-by-side photo comparisons',
      'Add job details and notes',
      'GPS location and timestamp',
      'GPS location on every photo',
    ],
    reverse: false,
    bgClass: '',
  },
  {
    title: 'GENERATE PRO REPORTS',
    description: 'Turn your project photos into polished PDF reports with your company branding. Perfect for client records, invoicing, and dispute protection.',
    features: [
      'Your logo and company info',
      'Customizable templates',
      'Job details and descriptions',
      'AI-powered captions',
    ],
    reverse: true,
    bgClass: 'bg-gray-50',
  },
  {
    title: 'SHARE & GET PAID',
    description: 'Send professional reports to clients with one tap. They can view on any device without downloading an app. Build trust and get paid faster.',
    features: [
      'Email or shareable link',
      'No app required to view',
      'Track when reports are viewed',
      'Download as PDF anytime',
    ],
    reverse: false,
    bgClass: '',
  },
];

function PhoneMockup({ variant }: { variant: 'capture' | 'report' | 'share' }) {
  return (
    <div className="w-[260px] h-[540px] bg-black rounded-[40px] p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-[32px] flex flex-col items-center justify-center text-gray-400 text-sm text-center p-8">
        {variant === 'capture' && (
          <div className="space-y-4 w-full">
            <div className="flex gap-2">
              <div className="flex-1 aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-xs text-white/60 font-medium">Before</span>
              </div>
              <div className="flex-1 aspect-square bg-gradient-to-br from-green to-green-dark rounded-xl flex items-center justify-center">
                <span className="text-xs text-white/80 font-medium">After</span>
              </div>
            </div>
            <div className="bg-orange py-3 rounded-xl text-white font-bold text-sm">
              Add Photo
            </div>
          </div>
        )}
        {variant === 'report' && (
          <div className="bg-white rounded-xl p-4 w-full shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange rounded" />
              <div className="flex-1 h-3 bg-gray-200 rounded" />
            </div>
            <div className="h-24 bg-gradient-to-r from-gray-200 to-green-dark rounded-lg mb-3" />
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded" />
              <div className="h-2 bg-gray-100 rounded w-4/5" />
              <div className="h-2 bg-gray-100 rounded w-3/5" />
            </div>
          </div>
        )}
        {variant === 'share' && (
          <div className="space-y-4 w-full">
            <div className="h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-white/60 text-xs">Report Preview</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue py-3 rounded-xl text-white text-xs font-semibold">Email</div>
              <div className="bg-green py-3 rounded-xl text-white text-xs font-semibold">Text</div>
              <div className="bg-red py-3 rounded-xl text-white text-xs font-semibold">Social</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  const variants: ('capture' | 'report' | 'share')[] = ['capture', 'report', 'share'];

  return (
    <section>
      {showcases.map((showcase, index) => (
        <div key={index} className={`py-20 px-4 lg:px-8 ${showcase.bgClass}`}>
          <div className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${showcase.reverse ? 'lg:[direction:rtl]' : ''}`}>
            {/* Text Content */}
            <div className={showcase.reverse ? 'lg:[direction:ltr]' : ''}>
              <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.25rem)] text-gray-900 tracking-[-0.02em] uppercase mb-5">
                {showcase.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {showcase.description}
              </p>
              <ul className="space-y-3">
                {showcase.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone Visual */}
            <div className={`flex justify-center ${showcase.reverse ? 'lg:[direction:ltr]' : ''}`}>
              <PhoneMockup variant={variants[index]} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
