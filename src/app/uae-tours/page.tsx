"use client";

import InternalHero from "@/components/InternalHero";
import { uaePackages } from "@/data/packages";
import { motion } from "framer-motion";
import {
    MapPin,
    ArrowUpRight,
    Star,
    Camera,
    Compass,
    Sparkles,
    Gem,
    Zap,
    Building2,
    Palmtree,
    Waves
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CinematicShowcase from "@/components/CinematicShowcase";
import RegionalDiscovery from "@/components/RegionalDiscovery";
import LuxeDiscovery from "@/components/LuxeDiscovery";

import EmiratesGuide from "@/components/EmiratesGuide";

export default function UAEToursPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white pb-0 selection:bg-secondary selection:text-black">
            {/* 1. CINEMATIC HERO */}
            <InternalHero
                title="UAE TOURS"
                subtitle="Sightseeing & Traditions"
                image="/assets/uae_luxury_hero.png"
            />
            {/* 2. DUBAI CITY TOUR */}
            <section className="snap-section py-20 md:py-32 relative overflow-hidden flex items-center min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-10">
                            <div>
                                <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-3 block">Iconic Metropolis</span>
                                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none tracking-tighter uppercase">Dubai City <br /> <span className="text-secondary italic font-serif">Tour.</span></h2>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <MapPin size={18} className="text-secondary" /> 6 Signature Landmarks
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { name: "Burj Khalifa", img: "/assets/dubai/Burj Khalifa.jpg", icon: Building2 },
                                { name: "Dubai Marina", img: "/assets/dubai/Dubai Marina.jpg", icon: Waves },
                                { name: "Palm Jumeirah", img: "/assets/dubai/Palm Jumeirah.jpg", icon: Palmtree },
                                { name: "Jumeirah Mosque", img: "/assets/dubai/Jumeirah Mosque.jpg", icon: Gem },
                                { name: "Gold Souk", img: "/assets/dubai/Gold Souk.jpg", icon: Zap },
                                { name: "Al Fahidi Heritage", img: "/assets/dubai/Al Fahidi Historical District.jpg", icon: Compass }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 shadow-xl"
                                >
                                    <Image src={item.img} alt={item.name} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <item.icon className="w-5 h-5 text-secondary mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-sm font-black uppercase tracking-[0.2em] text-white leading-tight">{item.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ABU DHABI CITY TOUR */}
            <section className="snap-section py-20 md:py-32 bg-white/[0.01] border-y border-white/5 flex items-center min-h-screen">
                <div className="container mx-auto px-4 w-full">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="flex flex-col md:flex-row-reverse justify-between items-end gap-6 border-b border-white/10 pb-10 text-right">
                            <div>
                                <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-3 block">The Royal Capital</span>
                                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none tracking-tighter uppercase">Abu Dhabi <br /> <span className="text-secondary italic font-serif">Legacy.</span></h2>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <Sparkles size={18} className="text-secondary" /> 4 Imperial Destinations
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { name: "Grand Mosque", img: "/assets/abudhabi/Sheikh Zayed Grand Mosque.jpg", desc: "Masterpiece." },
                                { name: "Emirates Palace", img: "/assets/abudhabi/Emirates Palace.jpg", desc: "Hospitality." },
                                { name: "Yas Island", img: "/assets/abudhabi/Yas Island.jpg", desc: "High-speed." },
                                { name: "Heritage Village", img: "/assets/heritage_villlage.jpg", desc: "Bedouin roots." }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="group p-2 md:p-3 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-secondary/30 transition-all shadow-xl"
                                >
                                    <div className="aspect-square rounded-[1.5rem] overflow-hidden relative mb-4">
                                        <Image src={item.img} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="px-2 pb-4 text-center">
                                        <h4 className="text-xs md:text-sm font-bold mb-1 tracking-tight group-hover:text-secondary transition-colors uppercase">{item.name}</h4>
                                        <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EMIRATES DUO FEATURE */}
            <section className="snap-section py-20 md:py-32 overflow-hidden flex items-center min-h-[90vh]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden border border-white/10 group"
                    >
                        <Image
                            src="/assets/duo.jpg"
                            alt="Emirates Duo"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

                        <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-center items-start max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-secondary" />
                                    <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">Premium Combination</span>
                                </div>

                                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter uppercase">
                                    Emirates <br />
                                    <span className="text-secondary italic">Duo.</span>
                                </h2>

                                <p className="text-gray-300 text-base md:text-lg max-w-md font-light leading-relaxed">
                                    Why choose one when you can have both? Experience the futuristic skyline of Dubai and the majestic cultural legacy of Abu Dhabi in one absolute journey.
                                </p>

                                <Link
                                    href="/packages/emirates-duo"
                                    className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold text-sm tracking-tight hover:bg-secondary transition-all transform hover:scale-105 group/btn"
                                >
                                    EXPLORE THE PACKAGE
                                    <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-center p-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none">Dubai <br />+<br /> Abu Dhabi</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <RegionalDiscovery />

            {/* COMPLETE 7 EMIRATES GUIDE */}
            <EmiratesGuide />

            {/* 5. TOUR PACKAGES - CINEMATIC SHOWCASE */}
            <CinematicShowcase packages={uaePackages} />

        </div>
    );
}
