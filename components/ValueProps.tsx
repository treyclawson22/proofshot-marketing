import { Camera, FileText, Users, Shield, Zap, Smartphone } from 'lucide-react';

const props = [
  {
    icon: Camera,
    title: 'Before & After Photos',
    description: 'Capture side-by-side comparisons that showcase your work and build client trust.',
  },
  {
    icon: FileText,
    title: 'Professional PDF Reports',
    description: 'Generate branded reports with job details, photos, and your company info.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Add team members and share projects across your organization seamlessly.',
  },
  {
    icon: Zap,
    title: 'Instant Sharing',
    description: 'Send reports to clients via email or link with one tap. No app needed to view.',
  },
  {
    icon: Shield,
    title: 'Protect Your Business',
    description: 'Timestamped photos prove work completion and protect against disputes.',
  },
  {
    icon: Smartphone,
    title: 'Works Offline',
    description: 'Capture photos anywhere, even without internet. Sync when you reconnect.',
  },
];

export function ValueProps() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Document Jobs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ProofShot Pro gives contractors the tools to capture, organize, and share
            proof of their work professionally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-slate-200 hover:border-[#0d479b]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#0d479b]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d479b] transition-colors">
                <prop.icon className="w-6 h-6 text-[#0d479b] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{prop.title}</h3>
              <p className="text-slate-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
