"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Users, Calendar, MapPin, Phone, Star, Zap, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";

const FleetCarousel = ({ vehicles }: { vehicles: any[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

    const getImageIndex = (offset: number) => {
        return (activeIndex + offset + vehicles.length) % vehicles.length;
    };

    return (
        <div className="relative w-full overflow-hidden min-h-[600px] flex flex-col items-center justify-center py-12 bg-black">
            {/* Rich Radial Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.2)_0%,_transparent_70%)] pointer-events-none z-0" />

            {/* Main Interaction Area */}
            <div className="relative z-10 w-full flex items-center justify-center h-[500px] md:h-[600px]">

                {/* Left Navigation Arrow */}
                <button
                    onClick={() => handleImageClick(getImageIndex(-1))}
                    className="absolute left-4 md:left-10 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 group"
                    aria-label="Previous Vehicle"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                    onClick={() => handleImageClick(getImageIndex(1))}
                    className="absolute right-4 md:right-10 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 group"
                    aria-label="Next Vehicle"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </button>

                <div className="w-full max-w-7xl h-full flex items-center justify-between gap-4 px-4">
                    {/* Left - Half Size Image */}
                    <motion.div
                        key={`left-${activeIndex}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 0.3, x: 0, scale: 0.8 }}
                        whileHover={{ opacity: 0.7, scale: 0.85 }}
                        transition={{ duration: 0.5 }}
                        className="hidden lg:flex w-1/4 h-full cursor-pointer items-center justify-center"
                        onClick={() => handleImageClick(getImageIndex(-1))}
                    >
                        <div className="w-full h-full flex items-center justify-center p-4">
                            <img
                                src={vehicles[getImageIndex(-1)].image}
                                alt={vehicles[getImageIndex(-1)].name}
                                className="object-contain max-w-full max-h-full opacity-50 transition-opacity"
                            />
                        </div>
                    </motion.div>

                    {/* Center - Full Size Image */}
                    <motion.div
                        key={`center-${activeIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 h-full flex items-center justify-center z-20"
                    >
                        <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                            <img
                                src={vehicles[activeIndex].image}
                                alt={vehicles[activeIndex].name}
                                className="object-contain max-w-full max-h-[85%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            />
                        </div>
                    </motion.div>

                    {/* Right - Half Size Image */}
                    <motion.div
                        key={`right-${activeIndex}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 0.3, x: 0, scale: 0.8 }}
                        whileHover={{ opacity: 0.7, scale: 0.85 }}
                        transition={{ duration: 0.5 }}
                        className="hidden lg:flex w-1/4 h-full cursor-pointer items-center justify-center"
                        onClick={() => handleImageClick(getImageIndex(1))}
                    >
                        <div className="w-full h-full flex items-center justify-center p-4">
                            <img
                                src={vehicles[getImageIndex(1)].image}
                                alt={vehicles[getImageIndex(1)].name}
                                className="object-contain max-w-full max-h-full opacity-50 transition-opacity"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Info and Controls - INCREASED GAP BY 10PX */}
            <div className="relative z-30 text-center max-w-4xl px-4 mt-[10px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <h4 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 uppercase tracking-wider">
                            {vehicles[activeIndex].name}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm font-light mb-6 leading-relaxed max-w-2xl mx-auto opacity-70">
                            {vehicles[activeIndex].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Nav Pips */}
                <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                    {vehicles.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleImageClick(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-10 bg-secondary' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                            aria-label={`Go to vehicle ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Explanatory Help Text */}
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-8 flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-800"></span>
                    Swipe or use arrows to navigate our fleet
                    <span className="w-8 h-[1px] bg-gray-800"></span>
                </p>
            </div>
        </div>
    );
};

export default function FleetPage() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const categories = [
        "VIP Tours", "Corporate", "Wedding & Events", "Desert Safari"
    ];

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

    const fleet = [
        { name: "ROYAL VIP SUV", capacity: "7 Seater", image: "/assets/7seater.png", tags: ["Leather Interior", "Premium Audio"], desc: "Experience the ultimate in ground transportation with our flagship VIP SUV. A perfect blend of power and luxury for your Dubai journey." },
        { name: "EXECUTIVE VAN", capacity: "7 Seater", image: "/assets/7seater.png", tags: ["Privacy Glass", "Ample Cargo"], desc: "First-class travel for groups. Our executive vans offer spacious interiors and privacy for corporate and family travel." },
        { name: "ROYAL 5 SEATER", capacity: "5 Seater", image: "/assets/5seater.png", tags: ["Compact Luxury", "Smart Tech"], desc: "Elegant and efficient for small groups or private city tours. The gold standard for modern urban transportation." },
        { name: "PREMIUM SEDAN", capacity: "4 Seater", image: "/assets/kia.png", tags: ["Smooth Ride", "Fuel Efficient"], desc: "Refined elegance for city transfers. The ideal choice for professional and punctual point-to-point transportation." },
        { name: "STRETCH LIMO", capacity: "10 Seater", image: "/assets/stretch.png", tags: ["Mini Bar", "Mood Lighting"], desc: "The pinnacle of event transportation. Elevate your special occasions with our fully equipped premium stretch limousine." },
        { name: "EXECUTIVE COACH", capacity: "18 Seater", image: "/assets/18seater.png", tags: ["Adjustable Seats", "PA System"], desc: "Luxury group travel redefined. Our 18-seater coaches provide ergonomic comfort and advanced onboard features." },
        { name: "PREMIUM COACH", capacity: "22 Seater", image: "/assets/22seater.png", tags: ["Climate Control", "USB Ports"], desc: "Stay connected in style. The perfect mid-size solution for corporate outings and guided city tours." },
        { name: "TOURING COACH", capacity: "33 Seater", image: "/assets/33seater.png", tags: ["Panoramic Views", "LCD Screens"], desc: "Unmatched group experiences. Our touring coaches offer expansive views and premium entertainment for long-distance travel." },
        { name: "LUXURY YACHT", capacity: "Selected Guests", image: "/assets/yachts.png", tags: ["Sunset Cruise", "Bespoke Service"], desc: "The ultimate Dubai luxury. Experience bespoke service and breathtaking views of the coastline from our private yacht collection." },
    ];

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <PageHeader
                title="FLEET"
                scriptText="luxury comfort"
                image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop"
            />

            {/* Category Rolling Marquee */}
            <div className="bg-white/5 border-y border-white/10 py-8 overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-20 whitespace-nowrap"
                >
                    {[...categories, ...categories, ...categories].map((cat, i) => (
                        <span key={i} className="text-sm uppercase tracking-[0.4em] font-bold text-gray-500 hover:text-secondary transition-colors cursor-default">
                            {cat}
                        </span>
                    ))}
                </motion.div>
                {/* Visual Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>

            {/* Explore Our Vehicles Section */}
            <section className="py-[30px] container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:w-1/2 relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 group"
                    >
                        <Image
                            src="/assets/33seater.png"
                            alt="33 Seater Premium Coach"
                            fill
                            className="object-contain p-8 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </motion.div>
                    <div className="lg:w-1/2">
                        <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Fleet Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Any Group Size, <br /> Any Distance.</h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                            Our diverse range of vehicles, from luxury sedans to 50-seater coaches, ensures we have the perfect solution for every requirement. Every vehicle is maintained to the highest standards of safety and cleanliness.
                        </p>
                        <Button className="bg-secondary text-black hover:bg-white px-8 py-6 rounded-xl font-bold">View All Vehicles</Button>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                            {[
                                { icon: Zap, title: "Fast & Precise", desc: "Always on time, every time." },
                                { icon: Shield, title: "Ultra Secure", desc: "Highest safety standards." },
                                { icon: Star, title: "Bespoke", desc: "Tailored to your preference." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors border border-white/5">
                                        <item.icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Vehicle Carousel Section */}
            <section className="py-[30px] relative overflow-hidden bg-gradient-to-b from-black via-indigo-950/30 to-black">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary text-xs font-bold uppercase tracking-[0.6em] mb-4 block"
                        >
                            Featured Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                        >
                            The Aerosafe Experience
                        </motion.h2>
                    </div>

                    <div className="relative h-[600px] flex flex-col items-center justify-center">
                        <FleetCarousel vehicles={fleet} />
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            </section>

            {/* Premium Testimonials Section */}
            <section className="py-[30px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-black pointer-events-none" />
                <div className="absolute top-10 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Client Voices</span>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
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
                                    {[0, 1, 2].map((_, i) => (
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
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            key={testimonialIndex}
                        >
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
                                    <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 group-hover:border-secondary/50 rounded-[2rem] p-12 transition-all duration-500">
                                        {/* Quote Icon */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="mb-8"
                                        >
                                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/30 to-purple-600/30 border border-secondary/50">
                                                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5" />
                                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5" />
                                                </svg>
                                            </div>
                                        </motion.div>

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
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                                                    className="h-10 w-10 rounded-full border border-white/20 hover:border-secondary/50 flex items-center justify-center text-white/40 hover:text-secondary transition-all duration-300"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                                                    className="h-10 w-10 rounded-full border border-white/20 hover:border-secondary/50 flex items-center justify-center text-white/40 hover:text-secondary transition-all duration-300"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Redesigned Premium Features Section */}
            <section className="py-[30px] relative overflow-hidden bg-[#050505]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: MapPin,
                                title: "Ubiquitous Reach",
                                desc: "Seamless door-to-door service across the entire Emirates.",
                                label: "01 / LOGISTICS"
                            },
                            {
                                icon: Users,
                                title: "Elite Fleet",
                                desc: "Meticulously maintained vehicles for the most discerning travelers.",
                                label: "02 / QUALITY"
                            },
                            {
                                icon: StarHalf,
                                title: "Optimal Value",
                                desc: "Premium luxury at competitive rates without compromise.",
                                label: "03 / PRICING"
                            },
                            {
                                icon: Shield,
                                title: "Unwavering Trust",
                                desc: "Professional chauffeurs committed to your safety and punctuality.",
                                label: "04 / SECURITY"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 blur-[60px] rounded-full group-hover:bg-secondary/20 transition-all duration-700" />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 mb-6 block group-hover:text-secondary transition-colors">
                                        {item.label}
                                    </span>

                                    <div className="h-14 w-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                        <item.icon className="h-7 w-7 text-secondary" />
                                    </div>

                                    <h4 className="text-xl font-serif font-bold text-white mb-4">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-gray-400 font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-transparent w-0 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Background Text Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                    <span className="text-[15rem] font-bold text-white/5 tracking-tighter leading-none">AEROSAFE</span>
                </div>
            </section>
        </div>
    );
}
