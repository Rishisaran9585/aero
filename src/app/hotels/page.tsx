"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const hotels = [
    { name: "Atlantis The Palm", rank: "1st place", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80", loc: "Palm Jumeirah" },
    { name: "Burj Al Arab", rank: "2nd place", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=800&q=80", loc: "Jumeirah Beach" },
    { name: "Armani Hotel", rank: "3rd place", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", loc: "Downtown Dubai" },
    { name: "JW Marriott Marquis", rank: "4th place", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80", loc: "Business Bay" },
];

const galleryImages = [
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1566195992212-a5b7e50b6b6f?auto=format&fit=crop&w=600&q=80",
];

export default function HotelsPage() {
    const [selectedHotel, setSelectedHotel] = useState<number | null>(null);

    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="Luxury Stays"
                subtitle="Wake up to iconic views. We partner with the finest hotels to secure exclusive rates for you."
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
                highlight="Accommodation"
                isLarge={true}
            />

            <section className="py-24 container mx-auto px-4">
                {/* Decorative Divider Top */}
                <div className="flex items-center gap-6 mb-20">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-light">confiscated theme recommendation</p>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>

                {/* Section Title */}
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-center mb-24 leading-tight">
                    Premium Hotel<br />Collections
                </h2>

                {/* Featured Hotels Grid - 4 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {hotels.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedHotel(selectedHotel === i ? null : i)}
                        >
                            <div className="relative rounded-2xl overflow-hidden h-72 mb-6">
                                <Image
                                    src={h.image}
                                    alt={h.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="text-center">
                                <p className="text-secondary text-xs uppercase tracking-[0.2em] font-light mb-2">{h.rank}</p>
                                <h3 className="text-lg font-serif font-bold mb-2">{h.name}</h3>
                                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                                    <MapPin className="h-4 w-4 text-secondary" /> {h.loc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

                {/* Enjoy Your Stay Section */}
                <div className="py-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16">
                        Experience & Enjoy<br />Your Holiday
                    </h2>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative rounded-xl overflow-hidden group ${
                                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                            >
                                <div
                                    className={`relative ${
                                        i === 0 ? "h-96" : "h-40"
                                    } overflow-hidden`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Gallery ${i}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto">
                                                <span className="text-white text-sm">✦</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-20" />

                {/* Why Choose Us */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/8 transition-colors"
                        >
                            <div className="text-secondary text-4xl font-serif font-bold mb-4">01</div>
                            <h3 className="text-xl font-serif font-bold mb-3">Best Rate Guarantee</h3>
                            <p className="text-gray-400 font-light">
                                We match any online rate and provide exclusive perks, upgrades, and special amenities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/8 transition-colors"
                        >
                            <div className="text-secondary text-4xl font-serif font-bold mb-4">02</div>
                            <h3 className="text-xl font-serif font-bold mb-3">Complimentary Upgrades</h3>
                            <p className="text-gray-400 font-light">
                                Enjoy room upgrades, late checkout, and exclusive amenities subject to availability.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/8 transition-colors"
                        >
                            <div className="text-secondary text-4xl font-serif font-bold mb-4">03</div>
                            <h3 className="text-xl font-serif font-bold mb-3">Expert Support</h3>
                            <p className="text-gray-400 font-light">
                                24/7 concierge assistance and personalized recommendations for your perfect stay.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-20">
                    <Button className="bg-secondary text-black hover:bg-secondary/90 px-10 py-6 text-lg font-serif rounded-full">
                        Explore All Hotels
                    </Button>
                </div>
            </section>
        </div>
    );
}
