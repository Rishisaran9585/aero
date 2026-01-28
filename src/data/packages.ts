export interface Package {
    slug: string;
    title: string;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
    price: string;
    rating: number;
    inclusions: string[];
    category: 'uae' | 'international';
    color?: string; // For design variations
    gallery?: string[];
    details?: {
        itinerary: { day: number; title: string; description: string }[];
        exclusions: string[];
        usefulInfo?: string[];
    };
}

export const uaePackages: Package[] = [
    {
        slug: "dubai-essential",
        title: "Dubai Essential",
        duration: "3D/4N",
        image: "/assets/Dubai Essential.jpg",
        description: "Explore the futuristic city of Dubai with our essential package featuring the city's most iconic landmarks.",
        highlights: ["Burj Khalifa Visit", "Desert Safari", "Marina Cruise"],
        price: "AED 1,499",
        rating: 4.8,
        inclusions: ["4* Hotel", "Transfers", "Sightseeing"],
        category: 'uae',
        details: {
            itinerary: [
                { day: 1, title: "Arrival & Marina Cruise", description: "Arrival at Dubai International Airport. Transfer to hotel. Evening Dhow Cruise at Dubai Marina with dinner." },
                { day: 2, title: "Dubai City Tour & Burj Khalifa", description: "Half-day city tour covering Jumeirah Mosque, Burj Al Arab (photo stop), and Dubai Museum. Evening visit to Burj Khalifa 124th floor." },
                { day: 3, title: "Desert Safari", description: "Free morning for shopping. Afternoon 4x4 Desert Safari with BBQ dinner, belly dancing, and camel riding." },
                { day: 4, title: "Departure", description: "Breakfast at hotel. Pick up for airport drop according to flight schedule." }
            ],
            exclusions: ["Visa fees", "Personal expenses", "Tips and gratuities"],
            usefulInfo: ["Light clothing recommended", "Carry a reusable water bottle", "Respect local customs"]
        }
    },
    {
        slug: "dubai-grand",
        title: "Dubai Grand",
        duration: "5D/4N",
        image: "/assets/Dubai Grand.jpg",
        description: "A more immersive experience covering all major attractions and hidden gems of the city.",
        highlights: ["Miracle Garden", "Global Village", "Sky Views Dubai", "Museum of Future"],
        price: "AED 2,850",
        rating: 4.9,
        inclusions: ["5* Hotel", "Private Guide", "All Entry Tickets"],
        category: 'uae',
        details: {
            itinerary: [
                { day: 1, title: "Arrival & Dubai Frame", description: "Welcome to Dubai! Check into your 5-star hotel and visit the iconic Dubai Frame in the evening." },
                { day: 2, title: "Modern Dubai & Museum of Future", description: "Explore the Museum of the Future followed by a visit to the Sky Views Observatory for stunning city vistas." },
                { day: 3, title: "Miracle Garden & Global Village", description: "Walk through the world's largest natural flower garden and spend the evening exploring cultures at Global Village." },
                { day: 4, title: "Free Day for Leisure", description: "Enjoy the hotel amenities or head to Dubai Mall for some high-end shopping." },
                { day: 5, title: "Departure", description: "A final luxury breakfast before your private transfer to the airport." }
            ],
            exclusions: ["PCR Tests (if required)", "Travel Insurance", "Minibar usage"]
        }
    },
    {
        slug: "emirates-duo",
        title: "Emirates Duo",
        duration: "Dubai + Abu Dhabi",
        image: "/assets/Emirates Duo.jpg",
        description: "The best of two worlds. Experience the glamour of Dubai and the rich cultural heritage of the capital.",
        highlights: ["Sheikh Zayed Mosque", "Ferrari World", "Louvre Abu Dhabi", "Warner Bros"],
        price: "AED 3,200",
        rating: 4.7,
        inclusions: ["Luxury Stay", "Inter-city Transfers", "Breakfast"],
        category: 'uae'
    },
    {
        slug: "family-fun",
        title: "Family Fun",
        duration: "6D/5N Package",
        image: "/assets/Family Fun.jpg",
        description: "Designed for all ages with kids-friendly activities, theme parks, and family-oriented dining.",
        highlights: ["Legoland Dubai", "Aquaventure Waterpark", "Dolphinarium", "Dubai Parks"],
        price: "AED 4,500",
        rating: 5.0,
        inclusions: ["Family Suite", "Park Passes", "Free Child Stay"],
        category: 'uae'
    },
    {
        slug: "desert-romance",
        title: "Desert Romance",
        duration: "4D/3N Honeymoon",
        image: "/assets/Desert Romance.jpg",
        description: "Create unforgettable memories with your partner in luxury surroundings and private desert escapes.",
        highlights: ["Private Desert Dinner", "Duo Spa Treatment", "Yacht Cruise", "Balloon Ride"],
        price: "AED 5,999",
        rating: 4.9,
        inclusions: ["Private Villa", "Candlelight Dinner", "VIP Gifts"],
        category: 'uae'
    },
    {
        slug: "al-ain-oasis",
        title: "The Garden City: Al Ain",
        duration: "Full Day Tour",
        image: "/assets/The Garden City Al Ain.jpg",
        description: "Visit the UAE's first UNESCO World Heritage site, including the Al Ain Oasis and Jebel Hafeet.",
        highlights: ["Al Ain Zoo", "Qasr Al Muwaiji", "Hot Springs"],
        price: "AED 450",
        rating: 4.8,
        inclusions: ["Round-trip Transport", "Entry Tickets", "Lunch"],
        category: 'uae'
    },
    {
        slug: "sharjah-heritage",
        title: "Sharjah: Cultural Capital",
        duration: "Half Day",
        image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=800&auto=format&fit=crop",
        description: "Immerse yourself in Islamic art and history through the museums and souks of Sharjah.",
        highlights: ["Blue Souk", "Heritage Museum", "King Faisal Mosque"],
        price: "AED 350",
        rating: 4.7,
        inclusions: ["Professional Guide", "Transfers", "Refreshments"],
        category: 'uae'
    },
    {
        slug: "fujairah-east-coast",
        title: "Fujairah: East Coast Escape",
        duration: "9 Hours",
        image: "/assets/Fujairah East Coast Escape.jpg",
        description: "A scenic drive across the Hajar mountains to the white sandy beaches of Fujairah.",
        highlights: ["Snorkeling", "Fujairah Fort", "Badiyah Mosque"],
        price: "AED 550",
        rating: 4.9,
        inclusions: ["Pick & Drop", "Snorkeling Gear", "Lunch"],
        category: 'uae'
    },
    {
        slug: "yacht-charter",
        title: "Luxury Yacht Charter",
        duration: "3 Hours",
        image: "/assets/Luxury Yacht Charter.jpg",
        description: "Cruise along the Dubai coastline in style aboard a private luxury yacht.",
        highlights: ["Atlantis View", "Burj Al Arab", "Swimming"],
        price: "AED 1,200",
        rating: 5.0,
        inclusions: ["Crew", "Soft Drinks", "Towels"],
        category: 'uae'
    },
    {
        slug: "hatta-safari",
        title: "Hatta Mountain Safari",
        duration: "Full Day",
        image: "/assets/Hatta Mountain Safari.jpg",
        description: "Discover the rugged beauty of Hatta with kayaking and mountain heritage village tour.",
        highlights: ["Hatta Dam", "Heritage Village", "Kayaking"],
        price: "AED 400",
        rating: 4.7,
        inclusions: ["4x4 Transport", "Lunch", "Guide"],
        category: 'uae'
    },
    {
        slug: "museum-future",
        title: "Museum of the Future",
        duration: "Half Day",
        image: "/assets/Museum of the Future.jpg",
        description: "Journey to 2071 in the most beautiful building on Earth.",
        highlights: ["VIP Entry", "Observation Deck", "Robotics Lab"],
        price: "AED 250",
        rating: 4.8,
        inclusions: ["Priority Tickets", "Transfers", "Digital Guide"],
        category: 'uae'
    },
    {
        slug: "helicopter-tour",
        title: "Iconic Helicopter Tour",
        duration: "17 Mins",
        image: "/assets/Iconic Helicopter Tour.jpg",
        description: "Witness the Palm Jumeirah and World Islands from a bird's eye view.",
        highlights: ["Palm Jumeirah", "World Islands", "Burj Khalifa"],
        price: "AED 850",
        rating: 4.9,
        inclusions: ["Flight", "Safety Briefing", "Lounge Access"],
        category: 'uae'
    }
];

