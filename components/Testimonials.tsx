const testimonials = [
  {
    quote: "ProofShot has completely changed how I handle job documentation. Clients love the professional reports, and I've had zero disputes since I started using it.",
    author: "Mike R.",
    role: "Pressure Washing Pro",
    initials: "MR",
  },
  {
    quote: "The before and after comparisons sell themselves. I send these to potential customers and they see exactly what I can do. Worth every penny.",
    author: "Sarah K.",
    role: "Landscaping Business Owner",
    initials: "SK",
  },
  {
    quote: "Finally, an app that actually understands what contractors need. Simple, fast, and my reports look amazing. My customers are always impressed.",
    author: "James T.",
    role: "HVAC Technician",
    initials: "JT",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-orange mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 px-4 lg:px-8 bg-gray-900 text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.75rem)] text-white tracking-[-0.03em] mb-4">
          Loved by contractors everywhere
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Join thousands of professionals who use ProofShot Pro to document their work.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <StarRating />
            <blockquote className="text-gray-300 text-base leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-orange rounded-full flex items-center justify-center font-bold text-base">
                {testimonial.initials}
              </div>
              <div>
                <strong className="block font-semibold text-white">{testimonial.author}</strong>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
