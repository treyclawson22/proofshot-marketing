import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0d479b] to-[#1e5bb5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Document Your Work Professionally?
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Join thousands of contractors who use ProofShot Pro to build trust,
          protect their business, and get paid faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://app.proofshotpro.com/signup"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0d479b] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all hover:gap-3"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
          >
            View Pricing
          </Link>
        </div>
        <p className="text-blue-200 text-sm mt-6">
          No credit card required. Free plan available forever.
        </p>
      </div>
    </section>
  );
}
