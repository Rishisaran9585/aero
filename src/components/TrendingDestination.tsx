"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Mountain, UserCheck, UtensilsCrossed } from 'lucide-react';
import './TrendingDestination.css';

const features = [
    {
        id: 1,
        title: "Safety First Always",
        icon: ShieldCheck,
        color: "#10b981"
    },
    {
        id: 2,
        title: "Exclusive Trip",
        icon: Mountain,
        color: "#3b82f6"
    },
    {
        id: 3,
        title: "Professional Guide",
        icon: UserCheck,
        color: "#f59e0b"
    },
    {
        id: 4,
        title: "World-Class Dining",
        icon: UtensilsCrossed,
        color: "#ef4444"
    }
];

const destinations = [
    { id: 1, img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" },
];

export default function TrendingDestination() {
    return (
        <section className="trending-destination-section">
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column */}
                    <div className="lg:w-1/2 z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="trending-title-script">Trending</span>
                            <h2 className="trending-title-main mb-6">Destination</h2>
                            <p className="text-gray-400 mb-12 max-w-lg leading-relaxed text-lg font-light">
                                These destinations are trending because they offer authentic experiences,
                                natural beauty, and often visa-friendly access for Indian travelers.
                            </p>

                            {/* Features Grid - Redesigned to be less "boxy" */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.id}
                                        className="feature-item-refined"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="feature-marker">
                                            <span className="marker-num">{feature.id}</span>
                                            <div className="marker-dot" style={{ backgroundColor: feature.color }} />
                                        </div>
                                        <div className="feature-content-refined">
                                            <div className="feature-icon-glass">
                                                <feature.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-widest leading-tight">
                                                {feature.title}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Jagged Image Refined */}
                    <div className="lg:w-1/2 relative lg:-mr-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="jagged-edge-wrapper"
                        >
                            <div className="jagged-mask-refined shadow-3xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1574914629385-46448b767aec?auto=format&fit=crop&w=1200&q=80"
                                    alt="Trending Destination Hero"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay Shadow for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Gallery - Exactly 2 images */}
                <div className="mt-20">
                    <div className="flex gap-8 max-w-4xl">
                        {destinations.map((dest, index) => (
                            <motion.div
                                key={dest.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="destination-card-refined group"
                            >
                                <div className="relative h-64 w-full rounded-[30px] overflow-hidden">
                                    <Image
                                        src={dest.img}
                                        alt="Destination"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
