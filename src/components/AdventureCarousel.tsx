"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Upgrade {
    title: string;
    desc: string;
    img: string;
    rating: number;
    slots: number;
    location: string;
}

const upgrades: Upgrade[] = [
    {
        title: "Finland, Jämsä",
        desc: "Experience the northern lights in a glass igloo.",
        img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
        rating: 4,
        slots: 7,
        location: "Finland"
    },
    {
        title: "Norway, Svolv",
        desc: "Majestic fjords and mountain views.",
        img: "https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&w=800&q=80",
        rating: 5,
        slots: 20,
        location: "Norway"
    },
    {
        title: "Iceland, Reykjavik",
        desc: "Volcanic landscapes and hot springs.",
        img: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=800&q=80",
        rating: 5,
        slots: 12,
        location: "Iceland"
    },
    {
        title: "Dubai, Al Khayma",
        desc: "Premium desert camp with authentic heritage.",
        img: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=800&q=80",
        rating: 5,
        slots: 5,
        location: "Dubai"
    },
    {
        title: "Abu Dhabi, Liwa",
        desc: "Deep desert exploration in the Empty Quarter.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
        rating: 4,
        slots: 10,
        location: "Abu Dhabi"
    }
];

export default function AdventureCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % upgrades.length);
    const prev = () => setIndex((prev) => (prev - 1 + upgrades.length) % upgrades.length);

    const getCardStyle = (i: number) => {
        const diff = (i - index + upgrades.length) % upgrades.length;

        let x = 0;
        let scale = 1;
        let zIndex = 0;
        let opacity = 1;
        let rotate = 0;

        if (diff === 0) {
            // Center active card
            x = 0;
            scale = 1.2;
            zIndex = 30;
            opacity = 1;
            rotate = 0;
        } else if (diff === 1 || diff === -(upgrades.length - 1)) {
            // Right 1
            x = 220;
            scale = 0.9;
            zIndex = 20;
            opacity = 0.7;
            rotate = 5;
        } else if (diff === 2 || diff === -(upgrades.length - 2)) {
            // Right 2
            x = 400;
            scale = 0.7;
            zIndex = 10;
            opacity = 0.4;
            rotate = 10;
        } else if (diff === upgrades.length - 1 || diff === -1) {
            // Left 1
            x = -220;
            scale = 0.9;
            zIndex = 20;
            opacity = 0.7;
            rotate = -5;
        } else if (diff === upgrades.length - 2 || diff === -2) {
            // Left 2
            x = -400;
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
        <div className="relative w-full overflow-hidden py-24">
            <div className="flex justify-center items-center h-[500px] relative">
                <AnimatePresence initial={false}>
                    {upgrades.map((item, i) => {
                        const style = getCardStyle(i);
                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    zIndex: style.zIndex,
                                    opacity: style.opacity,
                                    rotate: style.rotate,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-[280px] h-[400px] md:w-[320px] md:h-[450px] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer group"
                                onClick={() => setIndex(i)}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between text-center">
                                    <h3 className="text-2xl font-serif text-white/90">{item.title}</h3>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, starI) => (
                                                <Star
                                                    key={starI}
                                                    size={16}
                                                    className={starI < item.rating ? "fill-secondary text-secondary" : "text-white/30"}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-white font-serif text-xl md:text-2xl mt-4">
                                            {item.slots} slots left
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-8 mt-12">
                <div className="flex gap-4">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft className="text-white" />
                    </button>
                    <div className="flex items-center gap-2 px-4">
                        {upgrades.map((_, i) => (
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
    );
}
