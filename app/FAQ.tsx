"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What makes your skincare different from others?",
    answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
  },
  {
    question: "How long before I see results?",
    answer: "Most clients notice visible improvements within 2–4 weeks, depending on skin type and treatment plan."
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! All our products are dermatologically tested and free from harsh chemicals and fragrances."
  },
  {
    question: "Do you offer consultations before treatment?",
    answer: "Absolutely. Every new client receives a free consultation to discuss skin concerns and goals."
  },
  {
    question: "Can I use your skincare with my current routine?",
    answer: "Yes, our specialists will help integrate our products seamlessly with your existing skincare regimen."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 items-start bg-white font-serif">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h2 style={{ fontFamily: 'EB Garamond', fontWeight: 500, fontStyle: 'normal', fontSize: '56px', lineHeight: '72px', letterSpacing: '0%' }} className="text-[#1a1a1a]">
          We've got the answers you need
        </h2>
        <p style={{ fontFamily: 'EB Garamond', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '32px', letterSpacing: '0%' }} className="width-[652px] text-[#737373]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="mt-10 space-y-2">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`transition-all duration-500 rounded-lg overflow-hidden ${isOpen ? 'bg-[#faffea]' : 'bg-transparent'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span style={{ fontFamily: 'EB Garamond', fontWeight: 500, fontStyle: 'normal', fontSize: '24px', lineHeight: '32px', letterSpacing: '0%' }} className="text-[#1a1a1a]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-800" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-800" />
                  )}
                </button>
                
                <div
                  ref={el => { contentRefs.current[index] = el }}
                  style={{
                    maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                    transition: 'max-height 0.5s ease',
                  }}
                  className="px-5 pb-6 text-gray-500 max-w-md overflow-hidden"
                >
                  <span style={{ fontFamily: 'EB Garamond', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '24px', letterSpacing: '0%' }}>
                    {faq.answer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Image Container */}
      <div className="flex-1 w-full">
        <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
          <img 
            src="/images/Himalayanimfachwash.png" 
            alt="Natural Skincare Products"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}