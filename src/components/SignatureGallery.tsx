"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import "./SignatureGallery.css";

const destinations = [
    {
        id: '1',
        name: 'Dubai Marina',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1200',
        size: 'large',
        tag: 'Iconic'
    },
    {
        id: '2',
        name: 'Maldives',
        location: 'Indian Ocean',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200',
        size: 'tall',
        tag: 'Paradise'
    },
    {
        id: '3',
        name: 'Zermatt',
        location: 'Switzerland',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200',
        size: 'medium',
        tag: 'Alpine'
    },
    {
        id: '4',
        name: 'Paris',
        location: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
        size: 'wide',
        tag: 'Romance'
    },
    {
        id: '5',
        name: 'Abu Dhabi',
        location: 'UAE',
        image: 'https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&q=80&w=1200',
        size: 'medium',
        tag: 'Culture'
    },
    {
        id: '6',
        name: 'Tokyo',
        location: 'Japan',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200',
        size: 'tall',
        tag: 'Future'
    }
];

export default function SignatureGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="signature-gallery-section">
            <div className="container mx-auto px-4">
                <div className="gallery-header text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0em' }}
                        whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
                        className="section-label"
                    >
                        CURATED ESCAPES
                    </motion.span>
                    <h2 className="section-title text-4xl md:text-6xl">FEATURED <span className="italic-text">MOMENTS.</span></h2>
                </div>

                <div className="mosaic-grid">
                    {destinations.map((dest, index) => (
                        <GalleryItem key={dest.id} dest={dest} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ dest, index }: { dest: typeof destinations[0], index: number }) {
    return (
        <Link href="/package1" className={`gallery-card size-${dest.size} block`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full h-full"
            >
                <div className="image-container">
                    <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="gallery-image"
                    />
                    <div className="overlay-gradient" />

                    <div className="card-top">
                        <span className="tag-badge">{dest.tag}</span>
                        <div className="rating-pill">
                            <Star size={10} className="fill-secondary text-secondary" />
                            <span>4.9</span>
                        </div>
                    </div>

                    <div className="card-bottom">
                        <div className="content-reveal">
                            <div className="flex items-center gap-2 text-secondary text-[10px] font-bold tracking-widest uppercase mb-2">
                                <MapPin size={10} />
                                {dest.location}
                            </div>
                            <h3 className="dest-name">{dest.name}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span className="price-text">From AED 2,500</span>
                                <motion.div
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    className="explore-btn"
                                >
                                    <ArrowUpRight size={20} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
