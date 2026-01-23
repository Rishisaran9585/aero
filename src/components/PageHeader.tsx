"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Hotel, Plane, Ship, Bus, Palmtree, Waves, Search } from "lucide-react";
import "./PageHeader.css";

interface PageHeaderProps {
    title: string | ReactNode;
    subtitle?: string;
    image: string;
    scriptText?: string;
    showSearch?: boolean;
    showCategories?: boolean;
}

const categories = [
    { icon: Hotel, label: "Hotels", id: "hotels" },
    { icon: Bus, label: "Car Rentals", id: "car-rentals" },
    { icon: Plane, label: "Flights", id: "flights" },
    { icon: Palmtree, label: "Trips", id: "trips" },
    { icon: Ship, label: "Cruises", id: "cruises" },
    { icon: Waves, label: "Activities", id: "activities" },
];

export default function PageHeader({
    title,
    subtitle,
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
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={typeof title === 'string' ? title : 'Page header image'}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center w-full"
                    >
                        <h1 className="mb-0 text-white tracking-tighter filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] leading-none">
                            {title}
                        </h1>

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

            {/* Search Section Below Hero */}
            {showSearch && (
                <section className="page-header-search-section">
                    <div className="search-container">
                        <div className="search-field">
                            <label>Destination</label>
                            <input type="text" placeholder="Keyword Search" />
                        </div>
                        <div className="search-field">
                            <label>Check In</label>
                            <input type="text" placeholder="YYYY-MM-DD" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                        </div>
                        <div className="search-field">
                            <label>Check Out</label>
                            <input type="text" placeholder="YYYY-MM-DD" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                        </div>
                        <div className="search-field">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col gap-2">
                                    <label>Adults</label>
                                    <select defaultValue="01">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Children</label>
                                    <select defaultValue="00">
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="btn-large-search">
                            SEARCH
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}
