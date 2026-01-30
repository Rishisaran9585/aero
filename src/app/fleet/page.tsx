"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Car,
    Users,
    Fuel,
    Star,
    ArrowRight,
    ShieldCheck,
    Zap,
    MapPin,
    Phone,
    Settings,
    Maximize2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import InternalHero from "@/components/InternalHero";
import "./DreamFleet.css";

const FleetCarousel = ({ vehicles }: { vehicles: any[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

    const getImageIndex = (offset: number) => {
        return (activeIndex + offset + vehicles.length) % vehicles.length;
    };

    return (
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Main Interaction Area */}
            <div className="relative z-10 w-full flex items-center justify-center h-[350px] md:h-[450px]">

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
                <div className="flex items-center justify-center gap-3 mt-10">
                    {vehicles.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleImageClick(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                            aria-label={`Go to vehicle ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Explanatory Help Text */}
                <div className="flex items-center justify-center gap-6 mt-12 opacity-30">
                    <div className="h-[1px] w-16 bg-white" />
                    <span className="text-[10px] text-white uppercase tracking-[0.3em] font-medium">
                        SWIPE OR USE ARROWS TO NAVIGATE OUR FLEET
                    </span>
                    <div className="h-[1px] w-16 bg-white" />
                </div>
            </div>
        </div>
    );
};

const vehicleTypes = [
    { name: "Sedan", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
    { name: "SUV", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
    { name: "Crossover", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
    { name: "Electric", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
    { name: "Luxury", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
];

const popularFleet = [
    {
        name: "HONDA ODYSSEY",
        type: "Minivan",
        capacity: "7 Seater",
        image: "/assets/vehicle/Honda_Odessy.png",
        tags: ["Spacious", "Family Favorite"],
        price: "700",
        rating: "4.9",
        desc: "The ultimate family minivan combining comfort, safety, and modern technology for a smooth group journey."
    },
    {
        name: "HYUNDAI STARIA",
        type: "MPV",
        capacity: "9 Seater",
        image: "/assets/vehicle/Hyundai_Staria.png",
        tags: ["Futuristic", "Luxury Space"],
        price: "850",
        rating: "4.8",
        desc: "A futuristic lounge on wheels. The Staria offers unparalleled space and comfort with a panoramic view of the city."
    },
    {
        name: "TOYOTA HIACE",
        type: "Van",
        capacity: "13 Seater",
        image: "/assets/vehicle/Toyota_Hiace.png",
        tags: ["Reliable", "Group Travel"],
        price: "600",
        rating: "4.7",
        desc: "The gold standard for group transportation. Reliable, spacious, and perfect for city transfers and long journeys."
    },
    {
        name: "GMC YUKON",
        type: "SUV",
        capacity: "7 Seater",
        image: "/assets/vehicle/GMC_YUKON.png",
        tags: ["Powerful", "Executive"],
        price: "1200",
        rating: "5.0",
        desc: "Command the road with the GMC Yukon. A powerful executive SUV that doesn't compromise on luxury or performance."
    },
    {
        name: "MERCEDES SPRINTER",
        type: "Luxury Van",
        capacity: "15 Seater",
        image: "/assets/vehicle/Mercedes_Sprinter.png",
        tags: ["Premium", "Corporate"],
        price: "1500",
        rating: "5.0",
        desc: "Premium corporate travel redefined. The Mercedes Sprinter offers high-end interiors for those who demand the best."
    },
    {
        name: "KIA CARNIVAL",
        type: "MPV",
        capacity: "8 Seater",
        image: "/assets/vehicle/Kia_carnival.png",
        tags: ["Stylish", "Versatile"],
        price: "750",
        rating: "4.9",
        desc: "Experience versatility and style. The Kia Carnival is perfect for both business trips and family adventures."
    },
    {
        name: "TOYOTA LAND CRUISER",
        type: "SUV",
        capacity: "7 Seater",
        image: "/assets/vehicle/Toyota_Land_cruiser.png",
        tags: ["Off-road", "Iconic"],
        price: "1100",
        rating: "5.0",
        desc: "The icon of the desert. Experience the power and heritage of the Land Cruiser on any terrain."
    },
    {
        name: "NISSAN PATROL",
        type: "SUV",
        capacity: "7 Seater",
        image: "/assets/vehicle/Nissan_Patrol.png",
        tags: ["Rugged", "Luxury"],
        price: "1100",
        rating: "4.9",
        desc: "The hero of all terrains in life. The Nissan Patrol combines rugged capability with a refined, luxurious interior."
    },
    {
        name: "CITROEN SPACETOURER",
        type: "MPV",
        capacity: "9 Seater",
        image: "/assets/vehicle/Citreon_Spacetourer.png",
        tags: ["Modern", "Efficient"],
        price: "800",
        rating: "4.7",
        desc: "Modern efficiency meets spacious design. The Spacetourer is the ideal choice for eco-conscious group travel."
    },
    {
        name: "EXECUTIVE COACH",
        type: "Coach",
        capacity: "18 Seater",
        image: "/assets/coach1.jpeg",
        tags: ["Luxury Interior", "Climate Control"],
        price: "1800",
        rating: "4.9",
        desc: "First-class group travel with premium leather seating and advanced climate control for ultimate comfort."
    },
    {
        name: "PREMIUM COACH",
        type: "Coach",
        capacity: "33 Seater",
        image: "/assets/coach2.jpeg",
        tags: ["Spacious", "High-End"],
        price: "2500",
        rating: "5.0",
        desc: "The pinnacle of coach travel. Featuring a high-end interior designed for large groups who value luxury and space."
    },
    {
        name: "TOURING COACH",
        type: "Coach",
        capacity: "50 Seater",
        image: "/assets/coach3.jpeg",
        tags: ["Panoramic", "VIP"],
        price: "3500",
        rating: "5.0",
        desc: "Explore in style with our VIP touring coach. Offers panoramic views and a state-of-the-art entertainment system."
    },
];

export default function FleetPage() {
    const fleet = [
        { name: "HONDA ODYSSEY", capacity: "7 Seater", image: "/assets/vehicle/Honda_Odessy.png", tags: ["Family", "Comfort"], desc: "The ultimate family minivan combining comfort and safety." },
        { name: "HYUNDAI STARIA", capacity: "9 Seater", image: "/assets/vehicle/Hyundai_Staria.png", tags: ["Futuristic", "Lounge"], desc: "A futuristic lounge on wheels with panoramic views." },
        { name: "TOYOTA HIACE", capacity: "13 Seater", image: "/assets/vehicle/Toyota_Hiace.png", tags: ["Reliable", "Group"], desc: "The gold standard for group transportation." },
        { name: "GMC YUKON", capacity: "7 Seater", image: "/assets/vehicle/GMC_YUKON.png", tags: ["Executive", "Powerful"], desc: "Command the road with this powerful executive SUV." },
        { name: "MERCEDES SPRINTER", capacity: "15 Seater", image: "/assets/vehicle/Mercedes_Sprinter.png", tags: ["Premium", "Corporate"], desc: "Premium corporate travel with high-end interiors." },
        { name: "KIA CARNIVAL", capacity: "8 Seater", image: "/assets/vehicle/Kia_carnival.png", tags: ["Stylish", "Versatile"], desc: "Experience versatility and style for business or family." },
        { name: "TOYOTA LAND CRUISER", capacity: "7 Seater", image: "/assets/vehicle/Toyota_Land_cruiser.png", tags: ["Off-road", "Iconic"], desc: "The icon of the desert, powerful on any terrain." },
        { name: "NISSAN PATROL", capacity: "7 Seater", image: "/assets/vehicle/Nissan_Patrol.png", tags: ["Rugged", "Luxury"], desc: "Rugged capability meets a refined, luxurious interior." },
        { name: "CITROEN SPACETOURER", capacity: "9 Seater", image: "/assets/vehicle/Citreon_Spacetourer.png", tags: ["Modern", "Efficient"], desc: "Modern efficiency meets spacious design for group travel." },
        { name: "EXECUTIVE COACH", capacity: "18 Seater", image: "/assets/coach1.jpeg", tags: ["Luxury", "Leather"], desc: "First-class group travel with premium leather seating." },
        { name: "PREMIUM COACH", capacity: "33 Seater", image: "/assets/coach2.jpeg", tags: ["Spacious", "High-End"], desc: "The pinnacle of coach travel for large groups." },
        { name: "TOURING COACH", capacity: "50 Seater", image: "/assets/coach3.jpeg", tags: ["Panoramic", "VIP"], desc: "Explore in style with our VIP touring coach." },
    ];

    return (
        <div className="dream-fleet-container selection:bg-secondary selection:text-black">

            {/* 1. HERO SECTION - PACKAGE1 STYLE */}
            <div className="snap-start">
                <InternalHero
                    title="FLEET"
                    subtitle="Luxury Comfort"
                    image="/assets/fleet1.jpg"
                />
            </div>

            {/* 2. FLEET DISTINCTION SECTION - LUXURY HIGHLIGHT */}
            <section className="py-16 md:py-24 relative overflow-hidden bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        {/* Visual Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                                    alt="Luxury Fleet Movement"
                                    fill
                                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                {/* Floating Distinction Badge */}
                                <div className="absolute bottom-12 left-12 p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-6">
                                        <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-black shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                                            <Star size={24} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-1">Elite Standard</p>
                                            <h4 className="text-white text-xl font-serif font-bold italic underline decoration-secondary/30 underline-offset-8">Signature Quality</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/5 blur-[80px] rounded-full pointer-events-none" />
                        </motion.div>

                        {/* Content Side */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">Distinction in Motion</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[0.9] tracking-tighter">
                                    Driven by Comfort. <br />
                                    <span className="text-white italic">Powered by Trust.</span>
                                </h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-xl border-l border-white/10 pl-8">
                                    At the heart of our service is a commitment to making every journey seamless, safe, and superior. We curate the premium experience you deserve.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { icon: ShieldCheck, title: "Utmost Security", desc: "Rigorous safety." },
                                        { icon: Users, title: "Elite Chauffeurs", desc: "Professionals." },
                                        { icon: Zap, title: "Swift Dispatch", desc: "Punctuality." },
                                        { icon: Maximize2, title: "Diverse Fleet", desc: "Complete range." }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex gap-4 group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary/50 transition-all shadow-xl">
                                                <item.icon className="h-5 w-5 text-secondary" />
                                            </div>
                                            <div>
                                                <h5 className="text-white font-bold text-xs mb-1 group-hover:text-secondary">{item.title}</h5>
                                                <p className="text-gray-500 text-[8px] uppercase tracking-widest font-bold opacity-60">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="mt-2 flex items-center gap-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button className="bg-secondary text-black hover:bg-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-2xl group flex items-center gap-4">
                                        Explore Full Fleet
                                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                    <div className="h-[1px] flex-grow bg-white/10" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Vehicle Carousel Section */}
            <section className="py-8 md:py-12 relative overflow-hidden bg-[#050505]">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="text-center mb-2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
                        >
                            FEATURED COLLECTION
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
                        >
                            The Aerosafe Experience
                        </motion.h2>
                    </div>

                    <div className="relative flex flex-col items-center justify-center">
                        <FleetCarousel vehicles={fleet} />
                    </div>
                </div>
            </section>

            {/* 4. DRIVEN BY COMFORT - REFINED LAYOUT */}
            <section className="comfort-section bg-[#050505] relative overflow-hidden py-4 md:py-8">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-end gap-16 lg:gap-32">
                        {/* Staggered Image Collage Stage */}
                        <div className="image-collage-stage flex gap-4 lg:w-1/2">
                            {/* Left Column */}
                            <div className="collage-col flex flex-col gap-4 flex-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="collage-item relative rounded-[2rem] overflow-hidden aspect-square bg-zinc-900 border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600"
                                        fill alt="Elite Interior"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="collage-item relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop"
                                        fill alt="Tesla White"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                            {/* Right Column (Staggered Down) */}
                            <div className="collage-col flex flex-col gap-4 flex-1 mt-4 lg:mt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="collage-item relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop"
                                        fill alt="Blue Range Rover"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="collage-item relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200"
                                        fill alt="BMW M8"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <span className="text-secondary font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Elite Advantage</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1] tracking-tighter">
                                Driven by Comfort. <br />
                                <span className="text-white italic opacity-80 underline decoration-secondary decoration-2 underline-offset-[8px]">Powered by Trust.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg border-l-2 border-secondary/20 pl-8">
                                At the heart of our service is a commitment to making every journey superior. We bridge the gap between simple transportation and immersive storytelling.
                            </p>

                            <div className="flex flex-col gap-6">
                                {[
                                    { icon: ShieldCheck, title: "Premium Service", desc: "Enjoy a smooth and effortless journey." },
                                    { icon: Users, title: "Client First", desc: "Support designed to meet your every need." },
                                    { icon: Zap, title: "Safety Standard", desc: "Highest tier safety protocols." }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="h-12 w-12 min-w-[48px] rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary/40 transition-all shadow-2xl">
                                            <feat.icon size={22} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{feat.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. POPULAR CARS - PREMIUM REDESIGN */}
            <section className="popular-section py-8 md:py-12 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 gap-8">
                        <div>
                            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.8em] mb-4 block">SIGNATURE COLLECTION</span>
                            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">Popular Fleet</h2>
                        </div>
                        <div className="md:text-right">
                            <p className="text-gray-500 max-w-sm ml-auto text-lg font-light leading-relaxed">
                                Explore our curated selection of high-performance vehicles and luxury yachts, tailored for the ultimate Dubai experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
                        {popularFleet.map((car, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* High-End Card Base */}
                                <div className="relative bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 p-8 hover:border-secondary/20 transition-all duration-700 h-full flex flex-col shadow-2xl">

                                    {/* Visual Stage */}
                                    <div className="relative aspect-[4/3] w-full mb-10 rounded-[2.5rem] overflow-hidden bg-black/40 group-hover:bg-black/60 transition-colors">
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            fill
                                            className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Floating Elite Badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="px-5 py-2 rounded-2xl bg-black/40 backdrop-blur-3xl border border-white/10 text-white text-[9px] font-black uppercase tracking-widest">
                                                {car.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Brand Identity */}
                                    <div className="px-4 flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-white text-2xl font-bold leading-tight group-hover:text-secondary transition-colors duration-300">
                                                {car.name}
                                            </h4>
                                            <div className="flex items-center gap-1.5 opacity-60">
                                                <Star size={14} className="fill-secondary text-secondary" />
                                                <span className="text-white text-[10px] font-black">{car.rating}</span>
                                            </div>
                                        </div>

                                        {/* Dynamic Specs Bar */}
                                        <div className="flex items-center gap-6 mb-10 opacity-30 group-hover:opacity-100 transition-opacity">
                                            <div className="flex items-center gap-2">
                                                <Users size={12} className="text-secondary" />
                                                <span className="text-white text-[10px] font-bold uppercase tracking-widest">{car.capacity.split(' ')[0]}</span>
                                            </div>
                                            <div className="h-1 w-1 rounded-full bg-white/20" />
                                            <div className="flex items-center gap-2">
                                                <Settings size={12} className="text-secondary" />
                                                <span className="text-white text-[10px] font-bold uppercase tracking-widest">Premium</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Luxe Footer */}
                                    <div className="mt-auto px-4 pt-8 border-t border-white/5 flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-1">Starting from</p>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-white text-3xl font-serif italic font-bold">AED {car.price}</span>
                                            </div>
                                        </div>

                                        <button className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-black group-hover:border-secondary transition-all duration-500 shadow-2xl group flex shrink-0">
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. HOW IT WORKS - FRESH REDESIGN */}
            <section className="py-8 md:py-12 relative overflow-hidden bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8/12">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-3 block"
                        >
                            THE PROCESS
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter"
                        >
                            How It Works
                        </motion.h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        {/* Process Left */}
                        <div className="flex flex-col gap-8 lg:w-1/4">
                            {[
                                { icon: ShieldCheck, title: "Select Service", desc: "Choose from our wide range of tailored luxury services." },
                                { icon: MapPin, title: "Timing & Detail", desc: "Pick your preferred timing and pickup point with ease." },
                                { icon: Car, title: "Select Fleet", desc: "Browse our extensive fleet and find your perfect match." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-4 lg:items-end lg:text-right group"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shadow-xl group-hover:border-secondary/40 transition-all duration-500">
                                        <step.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 uppercase tracking-wider">{step.title}</h4>
                                        <p className="text-gray-500 text-xs font-light leading-relaxed max-w-xs">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Visual */}
                        <div className="lg:w-2/4 flex justify-center relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/assets/kia.png"
                                    width={550} height={320}
                                    alt="Process Display"
                                    className="object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
                                />

                                {/* Ambient Glow behind car */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 blur-[120px] -z-10 rounded-full" />
                            </motion.div>
                        </div>

                        {/* Process Right */}
                        <div className="flex flex-col gap-8 lg:w-1/4">
                            {[
                                { icon: Zap, title: "Add Extras", desc: "Enhance your journey with our premium luxury addons." },
                                { icon: Phone, title: "Information", desc: "Provide minimal details to complete your profile safely." },
                                { icon: ShieldCheck, title: "Confirm", desc: "Secure your booking with instant confirmation." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (i + 3) * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-4 lg:items-start lg:text-left group"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shadow-xl group-hover:border-secondary/40 transition-all duration-500">
                                        <step.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 uppercase tracking-wider">{step.title}</h4>
                                        <p className="text-gray-500 text-xs font-light leading-relaxed max-w-xs">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
