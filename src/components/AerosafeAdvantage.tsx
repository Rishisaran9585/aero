"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './AerosafeAdvantage.css';

export default function AerosafeAdvantage() {
    return (
        <section className="aerosafe-advantage-section">
            <div className="container mx-auto px-4 relative">
                <div className="advantage-container">

                    {/* Visual Side: The Triple-Image Grid */}
                    <div className="advantage-visual-grid">

                        {/* Background Left Image */}
                        <motion.div
                            className="grid-image-box img-bg-left"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop"
                                alt="Hiking Adventure"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Background Right Image */}
                        <motion.div
                            className="grid-image-box img-bg-right"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
                                alt="Nature Landscape"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Central Circular Image */}
                        <motion.div
                            className="grid-image-box img-fg-circle"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop"
                                alt="Tropical Destination"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Flight Asset */}
                        <motion.div
                            className="flight-asset-layer"
                            initial={{ x: -100, y: 100, opacity: 0, rotate: -10 }}
                            whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/flight.png"
                                    alt="Flight Illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="advantage-content-wrapper">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="adv-header-title">
                                We <span className="adv-highlight">Recommend</span> Beautiful <br />
                                Destinations Every Month
                            </h2>
                            <p className="adv-description">
                                Aerosafe is a multi-award winning strategy and content creation
                                agency that specializes in travel marketing and luxury journey curation.
                            </p>

                            {/* Features List */}
                            <div className="adv-features-layout">
                                <motion.div
                                    className="adv-feature-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="adv-feat-icon">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/826/826070.png" width={48} height={48} alt="Guide Icon" />
                                    </div>
                                    <div className="adv-feat-info">
                                        <h4>Trusted travel guide</h4>
                                        <p>Provides reliable information to help travelers plan their trips efficiently and safely.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="adv-feature-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="adv-feat-icon">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/3233/3233508.png" width={48} height={48} alt="Vision Icon" />
                                    </div>
                                    <div className="adv-feat-info">
                                        <h4>Mission & Vision</h4>
                                        <p>Aims to connect people to positive experience through travel, helping them see the world differently.</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom CTA Row */}
                            <div className="adv-bottom-row">
                                <button className="btn-discover-now">
                                    Discover More
                                </button>
                                <div className="adv-stats-mini">
                                    <div className="adv-avatars">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="avatar-img">
                                                <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" fill />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="adv-stats-count">
                                        <span className="adv-count-num">3.5k</span>
                                        <span className="adv-count-label">Happy Customer</span>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical Experience Badge */}
                            <div className="adv-experience-badge-fixed hidden xl:flex">
                                <span className="adv-exp-num">25</span>
                                <div className="adv-exp-txt-v">
                                    <span>Years of</span>
                                    <span>Experience</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
