"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, X, Send } from "lucide-react";

const itinerary = [
    { day: "01", time: "10:00", title: "DUBAI ARRIVAL", desc: "Private chauffeur transfer from DXB to your luxury residence in Downtown Dubai. Evening views of the Burj Khalifa from your terrace." },
    { day: "02", time: "05:30", title: "DESERT SAFARI", desc: "Dawn expedition into the pristine dunes. Traditional falconry, camel trekking, and a gourmet Bedouin breakfast at a private desert camp." },
    { day: "03", time: "11:00", title: "PALM JUMEIRAH", desc: "Private yacht tour around the iconic Palm Jumeirah. Gourmet lunch at Atlantis and afternoon relaxation at a premier beach club." },
    { day: "04", time: "14:00", title: "MODERN CITY", desc: "Visit the Museum of the Future followed by a private guided tour of the Dubai Mall and VIP access to the Burj Khalifa At The Top Burj." },
    { day: "05", time: "10:00", title: "OLD DUBAI SPIRIT", desc: "Crossing the creek in a traditional abra. Exploring the Spice and Gold Souks with a private historian, followed by lunch at Al Fahidi." },
    { day: "06", time: "09:00", title: "YACHT CRUISE", desc: "A 4-hour luxury yacht cruise through Dubai Marina and the JBR skyline. Afternoon tea served on board with catering from a Michelin-star chef." },
    { day: "07", time: "12:00", title: "FAREWELL", desc: "Morning at leisure for boutique shopping in DIFC. Final signature lunch before your luxury transfer back to the airport." },
];

const thumbnails = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    "/assets/Burj_Al_Arab.png",
    "https://images.unsplash.com/photo-1534050359349-f2136930263b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551279076-5895781a7b14?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526431288437-3a4974533058?auto=format&fit=crop&w=600&q=80",
];

export default function ToursPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-secondary selection:text-black">
            <PageHeader
                title="TOURS"
                scriptText="unique experiences"
                image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
            />

            {/* ---------------- SECTION 1: THE STORY (DISCOVERY) ---------------- */}
            <section className="py-[30px] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:pl-12 xl:pl-16">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start mb-20">
                        {/* Vertical Title */}
                        <div className="lg:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="text-6xl md:text-8xl font-serif font-black leading-[0.85] tracking-tighter uppercase"
                            >
                                Dubai <br />
                                <span className="text-secondary italic">Excellence</span> <br />
                                Collection
                            </motion.h2>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 mt-8 lg:mt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="space-y-8"
                            >
                                <div className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-4">
                                    <span className="w-12 h-px bg-secondary/30"></span>
                                    Dubai Discovery
                                </div>
                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl italic opacity-80">
                                    Witness the architectural marvels and deep heritage of the Pearl of the Gulf in a journey tailored for the discerning.
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-lg font-light">
                                    Our signature Dubai tours offer an intimate glimpse into the city's transformation from a pearl-diving village to the world's most dynamic metropolis.
                                </p>
                                <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-secondary transition-colors">
                                    EXPLORE DUBAI
                                    <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Thumbnails Row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {thumbnails.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="aspect-square relative grayscale-0 transition-all duration-700 cursor-pointer overflow-hidden group"
                            >
                                <Image src={img} alt={`Dubai Tour ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vertical Decorative Lines */}
                <div className="absolute top-0 left-12 bottom-0 w-px bg-white/5 opacity-40 hidden lg:block" />
            </section>

            {/* ---------------- SECTION 2: THE TIMELINE (SCHEDULE) ---------------- */}
            <section className="py-[30px] bg-black relative">
                <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
                    <div className="text-left mb-32">
                        <motion.h2
                            initial={{ opacity: 0, letterSpacing: "0em" }}
                            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                            transition={{ duration: 1.5 }}
                            className="text-4xl md:text-6xl font-serif font-black uppercase opacity-10 leading-none select-none mb-4"
                        >
                            CITY EXPEDITION
                        </motion.h2>
                        <div className="text-3xl md:text-5xl font-serif font-bold text-white relative">
                            THE <span className="text-secondary italic">7-DAY</span> JOURNEY
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Timeline List */}
                        <div className="space-y-16 border-l border-white/10 pl-8 lg:pl-16 relative">
                            {itinerary.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="relative"
                                >
                                    {/* Line Bullet */}
                                    <div className="absolute -left-[33px] lg:-left-[65px] top-2 h-4 w-4 rounded-full bg-secondary border-4 border-black" />

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-secondary font-black text-xs uppercase tracking-widest">DAY {item.day}</span>
                                            <span className="text-gray-500 font-mono text-[10px] tracking-tighter bg-white/5 px-2 py-0.5 rounded">{item.time}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase">{item.title}</h3>
                                        <p className="text-gray-500 text-sm max-w-md font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Large Overlapping Image */}
                        <div className="lg:sticky lg:top-40 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                                    alt="Dubai Skyline"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-white text-xs font-black uppercase tracking-[0.5em] mb-4 opacity-70">Signature Experience</p>
                                    <h4 className="text-3xl font-serif font-bold text-white uppercase leading-tight italic">Downtown <br /> Majesty</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 3: INVESTMENT (PRICING) ---------------- */}
            <section className="py-[30px] bg-[#050505] border-y border-white/5">
                <div className="container mx-auto px-4 lg:pl-12 xl:pl-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
                        {/* Moody Image Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="lg:col-span-5 aspect-[3/4] rounded-3xl overflow-hidden relative"
                        >
                            <Image src="/assets/Burj_Al_Arab.png" alt="Invest Dubai" fill className="object-cover" />
                        </motion.div>

                        {/* Content Right */}
                        <div className="lg:col-span-7 space-y-16">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-6xl md:text-9xl font-serif font-black text-white leading-none tracking-tighter"
                                >
                                    $1,250 <span className="text-secondary text-2xl md:text-4xl">- PP</span>
                                </motion.div>
                                <p className="text-gray-500 font-light text-sm italic uppercase tracking-[0.3em]">Inclusive of Luxury Dubai Accommodations & Transfers</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white flex items-center gap-3">
                                        <Check size={14} className="text-secondary" />
                                        Inclusions
                                    </h4>
                                    <ul className="space-y-4 text-gray-500 text-[13px] font-light list-none">
                                        <li>+ Premium Suite Accommodations</li>
                                        <li>+ Private Cultural Liaison</li>
                                        <li>+ All Internal Luxury Transfers</li>
                                        <li>+ Curated Culinary Experiences</li>
                                        <li>+ Exclusive Site Access</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white flex items-center gap-3">
                                        <X size={14} className="text-red-500/50" />
                                        Exclusions
                                    </h4>
                                    <ul className="space-y-4 text-gray-500 text-[13px] font-light list-none">
                                        <li>- International Airfare</li>
                                        <li>- Personal Incidentals</li>
                                        <li>- Travel Insurance (Mandatory)</li>
                                        <li>- Discretionary Gratuities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { ArrowRight } from "lucide-react";
