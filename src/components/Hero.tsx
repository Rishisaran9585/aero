"use client";

import React from 'react';
import Image from 'next/image';
import { Home, Calendar, Users, ArrowRight, Plane } from 'lucide-react';
import './Hero.css';

const popularDestinations = [
    {
        title: "Desert Safari Tour",
        img: "/assets/desert-safari-card.jpg",
        people: 45
    },
    {
        title: "Abu Dhabi City Tour",
        img: "/assets/abu_dhabi.jpg",
        people: 38
    },
    {
        title: "Burj Al Arab Visit",
        img: "/assets/Burj_Al_Arab.png",
        people: 25
    }
];

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Left Side: Solid Background + Content */}
            <div className="hero-left">
                <div className="hero-content-stack">
                    <div className="hero-tagline">MOUNTAINS | PLAINS | BEACHES</div>
                    <h1 className="hero-title">Spend your vacation <br /> with our activities</h1>
                </div>

                <div className="hero-popular-section">
                    <div className="hero-section-label flex items-center gap-2">
                        MOST POPULAR
                        <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center cursor-pointer ml-4 hover:bg-white/20 transition-all">
                            <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                    </div>

                    <div className="hero-popular-grid">
                        {popularDestinations.map((dest, i) => (
                            <div key={i} className={`hero-card hero-card-${i}`}>
                                <div className="hero-card-img-wrapper">
                                    <Image
                                        src={dest.img}
                                        alt={dest.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="hero-card-info">
                                    <div className="hero-card-title">{dest.title}</div>
                                    <div className="hero-card-stats">
                                        <Users className="w-3 h-3" />
                                        {dest.people} people going
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Video Background */}
            <div className="hero-right">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video-bg"
                    poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
                >
                    <source src="/assets/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

            </div>

            {/* Search Bar - Floating */}
            <div className="hero-search-wrapper">
                <div className="hero-search-bar">

                    <div className="hero-search-field">
                        <Home className="hero-search-icon" />
                        <div className="hero-search-content">
                            <span className="hero-search-label">Destination</span>
                            <input
                                type="text"
                                className="hero-search-input"
                                placeholder="Choose destination"
                            />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <Calendar className="hero-search-icon" />
                        <div className="hero-search-content">
                            <span className="hero-search-label">Start Date</span>
                            <input
                                type="text"
                                className="hero-search-input"
                                placeholder="DD.MM.YYYY"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <Calendar className="hero-search-icon" />
                        <div className="hero-search-content">
                            <span className="hero-search-label">End Date</span>
                            <input
                                type="text"
                                className="hero-search-input"
                                placeholder="DD.MM.YYYY"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <Users className="hero-search-icon" />
                        <div className="hero-search-content">
                            <span className="hero-search-label">Guests</span>
                            <input
                                type="number"
                                className="hero-search-input"
                                placeholder="0"
                                min="1"
                            />
                        </div>
                    </div>

                    <button className="hero-btn-search">Get Quote</button>

                </div>
            </div>

        </div>
    );
};

export default Hero;
