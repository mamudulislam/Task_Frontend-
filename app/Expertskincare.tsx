"use client";

import { ArrowUpRight, ChevronRight } from 'lucide-react';

const SkincareHero = () => {
  // Mock data for the avatars
  const avatars = [
    "/images/girls11.png",
    "/images/girls22.png",
    "/images/girls33.png",
    "/images/girls44.png",
  ];

  // Mock data for bottom gallery
  const galleryImages = [
    { src: '/images/girls111.png', alt: 'Serum application' },
    { src: '/images/girls222.png', alt: 'Cream application' },
    { src: '/images/girls333.png', alt: 'Mask application' },
    { src: '/images/girls444.png', alt: 'Moisturizer application' },
  ];

  return (
    <div className="bg-[#f7f9e8] min-h-screen p-8 md:p-12 font-sans">
      <div className="max-w-[1440px] mx-auto mb-[24px]">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Green Call-to-Action Card */}
          <div className="bg-[#6b7c25] rounded-[40px] p-10 md:p-16 flex flex-col justify-center text-white relative">
            <p className="font-garamond text-[24px] leading-[32px] font-normal mb-4 opacity-90">
              Expert skin care
            </p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-10">
              Redefine timeless <br /> beauty with our care
            </h1>
            <button className="bg-white text-[#6b7c25] w-fit px-8 py-4 rounded-full flex items-center gap-2 font-garamond font-medium text-[28px] leading-[34px] hover:bg-opacity-90 transition-all mb-12">
              Shop Now <ChevronRight size={18} />
            </button>
            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#6b7c25] overflow-hidden">
                    <img src={img} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-[#6b7c25] bg-white flex items-center justify-center text-[#6b7c25]">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold leading-none">12k+</p>
                <p className="text-xs opacity-80">Customers Rating</p>
              </div>
            </div>
          </div>

          {/* Main Feature Image */}
          <div className="rounded-[40px] overflow-hidden h-[500px] md:h-auto">
            <img
              src="/images/Prittygirls.png"
              alt="Woman smelling essential oil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Gallery Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[80px]">
          {galleryImages.map((item, index) => (
            <div key={index} className="rounded-[30px] overflow-hidden aspect-[3/4]">
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