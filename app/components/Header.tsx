"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    {
      label: "Explore Mombasa",
      dropdown: [
        { href: "/explore", label: "Food" },
        { href: "/transport", label: "Transport" },
        { href: "/things-to-do", label: "Things to do" },
      ],
    },
    { href: "/tours", label: "Food tours" },
    { href: "/art", label: "Mombasa Art" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if any dropdown item is active
  const isExploreActive = pathname === "/explore" || pathname === "/transport" || pathname === "/things-to-do";

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
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div
                  key={`dropdown-${index}`}
                  ref={dropdownRef}
                  className="relative"
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`group relative px-3 py-2 text-sm md:text-base transition-colors flex items-center ${
                      isExploreActive
                        ? "text-white"
                        : "text-[#5C3A21] hover:text-white"
                    }`}
                  >
                    {isExploreActive && (
                      <span className="absolute left-0 right-0 bg-[#8B5A3C] -top-6 -bottom-6"></span>
                    )}
                    {!isExploreActive && (
                      <span className="absolute left-0 right-0 bg-[#8B5A3C] -top-6 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-[#8B5A3C] rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]">
                      {item.dropdown.map((dropdownItem) => {
                        const isActive = pathname === dropdownItem.href;
                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`block px-4 py-2 text-sm md:text-base transition-colors ${
                              isActive
                                ? "bg-[#5C3A21] text-white"
                                : "text-white hover:bg-[#5C3A21]"
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

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
