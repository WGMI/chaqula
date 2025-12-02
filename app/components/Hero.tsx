"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  slideshowImages?: string[] | null;
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  slideshowImages = null,
  height = "600px",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ height }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative h-full flex z-10">
        {/* Left Column - 1/3 width */}
        <div className={`${slideshowImages && slideshowImages.length > 0 ? "w-1/3 items-start" : "w-full items-center"} flex flex-col justify-center px-6 md:px-12`}>
          {/* Left aligned text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-left">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white text-left">
            {subtitle}
          </p>
        </div>

        {/* Right Column - 2/3 width with Slideshow */}
        {slideshowImages && slideshowImages.length > 0 && (
        <div className="w-2/3 relative overflow-hidden">
          <div className="h-full flex gap-4 items-center px-4 animate-scroll">
            {slideshowImages && slideshowImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative w-64 h-80 md:w-80 md:h-96"
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-2xl border-4 border-white/80"
                />
              </div>
            ))}
            {/* Duplicate images for seamless loop */}
            {slideshowImages && slideshowImages.length > 0 && slideshowImages.map((img, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 relative w-64 h-80 md:w-80 md:h-96"
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-2xl border-4 border-white/80"
                />
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

