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
        <div className="bg-black min-h-screen text-white selection:bg-secondary selection:text-black">
            <div className="snap-start">
                <InternalHero
                    title="UAE TOURS"
                    subtitle="Sightseeing & Traditions"
                    image="/assets/uae_luxury_hero.png"
                />
            </div>

            {/* 2. DUBAI CITY TOUR */}
            <section className="py-8 md:py-12 container mx-auto px-4">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">Iconic Metropolis</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none tracking-tighter uppercase">Dubai City <br /> <span className="text-secondary italic font-serif">Tour.</span></h2>
                        </div>
                        <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                            <MapPin size={16} className="text-secondary" /> 6 Signature Landmarks
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { name: "Burj Khalifa", img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=800&auto=format&fit=crop", icon: Building2 },
                            { name: "Dubai Marina", img: "/assets/marina.jpg", icon: Waves },
                            { name: "Palm Jumeirah", img: "/assets/palm.jpg", icon: Palmtree },
                            { name: "Jumeirah Mosque", img: "/assets/Jumeirah.jpg", icon: Gem },
                            { name: "Gold Souk", img: "/assets/gold.jpg", icon: Zap },
                            { name: "Al Fahidi Heritage", img: "/assets/fahidi.jpg", icon: Compass }
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
            </section>

            {/* 3. ABU DHABI CITY TOUR */}
            <section className="pt-4 md:pt-8 pb-16 md:pb-24 bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <div className="flex flex-col md:flex-row-reverse justify-between items-end gap-4 border-b border-white/10 pb-6 text-right">
                            <div>
                                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-1 block">The Royal Capital</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-none tracking-tighter uppercase">Abu Dhabi <br /> <span className="text-secondary italic font-serif">Legacy.</span></h2>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                <Sparkles size={14} className="text-secondary" /> 4 Imperial Destinations
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

            <div>
                <RegionalDiscovery />
            </div>

            {/* COMPLETE 7 EMIRATES GUIDE */}
            <div className="snap-section">
                <EmiratesGuide />
            </div>

            {/* 5. TOUR PACKAGES - CINEMATIC SHOWCASE */}
            <div className="snap-section">
                <CinematicShowcase packages={uaePackages} />
            </div>

        </div>
    );
}
