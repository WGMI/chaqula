"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      label: "Explore Mombasa",
      href: "/",
      dropdown: [
        { href: "/explore", label: "Places to eat" },
        { href: "/transport", label: "Transport" },
        { href: "/things-to-do", label: "Things to do" },
      ],
    },
    { href: "/about", label: "About me" },
    { href: "/tours", label: "Food tours" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // Don't close if clicking the hamburger button
        const target = event.target as HTMLElement;
        if (!target.closest('button[aria-label="Toggle menu"]')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Check if any dropdown item is active or if we're on homepage
  const isExploreActive = pathname === "/" || pathname === "/explore" || pathname === "/transport" || pathname === "/things-to-do";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  return (
    <header className="relative bg-[#D4A574] border-b-4 border-[#8B5A3C]">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-[#5C3A21] flex items-center gap-1">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div
                  key={`dropdown-${index}`}
                  ref={dropdownRef}
                  className="relative"
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href || "#"}
                      className={`group relative px-3 py-2 text-base transition-colors flex items-center ${
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
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`px-2 py-2 text-base transition-colors ${
                        isExploreActive
                          ? "text-white"
                          : "text-[#5C3A21] hover:text-white"
                      }`}
                    >
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
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-[#8B5A3C] rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]">
                      {item.dropdown.map((dropdownItem) => {
                        const isActive = pathname === dropdownItem.href;
                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`block px-4 py-2 text-base transition-colors ${
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
                className={`group relative px-3 py-2 text-base transition-colors flex items-center ${
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

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-[#5C3A21] hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 top-[73px] bg-[#D4A574] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full overflow-y-auto">
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div key={`mobile-dropdown-${index}`} className="border-b border-[#8B5A3C]">
                  <div className="flex items-center">
                    <Link
                      href={item.href || "#"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex-1 px-6 py-4 text-left text-lg font-medium ${
                        isExploreActive && pathname === "/"
                          ? "text-white bg-[#8B5A3C]"
                          : "text-[#5C3A21]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="px-4 py-4"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform text-[#5C3A21] ${
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
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isDropdownOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => {
                      const isActive = pathname === dropdownItem.href;
                      return (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`block px-10 py-3 text-base transition-colors ${
                            isActive
                              ? "bg-[#5C3A21] text-white"
                              : "text-[#5C3A21] bg-[#8B5A3C] hover:bg-[#5C3A21] hover:text-white"
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-lg font-medium border-b border-[#8B5A3C] transition-colors ${
                  isActive
                    ? "text-white bg-[#8B5A3C]"
                    : "text-[#5C3A21] hover:bg-[#8B5A3C] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-[73px]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
