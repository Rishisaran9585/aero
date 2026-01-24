"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./InternalHero.css";

interface InternalHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

export default function InternalHero({ title, subtitle, image }: InternalHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={containerRef} className="internal-hero-container">
            {/* Background Layer */}
            <motion.div style={{ y, scale }} className="internal-hero-bg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            <div className="internal-hero-overlay" />

            {/* Content Layer */}
            <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full"
                >
                    <h1 className="internal-hero-title">
                        {title}
                    </h1>

                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="internal-hero-script"
                        >
                            {subtitle}
                        </motion.span>
                    )}
                </motion.div>
            </div>

            {/* Decorative Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="internal-hero-scroll"
            >
                <div className="scroll-line" />
                <span className="scroll-text">DISCOVER MORE</span>
            </motion.div>
        </div>
    );
}
