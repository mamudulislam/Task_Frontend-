"user client";
const Footer = () => {
    return (
        <footer className="bg-[#606c1e] text-[#fefae0] pt-16 pb-0 px-8 md:px-20 font-serif overflow-hidden">
            {/* Top Section: Links and Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                {/* Column 1: Products */}
                <div>
                    <h3 className="text-[20px] leading-[30px] font-medium font-garamond mb-6">
                        Products
                    </h3>
                    <ul className="space-y-4 text-[16px] leading-[24px] font-regular font-garamond opacity-90">
                        <li className="hover:underline cursor-pointer">Shop all</li>
                        <li className="hover:underline cursor-pointer">Skin care</li>
                        <li className="hover:underline cursor-pointer">Face care</li>
                        <li className="hover:underline cursor-pointer">Body care</li>
                        <li className="hover:underline cursor-pointer">Hair care</li>
                    </ul>
                </div>

                {/* Column 2: Information */}
                <div>
                    <h3 className="text-[20px] leading-[30px] font-medium font-garamond mb-6">
                        Information
                    </h3>
                    <ul className="space-y-4 text-[16px] leading-[24px] font-regular font-garamond opacity-90">
                        <li className="hover:underline cursor-pointer">About us</li>
                        <li className="hover:underline cursor-pointer">Blog</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Column 3: More */}
                <div>
                    <h3 className="text-[20px] leading-[30px] font-medium font-garamond mb-6">
                        More
                    </h3>
                    <ul className="space-y-4 text-[16px] leading-[24px] font-regular font-garamond opacity-90">
                        <li className="hover:underline cursor-pointer">Privacy policy</li>
                        <li className="hover:underline cursor-pointer">Terms of service</li>
                        <li className="hover:underline cursor-pointer">Shipping & returns</li>
                    </ul>
                </div>

                {/* Column 4: Newsletter & Socials */}
                <div>
                    <h3 className="text-[24px] leading-[32px] font-medium font-garamond mb-6">
                        Subscribe to our newsletter
                    </h3>
                    <div className="relative mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full py-3 px-6 rounded-full text-gray-800 focus:outline-none italic"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-[#4b5320] text-white px-6 rounded-full text-sm hover:brightness-110 transition">
                            Subscribe
                        </button>
                    </div>

                    {/* Social Icons Placeholder */}
                    <div className="flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                                {/* Replace with actual Lucide or FontAwesome icons */}
                                <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="border-[#fefae0] opacity-30 mb-8" />

            {/* Copyright */}
            <div className="text-center text-xs opacity-80 mb-4">
                Copyright © 2026 Oranic. All Rights Reserved
            </div>

            {/* Hero Text: ORANIC */}
            <div className="relative w-full text-center">
                <h1 className="text-[18vw] leading-none font-bold tracking-widest text-white 
          bg-gradient-to-t from-transparent via-white/80 to-white 
          bg-clip-text text-transparent select-none translate-y-8">
                    ORANIC
                </h1>
            </div>
        </footer>
    );
};

export default Footer;