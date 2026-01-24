"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Clock,
    Star,
    ShieldCheck,
    ChevronLeft,
    CheckCircle2,
    XCircle,
    Calendar,
    Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Package, allPackages } from "@/data/packages";

interface PackageDetailsClientProps {
    pkg: Package;
}

export default function PackageDetailsClient({ pkg }: PackageDetailsClientProps) {
    const router = useRouter();

    return (
        <div className="bg-[#050505] min-h-screen text-white pb-20 selection:bg-secondary selection:text-black">
            {/* Immersive Header Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </motion.div>

                <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-end pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Explore
                        </button>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-secondary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                {pkg.category === 'uae' ? 'UAE Discovery' : 'Global Escape'}
                            </span>
                            <div className="flex items-center gap-2 text-white/80">
                                <Clock size={16} className="text-secondary" />
                                <span className="text-sm font-bold uppercase tracking-wider">{pkg.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Star size={16} className="text-secondary fill-secondary" />
                                <span className="text-sm font-bold">{pkg.rating} Rating</span>
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight">{pkg.title}</h1>
                        <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                            {pkg.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Pricing Bar (Floating) */}
            <div className="sticky top-20 z-40 container mx-auto px-4 -mt-10 h-0 overflow-visible pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 shadow-2xl flex items-center justify-between max-w-4xl mx-auto pointer-events-auto backdrop-blur-xl"
                >
                    <div className="flex items-center gap-8">
                        <div>
                            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">Starting from</span>
                            <span className="text-3xl font-bold text-secondary">{pkg.price}</span>
                        </div>
                        <div className="h-10 w-px bg-white/10 hidden md:block" />
                        <div className="hidden md:flex flex-col">
                            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">Best Value</span>
                            <span className="text-sm font-bold">Inclusive of all taxes</span>
                        </div>
                    </div>
                    <Button className="bg-secondary text-black hover:bg-white px-10 py-6 rounded-2xl font-bold uppercase tracking-widest transition-all">
                        Book This Trip
                    </Button>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 mt-32 grid grid-cols-1 lg:grid-cols-3 gap-20">
                {/* Main Content Areas */}
                <div className="lg:col-span-2 space-y-24">

                    {/* Itinerary Section */}
                    {pkg.details?.itinerary && (
                        <section>
                            <div className="flex items-center gap-4 mb-12">
                                <Calendar className="text-secondary" size={32} />
                                <h2 className="text-4xl font-serif font-bold">The Itinerary</h2>
                            </div>
                            <div className="space-y-12">
                                {pkg.details.itinerary.map((day, idx) => (
                                    <div key={idx} className="relative pl-12 group">
                                        {idx !== pkg.details!.itinerary.length - 1 && (
                                            <div className="absolute left-[15px] top-10 bottom-[-48px] w-px bg-white/10" />
                                        )}
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all">
                                            <span className="text-xs font-bold">{day.day}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3">Day {day.day}: {day.title}</h3>
                                            <p className="text-white/50 leading-relaxed font-light">
                                                {day.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Highlights Grid */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-10">Tour Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pkg.highlights.map((h, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-[2rem] flex items-center gap-4 group hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                        <Play size={16} className="fill-secondary" />
                                    </div>
                                    <span className="font-bold tracking-tight">{h}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gallery Section */}
                    {pkg.gallery && pkg.gallery.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-serif font-bold mb-10">Visual Journey</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pkg.gallery.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="relative h-64 rounded-[2rem] overflow-hidden border border-white/5"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${pkg.title} gallery ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Inclusion/Exclusion Tabs/Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500" />
                                <h3 className="text-xl font-bold uppercase tracking-widest">Inclusions</h3>
                            </div>
                            <ul className="space-y-4">
                                {pkg.inclusions.map((inc, i) => (
                                    <li key={i} className="text-white/60 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {pkg.details?.exclusions && (
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <XCircle className="text-rose-500" />
                                    <h3 className="text-xl font-bold uppercase tracking-widest">Exclusions</h3>
                                </div>
                                <ul className="space-y-4">
                                    {pkg.details.exclusions.map((exc, i) => (
                                        <li key={i} className="text-white/40 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500/30" />
                                            {exc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                </div>

                {/* Sidebar Areas */}
                <div className="space-y-12">
                    <div className="p-10 rounded-[3rem] border border-white/10 sticky top-40">
                        <ShieldCheck className="text-secondary mb-6" size={48} />
                        <h3 className="text-2xl font-serif font-bold mb-4">Aerosafe Advantage</h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-8">
                            When you book with us, you're not just getting a trip; you're getting 24/7 dedicated support,
                            verified luxury stays, and seamless transfers.
                        </p>
                        <div className="space-y-6 mb-10">
                            {[
                                "No Hidden Charges",
                                "Expert Guided Tours",
                                "Flexible Booking Policy"
                            ].map((adv, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    {adv}
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-white text-black hover:bg-secondary py-7 rounded-2xl font-bold uppercase tracking-widest">
                            Speak to Expert
                        </Button>
                    </div>

                    <div className="p-8">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-white/40">Other Experiences</h4>
                        <div className="space-y-6">
                            {allPackages.filter(p => p.slug !== pkg.slug).slice(0, 3).map((other) => (
                                <Link key={other.slug} href={`/packages/${other.slug}`} className="flex gap-4 group">
                                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                        <Image src={other.image} alt={other.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h5 className="font-bold group-hover:text-secondary transition-colors line-clamp-1">{other.title}</h5>
                                        <p className="text-secondary text-[10px] uppercase font-bold tracking-widest mt-1">{other.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
