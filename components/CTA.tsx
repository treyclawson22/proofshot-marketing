import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-24 px-4 lg:px-8 text-center bg-gradient-to-b from-white to-orange-light">
      <h2 className="font-display font-black text-[clamp(2rem,5vw,3rem)] text-gray-900 tracking-[-0.03em] uppercase mb-4">
        Ready to proof your work?
      </h2>
      <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
        Join thousands of contractors who use ProofShot Pro to document jobs and get paid faster.
      </p>
      <Link
        href="https://app.proofshotpro.com/signup"
        className="btn-primary inline-flex text-lg px-10 py-5"
      >
        Get Started Free
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
      <p className="text-gray-500 text-sm mt-4">
        No credit card required. Free plan available.
      </p>
    </section>
  );
}
