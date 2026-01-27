"use client";

import InternalHero from "@/components/InternalHero";
import { internationalPackages } from "@/data/packages";
import { motion } from "framer-motion";
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
import ModernPackageGrid from "@/components/ModernPackageGrid";
import { useRef } from "react";
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

            {/* 2. NEW "PULSE OF THE WORLD" - INTERACTIVE SCROLL EXPERIENCE */}
            <section className="py-12 md:py-24 bg-[#080808] border-y border-white/5 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
                        <div className="w-full md:w-auto">
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Visual Narratives</span>
                            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[0.9] tracking-tighter">Nature vs <br /> <span className="text-secondary italic">Culture.</span></h2>
                        </div>
                        <div className="flex items-start gap-4 md:max-w-xs">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary shrink-0">
                                <Zap size={18} />
                            </div>
                            <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed uppercase tracking-widest font-bold">
                                Identifying the textures of your next destination.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* High Impact Split Panel */}
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5"
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
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">The Ancient <br /> Footprint</h3>
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
                            className="group relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5 mt-0 lg:mt-12"
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
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">The Wild <br /> Frontier</h3>
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
            <section className="py-24 lg:py-32 relative overflow-hidden bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-[0.85] tracking-tighter"
                            >
                                Selective <br /> <span className="text-secondary italic">Luxury.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-gray-500 text-sm md:text-xl font-light leading-relaxed mb-12 max-w-md"
                            >
                                We bridge the gap between imagination and itinerary. Our packages are the gold standard of global travel.
                            </motion.p>

                            <div className="relative h-10 md:h-14 mb-12 overflow-hidden border-y border-white/5 flex items-center bg-white/[0.02]">
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="flex gap-12 md:gap-20 whitespace-nowrap text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/30"
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
                                className="p-8 md:p-14 rounded-[3rem] bg-white/[0.03] border border-white/5 relative z-10 overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl group-hover:bg-secondary/20 transition-all" />
                                <h4 className="text-secondary font-black text-[10px] tracking-widest uppercase mb-8 flex items-center gap-3">
                                    <Globe size={14} /> The Aerosafe Promise
                                </h4>
                                <p className="text-white text-lg md:text-2xl font-serif font-medium leading-relaxed italic">
                                    "Travel is the only thing you buy that makes you richer. We ensure the currency of your memories is always premium."
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative min-h-[400px]">
                            {/* Overlapping Image Composition */}
                            <div className="pt-8 md:pt-12">
                                <div
                                    className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src="/assets/heritage.png"
                                        fill
                                        className="object-cover"
                                        alt="Elite Heritage"
                                        priority
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </div>
                            <div>
                                <div
                                    className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src="/assets/exp.png"
                                        fill
                                        className="object-cover"
                                        alt="Elite Experience"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary text-black flex items-center justify-center text-center font-black uppercase text-[7px] md:text-[8px] tracking-widest animate-pulse border-4 border-black z-30 shadow-2xl">
                                Award <br /> Winning <br /> Quality
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Packages (Restored) */}
            <div className="pt-20 pb-32 relative z-10">
                <ModernPackageGrid packages={internationalPackages} />
            </div>

            {/* 4. MASONRY DESTINATIONS */}
            <section className="pt-10 pb-20 container mx-auto px-4 flex flex-col justify-center">
                <div className="text-center mb-20">
                    <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Boundless Journeys</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none tracking-tighter">International <br /> <span className="text-secondary italic">Packages.</span></h2>
                    <div className="h-1 w-24 bg-secondary mx-auto mt-8 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {internationalPackages.map((pkg, i) => (
                        <motion.div
                            key={pkg.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative h-[380px] rounded-[2rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                            />
                            {/* Callout Badge */}
                            <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-secondary text-[8px] font-black uppercase tracking-widest italic">Global Icon</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{pkg.duration}</span>
                                        <div className="w-1 h-1 bg-white/30 rounded-full" />
                                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">{pkg.price}</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{pkg.title}</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        {pkg.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                                    {pkg.highlights.map(h => (
                                        <span key={h} className="text-[8px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-secondary fill-secondary" />
                                        <span className="text-xs font-bold">{pkg.rating}</span>
                                    </div>
                                    <Link href={`/packages/${pkg.slug}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. EDITORIAL INCLUSIONS LIST */}
            <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                        <div>
                            <span className="text-secondary text-xs font-black tracking-[0.5em] uppercase mb-8 block">Aerosafe Advantage</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none tracking-tighter">The <br /> <span className="text-secondary italic">Standard.</span></h2>
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
                </div>
            </section>
        </div>
    );
}
