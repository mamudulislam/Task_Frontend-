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

      const containerRect =
        containerRef.current.getBoundingClientRect();

      const clientX =
        'touches' in event 
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
    window.addEventListener("touchmove", handleMove);
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
    <div className="flex items-center justify-center">
      {/* Fixed Size Wrapper */}
      <div className="w-[2005px] h-[644px]">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden shadow-2xl select-none touch-none cursor-col-resize"
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

          {/* After Label */}
          <div className="absolute bottom-6 right-8 z-10">
            <span className="bg-white px-5 py-2 rounded-sm shadow-sm text-[#4A5D45] font-serif text-sm tracking-wide">
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

            {/* Before Label */}
            <div className="absolute bottom-6 left-8">
              <span className="bg-white px-5 py-2 rounded-sm shadow-sm text-[#4A5D45] font-serif text-sm tracking-wide">
                Before
              </span>
            </div>
          </div>

          {/* SLIDER LINE */}
          <div
            className="absolute inset-y-0 z-30 w-[2px] bg-white"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* HANDLE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-200 transition-transform active:scale-90 cursor-col-resize">
              <div className="flex gap-1.5 items-center text-neutral-800">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                >
                  <path
                    d="M8 1L2 7L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                >
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