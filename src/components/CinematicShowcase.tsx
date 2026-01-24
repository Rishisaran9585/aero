"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowUpRight, Clock, Shield, Sparkles } from "lucide-react";
import { Package } from "@/data/packages";
import "./CinematicShowcase.css";

interface CinematicShowcaseProps {
    packages: Package[];
}

export default function CinematicShowcase({ packages }: CinematicShowcaseProps) {
    return (
        <section className="cinematic-showcase-section">
            <div className="container mx-auto px-4">
                <div className="showcase-header text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="accent-label">SIGNATURE COLLECTION</span>
                        <h2 className="showcase-title">
                            EXPLORE THE <span className="italic-text">EXTRAORDINARY.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="showcase-grid">
                    {packages.slice(0, 4).map((pkg, i) => (
                        <CinematicCard key={pkg.slug} pkg={pkg} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CinematicCard({ pkg, index }: { pkg: Package; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="cinematic-card"
        >
            <Link href={`/packages/${pkg.slug}`} className="card-link">
                <div
                    className="image-container"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="card-image"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="card-overlay" />
                </div>

                {/* Floating Content Layers */}
                <div className="card-layers" style={{ transform: "translateZ(50px)" }}>
                    <div className="top-layer">
                        <div className="badge gold-badge">
                            <Sparkles size={10} className="mr-1" />
                            {pkg.price}
                        </div>
                        <div className="badge glass-badge">
                            <Star size={10} className="text-secondary fill-secondary mr-1" />
                            {pkg.rating}
                        </div>
                    </div>

                    <div className="bottom-layer">
                        <motion.div
                            className="pkg-info"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                        >
                            <div className="meta-row">
                                <span className="meta-tag">
                                    <Clock size={10} className="mr-1" />
                                    {pkg.duration}
                                </span>
                                <span className="meta-tag">
                                    <MapPin size={10} className="mr-1" />
                                    UAE
                                </span>
                            </div>
                            <h3 className="card-title">{pkg.title}</h3>
                        </motion.div>

                        <div className="action-row">
                            <span className="cta-text">DISCOVER MORE</span>
                            <div className="arrow-circle">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-reflection" />
            </Link>
        </motion.div>
    );
}
