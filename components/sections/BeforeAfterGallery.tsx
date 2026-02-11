import Image from "next/image";
import type { BeforeAfterPair } from "@/lib/industries";

interface BeforeAfterGalleryProps {
  title: string;
  pairs: BeforeAfterPair[];
  industryName: string;
}

export function BeforeAfterGallery({
  title,
  pairs,
  industryName,
}: BeforeAfterGalleryProps) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-lg text-[#4B5563]">
            See what&apos;s possible with ProofShot Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pairs.map((pair) => (
            <div
              key={pair.label}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <span className="font-display font-bold text-sm uppercase tracking-wide text-[#0A0A0A]">
                  {pair.label}
                </span>
              </div>

              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={pair.before}
                    alt={`${pair.alt} - before ${industryName}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    BEFORE
                  </span>
                </div>

                <div className="relative aspect-[4/3]">
                  <Image
                    src={pair.after}
                    alt={`${pair.alt} - after ${industryName}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#E97A35] text-white text-xs font-bold px-2 py-1 rounded">
                    AFTER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
