"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Compass, Music, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function VIPExperience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: Crown,
            title: "Royal Concierge",
            subtitle: "Personalized Excellence",
            desc: "Beyond reservations. We handle everything from elite event curation to personal lifestyle management with utmost discretion.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: Compass,
            title: "Private Discoveries",
            subtitle: "Uncharted Expeditions",
            desc: "Uncharted luxury. Experience the Emirates hidden treasures in absolute privacy with expert local curators.",
            image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: Music,
            title: "Exclusive Events",
            subtitle: "Red Carpet Access",
            desc: "Red-carpet orchestration for the most high-profile gatherings. We turn visions into legendary reality.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        }
    ];

    return (
        <section className="py-24 bg-[#020202] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-secondary text-xs font-black uppercase tracking-[0.6em] mb-6 block"
                        >
                            The Sovereign Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.8] tracking-tighter"
                        >
                            Bespoke <br /> <span className="text-secondary italic">Privilege.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="lg:w-1/3"
                    >
                        <p className="text-gray-500 text-lg font-light leading-relaxed italic border-l border-white/10 pl-8">
                            "Luxury is not a price point. It is a level of service where the imagination is the only boundary."
                        </p>
                    </motion.div>
                </div>

                {/* THE PILLARS */}
                <div className="flex flex-col md:flex-row h-[700px] gap-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{
                                flex: hoveredIndex === i ? 2 : 1,
                                filter: hoveredIndex !== null && hoveredIndex !== i ? "grayscale(1) opacity(0.3)" : "grayscale(0) opacity(1)"
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group rounded-[3rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/5"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Border Glow */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-all duration-700 pointer-events-none rounded-[3rem]" />

                            {/* Content Padding Wrapper */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                {/* Top Icon */}
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500">
                                        <service.icon size={32} />
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-secondary italic">
                                        0{i + 1}
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div>
                                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        {service.subtitle}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-700">
                                        {service.title}
                                    </h3>

                                    <div className="overflow-hidden">
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <motion.div
                                        className="mt-10 flex items-center gap-4 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        Inquire Privately <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Label at section end */}
            <div className="absolute bottom-10 right-10 rotate-90 origin-right pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[1em] text-white/5">Reserved Access Only</span>
            </div>
        </section>
    );
}
