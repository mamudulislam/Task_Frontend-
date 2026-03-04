"use client";
import React from 'react';
import Image from 'next/image';
import Container from './Container';

const Footer = () => {
    return (
        <footer className="bg-[#606c1e] text-[#fefae0] pt-16 pb-0 px-8 md:px-20 font-serif overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
                    <div>
                        <h3 className="text-[22px] leading-[32px] font-medium mb-6">
                            Subscribe to our newsletter
                        </h3>
                        <div className="bg-white p-1 rounded-full flex items-center mb-8 border-[4px] border-white/5 shadow-sm max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent py-2.5 px-5 text-gray-800 focus:outline-none text-[15px] italic placeholder:text-gray-500"
                            />
                            <button className="bg-[#5d681c] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-[#4b5320] transition-all shrink-0">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <SocialCircle>
                                <Image src="/images/facebook.png" alt="Facebook" width={30} height={30} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/Instagaram.png" alt="Instagram" width={30} height={30} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/whatsapp.png" alt="WhatsApp" width={30} height={30} className="object-contain" />
                            </SocialCircle>
                            <SocialCircle>
                                <Image src="/images/youtube.png" alt="YouTube" width={30} height={30} className="object-contain" />
                            </SocialCircle>
                        </div>
                    </div>
                </div>

                <hr className="border-[#fefae0] opacity-30 mb-8" />

                <div className="text-center text-xs opacity-70 mb-4 tracking-wide">
                    Copyright © 2026 Oranic. All Right Reserved
                </div>

                <div className="relative w-full h-[200px] overflow-visible mb-[40px]">
                    <Image
                        src="/images/Footericons.png"
                        alt="ORANIC"
                        fill
                        className="object-contain object-bottom pointer-events-none select-none translate-y-8 scale-110"
                        priority
                    />
                </div>
            </Container>
        </footer>
    );
};
const SocialCircle = ({ children }: { children: React.ReactNode }) => (
    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-sm">
        {children}
    </div>
);

export default Footer;