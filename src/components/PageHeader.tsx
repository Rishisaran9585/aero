"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
    title: string | ReactNode;
    subtitle?: string;
    image: string;
    highlight?: string;
    isLarge?: boolean;
}

export default function PageHeader({ title, subtitle, image, highlight, isLarge }: PageHeaderProps) {
    return (
        <section className={`relative ${isLarge ? 'h-screen' : 'h-[70vh]'} min-h-[600px] flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={typeof title === 'string' ? title : 'Page header image'}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Premium Dark Gradient Overlay - Lightened */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {highlight && (
                        <div className="flex items-center justify-center gap-4 mb-4 opacity-80">
                            <div className="h-[1px] w-8 bg-secondary" />
                            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">{highlight}</span>
                            <div className="h-[1px] w-8 bg-secondary" />
                        </div>
                    )}
                    <h1 className={`${isLarge ? 'text-7xl md:text-[10rem]' : 'text-6xl md:text-9xl'} font-serif font-bold mb-6 text-white drop-shadow-2xl`}>{title}</h1>
                    {subtitle && (
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
