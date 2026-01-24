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

export default function UAEToursPage() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-secondary selection:text-black">
            <InternalHero
                title="UAE TOURS"
                subtitle="Sightseeing & Traditions"
                image="/assets/uae_luxury_hero.png"
            />

            {/* 2. DUBAI CITY TOUR */}
            <section className="py-32 container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">Iconic Metropolis</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">Dubai City <span className="text-secondary italic">Tour.</span></h2>
                        </div>
                        <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                            <MapPin size={16} className="text-secondary" /> 6 Signature Landmarks
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { name: "Burj Khalifa", img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=800&auto=format&fit=crop", icon: Building2 },
                            { name: "Dubai Marina", img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop", icon: Waves },
                            { name: "Palm Jumeirah", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop", icon: Palmtree },
                            { name: "Jumeirah Mosque", img: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=800&auto=format&fit=crop", icon: Gem },
                            { name: "Gold Souk", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop", icon: Zap },
                            { name: "Al Fahidi Heritage", img: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=800&auto=format&fit=crop", icon: Compass }
                        ].map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 shadow-xl"
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
            <section className="py-32 bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="flex flex-col md:flex-row-reverse justify-between items-end gap-6 border-b border-white/10 pb-8 text-right">
                            <div>
                                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">The Royal Capital</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">Abu Dhabi <span className="text-secondary italic">Legacy.</span></h2>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                                <Sparkles size={16} className="text-secondary" /> 4 Imperial Destinations
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Grand Mosque", img: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=800&auto=format&fit=crop", desc: "A marble masterpiece of Islamic architecture." },
                                { name: "Emirates Palace", img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop", desc: "The pinnacle of Arabian hospitality." },
                                { name: "Yas Island", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop", desc: "The heart of high-speed entertainment." },
                                { name: "Heritage Village", img: "/assets/heritage.png", desc: "A portal into the UAE's Bedouin roots." }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="group p-3 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-secondary/30 transition-all shadow-xl"
                                >
                                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative mb-6">
                                        <Image src={item.img} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="px-4 pb-6 text-center">
                                        <h4 className="text-lg font-bold mb-2 tracking-tight group-hover:text-secondary transition-colors uppercase">{item.name}</h4>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE NORTHERN EMIRATES - IMMERSIVE MOSAIC */}
            <RegionalDiscovery />

            {/* 5. TOUR PACKAGES - CINEMATIC SHOWCASE */}
            <CinematicShowcase packages={uaePackages} />

        </div>
    );
}
