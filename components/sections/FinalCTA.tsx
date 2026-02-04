import { Button } from "../ui";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
          Ready to Share The Proof?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join contractors who document smarter, not harder.
        </p>
        <Button href="https://app.proofshotpro.com/signup" showArrow>
          Claim My Free Account
        </Button>
        <p className="text-sm text-gray-500 mt-4">No credit card required</p>
      </div>
    </section>
  );
}
