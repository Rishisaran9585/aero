"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Landmark, Sparkles, Star, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import "./LuxeDiscovery.css";

const features = [
    {
        icon: Landmark,
        title: "Architectural",
        subtitle: "Marvels of Dubai",
        desc: "From the Burj Khalifa's peak to the Palm's man-made shores, we provide exclusive access to the world's most daring engineering feats.",
    },
    {
        icon: Sparkles,
        title: "Cultural",
        subtitle: "Heritage & Roots",
        desc: "Deep-dive into the Bedouin soul. Visit the Grand Mosque, wander the spice souks, and explore the Al Fahidi historic heart.",
    },
    {
        icon: Star,
        title: "Premium",
        subtitle: "The Elite Standard",
        desc: "Beyond transportation. Gold-standard hospitality with expert guides and skip-the-line privileges at every landmark.",
    }
];

export default function LuxeDiscovery() {
    const sectionRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const { left, top } = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="luxe-discovery-wrap"
        >
            {/* Dynamic Spotlight Layer */}
            <motion.div
                className="section-spotlight"
                style={{
                    left: springX,
                    top: springY,
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="discovery-bento-grid">

                    {/* Main Title Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bento-card brand-highlight"
                    >
                        <div className="card-top-marker">
                            <Globe size={14} className="text-secondary" />
                            <span>EST. 2012</span>
                        </div>
                        <h2 className="brand-headline">
                            DISCOVER <br />
                            <span className="text-gradient">THE EMIRATES.</span>
                        </h2>
                        <p className="brand-subline">
                            We redefine the anatomy of travel. Our curators bridge the gap between simple sightseeing and immersive storytelling.
                        </p>
                        <div className="brand-footer">
                            <div className="floating-stat">
                                <strong>50K+</strong>
                                <span>GUESTS</span>
                            </div>
                            <div className="brand-line" />
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="features-subgrid">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bento-card feature-tile"
                            >
                                <div className="tile-glow" />
                                <div className="tile-icon">
                                    <feature.icon size={24} />
                                </div>
                                <div className="tile-content">
                                    <span className="tile-subtitle">{feature.subtitle}</span>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                                <div className="tile-action">
                                    <div className="circle-btn">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Special "Call to Action" Small Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bento-card cta-mini"
                        >
                            <div className="cta-inner">
                                <ShieldCheck size={20} className="text-secondary mb-3" />
                                <p>READY TO <br />BEGIN?</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mt-2 block hover:translate-x-1 transition-transform cursor-pointer">
                                    INQUIRE NOW →
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Texture */}
            <div className="grain-overlay" />
        </section>
    );
}
