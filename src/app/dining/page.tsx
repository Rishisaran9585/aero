"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";

export default function DiningPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="PLÉNITUDE"
                subtitle="Experience culinary artistry where every dish tells a story. Our commitment to excellence ensures each visit becomes a cherished memory."
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
                highlight="Fine Dining"
                isLarge={true}
            />

            {/* Exquisite Gastronomy Section */}
            <section className="bg-black text-white">
                <div className="max-w-[90rem] mx-auto px-4 pt-24 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-start">
                        <h2 className="lg:col-span-7 text-5xl md:text-6xl font-serif font-light tracking-[0.06em] text-gray-300 leading-[1.05]">
                            EXQUISITE
                            <br />
                            GASTRONOMY
                        </h2>
                        <div className="lg:col-span-5 lg:flex lg:justify-end">
                            <p className="text-[11px] leading-relaxed text-gray-400 max-w-xs lg:text-right">
                                One Must Draw From These Magical Potions To Sublimate, Enhance, Awaken And Perfume The "Preludes" (Starters).
                            </p>
                        </div>
                    </div>

                    {/* Centered staggered 5-image strip */}
                    <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-4 items-center">
                            {[
                                {
                                    url: "https://images.unsplash.com/photo-1505253716367-af7846067605?auto=format&fit=crop&w=700&q=80",
                                    h: "h-56 sm:h-80",
                                    offset: "sm:-translate-y-10",
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1542835900-cd224393b07e?auto=format&fit=crop&w=700&q=80",
                                    h: "h-64 sm:h-96",
                                    offset: "sm:translate-y-10",
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
                                    h: "h-72 sm:h-[28rem]",
                                    offset: "sm:-translate-y-14",
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1512132411229-c30386d47bff?auto=format&fit=crop&w=700&q=80",
                                    h: "h-64 sm:h-96",
                                    offset: "sm:translate-y-10",
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80",
                                    h: "h-56 sm:h-80",
                                    offset: "sm:-translate-y-10",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.url}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className={`relative w-full ${item.h} ${item.offset} overflow-hidden bg-gray-900`}
                                >
                                    <Image src={item.url} alt={`Dish ${i + 1}`} fill className="object-cover" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center max-w-2xl mx-auto mt-16">
                            <Button
                                variant="link"
                                className="mt-6 text-[11px] text-gray-400 hover:text-white px-0 font-normal"
                            >
                                See Menu <ArrowRight className="ml-2 h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prepared to Perfection Section */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 pt-28 pb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: { staggerChildren: 0.22 },
                            },
                        }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                    >
                        {/* Text block (top-left) */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
                            }}
                            className="lg:col-span-4"
                        >
                            <h2 className="text-6xl md:text-7xl font-serif font-light tracking-[0.08em] text-gray-300 leading-[0.95]">
                                PREPARED TO
                                <br />
                                PERFECTION
                            </h2>
                            <p className="mt-8 text-[11px] leading-relaxed text-gray-400 max-w-sm">
                                One Must Draw From These Magical Potions To Sublimate, Enhance, Awaken And Perfume The "Preludes" (Starters), The "Salty And Sweet Waters" (Fish), The "Meadows And Country Lands" (Meats) And The "Sweet Fragrances" (Desserts).
                            </p>
                            <Button
                                variant="link"
                                className="mt-6 text-[11px] text-gray-400 hover:text-white px-0 font-normal"
                            >
                                See Menu <ArrowRight className="ml-2 h-3.5 w-3.5" />
                            </Button>
                        </motion.div>

                        {/* Bottom-left image aligned with heading */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 22 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                            }}
                            className="lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:-mt-40"
                        >
                            <div className="relative h-72 sm:h-80 lg:h-[420px] lg:w-[340px] overflow-hidden bg-gray-900">
                                <Image
                                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                                    alt="Dining room service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Collage canvas (right) */}
                        <div className="lg:col-span-8 lg:col-start-5">
                            <div className="relative w-full lg:h-[600px]">
                                {/* Tall image (top-right) */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 22 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                                    }}
                                    className="relative h-80 sm:h-96 lg:absolute lg:right-0 lg:top-0 lg:h-[420px] lg:w-[340px] overflow-hidden bg-gray-900 lg:z-20"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80"
                                        alt="Chef plating"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Large center image */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 22 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                                    }}
                                    className="relative mt-8 h-80 sm:h-96 lg:absolute lg:left-50 lg:top-[230px] lg:-translate-x-1/2 lg:mt-0 lg:h-[420px] lg:w-[340px] overflow-hidden bg-gray-900 lg:z-10"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1581299894007-aaa50297cf8f?auto=format&fit=crop&w=1100&q=80"
                                        alt="Chef preparing"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="px-8 py-20 bg-black text-center border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-serif mb-8 text-white">LET'S START YOUR JOURNEY</h3>
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 border-2 border-secondary rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">1</span>
                        </div>
                    </div>
                    <ArrowUp className="h-6 w-6 mx-auto text-gray-400" />
                </div>
            </section>

        </div>
    );
}
