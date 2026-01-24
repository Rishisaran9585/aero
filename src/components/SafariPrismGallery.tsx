"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CloudMoon, Sun, Users, Crown, ArrowRight } from "lucide-react";
import "./SafariPrism.css";

const options = [
    {
        id: "01",
        title: "Evening Safari",
        tag: "THE CLASSIC",
        desc: "Dune bashing, BBQ dinner, and live shows under the Arabian stars.",
        image: "/assets/desert-safari-card.jpg",
        icon: CloudMoon,
        subtitle: "Sunset & Starlight"
    },
    {
        id: "02",
        title: "Morning Safari",
        tag: "THE PURIST",
        desc: "Beat the heat and experience the pristine golden dunes at dawn's first light.",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200",
        icon: Sun,
        subtitle: "Dawn Expedition"
    },
    {
        id: "03",
        title: "Private Safari",
        tag: "THE EXCLUSIVE",
        desc: "A fully dedicated 4x4 and bespoke itinerary for your private entourage.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=1200",
        icon: Users,
        subtitle: "Bespoke Journey"
    },
    {
        id: "04",
        title: "VIP Safari",
        tag: "THE ELITE",
        desc: "Premium lounge seating, silver table service, and the highest desert camp.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1200",
        icon: Crown,
        subtitle: "Sultan's Choice"
    }
];

export default function SafariPrismGallery() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="safari-prism-section">
            <div className="container mx-auto px-4">
                <div className="prism-header mb-24">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0em' }}
                        whileInView={{ opacity: 1, letterSpacing: '0.6em' }}
                        className="p-label"
                    >
                        ADVENTURE SERIES
                    </motion.span>
                    <h2 className="p-title">PICK YOUR <span className="p-italic">PACE.</span></h2>
                </div>

                <div className="prism-container">
                    {options.map((option, i) => (
                        <motion.div
                            key={i}
                            className={`prism-pillar ${hoveredIndex === i ? 'is-expanded' : ''} ${hoveredIndex !== null && hoveredIndex !== i ? 'is-compressed' : ''}`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <div className="pillar-inner">
                                <Image
                                    src={option.image}
                                    alt={option.title}
                                    fill
                                    className="pillar-img"
                                />
                                <div className="pillar-overlay" />

                                {/* Collapsed Content (Vertical) */}
                                <div className="pillar-collapsed-content">
                                    <span className="p-num">{option.id}</span>
                                    <h3 className="p-vert-title">{option.title}</h3>
                                </div>

                                {/* Expanded Content (Horizontal) */}
                                <div className="pillar-expanded-content">
                                    <div className="e-header">
                                        <div className="e-icon">
                                            <option.icon size={24} />
                                        </div>
                                        <div className="e-meta">
                                            <span className="e-tag">{option.tag}</span>
                                            <h3 className="e-title">{option.title}</h3>
                                        </div>
                                    </div>

                                    <p className="e-desc">{option.desc}</p>

                                    <div className="e-footer">
                                        <div className="e-subtitle">{option.subtitle}</div>
                                        <motion.button
                                            whileHover={{ x: 10, scale: 1.1 }}
                                            className="e-btn"
                                        >
                                            <ArrowRight size={20} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="pillar-glow" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
