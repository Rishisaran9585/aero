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
    Zap
} from "lucide-react";
import CircularGallery from "@/components/CircularGallery";
import AerosafeAdvantage from "@/components/AerosafeAdvantage";

const galleryItems = [
    { image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80", text: "Dubai City" },
    { image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80", text: "Desert Safari" },
    { image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80", text: "UAE Tours" },
    { image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", text: "International" },
    { image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", text: "Visa Services" },
    { image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80", text: "Transfers" },
];

export default function Home1Page() {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden">
            {/* HERO SECTION - Premium Package Page Style */}
            <PageHeader
                title={
                    <span className="flex flex-col items-center">
                        <span className="font-bold uppercase tracking-tighter text-6xl md:text-[8rem] lg:text-[10rem]">DISCOVER</span>
                        <span className="font-script lowercase text-4xl md:text-8xl lg:text-9xl -mt-2 md:-mt-8 text-secondary">the UAE</span>
                    </span>
                }
                image="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=1920&q=80"
                showSearch={true}
                showCategories={true}
            />

            {/* TOUR CATEGORIES - Circular Gallery */}
            <section className="py-[60px] bg-black overflow-hidden">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Wonderful Place For You</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Explore by Category</h2>
                </div>

                <div className="relative h-[500px] md:h-[650px] w-full px-4">
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                    />
                </div>
            </section>

            {/* POPULAR DESTINATIONS - Interactive Accordion Layout */}
            <section className="py-[80px] bg-black relative overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-4 mb-20 text-center">
                    <span className="text-secondary font-serif italic text-3xl mb-1 block opacity-90">Top Destination</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Popular Destinations</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-8 opacity-50" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 h-[650px]">
                        {[
                            { name: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80" },
                            { name: "Abu Dhabi", country: "UAE", image: "https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=800&q=80" },
                            { name: "Maldives", country: "International", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" },
                            { name: "Thailand", country: "International", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80" },
                            { name: "Singapore", country: "International", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" },
                        ].map((dest, i) => (
                            <motion.div
                                key={i}
                                className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer group flex-[1] hover:flex-[4] transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] border border-white/10`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-10 left-10 right-10 whitespace-nowrap">
                                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                        {dest.country}
                                    </p>
                                    <h3 className="text-white text-4xl font-serif font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                                        {dest.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE AEROSAFE ADVANTAGE */}
            <AerosafeAdvantage />

            {/* LUXURY EXTRAS SECTION */}
            <section className="py-[80px] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Visa Included", desc: "Hassle-free 30/60 days visa processing included.", icon: Shield },
                            { title: "24/7 Support", desc: "Dedicated tour manager available round the clock.", icon: Clock },
                            { title: "Instant Vouchers", desc: "Ready booking confirmation via WhatsApp.", icon: Zap },
                            { title: "Best Price", desc: "We match or beat any competitor price.", icon: Star },
                        ].map((extra, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <extra.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold mb-3">{extra.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{extra.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CUSTOM ITINERARY CTA */}
            <section className="relative py-[100px] overflow-hidden border-t border-white/10 group">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
                        alt="Luxury Resort"
                        fill
                        className="object-cover opacity-50 scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Tailor-Made Holidays</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.2]">
                                Want a <br />
                                <span className="text-secondary italic">Custom</span> Itinerary?
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 font-light opacity-80 max-w-xl">
                                Whether it's a private yacht party, a desert adventure, or a luxury shopping tour, we can build it exactly how you want it.
                            </p>

                            <div className="flex flex-wrap gap-6 items-center">
                                <Button className="bg-secondary text-black hover:bg-secondary/90 px-10 py-7 rounded-full font-bold text-lg group/btn">
                                    Contact Expert
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Button>
                                <Button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-10 py-7 rounded-full font-bold text-lg flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary" />
                                    WhatsApp Now
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
