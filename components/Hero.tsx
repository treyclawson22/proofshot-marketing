import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0d479b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-[#0d479b]/10 text-[#0d479b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Trusted by 1,000+ contractors
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Document Your Work.{' '}
              <span className="text-[#0d479b]">Get Paid Faster.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              The easiest way for contractors and service professionals to capture
              before & after photos, generate reports, and share proof of completed work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://app.proofshotpro.com/signup"
                className="inline-flex items-center justify-center gap-2 bg-[#0d479b] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0a3a7d] transition-all hover:gap-3"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg border border-slate-200 hover:border-slate-300 transition-colors">
                <Play className="w-5 h-5 text-[#0d479b]" />
                Watch Demo
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              No credit card required. Free plan available.
            </p>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Phone frame */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-slate-100 px-6 py-2 flex justify-between items-center text-xs text-slate-600">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                      <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                      <div className="w-6 h-3 bg-green-500 rounded-sm" />
                    </div>
                  </div>

                  {/* App content mockup */}
                  <div className="aspect-[9/16] bg-gradient-to-b from-slate-50 to-white p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0d479b] rounded-lg" />
                        <span className="font-bold text-slate-900">ProofShot</span>
                      </div>
                      <div className="w-8 h-8 bg-slate-200 rounded-full" />
                    </div>

                    {/* Before/After Preview */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                      <div className="flex">
                        <div className="flex-1 aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-amber-700">Before</span>
                        </div>
                        <div className="flex-1 aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-green-700">After</span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-slate-900 text-sm">Kitchen Renovation</p>
                        <p className="text-xs text-slate-500">Austin, TX • Today</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2">
                      <div className="bg-[#0d479b] text-white text-center py-3 rounded-xl font-semibold text-sm">
                        + New Project
                      </div>
                      <div className="bg-slate-100 text-slate-700 text-center py-3 rounded-xl font-medium text-sm">
                        View All Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Report Sent!</p>
                    <p className="text-xs text-slate-500">PDF delivered</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0d479b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Photo Added</p>
                    <p className="text-xs text-slate-500">After shot captured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
