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
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Fleet", href: "/fleet" },
    { name: "Visa", href: "/visa" },
    { name: "Hotels", href: "/hotels" },
    { name: "Tours", href: "/tours" },
    { name: "Safari", href: "/safari" },
    { name: "Dining", href: "/dining" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
                "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "top-4 mx-4 md:mx-8 bg-black/80 backdrop-blur-lg py-3 px-6 rounded-2xl border border-white/10 shadow-2xl"
                    : "top-0 bg-transparent py-6"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={cn(
                "container mx-auto flex items-center justify-between",
                !isScrolled && "px-4"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
                    <div className="relative h-14 w-44 md:h-18 md:w-56 transition-transform hover:scale-105">
                        <Image
                            src="/assets/logo-new.png"
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
                        className="hidden lg:flex rounded-full px-6 bg-white/10 text-white hover:bg-secondary hover:text-black border border-white/20 backdrop-blur-sm transition-all text-xs tracking-widest uppercase font-bold"
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
