"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./InfiniteMarqueeGallery.css";

interface GalleryItem {
    image: string;
    text: string;
    caption: string;
    link?: string;
}

interface InfiniteMarqueeGalleryProps {
    items: GalleryItem[];
}

export default function InfiniteMarqueeGallery({ items }: InfiniteMarqueeGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate items to ensure smooth infinite loop (3 sets is standard for seamless middle scrolling)
    const endlessItems = [...items, ...items, ...items];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize scroll position to the start of the second set (middle)
        // We need to wait for layout? Usually fine in useEffect.
        const scrollWidth = container.scrollWidth;
        const oneThird = scrollWidth / 3;

        // Only set initial position if we are at 0 (first mount)
        if (container.scrollLeft === 0) {
            container.scrollLeft = oneThird;
        }

        let animationFrameId: number;
        const scrollSpeed = 0.8; // Adjust speed as desired

        const animate = () => {
            if (!isPaused && container) {
                container.scrollLeft += scrollSpeed;

                // Infinite Scroll Logic
                // If we've scrolled past the second set (2/3 point), jump back to start of second set (1/3 point)
                // Actually, if we reach 2/3, we look identical to 1/3.
                if (container.scrollLeft >= oneThird * 2) {
                    container.scrollLeft = oneThird;
                }
                // If we scroll backwards (manual) to 0, jump to 1/3
                else if (container.scrollLeft <= 0) {
                    container.scrollLeft = oneThird;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused, items]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        // Item width (300px) + gap (32px) = 332px approximately
        // We can measure first child width to be precise
        const itemWidth = 332;
        const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;

        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <div
            className="marquee-container group/container relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                ref={containerRef}
                className="marquee-track overflow-x-hidden"
                style={{ width: '100%', overflowX: 'hidden' }} // Ensure container constrains track
            >
                {endlessItems.map((item, index) => {
                    const Content = () => (
                        <div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-white/10 cursor-pointer">
                            <Image
                                src={item.image}
                                alt={item.text}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                                    {item.text}
                                </h3>
                                <p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    );

                    return (
                        <div key={index} className="marquee-item">
                            {item.link ? (
                                <Link href={item.link}>
                                    <Content />
                                </Link>
                            ) : (
                                <Content />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 z-20 flex items-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => handleScroll('left')}
                    className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-4 z-20 flex items-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => handleScroll('right')}
                    className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95"
                    aria-label="Scroll Right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
