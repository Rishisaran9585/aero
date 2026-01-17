"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "UK Traveler",
        text: "The desert safari was the highlight of our trip! Aerosafe organized everything perfectly, from the luxury Land Cruiser pickup to the VIP dinner at the camp.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        size: "large"
    },
    {
        name: "Rajesh Kumar",
        role: "Chennai, India",
        text: "Exceptional service! Obtaining visas for my entire family was so smooth, and the hotel recommendations were spot on. Truly a premium experience.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        size: "small"
    },
    {
        name: "Elena Rodriguez",
        role: "Spain",
        text: "We booked the private yacht tour and it was magical. The captain was friendly and the views of the Marina were breathtaking. Highly recommend Aerosafe.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        size: "medium"
    },
    {
        name: "David Chen",
        role: "Hong Kong",
        text: "Efficiency at its best. The luxury fleet is impeccable and the drivers are very professional. Our business trip in Dubai was seamless thanks to Aerosafe.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        size: "small"
    },
];

const TestimonialCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative group overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 transition-all duration-500",
                review.size === "large" ? "md:col-span-2 md:row-span-2" : "",
                review.size === "medium" ? "md:col-span-1 md:row-span-2" : "",
                "hover:border-secondary/20 shadow-2xl"
            )}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 179, 8, 0.08), transparent 40%)`,
                }}
            />

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-3.5 w-3.5 text-secondary fill-secondary" />
                        ))}
                    </div>
                    <Quote className="text-secondary/20 h-8 w-8 rotate-180" />
                </div>

                <p className={cn(
                    "text-gray-100 font-serif leading-relaxed mb-auto",
                    review.size === "large" ? "text-xl md:text-2xl" : "text-base"
                )}>
                    <span className="text-secondary font-sans mr-2">"</span>
                    {review.text}
                    <span className="text-secondary font-sans ml-1">"</span>
                </p>

                <div className="flex items-center gap-4 mt-10">
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-secondary/30 transition-colors">
                        <Image
                            src={review.image}
                            alt={review.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div>
                        <h4 className="text-white font-bold tracking-tight text-base">{review.name}</h4>
                        <p className="text-[10px] text-secondary/60 uppercase tracking-[0.2em] font-medium">{review.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold tracking-[0.4em] uppercase mb-4 block text-sm"
                        >
                            Guest Experiences
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]"
                        >
                            Stories from our <span className="italic font-light text-secondary/90">Travelers</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-xs text-sm leading-relaxed mb-4"
                    >
                        We take pride in creating moments that become lifelong memories. Hear what our guests have to say.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 auto-rows-auto">
                    {reviews.map((review, i) => (
                        <TestimonialCard key={i} review={review} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

