"use client";

import React, { useState } from 'react';
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from './icons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 max-w-[1440px] mx-auto w-full bg-[#FFFFFF]">
      <div className="text-2xl font-bold tracking-tight text-olive-900">
        <img src="/images/ORANIC.png" alt="ORANIC" className="w-24 sm:w-28 md:w-auto" />
      </div>
      
      <ul className="hidden md:flex items-center gap-[32px] text-[24px] font-normal text-[#000000]" style={{ fontFamily: 'EB Garamond', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '32px', letterSpacing: '0%' }}>
        <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Category <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Shop <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Offer <ChevronDown size={14} /></li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Pages <ChevronDown size={14} /></li>
      </ul>

      <div className="flex items-center gap-3 sm:gap-5 text-gray-700">
        <div className="relative md:hidden">
          {isSearchOpen ? (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-32 sm:w-40 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-olive-700"
                autoFocus
              />
              <X 
                size={20} 
                className="ml-2 cursor-pointer hover:text-black" 
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Search 
              size={20} 
              className="cursor-pointer hover:text-black" 
              onClick={() => {
                setIsSearchOpen(true);
                setIsMenuOpen(false);
              }}
            />
          )}
        </div>
        <Search size={20} className="hidden md:block cursor-pointer hover:text-black" />
        <div className="relative">
          <ShoppingBag size={20} className="cursor-pointer hover:text-black" />
        </div>
        <User size={20} className="cursor-pointer hover:text-black" />
        <button
          className="md:hidden p-1 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsSearchOpen(false);
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg text-[#000000]" style={{ fontFamily: 'EB Garamond' }}>
            <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Category <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Shop <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Offer <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-olive-700 transition-colors">Pages <ChevronDown size={14} /></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
