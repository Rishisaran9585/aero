"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Clock, Users } from "lucide-react";
import AdventureCarousel from "@/components/AdventureCarousel";

export default function SafariPage() {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden">
            <PageHeader
                title="SAFARI"
                scriptText="desert adventure"
                image="https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Featured Images Section with Overlapping Cards */}
            <section className="py-[30px] container mx-auto px-4 relative overflow-hidden">
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
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
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
                                src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80"
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
                                src="https://images.unsplash.com/photo-1506466014040-4203ae68326e?auto=format&fit=crop&w=800&q=80"
                                alt="Dune Experience"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Destinations Section */}
            <section className="py-[30px] border-t border-white/5 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
                        Popular Destinations
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { name: "Dubai", img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=400&q=80" },
                            { name: "Abu Dhabi", img: "https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=400&q=80" },
                            { name: "Sharjah", img: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=400&q=80" },
                            { name: "Al Ain", img: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=400&q=80" },
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
            <section className="py-[60px] border-t border-white/5 bg-black overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary tracking-[0.2em] text-sm font-bold uppercase"
                        >
                            Experience More
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">Adventure Upgrades</h2>
                    </div>

                    <AdventureCarousel />
                </div>
            </section>

            {/* Dubai Exclusive Section */}
            <section className="py-[100px] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=1920&q=80"
                        alt="Dubai Desert"
                        fill
                        className="object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary tracking-[0.2em] text-sm font-bold uppercase">Totally Dubai Based</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-8">
                                Exclusive Royal <br />
                                <span className="text-secondary">Desert Safari</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
                                Experience the ultimate luxury in the heart of the Arabian desert. Our exclusive Dubai-based safaris offer a unique blend of heritage, adventure, and royal hospitality. From private dunes to gourmet dining under the stars.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { icon: <ShieldCheck className="text-secondary" />, title: "Premium Safety", desc: "Expert guides & top-tier gear" },
                                    { icon: <MapPin className="text-secondary" />, title: "Private Dunes", desc: "Access to restricted áreas" },
                                    { icon: <Clock className="text-secondary" />, title: "Flexible Timing", desc: "Sunrise to Midnight tours" },
                                    { icon: <Users className="text-secondary" />, title: "VIP Groups", desc: "Small, intimate experiences" },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white">{feature.title}</h4>
                                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button className="bg-secondary text-black hover:bg-secondary/90 px-10 py-7 rounded-full font-bold text-lg group">
                                Learn More
                                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[40px] overflow-hidden border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
                                alt="Dubai Luxury Desert"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 p-8 glass rounded-2xl border border-white/20 backdrop-blur-md">
                                <p className="text-secondary font-bold mb-2">Heritage Experience</p>
                                <h3 className="text-2xl font-serif font-bold">Al Marmoom Reserve</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
