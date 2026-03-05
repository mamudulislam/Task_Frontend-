import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from './Container';

const HeroContent: React.FC = () => {
  return (
    <main
      className="relative z-10 flex items-center min-h-[100vh] w-full bg-cover bg-center py-12 lg:py-0"
      style={{ backgroundImage: 'url("/images/girlsface.png")' }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center min-h-[70vh] gap-12 lg:gap-[460px] lg:-mb-40">
          
          {/* Text Content */}
          <div className="max-w-2xl pt-10 lg:pt-20 pb-10 text-center lg:text-left">
            <h1 className="font-garamond font-bold text-white text-5xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[92px] tracking-[0%] mb-6">
              Natural Makeup <br className="hidden lg:block" /> For Radiant Skin
            </h1>
            <p className="font-garamond font-normal text-white text-lg md:text-xl lg:text-[24px] leading-relaxed lg:leading-[32px] tracking-[0%] mb-8 max-w-md mx-auto lg:mx-0">
              Ponds face wash for women removes all traces of pollution, dirt, and impurities to give you a fresh and clean complexion.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#607315] hover:bg-[#4d5718] text-white px-8 py-4 rounded-[44px] flex items-center justify-center gap-2 transition-all hover:scale-105">
                Shop Now
                <span className="text-2xl">›</span>
              </button>
            </div>
          </div>

          {/* Product Card */}
          <div className="bg-white/90 backdrop-blur-md p-[20px] rounded-[16px] shadow-2xl w-full max-w-[340px] lg:w-[340px] h-[388px] flex flex-col gap-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Cucumber Extract</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-black text-gray-900">$24.00</span>
                  <span className="text-xs text-gray-400 line-through">$32.00</span>
                </div>
              </div>
              <button className="p-2 border border-gray-200 rounded-full hover:bg-white transition-colors">
                <ArrowUpRight size={20} className="text-gray-700" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden h-44 bg-[#f3f4f0] flex-1">
              <img
                src="/images/sent.png"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HeroContent;