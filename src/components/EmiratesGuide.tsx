"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Star, Search } from "lucide-react";
import Image from "next/image";

type Place = {
    name: string;
    image: string;
    tag: string;
    rating?: string;
};

type EmirateData = {
    id: string;
    name: string;
    tagline: string;
    places: Place[];
};

// Helper images mapping
const IMAGES = {
    mosque: "https://images.unsplash.com/photo-1512453979798-5ea9ba6a80f4?q=80&w=800&auto=format&fit=crop",
    palace: "https://images.unsplash.com/photo-1598075908595-301132646d88?q=80&w=800&auto=format&fit=crop",
    museum: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    yas: "https://images.unsplash.com/photo-1512632500433-3736850126f5?q=80&w=800&auto=format&fit=crop",
    ferrari: "https://images.unsplash.com/photo-1628069695674-c6a6f0249c66?q=80&w=800&auto=format&fit=crop",
    desert: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=800&auto=format&fit=crop",
    mall: "https://images.unsplash.com/photo-1559494326-6b2222d14bc7?q=80&w=800&auto=format&fit=crop",
    burj: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    heritage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=800&auto=format&fit=crop",
    beach: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    themepark: "https://images.unsplash.com/photo-1526488733221-dbb5a4b73b22?q=80&w=800&auto=format&fit=crop",
    souk: "https://images.unsplash.com/photo-1579705912803-3112a64c5147?q=80&w=800&auto=format&fit=crop",
    nature: "https://images.unsplash.com/photo-1596541671569-4240974868a2?q=80&w=800&auto=format&fit=crop",
    mountains: "https://images.unsplash.com/photo-1526466399120-f5a024803932?q=80&w=800&auto=format&fit=crop",
    city: "https://images.unsplash.com/photo-1512453979798-5ea9ba6a80f4?q=80&w=800&auto=format&fit=crop"
};

// Helper to get image based on name/tag
const getImage = (name: string, tag: string) => {
    const n = name.toLowerCase();
    const t = tag.toLowerCase();
    if (n.includes("mosque") || n.includes("masjid")) return IMAGES.mosque;
    if (n.includes("palace") || n.includes("qasr") || n.includes("fort")) return IMAGES.palace;
    if (n.includes("museum") || n.includes("louvre") || n.includes("culture")) return IMAGES.museum;
    if (n.includes("mall") || n.includes("souk") || n.includes("city walk")) return IMAGES.mall;
    if (n.includes("beach") || n.includes("island") || n.includes("water") || n.includes("corniche") || n.includes("sea")) return IMAGES.beach;
    if (n.includes("park") || n.includes("world") || n.includes("ferrari") || n.includes("adventure")) return IMAGES.themepark;
    if (n.includes("desert") || n.includes("dune") || n.includes("oasis")) return IMAGES.desert;
    if (n.includes("mountain") || n.includes("jabel") || n.includes("jais")) return IMAGES.mountains;
    if (n.includes("burj")) return IMAGES.burj;
    return IMAGES.city;
};

