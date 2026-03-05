"use client"; // <--- Add this line at the very top

import React, { useRef } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  { title: "FACE CARE", image: "/images/face.png" },
  { title: "BODY CARE", image: "/images/body.png" },
  { title: "HAIR CARE", image: "/images/hair.png", featured: true },
  { title: "ORGANIC", image: "/images/organic.png" },
  { title: "SKIN CARE", image: "/images/face.png" },
];

export default function CategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-[70px] bg-[#FAFFE5]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-[50px] gap-4">
          <h3 className="relative z-10 text-[32px] md:text-[48px] leading-tight font-normal text-black">
            Choose by category
          </h3>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-[44px] h-[44px] rounded-full border border-[#C8CEB5] flex items-center justify-center text-[#6B705C] hover:bg-[#6B705C] hover:text-white transition active:scale-90"
            >
              <ArrowLeft size={18} />
            </button>

            <button 
              onClick={() => scroll('right')}
              className="w-[44px] h-[44px] rounded-full border border-[#C8CEB5] flex items-center justify-center text-[#6B705C] hover:bg-[#6B705C] hover:text-white transition active:scale-90"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 no-scrollbar snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-[20px] overflow-hidden cursor-pointer min-w-[280px] sm:min-w-[320px] lg:min-w-[calc(25%-24px)] snap-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {item.featured && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90px] h-[90px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <ArrowUpRight size={28} className="text-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#7A5C46]/80 backdrop-blur-md rounded-[16px] px-6 py-4">
                  <p className="text-white text-[18px] md:text-[20px] leading-[26px] tracking-[1px] uppercase font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}