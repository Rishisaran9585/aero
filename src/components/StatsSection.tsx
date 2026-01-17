"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Clock, Users, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    {
        value: 15,
        suffix: "+",
        label: "Years Experience",
        subLabel: "Excellence in travel",
        icon: Clock,
        color: "bg-[#2D241F]",
        iconColor: "text-[#E89B5E]"
    },
    {
        value: 50,
        suffix: "K+",
        label: "Happy Travelers",
        subLabel: "Satisfied customers",
        icon: Users,
        color: "bg-[#2D241F]",
        iconColor: "text-[#E89B5E]"
    },
    {
        value: 150,
        suffix: "+",
        label: "Destinations",
        subLabel: "Worldwide coverage",
        icon: MapPin,
        color: "bg-[#2D241F]",
        iconColor: "text-[#E89B5E]"
    },
    {
        value: 4.9,
        suffix: "",
        label: "Customer Rating",
        subLabel: "Exceptional service",
        icon: Award,
        color: "bg-[#2D241F]",
        iconColor: "text-[#E89B5E]",
        isFloat: true
    }
];

const Counter = ({ value, isFloat }: { value: number, isFloat?: boolean }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const spring = useSpring(0, { stiffness: 45, damping: 15 });
    const display = useTransform(spring, (current) =>
        isFloat ? current.toFixed(1) : Math.round(current).toString()
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center group"
        >
            {/* Icon Container */}
            <div className={cn(
                "h-20 w-20 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
                stat.color
            )}>
                <stat.icon className={cn("h-10 w-10", stat.iconColor)} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 tracking-tight text-white flex items-baseline">
                    <Counter value={stat.value} isFloat={stat.isFloat} />
                    {stat.suffix && <span className="text-4xl md:text-5xl ml-0.5">{stat.suffix}</span>}
                </div>

                <h3 className="text-white text-sm md:text-base font-semibold mb-1">
                    {stat.label}
                </h3>
                <p className="text-white/40 text-[10px] md:text-xs">
                    {stat.subLabel}
                </p>
            </div>
        </motion.div>
    );
};

export default function StatsSection() {
    return (
        <section className="py-20 bg-[#05070A] relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {stats.map((stat, i) => (
                        <StatCard key={i} stat={stat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

