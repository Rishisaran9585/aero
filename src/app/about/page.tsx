"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Globe,
    Users,
    MapPin,
    ArrowRight,
    Award,
    Activity,
    Layers,
    Zap,
    CheckCircle2,
    Plane,
    Building2,
    Briefcase,
    History
} from "lucide-react";
import InternalHero from "@/components/InternalHero";

export default function AboutPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-secondary selection:text-black font-sans overflow-x-hidden">
            <div className="snap-start">
                <InternalHero
                    title="ABOUT US"
                    subtitle="Excellence Across Borders"
                    image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop"
                />
            </div>

            {/* 1. IDENTITY & JOURNEY - COMPACT SPLIT */}
            <section className="py-12 md:py-16 relative bg-black flex items-center">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        {/* About AeroSafe */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                                <span className="text-secondary text-[10px] font-black uppercase tracking-widest">DUBAI HEADQUARTERS</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-none">
                                About <span className="italic text-secondary">AeroSafe.</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed text-justify">
                                AeroSafe is a Dubai-based company committed to delivering reliable, compliant, and innovative safety and service solutions. Built on global standards and operational excellence, AeroSafe supports businesses and individuals with professionalism, precision, and trust.
                            </p>

                            {/* Our Journey Mini-Block */}
                            <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <History size={16} className="text-secondary" />
                                        <h4 className="font-bold text-white text-sm uppercase tracking-wide">Our Journey</h4>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Founded with the vision of creating dependable and future-ready solutions, growing with a focus on quality and compliance.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <div className="text-2xl font-bold text-white mb-1">2015</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">Global Operations Started</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                                fill
                                alt="Corporate Identity"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: "Vision", text: "Global Trust" },
                                        { label: "Mission", text: "Innovation" },
                                        { label: "Focus", text: "Excellence" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                                            <div className="text-[9px] text-secondary uppercase tracking-wider mb-1">{item.label}</div>
                                            <div className="text-white font-bold text-xs">{item.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STRATEGIC NETWORK - DUBAI & INDIA MAP */}
            <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">NETWORK ARCHITECTURE</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Global Operations</h2>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-gradient-to-r from-secondary/50 to-white/50 hidden md:block" />

                        {/* Dubai Node */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-secondary/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#050505] border-2 border-secondary text-secondary font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)] group-hover:bg-secondary group-hover:text-black transition-all duration-500">
                                DXB
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">AeroSafe HQ</h3>
                            <p className="text-[9px] font-black tracking-[0.3em] text-secondary uppercase mb-6">UAE Command Center</p>
                            <div className="h-px w-12 bg-white/10 mx-auto mb-6" />
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Driving international strategy, consular affairs, and global client coordination.
                            </p>
                        </motion.div>

                        {/* India Node */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#050505] border-2 border-white/20 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                IND
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">First Dream</h3>
                            <p className="text-[9px] font-black tracking-[0.3em] text-gray-500 uppercase mb-6">Sister Company • India</p>
                            <div className="h-px w-12 bg-white/10 mx-auto mb-6" />
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Ensuring seamless regional execution, talent support, and local operational excellence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. FIRST DREAM DESTINATION - DEDICATED SISTER COMPANY SECTION */}
            <section className="py-16 md:py-24 bg-black relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-md">
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">SISTER COMPANY</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                First Dream <br /><span className="text-secondary italic">Destination.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                Headquartered in India, First Dream Destination serves as AeroSafe’s strategic sister company. This partnership bridges the gap between regional execution and international standards, focusing on talent support, cultural understanding, and operational excellence.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-secondary" />
                                    <p className="text-gray-300 text-sm">Regional Operations & Support</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-secondary" />
                                    <p className="text-gray-300 text-sm">Execution Excellence in India</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-secondary" />
                                    <p className="text-gray-300 text-sm">Talent & Cultural Expertise</p>
                                </div>
                            </div>

                            <a
                                href="https://firstdreamdestinations.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white border-b border-secondary pb-1 hover:text-secondary transition-colors text-sm uppercase tracking-widest font-bold"
                            >
                                Visit Official Website <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200"
                                    fill
                                    alt="First Dream Destination India"
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <Globe className="text-secondary" size={24} />
                                    <div>
                                        <div className="text-white font-bold">India Operations</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest">Bridging Borders</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORPORATE DNA - ETHOS & VALUES RESTRUCTURED */}
            <section className="pt-20 pb-32 md:pb-40 bg-[#000000]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Left: Vision & Mission (Corporate Alignment) */}
                        <div className="lg:w-1/3 flex flex-col">
                            <div className="flex-1 bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                                <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-10 block">CORPORATE ALIGNMENT</span>

                                <div className="space-y-12">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Users size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Our Vision</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed pl-2 border-l-2 border-white/10 group-hover:border-secondary transition-colors duration-500">
                                            To be a globally trusted name in safety, service, and operational excellence.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Award size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Our Mission</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed pl-2 border-l-2 border-white/10 group-hover:border-secondary transition-colors duration-500">
                                            To deliver compliant, efficient, and customer-centric solutions through innovation, expertise, and international collaboration.
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative BG */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[50px] pointer-events-none" />
                            </div>
                        </div>

                        {/* Right: Core Values Grid */}
                        <div className="lg:w-2/3">
                            <h3 className="text-4xl font-serif font-bold text-white mb-8">Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
                                {[
                                    { title: "Safety & Compliance", desc: "Zero compromise on regulations." },
                                    { title: "Integrity & Transparency", desc: "Honesty in every interaction." },
                                    { title: "Excellence & Innovation", desc: "Constantly raising the bar." },
                                    { title: "Customer Commitment", desc: "Your journey is our priority." },
                                    { title: "Global Collaboration", desc: "United across borders." }
                                ].map((val, i) => (
                                    <div key={i} className="group p-6 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-secondary/20 transition-all hover:translate-y-[-2px]">
                                        <div className="h-2 w-2 rounded-full bg-secondary mb-4 group-hover:w-8 transition-all duration-300" />
                                        <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                                        <p className="text-gray-500 text-xs font-light tracking-wide">{val.desc}</p>
                                    </div>
                                ))}

                                {/* 6th Card: Summary/Visual */}
                                <div className="p-6 rounded-[2rem] bg-secondary border border-secondary flex flex-col justify-center items-center text-center">
                                    <h4 className="text-black font-black text-2xl mb-1">100%</h4>
                                    <p className="text-black text-[10px] font-black uppercase tracking-widest">Commitment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICES & WHY US - PREMIUM MATRIX */}
            <section className="pt-32 md:pt-40 pb-20 bg-[#050505] border-t border-white/5 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

                        {/* Left: Service Matrix */}
                        <div className="lg:w-3/5">
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">WHAT WE DELIVER</span>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">Our Services</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 basic-grid">
                                {[
                                    { title: "Aviation Safety", desc: "Operational solutions for high-stakes environments.", icon: Plane },
                                    { title: "Regulatory Compliance", desc: "Expert navigation of complex legal frameworks.", icon: ShieldCheck },
                                    { title: "Training & Consulting", desc: "Empowering teams with specialized knowledge.", icon: Users },
                                    { title: "Global Logistics", desc: "Seamless cross-border coordination & support.", icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className="group p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-secondary/20 transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-12 w-12 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center mb-6 text-white group-hover:text-secondary group-hover:border-secondary/30 transition-colors">
                                            <item.icon size={22} className="stroke-[1.5]" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h4>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Why Choose Us (Value Prop) */}
                        <div className="lg:w-2/5 flex flex-col">
                            <div className="flex-1 bg-[#0a0a0a] p-10 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col justify-between group">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-10">Why Choose Us?</h3>
                                    <div className="space-y-8">
                                        {[
                                            "Dubai-based corporate standards",
                                            "Strong India operational support",
                                            "International compliance mindset",
                                            "Reliable delivery model"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-5 group/item">
                                                <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white group-hover/item:bg-secondary group-hover/item:text-black transition-colors">
                                                    0{i + 1}
                                                </div>
                                                <p className="text-gray-300 font-light text-lg">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button className="w-full py-5 rounded-full bg-secondary text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-white transition-colors relative z-10">
                                        Partner With Us
                                    </button>
                                </div>

                                {/* Background Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
