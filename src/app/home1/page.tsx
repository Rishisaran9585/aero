"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Building2,
    Palmtree,
    Package,
    Globe,
    FileText,
    Car,
    Phone,
    Star,
    Shield,
    Clock,
    Zap,
    Quote
} from "lucide-react";
import CircularGallery from "@/components/CircularGallery";
import EmiratesShowcase from "@/components/EmiratesShowcase";
import AerosafeAdvantage from "@/components/AerosafeAdvantage";
import PremiumTestimonials from "@/components/PremiumTestimonials";
import FleetExcellence from "@/components/FleetExcellence";
import VIPExperience from "@/components/VIPExperience";
import SignatureGallery from "@/components/SignatureGallery";

const galleryItems = [
    { image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80", text: "Dubai City", caption: "A skyline of dreams and ambition." },
    { image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80", text: "Desert Safari", caption: "The golden silence of the dunes." },
    { image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80", text: "UAE Tours", caption: "Authentic journeys through heritage." },
    { image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", text: "International", caption: "World-class escapes, curated for you." },
    { image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", text: "Visa Services", caption: "Seamless documentation, global access." },
    { image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80", text: "Transfers", caption: "Luxury movement, at your command." },
];

export default function Home1Page() {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden relative">
            {/* Global Decorative Orbs */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 blur-[180px] rounded-full" />
            </div>

            <div className="relative z-10">
                {/* HERO SECTION - Premium Package Page Style */}
                <PageHeader
                    title="DISCOVER"
                    scriptText="the UAE"
                    image="/assets/uae_luxury_hero.png"
                    showSearch={true}
                    showCategories={true}
                />

                {/* TOUR CATEGORIES - Circular Gallery */}
                <section className="py-[40px] md:py-[80px] bg-black overflow-hidden relative">
                    <div className="container mx-auto px-4 mb-4 md:mb-12 text-center relative z-10">
                        <span className="text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-2 block">Wonderful Place For You</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-0">Explore by Category</h2>
                    </div>

                    <div className="relative h-[500px] md:h-[650px] w-full px-4 mt-0">
                        <CircularGallery
                            items={galleryItems}
                            bend={0.8}
                            textColor="#ffffff"
                            borderRadius={0.05}
                            scrollEase={0.02}
                        />
                    </div>
                </section>

                {/* EMIRATES SHOWCASE - Premium Bento Grid */}
                <EmiratesShowcase />

                {/* SIGNATURE MOMENTS - ENRICHED CONTENT */}
                <section className="py-32 relative overflow-hidden bg-white/[0.01]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative border border-white/5 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1200&auto=format&fit=crop"
                                        alt="Luxury Experience"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10 p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                                        <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 italic">A Moment in Time</p>
                                        <h4 className="text-2xl font-serif font-bold italic">"The true essence of travel is not just the destination, but the luxury of peace."</h4>
                                    </div>
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary text-black flex items-center justify-center text-center p-6 font-black uppercase text-[10px] tracking-widest border-8 border-black shadow-2xl rotate-12">
                                    Curated <br /> Excellence
                                </div>
                            </motion.div>

                            <div>
                                <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-6 block italic">Brand Philosophy</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Beyond The <br /> Ordinary.</h2>
                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                                    At Aerosafe, we believe every journey should be a signature moment. We bridge the gap between simple transportation and immersive storytelling.
                                </p>
                                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                                    <div>
                                        <h5 className="text-white font-bold mb-2">Heritage</h5>
                                        <p className="text-gray-500 text-sm italic">Rooted in the UAE, expanding to the world.</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-2">Modernity</h5>
                                        <p className="text-gray-500 text-sm italic">Digital ease, human touch, elite fleet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* THE AEROSAFE ADVANTAGE */}
                <AerosafeAdvantage />

                {/* VIP EXPERIENCE */}
                <VIPExperience />

                {/* FLEET EXCELLENCE */}
                <FleetExcellence />

                {/* PREMIUM TESTIMONIALS */}
                <PremiumTestimonials />

                {/* CUSTOM ITINERARY CTA */}
                <section className="relative pt-[120px] pb-[60px] overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
                            alt="Luxury Resort"
                            fill
                            className="object-cover opacity-30 scale-105 group-hover:scale-100 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />

                        {/* Animated Grain Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                            >
                                <span className="text-secondary text-xs font-bold uppercase tracking-[0.8em] mb-8 block">Tailor-Made Holidays</span>
                                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-none">
                                    Want a
                                    <span className="text-secondary italic">Custom</span> <br />
                                    <span className="text-white">Itinerary?</span>
                                </h2>
                                <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed max-w-xl">
                                    Whether it's a private yacht party, a desert adventure, or a luxury shopping tour, we can build it exactly how you want it.
                                </p>

                                <div className="flex flex-wrap gap-8 items-center">
                                    <Button className="bg-secondary text-black hover:bg-white px-12 py-8 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(234,179,8,0.2)] group/btn">
                                        Contact Expert
                                        <ArrowUpRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Button>
                                    <Button className="bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-secondary/50 backdrop-blur-xl px-12 py-8 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center gap-4 transition-all group/wa shadow-2xl">
                                        <Phone className="w-5 h-5 text-secondary group-hover/wa:scale-110 transition-transform" />
                                        WhatsApp Now
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
