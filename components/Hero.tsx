import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center pt-28 pb-20 lg:pt-28 lg:pb-16 px-4 lg:px-16 gap-8 lg:gap-12 max-w-[1400px] mx-auto">
      {/* Content */}
      <div className="flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-light px-4 py-2 rounded-full text-sm font-semibold text-orange w-fit">
          NEW — AI-powered captions
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-[clamp(3.5rem,6.5vw,5.5rem)] leading-[0.92] tracking-[-0.04em] uppercase text-gray-900">
          PROOF<br />YOUR<br /><span className="text-orange">WORK.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 leading-relaxed max-w-[440px]">
          Before & after documentation for contractors who mean business. Capture, brand, share — in 30 seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-2 w-full sm:w-auto">
          <Link href="https://app.proofshotpro.com/signup" className="btn-primary w-full sm:w-auto">
            Get Started Free
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#features" className="btn-link">
            See How It Works
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 mt-8 pt-8 border-t border-gray-200 w-full">
          <div className="text-center lg:text-left">
            <strong className="block font-display font-extrabold text-[1.75rem] text-gray-900 tracking-[-0.02em]">10,000+</strong>
            <span className="text-gray-500 text-sm font-medium">Contractors</span>
          </div>
          <div className="text-center lg:text-left">
            <strong className="block font-display font-extrabold text-[1.75rem] text-gray-900 tracking-[-0.02em]">500K+</strong>
            <span className="text-gray-500 text-sm font-medium">Photos Taken</span>
          </div>
          <div className="text-center lg:text-left">
            <strong className="block font-display font-extrabold text-[1.75rem] text-gray-900 tracking-[-0.02em]">4.9★</strong>
            <span className="text-gray-500 text-sm font-medium">Rating</span>
          </div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="flex justify-center items-center relative">
        {/* Floating Badges */}
        <div className="hidden lg:flex absolute top-8 -left-12 bg-white px-4 py-3 rounded-2xl shadow-lg items-center gap-2.5 font-semibold text-sm text-gray-900 animate-float z-10">
          <svg className="text-orange flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          PDF Report Ready
        </div>

        <div className="hidden lg:flex absolute bottom-24 -right-8 bg-white px-4 py-3 rounded-2xl shadow-lg items-center gap-2.5 font-semibold text-sm text-gray-900 animate-float-delayed z-10">
          <svg className="text-orange flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Sent to Client
        </div>

        {/* Phone */}
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="phone-notch" />
            <div className="flex-1 p-5 flex flex-col gap-4">
              {/* Phone Header */}
              <div className="text-white font-display font-bold text-lg text-center">
                New Project
              </div>

              {/* Photo Slots */}
              <div className="flex gap-2.5 flex-1">
                {/* Before Slot */}
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center gap-2.5">
                  <div className="w-14 h-14 border-2 border-dashed border-white/45 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Before</span>
                </div>

                {/* After Slot */}
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-green to-green-dark flex flex-col items-center justify-center gap-2.5">
                  <div className="w-14 h-14 border-2 border-dashed border-white/45 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-xs font-bold uppercase tracking-wider">After</span>
                </div>
              </div>

              {/* Generate Button */}
              <button className="bg-orange text-white py-4 rounded-xl text-center font-bold text-base">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
