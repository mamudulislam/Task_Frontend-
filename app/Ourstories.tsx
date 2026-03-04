"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
    {
        id: 1,
        category: 'Beauty',
        title: 'Your Daily Skincare Routine, Simplified',
        image: '/images/girlsimages.png', // Replace with your actual image path
    },
    {
        id: 2,
        category: 'Beauty',
        title: 'Your Daily Skincare Routine, Simplified',
        image: '/images/girlsimages.png',
    },
    {
        id: 3,
        category: 'Beauty',
        title: 'Your Daily Skincare Routine, Simplified',
        image: '/images/girlsimages.png',
    },
];

export default function StoriesSection() {
    return (
        <section className="max-w-[1440px] mx-auto bg-white mb-12">
            {/* Header Area */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl md:text-5xl leading-[72px] font-medium text-[#2D3325]">
                    Our Stories
                </h2>
                <div className="flex gap-3">
                    <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                        <ChevronRight className="w-5 h-5 text-[#4A5D23]" />
                    </button>
                </div>
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stories.map((story) => (
                    <div key={story.id} className="group cursor-pointer">
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                            <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-black"></span>
                                <span className="font-semibold text-[16px] leading-[22px] text-gray-700">
                                    {story.category}
                                </span>
                            </div>
                            <h3
                                className=" font-normal text-[32px] leading-[44px] text-[#2D3325]"
                                style={{ width: '410.333px' }}
                            >
                                {story.title}
                            </h3>
                            <button
                                className="flex items-center gap-2 font-medium text-[28px] leading-[34px] text-[#6B7D44] hover:underline transition-all"
                            >
                                Read more
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}