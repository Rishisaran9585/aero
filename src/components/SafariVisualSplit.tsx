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

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-40 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-24">

                    {/* Images Side */}
                    <div className="lg:w-1/2 relative h-[700px] flex items-center justify-center">
                        <motion.div
                            style={{ y: y1 }}
                            className="relative w-[70%] aspect-[4/5] rounded-[3rem] overflow-hidden z-20 shadow-2xl border border-white/5"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200"
                                alt="Desert Action"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </motion.div>

                        <motion.div
                            style={{ y: y2 }}
                            className="absolute right-0 top-20 w-[60%] aspect-[4/5] rounded-[3rem] overflow-hidden z-10 opacity-50 border border-white/5"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
                                alt="Desert Serenity"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Floating elements */}
                        <div className="absolute -left-10 bottom-20 z-30 bg-secondary/90 backdrop-blur-xl p-8 rounded-[2rem] text-black shadow-2xl">
                            <Sparkles className="mb-4" size={32} />
                            <div className="text-4xl font-black italic">100%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest mt-1">Authentic Journey</div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-black tracking-[0.5em] uppercase text-xs mb-8 block">CURATED PERSPECTIVES</span>
                            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.85] mb-10 tracking-tighter">
                                ADVENTURE <br />
                                MEETS <span className="text-secondary italic">SILENCE.</span>
                            </h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12 max-w-lg">
                                We believe the desert is best experienced through contrasts. From the high-speed thrill of dune crashing to the absolute stillness of a starlit dinner.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-secondary transition-all">
                                    <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                        Extreme Safety
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Licensed safari pilots ensure every drift is precise and secure.</p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-secondary transition-all">
                                    <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                        Elite Access
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Exclusive spots in the high dunes far from the tourist crowds.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
