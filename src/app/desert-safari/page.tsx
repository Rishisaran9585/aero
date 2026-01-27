"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Car,
    Zap,
    Mountain,
    Utensils,
    Music,
    Palmtree,
    ArrowUpRight,
    Moon,
    Sun,
    UserCheck,
    Crown,
    ArrowRight
} from "lucide-react";
import InternalHero from "@/components/InternalHero";
import SafariInclusions from "@/components/SafariInclusions";
import SafariVisualSplit from "@/components/SafariVisualSplit";
import SafariPrismGallery from "@/components/SafariPrismGallery";
import SafariCampLuxe from "@/components/SafariCampLuxe";
import "./DesertSafari.css";

const inclusions = [
    { icon: Car, title: "4x4 Pickup", desc: "Doorstep service in premium off-road vehicles." },
    { icon: Zap, title: "Dune Bashing", desc: "An adrenaline-fueled ride over the high golden dunes." },
    { icon: Mountain, title: "Sandboarding", desc: "Slide down the dunes for a unique desert thrill." },
    { icon: Palmtree, title: "Camel Ride", desc: "Experience the traditional 'ship of the desert'." },
    { icon: Utensils, title: "BBQ Dinner", desc: "Gourmet buffet with live cooking under the stars." },
    { icon: Music, title: "Live Shows", desc: "Tanoura dance, belly dancing & fire shows." }
];

const safariOptions = [
    {
        title: "Evening",
        subtitle: "The Signature Safari",
        desc: "The classic Dubai experience featuring a stunning sunset, BBQ dinner, and live shows under the Arabian stars.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        icon: Moon
    },
    {
        title: "Morning",
        subtitle: "Dawn Patrol Expedition",
        desc: "Perfect for early birds. Enjoy the crisp morning air, pristine golden sands, and the desert's quietest hour.",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200",
        icon: Sun
    },
    {
        title: "VIP",
        subtitle: "Elite Oasis Treatment",
        desc: "Exclusivity at its finest. A dedicated vehicle, premium table service, and private lounge access in the dunes.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1200",
        icon: Crown
    }
];

export default function DesertSafariPage() {
    return (
        <main className="safari-page">
            {/* 1. HERO SECTION - SAME AS PACKAGE1 */}
            <div className="snap-start">
                <InternalHero
                    title="DESERT SAFARI"
                    subtitle="The Soul of Sands"
                    image="/assets/desert-safari-card.jpg"
                />
            </div>

            <div className="relative z-10">
                {/* 2. THE VISUAL SPLIT - DUAL IMAGE SECTION */}
                <section>
                    <SafariVisualSplit />
                </section>

                {/* 3. THE ANATOMY OF THRILL - PERSPECTIVE GRID */}
                <div className="snap-section">
                    <SafariInclusions />
                </div>

                {/* 4. CAMP LUXE - THE NIGHT REVEALED */}
                <div className="snap-section">
                    <SafariCampLuxe />
                </div>

                {/* 5. SAFARI CHOICES - PRISM PILLARS */}
                <div className="snap-section">
                    <SafariPrismGallery />
                </div>
            </div>

            {/* Global Texture Overlay */}
            <div className="grain-tex" />
        </main>
    );
}
