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
import EastCoastDiscovery from "@/components/EastCoastDiscovery";

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
                                { name: "Burj Al Arab", img: "/assets/dubai/Burj Al Arab.jpg", icon: Building2 },
                                { name: "Palm Jumeirah", img: "/assets/dubai/Palm Jumeirah.jpg", icon: Palmtree },
                                { name: "Zabeel Palace", img: "/assets/dubai/Zabeel Palace.jpg", icon: Building2 },
                                { name: "Al Seef", img: "/assets/dubai/Al Seef.jpg", icon: Waves },
                                { name: "Al Fahidi", img: "/assets/dubai/Al Fahidi Historical District.jpg", icon: Compass },
                                { name: "Gold Souq", img: "/assets/dubai/Gold Souk.jpg", icon: Zap }
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
                                <Sparkles size={18} className="text-secondary" /> 5 Imperial Destinations
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { name: "Grand Mosque", img: "/assets/abudhabi/Sheikh Zayed Grand Mosque.jpg", desc: "Masterpiece." },
                                { name: "Emirates Palace", img: "/assets/abudhabi/Emirates Palace.jpg", desc: "Hospitality." },
                                { name: "Yas Island", img: "/assets/abudhabi/Yas Island.jpg", desc: "High-speed." },
                                { name: "Louvre Abu Dhabi", img: "/assets/abudhabi/Louvre Abu Dhabi.jpg", desc: "Culture." },
                                { name: "Ferrari World", img: "/assets/abudhabi/Ferrari World.jpg", desc: "Adventure." }
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

            <RegionalDiscovery />
            <EastCoastDiscovery />

            {/* COMPLETE 7 EMIRATES GUIDE */}
            <EmiratesGuide />

            {/* 5. TOUR PACKAGES - CINEMATIC SHOWCASE */}
            <CinematicShowcase packages={uaePackages} />

        </div>
    );
}
