"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function SafariPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="Journey to Desert Safari"
                subtitle="Experience the raw beauty of the Arabian desert. Thrilling adventures, cultural immersion, and unforgettable memories await."
                image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
                highlight="Adventure"
                isLarge={true}
            />

            {/* Featured Images Section with Overlapping Cards */}
            <section className="py-24 container mx-auto px-4 relative">
                <div className="relative h-96 lg:h-[500px] mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center h-full">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80"
                                alt="Desert Adventure"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Center Image - Larger */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl z-20 transform scale-110"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80"
                                alt="Safari Sunset"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 8 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 z-10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                                alt="Dune Experience"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-3 gap-8 bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-sm"
                >
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">10+</p>
                        <p className="text-gray-400 text-sm uppercase tracking-[0.1em]">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">5000+</p>
                        <p className="text-gray-400 text-sm uppercase tracking-[0.1em]">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">100%</p>
                        <p className="text-gray-400 text-sm uppercase tracking-[0.1em]">Satisfaction Rate</p>
                    </div>
                </motion.div>
            </section>

            
            {/* Destinations Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
                        Popular Destinations
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=400&q=80" },
                            { name: "Abu Dhabi", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80" },
                            { name: "Sharjah", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" },
                            { name: "Al Ain", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80" },
                        ].map((destination, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative h-48 lg:h-64 rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={destination.img}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-serif text-xl font-bold">{destination.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button className="bg-secondary text-black hover:bg-secondary/90 px-10 py-6 rounded-lg font-semibold text-lg">
                            Visit Site →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Adventure Upgrades Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Adventure Upgrades</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Quad Biking", desc: "Self-drive powerful 350cc quad bikes in a dedicated area.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" },
                            { title: "Dune Buggy", desc: "Follow a guide deep into the desert in a safety-roll-caged buggy.", img: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=600&q=80" },
                            { title: "VIP Service", desc: "Table service at the camp with premium seating and food.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" },
                        ].map((upgrade, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={upgrade.img}
                                        alt={upgrade.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{upgrade.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{upgrade.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
