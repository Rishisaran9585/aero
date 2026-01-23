"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Building2,
    Palmtree,
    Package,
    Globe,
    FileText,
    Car,
    Phone,
    ShieldCheck,
    MapPin,
    Clock,
    Users,
    Star,
    CheckCircle2
} from "lucide-react";
import CircularGallery from "@/components/CircularGallery";
import Testimonials from "@/components/Testimonials";

const services = [
    {
        icon: Building2,
        title: "Dubai City Tours",
        description: "Explore iconic landmarks including Burj Khalifa, Dubai Mall, and Palm Jumeirah with expert guides",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80",
        color: "from-amber-500/20 to-orange-500/20"
    },
    {
        icon: Palmtree,
        title: "Desert Safari Experiences",
        description: "Thrilling dune adventures, camel rides, and authentic Bedouin nights under the stars",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80",
        color: "from-yellow-500/20 to-amber-500/20"
    },
    {
        icon: Package,
        title: "UAE Holiday Packages",
        description: "Comprehensive tours across all emirates for families, couples, and groups",
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Globe,
        title: "International Tour Packages",
        description: "Curated global destinations: Maldives, Thailand, Singapore, Turkey, Europe & more",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: FileText,
        title: "Tourist Visa Assistance",
        description: "Fast and reliable visa processing for UAE and many international destinations",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        icon: Car,
        title: "Airport Transfers",
        description: "Own transport fleet with professional drivers for safe and comfortable travel",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        color: "from-red-500/20 to-rose-500/20"
    }
];

const popularDestinations = [
    { image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80", text: "Dubai" },
    { image: "https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=800&q=80", text: "Abu Dhabi" },
    { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80", text: "Maldives" },
    { image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", text: "Thailand" },
    { image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", text: "Singapore" },
    { image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80", text: "Turkey" },
    { image: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80", text: "Georgia" },
    { image: "https://images.unsplash.com/photo-1618331812910-001dd9a15c16?auto=format&fit=crop&w=800&q=80", text: "Azerbaijan" },
];

const whyChooseUs = [
    { icon: CheckCircle2, title: "Dubai-registered travel company", desc: "Fully licensed and locally operated" },
    { icon: MapPin, title: "UAE tourism specialists", desc: "Expert knowledge of local destinations" },
    { icon: Globe, title: "International tour arrangements", desc: "Global partnerships for seamless travel" },
    { icon: Car, title: "Own transport fleet in UAE", desc: "RTA approved, safe and reliable vehicles" },
    { icon: Star, title: "Transparent pricing", desc: "No hidden costs, premium value" },
    { icon: Users, title: "Local support team", desc: "Dedicated staff in Dubai for assistance" },
];

export default function HomePage() {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden pt-20">
            {/* HER0 SECTION: Reduced height, custom title styling, no search/categories */}
            <PageHeader
                title={
                    <span className="flex flex-col items-center">
                        <span className="font-bold uppercase tracking-tighter text-6xl md:text-[8rem] lg:text-[10rem]">DISCOVER</span>
                        <span className="font-script lowercase text-4xl md:text-8xl lg:text-9xl -mt-2 md:-mt-8 text-secondary">the UAE</span>
                    </span>
                }
                image="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=1920&q=80"
                showSearch={false}
                showCategories={false}
            />

            {/* OUR MAIN SERVICES: Innovative Layout (No Boxes) */}
            <section className="py-[120px] bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl text-left">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-secondary tracking-[0.4em] text-xs font-bold uppercase block mb-4"
                            >
                                Our Elite Services
                            </motion.span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1]">Our Main <br /> <span className="text-secondary italic">Services</span></h2>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-gray-500 max-w-xs mb-6 text-sm">Providing premium travel experiences since our inception, with local expertise and global reach.</p>
                            <div className="w-24 h-px bg-secondary ml-auto" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                <div className="relative overflow-hidden rounded-[2.8rem] bg-[#0c0c0c] border border-white/5 hover:border-secondary/20 transition-all duration-500 aspect-[5/6]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-black transition-all duration-500 shadow-2xl`}>
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                                            Discover Now <ArrowUpRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* POPULAR DESTINATIONS: Circular Gallery for Premium Look */}
            <section className="py-[120px] bg-[#050505] overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-4 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">International & UAE</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Popular Destinations</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-400">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-secondary font-bold uppercase text-[10px] tracking-widest">United Arab Emirates</span>
                                <p className="text-white/80 font-medium">Dubai • Abu Dhabi • Sharjah • Fujairah</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-secondary font-bold uppercase text-[10px] tracking-widest">Global Escapes</span>
                                <p className="text-white/80 font-medium">Maldives • Singapore • Thailand • Malaysia • Turkey • Europe</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative h-[600px] md:h-[800px] w-full px-4">
                    <CircularGallery
                        items={popularDestinations}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.08}
                        scrollEase={0.03}
                    />
                </div>
            </section>

            {/* WHY CHOOSE US: Redesigned with Icon-first grid */}
            <section className="py-[140px] bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                    <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary tracking-[0.5em] text-xs font-bold uppercase block mb-4"
                        >
                            The Aerosafe Advantage
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold">Why Choose <span className="text-secondary italic">Aerosafe?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 max-w-6xl mx-auto">
                        {whyChooseUs.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-[2rem] bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-8 group-hover:border-secondary transition-all duration-500 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-[2rem] transition-colors" />
                                    <feature.icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter whitespace-nowrap">{feature.title}</h3>
                                <div className="w-12 h-px bg-white/10 mb-5 group-hover:w-24 transition-all duration-500" />
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS: Fixed and Premium */}
            <Testimonials />

            {/* CTA SECTION: Premium Wide Section */}
            <section className="py-[120px] relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80"
                        alt="Desert Safari"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary tracking-[0.4em] text-xs font-bold uppercase block mb-6">Ready to Experience?</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-[1.1]">
                                Your Journey <br />
                                <span className="text-secondary italic">Begins Here</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-12 leading-relaxed font-light">
                                From the glittering skylines to the golden dunes, let us show you the heart of the UAE. Personalized, professional, and peerless service.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-secondary text-black hover:bg-secondary/90 px-12 py-8 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl shadow-secondary/20 group/btn">
                                    Explore Packages
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Button>
                                <Button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm px-12 py-8 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary" />
                                    WhatsApp Now
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
