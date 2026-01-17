"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Star, Shield, Zap } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import LuxuryPackageCard from "@/components/LuxuryPackageCard";
import CircularGallery from "@/components/CircularGallery";
import { motion } from "framer-motion";

const packages = [
    { name: "Dubai Essentials", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1200&auto=format&fit=crop", features: ["City Tour", "Desert Safari", "Dhow Cruise", "Airport Transfers"], price: "AED 1,200" },
    { name: "Family Fun", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1511527661048-7fe73d05a9a4?q=80&w=1200&auto=format&fit=crop", features: ["Dubai Parks & Resorts", "Miracle Garden", "Global Village", "Family Dinner"], price: "AED 1,800" },
    { name: "Luxury Escape", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1618331812910-001dd9a15c16?q=80&w=1200&auto=format&fit=crop", features: ["Burj Al Arab Tea", "Helicopter Tour", "Yacht Cruise", "5-Star Stay"], price: "AED 5,500" },
    { name: "Abu Dhabi Explorer", duration: "1 Day Trip", image: "https://images.unsplash.com/photo-1544249155-523194090288?q=80&w=1200&auto=format&fit=crop", features: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Ferrari World", "Emirates Palace"], price: "AED 450" },
    { name: "Adventure Unlimited", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1521312302124-6101b05fed3a?q=80&w=1200&auto=format&fit=crop", features: ["Skydive Dubai", "Deep Dive Dubai", "Quad Biking", "Hatta Hiking"], price: "AED 3,200" },
    { name: "Cultural Heritage", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1200&auto=format&fit=crop", features: ["Museum of the Future", "Al Fahidi District", "Gold & Spice Souk", "Heritage Dinner"], price: "AED 850" },
    { name: "Desert Romance", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1200&auto=format&fit=crop", features: ["Private Dune Dinner", "Night Stargazing", "Overnight Camp", "Falconry Show"], price: "AED 2,100" },
];

const galleryItems = packages.map(pkg => ({
    image: pkg.image,
    text: pkg.name
}));

const extras = [
    { title: "Visa Included", desc: "Hassle-free 30/60 days visa processing included in selected packages.", icon: Shield },
    { title: "24/7 Support", desc: "Dedicated tour manager available round the clock for any assistance.", icon: Clock },
    { title: "Instant Confirmation", desc: "Book now and get instant confirmation vouchers via email/WhatsApp.", icon: Zap },
    { title: "Best Price Guarantee", desc: "We match or beat any competitor price for the same itinerary.", icon: Star },
];

export default function PackagesPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="Curated Holidays"
                subtitle="Explore the best of Dubai with our meticulously crafted holiday experiences."
                image="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=1920&q=80"
                highlight="Your Dream Vacation"
                isLarge={true}
            />

            {/* Interactive Gallery */}
            <section className="py-24 bg-black overflow-hidden">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Wonderful Place For You</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Tour Categories</h2>
                </div>

                <div className="relative h-[600px] w-full">
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                    />
                </div>
            </section>

            {/* Popular Destinations Accordion */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4 mb-20 text-center">
                    <span className="text-secondary font-serif italic text-3xl mb-1 block opacity-90">Top Destination</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Popular Destination</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-8 opacity-50" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 h-[650px]">
                        {[
                            { name: "Burj Khalifa", image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1544249155-523194090288?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Museum of Future", image: "https://images.unsplash.com/photo-1618331812910-001dd9a15c16?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Dubai Marina", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Global Village", image: "https://images.unsplash.com/photo-1511527661048-7fe73d05a9a4?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Adventure Hub", image: "https://images.unsplash.com/photo-1521312302124-6101b05fed3a?q=80&w=1200&auto=format&fit=crop" },
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
                                    <h3 className="text-white text-3xl font-serif font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                                        {dest.name}
                                    </h3>
                                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                        Discover More
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Book With Us Section */}
            <section className="py-32 container mx-auto px-4 border-t border-white/5 relative">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=800&auto=format&fit=crop" alt="Decoration" fill className="object-cover" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 max-w-3xl relative"
                >
                    <div className="absolute -left-10 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary to-transparent opacity-40 hidden md:block" />
                    <span className="text-secondary text-xs font-bold uppercase tracking-[0.6em] mb-6 block drop-shadow-sm">
                        Aerosafe Advantage
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white leading-[1.2] tracking-tight">
                        Why Choose Aerosafe for <br />
                        <span className="text-secondary italic font-serif">Your Dubai</span> Journey?
                    </h2>
                    <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-8 md:ml-2">
                        We don't just plan holidays; we craft <span className="text-white font-normal italic">lifelong memories</span> with unmatched precision and a level of luxury service that defines modern royalty.
                    </p>
                </motion.div>

                {/* Modern Why Book With Us Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {extras.map((ex, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative p-10 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Background Numbering */}
                            <span className="absolute top-6 right-8 text-7xl font-serif font-bold text-white/[0.03] pointer-events-none group-hover:text-secondary/[0.05] transition-colors duration-500">
                                0{i + 1}
                            </span>

                            <div className="relative z-10">
                                <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
                                    <ex.icon className="h-7 w-7 text-secondary group-hover:text-black transition-colors duration-500" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-500">{ex.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{ex.desc}</p>
                            </div>

                            {/* Hover Decorative Line */}
                            <div className="absolute bottom-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Premium Customizable CTA */}
            <section className="relative py-24 overflow-hidden border-y border-white/10 group">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
                        alt="Luxury Resort"
                        fill
                        className="object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Bespoke Experiences</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.2] tracking-tight">
                                Want a <br />
                                <span className="text-secondary italic">Custom</span> Itinerary?
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light max-w-xl opacity-80">
                                We understand that every traveler is unique. Whether you want a private yacht party, a helicopter tour, or a specific culinary experience, we can tailor a journey that reflects your distinct taste.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-black hover:bg-secondary hover:text-black px-10 py-6 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-secondary/20"
                                >
                                    Contact Expert
                                </Button>
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative">
                                            <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" />
                                        </div>
                                    ))}
                                    <div className="pl-6 flex flex-col justify-center">
                                        <div className="flex gap-1 mb-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="h-3 w-3 fill-secondary text-secondary" />
                                            ))}
                                        </div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Trusted by 500+ Travelers</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
