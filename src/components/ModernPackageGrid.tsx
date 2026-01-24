"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowUpRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Package } from "@/data/packages";
import "./ModernPackageGrid.css";

interface ModernPackageGridProps {
    packages: Package[];
}

export default function ModernPackageGrid({ packages }: ModernPackageGridProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleX = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const springTitleX = useSpring(titleX, { stiffness: 100, damping: 30 });

    return (
        <section ref={sectionRef} className="modern-package-section">
            {/* Massive Background Text */}
            <div className="bg-text-container">
                <motion.h2
                    style={{ x: springTitleX }}
                    className="bg-text-outline"
                >
                    EXPLORE THE EXTRAORDINARY
                </motion.h2>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="header-content"
                    >
                        <span className="subtitle">EXPERIENCE EXCELLENCE</span>
                        <h3 className="main-title">
                            TOUR <span className="highlight-italic">PACKAGES.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="package-grid">
                    {packages.slice(0, 3).map((pkg, i) => (
                        <PackageCard key={pkg.slug} pkg={pkg} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`modern-card card-variant-${index % 3}`}
        >
            <Link href={`/packages/${pkg.slug}`} className="card-link">
                <div className="image-wrapper">
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover card-image"
                    />
                    <div className="image-overlay" />

                    {/* Floating Badges */}
                    <div className="badge-container top-badges">
                        <div className="price-badge">
                            <span className="currency">AED</span>
                            <span className="amount">{pkg.price.replace("AED ", "")}</span>
                        </div>
                        <div className="rating-badge">
                            <Star size={12} className="star-icon" />
                            <span>{pkg.rating}</span>
                        </div>
                    </div>

                    <div className="badge-container bottom-badges">
                        <div className="duration-badge">
                            <Clock size={12} />
                            <span>{pkg.duration}</span>
                        </div>
                    </div>
                </div>

                <div className="card-content">
                    <div className="title-area">
                        <h4 className="pkg-title">{pkg.title}</h4>
                        <div className="explore-line">
                            <span className="explore-text">VIEW JOURNEY</span>
                            <div className="line" />
                            <ArrowUpRight size={18} className="arrow-icon" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
