"use client";

import { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import {
    Menu,
    Facebook,
    Twitter,
    Linkedin,
    Globe,
    Instagram,
    Phone,
    Home,
    Package,
    Plane,
    MapPin,
    Sun,
    Car,
    FileText,
    Users,
    ArrowRight,
    MessageSquare,
    Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "International", href: "/international-tours" },
    { name: "About Us", href: "/about" },
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-xl"
                    : "bg-transparent border-transparent shadow-none"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Top Bar */}
            <div className={cn(
                "hidden md:block pt-3 pb-1 transition-all duration-500",
                isScrolled
                    ? "h-0 py-0 opacity-0 overflow-hidden bg-black/80"
                    : "opacity-100 !bg-transparent border-none"
            )}>
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="tel:+971553550933" className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-white/60 hover:text-secondary transition-colors">
                        <Phone className="w-3 h-3 text-secondary" />
                        <span>+971 55 355 0933</span>
                    </a>
                    <div className="flex items-center gap-6">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-secondary transition-colors"><Facebook className="w-3.5 h-3.5" /></Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-secondary transition-colors"><Twitter className="w-3.5 h-3.5" /></Link>
                        <Link href="/" className="hover:text-secondary transition-colors"><Globe className="w-3.5 h-3.5" /></Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-secondary transition-colors"><Instagram className="w-3.5 h-3.5" /></Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-secondary transition-colors"><Linkedin className="w-3.5 h-3.5" /></Link>
                    </div>
                </div>
            </div>

            <div className={cn(
                "container mx-auto px-4 flex items-center transition-all duration-500",
                isScrolled ? "py-4" : "pt-1 pb-5"
            )}>
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

                {/* Right Side - Nav & CTA */}
                <div className="ml-auto flex items-center gap-4 md:gap-8">
                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-8">
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
                        {/* Mobile/Tablet Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="xl:hidden text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-black border-white/5 text-white w-full sm:w-[380px] p-0 flex flex-col shadow-2xl">
                                {/* Menu Header with Logo */}
                                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                                    <Link href="/" className="relative h-10 w-32">
                                        <Image
                                            src="/assets/att.png"
                                            alt="Aerosafe Logo"
                                            fill
                                            className="object-contain brightness-0 invert"
                                        />
                                    </Link>
                                    <SheetTitle className="sr-only">Menu</SheetTitle>
                                </div>

                                {/* Navigation Items */}
                                <nav className="flex-1 overflow-y-auto px-8 py-4 flex flex-col gap-2">
                                    {navLinks.map((link, i) => (
                                        <SheetClose asChild key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex flex-col py-4 border-b border-white/[0.03] last:border-0 hover:border-secondary/30 transition-all"
                                            >
                                                <span className="text-secondary/40 text-[10px] font-black tracking-widest uppercase mb-1">0{i + 1}</span>
                                                <span className="text-2xl font-serif italic font-bold group-hover:text-secondary transition-colors">{link.name}</span>
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                {/* Menu Footer with CTA */}
                                <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                                    <div className="mt-0 flex items-center gap-6 justify-center">
                                        <Link href="https://wa.me/971553550933" target="_blank" className="text-white/40 hover:text-secondary transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                        </Link>
                                        <div className="w-px h-4 bg-white/10" />
                                        <a href="tel:+971553550933" className="text-white/40 hover:text-secondary transition-colors">
                                            <Phone className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
