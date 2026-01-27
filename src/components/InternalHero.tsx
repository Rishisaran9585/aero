"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, MapPin, Palmtree, Car, FileText } from "lucide-react";
import "./InternalHero.css";

interface InternalHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    showCategories?: boolean;
}

const categories = [
    { icon: Package, label: "Our Package", id: "package", href: "/package1" },
    { icon: MapPin, label: "UAE Tours", id: "uae-tours", href: "/uae-tours" },
    { icon: Palmtree, label: "Desert Safari", id: "desert-safari", href: "/desert-safari" },
    { icon: Car, label: "Fleet", id: "fleet", href: "/fleet" },
    { icon: FileText, label: "Visa", id: "visa", href: "/visa" },
];

export default function InternalHero({ title, subtitle, image, showCategories = true }: InternalHeroProps) {
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={containerRef} className="internal-hero-container">
            {/* Background Layer */}
            <motion.div style={{ y, scale }} className="internal-hero-bg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            <div className="internal-hero-overlay" />

            {/* Content Layer */}
            <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h1 className="internal-hero-title">
                        {title}
                    </h1>

                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="internal-hero-script"
                        >
                            {subtitle}
                        </motion.span>
                    )}
                </motion.div>
            </div>

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

            {/* Decorative Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="internal-hero-scroll"
            >
                <div className="scroll-line" />
                <span className="scroll-text">DISCOVER MORE</span>
            </motion.div>
        </div>
    );
}
