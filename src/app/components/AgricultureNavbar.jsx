"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AgricultureNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Sustainability", href: "/sustainability" },
  ];

  return (
    <nav
      className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/96 backdrop-blur-xl shadow-2xl border-b border-green-100/50"
          : "bg-white/98 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden border border-green-100">
                <Image
                  src="/logo.jpeg"
                  alt="Quality SRJ Polymers Logo"
                  width={48}
                  height={48}
                  className="object-contain p-1"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="text-lg lg:text-xl xl:text-2xl font-black text-transparent bg-gradient-to-r from-green-700 via-green-800 to-green-900 bg-clip-text tracking-tight leading-none">
                  Quality SRJ Polymers LLP
                </div>
                <div className="text-[10px] lg:text-xs text-green-600/80 font-semibold tracking-wider uppercase mt-0.5">
                  Agricultural Innovation
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-green-600 px-3 xl:px-4 py-2 text-sm xl:text-base font-bold transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.name}</span>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>

                {/* Underline */}
                <span className="absolute bottom-1 left-3 xl:left-4 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-700 group-hover:w-6 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white text-sm lg:text-base font-bold rounded-xl hover:from-green-700 hover:via-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300/50 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-green-700 hover:text-green-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 focus:outline-none focus:ring-4 focus:ring-green-300/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className={`w-6 h-6 transform transition-all duration-500 ${
                  isMenuOpen ? "rotate-180 scale-110" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-white/98 to-green-50/30 backdrop-blur-xl border-t border-green-100/50 px-6 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className={`transform transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={link.href}
                className="block px-4 py-3 text-gray-800 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 rounded-xl font-bold text-base transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-[1.02]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div
            className={`pt-4 border-t border-green-100/50 transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              href="/contact"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white font-bold text-base rounded-xl hover:from-green-700 hover:via-green-800 hover:to-green-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Enquire Now</span>
              <svg
                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}