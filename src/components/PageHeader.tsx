"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Hotel, Plane, Ship, Bus, Palmtree, Waves, Search } from "lucide-react";
import "./PageHeader.css";

interface PageHeaderProps {
    title?: string | ReactNode;
    subtitle?: string;
    topSubtitle?: string;
    image: string;
    scriptText?: string;
    showSearch?: boolean;
    showCategories?: boolean;
}

const categories = [
    { icon: Hotel, label: "Hotels", id: "hotels" },
    { icon: Bus, label: "Car Rentals", id: "car-rentals" },
    { icon: Palmtree, label: "Trips", id: "trips" },
    { icon: Ship, label: "Cruises", id: "cruises" },
    { icon: Waves, label: "Activities", id: "activities" },
];

export default function PageHeader({
    title,
    subtitle,
    topSubtitle,
    image,
    scriptText = "the world",
    showSearch = true,
    showCategories = true
}: PageHeaderProps) {
    const [activeCategory, setActiveCategory] = useState("activities");

    return (
        <div className="page-header-container">
            <section className="page-header-hero">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-stone-900">
                    <img
                        src={image}
                        alt={typeof title === 'string' ? title : 'Page header image'}
                        className="w-full h-full object-cover scale-105"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center w-full"
                    >
                        {topSubtitle && (
                            <span className="page-header-top-subtitle">
                                {topSubtitle}
                            </span>
                        )}

                        {title && (
                            <h1 className="hero-main-title">
                                {title}
                            </h1>
                        )}

                        <span className="page-header-script">
                            {scriptText}
                        </span>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="page-header-cta"
                        >
                            EXPLORE NOW
                        </motion.button>
                    </motion.div>
                </div>

                {/* Service Category Bar */}
                {showCategories && (
                    <div className="page-header-categories-wrapper">
                        <div className="page-header-categories">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    <cat.icon className="category-icon" />
                                    <span className="category-label">{cat.label}</span>
                                    {activeCategory === cat.id && (
                                        <motion.div
                                            layoutId="category-active"
                                            className="category-active-bg"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

        </div>
    );
}
