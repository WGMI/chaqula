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
        <section className="container mx-auto px-6 py-12">
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
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07.14 1.61.23.5.58.94 1.03 1.26.88.6 2.15.66 3.12.21.97-.45 1.51-1.43 1.51-2.51.01-2.89 0-5.78 0-8.67 0-.05.01-.1.01-.15.01-.01.01-.02.01-.03 1.54.09 3.05.52 4.28 1.3 1.03.66 1.78 1.66 2.12 2.87.01.02.01.04.02.06v4.28c-.42-.01-.84-.03-1.26-.06-1.28-.1-2.6-.39-3.74-.87-.38-.16-.76-.36-1.13-.57v7.33c0 .96-.24 1.89-.68 2.68-1.08 1.98-3.26 3.26-5.56 3.06-1.5-.13-2.93-.72-4.02-1.65-1.77-1.52-2.84-3.87-2.88-6.23-.05-2.53 1.14-5.01 3.15-6.61 1.97-1.58 4.6-2.26 7.2-1.85.01 1.99.01 3.98-.01 5.97-.19-1.3-1.26-2.4-2.56-2.71-.9-.21-1.87-.02-2.6.52-.48.36-.82.87-.95 1.44-.12.57-.04 1.18.22 1.72.51 1.05 1.58 1.78 2.79 1.87 1.37.1 2.73-.35 3.68-1.18.3-.27.54-.6.71-.97.18-.42.25-.88.2-1.34-.01-.05-.01-.1-.02-.15-.01-.01-.01-.02-.01-.03v-8.28c0-2.89 0-5.79.01-8.68.01-.05.01-.1.01-.15z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
  );
}