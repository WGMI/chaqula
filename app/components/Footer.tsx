import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-12">
      {/* Torn paper effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#D4A574] clip-path-torn-bottom"></div>
      <div className="relative">
        <Image
          src="/images/tusks.jpg"
          alt="Mombasa city view with tusks"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          style={{ minHeight: "400px", objectPosition: "center" }}
        />
        {/* Translucent overlay matching page background */}
        <div className="absolute inset-0 bg-[#D4A574] opacity-50"></div>
      </div>
    </footer>
  );
}
