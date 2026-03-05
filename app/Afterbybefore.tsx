"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isResizing) return;
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      const clientX =
        "touches" in event
          ? event.touches[0]?.clientX
          : (event as MouseEvent).clientX;

      let relativeX = clientX - containerRect.left;
      const containerWidth = containerRect.width;

      // Keep slider inside bounds
      relativeX = Math.max(0, Math.min(relativeX, containerWidth));

      const percentage = (relativeX / containerWidth) * 100;
      setSliderPosition(percentage);
    },
    [isResizing]
  );

  const stopResizing = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchend", stopResizing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchend", stopResizing);
    };
  }, [handleMove]);

  return (
    <div className="flex items-center justify-center w-full px-4 md:px-10 lg:px-0">
      {/* PC: Fixed 2005px by 644px (lg: prefix)
          Mobile/Tablet: Fluid width with an aspect ratio to keep it visible
      */}
      <div className="w-full lg:w-[2005px] h-auto aspect-[4/3] md:aspect-[16/9] lg:h-[644px] lg:aspect-none">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden shadow-2xl select-none touch-none cursor-col-resize rounded-xl lg:rounded-none"
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          {/* AFTER IMAGE */}
          <img
            src="/images/Aftereffect.png"
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* After Label - Responsive positioning and size */}
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 z-10">
            <span className="bg-white px-3 py-1 lg:px-5 lg:py-2 rounded-sm shadow-sm text-[#4A5D45] font-serif text-xs lg:text-sm tracking-wide">
              After
            </span>
          </div>

          {/* BEFORE IMAGE */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src="/images/before.png"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before Label - Responsive positioning and size */}
            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-8">
              <span className="bg-white px-3 py-1 lg:px-5 lg:py-2 rounded-sm shadow-sm text-[#4A5D45] font-serif text-xs lg:text-sm tracking-wide">
                Before
              </span>
            </div>
          </div>

          {/* SLIDER LINE */}
          <div
            className="absolute inset-y-0 z-30 w-[2px] bg-white"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* HANDLE - Scaled down for mobile/tablet */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-200 transition-transform active:scale-90 cursor-col-resize">
              <div className="flex gap-1 lg:gap-1.5 items-center text-neutral-800">
                <svg className="w-2 h-3 lg:w-[10px] lg:h-[14px]" viewBox="0 0 10 14" fill="none">
                  <path
                    d="M8 1L2 7L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg className="w-2 h-3 lg:w-[10px] lg:h-[14px]" viewBox="0 0 10 14" fill="none">
                  <path
                    d="M2 1L8 7L2 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;