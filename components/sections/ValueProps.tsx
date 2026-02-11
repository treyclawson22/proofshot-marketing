import Image from "next/image";
import { Camera, FileText, Share2, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Combine in Seconds",
    description:
      "Add your before & after photos and create branded images. Organized by project.",
    screenshot: "/screenshots/template-selection.png",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description:
      "Generate branded PDF reports your customers will love. Logo, details, everything.",
    screenshot: "/screenshots/pdf-preview.png",
  },
  {
    icon: Share2,
    title: "Share Anywhere",
    description:
      "Email, text, or post to social with AI-generated captions and hashtags.",
    screenshot: "/screenshots/share-screen.png",
  },
  {
    icon: Shield,
    title: "Protect Your Work",
    description:
      "Timestamped proof of completion. Never lose a payment dispute again.",
    screenshot: "/screenshots/project-overview.png",
  },
];

export function ValueProps() {
  return (
    <section id="features" className="py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for the way contractors actually work. No complicated setup,
            no learning curve.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Screenshot with gradient fade */}
              <div className="relative">
                <div className="h-[180px] bg-gray-900 overflow-hidden">
                  <Image
                    src={feature.screenshot}
                    alt={`${feature.title} screenshot`}
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 10%" }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
