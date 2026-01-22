"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Star, Shield, Zap } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import LuxuryPackageCard from "@/components/LuxuryPackageCard";
import CircularGallery from "@/components/CircularGallery";
import AerosafeAdvantage from "@/components/AerosafeAdvantage";
import { motion } from "framer-motion";

const packages = [
    { name: "Dubai Essentials", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1200&auto=format&fit=crop", features: ["City Tour", "Desert Safari", "Dhow Cruise", "Airport Transfers"], price: "AED 1,200" },
    { name: "Family Fun", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop", features: ["Dubai Parks & Resorts", "Miracle Garden", "Global Village", "Family Dinner"], price: "AED 1,800" },
    { name: "Luxury Escape", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop", features: ["Burj Al Arab Tea", "Helicopter Tour", "Yacht Cruise", "5-Star Stay"], price: "AED 5,500" },
    { name: "Abu Dhabi Explorer", duration: "1 Day Trip", image: "https://images.unsplash.com/photo-1544249155-523194090288?q=80&w=1200&auto=format&fit=crop", features: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Ferrari World", "Emirates Palace"], price: "AED 450" },
    { name: "Adventure Unlimited", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1555505011-15372558444c?q=80&w=1200&auto=format&fit=crop", features: ["Skydive Dubai", "Deep Dive Dubai", "Quad Biking", "Hatta Hiking"], price: "AED 3,200" },
    { name: "Cultural Heritage", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1526431288437-3a4974533058?q=80&w=1200&auto=format&fit=crop", features: ["Museum of the Future", "Al Fahidi District", "Gold & Spice Souk", "Heritage Dinner"], price: "AED 850" },
    { name: "Desert Romance", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop", features: ["Private Dune Dinner", "Night Stargazing", "Overnight Camp", "Falconry Show"], price: "AED 2,100" },
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
                title="PACKAGES"
                scriptText="curated holidays"
                image="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Interactive Gallery */}
            <section className="py-[30px] bg-black overflow-hidden">
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
            <section className="py-[30px] bg-black relative overflow-hidden">
                <div className="container mx-auto px-4 mb-20 text-center">
                    <span className="text-secondary font-serif italic text-3xl mb-1 block opacity-90">Top Destination</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Popular Destination</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-8 opacity-50" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 h-[650px]">
                        {[
                            { name: "Burj Khalifa", image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1200&auto=format&fit=crop" },
                            { name: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80" },
                            { name: "Museum of Future", image: "https://images.unsplash.com/photo-1618331812910-001dd9a15c16?auto=format&fit=crop&w=1200&q=80" },
                            { name: "Dubai Marina", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80" },
                            { name: "Global Village", image: "https://images.unsplash.com/photo-1511527661048-7fe73d05a9a4?auto=format&fit=crop&w=1200&q=80" },
                            { name: "Adventure Hub", image: "https://images.unsplash.com/photo-1521312302124-6101b05fed3a?auto=format&fit=crop&w=1200&q=80" },
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

            {/* ---------------- SECTION: AEROSAFE ADVANTAGE (Redesigned) ---------------- */}
            <AerosafeAdvantage />

            {/* Premium Customizable CTA */}
            <section className="relative py-[30px] overflow-hidden border-y border-white/10 group">
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
