// src/components/HeroSection.tsx
import React from 'react';
import { Leaf, Beaker, Recycle, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Optional very subtle background blobs - opacity extremely low */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute -right-60 bottom-20 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-5 sm:px-8 pt-16 pb-20 md:pt-20 lg:pt-24 lg:pb-32 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left - Text Content */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-10 md:space-y-12 z-10">
          <div className="space-y-5 md:space-y-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-gray-900">
              Rooted in science.
              <br />
              <span className="text-emerald-700">Inspired by nature.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl font-light leading-relaxed">
              Clean, clinically-proven skincare that respects your skin and the planet.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
            <FeatureCard
              icon={<Leaf className="w-7 h-7" />}
              title="Clean Ingredients"
              description="No parabens, sulfates, or harsh chemicals"
              color="emerald"
            />
            <FeatureCard
              icon={<Beaker className="w-7 h-7" />}
              title="Science-Backed"
              description="Clinically tested & dermatologist approved"
              color="teal"
            />
            <FeatureCard
              icon={<Recycle className="w-7 h-7" />}
              title="Sustainable"
              description="Eco-conscious packaging & sourcing"
              color="green"
            />
            <FeatureCard
              icon={<Heart className="w-7 h-7" />}
              title="Cruelty-Free"
              description="Never tested on animals"
              color="rose"
            />
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button
              className={`
                inline-flex items-center gap-3 px-8 py-4.5 
                bg-emerald-700 hover:bg-emerald-800 
                text-white text-lg font-medium
                rounded-full transition-all duration-300
                shadow-lg shadow-emerald-700/20 hover:shadow-emerald-800/30
                transform hover:-translate-y-0.5 active:translate-y-0
              `}
            >
              Learn more
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Right - Fixed-size Image (top-attached / items-start aligned) */}
        <div className="relative w-full lg:w-[692px] lg:h-[894px] lg:flex-shrink-0 rounded-none overflow-hidden shadow-2xl shadow-emerald-900/5 order-first lg:order-last">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

          <img
            src="https://thumbs.dreamstime.com/b/close-up-womans-face-green-facial-mask-resembling-mustache-generative-ai-woman-green-facial-mask-mustache-439471922.jpg"
            alt="Woman with green face mask in natural setting"
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.03]"
            loading="eager"
          />

          {/* Product jar overlay - non-rounded, positioned bottom-right */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-none overflow-hidden shadow-2xl shadow-black/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://thumbs.dreamstime.com/b/green-skincare-packaging-set-botanical-leaves-minimal-natural-cosmetics-mockup-beige-background-modern-clean-beauty-scene-434649718.jpg"
                alt="Green natural skincare cream jar"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </div>

      {/* +5K happy customers - bottom left */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 z-10">
        <div className="flex -space-x-3">
          {[
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          ].map((url, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-md"
            >
              <img src={url} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-700 font-medium pl-2">+5K happy customers</span>
      </div>
    </section>
  );
};

// FeatureCard remains unchanged
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'emerald' | 'teal' | 'green' | 'rose';
};

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorMap = {
    emerald: 'text-emerald-700 bg-emerald-100/70',
    teal: 'text-teal-700 bg-teal-100/70',
    green: 'text-green-700 bg-green-100/70',
    rose: 'text-rose-600 bg-rose-100/70',
  };

  return (
    <div className="group flex items-start gap-4">
      <div className={`p-3.5 rounded-xl ${colorMap[color]} transition-colors group-hover:bg-opacity-90`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default HeroSection;