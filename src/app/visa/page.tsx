"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Clock, Globe, Shield, CreditCard, MessageCircle, ArrowUpRight, MapPin, Zap, Award, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const visaTypes = [
    { 
        name: "30 Days", 
        price: "AED 350",
        desc: "Single entry visa for tourism",
        icon: Globe
    },
    { 
        name: "60 Days", 
        price: "AED 600",
        desc: "Extended family visits",
        icon: Users
    },
    { 
        name: "90 Days", 
        price: "AED 900",
        desc: "Long-term visitor stays",
        icon: Award
    },
    { 
        name: "Multiple Entry", 
        price: "Call Us",
        desc: "Business travel solution",
        icon: Zap
    },
];

const features = [
    { icon: Clock, title: "24-48 Hour Processing", desc: "Fast turnaround with guaranteed quality" },
    { icon: Shield, title: "100% Secure", desc: "Safe document handling and privacy" },
    { icon: Globe, title: "Complete Coverage", desc: "All visa types and categories" },
];

export default function VisaPage() {
    const [selectedVisa, setSelectedVisa] = useState(0);

    return (
        <div className="bg-black text-white">
            <PageHeader
                title="Visa Assistance"
                subtitle="Seamless entry into the UAE. We handle the paperwork so you can focus on the journey."
                image="/assets/visa.jpg"
                highlight="Smooth Entry"
                isLarge={true}
            />

            {/* Section: Why Choose Us - Timeline Style */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    {/* Section Heading */}
                    <div className="flex items-center gap-4 mb-20 justify-center">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h2 className="text-3xl tracking-[0.2em] font-light uppercase text-white/90">Why Choose Us</h2>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left Text */}
                        <div className="lg:w-1/3 relative">
                            <div className="absolute -left-12 -top-6 text-8xl font-bold text-white/5 font-sans select-none pointer-events-none">
                                01
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-[1.1] text-white">
                                    We've perfected <br />
                                    <span className="text-secondary italic">hassle-free</span> visa <br />
                                    processing.
                                </h3>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                                    With over a decade of experience, we've streamlined the visa application process to be as simple and stress-free as possible.
                                </p>
                                <Button variant="link" className="text-secondary hover:text-white text-sm font-bold tracking-[0.2em] uppercase group px-0">
                                    Learn More <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Features Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, i) => {
                                const IconComponent = feature.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all"
                                    >
                                        <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                        <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Visa Types - Card Selection */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-4 mb-8"
                        >
                            <div className="h-[1px] w-12 bg-white/20" />
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Choose Your Path</span>
                            <div className="h-[1px] w-12 bg-white/20" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
                        >
                            Visa Options
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {visaTypes.map((visa, i) => {
                            const IconComponent = visa.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onMouseEnter={() => setSelectedVisa(i)}
                                    className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                                        selectedVisa === i
                                            ? 'bg-white/10 border-secondary/80 shadow-2xl shadow-secondary/20'
                                            : 'bg-white/5 border-white/10 hover:bg-white/[7%]'
                                    }`}
                                >
                                    {/* Decorative Top Line */}
                                    <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${selectedVisa === i ? 'opacity-100 via-secondary' : ''}`} />

                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                                        selectedVisa === i
                                            ? 'bg-secondary/30 border border-secondary/50'
                                            : 'bg-white/5 border border-white/10'
                                    }`}>
                                        <IconComponent className={`h-6 w-6 transition-colors duration-500 ${selectedVisa === i ? 'text-secondary' : 'text-white/60'}`} />
                                    </div>

                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{visa.name}</h3>
                                    <p className={`text-sm mb-6 font-light transition-colors duration-500 ${selectedVisa === i ? 'text-gray-300' : 'text-gray-400'}`}>
                                        {visa.desc}
                                    </p>

                                    <div className="flex items-baseline justify-between">
                                        <span className={`text-2xl font-bold transition-colors duration-500 ${selectedVisa === i ? 'text-secondary' : 'text-white'}`}>
                                            {visa.price}
                                        </span>
                                        <ArrowUpRight className={`h-4 w-4 transition-all duration-500 ${selectedVisa === i ? 'text-secondary translate-x-1 -translate-y-1' : 'text-white/40'}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section: How It Works */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 mb-20">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h2 className="text-3xl tracking-[0.2em] font-light uppercase text-white/90">Process</h2>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "Submit", desc: "Send documents via WhatsApp or Email. We verify instantly." },
                            { step: "02", title: "Process", desc: "Payment confirmed. Application submitted to immigration." },
                            { step: "03", title: "Approved", desc: "Visa approved within 24-48 hours. Delivered digitally." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center relative group"
                            >
                                {/* Step Circle */}
                                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/50 mb-8 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl font-bold text-secondary">{item.step}</span>
                                </div>

                                {/* Connector Line (Hidden on Mobile) */}
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-20 h-[1px] bg-gradient-to-r from-secondary/50 to-transparent" />
                                )}

                                <h3 className="text-2xl font-serif font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section: Documents Required */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 mb-20">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h2 className="text-3xl tracking-[0.2em] font-light uppercase text-white/90">Documents</h2>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: FileText, title: "Passport Copy", desc: "Valid for 6+ months" },
                            { icon: FileText, title: "Photo", desc: "Recent color photo" },
                            { icon: Shield, title: "Insurance", desc: "Travel insurance" },
                            { icon: CreditCard, title: "Payment", desc: "Secure payment link" }
                        ].map((doc, i) => {
                            const IconComponent = doc.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[7%] hover:border-secondary/50 transition-all group text-center"
                                >
                                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{doc.title}</h4>
                                    <p className="text-sm text-gray-400 font-light">{doc.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section: FAQ */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 mb-20">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h2 className="text-3xl tracking-[0.2em] font-light uppercase text-white/90">FAQ</h2>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="1" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-secondary py-6">
                                    How long does approval take?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 font-light pb-6">
                                    Standard processing takes 24-48 hours after document verification. Express options available.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="2" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-secondary py-6">
                                    Can I extend my visa?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 font-light pb-6">
                                    Yes, most tourist visas are extendable for an additional 30 days without exiting UAE.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-secondary py-6">
                                    What payment methods are accepted?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 font-light pb-6">
                                    We accept credit cards, debit cards, bank transfers, and digital wallets. Secure payment gateway guaranteed.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-secondary text-xs uppercase tracking-[0.3em] font-light mb-4">Visual Journey</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Experience UAE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=500&q=80", title: "Iconic Landmarks" },
                            { img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=500&q=80", title: "Palm Jumeirah" },
                            { img: "https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=500&q=80", title: "Sheikh Zayed Mosque" },
                            { img: "https://images.unsplash.com/photo-1618331812910-001dd9a15c16?auto=format&fit=crop&w=500&q=80", title: "Modern Architecture" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-serif text-xl font-bold">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            Ready for Your <br />
                            <span className="text-secondary italic">Journey?</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
                            Apply now and get your visa within 24-48 hours. Our dedicated team is here to help.
                        </p>
                        <Button className="bg-secondary text-black hover:bg-secondary/90 px-12 py-6 rounded-xl font-bold text-base uppercase tracking-widest">
                            Apply Now
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
