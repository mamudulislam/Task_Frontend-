"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ashley",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: `"I've been using this cream for three weeks now, and the results are simply amazing. My skin has become more moisturized, supple, and radiant. The texture is light, absorbs quickly, and doesn't leave a greasy shine."`,
  },
  {
    id: 2,
    name: "Sophia",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    text: `"Absolutely love this product! My skin feels refreshed and hydrated all day. It blends beautifully and works perfectly under makeup."`,
  },
];

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-[#F9FBE7] selection:bg-[#6B7D27]/20">
      <div className="max-w-[1440px] mx-auto min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Review Text */}
          <div className="space-y-10 z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D3319] tracking-tight">
              Customer Reviews!
            </h2>

            <div className={`transition-all duration-500 ease-in-out ${fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <p className="text-[#4A4F35] font-serif italic text-2xl md:text-3xl leading-snug max-w-lg">
                {currentReview.text}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-[#2D3319] text-xl">
                    {currentReview.name}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-[#6B7D27] text-[#6B7D27]" />
                    <span className="text-[#2D3319] font-medium pt-0.5">
                      {currentReview.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button onClick={prevSlide} className="group p-3 rounded-full border border-[#DCE4C9] hover:bg-[#6B7D27] transition-all duration-300">
                <ArrowLeft size={22} className="text-[#6B7D27] group-hover:text-white" />
              </button>
              <button onClick={nextSlide} className="group p-3 rounded-full border border-[#DCE4C9] hover:bg-[#6B7D27] transition-all duration-300">
                <ArrowRight size={22} className="text-[#6B7D27] group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Image + Floating Card */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
                alt="Skincare application"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* ✅ FLOATING PRODUCT CARD */}
            <div className="absolute top-[45%] -left-8 md:-left-16 lg:-left-20 transform -translate-y-1/2 w-64 md:w-72 bg-white rounded-3xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.12)] z-30">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                {/* Discount Badge */}
                <div className="absolute top-0 left-0 bg-[#6B7D27] text-white text-xs font-bold px-3 py-1.5 rounded-br-xl z-10">
                  10%
                </div>
                <img 
                  src="/images/products.png" 
                  alt="Cucumber Extract" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-serif text-[#2D3319] text-lg mb-3">Cucumber Extract</h3>
              
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-[#2D3319]">$24.00</span>
                  <span className="text-sm text-gray-400 line-through decoration-1">$32.00</span>
                </div>
                <button className="bg-[#6B7D27] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#55631f] transition-colors whitespace-nowrap">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;