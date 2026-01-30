"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass, Waves, Anchor } from "lucide-react";
import "./RegionalDiscovery.css";

const eastCoastRegions = [
    {
        id: "01",
        name: "Fujairah City",
        label: "The Gateway",
        desc: "A modern city nestled between the mountains and the sea. Home to historic forts and the massive Sheikh Zayed Mosque of Fujairah.",
        icon: Anchor,
        accent: "rgba(184, 150, 68, 0.4)"
    },
    {
        id: "02",
        name: "Al Aqah",
        label: "Pristine Beaches",
        desc: "The ultimate beach escape with crystal clear waters and the famous Snoopy Island. A paradise for snorkeling and diving enthusiasts.",
        icon: Waves,
        accent: "rgba(255, 255, 255, 0.2)"
    },
    {
        id: "03",
        name: "Dibba",
        label: "Mountain Shorelines",
        desc: "Where the Hajar mountains plunge directly into the sea. Explore the rugged beauty of northern Fujairah and the Musandam border.",
        icon: Compass,
        accent: "rgba(184, 150, 68, 0.2)"
    }
];

export default function EastCoastDiscovery() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="snap-section regional-discovery-no-img py-20 md:py-32 flex items-center min-h-screen bg-white/[0.02]">
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
                            <span className="section-tag">COASTAL ESCAPE</span>
                            <h2 className="main-headline">
                                THE <br />
                                <span className="highlight-text">EAST</span> <br />
                                COAST.
                            </h2>
                            <p className="master-desc">
                                Discover the rugged beauty where the Hajar Mountains meet the Gulf of Oman.
                            </p>

                            <div className="progress-indicators">
                                {eastCoastRegions.map((_, i) => (
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
                        {eastCoastRegions.map((region, i) => (
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
                                                        View East Coast Packages
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
