import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const contentBlocks = [
    {
      title: "THINGS TO DO",
      image: "/images/activites/beach.png",
      alt: "Snorkeling in Mombasa",
      text: "           ",
      link: "/things-to-do",
    },
    {
      title: "PLACES TO EAT",
      image: "/images/activites/market.png",
      alt: "Local food cooking",
      text: "           ",
      link: "/explore",
    },
    {
      title: "FOOD TOURS",
      image: "/images/foodbanner.jpg",
      alt: "Food items",
      text: "           ",
      link: "/tours",
    },
  ];

  return (
    <main className="bg-[#5C3A21] min-h-screen">
      {/* Main Title */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
          Welcome to Mombasa!
        </h1>

        {/* Content Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentBlocks.map((block, index) => (
            <Link
              key={index}
              href={block.link}
              className="bg-[#D4A574] border-2 border-[#8B5A3C] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-black mb-4 text-center">
                  {block.title}
                </h2>
                <div className="mb-4">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <p className="text-black text-sm leading-relaxed">
                  {block.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}