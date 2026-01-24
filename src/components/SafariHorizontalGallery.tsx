"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CloudMoon, Sun, Users, Crown, ChevronRight } from "lucide-react";
import Image from "next/image";

const options = [
    {
        title: "Evening Safari",
        tag: "THE CLASSIC",
        desc: "Dune bashing, BBQ dinner, and live shows under the Arabian stars.",
        image: "/assets/desert-safari-card.jpg",
        icon: CloudMoon
    },
    {
        title: "Morning Safari",
        tag: "THE PURIST",
        desc: "Beat the heat and experience the pristine golden dunes at dawn.",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200",
        icon: Sun
    },
    {
        title: "Private Safari",
        tag: "THE EXCLUSIVE",
        desc: "A fully dedicated 4x4 and itinerary for your private group.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=1200",
        icon: Users
    },
    {
        title: "VIP Safari",
        tag: "THE ELITE",
        desc: "Premium lounge seating, table service, and the highest luxury camp.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1200",
        icon: Crown
    }
];

export default function SafariHorizontalGallery() {
    return (
        <section className="py-40 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px] mb-6 block italic">Adventure Selection</span>
                        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">
                            PICK YOUR <br />
                            <span className="text-secondary italic">PACE.</span>
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {options.map((option, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative h-[450px] md:h-[350px] overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Text Side */}
                                <div className="p-10 md:p-14 flex flex-col justify-center flex-1 z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                                            <option.icon size={24} />
                                        </div>
                                        <div>
                                            <span className="text-secondary font-black text-[10px] tracking-widest">{option.tag}</span>
                                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{option.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl group-hover:text-white transition-colors">
                                        {option.desc}
                                    </p>
                                    <div className="mt-8 flex items-center gap-4 text-secondary font-black text-[10px] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0">
                                        Inquire Now <ChevronRight size={16} />
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="w-full md:w-[40%] h-48 md:h-full relative overflow-hidden">
                                    <Image
                                        src={option.image}
                                        alt={option.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
