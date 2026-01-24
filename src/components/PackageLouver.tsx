"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowUpRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Package } from "@/data/packages";
import "./PackageLouver.css";

interface PackageLouverProps {
    packages: Package[];
}

export default function PackageLouver({ packages }: PackageLouverProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="package-louver-section">
            <div className="section-header-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="louver-header"
                >
                    <span className="louver-subtitle">EXPERIENCE EXCELLENCE</span>
                    <h2 className="louver-title">TOUR <span className="highlight">PACKAGES.</span></h2>
                </motion.div>
            </div>

            <div className="louver-container">
                {packages.slice(0, 5).map((pkg, i) => (
                    <motion.div
                        key={pkg.slug}
                        className={`louver-item ${hoveredIndex === i ? 'is-active' : ''} ${hoveredIndex !== null && hoveredIndex !== i ? 'is-dimmed' : ''}`}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={`/packages/${pkg.slug}`} className="louver-link">
                            <div className="louver-image-wrapper">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="louver-image"
                                />
                                <div className="louver-overlay" />
                            </div>

                            <div className="louver-content">
                                <div className="louver-top">
                                    <div className="pkg-badges">
                                        <div className="l-badge price">{pkg.price}</div>
                                        <div className="l-badge rating">
                                            <Star size={10} className="fill-secondary text-secondary" />
                                            {pkg.rating}
                                        </div>
                                    </div>
                                    <h3 className="louver-pkg-title">{pkg.title}</h3>
                                </div>

                                <div className="louver-details-reveal">
                                    <div className="pkg-meta">
                                        <div className="meta-item">
                                            <Clock size={12} />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <MapPin size={12} />
                                            <span>UAE Destination</span>
                                        </div>
                                    </div>
                                    <p className="pkg-desc">{pkg.description}</p>
                                    <div className="louver-action">
                                        <span>EXPLORE JOURNEY</span>
                                        <div className="action-circle">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical Title for collapsed states */}
                            <div className="louver-vertical-title">
                                <span>{pkg.title}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
