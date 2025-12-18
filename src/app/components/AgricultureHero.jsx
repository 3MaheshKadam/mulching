"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AgricultureHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-16 sm-pt-16 relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home.jpeg')`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}

          {/* Main Headline */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Premium Biodegradable{" "}
            <span className="text-green-400">Mulching Paper</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-normal">
              for Sustainable Farming
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Quality SRJ Polymers brings you cutting-edge mulching solutions that increase crop yield by up to 40%, reduce water consumption by 50%, and eliminate weed growth naturally. Perfect for vegetables, fruits, and cash crops.
          </p>

          {/* Key Benefits */}
          

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-8 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link href="/products">
              <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300/50 w-full sm:w-auto">
                <span className="relative z-10">View Our Products</span>

                {/* Arrow Icon */}
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/contact">
              <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/20 w-full sm:w-auto">
                <span className="relative z-10">Request Quote</span>

                {/* Phone Icon */}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Stats Section - More Subtle */}
       
        </div>
      </div>

   
    </section>
  );
}