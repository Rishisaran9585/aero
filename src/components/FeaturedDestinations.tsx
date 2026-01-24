"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import './FeaturedDestinations.css';

const destinations = [
    {
        id: 'uae-pick',
        type: 'Top UAE Pick',
        name: 'Dubai Marina',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1200',
        rating: 4.9,
        price: 'From AED 1,200'
    },
    {
        id: 'global-pick',
        type: 'Global Favorite',
        name: 'Maldives',
        location: 'Indian Ocean',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200',
        rating: 5.0,
        price: 'From AED 4,500'
    },
    {
        id: 'uae-second',
        type: 'Cultural Escape',
        name: 'Sheikh Zayed Mosque',
        location: 'Abu Dhabi, UAE',
        image: 'https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&q=80&w=1200',
        rating: 4.8,
        price: 'From AED 500'
    },
    {
        id: 'global-second',
        type: 'Alpine Luxury',
        name: 'Zermatt',
        location: 'Swiss Alps',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200',
        rating: 4.9,
        price: 'From AED 3,200'
    },
    {
        id: 'uae-palm',
        type: 'Island Life',
        name: 'Palm Jumeirah',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&q=80&w=1200',
        rating: 4.9,
        price: 'From AED 2,500'
    },
    {
        id: 'global-paris',
        type: 'City of Lights',
        name: 'Paris',
        location: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
        rating: 4.7,
        price: 'From AED 3,800'
    },
    {
        id: 'uae-hajar',
        type: 'Mountain Retreat',
        name: 'Hajar Mountains',
        location: 'Ras Al Khaimah, UAE',
        image: 'https://images.unsplash.com/photo-1589133918281-69796853239a?auto=format&fit=crop&q=80&w=1200',
        rating: 4.6,
        price: 'From AED 800'
    },
    {
        id: 'global-tokyo',
        type: 'Urban Adventure',
        name: 'Tokyo',
        location: 'Japan',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200',
        rating: 4.9,
        price: 'From AED 4,200'
    }
];

export default function FeaturedDestinations() {
    return (
        <section className="featured-destinations-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-serif italic text-3xl mb-1 block">Most loved places</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Featured Destinations</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mt-6 opacity-50" />
                    </motion.div>
                </div>

                <div className="destinations-grid">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            className="destination-luxury-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="luxury-image-wrapper">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="luxury-overlay-gradient" />

                                <div className="floating-info-slab">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="luxury-type">{dest.type}</span>
                                        <div className="luxury-rating">
                                            <Star size={10} className="fill-secondary text-secondary" />
                                            <span>{dest.rating}</span>
                                        </div>
                                    </div>
                                    <h3 className="luxury-title">{dest.name}</h3>
                                    <div className="luxury-location">
                                        <MapPin size={12} className="text-secondary/80" />
                                        <span>{dest.location}</span>
                                    </div>

                                    <div className="luxury-footer">
                                        <span className="luxury-price">{dest.price}</span>
                                        <button className="luxury-action-btn">
                                            Explore <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
