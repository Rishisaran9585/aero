"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Shield, Landmark, Zap } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

const stats = [
    { label: "Years Experience", value: "15+", sub: "In the UAE Market" },
    { label: "Happy Travelers", value: "50K+", sub: "Worldwide Clients" },
    { label: "Luxury Fleet", value: "100+", sub: "Premium Vehicles" },
    { label: "Direct Operations", value: "100%", sub: "No Third Parties" }
];

const faqs = [
    {
        q: "What makes Aerosafe different from other tour operators?",
        a: "Unlike many agencies, we own our fleet of luxury vehicles and employ our guides directly. This allows us to ensure a consistent, high-end experience without relying on third-party contractors."
    },
    {
        q: "Do you provide customized private tours?",
        a: "Absolutely. We specialize in bespoke itineraries. Whether you want a private dinner in the dunes or a custom yacht cruise, our concierge team can make it happen."
    },
    {
        q: "Are your guides licensed?",
        a: "Yes, every single one of our guides is DTCM licensed and undergoes regular training in hospitality and regional history to provide the most authentic experience."
    },
    {
        q: "How do you handle airport arrivals and departures?",
        a: "We provide high-end chauffeur services with real-time flight tracking. Our drivers meet you at the arrivals hall with personalized signage and assist with all luggage to your luxury vehicle."
    },
    {
        q: "Can I book multiple emirates in one itinerary?",
        a: "Yes, we arrange cross-emirate experiences, including private transfers and tours in Abu Dhabi, Sharjah, and Ras Al Khaimah, all within a single coordinated schedule."
    },
    {
        q: "What luxury brands are included in your fleet?",
        a: "Our fleet includes late-model Rolls Royce, Mercedes-Benz V-Class for groups, and high-end SUVs like Range Rover and Cadillac Escalade, all maintained to showroom standards."
    }
];

