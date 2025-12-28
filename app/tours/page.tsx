import Hero from "../components/Hero";
import Image from "next/image";

export default function ToursPage() {
  const slideshowImages = [
    { src: "/images/hanging/eating.jpg", link: "#" },
    { src: "/images/hanging/plate.jpg", link: "#" },
    { src: "/images/hanging/seated.jpeg", link: "#" },
    { src: "/images/hanging/holding.jpg", link: "#" },
  ];

  return (
    <main className="bg-[#D4A574]">
      {/* Hero Section */}
      <Hero
        title="Food Tours"
        subtitle="Eat your way through the city with the Chaqula X Travel4Purpose Mombasa food tour."
        backgroundImage="/images/foodbanner.jpg"
        slideshowImages={slideshowImages}
      />

      {/* Information Section */}
      <section className="relative bg-[#D4A574]">
        {/* Torn paper effect at top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#D4A574] clip-path-torn"></div>
        
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="space-y-6 text-[#5C3A21] text-lg leading-relaxed">
            <p>
              This is a street food lover&apos;s paradise and absolutely essential for any foodie. As a Mombasa local, I&apos;ll guide you through Old Town streets I&apos;ve known since childhood, connecting you with veteran vendors who&apos;ve been perfecting their recipes for generations.
            </p>
            <p>
              Chaqula food tours go beyond typical tourist experiences. Every tour directly supports local businesses while you discover the stories behind popular dishes enjoyed by residents and visitors.
            </p>
            <p className="text-2xl font-bold text-center py-4">
              Come hungry, leave connected.
            </p>
          </div>

          {/* Booking Information */}
          <div className="mt-8 space-y-4 text-[#5C3A21]">
            <p>
              To book a tour visit our website:{" "}
              <a
                href="https://www.travel4purpose.com/tour/mombasa-food-tour/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#8B5A3C] transition-colors"
              >
                https://www.travel4purpose.com/tour/mombasa-food-tour/
              </a>
            </p>
            <p>
              Veg friendly & Old Town stroll tour:{" "}
              <a
                href="https://travel4purpose.com/tour/mombasa-food-tour/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#8B5A3C] transition-colors"
              >
                https://travel4purpose.com/tour/mombasa-food-tour/
              </a>
            </p>
          </div>

          {/* Price Breakdown */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#5C3A21] mb-6">
              Price Breakdown (Per Person):
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kenyan Citizens */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#5C3A21] mb-4">
                  Kenyan Citizens:
                </h3>
                <ul className="space-y-2 text-[#5C3A21]">
                  <li className="flex justify-between">
                    <span>Individual:</span>
                    <span className="font-semibold">KES 3,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Adults:</span>
                    <span className="font-semibold">KES 800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Children:</span>
                    <span className="font-semibold">KES 400</span>
                  </li>
                </ul>
              </div>

              {/* Non-Residents */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#5C3A21] mb-4">
                  Non-Residents:
                </h3>
                <ul className="space-y-2 text-[#5C3A21]">
                  <li className="flex justify-between">
                    <span>Adults:</span>
                    <span className="font-semibold">KES 2,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Children:</span>
                    <span className="font-semibold">KES 1,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-[#5C3A21]">
            <p>
              For more information or any changes in fees, check out their website below:{" "}
              <a
                href="https://www.fortjesusmombasa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#8B5A3C] transition-colors"
              >
                https://www.fortjesusmombasa.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section - Mombasa Cityscape */}
      <section className="relative mt-12">
        {/* Torn paper effect at top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#D4A574] clip-path-torn-bottom"></div>
        <div className="relative">
          <Image
            src="/images/hanging/tusks.jpg"
            alt="Aerial view of Mombasa city"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            style={{ minHeight: "400px", objectPosition: "center" }}
          />
        </div>
      </section>
    </main>
  );
}

