"use client";

import { motion } from "framer-motion";
import { Egg, Beef, Bird } from "lucide-react";
import Image from "next/image";

export default function DeliverySection() {
    return (
        <section className="bg-black py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-24 tracking-tighter text-white uppercase flex items-center gap-2"
                >
                    D<span className="relative inline-block">O<span className="absolute -bottom-1 left-0 right-0 h-1 bg-white" /></span>STAVKA
                    <span className="text-gray-600 text-lg font-light tracking-widest ml-4">/ DELIVERY</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative">
                    {/* Left Side: Time Slots (Col 1-4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-between p-6 border border-white/10 rounded-sm bg-transparent hover:border-white/20 transition-all group lg:w-[320px]"
                        >
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium text-gray-200">Breakfast</h3>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Weekdays until 12:00</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Weekends until 15:00</p>
                            </div>
                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                <Egg size={24} strokeWidth={1.5} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-between p-6 border border-white/30 rounded-sm bg-white/5 transition-all group lg:w-[320px] relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                                    Lunch <span className="text-secondary">→</span>
                                </h3>
                                <p className="text-gray-400 text-[10px] uppercase tracking-widest">From 12:00 to 17:00</p>
                            </div>
                            <div className="text-gray-200">
                                <Beef size={24} strokeWidth={1.5} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-between p-6 border border-white/10 rounded-sm bg-transparent hover:border-white/20 transition-all group lg:w-[320px]"
                        >
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium text-gray-200">Dinner</h3>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Every evening</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">From 17:00 to 22:00</p>
                            </div>
                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                <Bird size={24} strokeWidth={1.5} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Center: Main Image (Col 5-8) */}
                    <div className="lg:col-span-4 relative order-1 lg:order-2 flex justify-center py-20 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative w-80 h-80 md:w-[480px] md:h-[480px] z-10"
                        >
                            {/* Decorative circular lines to match image */}
                            <div className="absolute inset-[-40px] rounded-full border border-white/5" />
                            <div className="absolute inset-[-80px] rounded-full border border-white/5 opacity-40" />

                            {/* Orbital Dots */}
                            {[0, 150, 210, 330].map((degree, idx) => (
                                <div
                                    key={idx}
                                    className="absolute w-2 h-2 rounded-full border border-white/40 bg-black z-20"
                                    style={{
                                        top: `${50 + 50 * Math.sin(degree * Math.PI / 180)}%`,
                                        left: `${50 + 50 * Math.cos(degree * Math.PI / 180)}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                />
                            ))}

                            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] scale-90 md:scale-100">
                                <Image
                                    src="/assets/gourmet-steak.png"
                                    alt="Premium Grilled Meat"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Process Steps (Col 9-12) */}
                    <div className="lg:col-span-4 flex flex-col gap-12 order-3 lg:pl-12 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-3 relative group"
                        >
                            <h4 className="text-xl font-bold text-white tracking-tight">Place Order</h4>
                            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                                Minimum order value for our premium service is AED 250.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-3 relative group"
                        >
                            <h4 className="text-xl font-bold text-white tracking-tight">Wait for Confirmation</h4>
                            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                                Once submitted, our dedicated agent will contact you to finalize the menu.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-3 relative group"
                        >
                            <h4 className="text-xl font-bold text-white tracking-tight">Order is on the Way</h4>
                            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                                Your curated gourmet experience will arrive at your villa within 60 minutes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