const emiratesData: EmirateData[] = [
    {
        id: "abudhabi",
        name: "Abu Dhabi",
        tagline: "Capital Emirate",
        places: [
            // Mosques & Religious
            { name: "Sheikh Zayed Grand Mosque", tag: "Religious" },
            { name: "Mary Mother of Jesus Mosque", tag: "Religious" },
            { name: "Al Aziz Mosque", tag: "Religious" },
            { name: "Bani Hashim Mosque", tag: "Religious" },
            // Palaces & Landmarks
            { name: "Qasr Al Watan", tag: "Landmark" },
            { name: "Emirates Palace", tag: "Landmark" },
            { name: "Al Hosn Palace", tag: "History" },
            { name: "Presidential Palace Area", tag: "Landmark" },
            // Museums & Culture
            { name: "Louvre Abu Dhabi", tag: "Museum" },
            { name: "Manarat Al Saadiyat", tag: "Culture" },
            { name: "Cultural Foundation", tag: "Culture" },
            { name: "Warehouse421", tag: "Art" },
            // Islands & Beaches
            { name: "Saadiyat Island", tag: "Island" },
            { name: "Yas Island", tag: "Island" },
            { name: "Al Reem Island", tag: "Island" },
            { name: "Hudayriyat Island", tag: "Island" },
            { name: "Corniche Beach", tag: "Beach" },
            { name: "Saadiyat Public Beach", tag: "Beach" },
            // Theme Parks
            { name: "Ferrari World", tag: "Theme Park" },
            { name: "Warner Bros World", tag: "Theme Park" },
            { name: "Yas Waterworld", tag: "Theme Park" },
            { name: "Yas Marina Circuit", tag: "Adventure" },
            // Nature & Desert
            { name: "Liwa Oasis", tag: "Nature" },
            { name: "Empty Quarter (Rub’ al Khali)", tag: "Desert" },
            { name: "Al Wathba Fossil Dunes", tag: "Nature" },
            { name: "Al Wathba Wetland Reserve", tag: "Nature" },
            // Malls
            { name: "Yas Mall", tag: "Shopping" },
            { name: "Marina Mall", tag: "Shopping" },
            { name: "Abu Dhabi Mall", tag: "Shopping" },
            { name: "Galleria Mall", tag: "Shopping" }
        ].map(p => ({ ...p, image: `/assets/abudhabi/${p.name}.jpg`, rating: "4.8" }))
    },
    {
        id: "dubai",
        name: "Dubai",
        tagline: "Tourism & Luxury Capital",
        places: [
            // Iconic
            { name: "Burj Khalifa", tag: "Iconic" },
            { name: "Burj Al Arab", tag: "Iconic" },
            { name: "Museum of the Future", tag: "Iconic" },
            { name: "Dubai Frame", tag: "Iconic" },
            // Old Dubai
            { name: "Al Fahidi Historical District", tag: "Heritage" },
            { name: "Al Seef", tag: "Heritage" },
            { name: "Shindagha Museum", tag: "Museum" },
            { name: "Etihad Museum", tag: "Museum" },
            { name: "Dubai Creek", tag: "Heritage" },
            // Mosques
            { name: "Jumeirah Mosque", tag: "Religious" },
            { name: "Al Farooq Mosque", tag: "Religious" },
            { name: "Iranian Mosque", tag: "Religious" },
            // Beaches
            { name: "JBR Beach", tag: "Beach" },
            { name: "Kite Beach", tag: "Beach" },
            { name: "La Mer", tag: "Lifestyle" },
            { name: "Palm Jumeirah", tag: "Island" },
            { name: "Bluewaters Island", tag: "Island" },
            // Theme Parks
            { name: "IMG Worlds of Adventure", tag: "Theme Park" },
            { name: "Motiongate", tag: "Theme Park" },
            { name: "Bollywood Parks", tag: "Theme Park" },
            { name: "Aquaventure", tag: "Waterpark" },
            { name: "Wild Wadi", tag: "Waterpark" },
            // Malls & Souks
            { name: "Dubai Mall", tag: "Shopping" },
            { name: "Mall of the Emirates", tag: "Shopping" },
            { name: "City Walk", tag: "Shopping" },
            { name: "Gold Souk", tag: "Souk" },
            { name: "Spice Souk", tag: "Souk" },
            { name: "Textile Souk", tag: "Souk" },
            // Nature
            { name: "Al Qudra Lakes", tag: "Nature" },
            { name: "Love Lake", tag: "Nature" },
            { name: "Lahbab Desert", tag: "Desert" },
            { name: "Dubai Desert Conservation Reserve", tag: "Nature" },
            // Other
            { name: "Dubai Marina", tag: "Lifestyle" },
            { name: "Ain Dubai", tag: "Landmark" },
            { name: "Sky Views", tag: "Adventure" },
            { name: "Global Village", tag: "Entertainment" },
            { name: "Miracle Garden", tag: "Nature" }
        ].map(p => ({ ...p, image: `/assets/dubai/${p.name}.jpg`, rating: "4.9" }))
    },
    {
        id: "sharjah",
        name: "Sharjah",
        tagline: "Cultural Capital",
        places: [
            // Museums
            { name: "Museum of Islamic Civilization", tag: "Museum" },
            { name: "Sharjah Art Museum", tag: "Art" },
            { name: "Science Museum", tag: "Museum" },
            { name: "Natural History Museum", tag: "Museum" },
            { name: "Maritime Museum", tag: "Museum" },
            // Mosques
            { name: "Al Noor Mosque", tag: "Religious" },
            { name: "King Faisal Mosque", tag: "Religious" },
            { name: "Sharjah Grand Mosque", tag: "Religious" },
            // Heritage
            { name: "Heart of Sharjah", tag: "Heritage" },
            { name: "Heritage Village", tag: "Heritage" },
            { name: "Al Hisn Fort", tag: "History" },
            // Waterfront
            { name: "Al Qasba", tag: "Leisure" },
            { name: "Al Majaz Waterfront", tag: "Leisure" },
            { name: "Khalid Lagoon", tag: "Leisure" },
            // Nature
            { name: "Al Noor Island", tag: "Nature" },
            { name: "Wasit Wetland Centre", tag: "Nature" }
        ].map(p => ({ ...p, image: `/assets/sharjah/${p.name}.jpg`, rating: "4.7" }))
    },
    {
        id: "ajman",
        name: "Ajman",
        tagline: "Smallest Emirate",
        places: [
            // Historical
            { name: "Ajman Museum", tag: "Museum" },
            { name: "Ajman Fort", tag: "History" },
            // Beaches
            { name: "Ajman Beach", tag: "Beach" },
            { name: "Ajman Corniche", tag: "Leisure" },
            // Industry
            { name: "Ajman Dhow Yard", tag: "Culture" },
            // Urban
            { name: "City Centre Ajman", tag: "Shopping" },
            { name: "Ajman Marina", tag: "Lifestyle" }
        ].map(p => ({ ...p, image: `/assets/Ajman/${p.name}.jpg`, rating: "4.5" }))
    },
    {
        id: "uaq",
        name: "Umm Al Quwain",
        tagline: "Nature & Quiet Life",
        places: [
            // Nature
            { name: "Mangrove Forests", tag: "Nature" },
            { name: "UAQ Beach", tag: "Beach" },
            { name: "Islands around UAQ", tag: "Nature" },
            // Historical
            { name: "UAQ Fort", tag: "History" },
            { name: "UAQ Museum", tag: "Museum" },
            // Entertainment
            { name: "Dreamland Aqua Park", tag: "Waterpark" },
            // Marine
            { name: "Fishing Harbor", tag: "Marine" }
        ].map(p => ({ ...p, image: `/assets/Umm Al Quwain/${p.name}.jpg`, rating: "4.4" }))
    },
    {
        id: "rak",
        name: "Ras Al Khaimah",
        tagline: "Mountains & Adventure",
        places: [
            // Mountains
            { name: "Jebel Jais", tag: "Adventure" },
            { name: "Jais Sky Tour", tag: "Adventure" },
            { name: "Jais Zipline", tag: "Adventure" },
            { name: "Wadi Shawka", tag: "Nature" },
            // Historical
            { name: "Dhayah Fort", tag: "History" },
            { name: "Al Jazirah Al Hamra", tag: "History" },
            { name: "National Museum of RAK", tag: "Museum" },
            // Beaches
            { name: "Al Marjan Island", tag: "Luxury" },
            { name: "Mina Al Arab", tag: "Leisure" },
            // Desert
            { name: "Khatt Springs", tag: "Nature" },
            { name: "Bassata Desert Village", tag: "Desert" }
        ].map(p => ({ ...p, image: `/assets/Ras Al Khaimah/${p.name}.jpg`, rating: "4.8" }))
    },
    {
        id: "fujairah",
        name: "Fujairah",
        tagline: "East Coast Emirate",
        places: [
            // Historical
            { name: "Fujairah Fort", tag: "History" },
            { name: "Fujairah Museum", tag: "Museum" },
            { name: "Al Bidyah Mosque", tag: "History" },
            // Beaches
            { name: "Fujairah Beach", tag: "Beach" },
            { name: "Al Aqah Beach", tag: "Beach" },
            { name: "Snoopy Island", tag: "Marine" },
            // Nature
            { name: "Hajar Mountains", tag: "Nature" },
            { name: "Wadi Wurayah National Park", tag: "Nature" },
            // Marine
            { name: "Scuba Diving Sites", tag: "Adventure" },
            { name: "Snorkeling Zones", tag: "Adventure" }
        ].map(p => ({ ...p, image: `/assets/Fujairah/${p.name}.jpg`, rating: "4.6" }))
    }
];