export const internationalPackages: Package[] = [
    {
        slug: "maldives-escape",
        title: "Maldives Escape",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop",
        description: "Crystal clear waters and overwater villas await you in paradise.",
        highlights: ["Water Villa", "Snorkeling", "Sunset Cruise"],
        price: "AED 6,800",
        rating: 4.9,
        inclusions: ["Resort Stay", "Speedboat Transfers", "All Meals"],
        category: 'international',
        color: "from-cyan-500/20 to-blue-500/20",
        gallery: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483683804023-fca587f754ef?q=80&w=800&auto=format&fit=crop"
        ],
        details: {
            itinerary: [
                { day: 1, title: "Welcome to Paradise", description: "Arrive at Male Airport and transfer to your luxury resort via speedboat. Enjoy your first Maldivian sunset." },
                { day: 2, title: "Ocean Exploration", description: "Start your day with a guided snorkeling session in the house reef. Discover vibrant coral lives and exotic fish." },
                { day: 3, title: "Sandbank Picnic", description: "Private boat trip to a secluded sandbank for a gourmet picnic and relaxation in the sun." },
                { day: 4, title: "Spa & Sunset Cruise", description: "Indulge in a signature overwater spa treatment. Cap off the day with a romantic sunset dolphin cruise." },
                { day: 5, title: "Leisure & Farewell", description: "Morning at leisure for final swim or souvenir shopping before transferring back to Male Airport." }
            ],
            exclusions: ["International Flights", "Optional Excursions", "Premium Spirits"]
        }
    },
    {
        slug: "thai-adventures",
        title: "Thai Adventures",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
        description: "Explore the bustling streets of Bangkok and the serene beaches of Phuket.",
        highlights: ["Island Hopping", "Street Food Path", "Temple Tours"],
        price: "AED 3,450",
        rating: 4.6,
        inclusions: ["Hotels", "Internal Flights", "Guided Tours"],
        category: 'international',
        color: "from-emerald-500/20 to-teal-500/20",
        gallery: [
            "https://images.unsplash.com/photo-1528181304800-2f140819898c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
        ],
        details: {
            itinerary: [
                { day: 1, title: "Bangkok Arrival", description: "Explore the vibrant streets of Bangkok. Evening welcome dinner by the river." },
                { day: 2, title: "Temples & Grand Palace", description: "Visit Wat Phra Kaew, Wat Pho, and the majestic Grand Palace with an expert local guide." },
                { day: 3, title: "Street Food Tour", description: "A culinary journey through Bangkok's famous street food stalls. Transfer to Phuket in the evening." },
                { day: 4, title: "Phuket Beach Day", description: "Relax at Patong Beach or explore the quieter Kata Noi. Optional Thai massage on the beach." },
                { day: 5, title: "Phi Phi Island Hopping", description: "Full-day speedboat tour to Phi Phi Islands, Maya Bay, and Pileh Lagoon. Snorkeling included." },
                { day: 6, title: "Old Phuket Town", description: "Discover the Sino-Portuguese architecture and vibrant markets of Phuket Old Town." },
                { day: 7, title: "Departure", description: "Morning for last-minute shopping at Central Phuket before transferring to the airport." }
            ],
            exclusions: ["Visa on Arrival fees", "Personal shopping", "Optional activities"]
        }
    },
    {
        slug: "singapore-vibes",
        title: "Singapore Vibes",
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=800&auto=format&fit=crop",
        description: "A futuristic city-state blending nature with cutting-edge architecture.",
        highlights: ["Gardens by the Bay", "Sentosa Island", "Universal Studios"],
        price: "AED 3,890",
        rating: 4.8,
        inclusions: ["Central Hotel", "Entry Tickets", "Airport Transfers"],
        category: 'international',
        color: "from-red-500/20 to-orange-500/20"
    },
    {
        slug: "truly-asia-malaysia",
        title: "Truly Asia: Malaysia",
        duration: "6 Days",
        image: "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?auto=format&fit=crop&w=800&q=80",
        description: "From the Petronas Towers to the green highlands of Cameron.",
        highlights: ["KL City Tour", "Batu Caves", "Genting Highlands"],
        price: "AED 2,900",
        rating: 4.5,
        inclusions: ["City Hotel", "Highland Stay", "Tours"],
        category: 'international',
        color: "from-yellow-500/20 to-amber-500/20"
    },
    {
        slug: "turkish-delight",
        title: "Turkish Delight",
        duration: "8 Days",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
        description: "Where East meets West. Discover the rich history of Istanbul and Cappadocia.",
        highlights: ["Hot Air Balloon", "Cave Hotels", "Bosphorus Cruise"],
        price: "AED 5,200",
        rating: 4.8,
        inclusions: ["Boutique Hotels", "All Transfers", "Daily Breakfast"],
        category: 'international',
        color: "from-rose-500/20 to-pink-500/20",
        gallery: [
            "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop"
        ],
        details: {
            itinerary: [
                { day: 1, title: "Istanbul Arrival", description: "Welcome to Istanbul. Transfer to your boutique hotel in the Sultanahmet district." },
                { day: 2, title: "Classic Istanbul", description: "Visit the Blue Mosque, Hagia Sophia, and Topkapi Palace. Evening Bosphorus dinner cruise." },
                { day: 3, title: "Grand Bazaar", description: "Explore the historic Grand Bazaar and Spice Market. Afternoon flight to Cappadocia." },
                { day: 4, title: "Cappadocia Balloon Flight", description: "Sunrise hot air balloon flight over the fairy chimneys. Goreme Open Air Museum visit." },
                { day: 5, title: "Underground Cities", description: "Explore Kaymakli Underground City and Ihlara Valley. Relax in a traditional cave hotel." },
                { day: 6, title: "Antalya Coastal Luxury", description: "Flight to Antalya. Check into your seaside resort and relax by the turquoise waters." },
                { day: 7, title: "Perge & Aspendos", description: "Full-day tour of ancient Roman ruins and the world-famous Aspendos theater." },
                { day: 8, title: "Farewell Antalya", description: "Free morning for sunbathing or shopping before your evening flight home." }
            ],
            exclusions: ["International Airfare", "Balloon flight insurance", "Lunch & Dinner (Antalya)"]
        }
    },
    {
        slug: "georgia-wonders",
        title: "Georgia Wonders",
        duration: "5 Days",
        image: "/assets/georgia_new.png",
        description: "Snow-capped mountains and ancient wine regions in the heart of the Caucasus.",
        highlights: ["Tbilisi City", "Kazbegi Peaks", "Wine Tasting"],
        price: "AED 2,400",
        rating: 4.7,
        inclusions: ["Hotels", "Mountain Tours", "Airport Pickups"],
        category: 'international',
        color: "from-indigo-500/20 to-purple-500/20"
    },
    {
        slug: "baku-beyond",
        title: "Baku & Beyond",
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800&auto=format&fit=crop",
        description: "The city of winds awaits with its blend of modern and ancient architecture.",
        highlights: ["Flame Towers", "Old City", "Gobustan Rock Art"],
        price: "AED 1,999",
        rating: 4.6,
        inclusions: ["4* Hotel", "Guided Tours", "Transfers"],
        category: 'international',
        color: "from-blue-500/20 to-indigo-500/20"
    },
    {
        slug: "european-dream",
        title: "European Dream",
        duration: "10 Days",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
        description: "The ultimate journey across Paris, Swiss Alps, and the canals of Venice.",
        highlights: ["Eiffel Tower", "Mount Titlis", "Gondola Ride"],
        price: "AED 9,500",
        rating: 4.9,
        inclusions: ["Luxury Hotels", "EuroRail Pass", "Selected Tours"],
        category: 'international',
        color: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
        slug: "bali-spirit",
        title: "Bali Spirit",
        duration: "6 Days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        description: "Experience the spiritual heart of Bali with its lush jungles and pristine beaches.",
        highlights: ["Ubud Monkey Forest", "Uluwatu Temple", "Tegalalang Rice Terrace"],
        price: "AED 3,100",
        rating: 4.8,
        inclusions: ["Pool Villa", "Breakfast", "Private Driver"],
        category: 'international'
    },
    {
        slug: "incredible-india",
        title: "Incredible India",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=800&auto=format&fit=crop",
        description: "A golden triangle tour covering Delhi, Agra, and the pink city of Jaipur.",
        highlights: ["Taj Mahal at Sunrise", "Amber Fort", "Delhi Street Food"],
        price: "AED 2,800",
        rating: 4.7,
        inclusions: ["Heritage Hotels", "Private Car", "Local Guides"],
        category: 'international'
    },
    {
        slug: "vietnam-trails",
        title: "Vietnam Trails",
        duration: "8 Days",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
        description: "From the emerald waters of Ha Long Bay to the historic streets of Hoi An.",
        highlights: ["Ha Long Bay Cruise", "Ancient Town Hoi An", "Cu Chi Tunnels"],
        price: "AED 3,600",
        rating: 4.6,
        inclusions: ["Boutique Stays", "Internal Flights", "Boat Tours"],
        category: 'international'
    }
];

export const allPackages = [...uaePackages, ...internationalPackages];

export const getPackageBySlug = (slug: string) => {
    return allPackages.find(p => p.slug === slug);
};
