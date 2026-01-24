"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Globe,
    Users,
    Car,
    MapPin,
    ArrowRight,
    Award,
    Activity,
    Compass,
    Layers,
    Zap,
    MoveRight
} from "lucide-react";
import InternalHero from "@/components/InternalHero";

export default function AboutPage() {

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-secondary selection:text-black font-sans overflow-x-hidden">

            <InternalHero
                title="ABOUT US"
                subtitle="A Legacy of Excellence"
                image="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1920&auto=format&fit=crop"
            />

            {/* 2. MISSION & VISION - THE ARCHITECTURAL SPLIT */}
            <section className="py-40 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                        {/* Mission */}
                        <div className="p-16 md:p-24 bg-[#080808] hover:bg-[#0A0A0A] transition-colors duration-700 group">
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[1em] mb-12 block">OUR MISSION</span>
                            <h3 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-8">
                                Redefining <br />
                                <span className="text-secondary italic">Global Transitions.</span>
                            </h3>
                            <p className="text-gray-400 text-xl font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                To set the gold standard in premium travel logistics by owning every touchpoint—ensuring absolute reliability, safety, and cultural depth for every traveler crossing the UAE and beyond.
                            </p>
                            <div className="h-px w-24 bg-secondary/30 mt-12 group-hover:w-full transition-all duration-1000" />
                        </div>

                        {/* Vision */}
                        <div className="p-16 md:p-24 bg-[#080808] hover:bg-[#0A0A0A] transition-colors duration-700 group border-t lg:border-t-0 lg:border-l border-white/5">
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[1em] mb-12 block">OUR VISION</span>
                            <h3 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-8">
                                Architects of <br />
                                <span className="text-secondary italic">Limitless Journeys.</span>
                            </h3>
                            <p className="text-gray-400 text-xl font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                To be the world's most trusted bridge between local authenticity and global luxury, where travel is not just a destination but a seamless architectural masterpiece of experiences.
                            </p>
                            <div className="h-px w-24 bg-secondary/30 mt-12 group-hover:w-full transition-all duration-1000" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW WE WORK - THE KINETIC PROCESS */}
            <section className="py-40 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[1.5em] mb-8 block">THE METHODOLOGY</span>
                        <h2 className="text-6xl md:text-9xl font-serif font-black text-white tracking-tighter uppercase leading-none">
                            How we <br />
                            <span className="text-secondary italic">Architect.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            {
                                id: "01",
                                title: "Discovery & Intent",
                                desc: "We begin by understanding the soul of your journey—translating abstract desires into a structured architectural travel plan."
                            },
                            {
                                id: "02",
                                title: "Asset Deployment",
                                desc: "We deploy our localized assets—from our private luxury fleet to DTCM-approved experts—ensuring zero reliance on third-party quality."
                            },
                            {
                                id: "03",
                                title: "Seamless Execution",
                                desc: "Our 24/7 engine room monitors every transition in real-time, delivering a pinpoint experience from landing to takeoff."
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 h-full hover:bg-white/[0.04] hover:border-secondary/20 transition-all duration-500">
                                    <span className="text-[8rem] font-serif italic text-white/5 absolute top-0 -left-4 group-hover:text-secondary/10 transition-colors uppercase leading-none select-none">
                                        {step.id}
                                    </span>
                                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 relative z-10 group-hover:text-secondary transition-colors italic">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 text-lg font-light leading-relaxed relative z-10 group-hover:text-gray-400 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white/[0.02] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-white/[0.03] rounded-full pointer-events-none" />
            </section>

            {/* 4. THE LAB: BEHIND THE SCENES - ASYMMETRICAL STORYTELLING */}
            <section className="py-40 bg-black border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-2/3 grid grid-cols-2 gap-6 relative">
                            <motion.div
                                whileHover={{ scale: 0.98 }}
                                className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
                            >
                                <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" fill alt="Ops" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                            </motion.div>
                            <motion.div
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                className="relative aspect-[4/5] rounded-[3rem] mt-20 overflow-hidden border border-white/10 group shadow-2xl"
                            >
                                <Image src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800" fill alt="Vehicle" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                            </motion.div>

                            {/* Visual Pulse Element */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <Activity size={80} className="text-secondary animate-pulse opacity-50" />
                            </div>
                        </div>

                        <div className="lg:w-1/3 space-y-12">
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[1em] mb-4 block">THE ENGINE ROOM</span>
                            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-[0.85] uppercase">
                                Real <br />
                                <span className="text-secondary italic">Ops.</span>
                            </h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed">
                                Our strength lies in strong local operations in Dubai supported by international travel partnerships. We operate with licensed staff, approved guides, and company-owned vehicles to ensure service reliability and passenger safety.
                            </p>
                            <div className="space-y-6 pt-12">
                                {["Direct Chauffeurs", "Licensed Regional Guides", "In-house Fleet Control"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white/40 hover:text-secondary transition-colors cursor-default">
                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                        <span className="text-sm font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE BRIDGE: INDIA CONNECTION - REDESIGNED */}
            <section className="py-48 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-32">
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[1em] mb-12 block">GLOBAL FOOTPRINT</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter uppercase leading-[0.8]">
                            FIRST <br />
                            <span className="text-white/10 italic">DREAM DESTINATION.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        {/* Left Card */}
                        <div className="lg:col-span-5 p-12 md:p-16 rounded-[4rem] bg-[#0A0A0A] border border-white/5 relative group shadow-2xl">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-bold text-white mb-10 tracking-tight italic">The India Hub</h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                                    Alongside Aerosafe Tours in Dubai, we also operate under the brand <span className="text-secondary font-bold">First Dream Destination</span> in India. This presence strengthens our regional network and allows us to serve both inbound and outbound travelers seamlessly.
                                </p>

                                <div className="h-px w-full bg-white/10 mb-12" />

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <MapPin className="text-secondary" size={24} />
                                        <div>
                                            <p className="text-white text-xl font-black tracking-tighter uppercase">CHENNAI</p>
                                            <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest">Tamil Nadu Hub</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <MapPin className="text-secondary" size={24} />
                                        <div>
                                            <p className="text-white text-xl font-black tracking-tighter uppercase">TRIVANDRUM</p>
                                            <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest">Kerala Hub</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right List */}
                        <div className="lg:col-span-7 lg:pl-12 pt-12">
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.5em] block mb-16">NETWORK PILLARS</span>
                            <div className="space-y-12">
                                {[
                                    "UAE travel expertise",
                                    "International tour planning",
                                    "Transparent pricing",
                                    "Reliable scheduling",
                                    "Dedicated customer support"
                                ].map((pillar, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between border-b border-white/10 pb-8 group cursor-default"
                                    >
                                        <span className="text-3xl md:text-4xl font-serif text-white/40 group-hover:text-white transition-all font-light italic">{pillar}</span>
                                        <div className="h-6 w-6 rounded-full border border-secondary transition-all flex items-center justify-center group-hover:bg-secondary/10" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
