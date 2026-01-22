"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ChevronRight, Award, Compass, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const hotels = [
    {
        name: "Atlantis The Palm",
        rank: "Iconic Luxury",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        loc: "Palm Jumeirah",
        desc: "A majestic gateway to world-class entertainment and white sand beaches.",
        amenities: ["Private Beach", "Underwater Suites"]
    },
    {
        name: "Burj Al Arab",
        rank: "Global Benchmark",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=1200&q=80",
        loc: "Jumeirah Beach",
        desc: "The world's most luxurious hotel, redefining the skyline of modern Dubai.",
        amenities: ["Helipad", "Personal Butlers"]
    },
    {
        name: "Armani Hotel",
        rank: "Sophisticated Elegance",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        loc: "Burj Khalifa",
        desc: "Reflecting the pure elegance and sophisticated comfort of Armani style.",
        amenities: ["Burj Access", "Lifestyle Managers"]
    },
    {
        name: "JW Marriott Marquis",
        rank: "Business Excellence",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        loc: "Business Bay",
        desc: "One of the world's tallest five-star hotels with panoramic city views.",
        amenities: ["Saray Spa", "World-Class Dining"]
    },
    {
        name: "Palazzo Versace",
        rank: "Neo-Classical",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        loc: "Jaddaf Waterfront",
        desc: "A fashion-branded masterpiece with subtle traces of Arabian architecture.",
        amenities: ["Versace Interiors", "Marina Views"]
    },
    {
        name: "Raffles The Palm",
        rank: "Ultra-Luxury Palace",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        loc: "Palm Jumeirah",
        desc: "An ultra-luxury palace on the West Crescent of Palm Jumeirah.",
        amenities: ["Cinq Mondes Spa", "Private Cinema"]
    },
    {
        name: "Address Downtown",
        rank: "Urban Chic",
        image: "https://images.unsplash.com/photo-1551882319-8ee7c89ef522?auto=format&fit=crop&w=1200&q=80",
        loc: "Downtown Dubai",
        desc: "Sophisticated luxury overlooking the majestic Burj Khalifa.",
        amenities: ["Direct Mall Access", "Infinity Pool"]
    },
    {
        name: "Jumeirah Al Naseem",
        rank: "Contemporary Retreat",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        loc: "Madinat Jumeirah",
        desc: "A cool, contemporary retreat where waves create a soothing rhythm.",
        amenities: ["Beachside Luxury", "Gourmet Dining"]
    },
];

