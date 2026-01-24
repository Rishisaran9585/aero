"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
    explore: [
        { name: "Home", href: "/" },
        { name: "Packages", href: "/packages" },
        { name: "Fleet", href: "/fleet" },
        { name: "Visa", href: "/visa" },
        { name: "Hotels", href: "/hotels" },
    ],
    experience: [
        { name: "Tours", href: "/tours" },
        { name: "Safari", href: "/safari" },
        { name: "Dining", href: "/dining" },
        { name: "About us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Terms of service", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Cookie policy", href: "#" },
    ]
};

export default function Footer() {
    return (
        <section className="bg-transparent pt-10">
            <div className="w-full px-4 md:px-12 relative">
                {/* Floating Banner */}
                <div className="relative z-20 -mb-16">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="card-glass rounded-[2.5rem] overflow-hidden relative flex items-center min-h-[280px] md:min-h-[340px] shadow-2xl"
                    >
                        {/* Text Content */}
                        <div className="relative z-10 w-full md:w-3/5 p-8 md:p-14">
                            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 leading-[1.1] tracking-tight">
                                Experience superior <br />
                                bespoke travel
                            </h2>
                            <p className="text-gray-400 text-base mb-8 font-light tracking-wide opacity-80">
                                150+ exclusive destinations per season.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-black px-10 py-3.5 rounded-xl font-bold text-sm tracking-tight hover:bg-secondary transition-all duration-300 transform hover:scale-105"
                            >
                                Get started
                            </Link>
                        </div>

                        {/* Globe Image */}
                        <div className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 pointer-events-none overflow-hidden">
                            <div className="relative w-full h-full scale-[1.15] translate-x-1/8">
                                <Image
                                    src="/assets/footer-globe.png"
                                    alt="Global Network"
                                    fill
                                    className="object-contain opacity-70 brightness-110 mix-blend-lighten"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Footer Section */}
                <div className="bg-transparent rounded-[2.5rem] pt-32 pb-6 px-10 md:px-20 mb-6 border-t border-white/[0.02]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12">
                        {/* Left Side: Logo & Info */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 -ml-2">
                                    <Link href="/" className="inline-block">
                                        <div className="relative h-8 w-32 md:h-12 md:w-48 transition-transform duration-500 hover:scale-105">
                                            <Image
                                                src="/assets/att.png"
                                                alt="Aerosafe Logo"
                                                fill
                                                className="object-contain object-left brightness-0 invert"
                                            />
                                        </div>
                                    </Link>
                                    <div className="w-px h-5 bg-white/20"></div>
                                    <Link href="https://firstdreamdestinations.com/" target="_blank" className="inline-block">
                                        <div className="relative h-6 w-24 md:h-10 md:w-40 transition-transform duration-500 hover:scale-105">
                                            <Image
                                                src="/first-dream-logo.png"
                                                alt="First Dream Destinations Logo"
                                                fill
                                                className="object-contain object-left brightness-0 invert"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="text-gray-400 text-sm leading-relaxed max-w-lg space-y-1 font-light opacity-50">
                                    <p>
                                        Aerosafe Travel & Tourism L.L.C is your trusted partner for seamless travel experiences. From bespoke tours to luxury packages, we craft journeys that redefine comfort and adventure.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info Grid */}
                            <div className="flex flex-wrap gap-10 md:gap-20">
                                <div className="space-y-3">
                                    <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Phone number</h4>
                                    <p className="text-white text-base font-medium tracking-tight hover:text-secondary transition-colors cursor-pointer">+971 4 123 4567</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Email</h4>
                                    <p className="text-white text-base font-medium tracking-tight border-b border-white/20 pb-0.5 hover:text-secondary transition-colors cursor-pointer">info@aerosafe.ae</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Columns */}
                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                <div>
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Quick links</h3>
                                    <ul className="space-y-4">
                                        {footerLinks.explore.map((link) => (
                                            <li key={link.name}>
                                                <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors font-light">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Experience</h3>
                                    <ul className="space-y-4">
                                        {footerLinks.experience.map((link) => (
                                            <li key={link.name}>
                                                <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors font-light">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Legal</h3>
                                    <ul className="space-y-4">
                                        {footerLinks.legal.map((link) => (
                                            <li key={link.name}>
                                                <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors font-light">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Our Offices Section */}
                    <div className="pt-8 pb-8 mb-10">
                        {/* Section Header */}
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="h-px w-24 md:w-32 bg-white/10"></div>
                            <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Our Offices</span>
                            <div className="h-px w-24 md:w-32 bg-white/10"></div>
                        </div>

                        {/* Offices Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
                            {/* Dubai HQ */}
                            <div className="space-y-6 md:pl-10 border-l border-white/5 md:border-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    <h4 className="text-secondary text-lg font-medium tracking-wide">Dubai HQ</h4>
                                </div>
                                <div className="space-y-1 pl-8">
                                    <p className="text-gray-400 text-sm font-light">Auto Center Building</p>
                                    <p className="text-gray-400 text-sm font-light">Office A102, 22A St</p>
                                    <p className="text-gray-400 text-sm font-light">Port Saeed, Dubai – UAE</p>
                                </div>
                            </div>

                            {/* Chennai Office */}
                            <div className="space-y-6 md:border-l border-white/10 md:pl-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    <h4 className="text-secondary text-lg font-medium tracking-wide">Chennai Office</h4>
                                </div>
                                <div className="space-y-1 pl-8">
                                    <p className="text-gray-400 text-sm font-light">Plot No. 145-A</p>
                                    <p className="text-gray-400 text-sm font-light">Alapakkam Block, VI St</p>
                                    <p className="text-gray-400 text-sm font-light">Chennai – 600116, India</p>
                                </div>
                            </div>

                            {/* Trivandrum Office */}
                            <div className="space-y-6 md:border-l border-white/10 md:pl-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    <h4 className="text-secondary text-lg font-medium tracking-wide">Trivandrum Office</h4>
                                </div>
                                <div className="space-y-1 pl-8">
                                    <p className="text-gray-400 text-sm font-light whitespace-nowrap">TC49/103(2) HASNA, Navachethana Lane,</p>
                                    <p className="text-gray-400 text-sm font-light whitespace-nowrap">Old Karakkamandapam, Memom P.O.,</p>
                                    <p className="text-gray-400 text-sm font-light whitespace-nowrap">Trivandrum, Kerala, India – 695020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-light">
                            &copy; {new Date().getFullYear()} Aerosafe Travel & Tourism L.L.C. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
