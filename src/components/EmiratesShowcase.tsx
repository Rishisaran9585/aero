"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import './EmiratesShowcase.css';

const emirates = [
    {
        id: 'abu-dhabi',
        name: 'Abu Dhabi',
        tag: 'The Capital City',
        image: '/assets/abudhabi.jpg',
        description: 'Explore modern marvels and deep-rooted traditions.'
    },
    {
        id: 'dubai',
        name: 'Dubai',
        tag: 'City of Gold',
        image: '/assets/dubai.jpg',
        description: 'Iconic luxury and a futuristic skyline.'
    },
    {
        id: 'sharjah',
        name: 'Sharjah',
        tag: 'Culture & Arts',
        image: '/assets/sharjah.jpg',
        description: 'The cultural soul and heritage heart of the UAE.'
    },
    {
        id: 'ras-al-khaimah',
        name: 'Ras Al Khaimah',
        tag: 'Adventure Peak',
        image: '/assets/Ras_Al.jpg',
        description: 'Rugged mountains and pristine coastlines.'
    },
    {
        id: 'fujairah',
        name: 'Fujairah',
        tag: 'Ocean Paradise',
        image: '/assets/fujairah.jpg',
        description: 'Mountain views and clinical deep-sea diving.'
    },
    {
        id: 'ajman',
        name: 'Ajman',
        tag: 'Coastal Charm',
        image: '/assets/ajman.jpg',
        description: 'White sandy beaches and peaceful vibes.'
    },
    {
        id: 'umm-al-quwain',
        name: 'Umm Al Quwain',
        tag: 'Serene Lagoon',
        image: '/assets/Umm_Al.jpg',
        description: 'Lush mangroves and tranquil escapes.'
    }
];

export default function EmiratesShowcase() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % emirates.length);
    const prev = () => setIndex((prev) => (prev - 1 + emirates.length) % emirates.length);

    const getCardStyle = (i: number) => {
        const diff = (i - index + emirates.length) % emirates.length;

        // Responsive offsets
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const xOffsetLarge = isMobile ? 180 : 320;
        const xOffsetSmall = isMobile ? 320 : 580;

        let x = 0;
        let scale = 1;
        let zIndex = 0;
        let opacity = 1;
        let rotate = 0;

        if (diff === 0) {
            x = 0;
            scale = isMobile ? 1.05 : 1.1;
            zIndex = 30;
            opacity = 1;
            rotate = 0;
        } else if (diff === 1 || diff === -(emirates.length - 1)) {
            // Right 1
            x = xOffsetLarge;
            scale = 0.9;
            zIndex = 20;
            opacity = 0.7;
            rotate = 5;
        } else if (diff === 2 || diff === -(emirates.length - 2)) {
            // Right 2
            x = xOffsetSmall;
            scale = 0.7;
            zIndex = 10;
            opacity = 0.4;
            rotate = 10;
        } else if (diff === emirates.length - 1 || diff === -1) {
            // Left 1
            x = -xOffsetLarge;
            scale = 0.9;
            zIndex = 20;
            opacity = 0.7;
            rotate = -5;
        } else if (diff === emirates.length - 2 || diff === -2) {
            // Left 2
            x = -xOffsetSmall;
            scale = 0.7;
            zIndex = 10;
            opacity = 0.4;
            rotate = -10;
        } else {
            opacity = 0;
        }

        return { x, scale, zIndex, opacity, rotate };
    };

    return (
        <section className="emirates-showcase-section py-2">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-serif italic text-base md:text-lg mb-0 block">Discover the Magic</span>
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">The 7 Emirates</h2>
                        <div className="w-12 h-px bg-secondary mx-auto mt-2 opacity-30" />
                    </motion.div>
                </div>

                <div className="emirates-carousel-container">
                    <div className="emirates-carousel-stage">
                        <AnimatePresence initial={false}>
                            {emirates.map((item, i) => {
                                const style = getCardStyle(i);
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={false}
                                        animate={{
                                            x: style.x,
                                            scale: style.scale,
                                            zIndex: style.zIndex,
                                            opacity: style.opacity,
                                            rotate: style.rotate,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="absolute w-[200px] h-[300px] md:w-[260px] md:h-[380px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl cursor-pointer group"
                                        onClick={() => setIndex(i)}
                                    >
                                        <Link href={`/emirates/${item.id}`} className="block relative w-full h-full">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                                                <div className="slide-top">
                                                    <span className="text-secondary tracking-[0.4em] text-[8px] font-extrabold uppercase mb-2 block opacity-80 group-hover:opacity-100 transition-opacity">
                                                        {item.tag}
                                                    </span>
                                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                                                        {item.name}
                                                    </h3>
                                                </div>

                                                <div className={`transition-all duration-700 ease-[0.16,1,0.3,1] ${i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                                    <p className="text-gray-300 text-[10px] md:text-xs mb-4 line-clamp-2 font-light leading-relaxed italic">
                                                        "{item.description}"
                                                    </p>
                                                    <div className="flex items-center gap-3 text-secondary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] group/link">
                                                        <div className="w-6 h-px bg-secondary/30 group-hover/link:w-10 transition-all" />
                                                        Explorer
                                                        <MapPin size={10} className="group-hover/link:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Premium Border Glow */}
                                            <div className="absolute inset-0 border border-white/5 group-hover:border-secondary/30 rounded-[32px] transition-colors duration-700" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-6 md:mt-10">
                        <div className="flex gap-4">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="text-white" />
                            </button>
                            <div className="flex items-center gap-2 px-4">
                                {emirates.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-secondary' : 'w-1.5 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
