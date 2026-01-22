"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="CONTACT"
                scriptText="let's connect"
                image="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Hero Content Section */}
            <section className="py-[30px] container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-6 inline-block">Connect With Us</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]">
                        Let's Create Your
                        <span className="text-secondary"> Dream Journey</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
                        Our travel experts are ready to craft your perfect Dubai experience.
                        Reach out and let's turn your travel dreams into reality.
                    </p>
                </motion.div>
            </section>

            {/* Main Contact Section */}
            <section className="py-5 bg-gradient-to-b from-transparent to-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                                        <MessageSquare className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                                        <p className="text-gray-400">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                                            <Input
                                                placeholder="John Doe"
                                                className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-secondary focus:ring-0 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                            <Input
                                                placeholder="john@example.com"
                                                type="email"
                                                className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-secondary focus:ring-0 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                                            <Input
                                                placeholder="+971 50 000 0000"
                                                className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-secondary focus:ring-0 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Subject</label>
                                            <Input
                                                placeholder="Holiday Enquiry"
                                                className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-secondary focus:ring-0 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                                        <Textarea
                                            placeholder="Tell us about your travel plans..."
                                            className="min-h-[140px] bg-white/5 border-white/10 text-white rounded-xl focus:border-secondary focus:ring-0 transition-all resize-none"
                                        />
                                    </div>
                                    <Button
                                        size="lg"
                                        className="w-full h-14 bg-secondary text-black hover:bg-white font-bold tracking-widest uppercase rounded-xl transition-all hover:scale-[1.02] flex items-center gap-3"
                                    >
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {/* Primary Contact */}
                            <div className="bg-gradient-to-b from-secondary/10 to-transparent border border-secondary/30 rounded-3xl p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Call Us</h3>
                                </div>
                                <p className="text-white text-xl font-bold mb-2">+971 50 123 4567</p>
                                <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                            </div>

                            {/* Email Contact */}
                            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Email Us</h3>
                                </div>
                                <p className="text-white text-lg mb-2">info@aerosafe.com</p>
                                <p className="text-gray-400 text-sm">support@aerosafe.com</p>
                            </div>

                            {/* Office Locations */}
                            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Visit Us</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-white font-bold mb-1">Dubai (HQ)</p>
                                        <p className="text-gray-400 text-sm">Business Bay, Dubai, UAE</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold mb-1">Chennai</p>
                                        <p className="text-gray-400 text-sm">T. Nagar, Chennai, India</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold mb-1">Trivandrum</p>
                                        <p className="text-gray-400 text-sm">Pettah, Trivandrum, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-5 bg-gradient-to-b from-transparent to-white/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Find Us</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Visit Our Locations</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Experience our world-class service at any of our strategic locations across the UAE and India.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Map Container */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative h-[630px] rounded-3xl overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115538.123456789!2d55.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjAiTiA1NcKwNDMnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-3xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                                {/* Map Markers Overlay */}
                                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 pointer-events-none">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-4 h-4 bg-secondary rounded-full"
                                    />
                                    <div className="w-8 h-8 bg-secondary/30 rounded-full absolute -inset-2 animate-ping" />
                                </div>

                                <div className="absolute top-1/2 left-1/3 pointer-events-none">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                        className="w-3 h-3 bg-primary rounded-full"
                                    />
                                    <div className="w-6 h-6 bg-primary/30 rounded-full absolute -inset-1.5 animate-ping" />
                                </div>

                                <div className="absolute top-2/3 left-2/3 pointer-events-none">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        className="w-3 h-3 bg-primary rounded-full"
                                    />
                                    <div className="w-6 h-6 bg-primary/30 rounded-full absolute -inset-1.5 animate-ping" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Location Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {[
                                {
                                    title: "Dubai Headquarters",
                                    address: "Business Bay, Dubai, UAE",
                                    phone: "+971 50 123 4567",
                                    email: "dubai@aerosafe.com",
                                    hours: "Mon - Sat: 9:00 AM - 8:00 PM",
                                    primary: true,
                                    icon: Globe
                                },
                                {
                                    title: "Chennai Office",
                                    address: "T. Nagar, Chennai, India",
                                    phone: "+91 98765 43210",
                                    email: "chennai@aerosafe.com",
                                    hours: "Mon - Fri: 10:00 AM - 6:00 PM",
                                    primary: false,
                                    icon: MapPin
                                },
                                {
                                    title: "Trivandrum Office",
                                    address: "Pettah, Trivandrum, India",
                                    phone: "+91 98765 43211",
                                    email: "trivandrum@aerosafe.com",
                                    hours: "Mon - Fri: 10:00 AM - 6:00 PM",
                                    primary: false,
                                    icon: MapPin
                                }
                            ].map((location, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${location.primary
                                        ? 'bg-gradient-to-b from-secondary/10 to-transparent border-secondary/30'
                                        : 'bg-gradient-to-b from-white/5 to-transparent border-white/10'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${location.primary ? 'bg-secondary/20' : 'bg-white/10'
                                            }`}>
                                            <location.icon className={`h-6 w-6 ${location.primary ? 'text-secondary' : 'text-secondary'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-bold text-white mb-2 ${location.primary ? 'text-secondary' : ''}`}>
                                                {location.title}
                                            </h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{location.address}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Phone className="h-4 w-4" />
                                                    <span>{location.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Mail className="h-4 w-4" />
                                                    <span>{location.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{location.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Network Section - Redesigned */}
            <section className="py-5 bg-gradient-to-b from-transparent to-white/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Global Network</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Connected Worldwide</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Our strategic locations ensure seamless service delivery across continents, connecting travelers to extraordinary experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                region: "Middle East",
                                countries: "UAE, Saudi Arabia, Qatar",
                                offices: "5 Offices",
                                icon: "🌍"
                            },
                            {
                                region: "South Asia",
                                countries: "India, Sri Lanka, Maldives",
                                offices: "8 Offices",
                                icon: "🕌"
                            },
                            {
                                region: "Southeast Asia",
                                countries: "Thailand, Singapore, Malaysia",
                                offices: "4 Offices",
                                icon: "🏝️"
                            },
                            {
                                region: "Europe",
                                countries: "UK, France, Germany",
                                offices: "3 Offices",
                                icon: "🏰"
                            }
                        ].map((region, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="h-full p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:border-secondary/30 text-center">
                                    <div className="text-4xl mb-4">{region.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{region.region}</h3>
                                    <p className="text-gray-400 text-sm mb-2">{region.countries}</p>
                                    <p className="text-secondary font-bold">{region.offices}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-full">
                            <Navigation className="h-5 w-5 text-secondary" />
                            <span className="text-white font-bold">Serving 50+ Countries Worldwide</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