export default function EmiratesGuide() {
    const [selectedEmirate, setSelectedEmirate] = useState(emiratesData[0]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPlaces = useMemo(() => {
        return selectedEmirate.places.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [selectedEmirate, searchTerm]);

    return (
        <section className="snap-section py-24 bg-[#050505] relative overflow-hidden flex flex-col justify-center min-h-screen w-full">
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Complete Guide</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none tracking-tighter text-white">
                        Explore <span className="text-secondary italic">UAE.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Navigation - Responsive Layout (Horizontal on Mobile, Vertical on Desktop) */}
                    <div className="w-full lg:w-1/4 z-20">
                        <div className="relative lg:block">
                            <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x lg:flex-col lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 lg:gap-4 no-scrollbar sticky top-20 md:top-24 bg-black/80 backdrop-blur-xl lg:backdrop-blur-none lg:bg-transparent py-4 lg:py-0 border-b border-white/10 lg:border-none">
                                {emiratesData.map((emirate) => {
                                    const isSelected = selectedEmirate.id === emirate.id;
                                    return (
                                        <button
                                            key={emirate.id}
                                            onClick={() => {
                                                setSelectedEmirate(emirate);
                                                setSearchTerm("");
                                            }}
                                            className={`
                                                relative shrink-0 snap-start
                                                transition-all duration-300 group
                                                whitespace-nowrap flex items-center gap-2
                                                
                                                /* Mobile: Pill Shape */
                                                px-5 py-2.5 rounded-full border
                                                
                                                /* Desktop: Card Shape */
                                                lg:w-full lg:px-6 lg:py-5 lg:rounded-2xl lg:text-left lg:block lg:whitespace-normal
                                                
                                                ${isSelected
                                                    ? "bg-secondary border-secondary text-black shadow-[0_0_20px_rgba(184,150,68,0.3)] lg:scale-105"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                                                }
                                            `}
                                        >
                                            <div className="flex items-center lg:justify-between w-full">
                                                <div>
                                                    <span className="font-black uppercase tracking-widest text-xs lg:text-sm block">
                                                        {emirate.name}
                                                    </span>
                                                    {/* Tagline: Desktop Only */}
                                                    <span className={`hidden lg:block text-[9px] uppercase tracking-[0.2em] font-bold mt-1 ${isSelected ? "text-black/60" : "text-gray-600 group-hover:text-gray-500"
                                                        }`}>
                                                        {emirate.tagline}
                                                    </span>
                                                </div>

                                                {/* Active Icon: Desktop Only */}
                                                {isSelected && (
                                                    <MapPin size={16} className="hidden lg:block animate-bounce" />
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Mobile Scroll Indicator - Left Shadow */}
                            <div className="absolute left-[-16px] top-4 bottom-8 w-16 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-30 lg:hidden" />

                            {/* Mobile Scroll Indicator - Hint Icon (Left) */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-40 lg:hidden pointer-events-none animate-pulse pl-2">
                                <motion.div
                                    animate={{ x: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="bg-secondary/20 backdrop-blur-md rounded-full p-1 border border-secondary/30"
                                >
                                    <ArrowUpRight size={10} className="text-secondary -rotate-[135deg]" />
                                </motion.div>
                            </div>

                            {/* Mobile Scroll Indicator - Right Shadow */}
                            <div className="absolute right-[-16px] top-4 bottom-8 w-16 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-30 lg:hidden" />

                            {/* Mobile Scroll Indicator - Hint Icon (Right) */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 lg:hidden pointer-events-none animate-pulse pr-2">
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="bg-secondary/20 backdrop-blur-md rounded-full p-1 border border-secondary/30"
                                >
                                    <ArrowUpRight size={10} className="text-secondary rotate-45" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area - Grid of Cards */}
                    <div className="w-full lg:w-3/4 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedEmirate.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
                                    <div>
                                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                                            {selectedEmirate.name}
                                        </h3>
                                        <p className="text-secondary text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                                            {selectedEmirate.places.length} Destinations
                                        </p>
                                    </div>

                                    {/* Mini Search */}
                                    <div className="relative w-full md:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                                        <input
                                            type="text"
                                            placeholder="Search places..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-secondary/50 transition-all uppercase tracking-wider"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPlaces.map((place, idx) => (
                                        <motion.div
                                            key={place.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                            whileHover={{ y: -5 }}
                                            className="group relative h-[220px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-black cursor-pointer"
                                        >
                                            <Image
                                                src={place.image}
                                                alt={place.name}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                            {/* Tag Badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-secondary">
                                                    {place.tag}
                                                </span>
                                            </div>

                                            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors leading-tight">
                                                            {place.name}
                                                        </h4>
                                                        <div className="flex items-center gap-1 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                                                            <Star size={9} className="text-secondary fill-secondary" /> {place.rating}
                                                        </div>
                                                    </div>
                                                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                        <ArrowUpRight size={12} />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {filteredPlaces.length === 0 && (
                                    <div className="py-20 text-center text-white/30 text-sm uppercase tracking-widest">
                                        No destinations found.
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
