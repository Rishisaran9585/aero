"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        text: "Aerosafe transformed our corporate transportation needs. Their fleet is immaculate, drivers are highly professional, and the service is consistently reliable. We've never experienced any delays or issues. Highly recommended for premium business travel.",
        name: "Sarah Mitchell",
        location: "Dubai, UAE"
    },
    {
        text: "For our wedding event, Aerosafe provided an exceptional experience. Every detail was perfect - from the pristine vehicles to the courteous drivers. Our guests were amazed by the luxury and comfort. Truly a five-star service!",
        name: "Ahmed Al-Mansouri",
        location: "Abu Dhabi, UAE"
    },
    {
        text: "We used Aerosafe for our family vacation and it was absolutely fantastic. The VIP SUV was spacious and luxurious, the driver was knowledgeable about all the tourist spots, and the overall experience was unforgettable.",
        name: "Jennifer Anderson",
        location: "Dubai, UAE"
    }
];

export default function PremiumTestimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    return (
        <section className="pt-20 pb-16 relative overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-black pointer-events-none" />
            <div className="absolute top-10 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Client Voices</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            What Our <br />
                            <span className="text-secondary">Clients Say</span>
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent mb-8" />
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                            Experience the testimonials from our satisfied clients who trust us with their premium transportation needs across the region.
                        </p>

                        {/* Navigation Dots */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setTestimonialIndex(i)}
                                        className={`h-2 rounded-full transition-all duration-500 ${testimonialIndex === i ? 'w-12 bg-secondary' : 'w-2 bg-white/20 hover:bg-white/40'
                                            }`}
                                        aria-label={`Testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Testimonial Card */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonialIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="group relative"
                            >
                                {/* Card Container */}
                                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 group-hover:border-secondary/50 rounded-[2rem] p-8 md:p-12 transition-all duration-500">
                                    {/* Quote Icon */}
                                    <div className="mb-8">
                                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/50">
                                            <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5" />
                                                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-10 text-justify">
                                        {testimonials[testimonialIndex].text}
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-secondary/50 via-transparent to-transparent mb-8" />

                                    {/* Client Info */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="text-xl font-serif font-bold text-white mb-2">
                                                {testimonials[testimonialIndex].name}
                                            </h4>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <MapPin className="w-4 h-4 text-secondary" />
                                                {testimonials[testimonialIndex].location}
                                            </div>
                                        </div>

                                        {/* Navigation Arrows */}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                                                className="h-10 w-10 rounded-full border border-white/20 hover:border-secondary/50 flex items-center justify-center text-white/40 hover:text-secondary transition-all duration-300"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                                                className="h-10 w-10 rounded-full border border-white/20 hover:border-secondary/50 flex items-center justify-center text-white/40 hover:text-secondary transition-all duration-300"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex gap-1 mt-6 pt-6 border-t border-white/5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-secondary text-secondary"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
