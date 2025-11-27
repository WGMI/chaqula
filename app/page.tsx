import Image from "next/image";
import CatenaryGallery from "./components/CatenaryGallery";

export default function Home() {
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
        <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/images/chilled.jpg"
              alt="Qamili"
              width={400}
              height={550}
              className="rounded-lg shadow-lg object-cover ml-30"
              style={{ maxHeight: "600px" }}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-[#5C3A21] mb-6">HI, I&apos;M QAMILI!</h2>
            <p className="text-4xl text-[#5C3A21] leading-relaxed">
              I&apos;m a lot of things - food and travel content creator, chef, food tour guide, manager at our family&apos;s advertising agency, and most importantly, a very proud dog mama to my son Mr. Socks!
            </p>
          </div>
        </section>

        {/* Hanging Gallery Section */}
        <section className="container mx-auto px-6 py-12">
          <CatenaryGallery images={hangingImages} />
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

        {/* Social Media Icons */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white hover:bg-[#5C3A21] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
  );
}