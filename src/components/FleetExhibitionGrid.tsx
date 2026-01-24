"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Zap, Shield, Star, Users, Crown, Globe, Compass } from "lucide-react";
import "./FleetExhibitionGrid.css";

const exhibitionItems = [
    {
        id: "01",
        title: "EXECUTIVE",
        subtitle: "The Professional Stand",
        img: "/assets/fleet_sedan_cinematic.png",
        stats: { capacity: "4 PAX", class: "Business Elite" },
        features: ["In-car WIFI", "Mineral Water", "Multilingual Pilot"],
        size: "large"
    },
    {
        id: "02",
        title: "MAJESTIC",
        subtitle: "The SUV Authority",
        img: "/assets/fleet_suv_cinematic.png",
        stats: { capacity: "7 PAX", class: "VIP Utility" },
        features: ["Panoramic Roof", "Privacy Glass", "Extra Luggage"],
        size: "medium"
    },
    {
        id: "03",
        title: "ICONIC",
        subtitle: "The Stretch Legacy",
        img: "/assets/fleet_limo_cinematic.png",
        stats: { capacity: "10 PAX", class: "Celebration" },
        features: ["Mini Bar", "Fiber Optic Lighting", "Premium Sound"],
        size: "medium"
    },
    {
        id: "04",
        title: "GRAND",
        subtitle: "The Group Voyager",
        img: "/assets/fleet_coach_cinematic.png",
        stats: { capacity: "33 PAX", class: "Global Travel" },
        features: ["Ergonomic Seats", "LCD Entertainment", "Climate Control"],
        size: "wide"
    }
];

export default function FleetExhibitionGrid() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="fleet-exhibition-section">
            <div className="container mx-auto px-4">
                <div className="exhibition-header mb-24">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="label-accent"
                            >
                                THE ELITE SELECTION
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="main-headline"
                            >
                                A SYMPHONY OF <br />
                                <span className="italic-gold">ENGINEERING.</span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="header-desc max-w-sm"
                        >
                            We don't just move people; we orchestrate flawless movement. Explore our fleet of precisely maintained vehicles.
                        </motion.p>
                    </div>
                </div>

                <div className="exhibition-grid-layout">
                    {exhibitionItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className={`exhibition-card size-${item.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="card-media">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="media-img"
                                />
                                <div className="media-overlay" />

                                {/* Dynamic Backdrop Reflection */}
                                <AnimatePresence>
                                    {hoveredId === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.15 }}
                                            exit={{ opacity: 0 }}
                                            className="reflection-glow"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="card-content-wrap">
                                <div className="content-top">
                                    <span className="item-id">{item.id}</span>
                                    <div className="item-stats">
                                        <div className="stat-node">
                                            <Users size={12} />
                                            <span>{item.stats.capacity}</span>
                                        </div>
                                        <div className="stat-node">
                                            <Crown size={12} />
                                            <span>{item.stats.class}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-bottom">
                                    <div className="titles">
                                        <span className="sub-title">{item.subtitle}</span>
                                        <h3 className="item-title">{item.title}</h3>
                                    </div>

                                    <div className="expandable-features">
                                        <ul className="feat-list">
                                            {item.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="card-action">
                                        <button className="action-pill">
                                            <span>EXPLORE</span>
                                            <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="corner-accent" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Footer Section */}
                <div className="exhibition-footer mt-32 border-t border-white/5 pt-20 flex flex-wrap justify-between items-center gap-10">
                    <div className="flex gap-20">
                        <div className="footer-metric">
                            <span className="metric-val">100%</span>
                            <span className="metric-lbl">Safety Rating</span>
                        </div>
                        <div className="footer-metric">
                            <span className="metric-val">24/7</span>
                            <span className="metric-lbl">Concierge Support</span>
                        </div>
                    </div>
                    <button className="full-catalog-btn">
                        <span>VIEW FULL CATALOG</span>
                        <Compass className="ml-4" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
