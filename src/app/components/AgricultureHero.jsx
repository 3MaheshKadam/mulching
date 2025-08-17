"use client";
import { useState, useEffect } from "react";

export default function AgricultureHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')`,
        }}
      />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-700/50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Advancing Agriculture for a{" "}
            <span className="text-green-300 drop-shadow-lg">Better Future</span>
            ..!
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed font-light transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            We provide innovative solutions like Mulching Paper that help
            farmers boost crop production, conserve water, and reduce labor
            costs.
          </p>

          {/* Call to Action Button */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300/50">
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Arrow Icon */}
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-16 sm:h-20 md:h-24 text-white/10"
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V200H1392C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200H0V96Z" />
        </svg>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-300/30 rounded-full animate-pulse" />
      <div
        className="absolute top-1/3 right-16 w-3 h-3 bg-green-400/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-green-200/25 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
