"use client";

import InternalHero from "@/components/InternalHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Plane,
    Hotel,
    Car,
    ShieldCheck,
    Star,
    Compass,
    ArrowUpRight,
    Sun,
    Waves,
    Quote
} from "lucide-react";
import { uaePackages, internationalPackages } from "@/data/packages";

export default function Package1Page() {
    return (
        <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-secondary selection:text-black">

            <div className="relative z-10">
                <InternalHero
                    title="PACKAGES"
                    subtitle="Boundless Journeys"
                    image="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1920&auto=format&fit=crop"
                />

                {/* Redesigned Intro Section */}
                <section className="py-32 container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
                            >
                                Tailored Experiences
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]"
                            >
                                Crafting your <br />
                                <span className="text-secondary italic">perfect story.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl"
                            >
                                Beyond just travel, we curate moments that stay with you forever. Our expert planners handle every detail, from luxury transfers to exclusive guided sessions.
                            </motion.p>

                            <div className="flex flex-col gap-6">
                                {[
                                    { icon: ShieldCheck, title: "Stress-Free Planning", desc: "End-to-end management of your entire itinerary." },
                                    { icon: Star, title: "Elite Concierge", desc: "24/7 support throughout your journey." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group"
                                >
                                    <Image src="/assets/exp.png" fill alt="Experience" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group mt-12"
                                >
                                    <Image src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=800&auto=format&fit=crop" fill alt="Stay" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
                        </div>
                    </div>

                    <div className="mt-32 flex flex-wrap justify-center gap-x-20 gap-y-12 border-t border-white/5 pt-20">
                        {[
                            { icon: Plane, label: "Flights", detail: "Global Connectivity" },
                            { icon: Hotel, label: "Hotels", detail: "Handpicked Stays" },
                            { icon: Compass, label: "Tours", detail: "Expert Guides" },
                            { icon: Car, label: "Transfers", detail: "Seamless Travel" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 group cursor-default"
                            >
                                <div className="relative">
                                    <item.icon className="w-10 h-10 text-secondary relative z-10 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-2xl mb-1 tracking-tight group-hover:text-secondary transition-colors">{item.label}</h5>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* UAE SECTION */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Domestic Excellence</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold">UAE Holiday Packages</h2>
                            </div>
                            <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest font-bold">The Jewel of Arabia</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {uaePackages.map((pkg, i) => (
                                <motion.div
                                    key={pkg.slug}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                                    />
                                    {/* Callout Badge */}
                                    <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-secondary text-[8px] font-black uppercase tracking-widest italic">Local Masterpiece</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{pkg.duration}</span>
                                                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-2.5 h-2.5 text-secondary fill-secondary" />
                                                        <span className="text-[10px] text-white/70 font-bold">{pkg.rating}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] text-gray-400 block uppercase tracking-tighter mb-1">Starting from</span>
                                                <span className="text-xl font-bold text-secondary">{pkg.price}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {pkg.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mb-6">
                                            {pkg.highlights.map(h => (
                                                <span key={h} className="text-[9px] bg-white/5 text-white/70 border border-white/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href={`/packages/${pkg.slug}`}>
                                            <motion.button
                                                whileHover={{ x: 5 }}
                                                className="w-full py-3 bg-secondary text-black rounded-xl font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500"
                                            >
                                                View Itinerary
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* STORY OF THE TRAIL - ENRICHED NARRATIVE */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block italic">The Traveler's Log</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold">Story of <br /> <span className="text-secondary italic">the Trail.</span></h2>
                        </div>

                        <div className="space-y-40">
                            {/* Entry 1 */}
                            <div className="flex flex-col lg:flex-row items-center gap-20">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="lg:w-1/2 relative"
                                >
                                    <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/5 relative shadow-2xl group">
                                        <Image src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1200&auto=format&fit=crop" fill alt="Skyline" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                        <div className="absolute top-8 left-8 p-4 rounded-xl bg-secondary/90 text-black font-black uppercase text-[10px] tracking-widest shadow-2xl">
                                            Highlight #01
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="lg:w-1/2"
                                >
                                    <Quote size={40} className="text-secondary/20 mb-6" />
                                    <h3 className="text-3xl font-serif font-bold mb-6 italic text-secondary">"The Gilded Skyline"</h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                        Watch as the Burj Khalifa pierces the golden veil of dusk. We curate the perfect vantage points at the world's most exclusive rooftop terraces to witness Dubai's transformation.
                                    </p>
                                    <div className="flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest italic">
                                        <span className="w-8 h-px bg-white/10" /> Insider Experience
                                    </div>
                                </motion.div>
                            </div>

                            {/* Entry 2 */}
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="lg:w-1/2 relative"
                                >
                                    <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/5 relative shadow-2xl group">
                                        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" fill alt="Desert" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                        <div className="absolute top-8 right-8 p-4 rounded-xl bg-secondary/90 text-black font-black uppercase text-[10px] tracking-widest shadow-2xl">
                                            Highlight #02
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="lg:w-1/2 text-right"
                                >
                                    <Quote size={40} className="text-secondary/20 mb-6 ml-auto" />
                                    <h3 className="text-3xl font-serif font-bold mb-6 italic text-secondary">"Soul of the Sand"</h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                        In the heart of the Rub' al Khali, true luxury is the silence. Our private desert camps are positioned kilometers away from standard tourist tracks, offering an unfiltered connection to the stars.
                                    </p>
                                    <div className="flex items-center justify-end gap-4 text-white/40 text-xs font-bold uppercase tracking-widest italic">
                                        Insider Experience <span className="w-8 h-px bg-white/10" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERNATIONAL SECTION */}
                <section className="py-24 container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Boundless Journeys</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold">International Packages</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto mt-8 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {internationalPackages.map((pkg, i) => (
                            <motion.div
                                key={pkg.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5"
                            >
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                {/* Callout Badge */}
                                <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-secondary text-[8px] font-black uppercase tracking-widest italic">Global Icon</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{pkg.duration}</span>
                                            <div className="w-1 h-1 bg-white/30 rounded-full" />
                                            <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">{pkg.price}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{pkg.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                                        {pkg.highlights.map(h => (
                                            <span key={h} className="text-[8px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 text-secondary fill-secondary" />
                                            <span className="text-xs font-bold">{pkg.rating}</span>
                                        </div>
                                        <Link href={`/packages/${pkg.slug}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
