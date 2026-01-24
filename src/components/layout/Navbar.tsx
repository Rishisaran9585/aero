"use client";

import { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/home1" },
    { name: "Packages", href: "/package1" },
    { name: "International Tours", href: "/international-tours" },
    { name: "UAE Tours", href: "/uae-tours" },
    { name: "Desert Safari", href: "/desert-safari" },
    { name: "Fleet", href: "/fleet" },
    { name: "Visa Services", href: "/visa" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-black/80 backdrop-blur-lg py-4 border-b border-white/10 shadow-xl"
                    : "bg-transparent py-6"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
                    <div className="relative h-14 w-44 md:h-18 md:w-56 transition-transform hover:scale-105">
                        <Image
                            src="/assets/att.png"
                            alt="Aerosafe Logo"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 w-max max-w-[80vw]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs uppercase font-bold tracking-widest hover:text-secondary transition-colors opacity-80 hover:opacity-100 whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4 z-50 shrink-0">
                    <Button
                        className="hidden lg:flex rounded-full px-8 py-6 bg-transparent text-white hover:bg-white hover:text-black border border-white/40 border-2 backdrop-blur-sm transition-all text-xs tracking-widest uppercase font-bold"
                    >
                        Book Now
                    </Button>

                    {/* Mobile/Tablet Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="xl:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black/95 border-white/10 text-white w-[300px] overflow-y-auto">
                            <SheetTitle className="text-left text-lg font-bold mb-6 text-white mb-8 border-b border-white/10 pb-4">MENU</SheetTitle>
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xl font-light tracking-wider hover:text-secondary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
