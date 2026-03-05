"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const SLIDE_DATA = [
  {
    image: "/images/girlsseeinsky.png",
    title: "Lemon Verbena",
    originalPrice: "$29.00",
    salePrice: "$22.00",
  },
  {
    image: "/images/girlsseeinsky.png",
    title: "Lemon Verbena",
    originalPrice: "$29.00",
    salePrice: "$22.00",
  },
  {
    image: "/images/girlsseeinsky.png",
    title: "Lemon Verbena",
    originalPrice: "$29.00",
    salePrice: "$22.00",
  },
  {
    image: "/images/girlsseeinsky.png",
    title: "Lemon Verbena",
    originalPrice: "$29.00",
    salePrice: "$22.00",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const NaturalMakeupHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(slideTimer);
  }, []);

  const currentSlide = SLIDE_DATA[currentSlideIndex];

  return (
    <section className="relative w-full min-h-screen lg:h-[788px] overflow-hidden bg-[#d0d3c5] flex items-center justify-center py-12 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.image}
          alt="Model"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 lg:bg-black/5" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-0">
        
        {/* Left Side: Product Card */}
        <div
          className="bg-white shadow-2xl p-5 rounded-[16px] flex flex-col gap-6 lg:gap-8 transition-transform hover:scale-[1.01] duration-500
                     w-full max-w-[400px] lg:w-[439px] h-[360px] lg:h-[388px]
                     mt-0 lg:mt-[328px] mb-0 lg:mb-[72px] order-2 lg:order-1"
        >
          {/* Card Header */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="font-['EB_Garamond',serif] text-xl lg:text-[24px] text-[#222222]">
                {currentSlide.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-['EB_Garamond',serif] font-bold text-xl lg:text-[24px] text-[#222222]">
                  {currentSlide.salePrice}
                </span>
                <span className="text-sm lg:text-[16px] text-gray-400 line-through">
                  {currentSlide.originalPrice}
                </span>
              </div>
            </div>
            <button className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card Image */}
          <div className="flex-1 w-full rounded-xl overflow-hidden bg-[#f3f4ef]">
            <img
              src="/images/sent.png"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Hero Text */}
        <div className="text-center lg:text-right w-full lg:max-w-2xl mt-0 lg:mt-[604px] mb-8 lg:mb-[40px] order-1 lg:order-2">
          <h1 className="font-['EB_Garamond',serif] font-medium text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[72px] text-white">
            Natural Makeup <br className="hidden lg:block" />
            For Radiant Skin
          </h1>
        </div>
      </div>

      {/* Bottom Progress Bars */}
      <div className="absolute bottom-8 lg:bottom-10 left-0 right-0 lg:left-15 lg:right-auto flex justify-center lg:justify-start gap-3 px-6">
        {SLIDE_DATA.map((_, index) => (
          <div key={index} className="relative h-1 lg:h-1.5 w-16 lg:w-24 rounded-full overflow-hidden bg-white/30">
            {index === currentSlideIndex && (
              <div
                className="absolute top-0 left-0 h-full bg-[#6B8E23] origin-left"
                style={{
                  width: '100%',
                  animation: `progress-bar ${AUTO_PLAY_INTERVAL}ms linear forwards`
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Safe Animation definition that won't crash Next.js SSR */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}} />
    </section>
  );
};

export default NaturalMakeupHero;