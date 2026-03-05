"use client";
import React from 'react';
import Image from 'next/image';
import Container from './Container';

const Footer = () => {
    return (
        // Adjusted padding: px-6 for mobile, md:px-20 for PC
        <footer className="bg-[#606c1e] text-[#fefae0] pt-16 pb-0 px-6 md:px-20 font-serif overflow-hidden">
            <Container>
                {/* Grid Logic: 
                  - 1 column on mobile 
                  - 2 columns on tablet (sm:grid-cols-2)
                  - 4 columns on desktop (md:grid-cols-4)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-[20px] leading-[30px] font-medium mb-6">
                            Products
                        </h3>
                        <ul className="space-y-4 text-[16px] leading-[24px] opacity-90">
                            <li className="hover:underline cursor-pointer">Shop all</li>
                            <li className="hover:underline cursor-pointer">Skin care</li>
                            <li className="hover:underline cursor-pointer">Face care</li>
                            <li className="hover:underline cursor-pointer">Body care</li>
                            <li className="hover:underline cursor-pointer">Hair care</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[20px] leading-[30px] font-medium mb-6">
                            Information
                        </h3>
                        <ul className="space-y-4 text-[16px] leading-[24px] opacity-90">
                            <li className="hover:underline cursor-pointer">About us</li>
                            <li className="hover:underline cursor-pointer">Blog</li>
                            <li className="hover:underline cursor-pointer">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[20px] leading-[30px] font-medium mb-6">
                            More
                        </h3>
                        <ul className="space-y-4 text-[16px] leading-[24px] opacity-90">
                            <li className="hover:underline cursor-pointer">Privacy policy</li>
                            <li className="hover:underline cursor-pointer">Terms of service</li>
                            <li className="hover:underline cursor-pointer">Shipping & returns</li>
                        </ul>
                    </div>
                    
                    {/* Newsletter Section */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-[22px] leading-[32px] font-medium mb-6">
                            Subscribe to our newsletter
                        </h3>
                        {/* Newsletter Input: 
                           On very small mobile, we remove 'flex-row' to stack if needed, 
                           but rounded-full usually works better with flex-row.
                        */}
                        <div className="bg-white p-1 rounded-full flex items-center mb-8 border-[4px] border-white/5 shadow-sm max-w-full">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-transparent py-2 px-4 md:py-2.5 md:px-5 text-gray-800 focus:outline-none text-[14px] md:text-[15px] italic placeholder:text-gray-500 min-w-0"
                            />
                            <button className="bg-[#5d681c] text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#4b5320] transition-all shrink-0">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <SocialCircle>
                                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/Instagaram.png" alt="Instagram" width={24} height={24} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/youtube.png" alt="YouTube" width={24} height={24} className="object-contain" />
                            </SocialCircle>
                        </div>
                    </div>
                </div>

                <hr className="border-[#fefae0] opacity-30 mb-8" />

                <div className="text-center text-[10px] md:text-xs opacity-70 mb-4 tracking-wide">
                    Copyright © 2026 Oranic. All Right Reserved
                </div>

                {/* Bottom Graphic: Adjust height and scaling for mobile */}
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[200px] overflow-visible mb-10 md:mb-[40px]">
                    <Image
                        src="/images/Footericons.png"
                        alt="ORANIC"
                        fill
                        className="object-contain object-bottom pointer-events-none select-none translate-y-4 md:translate-y-8 scale-100 md:scale-110"
                        priority
                    />
                </div>
            </Container>
        </footer>
    );
};

const SocialCircle = ({ children }: { children: React.ReactNode }) => (
    <div className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-sm">
        {children}
    </div>
);

export default Footer;