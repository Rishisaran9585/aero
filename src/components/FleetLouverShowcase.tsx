"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, ShieldCheck, Zap, Compass, Maximize2 } from "lucide-react";
import "./FleetLouverShowcase.css";

const fleetCategories = [
    {
        id: "sedan",
        title: "EXECUTIVE",
        name: "Premium Sedan",
        img: "/assets/kia.png",
        specs: { pax: "4 Seats", speed: "Efficient", type: "City Elite" },
        desc: "The perfect synergy of professionalism and comfort for your urban transit.",
        color: "#d4af37"
    },
    {
        id: "suv",
        title: "MAJESTIC",
        name: "Royal VIP SUV",
        img: "/assets/7seater.png",
        specs: { pax: "7 Seats", speed: "Powerful", type: "All-Terrain Luxe" },
        desc: "Commanding presence with an interior that rivals the world's finest lounges.",
        color: "#b89644"
    },
    {
        id: "limo",
        title: "EXTRAORDINARY",
        name: "Stretch Limousine",
        img: "/assets/stretch.png",
        specs: { pax: "10 Seats", speed: "Celebratory", type: "Event Icon" },
        desc: "Transform every arrival into a legendary moment with our bespoke stretch collection.",
        color: "#c5a019"
    },
    {
        id: "coach",
        title: "GRAND",
        name: "Premium Coach",
        img: "/assets/33seater.png",
        specs: { pax: "33 Seats", speed: "Equipped", type: "Global Group" },
        desc: "Redefining group logistics with ergonomic excellence and panoramic perspectives.",
        color: "#d4af37"
    },
    {
        id: "yacht",
        title: "HORIZON",
        name: "Luxury Yacht",
        img: "/assets/yachts.png",
        specs: { pax: "Bespoke", speed: "Serene", type: "Marine Elite" },
        desc: "The ultimate expression of luxury on the Arabian Gulf. A private oasis on water.",
        color: "#b89644"
    }
];

export default function FleetLouverShowcase() {
    const [activeId, setActiveId] = useState("suv");

    return (
        <section className="fleet-louver-section">
            <div className="container mx-auto px-4">
                <div className="showcase-intro mb-20 text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="louver-accent"
                    >
                        CURATED MOBILITY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="louver-title"
                    >
                        THE <span className="italic-gold">LOUVERED</span> STAGE.
                    </motion.h2>
                </div>

                <div className="louver-container">
                    {fleetCategories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            className={`louver-panel ${activeId === cat.id ? "is-active" : ""}`}
                            onMouseEnter={() => setActiveId(cat.id)}
                            layout
                        >
                            {/* Inactive State - Vertical Title */}
                            <div className="louver-collapsed-content">
                                <span className="louver-index">{cat.title.slice(0, 1)}</span>
                                <h3 className="louver-vertical-title">{cat.title}</h3>
                            </div>

                            {/* Active State - Full Reveal */}
                            <AnimatePresence>
                                {activeId === cat.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="louver-expanded-content"
                                    >
                                        <div className="content-inner">
                                            <div className="auto-specs-hud">
                                                <div className="hud-part">
                                                    <Users size={14} />
                                                    <span>{cat.specs.pax}</span>
                                                </div>
                                                <div className="hud-part">
                                                    <Maximize2 size={14} />
                                                    <span>{cat.specs.type}</span>
                                                </div>
                                            </div>

                                            <div className="auto-reveal-visual">
                                                <motion.div
                                                    initial={{ x: 100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ type: "spring", stiffness: 50 }}
                                                    className="auto-img-wrap"
                                                >
                                                    <Image
                                                        src={cat.img}
                                                        alt={cat.name}
                                                        width={1200}
                                                        height={800}
                                                        className="auto-img"
                                                    />
                                                    <div className="auto-shadow" />
                                                </motion.div>
                                            </div>

                                            <div className="auto-info-panel">
                                                <motion.h4
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="auto-name"
                                                >
                                                    {cat.name}
                                                </motion.h4>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="auto-desc"
                                                >
                                                    {cat.desc}
                                                </motion.p>

                                                <motion.button
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="reveal-btn"
                                                >
                                                    <span>BOOK EXPERIENCE</span>
                                                    <ArrowRight size={16} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative Line */}
                            <div className="louver-line" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture */}
            <div className="louver-bg-glow" />
        </section>
    );
}
