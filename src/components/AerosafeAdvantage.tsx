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
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section ref={containerRef} className="aerosafe-editorial-section">
            <div className="container mx-auto px-4 relative z-10">

                {/* 1. CINEMATIC HEADER BLOCK */}
                <div className="editorial-header mb-4 md:mb-6">
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

                {/* 2. SIDE-BY-SIDE COMPOSITION */}
                <div className="editorial-composition">

                    {/* Left Side: Image */}
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

                    {/* Right Side: Narrative Text */}
                    <div className="composition-secondary">
                        <div className="narrative-text">
                            <motion.h3
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-2xl md:text-3xl font-serif font-bold mb-4 italic drop-shadow-2xl leading-tight text-white"
                            >
                                "Where strategy meets <br /> <span className="text-secondary drop-shadow-md">serendipity.</span>"
                            </motion.h3>
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                                We are more than an agency. We are curators of time. Every itinerary is a masterpiece of logistics and luxury, tailored to your exact specifications.
                            </p>

                            {/* Features List */}
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                <div className="flex items-start gap-3 group">
                                    <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary/20 transition-colors">
                                        <Globe className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Global Reach</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed max-w-sm">Access to over 2000+ private terminals and exclusive resorts worldwide.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary/20 transition-colors">
                                        <Compass className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Curated Journeys</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed max-w-sm">Bespoke itineraries designed around your specific passions and timeline.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="editorial-btn hover:scale-105 transition-transform">
                                Discover More <ArrowUpRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
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
