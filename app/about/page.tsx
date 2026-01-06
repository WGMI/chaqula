import Image from "next/image";
import CatenaryGallery from "../components/CatenaryGallery";

export default function About() {
  const hangingImages = [
    "eating.jpg",
    "holding.jpg",
    "outside.jpeg",
    "plate.jpg",
    "seated.jpeg",
    "side.jpeg",
  ];

  return (
    <main className="bg-[#D4A574]">
        {/* Intro Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mx-0">
                <Image
                  src="/images/chilled.jpg"
                  alt="Qamili"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C3A21] mb-4 md:mb-6">HI, I&apos;M QAMILI!</h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#5C3A21] leading-relaxed">
                I&apos;m a lot of things - food and travel content creator, chef, food tour guide, manager at our family&apos;s advertising agency, and most importantly, a very proud dog mama to my son Mr. Socks!
              </p>
            </div>
          </div>
        </section>

        {/* Text Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="space-y-6 text-[#5C3A21] text-lg leading-relaxed text-center">
            <p>
              I&apos;ve always been someone who gets excited about food. Growing up in Mombasa, in Town, with family at the center of everything, food was never just about eating - it was about connection, stories, and keeping traditions alive.
            </p>
            <p>
              That love led me to pursue culinary arts at Boma International Hospitality College, and somewhere along the way, I started sharing bits of my journey online.
            </p>
            <p>
              What began as posting about my culinary adventures turned into selling brownies (which managed to become popular in their own right), then sharing recipes, and before I knew it, I had built this whole organic community of fellow food lovers. The content evolved, the audience grew, and suddenly I wasn&apos;t just cooking - I was showing people my city through my love of food.
            </p>
            <p>
              Now I get to guide visitors through Old Town streets I&apos;ve known my whole life, connecting them with the vendors and flavors that make Mombasa home.
            </p>
            <p>
              When I&apos;m not leading food tours or creating content, you&apos;ll find me at the family business or experimenting in the kitchen.
            </p>
            <p>
              Mombasa isn&apos;t just where I&apos;m from - it&apos;s who I am. And I can&apos;t wait to share it with you.
            </p>
          </div>
        </section>

        {/* Hanging Gallery Section */}
        <section className="container mx-auto px-6 py-12 hidden md:block">
          <CatenaryGallery images={hangingImages} />
        </section>

        {/* Social Media Icons */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/chaqula_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@chaqula_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@chaqula_?_t=8fU0HeWtiic&_r=1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
  );
}