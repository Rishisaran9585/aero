"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, StarHalf, Shield } from 'lucide-react';

export default function QualityIndicators() {
    return (
        <section className="py-[100px] relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: MapPin,
                            title: "Ubiquitous Reach",
                            desc: "Seamless door-to-door service across the entire Emirates.",
                            label: "01 / LOGISTICS"
                        },
                        {
                            icon: Users,
                            title: "Elite Fleet",
                            desc: "Meticulously maintained vehicles for the most discerning travelers.",
                            label: "02 / QUALITY"
                        },
                        {
                            icon: StarHalf,
                            title: "Optimal Value",
                            desc: "Premium luxury at competitive rates without compromise.",
                            label: "03 / PRICING"
                        },
                        {
                            icon: Shield,
                            title: "Unwavering Trust",
                            desc: "Professional chauffeurs committed to your safety and punctuality.",
                            label: "04 / SECURITY"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 blur-[60px] rounded-full group-hover:bg-secondary/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 mb-6 block group-hover:text-secondary transition-colors">
                                    {item.label}
                                </span>

                                <div className="h-14 w-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <item.icon className="h-7 w-7 text-secondary" />
                                </div>

                                <h4 className="text-xl font-serif font-bold text-white mb-4">
                                    {item.title}
                                </h4>

                                <p className="text-sm text-gray-400 font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-transparent w-0 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Text Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span className="text-[15rem] font-bold text-white/5 tracking-tighter leading-none">AEROSAFE</span>
            </div>
        </section>
    );
}
