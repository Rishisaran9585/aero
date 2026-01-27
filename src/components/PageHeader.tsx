"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Package, MapPin, Palmtree, Car, FileText, Search } from "lucide-react";
import "./PageHeader.css";

interface PageHeaderProps {
    title?: string | ReactNode;
    subtitle?: string;
    topSubtitle?: string;
    image?: string;
    video?: string;
    scriptText?: string;
    showSearch?: boolean;
    showCategories?: boolean;
    className?: string;
    isHome?: boolean;
}

const categories = [
    { icon: Package, label: "Our Package", id: "package", href: "/package1" },
    { icon: MapPin, label: "UAE Tours", id: "uae-tours", href: "/uae-tours" },
    { icon: Palmtree, label: "Desert Safari", id: "desert-safari", href: "/desert-safari" },
    { icon: Car, label: "Fleet", id: "fleet", href: "/fleet" },
    { icon: FileText, label: "Visa", id: "visa", href: "/visa" },
];

export default function PageHeader({
    title,
    subtitle,
    topSubtitle,
    image,
    video,
    scriptText,
    showSearch = true,
    showCategories = true,
    className,
    isHome = false
}: PageHeaderProps) {
    const pathname = usePathname();

    return (
        <div className="page-header-container">
            <section className={`page-header-hero ${className || ""} ${!isHome ? 'is-internal' : ''}`}>
                {/* Background Image/Video */}
                <div className="absolute inset-0 z-0 bg-stone-900">
                    {video ? (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-105"
                        />
                    ) : (
                        <img
                            src={image}
                            alt={typeof title === 'string' ? title : 'Page header image'}
                            className="w-full h-full object-cover scale-105"
                            loading="eager"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
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
                            <h1 className={`hero-main-title ${!isHome ? 'internal-title' : ''}`}>
                                {title}
                            </h1>
                        )}

                        {scriptText && (
                            <span className={`page-header-script ${!isHome ? 'internal-script' : ''}`}>
                                {scriptText}
                            </span>
                        )}

                    </motion.div>
                </div>

                {/* Vertical Scroll Indicator (Formerly CTA) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="page-header-scroll"
                >
                    <div className="scroll-line" />
                    <span className="scroll-text">DISCOVER MORE</span>
                </motion.div>

                {/* Service Category Bar */}
                {showCategories && (
                    <div className="page-header-categories-wrapper">
                        <div className="page-header-categories">
                            {categories.map((cat) => {
                                const isActive = pathname === cat.href;
                                return (
                                    <Link
                                        key={cat.id}
                                        href={cat.href}
                                        className={`category-item ${isActive ? 'active' : ''}`}
                                    >
                                        <cat.icon className="category-icon" />
                                        <span className="category-label">{cat.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="category-active"
                                                className="category-active-bg"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </section>

        </div>
    );
}
