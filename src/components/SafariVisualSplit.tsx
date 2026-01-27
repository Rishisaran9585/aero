"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function SafariVisualSplit() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

    return (
        <section ref={containerRef} className="py-20 lg:py-40 bg-black relative overflow-visible">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    {/* Images Side */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center h-[450px] sm:h-[550px] md:h-[650px] mb-20 lg:mb-0">
                        {/* 1. LAYER BEHIND (MAIN IMAGE) - Shifted Top Left */}
                        <div
                            className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden z-10 shadow-2xl border border-white/5"
                        >
                            <Image
                                src="/assets/desert-safari-card.jpg"
                                alt="Desert Action"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* 2. LAYER ABOVE (SECONDARY IMAGE) - Shifted Bottom Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden z-20 shadow-[0_20px_100px_rgba(0,0,0,1)] border border-white/10"
                        >
                            <Image
                                src="/assets/uae_luxury_hero.png"
                                alt="Desert Serenity"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>

                        {/* Floating elements - Perfectly Balanced */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-6 left-[-10px] md:left-[-40px] z-30 bg-secondary px-8 py-10 rounded-[2.5rem] text-black shadow-2xl flex flex-col items-center min-w-[160px] border-4 border-black"
                        >
                            <Sparkles className="mb-4 text-black" size={28} />
                            <div className="text-4xl font-black italic mb-1 leading-none">100%</div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">Authentic <br /> Journey</div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 md:mb-8 block italic">Curated Perspectives</span>
                            <h2 className="text-4xl md:text-8xl font-serif font-bold text-white leading-[0.85] mb-10 tracking-tighter">
                                ADVENTURE <br />
                                MEETS <span className="text-secondary italic">CHILL.</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                                We believe the desert is best experienced through contrasts. From the high-speed thrill of dune crashing to the absolute stillness of a starlit dinner.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-secondary transition-all">
                                    <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        Extreme Safety
                                    </h4>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Licensed safari pilots ensure every drift is precise and secure.</p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-secondary transition-all">
                                    <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        Elite Access
                                    </h4>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Exclusive spots in the high dunes far from the tourist crowds.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
