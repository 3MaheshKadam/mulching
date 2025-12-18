"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about-section" className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Small Header */}
            <div className="mb-6">
              <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">
                About Quality SRJ Polymers
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Leading Manufacturer of Premium Biodegradable Mulching Paper in
                India
              </h2>
            </div>

            {/* Main Description */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-gray-700 leading-relaxed">
                Quality SRJ Polymers is a trusted name in agricultural
                innovation, specializing in the manufacturing of high-quality
                biodegradable mulching paper. With over 15 years of industry
                experience, we have been helping farmers across India achieve
                better crop yields while promoting sustainable farming
                practices.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                Our mulching paper solutions are designed to address the
                critical challenges faced by modern farmers - from water
                scarcity and weed management to soil health and crop
                productivity. Made from 100% biodegradable materials, our
                products naturally decompose after use, enriching the soil and
                eliminating the need for manual removal.
              </p>

              
            </div>

            {/* CTA Button */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Link href="/about">
                <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More About Us
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/home.jpeg"
                  alt="Quality SRJ Polymers Mulching Paper in Agricultural Field"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />

                {/* Optional Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                  <p className="text-sm font-bold text-gray-900">
                    Trusted by 10,000+ Farmers
                  </p>
                  <p className="text-xs text-gray-600">Across India</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-50 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}