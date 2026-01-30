"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
    explore: [
        { name: "Home", href: "/" },
        { name: "Packages", href: "/package1" },
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
        <section className="bg-transparent pt-6">
            <div className="w-full px-4 md:px-12 relative">
                {/* Floating Banner */}
                <div className="relative z-20 -mb-16">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="card-glass rounded-[2.5rem] overflow-hidden relative flex items-center min-h-[240px] md:min-h-[280px] shadow-2xl"
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
                        {/* Watermark */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none w-full flex justify-center">
                            <h1 className="text-[4rem] md:text-[7rem] lg:text-[10rem] font-black text-white/[0.03] tracking-tightest whitespace-nowrap text-center">
                                AEROSAFE
                            </h1>
                        </div>
                    </motion.div>
                </div>

                {/* Main Footer Section */}
                <div className="bg-transparent rounded-[2.5rem] pt-20 pb-4 px-10 md:px-20 mb-4 border-t border-white/[0.02]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-8">
                        {/* Left Side: Logo & Info */}
                        <div className="lg:col-span-5 space-y-6">
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
                            <div className="flex flex-wrap gap-8 md:gap-12">
                                <div className="space-y-3">
                                    <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Phone number</h4>
                                    <a href="tel:+971553550933" className="block text-white text-base font-medium tracking-tight hover:text-secondary transition-colors cursor-pointer">+971 55 355 0933</a>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Email</h4>
                                    <a href="mailto:info@aerosafe.com" className="block text-white text-base font-medium tracking-tight border-b border-white/20 pb-0.5 hover:text-secondary transition-colors cursor-pointer">info@aerosafe.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Columns */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-8">
                                <div>
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Quick links</h3>
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
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Experience</h3>
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
                                    <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Legal</h3>
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
                                <div>
                                    <h3 className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">Headquarters</h3>
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex items-start gap-3 md:gap-4 justify-start">
                                            <MapPin className="w-5 h-5 md:w-8 md:h-8 text-secondary mt-1 shrink-0" />
                                            <h4 className="text-[1.25rem] sm:text-2xl md:text-3xl font-serif font-bold text-white leading-tight whitespace-nowrap">Dubai HQ</h4>
                                        </div>

                                        <div className="space-y-1 pl-1 text-gray-400 text-sm font-light leading-relaxed">
                                            <p>Auto Center Building</p>
                                            <p>Office A102, 22A St</p>
                                            <p>Port Saeed, Dubai</p>
                                        </div>

                                        <div className="pl-1 pt-2">
                                            <a
                                                href="https://maps.google.com"
                                                target="_blank"
                                                className="inline-block text-[10px] font-bold uppercase tracking-wider text-secondary border-b border-secondary/40 pb-1 hover:text-white hover:border-white transition-all hover:pl-2"
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Branch Offices Section */}
                    <div className="pt-4 pb-4 mb-4">
                        {/* Section Header */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px flex-1 bg-white/10 max-w-[100px]"></div>
                            <span className="text-gray-600 text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Branch Offices</span>
                            <div className="h-px flex-1 bg-white/10 max-w-[100px]"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {/* Branch Offices Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                                {/* Chennai */}
                                <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-black transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h5 className="text-xl font-bold text-white mb-4">Chennai, India</h5>
                                    <div className="space-y-1 text-gray-400 text-sm font-light leading-relaxed">
                                        <p>Plot No. 145-A</p>
                                        <p>Alapakkam Block, VI St</p>
                                        <p>Chennai – 600116</p>
                                    </div>
                                </div>

                                {/* Trivandrum */}
                                <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-black transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h5 className="text-xl font-bold text-white mb-4">Trivandrum, India</h5>
                                    <div className="space-y-1 text-gray-400 text-sm font-light leading-relaxed">
                                        <p>TC49/103(2) HASNA</p>
                                        <p>Old Karakkamandapam</p>
                                        <p>Trivandrum – 695020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="text-center pt-6 border-t border-white/5">
                        <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-light">
                            &copy; {new Date().getFullYear()} Aerosafe Travel & Tourism L.L.C. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
