"use client";

import React from 'react';

const StartStart = () => {
  const content = [
    "Skin Care", "Skin Care", "Skin Care", "Skin Care", 
    "Skin Care", "Skin Care", "Skin Care", "Skin Care"
  ];

  // Your custom SVG Star Icon
  const StarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-6">
      <path d="M27.6793 0.652669C28.0015 -0.217949 29.2329 -0.217949 29.555 0.652669L36.6954 19.9492C36.7967 20.2229 37.0125 20.4387 37.2862 20.54L56.5827 27.6803C57.4533 28.0025 57.4533 29.2339 56.5827 29.556L37.2862 36.6964C37.0125 36.7976 36.7967 37.0135 36.6954 37.2872L29.555 56.5837C29.2329 57.4543 28.0015 57.4543 27.6793 56.5837L20.539 37.2872C20.4377 37.0135 20.2219 36.7976 19.9482 36.6964L0.651692 29.556C-0.218926 29.2339 -0.218925 28.0025 0.651693 27.6803L19.9482 20.54C20.2219 20.4387 20.4377 20.2229 20.539 19.9492L27.6793 0.652669Z" fill="white"/>
    </svg>
  );

  return (
    <>
      {/* Import the font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap');
      `}</style>

      {/* Main Container with the pink borders */}
      <div className="w-full border-t-2 border-b-2 border-[#ff00ff]">
        <div className="relative w-full overflow-hidden bg-[#607315] py-3 flex items-center">
          
          <div className="flex whitespace-nowrap animate-marquee items-center">
            {/* First Set */}
            {content.map((text, index) => (
              <div key={`first-${index}`} className="flex items-center">
                <StarIcon />
                <span className="skin-care-text">{text}</span>
              </div>
            ))}

            {/* Second Set for seamless loop */}
            {content.map((text, index) => (
              <div key={`second-${index}`} className="flex items-center">
                <StarIcon />
                <span className="skin-care-text">{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .skin-care-text {
          color: white;
          font-family: 'EB Garamond', serif;
          font-weight: 500;
          font-size: 40px;
          line-height: 52px;
          letter-spacing: 0%;
          white-space: nowrap;
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default StartStart;