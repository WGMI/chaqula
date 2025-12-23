"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import { useEffect, useRef, useState } from "react";

interface TransportOption {
  id: string;
  title: string;
  description: string;
  image: string;
  tips?: string;
}

const transportOptions: TransportOption[] = [
  {
    id: "tuktuk",
    title: "TUK TUK",
    description: "These three-wheeled vehicles are available in shared and private options, making them popular with tourists and locals alike. They're affordable for shorter distances, and price negotiation is common—though be aware that a 'foreigner tax' is often applied.",
    image: "/transport/tuk.png",
  },
  {
    id: "matatu",
    title: "MATATUS",
    description: "These colourful and loud mini-vans are an adventure in themselves. Known for breaking road rules, they offer cheap and quick transport throughout the city. They&apos;re labeled by Sacco names but can be identified by conductors shouting destinations at &apos;stages&apos; (stops). Don&apos;t hesitate to ask friendly locals for guidance on which matatu to take.",
    image: "/transport/mat.png",
  },
  {
    id: "taxi",
    title: "TAXIS AND RIDE HAILING APPS",
    description: "Taxi apps like Uber, Bolt, and Little offer efficiency, safety, and affordability compared to flagging down taxis on the street. Insider tip: Drivers sometimes ask for more money than the app shows due to fuel price changes. Consider linking a card for automatic payment, or politely stick to the app&apos;s displayed price. Tipping is polite but not compulsory.",
    image: "/transport/cab.png",
  },
  {
    id: "boda",
    title: "BODA BODAS",
    description: "These motorcycle taxis are ideal for humid days when you want to feel the wind and see the city from a new perspective. Always wear helmets and protective gear, and don't hesitate to speak up if your rider is speeding or swerving dangerously.",
    image: "/transport/piki.png",
  },
];

export default function TransportPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Check if the section is fully visible (100% in viewport)
            if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: [0.9, 1.0], // Trigger when 90% or more is visible
          rootMargin: "0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getPreviousIndex = (currentIndex: number) => {
    return currentIndex === 0 ? transportOptions.length - 1 : currentIndex - 1;
  };

  const getNextIndex = (currentIndex: number) => {
    return currentIndex === transportOptions.length - 1 ? 0 : currentIndex + 1;
  };

  const previousIndex = getPreviousIndex(activeIndex);
  const nextIndex = getNextIndex(activeIndex);

  return (
    <main className="bg-[#D4A574]">
      {/* Hero Section */}
      <Hero
        title="Transport in Mombasa"
        subtitle="Getting around the city - Your guide to Mombasa's transportation options:"
        backgroundImage="/images/hanging/tusks.jpg"
      />

      {/* Introduction Text */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-4 text-[#5C3A21]">
          <p className="text-lg leading-relaxed">
            You&apos;re finally here. The humidity has hit and you&apos;ve realised that this isn&apos;t a walkable city by any stretch of the imagination (unless bathing in your own sweat sounds fun,) so you need to figure out how you&apos;ll be getting around.
          </p>
          <p className="text-lg leading-relaxed">
            Getting around Mombasa is actually pretty straightforward, with enough options for every budget and adventure level.
          </p>
        </div>
      </section>

      {/* Transport Options Section */}
      <section className="relative min-h-screen">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Scrollable Content */}
            <div className="space-y-24 lg:space-y-32">
              {transportOptions.map((option, index) => (
                <div
                  key={option.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className="space-y-6 min-h-[60vh] flex flex-col justify-center"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C3A21] mb-4">
                    {option.title}
                  </h2>
                  <div className="w-24 h-1 bg-[#8B5A3C] mb-6"></div>
                  <p className="text-lg md:text-xl text-[#5C3A21] leading-relaxed">
                    {option.description}
                  </p>
                  {option.tips && (
                    <div className="mt-6 p-4 bg-[#8B5A3C]/10 rounded-lg border-l-4 border-[#8B5A3C]">
                      <p className="text-sm font-semibold text-[#5C3A21] mb-2">
                        Insider Tip:
                      </p>
                      <p className="text-sm text-[#5C3A21]">
                        {option.tips}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Fixed Image Display (Letter Layout) */}
            <div className="sticky top-12 h-[calc(100vh-6rem)] lg:block hidden">
              <div className="relative w-full h-full flex flex-col">
                {/* Previous Image - Top Right (Header) */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 z-10">
                  <div className="relative w-full h-full opacity-60 transition-opacity duration-300">
                    <Image
                      src={transportOptions[previousIndex].image}
                      alt={transportOptions[previousIndex].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Main Focus Image - Center (Body) */}
                <div className="flex-1 flex items-center justify-center relative z-20">
                  <div className="relative w-full h-full max-h-[50vh]">
                    <Image
                      src={transportOptions[activeIndex].image}
                      alt={transportOptions[activeIndex].title}
                      fill
                      className="object-contain transition-opacity duration-500"
                      priority={activeIndex === 0}
                    />
                  </div>
                </div>

                {/* Next Image - Bottom Right (Footer) */}
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 z-10">
                  <div className="relative w-full h-full opacity-60 transition-opacity duration-300">
                    <Image
                      src={transportOptions[nextIndex].image}
                      alt={transportOptions[nextIndex].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View - Show current image only */}
            <div className="lg:hidden mt-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src={transportOptions[activeIndex].image}
                  alt={transportOptions[activeIndex].title}
                  fill
                  className="object-contain"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contacts Section */}
      <section className="bg-[#D4A574] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Decorative horizontal bar */}
            <div className="w-full max-w-md mx-auto h-2 bg-[#8B5A3C] mb-8"></div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 text-center">
              LOCAL CONTACTS
            </h2>
            
            {/* Content */}
            <div className="space-y-6 text-black text-lg leading-relaxed text-left">
              {/* Introduction paragraph */}
              <p>
                It is always good to know someone who knows someone (I&apos;m someone so let me tell you about someone!) These are people already vetted for having good driving etiquette and reliability. When in doubt, they&apos;re the ones to call.
              </p>
              
              {/* Hillary section */}
              <p>
                I&apos;ve got to shout out my guy Hillary, hands down the best tuk tuk driver in the city. He is fairly priced & knows his way around. To inquire about his services, contact him through:
              </p>
              <p className="pl-6">
                <a
                  href="tel:+254701326413"
                  className="text-black hover:underline"
                >
                  +254 701 326 413
                </a>
              </p>
              
              {/* Tyson section */}
              <p>
                And then there&apos;s Tyson, Mr Thumbs Up! I met Tyson five years ago when he was driving a tuk tuk (now upgraded to a 7-seater car) and instantly connected with him. He was incredibly friendly, hilarious, and had this infectious energy that just made every ride memorable. Everyone I know who&apos;s met Tyson has nothing but good things to say about him.
              </p>
              
              {/* Tyson contact info */}
              <p>
                Check him out on IG{" "}
                <a
                  href="https://instagram.com/tysonstaxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  @tysonstaxi
                </a>
              </p>
              <p>
                Or give him a call when you need reliable transport around Mombasa:{" "}
                <a
                  href="tel:+254718871516"
                  className="text-black hover:underline"
                >
                  0718 871 516
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

