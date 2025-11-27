"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/explore", label: "Explore Mombasa" },
    { href: "/tours", label: "Food tours" },
    { href: "/art", label: "Mombasa Art" },
    { href: "/test", label: "Test" },
  ];

  return (
    <header className="relative bg-[#D4A574] border-b-4 border-[#8B5A3C]">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <h1 className="text-3xl font-bold text-[#5C3A21] flex items-center gap-1">
            Cha
            <Image 
              src="/images/logo/logo.png" 
              alt="ChaQula Logo" 
              width={40} 
              height={40}
              className="inline-block"
            />
            ula
          </h1>
        </Link>
        <nav className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 text-sm md:text-base transition-colors flex items-center ${
                  isActive
                    ? "text-white"
                    : "text-[#5C3A21] hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 right-0 bg-[#8B5A3C] -top-6 -bottom-6"></span>
                )}
                {!isActive && (
                  <span className="absolute left-0 right-0 bg-[#8B5A3C] -top-6 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
