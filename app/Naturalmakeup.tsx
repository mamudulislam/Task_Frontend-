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
    <section className="relative w-full h-[788px] overflow-hidden bg-[#d0d3c5] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.image}
          alt="Model with radiant natural skin"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Card + Hero Text */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 h-full flex items-center justify-between">
        {/* Product Card */}
        <div
          style={{
            width: "439px",
            height: "388px",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            backgroundColor: "#ffffff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            boxSizing: "border-box",
            marginTop: "328px",
            marginBottom: "72px",
          }}
          className="transition-transform hover:scale-[1.01] duration-500"
        >
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3
                style={{
                  fontFamily: "EB Garamond, serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0%",
                  color: "#222222",
                }}
              >
                {currentSlide.title}
              </h3>
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "EB Garamond, serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#222222",
                  }}
                >
                  {currentSlide.salePrice}
                </span>
                <span className="text-[16px] text-gray-400 line-through">
                  {currentSlide.originalPrice}
                </span>
              </div>
            </div>
            <button className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-black transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 w-full rounded-xl overflow-hidden bg-[#f3f4ef]">
            <img
              src="/images/sent.png"
              alt="Products"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Hero Text */}
        <div
          className="text-right max-w-2xl"
          style={{
            marginTop: "604px",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontFamily: "EB Garamond, serif",
              fontWeight: 500,
              fontSize: "56px",
              lineHeight: "72px",
              letterSpacing: "0%",
              color: "#ffffff",
            }}
          >
            Natural Makeup <br />
            For Radiant Skin
          </h1>
        </div>
      </div>

      {/* Bottom Navigation Bars */}
      <div className="absolute bottom-10 left-24 flex gap-3">
        {SLIDE_DATA.map((_, index) => (
          <div key={index} className="relative h-1.5 w-24 rounded-full overflow-hidden bg-white/30">
            {index === currentSlideIndex && (
              <div
                key={currentSlideIndex}
                className="absolute top-0 left-0 h-full w-full bg-[#6B8E23] origin-left animate-progress"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NaturalMakeupHero;