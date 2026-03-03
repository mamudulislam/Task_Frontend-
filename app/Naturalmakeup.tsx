"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const NaturalMakeup: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#f6f1ea] font-sans">
      
      {/* Background Image - Using a placeholder that matches the composition */}
      <div className="absolute inset-0">
        <img
          src="/images/girlsseeinsky.png"
          alt="Radiant skin model"
          className="w-full h-full object-cover object-center scale-105" // slight scale for zoom effect
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* ================= PRODUCT CARD ================= */}
      {/* Positioned exactly to the left-middle area */}
      <div className="absolute top-[42%] left-[5%] -translate-y-1/2 z-30">
        <div className="w-[300px] bg-white/80 backdrop-blur-2xl rounded-[24px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] p-5 border border-white/40">

          {/* Top Content */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[17px] font-medium text-[#2c2c2c] tracking-tight">
                Cucumber Extract
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[20px] font-bold text-[#1a1a1a]">
                  $24.00
                </span>
                <span className="text-[13px] text-gray-400 line-through decoration-1">
                  $32.00
                </span>
              </div>
            </div>

            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-[#6c8c3e]" strokeWidth={2.5} />
            </button>
          </div>

          {/* Product Image Container */}
          <div className="relative h-44 w-full rounded-xl overflow-hidden shadow-inner">
            <img
              src="/images/products.png"
              alt="Product lineup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= HERO TEXT ================= */}
      <div className="absolute bottom-[12%] right-[6%] text-right z-30">
        <h1 className="font-serif text-[64px] md:text-[82px] leading-[0.95] text-white tracking-tight drop-shadow-lg">
          Natural Makeup
          <br />
          <span className="italic font-light opacity-95">
            For Radiant Skin
          </span>
        </h1>
      </div>

      {/* ================= PAGINATION BARS ================= */}
      <div className="absolute bottom-10 left-[5%] flex gap-3 z-30">
        <div className="w-20 h-[5px] bg-[#6c8c3e] rounded-full transition-all" />
        <div className="w-20 h-[5px] bg-white/40 rounded-full backdrop-blur-md hover:bg-white/60 cursor-pointer transition-all" />
        <div className="w-20 h-[5px] bg-white/40 rounded-full backdrop-blur-md hover:bg-white/60 cursor-pointer transition-all" />
        <div className="w-20 h-[5px] bg-white/40 rounded-full backdrop-blur-md hover:bg-white/60 cursor-pointer transition-all" />
      </div>

      {/* Decorative Lighting (Glow behind the card) */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#6c8c3e]/10 blur-[120px] pointer-events-none rounded-full" />
    </section>
  );
};

export default NaturalMakeup;