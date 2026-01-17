"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Search, ArrowRight, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const destinations = [
    { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537225228614-b4ed12ddb4ff?auto=format&fit=crop&w=500&q=80" },
    { name: "Amazon", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80" },
    { name: "Pink City", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80" },
    { name: "Mountain Peak", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80" },
];

const packages = [
    { location: "Rome, Italy", price: "$746k", duration: "7 Day trip", rating: 4.5, image: "https://images.unsplash.com/photo-1552832860-cfb67165eaf0?auto=format&fit=crop&w=500&q=80" },
    { location: "India, Delhi", price: "$746k", duration: "7 Day trip", rating: 4.5, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80" },
    { location: "USA, Chicago", price: "$746k", duration: "7 Day trip", rating: 4.5, image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=500&q=80" },
    { location: "UK, London", price: "$746k", duration: "7 Day trip", rating: 4.5, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80" },
];

const blogs = [
    { title: "Beautiful Kashmir Let's Travel", description: "We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us." },
];

export default function ToursPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [tourLocation, setTourLocation] = useState("Arizona, Phoenix");
    const [tourDate, setTourDate] = useState("2022-09-25");

    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title={
                    <div className="space-y-2">
                        <div className="text-white">Explore Unforgettable</div>
                        <div className="text-secondary">Travel Experiences</div>
                    </div>
                }
                subtitle="Discover premium tour packages and adventures tailored to your perfect getaway."
                image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
                highlight="Travel Adventures"
                isLarge={true}
            />

            {/* ===== FIND DESTINATIONS SECTION ===== */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Find Your Best Destination</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We have more than 2000 destination you can choose
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <Input
                            type="text"
                            placeholder="Search Destination"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 bg-white/5 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary/50"
                        />
                    </div>
                </div>

                {/* Destination Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {destinations.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer transform hover:-rotate-3 transition-transform duration-500"
                        >
                            <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-6 group-hover:translate-y-0 transition-transform">
                                <p className="text-white font-semibold">{d.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 mx-auto">
                        See more <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </section>

            {/* ===== FEATURED TOUR SECTION ===== */}
            <section className="py-32 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left - Elegant Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
                                alt="Featured Tour"
                                fill
                                className="object-cover"
                            />
                            {/* Elegant overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Right - Elegant Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        {/* Elegant Header */}
                        <div>
                            <p className="text-secondary/80 text-xs uppercase tracking-[0.4em] font-light mb-4">Start Your Adventure</p>
                            <h2 className="text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6">
                                Explore the <span className="font-bold text-secondary">World</span>
                            </h2>
                            <div className="w-16 h-[2px] bg-secondary/40" />
                        </div>

                        {/* Elegant Form Inputs */}
                        <div className="space-y-8">
                            {/* Location Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <label className="text-gray-300 text-sm font-light tracking-[0.15em] uppercase mb-3 block">Location</label>
                                <Input
                                    type="text"
                                    value={tourLocation}
                                    onChange={(e) => setTourLocation(e.target.value)}
                                    placeholder="Arizona, Phoenix"
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 py-3 px-0 text-lg transition-all duration-300 font-light"
                                />
                            </motion.div>

                            {/* Date Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="text-gray-300 text-sm font-light tracking-[0.15em] uppercase mb-3 block">Travel Date</label>
                                <input
                                    type="date"
                                    value={tourDate}
                                    onChange={(e) => setTourDate(e.target.value)}
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:border-secondary/50 py-3 px-0 text-lg transition-all duration-300 font-light"
                                />
                            </motion.div>
                        </div>

                        {/* Elegant Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4 pt-8"
                        >
                            <Button
                                variant="outline"
                                className="border border-white/30 text-white hover:border-secondary hover:text-secondary bg-transparent px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300"
                            >
                                Explore
                            </Button>
                            <Button className="bg-secondary text-black hover:bg-secondary/90 px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300 shadow-lg">
                                Book Tour
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== VACATION PLANS SECTION ===== */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Best Vacation Plan</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offer!
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.location}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{pkg.location}</h3>
                                <p className="text-secondary font-bold mb-4">{pkg.price}</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>✈ {pkg.duration}</span>
                                    <span className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-secondary text-secondary" /> {pkg.rating}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 mx-auto">
                        See more <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </section>

            {/* ===== BLOG SECTION ===== */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Blog</h2>
                    <p className="text-gray-400">An insight into the incredible experience in the world</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative h-96 rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
                            alt="Blog"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">{blogs[0].title}</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {blogs[0].description}
                        </p>
                        <Button className="text-secondary hover:text-secondary/80 font-semibold p-0">
                            Read more →
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                            We Make World<br />Travel Easy
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Navigating the globe effortlessly, we transform wanderlust dreams into seamless adventures. With us, the world becomes your accessible playground. Travel simplified.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 rounded-lg font-semibold">
                            Explore Our Tour →
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative h-96 lg:h-[500px]"
                    >
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-3xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1512941691920-25bda36dc643?auto=format&fit=crop&w=600&q=80"
                                alt="Phone mockup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
