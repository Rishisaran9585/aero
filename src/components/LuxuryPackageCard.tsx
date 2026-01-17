"use client";

import { motion } from "framer-motion";
import "./LuxuryPackage.css";

interface PackageData {
    name: string;
    duration: string;
    price: string;
    image: string;
    features: string[];
}

export default function LuxuryPackageCard({ data }: { data: PackageData }) {
    return (
        <motion.div
            className="lux-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
                y: -12,
                scale: 1.02,
            }}
        >
            {/* Image Section */}
            <div className="lux-image">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                <span className="lux-days">
                    🕒 {data.duration}
                </span>
            </div>

            {/* Content Section */}
            <div className="lux-content">
                <div className="lux-header">
                    <h3>{data.name}</h3>
                    <motion.span
                        className="lux-price"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {data.price}
                    </motion.span>
                </div>

                <ul className="lux-list">
                    {data.features.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <motion.button
                    className="lux-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Request Quote
                </motion.button>
            </div>
        </motion.div>
    );
}
