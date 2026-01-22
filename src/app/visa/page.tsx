"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ChevronLeft, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
    { title: "Tourist Visa", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=400&q=80" },
    { title: "Business Visa", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80" },
    { title: "Student Visa", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80" },
    { title: "Family Visa", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80" },
    { title: "Transit Visa", image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&w=400&q=80" },
    { title: "Golden Visa", image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=400&q=80" },
];

const popularDestinations = [
    { title: "UAE 30 Days Tourist", location: "United Arab Emirates", price: "AED 350", rating: "5.0", image: "https://images.unsplash.com/photo-1546412414-e188526159bc?auto=format&fit=crop&w=600&q=80" },
    { title: "KSA Umrah Visa", location: "Saudi Arabia", price: "AED 450", rating: "4.9", image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80" },
    { title: "Schengen Consultation", location: "Europe", price: "AED 900", rating: "4.8", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80" },
];

export default function VisaPage() {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-secondary selection:text-black font-sans overflow-x-hidden">
            <PageHeader
                title="visa"
                scriptText="seamless travel"
                image="/assets/visa.jpg"
            />


            {/* ---------------- SECTION 1: CATEGORIES ---------------- */}
            <section className="py-[30px] bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <div className="inline-block relative mb-4">
                            <h2 className="text-5xl font-serif font-bold relative z-10">Visa Categories</h2>
                            <div className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/20 -rotate-1 rounded-full -z-10" />
                        </div>
                        <p className="text-gray-400 mt-6 leading-relaxed font-light opacity-90">
                            Comprehensive assistance for every journey. From short-term stays to long-term residency.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="relative w-full aspect-[2/3] rounded-t-full overflow-hidden mb-6 shadow-2xl transition-all duration-500 border-[6px] border-white/10 group-hover:border-secondary/40">
                                    <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <h4 className="font-bold text-lg text-white/90 group-hover:text-secondary transition-colors tracking-tight uppercase tracking-widest text-[11px]">{cat.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 2: POPULAR DESTINATIONS ---------------- */}
            <section className="py-[30px] bg-[#050505] relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
                        <div className="max-w-xl">
                            <div className="inline-block relative mb-4">
                                <h2 className="text-5xl font-serif font-bold relative z-10">Popular Packages</h2>
                                <div className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/20 rotate-1 rounded-full -z-10" />
                            </div>
                            <p className="text-gray-400 mt-4 leading-relaxed font-light opacity-90">Simplified solutions for our most requested visa services.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="h-16 w-16 rounded-full border-2 border-white/5 flex items-center justify-center text-gray-500 hover:border-secondary hover:text-secondary transition-all bg-black/40 shadow-sm active:scale-95">
                                <ChevronLeft size={28} />
                            </button>
                            <button className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-black hover:bg-white transition-all shadow-xl shadow-secondary/10 active:scale-95">
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {popularDestinations.map((dest, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#0A0A0A] rounded-[3rem] p-5 shadow-2xl border border-white/5 group transition-all hover:bg-white/[0.02]"
                            >
                                <div className="relative h-72 w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-inner border border-white/5">
                                    <Image src={dest.image} alt={dest.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                                    <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-[1.25rem] flex items-center gap-2 border border-white/20">
                                        <Star size={16} className="text-secondary fill-secondary" />
                                        <span className="font-bold text-sm text-white">{dest.rating}</span>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h4 className="text-3xl font-serif font-bold mb-1.5 tracking-tight group-hover:text-secondary transition-colors">{dest.title}</h4>
                                            <p className="text-gray-500 font-medium text-sm flex items-center gap-2">
                                                <div className="h-6 w-6 bg-white/5 text-secondary rounded-lg flex items-center justify-center"><MapPin size={12} /></div> {dest.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Processing Fee</span>
                                            <span className="text-2xl font-bold text-secondary">{dest.price}</span>
                                        </div>
                                        <Button className="bg-transparent hover:bg-secondary hover:text-black text-secondary border-2 border-secondary rounded-xl px-8 py-3 h-auto text-xs font-black uppercase tracking-[0.1em] transition-all">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 3: PROCESS / EXPERIENCE ---------------- */}
            <section className="py-[30px] bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-10 relative">
                            <div className="absolute right-0 top-1/2 translate-x-16 -translate-y-16 z-0 hidden lg:block overflow-visible pointer-events-none">
                                <svg width="150" height="80" viewBox="0 0 150 80" fill="none" className="text-secondary/20">
                                    <path d="M10 10C40 10 120 10 140 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
                                    <circle cx="140" cy="70" r="4" fill="currentColor" />
                                </svg>
                            </div>

                            <motion.div
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="bg-white/[0.02] p-12 rounded-[3.5rem] border border-white/10 group transition-all relative z-10 shadow-2xl"
                            >
                                <div className="h-20 w-20 bg-black rounded-3xl flex items-center justify-center text-secondary mb-8 shadow-inner border border-white/10 group-hover:bg-secondary group-hover:text-black transition-all transform group-hover:rotate-6">
                                    <Globe size={36} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight text-white/90">Global Reach</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-8">
                                    Our extensive network handles visa applications for over 180 countries with local expertise.
                                </p>
                                <button className="flex items-center gap-4 text-secondary font-black uppercase tracking-[0.15em] text-[10px] group/btn">
                                    Our Expertise <div className="h-8 w-8 rounded-full bg-secondary text-black flex items-center justify-center shadow-lg group-hover/btn:scale-125 transition-transform"><ChevronRight size={18} /></div>
                                </button>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="bg-white/[0.03] p-12 rounded-[3.5rem] border border-white/10 group transition-all relative z-10 shadow-2xl"
                            >
                                <div className="h-20 w-20 bg-black rounded-3xl flex items-center justify-center text-secondary mb-8 shadow-inner border border-white/10 group-hover:bg-secondary group-hover:text-black transition-all transform group-hover:-rotate-6">
                                    <Shield size={36} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight text-white/90">Secure Handling</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-8">
                                    Your sensitive documents are managed with the highest level of security and professional confidentiality.
                                </p>
                                <button className="flex items-center gap-4 text-secondary font-black uppercase tracking-[0.15em] text-[10px] group/btn">
                                    Learn More <div className="h-8 w-8 rounded-full bg-secondary text-black flex items-center justify-center shadow-lg group-hover/btn:scale-125 transition-transform"><ChevronRight size={18} /></div>
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative h-[650px] w-full rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-[12px] border-white/10"
                            >
                                <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" alt="Visa Process" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </motion.div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 4: CLIENT REVIEWS ---------------- */}
            <section className="py-[30px] bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <div className="inline-block relative mb-4">
                            <h2 className="text-5xl font-serif font-bold relative z-10">Client Reflections</h2>
                            <div className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/20 -rotate-1 rounded-full -z-10" />
                        </div>
                        <p className="text-gray-500 mt-6 font-light opacity-90 italic max-w-lg mx-auto">Real success stories from travellers who trusted Aerosafe for their visa requirements.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2 relative flex justify-center py-10">
                            <div className="relative">
                                <div className="absolute -top-16 -left-16 w-48 h-48 border-[3px] border-dashed border-secondary/30 rounded-full animate-[spin_30s_linear_infinite]" />
                                <div className="relative h-[550px] w-[380px] rounded-full overflow-hidden border-[15px] border-white/10 shadow-2xl z-10 shadow-secondary/5">
                                    <Image src="/assets/travel_person.png" alt="Happy Traveller" fill className="object-cover" />
                                </div>
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute -right-8 top-1/4 bg-[#0A0A0A] p-5 rounded-[2rem] shadow-2xl z-20 border border-white/10"
                                >
                                    <div className="flex gap-1.5 overflow-hidden">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} className="text-secondary fill-secondary" />)}
                                    </div>
                                </motion.div>
                                <div className="absolute -left-12 bottom-1/4 bg-secondary p-4 rounded-3xl text-black shadow-2xl z-20">
                                    <Zap size={32} className="fill-black" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative space-y-12 pl-4">
                            <div className="text-secondary/10 select-none">
                                <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M30 40C35.5 40 40 44.5 40 50V70H10V50C10 35 20 25 30 20V40ZM80 40C85.5 40 90 44.5 90 50V70H60V50C60 35 70 25 80 20V40Z" />
                                </svg>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-3xl md:text-4xl text-gray-300 font-light leading-[1.6] italic tracking-tight mb-12">
                                    "The Visa process which seemed so daunting to me was handled with absolute professionalism. I received my UAE tourist visa within 24 hours!"
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="h-1 w-16 bg-secondary rounded-full" />
                                    <div>
                                        <h4 className="text-3xl font-serif font-bold text-white tracking-tight">Samantha R.</h4>
                                        <p className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px] mt-1">Frequent Traveller</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="flex gap-6 pt-10">
                                <button className="h-16 w-16 rounded-full border-2 border-white/10 flex items-center justify-center text-gray-600 hover:text-secondary hover:border-secondary transition-all bg-black group">
                                    <ChevronLeft size={28} className="transition-transform group-hover:-translate-x-1" />
                                </button>
                                <button className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-black shadow-xl shadow-secondary/20 hover:bg-white transition-all group">
                                    <ChevronRight size={28} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
