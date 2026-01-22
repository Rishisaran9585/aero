"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const collections = [
    {
        id: 1,
        title: "Dubai Essentials",
        days: "5 Days",
        price: "AED 1,200",
        image: "/assets/visa.jpg",
    },
    {
        id: 2,
        title: "Luxury Escape",
        days: "7 Days",
        price: "AED 5,500",
        image: "/assets/Burj_Al_Arab.png",
        featured: true,
    },
    {
        id: 3,
        title: "Abu Dhabi Explorer",
        days: "Day Trip",
        price: "AED 450",
        image: "/assets/abu_dhabi.jpg",
    },
    {
        id: 4,
        title: "Desert Romance",
        days: "2 Days",
        price: "AED 2,100",
        image: "/assets/desert-safari-card.jpg",
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1] // cubic-bezier equivalent of easeOut for safety
        },
    },
};

export default function TrendingCollections() {
    return (
        <section className="trending-section py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.p
                    className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    CURATED FOR YOU
                </motion.p>

                <motion.h2
                    className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Trending Collections
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end"
                    variants={container}
                    initial="show"
                    animate="show"
                >
                    {collections.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`trending-card ${item.featured ? "featured" : ""} relative w-full ${item.featured ? "h-[500px]" : "h-[420px]"} rounded-[24px] overflow-hidden cursor-pointer border border-white/10 transition-[border-color] duration-500`}
                            variants={cardVariant}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                            }}
                            transition={{ type: "spring", stiffness: 120 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover brightness-125"
                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                            />
                            <span className="days-badge absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white z-10">
                                {item.days}
                            </span>

                            <motion.div
                                className="card-content"
                                initial={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-3xl font-serif font-bold text-white mb-2">{item.title}</h3>
                                <p className="price text-secondary font-serif italic text-xl mb-4">{item.price}</p>
                                <div className="h-[1px] w-full bg-white/20 mb-4" />
                                <motion.a
                                    href="#"
                                    className="cta text-xs text-gray-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
                                    whileHover={{ letterSpacing: "2px" }}
                                >
                                    View Itinerary →
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
