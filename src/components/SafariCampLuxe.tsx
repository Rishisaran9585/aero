"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Utensils, Music, Flame, Moon, Compass } from "lucide-react";
import "./SafariCampLuxe.css";

const features = [
    {
        icon: Utensils,
        title: "Gourmet Dining",
        desc: "A five-star buffet featuring authentic Arabic delicacies and international cuisines under the stars."
    },
    {
        icon: Music,
        title: "Live Artistry",
        desc: "Captivating Tanoura dancers and fire performers bring the desert night to life."
    },
    {
        icon: Flame,
        title: "Majlis Comfort",
        desc: "Traditional low seating with premium cushions and carpets for an authentic Bedouin feel."
    }
];

export default function SafariCampLuxe() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section ref={containerRef} className="camp-luxe-section">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            style={{ y: yImg }}
                            className="main-image-container"
                        >
                            <Image
                                src="/assets/im6.jpg"
                                alt="Luxury Desert Camp"
                                width={1200}
                                height={1500}
                                className="main-camp-img"
                            />
                            <div className="img-overlay-gold" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="secondary-image-container"
                        >
                            <Image
                                src="/assets/im5.jpg"
                                alt="Gourmet Dining"
                                width={800}
                                height={800}
                                className="dining-img"
                            />
                        </motion.div>

                        <div className="floating-badge">
                            <Moon className="text-secondary" size={20} />
                            <span>STARLIT EXPERIENCE</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.div style={{ y: yText }} className="content-stack">
                            <span className="accent-label">THE NIGHT REVEALED</span>
                            <h2 className="section-title-huge">
                                AN OASIS OF <br />
                                <span className="gold-text">AUTHENTICITY.</span>
                            </h2>
                            <p className="section-desc">
                                As the sun sets behind the dunes, our private campsite transforms into a golden sanctuary.
                                Experience the warmth of Arabian hospitality in a setting that blends
                                centuries-old traditions with modern luxury.
                            </p>

                            <div className="features-grid-luxe">
                                {features.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="feat-item"
                                    >
                                        <div className="feat-icon-wrap">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="feat-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-20">
                                <button className="luxe-explore-btn">
                                    <span>EXPLORE THE CAMP</span>
                                    <Compass size={18} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background elements */}
            <div className="glow-orb" />
            <div className="glow-orb-2" />
        </section>
    );
}
