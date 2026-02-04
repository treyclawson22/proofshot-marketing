export function ValueProps() {
  return (
    <section id="features" className="py-24 px-4 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.75rem)] text-gray-900 tracking-[-0.03em] mb-4">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          ProofShot Pro gives contractors the tools to combine, organize, and share proof of their work professionally.
        </p>
      </div>

      {/* Value Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1: Combine */}
        <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-44 bg-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent" />
            {/* Mini App Screen */}
            <div className="w-[85%] h-[85%] bg-[#1f1f1f] rounded-xl p-2 flex flex-col gap-1.5">
              <div className="h-5 bg-[#2a2a2a] rounded flex items-center justify-center">
                <span className="text-[0.55rem] text-gray-400 font-semibold">New Project</span>
              </div>
              <div className="flex-1 flex gap-1.5">
                <div className="flex-1 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-[0.45rem] text-white/80 font-bold uppercase tracking-wide">Before</span>
                </div>
                <div className="flex-1 rounded-lg bg-gradient-to-br from-green to-green-dark flex items-center justify-center">
                  <span className="text-[0.45rem] text-white/80 font-bold uppercase tracking-wide">After</span>
                </div>
              </div>
              <div className="h-6 bg-orange rounded flex items-center justify-center">
                <span className="text-[0.5rem] text-white font-bold">Generate Report</span>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Combine</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Before & after photos with timestamps and GPS data.</p>
          </div>
        </div>

        {/* Card 2: Generate */}
        <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-44 bg-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent" />
            {/* Mini PDF Preview */}
            <div className="w-[70%] h-[85%] bg-white rounded-lg p-2.5 flex flex-col gap-1.5 shadow-lg">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-orange rounded" />
                <div className="flex-1 h-2 bg-gray-200 rounded" />
              </div>
              <div className="flex-1 bg-gradient-to-r from-gray-300 via-gray-300 to-green-dark rounded flex items-center justify-center">
                <span className="text-[0.45rem] text-gray-600 font-semibold">Before → After</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-1.5 bg-gray-100 rounded" />
                <div className="h-1.5 bg-gray-100 rounded w-4/5" />
                <div className="h-1.5 bg-gray-100 rounded w-3/5" />
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Generate</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Branded PDF reports with your logo in one tap.</p>
          </div>
        </div>

        {/* Card 3: Share */}
        <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-44 bg-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent" />
            {/* Mini Share Screen */}
            <div className="w-[85%] h-[85%] bg-[#1f1f1f] rounded-xl p-2 flex flex-col gap-1.5">
              <div className="flex-1 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-[0.45rem] text-white/60">Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-5 bg-blue rounded flex items-center justify-center">
                  <span className="text-[0.4rem] text-white font-semibold">Email</span>
                </div>
                <div className="h-5 bg-green rounded flex items-center justify-center">
                  <span className="text-[0.4rem] text-white font-semibold">Text</span>
                </div>
                <div className="h-5 bg-red rounded flex items-center justify-center">
                  <span className="text-[0.4rem] text-white font-semibold">Social</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Share</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Send via email, text, or social media instantly.</p>
          </div>
        </div>

        {/* Card 4: Protect */}
        <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-44 bg-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent" />
            {/* Mini Protect Screen */}
            <div className="w-[85%] h-[85%] bg-[#1f1f1f] rounded-xl p-2.5 flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[0.5rem] text-white font-semibold">Verified Proof</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-[0.4rem] text-gray-500">Timestamp</span>
                  <span className="text-[0.4rem] text-gray-300 font-medium">Jan 15, 2:34 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[0.4rem] text-gray-500">Location</span>
                  <span className="text-[0.4rem] text-gray-300 font-medium">Austin, TX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[0.4rem] text-gray-500">Device ID</span>
                  <span className="text-[0.4rem] text-gray-300 font-medium">iPhone 15</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Protect</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Timestamped proof protects against disputes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
