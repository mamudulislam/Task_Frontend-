import React from "react";
import { Leaf, Beaker, Recycle, Heart, ArrowUpRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute -right-60 bottom-20 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-10 md:space-y-12 z-10 pt-20 mt-[80px] ml-20">

          {/* Heading */}
          <div className="space-y-5 md:space-y-7">
            <h1 className="text-gray-900 font-medium tracking-normal leading-[72px]" style={{ fontFamily: '"EB Garamond", serif', fontSize: '56px' }}>
              Rooted in science.
              <br />
              Inspired by nature.
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 p-6 max-w-4xl">
            <div className="space-y-4">
              <img src="/images/cleaningredients.png" alt="Clean Ingredients" className="w-12 h-12 object-contain" />
              <div>
                <h3 style={{ fontFamily: '"EB Garamond", serif', fontWeight: 500, fontStyle: 'normal', fontSize: '28px', lineHeight: '34px', letterSpacing: '0%' }} className="text-gray-900 mb-1">Clean Ingredients</h3>
                <p className='text-gray-500 font-normal leading-[30px] text-[20px] [font-family:"EB_Garamond",serif]'>
                  No parabens, sulfates, or harsh chemicals
                </p>              </div>
            </div>

            <div className="space-y-4">
              <img src="/images/backed.png" alt="Science-Backed" className="w-12 h-12 object-contain" />
              <div>
                <h3 style={{ fontFamily: '"EB Garamond", serif', fontWeight: 500, fontStyle: 'normal', fontSize: '28px', lineHeight: '34px', letterSpacing: '0%' }} className="text-gray-900 mb-1">Science-Backed</h3>
                <p className='text-gray-500 font-normal leading-[30px] text-[20px] [font-family:"EB_Garamond",serif]'>
                  Clinically tested & dermatologist approved
                </p>              </div>
            </div>

            <div className="space-y-4">
              <img src="/images/Sustainable.png" alt="Sustainable" className="w-12 h-12 object-contain" />
              <div>
                <h3 style={{ fontFamily: '"EB Garamond", serif', fontWeight: 500, fontStyle: 'normal', fontSize: '28px', lineHeight: '34px', letterSpacing: '0%' }} className="text-gray-900 mb-1">Sustainable</h3>
                <p className='text-gray-500 font-normal leading-[30px] text-[20px] [font-family:"EB_Garamond",serif]'>
                  Eco-conscious packaging & sourcing
                </p>              </div>
            </div>

            <div className="space-y-4">
              <img src="/images/Cruelty-Free.png" alt="Cruelty-Free" className="w-12 h-12 object-contain" />
              <div>
                <h3 style={{ fontFamily: '"EB Garamond", serif', fontWeight: 500, fontStyle: 'normal', fontSize: '28px', lineHeight: '34px', letterSpacing: '0%' }} className="text-gray-900 mb-1">Cruelty-Free</h3>

                <p className='text-gray-500 font-normal leading-[30px] text-[20px] [font-family:"EB_Garamond",serif]'>
                  Never tested on animals
                </p>              </div>
            </div>
          </div>

          {/* CTA + Avatars */}
          <div className="pt-6 flex items-center gap-8 flex-wrap">
            <button
              className="
                inline-flex items-center justify-center
                px-8 py-4
                bg-[#607315] hover:bg-emerald-800
                text-white 
                font-['EB_Garamond'] font-medium text-[28px] leading-[34px] tracking-normal
                rounded-full transition-all duration-300
                shadow-lg shadow-emerald-700/20 hover:shadow-emerald-800/30
                transform hover:-translate-y-0.5 active:translate-y-0
              "
            >
              Learn more
            </button>

            {/* Avatars */}
            <div className="flex items-center -space-x-4">
              {[
                "/images/girls11.png",
                "/images/girls22.png",
                "/images/girls33.png",
                "/images/girls44.png",
                "/images/girls55.png",
              ].map((url, i) => (
                <div
                  key={i}
                  className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-md group"
                >
                  <img
                    src={url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full lg:w-[692px] lg:h-[894px] lg:flex-shrink-0 overflow-hidden shadow-2xl shadow-emerald-900/5 order-first lg:order-last">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

          <img
            src="/images/girls.png"
            alt="Woman with green face mask in natural setting"
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.03]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "emerald" | "teal" | "green" | "rose";
};

function FeatureCard({
  icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  const colorMap = {
    emerald: "text-emerald-700 bg-emerald-100/70",
    teal: "text-teal-700 bg-teal-100/70",
    green: "text-green-700 bg-green-100/70",
    rose: "text-rose-600 bg-rose-100/70",
  };

  return (
    <div className="group flex items-start gap-4">
      <div
        className={`p-3.5 rounded-xl ${colorMap[color]} transition-colors group-hover:bg-opacity-90`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1.5">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;