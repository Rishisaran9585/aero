"use client";

import { motion } from "framer-motion";
import { Headset, MapPin, GraduationCap, ArrowRight } from "lucide-react";

const reasons = [
    {
        title: "24/7 Support",
        desc: "Our dedicated concierge team is available around the clock to ensure your journey remains seamless and stress-free.",
        icon: Headset,
    },
    {
        title: "Top Guide",
        desc: "Experience the UAE through the eyes of our elite, licensed guides who bring history and culture to life.",
        icon: MapPin,
    },
    {
        title: "Premium Experience",
        desc: "From private yacht charters to exclusive desert camps, we curate only the finest experiences for our guests.",
        icon: GraduationCap,
    }
];

export default function ReasonsToChoose() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                        3 Reasons To Choose Us
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary rounded-tl-sm transition-all duration-500 group-hover:w-full group-hover:h-full" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-sm transition-all duration-500 group-hover:w-full group-hover:h-full" />

                            <div className="p-8 h-full flex flex-col items-start relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                {/* Icon Container */}
                                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                                    <item.icon className="h-8 w-8 text-secondary group-hover:text-black transition-colors duration-500" />
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                                    {item.desc}
                                </p>

                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors group/btn">
                                    Read More
                                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
