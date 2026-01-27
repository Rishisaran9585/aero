"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Car, Zap, Mountain, Palmtree, Utensils, Music, ArrowRight, ShieldCheck, Star } from "lucide-react";
import "./SafariInclusions.css";

const inclusions = [
    {
        id: "01",
        icon: Car,
        title: "4x4 Pickup",
        desc: "Doorstep service in premium off-road vehicles.",
        img: "/assets/im1.jpg",
        color: "#b89644"
    },
    {
        id: "02",
        icon: Zap,
        title: "Dune Bashing",
        desc: "An adrenaline-fueled ride over the golden peaks.",
        img: "/assets/im2.jpg",
        color: "#d4af37"
    },
    {
        id: "03",
        icon: Mountain,
        title: "Sandboarding",
        desc: "Slide down the dunes for a unique thrill.",
        img: "/assets/im3.jpg",
        color: "#c5a019"
    },
    {
        id: "04",
        icon: Palmtree,
        title: "Camel Ride",
        desc: "Experience the traditional 'ship of the desert'.",
        img: "/assets/im4.jpg",
        color: "#b89644"
    }
];

export default function SafariInclusions() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="inclusions-perspective-wrap">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Sticky Control Area */}
                    <div className="lg:w-1/3">
                        <div className="sticky-meta top-32">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="label-accent"
                            >
                                THE ADVENTURE ANATOMY
                            </motion.span>
                            <h2 className="title-massive">
                                SIGNATURE <br />
                                <span className="italic-gold">MOMENTS.</span>
                            </h2>

                            <div className="active-inclusion-preview mt-12">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="preview-content"
                                    >
                                        <div className="p-badge">EXPERIENCE {inclusions[activeIndex].id}</div>
                                        <p className="p-desc">{inclusions[activeIndex].desc}</p>
                                        <div className="trust-indicator">
                                            <ShieldCheck size={16} />
                                            <span>Fully Licensed Professionals</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="scroll-hint mt-20">
                                <div className="hint-line" />
                                <span>HOVER TO EXPLORE</span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Perspective Grid */}
                    <div className="lg:w-2/3">
                        <div className="perspective-grid">
                            {inclusions.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={`perspective-card ${activeIndex === i ? 'is-active' : ''}`}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <div className="card-bg">
                                        <Image src={item.img} alt={item.title} fill className="card-img" />
                                        <div className="card-overlay" />
                                    </div>

                                    <div className="card-content-top">
                                        <div className="card-icon">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="card-id">{item.id}</span>
                                    </div>

                                    <div className="card-content-bottom">
                                        <h3 className="card-lbl">{item.title}</h3>
                                        <div className="card-action">
                                            <div className="circle-pulse" />
                                            <span className="action-txt">STORY REVEAL</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
