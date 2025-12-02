"use client";

import Image from "next/image";
import Hero from "../components/Hero";

export default function ThingsToDoPage() {
  return (
    <main className="bg-[#D4A574]">
      {/* Hero Section */}
      <Hero
        title="Things to do"
        subtitle="Alright, so you've figured out how to get around but where exactly are you going? Mombasa is great for doing absolutely nothing but can also satisfy any appetite you might have for adventure and roaming. Here are a few ways to do both."
        backgroundImage="/images/hanging/tusks.jpg"
      />

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-12">
        {/* Fort Jesus Section */}
        <div className="mb-16">
          <div className="bg-[#8B5A3C] px-6 py-3 inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">FORT JESUS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/fjesus.png"
                alt="Fort Jesus exterior view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/fj2.png"
                alt="Fort Jesus detailed view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            This historic fortress has been watching over Mombasa since the 1590s. The views from up there are incredible, and the history lessons come free with your entrance fee. There&apos;s an info board around the museum, but a guide is recommended.
          </p>
          
          {/* Fee Table */}
          <div className="bg-white/50 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-[#5C3A21] mb-4">Entrance Fees</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#5C3A21] mb-2">Kenyan Citizens</h4>
                <ul className="text-[#5C3A21] space-y-1 ml-4">
                  <li>Adults: KES 200</li>
                  <li>Children: KES 100</li>
                  <li>Under 10: Free</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#5C3A21] mb-2">Non-Residents (East African Citizens)</h4>
                <ul className="text-[#5C3A21] space-y-1 ml-4">
                  <li>Adults: KES 400</li>
                  <li>Children: KES 200</li>
                  <li>Under 10: Free</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#5C3A21] mb-2">Non-Residents (Outside East Africa)</h4>
                <ul className="text-[#5C3A21] space-y-1 ml-4">
                  <li>Adults: KES 1,200</li>
                  <li>Children: KES 600</li>
                  <li>Under 10: Free</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#5C3A21]">
            For more information or any changes in fees, check out their website below:{" "}
            <a href="https://www.fortjesusmombasa.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A3C]">
              https://www.fortjesusmombasa.com
            </a>
          </p>
        </div>

        {/* Old Town Section */}
        <div className="mb-16">
          <div className="bg-[#8B5A3C] px-6 py-3 inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">OLD TOWN</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/oldtown.png"
                alt="Old Town street view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/oldtown2.png"
                alt="Old Town architecture"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="text-lg text-[#5C3A21] leading-relaxed">
            This part of town is full of picturesque, winding streets steeped in preserved history and culture. You&apos;ll get lost in the narrow alleyways discovering Swahili architecture, from the intricately carved wooden doors that honestly belong in a museum, to the delicious and authentic food found lurking in every corner, this is unmissable. You must try coffee from Jahan and Khadija&apos;s viazis and kaimati. Not ready to venture out alone? Book a food tour.
          </p>
        </div>

        {/* Go-Kart Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">Go-Kart</h2>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            Feeling the need for speed? The go-kart track will scratch that itch. It&apos;s a great way to cool down from sightseeing and get your adrenaline pumping. Perfect for groups, couples looking for some friendly competition, or anyone who wants to feel like they&apos;re 12 years old again.
          </p>
          <div className="relative w-full h-64 md:h-96 mb-6">
            <Image
              src="/images/activites/gokart.png"
              alt="Go-kart track"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-white/50 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-[#5C3A21] mb-4">Price Breakdown (Per Person)</h3>
            <ul className="text-[#5C3A21] space-y-2 ml-4">
              <li>Adults: KES 1,000</li>
              <li>Children (Up to 12yrs): KES 400</li>
              <li>2nd Race: KES 700</li>
              <li>3rd Race: KES 500</li>
              <li>Program: KES 2,000</li>
            </ul>
          </div>
          <p className="text-sm text-[#5C3A21]">
            Other activities such as paintball, rodeo bull, zip-line and mini golf are available at a fee. For more information, visit their website:{" "}
            <a href="https://www.mombasa-gokart.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A3C]">
              https://www.mombasa-gokart.com
            </a>
          </p>
        </div>

        {/* Beach Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">Beach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/beach.png"
                alt="Resort beach with pool"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/beach2.png"
                alt="Pristine beach"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            Obviously mandatory. White sand, turquoise water & palm trees - it&apos;s your Pinterest board come to life... literally. Whether you&apos;re looking to sprawl out with a book, take a dip in the Indian Ocean, or just soak up some serious vitamin D, Mombasa&apos;s coastline delivers.
          </p>
          <div className="bg-white/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#5C3A21] mb-4">Notable Beaches with Public Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5C3A21]">
              <ul className="space-y-2 ml-4">
                <li>Nyali Beach</li>
                <li>Bamburi Beach</li>
                <li>Shanzu Beach</li>
                <li>Vipingo Beach (Vipingo)</li>
                <li>Diani Beach (KSH)</li>
              </ul>
              <ul className="space-y-2 ml-4">
                <li>Beneri Beach</li>
                <li>Kilifi/Watamu</li>
              </ul>
            </div>
            <p className="text-sm text-[#5C3A21] mt-4">
              You might also want to consider spending the day at a private hotel. Many offer day passes to allow you to enjoy beach access when you grab a drink or meal.
            </p>
          </div>
        </div>

        {/* Dhow Rides Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">Dhow Rides</h2>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            Best taken at sunset. These traditional boats have been sailing the Indian Ocean for centuries. Watching the sun melt into the ocean as you enjoy a sundowner? Indescribable!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="relative w-full h-64 md:h-80 mb-4">
                <Image
                  src="/images/activites/dhow.png"
                  alt="Faraja Dhow"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-[#5C3A21] font-semibold mb-2">Faraja Dhow (15 people +)</p>
              <div className="text-center text-[#5C3A21] space-y-1">
                <p>
                  Contact:{" "}
                  <a href="tel:+254795638150" className="underline hover:text-[#8B5A3C]">
                    +254795638150
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a href="https://instagram.com/farajadhow" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A3C]">
                    @farajadhow
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="relative w-full h-64 md:h-80 mb-4">
                <Image
                  src="/images/activites/dhow2.png"
                  alt="Aloha dhow"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-[#5C3A21] font-semibold mb-2">Aloha dhow (up to 10-12 people)</p>
              <div className="text-center text-[#5C3A21] space-y-1">
                <p>
                  Contact:{" "}
                  <a href="tel:+254750826719" className="underline hover:text-[#8B5A3C]">
                    +254750826719
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a href="https://instagram.com/alohadhow" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A3C]">
                    @alohadhow
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Maasai Market Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">Maasai Market</h2>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            Yes, it&apos;s touristy but you absolutely cannot miss it for souvenirs and local crafts to remember your trip by. Fair warning: mzungu tax applies, come ready to negotiate! If you&apos;re on a budget, or bring a local friend who can work some magic on those prices. Either way, the vibrant colours, incredible craftsmanship, and pure energy of a Kenyan market make it totally worth the negotiation dance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/market.png"
                alt="Maasai market jewelry"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/activites/market2.png"
                alt="Maasai market stalls"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#5C3A21] mb-4">Locations</h3>
            <ul className="text-[#5C3A21] space-y-2 ml-4">
              <li>Chandarana Supermarket (outside), Nyali Plaza (Opposite Nyali Cinemas)</li>
              <li>City Mall, Nyali</li>
            </ul>
          </div>
        </div>

        {/* Day Trips Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">Day Trips</h2>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-8">
            Mombasa encompasses the central Mombasa county. It also includes a surrounding greater coastal region dotted with historic towns that are absolutely unmissable. Pack a day bag and venture out to any one of these charming towns!
          </p>
          
          {/* Lamu Subsection */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5C3A21] mb-4">Lamu</h3>
            <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
              This is another destination worth the visit and better suited to a weekend or extended stay. It&apos;s a UNESCO World Heritage site that still uses donkeys as its main mode of transport. It is a more considerable trek by car so consider booking a flight though. Lamu Jet if you want to avoid the long drive.{" "}
              <a href="https://lamujet.com/explore-our-destinations/flights-to-lamu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A3C]">
                https://lamujet.com/explore-our-destinations/flights-to-lamu/
              </a>
            </p>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/activites/lamu.png"
                alt="Lamu island aerial view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Three Column Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src="/images/activites/diani.png"
                  alt="Diani Beach"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-2xl font-bold text-[#5C3A21] mb-2">Diani</h4>
              <p className="text-[#5C3A21]">Pristine white sands and fabulous beach resorts</p>
            </div>
            <div>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src="/images/activites/kilifi.png"
                  alt="Kilifi/Watamu"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-2xl font-bold text-[#5C3A21] mb-2">Kilifi/Watamu</h4>
              <p className="text-[#5C3A21]">Marine park, coral gardens and authentic Italian ice cream</p>
            </div>
            <div>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src="/images/activites/malindi.png"
                  alt="Malindi"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-2xl font-bold text-[#5C3A21] mb-2">Malindi</h4>
              <p className="text-[#5C3A21]">The perfect blend of Swahili culture and Italian influence</p>
            </div>
          </div>
        </div>

        {/* ChaQula Approved Lighthouse Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A3C] mb-6">ChaQula Approved Lighthouse</h2>
          <p className="text-lg text-[#5C3A21] leading-relaxed mb-6">
            A great spot for watching the sunset, sipping on madafu and eating freshly made Kachiri (cassava crisps) which are served best with chili and lemon.
          </p>
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/images/activites/chaqulaapproved.png"
              alt="ChaQula Approved Lighthouse"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Concluding Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#5C3A21] leading-relaxed mb-12">
            Each destination has its own personality and stories to tell and a deeper appreciation to offer of just how rich and diverse this stretch of Kenyan coast really is.
          </p>
        </div>
      </section>
    </main>
  );
}