const galleryImages = [
    { url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1551882319-8ee7c89ef522?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" },
];

export default function HotelsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const collageRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: collageRef,
        offset: ["start end", "end start"]
    });

    // Expand collage animation values
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-secondary selection:text-black" ref={containerRef}>
            <PageHeader
                title="HOTELS"
                scriptText="luxury stays"
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            />

            {/* ---------------- SECTION: TITLING ---------------- */}
            <section className="py-12 lg:py-16 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[8px] font-black uppercase tracking-[0.4em] mb-4">
                            Curated Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                            Bespoke <span className="text-secondary italic">Collection</span>
                        </h2>
                        <div className="h-0.5 w-12 bg-secondary/40 mx-auto mb-4" />
                        <p className="text-gray-400 text-sm font-light leading-relaxed max-w-lg mx-auto italic opacity-70">
                            A high-density selection of the UAE's most prestigious properties.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ---------------- SECTION: HIGH-DENSITY SHOWCASE (4-COLUMN) ---------------- */}
            <section className="pb-24 container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {hotels.map((hotel, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex flex-col"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-lg mb-3">
                                <Image
                                    src={hotel.image}
                                    alt={hotel.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute top-2 right-3 flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={8} className="text-secondary fill-secondary" />)}
                                </div>

                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-[7px] font-black uppercase tracking-widest text-secondary mb-1 opacity-90">{hotel.rank}</div>
                                    <h3 className="text-lg md:text-xl font-serif font-bold tracking-tight leading-tight">{hotel.name}</h3>
                                </div>
                            </div>

                            <div className="px-1 space-y-2">
                                <div className="flex items-center gap-1.5 text-gray-400 text-[8px] font-bold uppercase tracking-widest">
                                    <MapPin size={10} className="text-secondary" />
                                    {hotel.loc}
                                </div>
                                <p className="text-gray-500 text-[9px] leading-relaxed line-clamp-2 font-light italic">
                                    {hotel.desc}
                                </p>
                                <button className="pt-1 text-[8px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-2 group/btn hover:text-secondary transition-colors">
                                    EXPLORE <ChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------------- SECTION: EXPANDING COLLAGE (FULL COLOR + SCREEN FIT) ---------------- */}
            <section className="py-12 relative min-h-[100vh] flex items-center justify-center overflow-hidden" ref={collageRef}>
                <div className="container mx-auto px-4 relative z-20 pointer-events-none">
                    <motion.div
                        style={{ scale, opacity }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                            World's Best <br />
                            <span className="text-secondary italic">Hidden Gems</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto italic drop-shadow-md">
                            With over 16,500 hotels in 180 countries, there's always room for a new adventure.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Expanding Cards - Natural Color & Optimized Vertical Fit */}
                <div className="absolute inset-0 z-10">
                    {[
                        { x: -380, y: -240, rot: -15, delay: 0 },
                        { x: 400, y: -220, rot: 10, delay: 0.1 },
                        { x: -420, y: 200, rot: 5, delay: 0.2 },
                        { x: 440, y: 180, rot: -10, delay: 0.15 },
                        { x: -150, y: -380, rot: -5, delay: 0.3 },
                        { x: 120, y: -350, rot: 15, delay: 0.05 },
                        { x: 180, y: 350, rot: -12, delay: 0.25 },
                        { x: -200, y: 380, rot: 8, delay: 0.35 },
                    ].map((pos, i) => {
                        // Create individual transforms for each card to expand from center
                        const cardX = useTransform(scrollYProgress, [0.1, 0.45], [0, pos.x]);
                        const cardY = useTransform(scrollYProgress, [0.1, 0.45], [0, pos.y]);
                        const cardRot = useTransform(scrollYProgress, [0.1, 0.45], [0, pos.rot]);
                        const cardOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
                        const cardScale = useTransform(scrollYProgress, [0.1, 0.45], [0.2, 1]);

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    x: cardX,
                                    y: cardY,
                                    rotate: cardRot,
                                    opacity: cardOpacity,
                                    scale: cardScale
                                }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-56 md:h-72"
                            >
                                <div className="bg-white p-2 md:p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 h-full flex flex-col group/card hover:z-50 transition-all duration-300">
                                    <div className="relative flex-1 rounded-lg overflow-hidden mb-3">
                                        <Image
                                            src={galleryImages[i % galleryImages.length].url}
                                            alt={`Discovery ${i}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                                        />
                                    </div>
                                    <div className="text-black px-1 pb-1">
                                        <div className="text-[10px] font-black uppercase text-secondary mb-0.5 tracking-tight">{hotels[i % hotels.length].name}</div>
                                        <div className="text-[9px] font-bold text-gray-400 capitalize">{hotels[i % hotels.length].loc}</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ---------------- SECTION: INTERIOR WHISPERS (EXACT MATCH) ---------------- */}
            <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Interior <span className="text-secondary italic">Whispers</span></h2>
                        <p className="text-gray-500 text-xs font-light italic opacity-70">A perfectly balanced visual journey through our properties.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
                        {/* Top Left: Wide Landscape */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="md:col-span-8 md:row-span-4 relative rounded-[2.5rem] overflow-hidden group border border-white/5 min-h-[300px]"
                        >
                            <Image src={galleryImages[0].url} alt="Gallery 1" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </motion.div>

                        {/* Top Right: Standard Landscape */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-4 md:row-span-3 relative rounded-[2.5rem] overflow-hidden group border border-white/5 min-h-[200px]"
                        >
                            <Image src={galleryImages[5].url} alt="Gallery 2" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </motion.div>

                        {/* Bottom Left: Vertical Landscape */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-4 md:row-span-5 relative rounded-[2.5rem] overflow-hidden group border border-white/5 min-h-[400px]"
                        >
                            <Image src={galleryImages[2].url} alt="Gallery 3" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </motion.div>

                        {/* Bottom Center: PILL SHAPE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-8 md:row-span-3 relative rounded-full overflow-hidden group border border-white/5 min-h-[180px] self-center"
                        >
                            <Image src={galleryImages[7].url} alt="Gallery Pill" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION: FEATURES (CENTERED ALIGNMENT) ---------------- */}
            <section className="py-32 lg:py-48 bg-black relative overflow-hidden flex items-center justify-center">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-center">
                        {/* Title Side */}
                        <div className="lg:w-[40%] text-left lg:text-right">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="text-secondary font-black uppercase tracking-[0.4em] text-[8px] mb-6 flex lg:flex-row-reverse items-center gap-3">
                                    <span className="w-8 h-px bg-secondary/30"></span>
                                    Our Signature
                                </div>
                                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[0.85] mb-8 tracking-tighter">
                                    Pure <br />
                                    <span className="text-secondary italic">Excellence</span>
                                </h2>
                                <p className="text-gray-500 text-xs font-light leading-relaxed max-w-xs lg:ml-auto border-l lg:border-l-0 lg:border-r border-secondary/20 pl-6 lg:pl-0 lg:pr-6 opacity-80 italic">
                                    Bespoke infrastructure for high-net-worth travel.
                                </p>
                            </motion.div>
                        </div>

                        {/* Items Side */}
                        <div className="lg:w-[50%] space-y-12">
                            {[
                                { icon: Award, title: "Best Rate", text: "We match or beat any verified online rate with meaningful exclusive perks." },
                                { icon: Heart, title: "Upgrades", text: "Proactive management ensures priority upgrades and early check-ins." },
                                { icon: Compass, title: "Support", text: "A dedicated lifestyle manager is available 24/7 for last-minute requests." },
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex gap-8 items-center group"
                                >
                                    <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-secondary/5 border border-secondary/10 rounded-2xl rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        <feature.icon size={24} className="text-secondary relative z-10" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight leading-none">{feature.title}</h3>
                                        <p className="text-gray-500 font-light text-[11px] leading-relaxed max-w-xs opacity-80">
                                            {feature.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-white/[0.03] -rotate-[12deg] pointer-events-none" />
            </section>
        </div>
    );
}
