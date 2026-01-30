"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Camera, Compass, Sparkles, MapPin, ChevronRight } from "lucide-react";
import "./RegionalDiscovery.css";

const regions = [
    {
        id: "01",
        name: "Sharjah",
        label: "Cultural Capital",
        desc: "Immense yourself in Islamic art and history through the museums and souks of Sharjah. A city where tradition is preserved in every stone.",
        icon: Camera,
        accent: "rgba(184, 150, 68, 0.4)"
    },
    {
        id: "02",
        name: "Fujairah",
        label: "The East Coast",
        desc: "Mountain ranges meet pristine beaches in the only Emirate facing the Gulf of Oman. A rugged escape for the adventurous soul.",
        icon: Compass,
        accent: "rgba(255, 255, 255, 0.2)"
    },
    {
        id: "03",
        name: "Ajman",
        label: "Coastal Charm",
        desc: "The smallest Emirate offers soul-soothing beaches and a glimpse into Bedouin roots. Experience the authentic pace of coastal life.",
        icon: Sparkles,
        accent: "rgba(184, 150, 68, 0.2)"
    }
];

export default function RegionalDiscovery() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="snap-section regional-discovery-no-img py-20 md:py-32 flex items-center min-h-screen">
            <div className="container mx-auto px-4">
                <div className="discovery-grid-layout">

                    {/* Left: Fixed Header Area */}
                    <div className="header-sidebar">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="sticky-header"
                        >
                            <span className="section-tag">REGIONAL DISCOVERY</span>
                            <h2 className="main-headline">
                                THE <br />
                                <span className="highlight-text">NORTHERN</span> <br />
                                EMIRATES.
                            </h2>
                            <p className="master-desc">
                                Exploring the diverse landscapes and cultural heritage beyond the metropolis.
                            </p>

                            <div className="progress-indicators">
                                {regions.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`indicator ${activeIndex === i ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive Text Accordion */}
                    <div className="interaction-stack">
                        {regions.map((region, i) => (
                            <motion.div
                                key={region.id}
                                className={`discovery-item ${activeIndex === i ? 'is-active' : ''}`}
                                onMouseEnter={() => setActiveIndex(i)}
                            >
                                <div className="item-main">
                                    <div className="item-id">{region.id}</div>
                                    <div className="item-title-row">
                                        <div className="title-group">
                                            <h3>{region.name}</h3>
                                            <span className="label-text">{region.label}</span>
                                        </div>
                                        <div className="icon-wrapper">
                                            <region.icon size={24} />
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="item-details"
                                        >
                                            <div className="details-inner">
                                                <p className="region-p">{region.desc}</p>
                                                <div className="action-footer">
                                                    <button className="tour-link">
                                                        View Full Details
                                                        <ArrowUpRight size={18} />
                                                    </button>
                                                    <div className="decorative-line" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Hover Gradient Effect */}
                                <div className="hover-accent" style={{ backgroundColor: region.accent }} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
