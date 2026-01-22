"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin, CheckCircle, Users, Car, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Testimonials from "@/components/Testimonials";
import FlowingMenu from "@/components/FlowingMenu";
import TrendingCollections from "@/components/TrendingCollections";
import TrendingDestination from "@/components/TrendingDestination";
import StatsSection from "@/components/StatsSection";
import Hero from "@/components/Hero";

// --- Components ---

const highlightCards = [
    { title: "Desert Safari", img: "/assets/desert-safari-card.jpg", subtitle: "Adventure" },
    { title: "Burj Khalifa", img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=600&q=80", subtitle: "Iconic" },
    { title: "Palm Jumeirah", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80", subtitle: "Luxury" },
    { title: "Yacht Cruise", img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80", subtitle: "Relax" },
    { title: "Old Souk", img: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=600&q=80", subtitle: "Culture" },
];

// 1. Highlight Card (Hero Strip) - Redesigned for "Gorgeous" look
const HighlightCard = ({ title, img, subtitle }: { title: string; img: string; subtitle: string }) => (
    <div className="flex-shrink-0 w-[260px] h-[380px] relative rounded-2xl overflow-hidden group cursor-pointer border border-white/20 hover:border-secondary/80 transition-all duration-700 shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2">
        <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 260px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 opacity-90">{subtitle}</p>
            <h3 className="text-3xl font-serif italic text-white leading-none mb-4 drop-shadow-lg group-hover:text-secondary-foreground transition-colors">{title}</h3>
            <div className="h-[1px] w-12 bg-white/30 group-hover:w-24 group-hover:bg-secondary transition-all duration-500" />
        </div>
    </div>
);

// 2. Feature Grid Item (Glass)
const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="card-glass p-8 rounded-2xl group hover:bg-white/5 transition-colors">
        <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
    </div>
);

export default function Home() {
    return (
        <div className="bg-black text-white selection:bg-secondary selection:text-black font-sans overflow-x-hidden">

            {/* ---------------- SECTION 1: REDESIGNED HERO ---------------- */}
            <Hero />

            {/* ---------------- SECTION 2: HIGHLIGHTS (Scrolling Carousel) ---------------- */}
            <section className="bg-black py-[30px] border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-4 mb-8">
                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">Featured Experiences</p>
                </div>

                {/* Infinite Scrolling Carousel */}
                <div className="relative group/carousel">
                    {/* Left & Right Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 px-4 cursor-grab active:cursor-grabbing"
                        animate={{
                            x: [0, -1430], // Approximate width of 5 cards (260+24) * 5 = 1420 + small adjustment
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {/* Render doubled cards for seamless loop */}
                        {[...highlightCards, ...highlightCards].map((card, i) => (
                            <HighlightCard key={i} {...card} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ---------------- SECTION 3: ABOUT THE TOUR (Timeline) ---------------- */}
            <section className="py-[30px] bg-black relative">
                <div className="container mx-auto px-4">
                    {/* Section Heading */}
                    <div className="flex items-center gap-4 mb-20 justify-center">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h2 className="text-3xl tracking-[0.2em] font-light uppercase text-white/90">Curated Journey</h2>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left Text: Redesigned for "Creative & Modern" look */}
                        <div className="lg:w-1/3 relative">
                            {/* Decorative Numeric Badge */}
                            <div className="absolute -left-12 -top-6 text-8xl font-bold text-white/5 font-sans select-none pointer-events-none">
                                01
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-[1.1] text-white">
                                    We've planned a <br />
                                    <span className="text-secondary italic">seamless</span> and <br />
                                    luxurious itinerary.
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                                        Forget the hassle of planning. From your arrival at DXB to the golden sands of the desert, every moment is orchestrated for comfort and wonder.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed font-light">
                                        Our <span className="text-white font-medium">"Dubai Essentials"</span> package covers the iconic landmarks, hidden gems, and exclusive experiences that define the city.
                                    </p>
                                </div>

                                <Button
                                    variant="link"
                                    className="group text-secondary pl-0 mt-10 text-lg font-bold tracking-wider flex items-center gap-4 hover:no-underline"
                                >
                                    <span>Download Full Itinerary</span>
                                    <div className="h-12 w-12 rounded-full border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-500 group-hover:scale-110">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Timeline */}
                        <div className="lg:w-2/3 relative pl-8 border-l-2 border-secondary/30 space-y-24">
                            {/* Timeline Item 1 */}
                            <div className="relative group">
                                {/* Dot */}
                                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-black border-2 border-secondary group-hover:bg-secondary transition-colors" />

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/2">
                                        <span className="text-secondary font-bold tracking-wider text-sm mb-2 block">DAYS 1-2</span>
                                        <h4 className="text-2xl font-bold mb-4">Arrival & City Icons</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">VIP Airport pickup followed by a guided tour of modern Dubai. Visit the Burj Khalifa top floor and witness the fountain show.</p>
                                    </div>
                                    <div className="md:w-1/2 relative h-48 w-full rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=600&q=80" alt="Burj Khalifa" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-black border-2 border-secondary group-hover:bg-secondary transition-colors" />
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/2">
                                        <span className="text-secondary font-bold tracking-wider text-sm mb-2 block">DAYS 3-4</span>
                                        <h4 className="text-2xl font-bold mb-4">Desert & Culture</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">Thrilling dune bashing in 4x4 Land Cruisers, followed by a royal BBQ dinner at our private camp. Explore the gold souks the next day.</p>
                                    </div>
                                    <div className="md:w-1/2 relative h-48 w-full rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image src="https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80" alt="Desert" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 4: TRENDING DESTINATION (As per design) ---------------- */}
            <TrendingDestination />


            {/* ---------------- NEW SECTION: TESTIMONIALS ---------------- */}
            <Testimonials />
        </div>
    );
}
