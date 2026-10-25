/**
 * BEMYIYATRI CENTRAL CONFIGURATION
 * Edit your brand details, contact information, tours, and hotels here.
 */
const CONFIG = {
    brandName: "Bemyyatri",
    tagline: "Your Journey Begins with Bemyyatri",
    domain: "https://www.bemyyatri.com",
    address: "A-23, A Block, Middle Circle, Connaught Place, New Delhi, India",
    emails: {
        info: "info@bemyyatri.com",
        piyush: "piyushtiwari@bemyyatri.com",
        kamal: "kamalpant@bemyyatri.com"
    },
    phones: {
        primary: "+91 97119 09240",
        secondary: "+91 98733 53560",
        displayPrimary: "97119 09240",
        displaySecondary: "98733 53560"
    },
    whatsapp: {
        number1: "919711909240",
        number2: "919873353560",
        defaultMessage: "Hello Bemyyatri, I am interested in planning an international trip."
    
    },
    forexExperience: "The founding and advisory team brings over 20 years of cumulative expertise in foreign currency exchange and international travel planning.",
    socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        linkedin: "#"
    },
    tours: [
        {
            id: "paris-romance",
            category: "paris",
            name: "Paris Romantic Getaway",
            duration: "6 Days / 5 Nights",
            price: "₹75,000 onwards",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            description: "Experience the magic of the City of Love with iconic landmarks, Seine river cruises, and cozy Parisian bistros.",
            highlights: ["Eiffel Tower Priority Access", "Seine River Cruise", "Montmartre Walking Tour"]
        },
        {
            id: "bali-bliss",
            category: "bali",
            name: "Bali Tropical Bliss",
            duration: "7 Days / 6 Nights",
            price: "₹55,000 onwards",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
            description: "Unwind in pristine beaches, lush green rice terraces, ancient temples, and world-class luxury resorts in Bali.",
            highlights: ["Ubud Monkey Forest & Terraces", "Tanah Lot Sunset Tour", "Nusa Penida Island Day Trip"]
        },
        {
            id: "swiss-europe",
            category: "europe",
            name: "Grand European Highlights",
            duration: "10 Days / 9 Nights",
            price: "₹1,45,000 onwards",
            image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
            description: "Explore the breathtaking landscapes of Switzerland, picturesque streets of Paris, and the historic canals of Amsterdam.",
            highlights: ["Interlaken & Mount Titlis", "Amsterdam Canal Cruise", "Paris City Tour"]
        },
        {
            id: "japan-cherry",
            category: "japan",
            name: "Japan Cultural Odyssey",
            duration: "8 Days / 7 Nights",
            price: "₹1,20,000 onwards",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
            description: "Discover the perfect blend of ancient traditions and futuristic neon cities in Tokyo, Kyoto, and Osaka.",
            highlights: ["Tokyo Skytree & Shibuya", "Kyoto Temples & Bamboo Forest", "Mount Fuji Viewpoint"]
        },
        {
            id: "thailand-escape",
            category: "thailand",
            name: "Thailand Island Explorer",
            duration: "6 Days / 5 Nights",
            price: "₹42,000 onwards",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
            description: "Enjoy vibrant nightlife, golden temples, crystal-clear waters, and white sandy beaches in Phuket and Bangkok.",
            highlights: ["Phi Phi Islands Speedboat Tour", "Bangkok Temple & City Tour", "Floating Market Experience"]
        },
        {
            id: "maldives-luxury",
            category: "maldives",
            name: "Maldives Overwater Luxury",
            duration: "5 Days / 4 Nights",
            price: "₹98,000 onwards",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
            description: "Indulge in ultimate relaxation with luxury overwater villas, turquoise lagoons, and world-class spa treatments.",
            highlights: ["Overwater Villa Stay", "Sunset Dolphin Cruise", "Snorkeling & Water Sports"]
        },
        {
            id: "spirit-valley",
            category: "spirit-valley",
            name: "Spirit Valley Serenity Retreat",
            duration: "7 Days / 6 Nights",
            price: "₹65,000 onwards",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            description: "Embark on a soulful retreat surrounded by mist-clad mountains, serene valleys, and restorative wellness journeys.",
            highlights: ["Guided Mountain Meditation", "Scenic Valley Trails", "Holistic Spa & Wellness Sessions"]
        }
    ],
    hotels: [
        {
            name: "The Grand Parisian Palace",
            category: "Luxury",
            location: "Paris, France",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            description: "Timeless Parisian elegance overlooking historical avenues with Michelin-starred dining."
        },
        {
            name: "Ubud Rainforest Sanctuary",
            category: "Boutique",
            location: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
            description: "Immersive nature resort nestled amidst lush tropical rainforests and sacred river valleys."
        },
        {
            name: "Alpine Crest Swiss Resort",
            category: "Luxury",
            location: "Interlaken, Switzerland",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
            description: "Luxurious alpine retreat offering panoramic views of snow-capped peaks and pristine lakes."
        },
        {
            name: "Maldives Azure Lagoon Resort",
            category: "Luxury",
            location: "Maldives",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            description: "Exclusive beachfront villas and private water sanctuaries with direct lagoon access."
        }
    ]
};