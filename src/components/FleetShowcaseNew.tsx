"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Zap, Shield, Star, Compass, ArrowRight, Layers } from "lucide-react";
import "./FleetShowcaseNew.css";

export default function FleetShowcaseNew() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yImg2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <section ref={containerRef} className="fleet-showcase-luxe">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-24">

                    {/* Visual Composite */}
                    <div className="lg:w-1/2 relative h-[800px] flex items-center justify-center">
                        <motion.div
                            style={{ y: yImg1 }}
                            className="fleet-main-frame"
                        >
                            <Image
                                src="/assets/33seater.png"
                                alt="Premium Coach"
                                width={1000}
                                height={600}
                                className="main-auto-img"
                            />
                            <div className="frame-overlay" />
                        </motion.div>

                        <motion.div
                            style={{ y: yImg2 }}
                            className="fleet-sub-frame"
                        >
                            <Image
                                src="/assets/7seater.png"
                                alt="Luxury SUV"
                                width={600}
                                height={400}
                                className="sub-auto-img"
                            />
                        </motion.div>

                        {/* Floating Metric */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="fleet-stats-badge"
                        >
                            <div className="badge-icon"><Layers size={20} /></div>
                            <div>
                                <span className="badge-val">50+</span>
                                <span className="badge-lbl">Premium Vehicles</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Architecture */}
                    <div className="lg:w-1/2">
                        <div className="fleet-text-stack">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="fleet-label"
                            >
                                THE AEROSAFE STANDARD
                            </motion.span>

                            <h2 className="fleet-headline">
                                PRECISION <br />
                                <span className="italic-gold">IN MOTION.</span>
                            </h2>

                            <p className="fleet-desc">
                                From individual executive transfers to large-scale event logistics,
                                our fleet is engineered to deliver perfection. We don't just provide
                                transportation; we curate the journey.
                            </p>

                            <div className="fleet-feature-grid">
                                {[
                                    { icon: Zap, title: "Swift", body: "Real-time dispatch & optimized routes." },
                                    { icon: Shield, title: "Ultra", body: "Regulated safety & sanitized cabins." },
                                    { icon: Star, title: "Elite", body: "Tailored amenities for VIP travel." }
                                ].map((feat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="fleet-feat-card"
                                    >
                                        <div className="feat-ico"><feat.icon size={20} /></div>
                                        <div>
                                            <h5>{feat.title}</h5>
                                            <p>{feat.body}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16 flex items-center gap-8">
                                <button className="fleet-main-btn">
                                    <span>EXPLORE FULL FLEET</span>
                                    <ArrowRight size={18} />
                                </button>
                                <div className="trust-pips">
                                    <div className="pip-stack">
                                        <div className="pip" />
                                        <div className="pip" />
                                        <div className="pip" />
                                    </div>
                                    <span className="pip-text">Trusted by 2k+ Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Narrative */}
            <div className="fleet-bg-text">ENGINEERED</div>
        </section>
    );
}
