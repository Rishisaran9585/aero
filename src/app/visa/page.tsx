"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Clock,
    Globe,
    ShieldCheck,
    Zap,
    ChevronRight,
    FileText,
    CheckCircle2,
    Stamp,
    PlaneTakeoff,
    ArrowUpRight
} from "lucide-react";
import InternalHero from "@/components/InternalHero";
import AerosafeAdvantage from "@/components/AerosafeAdvantage";

const uaeVisas = [
    {
        title: "14 Days Tourist",
        duration: "14 Days",
        desc: "Ideal for short business trips or transit visits through the UAE.",
        image: "/assets/14_days_tourist.jpg"
    },
    {
        title: "30 Days Tourist",
        duration: "30 Days",
        desc: "The standard choice for tourists exploring Dubai and other emirates.",
        image: "/assets/30_days_tourist.jpg"
    },
    {
        title: "60 Days Tourist",
        duration: "60 Days",
        desc: "Extended stay for those who want to experience the complete UAE lifestyle.",
        image: "/assets/60_days_tourist.jpg"
    },
    {
        title: "Visa Extension",
        duration: "Flexible",
        desc: "Extend your stay without the need to exit the country. Hassle-free renewal.",
        image: "/assets/visa_extension.jpg"
    },
];

const internationalVisas = [
    { name: "Schengen Visa", region: "Europe", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200" },
    { name: "UK Visa", region: "United Kingdom", image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200" },
    { name: "Singapore Visa", region: "Southeast Asia", image: "/assets/singapore_visa.jpg" },
    { name: "Thailand Visa", region: "Southeast Asia", image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200" },
    { name: "Malaysia Visa", region: "Southeast Asia", image: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=1200" },
    { name: "Turkey Visa", region: "Europe/Asia", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200" },
];

export default function VisaPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-secondary selection:text-black">
            {/* 1. HERO SECTION */}
            <div className="snap-start">
                <InternalHero
                    title="VISA SERVICES"
                    subtitle="Seamless Global Access"
                    image="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1920&auto=format&fit=crop"
                />
            </div>

            {/* 2. VISA ASSISTANCE INTRO - COMPACT REDESIGN */}
            <section className="py-12 md:py-16 relative overflow-hidden bg-[#050505] flex items-center min-h-[80vh]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                                    <div className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                                    <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Expert Global Guidance</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-none tracking-tighter">
                                    Visa Assistance <br />
                                    <span className="italic text-secondary">Services.</span>
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl border-l-[3px] border-secondary/30 pl-8">
                                    Navigating international travel documentation can be complex. Aerosafe provides end-to-end support for tourist visa processing across multiple continents, ensuring your journey starts without a hitch.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { icon: Zap, title: "Express Filing", desc: "Prioritized processing for urgent international departures." },
                                        { icon: ShieldCheck, title: "Consular Audit", desc: "Multi-tier verification to ensure 100% document compliance." }
                                    ].map((item, i) => (
                                        <div key={i} className="group p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-secondary/20 transition-all duration-500">
                                            <div className="h-10 w-10 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-black transition-all">
                                                <item.icon size={20} />
                                            </div>
                                            <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                                            <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                                viewport={{ once: true }}
                                className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden border-[8px] border-white/5 shadow-2xl"
                            >
                                <Image
                                    src="/assets/visa1.jpg"
                                    alt="Global Visa Process"
                                    fill
                                    className="object-cover transition-transform duration-[3000ms] hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                                <div className="absolute top-6 right-6 flex flex-col items-center">
                                    <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-black">
                                        <Globe size={28} />
                                    </div>
                                    <div className="mt-3 bg-black/40 backdrop-blur-lg border border-white/10 px-3 py-1 rounded-full">
                                        <span className="text-white text-[8px] font-black uppercase tracking-widest whitespace-nowrap">180+ Countries</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. UAE TOURIST VISA SECTION - COMPACT FIT */}
            <section className="snap-section py-12 md:py-16 bg-[#080808] relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">SIGNATURE SERVICE</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">UAE Tourist Visa</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {uaeVisas.map((visa, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden hover:border-secondary/30 transition-all duration-500 shadow-xl flex flex-col"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image src={visa.image} alt={visa.title} fill className="object-cover group-hover:scale-110 transition-all duration-[3000ms]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-3xl border border-white/10 text-white text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5">
                                            <Clock size={10} className="text-secondary" />
                                            {visa.duration}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-secondary transition-colors leading-tight">
                                        {visa.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs font-light leading-relaxed mb-6 flex-grow opacity-60 line-clamp-3">
                                        {visa.desc}
                                    </p>
                                    <button className="flex items-center gap-3 text-white text-[9px] font-black uppercase tracking-[0.2em] group/btn mt-auto">
                                        INQUIRE NOW
                                        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-black group-hover/btn:border-secondary transition-all">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INTERNATIONAL VISAS SECTION */}
            <section className="snap-section py-20 lg:py-24 bg-[#050505] relative flex flex-col justify-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                        <div>
                            <span className="text-secondary text-xs font-black uppercase tracking-[0.8em] mb-4 block">WORLDWIDE ACCESS</span>
                            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">International Visas</h2>
                        </div>
                        <div className="md:text-right max-w-sm">
                            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 italic">
                                "Across continents, we bring the world closer to you."
                            </p>
                            <div className="h-0.5 w-24 bg-secondary ml-auto opacity-30" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {internationalVisas.map((visa, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer shadow-2xl"
                            >
                                <Image
                                    src={visa.image}
                                    alt={visa.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                <div className="absolute bottom-10 left-10 p-2">
                                    <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{visa.region}</span>
                                    <h4 className="text-white text-3xl font-serif font-bold tracking-tight">{visa.name}</h4>
                                </div>

                                <div className="absolute top-10 right-10 h-14 w-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <PlaneTakeoff size={24} className="text-secondary" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. THE AEROCARE PROTOCOL - REIMAGINED (Vertical Flow, No Boxes) */}
            <section className="snap-section py-20 lg:py-24 bg-[#050505] relative overflow-hidden flex flex-col justify-center">
                {/* Background Atmosphere */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-secondary/[0.02] blur-[150px] rounded-full -z-10" />

                <div className="container mx-auto px-4">
                    <div className="text-center mb-40">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary text-[11px] font-black uppercase tracking-[0.8em] mb-6 block"
                        >
                            THE ARCHITECTURE OF TRAVEL
                        </motion.span>
                        <h2 className="text-4xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-tight">
                            The AerCare <br />
                            <span className="italic text-secondary">Protocol.</span>
                        </h2>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        {/* Kinetic Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-secondary/40 to-transparent hidden lg:block -translate-x-1/2" />

                        <div className="space-y-24">
                            {[
                                {
                                    step: "01",
                                    title: "Digital Consultation",
                                    desc: "Our journey begins with a deep-dive digital assessment. We decode complex consulate requirements into a personalized roadmap tailored to your profile.",
                                    icon: FileText,
                                    side: "left"
                                },
                                {
                                    step: "02",
                                    title: "Precision Curation",
                                    desc: "Every document is a crucial piece of the narrative. Our experts curate your bespoke application folder with surgical precision and 100% compliance.",
                                    icon: CheckCircle2,
                                    side: "right"
                                },
                                {
                                    step: "03",
                                    title: "Consular Submission",
                                    desc: "Real-time logistical management of your file. We bridge the gap between your aspirations and the embassy's rigorous standards with total transparency.",
                                    icon: Globe,
                                    side: "left"
                                },
                                {
                                    step: "04",
                                    title: "Secure Finalization",
                                    desc: "The destination reached. Secure, encrypted delivery of your travel credentials directly to your global residence, wherever you are.",
                                    icon: Stamp,
                                    side: "right"
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
                                >
                                    {/* Center Node (Always on line) */}
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex items-center justify-center z-20">
                                        <div className="h-6 w-6 rounded-full bg-black border-4 border-secondary shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
                                    </div>

                                    {/* Number Motif Side */}
                                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                                        <div className="relative">
                                            <span className="text-[10rem] md:text-[14rem] font-serif font-black text-white/[0.04] leading-none select-none tracking-tighter block translate-y-4">
                                                {item.step}
                                            </span>
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: item.side === 'left' ? -5 : 5 }}
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                                            >
                                                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-[#080808] border border-secondary/10 flex items-center justify-center text-secondary backdrop-blur-xl">
                                                    <item.icon size={40} className="stroke-[1.5]" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`lg:w-1/2 w-full text-center lg:text-left ${item.side === 'right' ? 'lg:pl-16' : 'lg:pr-16'}`}>
                                        <div className="inline-block px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-4">
                                            <span className="text-secondary text-[8px] font-black uppercase tracking-[0.2em]">PHASE {item.step}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l border-white/5 lg:pl-8">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
