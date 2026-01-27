"use client";

import InternalHero from "@/components/InternalHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Globe, ChevronRight, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const locations = [
    {
        id: "dubai",
        city: "DUBAI",
        type: "HEADQUARTERS",
        line1: "Auto Center Building",
        line2: "Office A102, 22A St",
        line3: "Port Saeed, Dubai – UAE",
        phone: "+971 50 123 4567",
        email: "dubai@aerosafe.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.256247967919!2d55.2707828!3d25.1923178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
    },
    {
        id: "chennai",
        city: "CHENNAI",
        type: "INDIA OFFICE",
        line1: "Plot No. 145-A",
        line2: "Alapakkam Block, VI St",
        line3: "Chennai – 600116, India",
        phone: "+91 98765 43210",
        email: "chennai@aerosafe.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675376326!2d80.0689242!3d13.0474878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000001!5m2!1sen!2sin"
    },
    {
        id: "trivandrum",
        city: "TRIVANDRUM",
        type: "INDIA OFFICE",
        line1: "TC49/103(2) HASNA, Navachethana Lane",
        line2: "Old Karakkamandapam, Memom P.O.",
        line3: "Trivandrum, Kerala, India – 695020",
        phone: "+91 98765 43211",
        email: "trivandrum@aerosafe.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126264.40578848713!2d76.8837654!3d8.5069726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1650000000002!5m2!1sen!2sin"
    }
];

export default function ContactPage() {
    const [activeLocation, setActiveLocation] = useState(locations[0]);

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="snap-start">
                <InternalHero
                    title="CONTACT"
                    subtitle="let's connect"
                    image="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=crop&w=1920&q=80"
                />
            </div>

            {/* Main Contact Section */}
            <section className="snap-start snap-always w-full relative flex flex-col pt-20 pb-4 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
                        {/* Left Side: Typography */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-start pt-0"
                        >
                            <div className="relative z-10 inline-block pointer-events-none select-none">
                                <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-serif font-medium tracking-tight text-white relative z-10">
                                    <span className="block">LET&apos;S</span>
                                    <span className="block ml-16 md:ml-32 lg:ml-40 whitespace-nowrap">GET IN</span>
                                    <span className="block">TOUCH</span>
                                </h1>
                                {/* Graphic Element from Image: Solid Circle + Semicircle line */}
                                <div className="hidden lg:block absolute -top-4 right-0 w-24 h-24 z-0">
                                    <div className="absolute top-0 right-6 w-12 h-12 bg-[#F3F1E6] rounded-full" /> {/* Solid off-white circle */}
                                    <div className="absolute top-6 right-0 w-24 h-24 border border-white/40 rounded-full clip-path-semicircle transform rotate-45" /> {/* Thin stroke arc */}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 block ml-1">Full Name *</label>
                                        <Input
                                            className="bg-white/5 border border-white/10 text-white h-12 rounded-sm px-4 focus:border-secondary transition-colors placeholder:hidden text-lg font-light"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 block ml-1">Phone *</label>
                                        <Input
                                            className="bg-white/5 border border-white/10 text-white h-12 rounded-sm px-4 focus:border-secondary transition-colors placeholder:hidden text-lg font-light"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 block ml-1">Email *</label>
                                    <Input
                                        type="email"
                                        className="bg-white/5 border border-white/10 text-white h-12 rounded-sm px-4 focus:border-secondary transition-colors placeholder:hidden text-lg font-light"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 block ml-1">Message *</label>
                                    <Textarea
                                        className="min-h-[120px] bg-white/5 border border-white/10 text-white rounded-sm px-4 py-3 focus:border-secondary transition-colors resize-none placeholder:hidden text-lg font-light"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold tracking-widest rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-4 group"
                                    >
                                        SEND MESSAGE
                                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Find Us Section - Interactive Map */}
            <section className="snap-start snap-always w-full relative flex flex-col py-10 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-2 block">Our Locations</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Find Us Globally</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-center mb-10">
                        {/* Map Container - Dynamic Update */}
                        <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden">
                            <iframe
                                key={activeLocation.id} // Key change forces reload on state change
                                src={activeLocation.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                            />
                        </div>

                        {/* Locations List - Clean & Interactive - No Boxes */}
                        <div className="flex flex-col p-8 lg:p-12 justify-center">
                            <div className="space-y-6">
                                {locations.map((loc) => (
                                    <div
                                        key={loc.id}
                                        onClick={() => setActiveLocation(loc)}
                                        className="group cursor-pointer py-4 border-b border-white/10 last:border-0"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className={`text-2xl font-serif font-bold transition-colors duration-300 ${activeLocation.id === loc.id ? "text-secondary" : "text-gray-400 group-hover:text-white"
                                                }`}>
                                                {loc.city}
                                            </h3>
                                            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeLocation.id === loc.id ? "text-secondary rotate-90" : "text-gray-600 group-hover:text-white"
                                                }`} />
                                        </div>

                                        <div className={`overflow-hidden transition-all duration-500 ${activeLocation.id === loc.id ? "max-h-52 opacity-100 mt-4" : "max-h-0 opacity-0"
                                            }`}>
                                            <div className="space-y-3 text-gray-400 font-light text-sm pl-4 border-l border-white/10">
                                                <div className="flex items-start gap-3">
                                                    <MapPin className="w-4 h-4 text-secondary mt-1 shrink-0" />
                                                    <div className="text-white">
                                                        <p>{loc.line1}</p>
                                                        <p>{loc.line2}</p>
                                                        <p>{loc.line3}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* New Contact Details Section (Cards) - REDESIGNED */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Call Card */}
                            <a href="tel:+917736234692" className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex items-center gap-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary transition-colors">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Call India Office</p>
                                        <p className="text-white text-lg font-bold group-hover:text-secondary transition-colors">+91 77362 34692</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </a>

                            {/* WhatsApp Card */}
                            <a href="https://wa.me/971553550933" target="_blank" rel="noopener noreferrer" className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex items-center gap-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary transition-colors">
                                        <MessageSquare className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">WhatsApp UAE</p>
                                        <p className="text-white text-lg font-bold group-hover:text-secondary transition-colors">+971 55 355 0933</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </a>

                            {/* Email Card */}
                            <a href="mailto:info@aerosafe.com" className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex items-center gap-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary transition-colors">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Email Us</p>
                                        <p className="text-white text-lg font-bold group-hover:text-secondary transition-colors">info@aerosafe.com</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </a>
                        </div>

                        {/* Office Hours & Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Office Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-secondary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white">Office Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                                        <span className="text-gray-400 tracking-widest uppercase text-xs">UAE Office</span>
                                        <span className="text-white font-bold">Sun-Thu: 9AM-6PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400 tracking-widest uppercase text-xs">India Office</span>
                                        <span className="text-white font-bold">Mon-Sat: 9:30AM-7PM</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-4xl font-serif font-bold text-black mb-2 relative z-10">24H</h3>
                                    <p className="text-black/60 text-xs tracking-widest uppercase relative z-10 font-bold">Response Time</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden"
                                >
                                    <h3 className="text-4xl font-serif font-bold text-secondary mb-2">100%</h3>
                                    <p className="text-gray-500 text-xs tracking-widest uppercase font-bold">Satisfaction</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