export default function AboutPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="bg-black min-h-screen text-white selection:bg-secondary/30">
            <PageHeader
                title="ABOUT"
                scriptText="our legacy"
                image="/assets/abu_dhabi.jpg"
            />

            {/* Section 1: Bento Grid - Our Story & Expertise */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-3xl">
                            A Luxury Travel Network That Delivers <span className="text-gray-500 italic">Unrivaled Results</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
                        {/* Big Card - ownership */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-secondary/20 transition-all duration-500 shadow-2xl"
                        >
                            <div className="absolute top-8 left-10 z-20">
                                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                                    Exclusive Operations
                                </span>
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">Complete Vertical <br />Ownership</h3>
                                <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                                    From the moment you land to your final desert sunset, Aerosafe owns every touchpoint. No middlemen, no compromise—just direct excellence through our private fleet and expert team.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-1/2 h-full transition-all duration-700 scale-105 group-hover:scale-100">
                                <Image src="https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80" alt="Coastline" fill className="object-cover brightness-110" />
                            </div>
                        </motion.div>

                        {/* Small Card - Safety */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-4 md:row-span-1 bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all" />
                            <Shield className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform duration-500" />
                            <h4 className="font-bold text-xl uppercase tracking-wider">Safety First</h4>
                            <p className="text-gray-500 text-sm mt-2">Zero incidents in 15 years</p>
                        </motion.div>

                        {/* Small Card - Global */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-4 md:row-span-1 bg-[#111] border border-white/5 rounded-[2.5rem] p-8 flex items-center gap-6 group hover:border-secondary/20 transition-all relative"
                        >
                            <div className="bg-secondary/10 p-4 rounded-2xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                                <Landmark className="w-8 h-8 text-secondary group-hover:text-black transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">DTCM Approved</h4>
                                <p className="text-gray-500 text-xs">Fully Licensed Operator</p>
                            </div>
                            <div className="absolute top-4 right-6 uppercase text-[9px] font-black text-white/20 tracking-widest">
                                Certified
                            </div>
                        </motion.div>

                        {/* Middle Card - Sister Brand */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-6 md:row-span-1 bg-[#0F0F0F] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-center relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-secondary font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                                <div className="w-4 h-[1px] bg-secondary" />
                                Sister Brand
                            </h4>
                            <h3 className="text-2xl font-bold mb-2">First Dream Destinations</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Connecting India directly to the UAE with a bridge of trust and curated hospitality.</p>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-6 md:row-span-1 bg-secondary rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                            <div className="bg-black/20 p-4 rounded-full mb-4 group-hover:scale-110 group-hover:bg-black/30 transition-all duration-500 shadow-xl relative z-10">
                                <Zap className="w-8 h-8 text-black fill-black" />
                            </div>
                            <h3 className="text-black text-2xl font-bold tracking-tight relative z-10">Experience Luxury Now</h3>
                            <button className="mt-4 bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:scale-105 active:scale-95 transition-all uppercase shadow-2xl relative z-10">
                                Book a Consult
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section: Core Pillars & Philosophy */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,179,8,0.1)] group">
                                <Image
                                    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
                                    alt="Luxury Dubai Palm"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 z-10">
                                    <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Our Vision</p>
                                    <h3 className="text-3xl font-bold">Setting the Standard <br />for UAE Hospitality</h3>
                                </div>
                            </div>
                            {/* Floating decorative element */}
                            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-[2rem] hidden md:block">
                                <span className="text-black font-black text-5xl">15</span>
                                <p className="text-black/60 font-bold text-xs uppercase tracking-tighter">Golden Years <br />of Service</p>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Commitment</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Built on Four Unwavering Pillars</h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    We don't just organize tours; we curate legacies. Our operational philosophy is anchored in the belief that luxury is found in the details that most people overlook.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Artisanal Planning", desc: "Every minute of your journey is hand-crafted by regional experts." },
                                    { title: "Direct Execution", desc: "We own the assets, we own the quality. No third parties." },
                                    { title: "Cultural Integrity", desc: "Authentic connections to the heritage and soul of the UAE." },
                                    { title: "Seamless Comfort", desc: "A frictionless experience from the airport tarmac to the desert dunes." },
                                    { title: "Eco-Conscious Luxury", desc: "Minimizing our footprint through sustainable ops and carbon offsets." },
                                    { title: "24/7 Concierge", desc: "Always available to handle last-minute requests or adjustments." }
                                ].map((pillar, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-2 group"
                                    >
                                        <div className="w-8 h-[2px] bg-secondary group-hover:w-16 transition-all duration-500" />
                                        <h4 className="text-white font-bold text-xl">{pillar.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Stats - Proven Impact */}
            <section className="py-24 border-y border-white/5 bg-gradient-to-b from-black to-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Achievements</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Proven Results <br /><span className="text-gray-600">You Can Trust</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.02] border border-white/5 p-12 rounded-[3.5rem] text-center hover:bg-white/5 transition-colors group cursor-default shadow-sm hover:shadow-secondary/5"
                            >
                                <span className="block text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-500 tracking-tighter">
                                    {stat.value}
                                </span>
                                <h4 className="text-gray-300 font-bold text-sm uppercase tracking-widest mb-2">{stat.label}</h4>
                                <p className="text-gray-600 text-xs">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Leadership & Founder's Vision */}
            <section className="py-24 bg-black overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Leadership</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 leading-none">A Vision <br />Built on <span className="italic">Excellence</span></h2>

                            <div className="space-y-8 relative">
                                <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10" />
                                <blockquote className="text-2xl font-light text-gray-300 leading-relaxed italic border-l-2 border-secondary pl-8 py-2">
                                    "Luxury isn't just about the destination; it's about the peace of mind that comes from knowing every detail is handled with absolute care. We built Aerosafe to be that guardian of your experience."
                                </blockquote>
                                <div className="pl-8 pt-4">
                                    <p className="text-white font-bold text-xl mb-1">D.S. Solanki</p>
                                    <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Founder & CEO</p>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed font-light pl-8">
                                    With over two decades in the travel industry, D.S. Solanki envisioned a company that combined the precision of logistics with the warmth of traditional Indian hospitality. Today, Aerosafe stands as a bridge between cultures, providing unparalleled service in the heart of the UAE.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square relative rounded-[4rem] overflow-hidden border border-white/10 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=black&auto=format&fit=crop&w=1200&q=80"
                                    alt="Founder"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative signature-like script */}
                            <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                                <p className="text-white font-serif italic text-3xl mb-1 text-center">Aerosafe</p>
                                <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] text-center">Quality Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Operational Superiority */}
            <section className="py-24 bg-[#050505] relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -z-10" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Gold Standard</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Behind the Scenes of <br />Luxury</h2>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">While the world sees the glitz of Dubai, we focus on the invisible mechanics that make luxury possible.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "In-House Fleet",
                                desc: "We don't lease. We own. Our private fleet is maintained in our own dedicated facility to ensure zero breakdowns and 100% cleanliness.",
                                icon: "01"
                            },
                            {
                                title: "Professional Chauffeurs",
                                desc: "Our drivers aren't just staff; they are trained in defensive driving, regional history, and elite hospitality standards.",
                                icon: "02"
                            },
                            {
                                title: "Concierge Operations",
                                desc: "Real-time tracking and 24/7 command center monitoring every trip to ensure absolute punctuality and safety.",
                                icon: "03"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <span className="text-6xl font-black text-white/5 mb-8 block group-hover:text-secondary/10 transition-colors uppercase">{item.icon}</span>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Section 3: FAQ - Your Questions Answered */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Support</span>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">Your Questions <br />Answered</h2>
                        </div>
                        <p className="text-gray-500 max-w-xs text-sm leading-relaxed mb-4">
                            Everything you need to know about our luxury services and operational standards.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border ${openFaq === idx ? 'border-secondary/40' : 'border-white/5'} rounded-[3rem] overflow-hidden transition-all duration-300 bg-white/[0.01]`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-xl md:text-2xl font-bold text-white pr-8 tracking-tight">{faq.q}</span>
                                    <div className={`p-2 rounded-full border ${openFaq === idx ? 'bg-secondary text-black' : 'border-white/10 text-white'} transition-all`}>
                                        {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 text-gray-400 leading-relaxed max-w-2xl font-light text-lg">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

