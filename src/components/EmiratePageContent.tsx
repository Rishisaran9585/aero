"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EmirateData } from '@/data/emirates';
import {
    ChevronLeft,
    MapPin,
    ArrowRight,
    Star,
    Shield,
    Zap,
    Building2,
    Palmtree,
    Globe,
    FileText,
    Car,
    Clock,
    Compass
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = {
    Building2,
    Palmtree,
    Zap,
    Globe,
    Shield,
    Car,
    FileText,
    Star,
    Clock,
    Compass
};

interface EmiratePageContentProps {
    data: EmirateData;
}

export default function EmiratePageContent({ data }: EmiratePageContentProps) {
    const router = useRouter();

    return (
        <main className="bg-black min-h-screen text-white overflow-x-hidden">
            {/* CINEMATIC HERO */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={data.heroImage}
                        alt={data.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => router.back()}
                        className="mb-12 flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all mx-auto"
                    >
                        <ChevronLeft size={16} /> Back to Explorer
                    </motion.button>

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary text-xs font-bold uppercase tracking-[0.8em] mb-4 block"
                    >
                        {data.tagline}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-7xl md:text-9xl font-serif font-bold text-white mb-8"
                    >
                        {data.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* NARRATIVE SECTION */}
            <section className="py-24 border-y border-white/5 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                                    Discover the Character of <span className="text-secondary">{data.name}</span>
                                </h2>
                                <p className="text-gray-400 text-xl font-light leading-relaxed mb-8">
                                    {data.longDescription}
                                </p>
                                <Button className="bg-secondary text-black hover:bg-white px-10 py-7 rounded-2xl font-bold uppercase tracking-widest text-xs">
                                    Book a Private Tour
                                </Button>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.highlights.map((item, i) => {
                                const Icon = iconMap[item.icon] || Star;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-8 rounded-[2rem] bg-stone-900/40 border border-white/5 hover:border-secondary/20 transition-all"
                                    >
                                        <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                                            <Icon className="text-secondary" size={24} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* DESTINATIONS GRID */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="mb-20">
                        <span className="text-secondary text-xs font-bold uppercase tracking-[0.6em] mb-4 block">Recommended Experiences</span>
                        <h2 className="text-5xl font-serif font-bold text-white">Must-Visit Places</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {data.destinations.map((dest, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors">{dest.name}</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-6">
                                    {dest.description}
                                </p>
                                <button className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Experience Now <ArrowRight size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-8">Ready to Explore {data.name}?</h2>
                    <p className="text-black/70 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Experience the best of the Emirates with our platinum chauffeur services and bespoke travel guides.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button className="bg-black text-white hover:bg-black/90 px-12 py-8 rounded-full font-bold text-lg">
                            Request Itinerary
                        </Button>
                        <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-12 py-8 rounded-full font-bold text-lg">
                            WhatsApp Expert
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
