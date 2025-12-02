"use client";

import Image from "next/image";
import { useState } from "react";
import Hero from "../components/Hero";

interface Place {
  id: string;
  name: string;
  type: string;
  hours: string;
  description: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  whatToTry?: string;
}

const places: Place[] = [
  {
    id: "1",
    name: "Mama Khadijas",
    type: "Swahili Bitings",
    hours: "Open Daily 4pm - 6:30pm",
    description: "Her bhajias and ukwaju sauce are amazing! So crispy and soft!",
    image: "/images/hanging/plate.jpg", // Using available image as placeholder
    location: { lat: -4.0435, lng: 39.6682 },
    whatToTry: "Viazi karai (deep fried coated potatoes) and bhajia (a fritter similar to falafel) with fresh ukwaju (tamarind chutney) & coconut chutney."
  },
  {
    id: "2",
    name: "Mikes Cafe",
    type: "Swahili Snacks",
    hours: "Open Daily 8am - 6pm",
    description: "Kebabs - literally the best in Mombasa, so crunchy and soft inside! Goes well with a squeeze of lemon or coconut chutney! Their chana bateta is also really good, it's a rich coconut based loaded soup type situation!",
    image: "/images/hanging/eating.jpg", // Using available image as placeholder
    location: { lat: -4.0500, lng: 39.6700 },
    whatToTry: "Kebabs and chana bateta"
  },
  {
    id: "3",
    name: "Cafe Ayaz",
    type: "Mombasa Food/snacks",
    hours: "Open Daily 10am - 4pm",
    description: "Ayaz the owner is very sweet and so are all of the staff!",
    image: "/images/hanging/holding.jpg", // Using available image as placeholder
    location: { lat: -4.0550, lng: 39.6750 },
    whatToTry: "Chana bateta, maru bhajia (thinly sliced potatoes dipped in batter and fried), kebabs, samosas, and honey garlic wings"
  },
  {
    id: "4",
    name: "Forodhani Gardens",
    type: "Street Food Market",
    hours: "Open Daily 6pm - 11pm",
    description: "A vibrant night market with amazing street food! The atmosphere is electric and the food is fresh and delicious.",
    image: "/images/hanging/outside.jpeg",
    location: { lat: -4.0480, lng: 39.6720 },
    whatToTry: "Zanzibar pizza, mishkaki (grilled meat skewers), fresh sugarcane juice, and coconut ice cream"
  },
  {
    id: "5",
    name: "Tamarind Restaurant",
    type: "Fine Dining - Swahili Cuisine",
    hours: "Open Daily 12pm - 10pm",
    description: "Beautiful waterfront restaurant with authentic Swahili dishes. Perfect for a special occasion!",
    image: "/images/hanging/seated.jpeg",
    location: { lat: -4.0400, lng: 39.6650 },
    whatToTry: "Pilau (spiced rice), biryani, grilled fish, and their famous coconut curry"
  },
  {
    id: "6",
    name: "Bismillah Restaurant",
    type: "Traditional Swahili",
    hours: "Open Daily 7am - 9pm",
    description: "Family-run restaurant serving authentic Swahili breakfast and lunch. Their mandazi and mahamri are legendary!",
    image: "/images/hanging/plate.jpg",
    location: { lat: -4.0520, lng: 39.6680 },
    whatToTry: "Mahamri (sweet fried bread), mandazi, chai, and mbaazi (pigeon peas in coconut sauce)"
  },
  {
    id: "7",
    name: "Laziz Restaurant",
    type: "Indian-Swahili Fusion",
    hours: "Open Daily 11am - 10pm",
    description: "Amazing fusion of Indian and Swahili flavors! Their biryani and chapati are must-tries.",
    image: "/images/hanging/eating.jpg",
    location: { lat: -4.0470, lng: 39.6730 },
    whatToTry: "Chicken biryani, mutton curry, fresh chapati, and their special masala chai"
  },
  {
    id: "8",
    name: "Mama Ngina Drive Food Stalls",
    type: "Street Food",
    hours: "Open Daily 4pm - 8pm",
    description: "Local favorite spot for quick bites! The vendors are friendly and the food is always fresh and affordable.",
    image: "/images/hanging/holding.jpg",
    location: { lat: -4.0450, lng: 39.6700 },
    whatToTry: "Viazi karai, bhajia, samosas, and fresh fruit with chili salt"
  }
];

const slideshowImages = [
  "/images/hanging/eating.jpg",
  "/images/hanging/outside.jpeg",
  "/images/hanging/plate.jpg",
  "/images/hanging/seated.jpeg"
];

export default function ExplorePage() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Create Google Maps embed URL
  const getMapUrl = () => {
    if (selectedPlace) {
      // Center on selected place
      return `https://www.google.com/maps?q=${selectedPlace.location.lat},${selectedPlace.location.lng}&output=embed&z=15`;
    }
    // Default view of Mombasa with all places visible
    return `https://www.google.com/maps?q=-4.0435,39.6682&output=embed&z=13`;
  };

  return (
    <main className="bg-[#D4A574]">
      {/* Hero Section */}
      <Hero
        title="Places to Eat"
        subtitle="ChaQula's Recommendations of Mombasa Food:"
        backgroundImage="/images/hanging/tusks.jpg"
        slideshowImages={slideshowImages}
      />

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Places List */}
          <div className="space-y-6">
            {places.map((place) => (
              <div
                key={place.id}
                className={`bg-transparent rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedPlace?.id === place.id
                    ? "ring-4 ring-[#8B5A3C] scale-[1.02]"
                    : "hover:shadow-xl hover:scale-[1.01]"
                }`}
                onClick={() => setSelectedPlace(place)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-[#5C3A21] mb-1">
                          {place.name} - {place.type}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C3A21] mb-3 font-medium">
                      {place.hours}
                    </p>
                    {place.whatToTry && (
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-[#5C3A21] mb-1">
                          What to Try:
                        </p>
                        <p className="text-sm text-[#5C3A21] leading-relaxed">
                          {place.whatToTry}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-[#5C3A21] leading-relaxed">
                      {place.description}
                    </p>
                  </div>
                  <div className="relative w-full md:w-48 h-auto flex-shrink-0">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Google Map */}
          <div className="sticky top-6 h-[calc(200vh)]">
            <div className="h-full rounded-lg overflow-hidden shadow-2xl border-4 border-[#8B5A3C]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={getMapUrl()}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
