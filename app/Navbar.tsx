import React from 'react';
import { Search, ShoppingBag, User, ChevronDown } from './icons';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto w-full bg-[#FFFFFF]">
      <div className="text-2xl font-bold tracking-tight text-olive-900">
        <img src="/images/ORANIC.png" alt="ORANIC"/>
      </div>
      
      <ul className="hidden md:flex items-center gap-[32px] text-[24px] font-normal text-[#000000]" style={{ fontFamily: 'EB Garamond', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '32px', letterSpacing: '0%' }}>
        <li className="flex items-center gap-1 cursor-pointer">Category <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer">Shop <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer">Offer <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer">Pages <ChevronDown size={14} /></li>
      </ul>

      <div className="flex items-center gap-5 text-gray-700">
        <Search size={24} className="cursor-pointer hover:text-black" />
        <div className="relative">
          <ShoppingBag size={24} className="cursor-pointer hover:text-black" />
        </div>
        <User size={24} className="cursor-pointer hover:text-black" />
      </div>
    </nav>
  );
};

export default Navbar;
