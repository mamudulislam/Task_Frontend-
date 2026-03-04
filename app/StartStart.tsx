"use client";

import React from "react";

const StartStart = () => {
  const content = [
    "Skin Care", "Skin Care", "Skin Care", "Skin Care",
    "Skin Care", "Skin Care", "Skin Care", "Skin Care"
  ];

  // Custom SVG Star Icon
  const StarIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-3 flex-shrink-0"
    >
      <path
        d="M27.6793 0.652669C28.0015 -0.217949 29.2329 -0.217949 29.555 0.652669L36.6954 19.9492C36.7967 20.2229 37.0125 20.4387 37.2862 20.54L56.5827 27.6803C57.4533 28.0025 57.4533 29.2339 56.5827 29.556L37.2862 36.6964C37.0125 36.7976 36.7967 37.0135 36.6954 37.2872L29.555 56.5837C29.2329 57.4543 28.0015 57.4543 27.6793 56.5837L20.539 37.2872C20.4377 37.0135 20.2219 36.7976 19.9482 36.6964L0.651692 29.556C-0.218926 29.2339 -0.218925 28.0025 0.651693 27.6803L19.9482 20.54C20.2219 20.4387 20.4377 20.2229 20.539 19.9492L27.6793 0.652669Z"
        fill="white"
      />
    </svg>
  );

  return (
    <>
      {/* Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap');
      `}</style>

      {/* Main Container */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full bg-[#607315] py-3 flex items-center">
          {/* Marquee Wrapper */}
          <div className="flex whitespace-nowrap animate-marquee">
            {content.concat(content).map((text, index) => (
              <div key={index} className="flex items-center px-2 sm:px-4">
                <StarIcon />
                <span className="skin-care-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .skin-care-text {
          color: white;
          font-family: 'EB Garamond', serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0%;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .skin-care-text {
            font-size: 32px;
            line-height: 44px;
          }
        }

        @media (min-width: 1024px) {
          .skin-care-text {
            font-size: 40px;
            line-height: 52px;
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
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