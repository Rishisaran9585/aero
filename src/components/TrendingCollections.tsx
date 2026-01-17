"use client";

import { motion, Variants } from "framer-motion";
import "./trending.css";

const collections = [
    {
        id: 1,
        title: "Dubai Essentials",
        days: "5 Days",
        price: "AED 1,200",
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Luxury Escape",
        days: "7 Days",
        price: "AED 5,500",
        image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=800&q=80",
        featured: true,
    },
    {
        id: 3,
        title: "Abu Dhabi Explorer",
        days: "Day Trip",
        price: "AED 450",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Desert Romance",
        days: "2 Days",
        price: "AED 2,100",
        image: "https://images.unsplash.com/photo-1451187530230-b237ee60ea6d?auto=format&fit=crop&w=800&q=80",
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
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {collections.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`trending-card ${item.featured ? "featured" : ""}`}
                            variants={cardVariant}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                            }}
                            transition={{ type: "spring", stiffness: 120 }}
                            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.25)), url(${item.image})` }}
                        >
                            <span className="days-badge absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white z-10">
                                {item.days}
                            </span>

                            <motion.div
                                className="card-content"
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
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
