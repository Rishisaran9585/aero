"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Zap, Shield, Star, ArrowRight } from "lucide-react";

export default function FleetExcellence() {
    return (
        <section className="pt-10 pb-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* VISUAL SIDE - The Showroom Stage */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-[50%] relative"
                    >
                        <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl group flex items-center justify-center">

                            {/* Inner Stage Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

                            {/* Main Vehicle Image */}
                            <div className="relative w-[90%] h-[80%] z-10">
                                <Image
                                    src="/assets/33seater.png"
                                    alt="33 Seater Premium Coach"
                                    fill
                                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Specification Badges - Floating */}
                            <div className="absolute top-10 left-10 z-20 flex flex-col gap-3">
                                <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-secondary shadow-2xl">
                                    Capacity: 33 Pax
                                </div>
                                <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 shadow-2xl">
                                    Luxury Class
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] select-none pointer-events-none">
                            <span className="text-[25rem] font-black tracking-tighter uppercase italic">FLEET</span>
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <div className="lg:w-[50%]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary text-xs font-black uppercase tracking-[0.6em] mb-4 block">Fleet Excellence</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[0.9] tracking-tighter">
                                Any Group Size, <br />
                                <span className="text-white italic">Any Distance.</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8 border-l border-white/10 pl-6 lg:pl-8">
                                Our diverse range of vehicles, from luxury sedans to 50-seater coaches, ensures we have the perfect solution for every requirement.
                            </p>

                            <Link href="/fleet">
                                <Button className="bg-secondary text-black hover:bg-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all group flex items-center gap-3 mb-8 lg:mb-12 shadow-[0_15px_30px_rgba(234,179,8,0.2)]">
                                    View All Vehicles
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>

                            {/* Precise Highlights Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                                {[
                                    { icon: Zap, title: "Fast & Precise", desc: "Always on time, every time." },
                                    { icon: Shield, title: "Ultra Secure", desc: "Highest safety standards." },
                                    { icon: Star, title: "Bespoke", desc: "Tailored to your preference." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:scale-110 transition-all duration-500">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h4 className="font-bold text-white text-base mb-2">{item.title}</h4>
                                        <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest font-bold">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
