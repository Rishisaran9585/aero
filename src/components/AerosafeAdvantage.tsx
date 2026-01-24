"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Target, MapPin, Compass, Users, ArrowUpRight } from 'lucide-react';
import './AerosafeAdvantage.css';

export default function AerosafeAdvantage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section ref={containerRef} className="aerosafe-editorial-section">
            <div className="container mx-auto px-4 relative z-10">

                {/* 1. CINEMATIC HEADER BLOCK */}
                <div className="editorial-header mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <span className="editorial-label">The Aerosafe Blueprint</span>
                        <h2 className="editorial-main-title">
                            Redefining the <br />
                            <span className="italic-secondary">Experience</span> of Flight.
                        </h2>
                    </motion.div>
                </div>

                {/* 2. ASYMMETRICAL COMPOSITION */}
                <div className="editorial-composition">

                    {/* Primary Focus Image Cluster */}
                    <div className="composition-main">
                        <motion.div style={{ y: y1 }} className="main-image-wrapper">
                            <Image
                                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop"
                                alt="Luxury Resort"
                                fill
                                className="object-cover"
                            />
                            <div className="image-overlay" />
                        </motion.div>
                    </div>

                    {/* Secondary Narrative Cluster */}
                    <div className="composition-secondary">
                        <div className="narrative-text mb-20">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-4xl md:text-5xl font-serif font-bold mb-8 italic"
                            >
                                "Where strategy meets <br /> <span className="text-secondary">serendipity.</span>"
                            </motion.h3>
                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
                                We are more than an agency. We are curators of time. Every itinerary is a masterpiece of logistics and luxury.
                            </p>
                        </div>

                        <motion.div style={{ y: y3 }} className="secondary-image-wrapper">
                            <Image
                                src="https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1200&auto=format&fit=crop"
                                alt="Elite Experience"
                                fill
                                className="object-cover"
                            />
                            {/* Embedded Badge */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-secondary text-black flex items-center justify-center text-center p-4 font-black uppercase text-[8px] tracking-widest rotate-12 border-8 border-black">
                                Verified <br /> Excellence
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 3. FLIGHT PATH - THE UNIFIER */}
                <div className="editorial-flight-path">
                    <motion.div
                        style={{ x: useTransform(scrollYProgress, [0, 1], [-200, 400]), rotate }}
                        className="unified-plane-asset"
                    >
                        <Image
                            src="/assets/flight.png"
                            alt="Aero Flight"
                            width={500}
                            height={300}
                            className="object-contain drop-shadow-[0_30px_60px_rgba(255,255,255,0.15)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        </section>
    );
}
