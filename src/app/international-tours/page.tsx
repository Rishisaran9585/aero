"use client";

import InternalHero from "@/components/InternalHero";
import { internationalPackages } from "@/data/packages";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Plane,
    Hotel,
    Car,
    MapPin,
    Compass,
    UserCheck,
    ArrowUpRight,
    Star,
    Globe,
    Zap,
    Camera,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ModernPackageGrid from "@/components/ModernPackageGrid";
import { useRef } from "react";

export default function InternationalToursPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white pb-0 selection:bg-secondary selection:text-black">
            {/* 1. CINEMATIC HERO */}
            <InternalHero
                title="INTERNATIONAL"
                subtitle="Pulse of the Globe"
                image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
            />

            {/* 2. NEW "PULSE OF THE WORLD" - INTERACTIVE SCROLL EXPERIENCE */}
            <section className="py-40 bg-[#080808] border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Visual Narratives</span>
                            <h2 className="text-4xl md:text-7xl font-serif font-bold">Nature vs Culture</h2>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary animate-pulse">
                                <Zap size={20} />
                            </div>
                            <p className="max-w-xs text-gray-500 text-sm leading-relaxed uppercase tracking-widest font-bold">
                                Identifying the textures of your next destination.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* High Impact Split Panel */}
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop"
                                alt="Culture"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Sparkles size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-5xl font-serif font-bold mb-4">The Ancient <br /> Footprint</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-10">
                                        Explore Turkey and Azerbaijan, where history is etched into every stone and spice market.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-10 h-px bg-secondary" /> Heritage Collection
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 mt-0 lg:mt-32"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1565008418572-194d91bc5567?q=80&w=1200&auto=format&fit=crop"
                                alt="Nature"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Camera size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-5xl font-serif font-bold mb-4">The Wild <br /> Frontier</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-10">
                                        Venture into Georgia and the Alpine escapes where nature speaks louder than words.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-10 h-px bg-secondary" /> Adventure Series
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. SIGNATURE EXPERIENCES (Redesigned Selective Luxury) */}
            <section className="py-48 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-7xl md:text-9xl font-serif font-bold mb-10 leading-none tracking-tighter"
                        >
                            Selective <br /> <span className="text-secondary italic">Luxury.</span>
                        </motion.h2>
                        <p className="text-gray-500 text-xl font-light leading-relaxed mb-12 max-w-md">
                            We bridge the gap between imagination and itinerary. Our packages from UAE and India are the gold standard of global travel.
                        </p>

                        <div className="relative h-20 mb-12 overflow-hidden border-y border-white/5 flex items-center">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="flex gap-20 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.4em] text-white/10"
                            >
                                <span>The Essence of Escape</span>
                                <span>Curated Narratives</span>
                                <span>Global Selective Luxury</span>
                                <span>UAE to World</span>
                                <span>India to World</span>
                                <span>The Essence of Escape</span>
                                <span>Curated Narratives</span>
                                <span>Global Selective Luxury</span>
                                <span>UAE to World</span>
                                <span>India to World</span>
                            </motion.div>
                        </div>

                        <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl group-hover:bg-secondary/20 transition-all" />
                            <h4 className="text-secondary font-black text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                                <Globe size={14} /> The Aerosafe Promise
                            </h4>
                            <p className="text-white text-lg font-medium leading-relaxed italic">
                                "Travel is the only thing you buy that makes you richer. We ensure the currency of your memories is always premium."
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
                        {/* Overlapping Image Composition */}
                        <div className="pt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 relative"
                            >
                                <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" fill className="object-cover" alt="Elite" />
                            </motion.div>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 relative"
                            >
                                <Image src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop" fill className="object-cover" alt="Elite" />
                            </motion.div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-secondary text-black flex items-center justify-center text-center font-black uppercase text-[10px] tracking-widest animate-pulse border-8 border-black">
                            Award <br /> Winning <br /> Quality
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MASONRY DESTINATIONS */}
            <ModernPackageGrid packages={internationalPackages} />

            {/* 5. EDITORIAL INCLUSIONS LIST */}
            <section className="py-48 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div>
                        <span className="text-secondary text-xs font-black tracking-[0.5em] uppercase mb-8 block">Aerosafe Advantage</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-black leading-[0.9] mb-12">The <br /> Standard.</h2>
                        <div className="relative h-px w-32 bg-secondary mb-12" />
                        <p className="text-gray-500 text-xl font-light leading-relaxed max-w-sm">
                            We handle the complexities so you can inhabit the moments. Our foundational inclusions are non-negotiable excellence.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { icon: Plane, label: "01", title: "Global Airfare", desc: "Curated flight options tailored to your home hub." },
                            { icon: Hotel, label: "02", title: "Hotel Collection", desc: "Only world-class stays with verified service history." },
                            { icon: Car, label: "03", title: "Swift Transfers", desc: "Private, high-end logistics in every destination." },
                            { icon: Compass, label: "04", title: "Native Guiding", desc: "Deep cultural immersion with expert local storytellers." },
                            { icon: UserCheck, label: "05", title: "Elite Support", desc: "Support in any time zone, at any moment." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="group p-8 rounded-[2rem] hover:bg-white/[0.04] transition-all flex items-center justify-between border border-transparent hover:border-white/5"
                            >
                                <div className="flex items-center gap-10">
                                    <span className="text-secondary font-black text-2xl group-hover:italic transition-all">{item.label}</span>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-1 tracking-tight group-hover:text-secondary transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 text-sm max-w-[280px]">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-secondary transition-colors">
                                    <item.icon size={28} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
