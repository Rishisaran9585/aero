"use client";

import InternalHero from "@/components/InternalHero";
import { internationalPackages } from "@/data/packages";
import { motion } from "framer-motion";
import {
    Plane,
    Hotel,
    Car,
    Compass,
    UserCheck,
    Globe,
    Zap,
    Camera,
    Sparkles
} from "lucide-react";
import ModernPackageGrid from "@/components/ModernPackageGrid";
import Image from "next/image";

export default function InternationalToursPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white pb-0 selection:bg-secondary selection:text-black">
            {/* 1. CINEMATIC HERO */}
            <InternalHero
                title="INTERNATIONAL"
                subtitle="Pulse of the Globe"
                image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
            />

            {/* 2. NATURE VS CULTURE */}
            <section className="snap-section py-20 md:py-32 bg-[#080808] border-y border-white/5 relative flex items-center min-h-screen">
                <div className="container mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
                        <div className="w-full md:w-auto">
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Visual Narratives</span>
                            <h2 className="text-6xl md:text-9xl font-serif font-bold leading-[0.85] tracking-tighter">Nature vs <br /> <span className="text-secondary italic">Culture.</span></h2>
                        </div>
                        <div className="flex items-start gap-4 md:max-w-xs">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary shrink-0">
                                <Zap size={20} />
                            </div>
                            <p className="text-gray-500 text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold opacity-60">
                                Identifying the textures of your next destination.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* High Impact Split Panel */}
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop"
                                alt="Culture"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Sparkles size={28} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Ancient <br /> Footprint</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-12">
                                        Explore Turkey and Azerbaijan, where history is etched into every stone and spice market.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-12 h-px bg-secondary" /> Heritage Collection
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/5 mt-0 lg:mt-24"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1565008418572-194d91bc5567?q=80&w=1200&auto=format&fit=crop"
                                alt="Nature"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Camera size={28} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Wild <br /> Frontier</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-12">
                                        Venture into Georgia and the Alpine escapes where nature speaks louder than words.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-12 h-px bg-secondary" /> Adventure Series
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. SIGNATURE EXPERIENCES */}
            <section className="snap-section py-24 lg:py-32 relative overflow-hidden bg-black flex items-center min-h-screen">
                <div className="container mx-auto px-4 w-full">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-7xl md:text-9xl font-serif font-bold mb-8 leading-[0.8] tracking-tighter"
                            >
                                Selective <br /> <span className="text-secondary italic">Luxury.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-md"
                            >
                                We bridge the gap between imagination and itinerary. Our packages are the gold standard of global travel.
                            </motion.p>

                            <div className="relative h-14 md:h-20 mb-16 overflow-hidden border-y border-white/5 flex items-center bg-white/[0.02]">
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="flex gap-20 md:gap-32 whitespace-nowrap text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] text-white/30"
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

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/5 relative z-10 overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 blur-3xl group-hover:bg-secondary/20 transition-all" />
                                <h4 className="text-secondary font-black text-xs tracking-[0.3em] uppercase mb-10 flex items-center gap-4">
                                    <Globe size={18} /> THE AEROSAFE PROMISE
                                </h4>
                                <p className="text-white text-2xl md:text-4xl font-serif font-medium leading-tight italic">
                                    "Travel is the only thing you buy that makes you richer. We ensure the currency of your memories is always premium."
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-12 relative min-h-[500px]">
                            {/* Overlapping Image Composition */}
                            <div className="pt-20">
                                <div
                                    className="relative aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
                                >
                                    <Image
                                        src="/assets/heritage_villlage.jpg"
                                        fill
                                        className="object-cover"
                                        alt="Elite Heritage"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </div>
                            <div>
                                <div
                                    className="relative aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
                                >
                                    <Image
                                        src="/assets/dubai.jpg"
                                        fill
                                        className="object-cover"
                                        alt="Elite Experience"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 rounded-full bg-secondary text-black flex items-center justify-center text-center font-black uppercase text-[10px] md:text-[12px] tracking-widest animate-pulse border-4 border-black z-30 shadow-2xl">
                                Award <br /> Winning <br /> Quality
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MODERN PACKAGE GRID */}
            <div className="snap-section flex flex-col justify-center min-h-screen">
                <ModernPackageGrid packages={internationalPackages} />
            </div>
        </div>
    );
}
