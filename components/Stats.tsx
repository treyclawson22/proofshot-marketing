const industries = [
  'Pressure Washing',
  'Landscaping',
  'HVAC',
  'Pest Control',
  'Roofing',
  'Painting',
  'Plumbing',
  'Electrical',
  'Cleaning',
  'Construction',
];

export function Stats() {
  return (
    <section className="bg-gray-50 py-12 text-center border-t border-b border-gray-100">
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">
        Trusted by 10,000+ contractors in every trade
      </p>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
        {industries.map((industry) => (
          <span
            key={industry}
            className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700"
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
