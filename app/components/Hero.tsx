"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  slideshowImages?: { src: string; link: string }[] | null;
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
    <section 
      className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" 
      style={{ height: `clamp(400px, ${height}, 100vh)` }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative h-full flex flex-col md:flex-row z-10">
        {/* Left Column - Full width on mobile, 1/3 on desktop */}
        <div className={`${slideshowImages && slideshowImages.length > 0 ? "w-full md:w-1/3 items-start" : "w-full items-center"} flex flex-col justify-center px-4 sm:px-6 md:px-12 py-8 md:py-0`}>
          {/* Left aligned text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 md:mb-4 text-left leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-left leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right Column - Full width on mobile, 2/3 on desktop with Slideshow */}
        {slideshowImages && slideshowImages.length > 0 && (
        <div className="w-full md:w-2/3 relative overflow-hidden min-h-[300px] md:min-h-0">
          <div className="h-full flex gap-2 sm:gap-3 md:gap-4 items-center px-2 sm:px-4 animate-scroll">
            {slideshowImages && slideshowImages.map((slide, index) => {
              const handleClick = () => {
                if (slide.link.startsWith('#')) {
                  // Update URL hash
                  window.history.pushState(null, '', slide.link);
                  const element = document.querySelector(slide.link);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  window.open(slide.link, '_self');
                }
              };
              return (
                <div
                  key={index}
                  className="flex-shrink-0 relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 cursor-pointer"
                  onClick={handleClick}
                >
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-2xl border-2 sm:border-4 border-white/80"
                  />
                </div>
              );
            })}
            {/* Duplicate images for seamless loop */}
            {slideshowImages && slideshowImages.length > 0 && slideshowImages.map((slide, index) => {
              const handleClick = () => {
                if (slide.link.startsWith('#')) {
                  // Update URL hash
                  window.history.pushState(null, '', slide.link);
                  const element = document.querySelector(slide.link);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  window.open(slide.link, '_self');
                }
              };
              return (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 cursor-pointer"
                  onClick={handleClick}
                >
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-2xl border-2 sm:border-4 border-white/80"
                  />
                </div>
              );
            })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

