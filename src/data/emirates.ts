export interface Destination {
    name: string;
    image: string;
    description: string;
}

export interface EmirateData {
    id: string;
    name: string;
    tagline: string;
    heroImage: string;
    description: string;
    longDescription: string;
    destinations: Destination[];
    highlights: { icon: string; title: string; desc: string }[];
}

export const emiratesData: Record<string, EmirateData> = {
    'dubai': {
        id: 'dubai',
        name: 'Dubai',
        tagline: 'City of Infinite Possibilities',
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=1920&q=80',
        description: 'Iconic luxury meeting futuristic ambition.',
        longDescription: 'Dubai is a city of superlatives—home to the world’s tallest building, largest mall, and most ambitious man-made islands. It is a global hub where cultures merge and luxury knows no bounds.',
        destinations: [
            { name: 'Burj Khalifa', image: 'https://images.unsplash.com/photo-1544413204-6385a4dd0a02?auto=format&fit=crop&w=800&q=80', description: 'The pinnacle of modern engineering and the world’s tallest tower.' },
            { name: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=800&q=80', description: 'A magnificent man-made island sanctuary in the Arabian Gulf.' },
            { name: 'Museum of the Future', image: 'https://images.unsplash.com/photo-1647428789506-69d80d220803?auto=format&fit=crop&w=800&q=80', description: 'Step into the world of tomorrow in this stunning architectural marvel.' },
            { name: 'Dubai Desert Reserve', image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80', description: 'Experience the raw beauty of the Arabian sands in a protected sanctuary.' },
            { name: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80', description: 'A vibrant waterfront community with stunning skyscrapers.' }
        ],
        highlights: [
            { icon: 'Building2', title: 'Urban Grandeur', desc: 'World-class architecture and shopping.' },
            { icon: 'Palmtree', title: 'Beach Luxury', desc: 'Pristine resorts and beach clubs.' },
            { icon: 'Zap', title: 'Futuristic', desc: 'Leading the world in innovation.' }
        ]
    },
    'abu-dhabi': {
        id: 'abu-dhabi',
        name: 'Abu Dhabi',
        tagline: 'The Cultural Heart of the Emirates',
        heroImage: 'https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=1920&q=80',
        description: 'Modern marvels rooted in deep tradition.',
        longDescription: 'As the capital of the UAE, Abu Dhabi offers a serene blend of cultural heritage and contemporary luxury. It is home to stunning mosques, world-class museums, and beautiful mangrove forests.',
        destinations: [
            { name: 'Sheikh Zayed Mosque', image: 'https://images.unsplash.com/photo-1544249155-523194090288?auto=format&fit=crop&w=800&q=80', description: 'A masterpiece of Islamic architecture and a symbol of peace.' },
            { name: 'Louvre Abu Dhabi', image: 'https://images.unsplash.com/photo-1518998053574-53ee7961ae65?auto=format&fit=crop&w=800&q=80', description: 'A universal museum celebrating human creativity across cultures.' },
            { name: 'Qasr Al Watan', image: 'https://images.unsplash.com/photo-1578308464714-5e5864190822?auto=format&fit=crop&w=800&q=80', description: 'The Palace of the Nation, showcasing Arabic craftsmanship and heritage.' },
            { name: 'Mangrove National Park', image: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80', description: 'Explore a unique ecosystem of waterways and avian wildlife.' },
            { name: 'Yas Island', image: 'https://images.unsplash.com/photo-1580237072617-771ad308ad12?auto=format&fit=crop&w=800&q=80', description: 'The ultimate entertainment destination with Ferrari World and F1 racing.' }
        ],
        highlights: [
            { icon: 'Globe', title: 'Cultural Hub', desc: 'Home to the Louvre and Guggenheim.' },
            { icon: 'Shield', title: 'Capital Peace', desc: 'A serene and dignified atmosphere.' },
            { icon: 'Car', title: 'Yas Racing', desc: 'Thrilling motorsport experiences.' }
        ]
    },
    'sharjah': {
        id: 'sharjah',
        name: 'Sharjah',
        tagline: 'The Cultural Soul of the UAE',
        heroImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1920&q=80',
        description: 'Traditional heritage and artistic depth.',
        longDescription: 'Sharjah is known as the cultural capital of the Arab world. Its museums, traditional souks, and historic districts offer an authentic journey into Emirati life and history.',
        destinations: [
            { name: 'Al Noor Island', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80', description: 'A beautiful oasis of art, nature, and inspiration.' },
            { name: 'Blue Souk', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', description: 'An iconic market for traditional goods and jewelry.' },
            { name: 'Mleiha Archaeological Centre', image: 'https://images.unsplash.com/photo-1547285189-5f80727931c8?auto=format&fit=crop&w=800&q=80', description: 'Uncover the history of mankind in the heart of the desert.' },
            { name: 'Khor Fakkan Amphitheatre', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A Roman-style theatre set against a breathtaking mountain backdrop.' },
            { name: 'Heart of Sharjah', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'The largest heritage project in the Gulf with authentic Emirati architecture.' }
        ],
        highlights: [
            { icon: 'FileText', title: 'Arts & Heritage', desc: 'The region’s leading cultural scene.' },
            { icon: 'Star', title: 'Authentic', desc: 'Deeply rooted Emirati traditions.' },
            { icon: 'Clock', title: 'Peaceful', desc: 'A calm and family-friendly environment.' }
        ]
    },
    'ras-al-khaimah': {
        id: 'ras-al-khaimah',
        name: 'Ras Al Khaimah',
        tagline: 'Adventure Awaits in the Mountains',
        heroImage: 'https://images.unsplash.com/photo-1589133918281-69796853239a?auto=format&fit=crop&w=1920&q=80',
        description: 'Rugged nature and outdoor adventures.',
        longDescription: 'RAK offers a unique blend of majestic mountains, red sandy deserts, and lush greenery. It’s the UAE’s premier destination for adventure seekers and nature lovers.',
        destinations: [
            { name: 'Jebel Jais', image: 'https://images.unsplash.com/photo-1589133918281-69796853239a?auto=format&fit=crop&w=800&q=80', description: 'The highest peak in the UAE with world-class ziplines.' },
            { name: 'Al Wadi Desert', image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80', description: 'Luxury desert living amongst dunes and wildlife.' },
            { name: 'Dhayah Fort', image: 'https://images.unsplash.com/photo-1589133918281-69796853239a?auto=format&fit=crop&w=800&q=80', description: 'A historic hilltop fort with panoramic mountain views.' },
            { name: 'Al Marjan Island', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A stunning man-made archipelago offering luxury waterfront living.' },
            { name: 'Jazirat Al Hamra', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'An ancient pearling village that stands as a ghost town today.' }
        ],
        highlights: [
            { icon: 'Zap', title: 'Adventure', desc: 'Ziplining and hiking at Jebel Jais.' },
            { icon: 'Palmtree', title: 'Desert Oasis', desc: 'Unique terracotta dunes.' },
            { icon: 'Shield', title: 'Relaxation', desc: 'Pristine, quiet beaches.' }
        ]
    },
    'fujairah': {
        id: 'fujairah',
        name: 'Fujairah',
        tagline: 'Ocean Paradise and Mountain Mist',
        heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80',
        description: 'Coastal beauty and deep-sea diving.',
        longDescription: 'The only emirate situated on the east coast, Fujairah is a sanctuary of mountains and sea. Its crystal-clear waters make it a paradise for diving and clinical snorkeling.',
        destinations: [
            { name: 'Snoopy Island', image: 'https://images.unsplash.com/photo-1544911845-1ca323145455?auto=format&fit=crop&w=800&q=80', description: 'A famous snorkelling and diving spot with crystal clear water.' },
            { name: 'Fujairah Fort', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A 16th-century fort standing tall against the Hajjar mountains.' },
            { name: 'Al Bidyah Mosque', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'The oldest known mosque in the UAE.' },
            { name: 'Sheikh Zayed Mosque Fujairah', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A magnificent white mosque that dominates the city skyline.' },
            { name: 'Khor Fakkan Beach', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'Pristine golden sands surrounded by mountains and azure waters.' }
        ],
        highlights: [
            { icon: 'Globe', title: 'Ocean Views', desc: 'The best diving spots in the UAE.' },
            { icon: 'Shield', title: 'Mountain Mist', desc: 'Cooler climates and rugged trails.' },
            { icon: 'Star', title: 'Ancient', desc: 'Home to the UAE’s oldest heritage.' }
        ]
    },
    'ajman': {
        id: 'ajman',
        name: 'Ajman',
        tagline: 'White Sands and Coastal Charm',
        heroImage: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=1920&q=80',
        description: 'Peaceful vibes and pristine beaches.',
        longDescription: 'Ajman may be the smallest emirate, but it boasts some of the most beautiful coastlines in the country. It’s a peaceful retreat for those who love the sea and history.',
        destinations: [
            { name: 'Ajman Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', description: 'Pristine white sands and relaxing waterfront paths.' },
            { name: 'Al Zorah Nature Reserve', image: 'https://images.unsplash.com/photo-154413204-6385a4dd0a02?auto=format&fit=crop&w=800&q=80', description: 'A hidden haven of mangroves and birdlife.' },
            { name: 'Ajman Museum', image: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=800&q=80', description: 'An 18th-century fort turned into a heritage museum.' },
            { name: 'Masfout Mountain Enclave', image: 'https://images.unsplash.com/photo-1589133918281-69796853239a?auto=format&fit=crop&w=800&q=80', description: 'A cool mountain retreat offering hiking and historic lookouts.' },
            { name: 'Ajman Corniche', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'The perfect spot for evening strolls with panoramic ocean views.' }
        ],
        highlights: [
            { icon: 'Palmtree', title: 'Coastal Retreat', desc: 'Relaxed and uncrowded beaches.' },
            { icon: 'FileText', title: 'Rich History', desc: 'Tradition meets modern luxury.' },
            { icon: 'Zap', title: 'Accessible', desc: 'Compact and easy to explore.' }
        ]
    },
    'umm-al-quwain': {
        id: 'umm-al-quwain',
        name: 'Umm Al Quwain',
        tagline: 'The Serene Lagoon Escape',
        heroImage: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1920&q=80',
        description: 'Lush mangroves and tranquil lagoon vibes.',
        longDescription: 'UAQ is the least populated emirate, making it a perfectly tranquil destination. It’s famous for its lush mangroves, serene lagoons, and vintage charm.',
        destinations: [
            { name: 'UAQ Mangroves', image: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80', description: 'Paddle through pristine mangrove forests and spot wildlife.' },
            { name: 'Siniyah Island', image: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80', description: 'A natural island sanctuary for gazelles and migratory birds.' },
            { name: 'Dreamland Aqua Park', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A classic family entertainment park with water fun.' },
            { name: 'Falaj Al Mualla Fort', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A 19th-century fort that served as the protector of the inland oasis.' },
            { name: 'Kite Beach Center', image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80', description: 'A trendy eco-friendly beach spot perfect for watersports.' }
        ],
        highlights: [
            { icon: 'Compass', title: 'Mangrove Trails', desc: 'Eco-tourism at its finest.' },
            { icon: 'Clock', title: 'Slow Living', desc: 'Escape the bustle of city life.' },
            { icon: 'Shield', title: 'Safe Havens', desc: 'Perfect for quiet family retreats.' }
        ]
    }
};
