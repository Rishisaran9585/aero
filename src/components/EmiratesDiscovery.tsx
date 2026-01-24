"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Landmark, Star, ArrowRight } from "lucide-react";
import "./EmiratesDiscovery.css";

const features = [
    {
        id: "01",
        icon: Landmark,
        title: "Architectural Marvels",
        desc: "Visit the world's tallest building, the iconic Burj Khalifa, and explore the man-made wonder of Palm Jumeirah. Our tours provide exclusive access to Dubai's most spectacular landmarks.",
        accent: "rgba(184, 150, 68, 0.1)"
    },
    {
        id: "02",
        icon: Sparkles,
        title: "Cultural Heritage",
        desc: "Immerse yourself in Emirati culture at the Sheikh Zayed Grand Mosque, wander through traditional souks, and discover the rich history at Heritage Village and Al Fahidi Historical District.",
        accent: "rgba(255, 255, 255, 0.05)"
    },
    {
        id: "03",
        icon: Star,
        title: "Premium Experience",
        desc: "All our tours include expert local guides, comfortable transportation, and skip-the-line access to major attractions. We ensure a seamless, luxurious experience throughout your journey.",
        accent: "rgba(184, 150, 68, 0.15)"
    }
];

export default function EmiratesDiscovery() {
    return (
        <section className="emirates-discovery-section">
            <div className="container mx-auto px-4">
                <div className="discovery-layout">

                    {/* Brand Side */}
                    <div className="brand-side">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="brand-content"
                        >
                            <div className="discovery-label">
                                <span className="line" />
                                <span>SINCE 2012</span>
                            </div>
                            <h2 className="discovery-headline">
                                DISCOVER <br />
                                <span className="gold-italic">THE EMIRATES.</span>
                            </h2>
                            <p className="discovery-paragraph">
                                Experience the perfect blend of tradition and modernity across the United Arab Emirates. From the towering skyscrapers of Dubai to the cultural heritage of Abu Dhabi.
                            </p>

                            <div className="stat-row">
                                <div className="stat-item">
                                    <span className="stat-num">12+</span>
                                    <span className="stat-text">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">50k+</span>
                                    <span className="stat-text">Happy Travelers</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Side */}
                    <div className="features-side">
                        <div className="features-stack">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="feature-slice"
                                >
                                    <div className="slice-number">{feature.id}</div>
                                    <div className="slice-main">
                                        <div className="slice-header">
                                            <div className="slice-icon-box">
                                                <feature.icon size={20} />
                                            </div>
                                            <h3>{feature.title}</h3>
                                        </div>
                                        <p>{feature.desc}</p>
                                    </div>
                                    <div className="slice-accent" style={{ backgroundColor: feature.accent }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Narrative */}
            <div className="bg-narrative">BEYOND LUXURY</div>
        </section>
    );
}
