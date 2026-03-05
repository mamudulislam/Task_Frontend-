"use client";

import { ArrowUpRight, ChevronRight } from 'lucide-react';

const SkincareHero = () => {
  const avatars = [
    "/images/girls11.png",
    "/images/girls22.png",
    "/images/girls33.png",
    "/images/girls44.png",
  ];

  const galleryImages = [
    { src: '/images/girls111.png', alt: 'Serum application' },
    { src: '/images/girls222.png', alt: 'Cream application' },
    { src: '/images/girls333.png', alt: 'Mask application' },
    { src: '/images/girls444.png', alt: 'Moisturizer application' },
  ];

  return (
    // Reduced outer padding on mobile (p-4) to p-12 on desktop
    <div className="bg-[#f7f9e8] min-h-screen p-4 md:p-8 lg:p-12 font-sans">
      <div className="max-w-[1440px] mx-auto mb-[24px]">

        {/* Top Section: Stack on mobile, side-by-side on lg screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Green Call-to-Action Card */}
          <div className="bg-[#6b7c25] rounded-[30px] md:rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative">
            <p className="font-garamond text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[32px] font-normal mb-4 opacity-90">
              Expert skin care
            </p>
            {/* Font scales: 3xl mobile -> 5xl tablet -> 6xl desktop */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 lg:mb-10">
              Redefine timeless <br className="hidden sm:block" /> beauty with our care
            </h1>
            
            {/* Button scales for mobile to prevent overflow */}
            <button className="bg-white text-[#6b7c25] w-fit px-6 py-3 lg:px-8 lg:py-4 rounded-full flex items-center gap-2 font-garamond font-medium text-[18px] md:text-[24px] lg:text-[28px] lg:leading-[34px] hover:bg-opacity-90 transition-all mb-8 lg:mb-12">
              Shop Now <ChevronRight size={18} />
            </button>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((img, i) => (
                  <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#6b7c25] overflow-hidden">
                    <img src={img} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#6b7c25] bg-white flex items-center justify-center text-[#6b7c25]">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div>
                <p className="text-lg lg:text-xl font-bold leading-none">12k+</p>
                <p className="text-[10px] lg:text-xs opacity-80">Customers Rating</p>
              </div>
            </div>
          </div>

          {/* Main Feature Image: Fixed height on mobile, auto on desktop */}
          <div className="rounded-[30px] md:rounded-[40px] overflow-hidden h-[350px] md:h-[500px] lg:h-auto">
            <img
              src="/images/Prittygirls.png"
              alt="Woman smelling essential oil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Gallery Section 
            Mobile/Tablet: 2 columns
            Desktop: 4 columns
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16 lg:mt-[80px]">
          {galleryImages.map((item, index) => (
            <div key={index} className="rounded-[20px] md:rounded-[30px] overflow-hidden aspect-[3/4]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkincareHero;