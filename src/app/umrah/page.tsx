"use client";

import InternalHero from "@/components/InternalHero";
import { motion } from "framer-motion";
import {
    Moon,
    ArrowUpRight,
    Star,
    Shield,
    Clock,
    Heart,
} from "lucide-react";
import Image from "next/image";

const UMRAH_PACKAGES = [
    {
        id: 1,
        title: "Umrah in Ramadan",
        image: "/assets/UMRAH/Umrah in Ramadan.jpg",
    },
    {
        id: 2,
        title: "Makkah Spiritual Stay",
        image: "/assets/UMRAH/Makkah Spiritual Stay.jpg",
    },
    {
        id: 3,
        title: "Holy Cities Journey",
        image: "/assets/UMRAH/Holy Cities Journey.jpg",
    },
    {
        id: 4,
        title: "Ramadan Madinah Special",
        image: "/assets/UMRAH/Ramadan Madinah Special.jpg",
    },
    {
        id: 5,
        title: "Premium Makkah Experience",
        image: "/assets/UMRAH/Premium Makkah Experience.jpg",
    },
    {
        id: 6,
        title: "Miqat Madinah Route",
        image: "/assets/UMRAH/Miqat Madinah Route.jpg",
    },
    {
        id: 7,
        title: "Umrah Pilgrimage Experience",
        image: "/assets/UMRAH/Umrah Pilgrimage Experience.jpg",
    },
    {
        id: 8,
        title: "Miqat Special Journey",
        image: "/assets/UMRAH/Miqat Special Journey.jpg",
    },
    {
        id: 9,
        title: "Legacy Route Pilgrimage",
        image: "/assets/UMRAH/Legacy Route Pilgrimage.jpg",
    },
    {
        id: 10,
        title: "Umrah Plus Dubai",
        image: "/assets/UMRAH/Umrah Plus Dubai.jpg",
    },
    {
        id: 11,
        title: "Luxury Makkah & Madinah",
        image: "/assets/UMRAH/Luxury Makkah & Madinah.jpg",
    },
    {
        id: 12,
        title: "Hilton Stay Experience",
        image: "/assets/UMRAH/Hilton Stay Experience.jpg",
    },
    {
        id: 13,
        title: "Palatial Umrah Luxury",
        image: "/assets/UMRAH/Palatial Umrah Luxury.jpg",
    }
];

const BEST_SELLING_PACKAGES = [
    {
        id: "bs-1",
        title: "Makkah & Madinah Pilgrimage",
        subtitle: "3 Star Collective",
        price: "63,598",
        duration: "3 Nights 4 Days",
        tag: "All-inclusive",
        image: "/assets/UMRAH/Makkah & Madinah Pilgrimage.jpg",
    },
    {
        id: "bs-2",
        title: "Umrah Pilgrimage Experience",
        subtitle: "Concludes in Madinah",
        price: "75,770",
        duration: "2 Nights 3 Days",
        tag: "Popular Choice",
        image: "/assets/UMRAH/Umrah Pilgrimage Experience.jpg",
    },
    {
        id: "bs-3",
        title: "Luxury Umrah Sanctuary",
        subtitle: "The Signature Stay",
        price: "148,240",
        duration: "3 Nights 4 Days",
        tag: "Imperial Stay",
        image: "/assets/UMRAH/Luxury Umrah Sanctuary.jpg",
    },
    {
        id: "bs-4",
        title: "The Hilton Executive Stay",
        subtitle: "Clock Tower Series",
        price: "83,904",
        duration: "3 Nights 4 Days",
        tag: "Vip Selection",
        image: "/assets/UMRAH/The Hilton Executive Stay.jpg",
    }
];

export default function UmrahServicesPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white pb-0 selection:bg-secondary selection:text-black">
            {/* 1. CINEMATIC HERO */}
            <InternalHero
                title="UMRAH SERVICES"
                subtitle="Your Sacred Journey, Our Commitment"
                image="/assets/umrah_hero.jpg"
            />

            {/* 2. CORE PHILOSOPHY */}
            <section className="pt-20 md:pt-32 pb-8 md:pb-12 bg-[#080808] border-t border-white/5 relative flex items-center">
                <div className="container mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
                        <div className="w-full md:w-auto">
                            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">The Sovereign Collection</span>
                            <h2 className="text-3xl md:text-6xl font-serif font-bold leading-[0.9] tracking-tighter">
                                Pure <br />
                                <span className="text-secondary">Devotion.</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-10 md:max-w-md">
                            <div className="w-px h-24 bg-white/10 hidden md:block" />
                            <p className="text-gray-500 text-sm md:text-lg font-light italic leading-relaxed opacity-60">
                                "Spiritual journey is not a package. It is a level of service where the soul's peace is the only priority."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* High Impact Split Panel */}
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src="/assets/UMRAH/Luxury Makkah & Madinah.jpg"
                                alt="Makkah"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Star size={28} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Mother <br /> of Cities</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-12">
                                        Experience the spiritual epicenter of the world with bespoke stays overlooking the Holy Kaaba.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-12 h-px bg-secondary" /> Makkah Collection
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="group relative h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src="/assets/UMRAH/Ramadan Madinah Special.jpg"
                                alt="Madinah"
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Heart size={28} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">The City <br /> of Light</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500 max-w-sm mb-12">
                                        Find peace and tranquility in the city of the Prophet, with premium hospitality and proximity.
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                                        <span className="w-12 h-px bg-secondary" /> Madinah Series
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. BEST SELLING PACKAGES - PANORAMIC SHOWCASE */}
            <section className="py-12 md:py-16 bg-[#080808] relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                        {/* Section Header - Fixed Column */}
                        <div className="lg:w-1/4 flex flex-col justify-center border-l-2 border-secondary/20 pl-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[8px] md:text-[9px] mb-3 block italic opacity-70">The Choice of Elite</span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-white">
                                    Best Selling <br />
                                    <span className="text-secondary italic">Collections.</span>
                                </h2>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 italic max-w-xs">
                                    Curated selection of our most revered itineraries, favored for their perfect balance of luxury and devotion.
                                </p>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                                        <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-secondary transition-colors">Explore All</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Packages Row - High Density Showcase */}
                        <div className="lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                {BEST_SELLING_PACKAGES.map((pkg, idx) => (
                                    <motion.div
                                        key={pkg.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="group relative bg-[#111111] rounded-[1.5rem] overflow-hidden border border-white/5 flex flex-col hover:border-secondary/30 transition-all duration-500"
                                    >
                                        {/* Panoramic Image Header */}
                                        <div className="relative aspect-[4/5] overflow-hidden">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                                            {/* Minimalist Floating Badges */}
                                            <div className="absolute top-4 left-5 flex flex-col gap-1.5">
                                                <span className="px-2.5 py-1 bg-secondary text-black rounded-full text-[6px] font-black uppercase tracking-widest">
                                                    {pkg.tag}
                                                </span>
                                                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full text-[6px] font-black uppercase tracking-widest">
                                                    {pkg.duration}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Refined Content Area */}
                                        <div className="p-6">
                                            <span className="text-secondary text-[7px] font-black uppercase tracking-[0.3em] mb-1.5 block opacity-50 group-hover:opacity-100 transition-opacity">
                                                {pkg.subtitle}
                                            </span>
                                            <h3 className="text-base md:text-lg font-serif font-bold leading-tight text-white mb-4 group-hover:text-secondary transition-colors">
                                                {pkg.title}
                                            </h3>

                                            <div className="flex items-center gap-3 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                <div className="text-[7px] font-bold uppercase tracking-[0.4em] text-white italic">
                                                    VIEW PACKAGE
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SIGNATURE SACRED PACKAGES */}
            <section className="pt-10 pb-4 relative overflow-hidden bg-[#080808]">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs block mb-2"
                        >
                            Bespoke Itineraries
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight"
                        >
                            Sacred <span className="text-secondary italic">Packages.</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {UMRAH_PACKAGES.map((pkg, idx) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
                                className="group relative aspect-[3/2] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#111] shadow-2xl"
                            >
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                    <h3 className="text-3xl font-serif font-bold mb-8 text-white group-hover:text-secondary transition-colors duration-500 leading-tight">
                                        {pkg.title}
                                    </h3>
                                    <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                                        <div className="flex items-center gap-4 text-white font-black text-[10px] tracking-[0.4em] uppercase">
                                            <span className="w-12 h-px bg-secondary" /> VIEW JOURNEY
                                        </div>
                                        <ArrowUpRight size={18} className="text-secondary" />
                                    </div>
                                </div>

                                {/* Aesthetic Corner Detail */}
                                <div className="absolute top-12 right-[-25px] w-20 h-20 bg-secondary/10 backdrop-blur-3xl rotate-45 z-10 opacity-0 group-hover:opacity-100 group-hover:right-[-10px] transition-all duration-700 border border-white/20" />
                                <div className="absolute top-12 right-[-25px] w-14 h-14 bg-secondary rotate-45 z-10 opacity-0 group-hover:opacity-100 group-hover:right-[0px] transition-all duration-500 delay-100" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. THE AEROSAFE PROMISE - REDESIGNED */}
            <section className="pt-6 pb-20 bg-[#080808] border-t border-white/5 relative overflow-hidden">
                {/* Decorative background text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
                    <span className="text-[20vw] font-serif font-bold italic">Bespoke Pilgrimage</span>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto">
                        <div className="lg:w-2/5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 block">Unwavering Commitment</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
                                    The <br /> <span className="text-secondary italic">Promise.</span>
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md">
                                    Every step of your pilgrimage is guarded by our commitment to transparency, speed, and spiritual ease.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-[1px] bg-white/20" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">Scroll for Excellence</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-3/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        label: "Instant Confirmation",
                                        desc: "Direct Maqam-integrated systems ensuring your visa and stay are secured in real-time.",
                                        icon: Clock,
                                        delay: 0.1
                                    },
                                    {
                                        label: "Ministry Approved",
                                        desc: "Fully certified by the Ministry of Hajj & Umrah for absolute peace of mind.",
                                        icon: Shield,
                                        delay: 0.2
                                    },
                                    {
                                        label: "Zero Hidden Costs",
                                        desc: "What you see is what you pay. Complete transparency throughout your journey.",
                                        icon: Star,
                                        delay: 0.3
                                    },
                                    {
                                        label: "On-Ground Concierge",
                                        desc: "Our exclusive team resides in the Holy Cities, ready to assist your every need 24/7.",
                                        icon: Heart,
                                        delay: 0.4
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: item.delay }}
                                        whileHover={{ y: -8 }}
                                        className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-secondary/20 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                            <item.icon size={80} />
                                        </div>

                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                                            <item.icon className="w-7 h-7 text-secondary group-hover:text-black transition-colors" />
                                        </div>

                                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-4">
                                            {item.label}
                                        </h4>
                                        <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-bold opacity-70 group-hover:text-white group-hover:opacity-100 transition-all">
                                            {item.desc}
                                        </p>
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
