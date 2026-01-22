"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <section className="bg-black pt-10">
            <div className="w-full px-4 md:px-12 relative">
                {/* Floating Banner */}
                <div className="relative z-20 -mb-24">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden relative flex items-center min-h-[280px] md:min-h-[340px] shadow-2xl border border-white/5"
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
                <div className="bg-black rounded-[2.5rem] pt-40 pb-10 px-10 md:px-20 mb-6 border-t border-white/[0.02]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12">
                        {/* Left Side: Logo & Info */}
                        <div className="lg:col-span-6 space-y-10">
                            <div className="space-y-8">
                                <div className="flex items-center gap-8 -ml-2">
                                    <Link href="/" className="inline-block">
                                        <div className="relative h-10 w-36 md:h-14 md:w-48 transition-transform duration-500 hover:scale-105">
                                            <Image
                                                src="/assets/logo-new.png"
                                                alt="Aerosafe Logo"
                                                fill
                                                className="object-contain object-left brightness-0 invert"
                                            />
                                        </div>
                                    </Link>
                                    <div className="w-px h-8 bg-white/20"></div>
                                    <Link href="https://firstdreamdestinations.com/" target="_blank" className="inline-block ml-8">
                                        <div className="relative h-10 w-32 md:h-12 md:w-40 transition-transform duration-500 hover:scale-105">
                                            <Image
                                                src="/first-dream-logo.png"
                                                alt="First Dream Destinations Logo"
                                                fill
                                                className="object-contain object-left"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="text-gray-400 text-sm leading-relaxed max-w-sm space-y-1 font-light opacity-50">
                                    <p>Business Bay, Vision Tower,</p>
                                    <p>Suite 1502, Dubai, UAE</p>
                                    <p>United Arab Emirates</p>
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
