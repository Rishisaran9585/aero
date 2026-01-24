"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Zap, Compass, Users } from "lucide-react";
import "./FleetKineticStage.css";

const fleetItems = [
    {
        id: "01",
        category: "EXECUTIVE CLASS",
        name: "Premium Sedan",
        image: "/assets/fleet_sedan_cinematic.png",
        desc: "Designed for the sophisticated traveler who demands punctuality and poise. Our executive sedans offer a serene environment for both work and reflection.",
        specs: ["4 Passengers", "WIFI Enabled", "Pristine Leather"],
        accent: "#b89644"
    },
    {
        id: "02",
        category: "MAJESTIC FLEET",
        name: "Royal VIP SUV",
        image: "/assets/fleet_suv_cinematic.png",
        desc: "Experience commanding luxury that adapts to every terrain. Perfect for families or business groups seeking elevated comfort and space.",
        specs: ["7 Passengers", "Extended Cargo", "Privacy Glazing"],
        accent: "#d4af37"
    },
    {
        id: "03",
        category: "EVENT ELITE",
        name: "Stretch Limousine",
        image: "/assets/stretch.png",
        imageFit: "contain",
        desc: "Make every arrival legendary. Our stretch limousines are more than vehicles; they are mobile celebration hubs equipped with the finest amenities.",
        specs: ["10 Passengers", "Mini Bar", "Mood Lighting"],
        accent: "#c5a019"
    }
];

export default function FleetKineticStage() {
    return (
        <section className="kinetic-stage-wrap">
            <div className="container mx-auto px-4">
                <div className="stage-intro text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="stage-label"
                    >
                        THE EXHIBIT
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="stage-headline"
                    >
                        CURATED <span className="italic-gold">EXCELLENCE.</span>
                    </motion.h2>
                </div>

                <div className="kinetic-stack">
                    {fleetItems.map((item, idx) => (
                        <KineticSlide key={item.id} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function KineticSlide({ item, index }: { item: any, index: number }) {
    const slideRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: slideRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacityText = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);

    return (
        <div ref={slideRef} className="kinetic-slide">
            <div className={`slide-content-grid ${index % 2 !== 0 ? 'rev' : ''}`}>

                {/* Visual Composite Layer */}
                <div className="slide-visual-area">
                    <motion.div
                        style={{ scale: scaleImg }}
                        className="visual-container"
                    >
                        <motion.div style={{ y: yImg }} className="image-parallax-wrap">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={1200}
                                height={800}
                                className={`kinetic-img ${item.imageFit === 'contain' ? 'is-contain' : ''}`}
                            />
                        </motion.div>
                        <div className="visual-overlay" />
                    </motion.div>

                    {/* Massive Background Index */}
                    <div className="kinetic-index-bg">{item.id}</div>
                </div>

                {/* Narrative Layer */}
                <div className="slide-text-area">
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-stack"
                    >
                        <span className="cat-lbl">{item.category}</span>
                        <h3 className="auto-name">{item.name}</h3>
                        <p className="auto-desc">{item.desc}</p>

                        <div className="spec-ribbon">
                            {item.specs.map((spec: string, i: number) => (
                                <div key={i} className="spec-pill">
                                    <div className="dot" />
                                    <span>{spec}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <button className="kinetic-cta">
                                <span>INQUIRE NOW</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
