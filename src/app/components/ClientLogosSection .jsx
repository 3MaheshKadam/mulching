"use client";
import React from "react";

const ClientLogosSection = () => {
  // Sample client logos data - replace with your actual client data
  const clientLogos = [
    { id: 1, name: "AgroTech Solutions", logo: "🌱", category: "farming" },
    { id: 2, name: "FarmVision Corp", logo: "🚜", category: "farming" },
    { id: 3, name: "GreenHarvest Ltd", logo: "🌾", category: "farming" },
    { id: 4, name: "AgroPack Industries", logo: "📦", category: "packaging" },
    { id: 5, name: "CropGuard Systems", logo: "🛡️", category: "farming" },
    { id: 6, name: "EcoFilm Manufacturing", logo: "🎬", category: "films" },
    { id: 7, name: "Agricultural Dynamics", logo: "⚡", category: "farming" },
    { id: 8, name: "PackPro Solutions", logo: "📋", category: "packaging" },
    { id: 9, name: "BioMulch Systems", logo: "🍃", category: "farming" },
    { id: 10, name: "Industrial Films Co", logo: "🏭", category: "films" },
    { id: 11, name: "FreshCrop Technologies", logo: "🥕", category: "farming" },
    { id: 12, name: "PolyAgri Innovations", logo: "🔬", category: "farming" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block">
            <p className="text-green-700 text-sm font-semibold uppercase tracking-wider mb-4">
              Trusted Partners
            </p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-green-600">Growing</span> Together with
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2010, IRIS POLYMERS has been empowering agricultural
            excellence through innovative solutions. Our partnerships span six
            countries, transforming farming practices and boosting crop
            production worldwide.
          </p>
        </div>

        {/* Company Highlight */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-green-100">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-semibold text-lg">
                "Growth Unleashed: Transformed from Partnership to Pvt Ltd in
                2017"
              </span>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Floating Logos Animation */}
        <div className="relative h-32 mb-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            {/* First Row - Moving Right to Left */}
            <div className="flex space-x-12 animate-scroll-left">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-green-50">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-600 font-medium text-center px-1 leading-tight">
                      {client.name.split(" ")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row with Reverse Direction */}
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex space-x-12 animate-scroll-right">
              {[
                ...clientLogos.slice().reverse(),
                ...clientLogos.slice().reverse(),
              ].map((client, index) => (
                <div
                  key={`reverse-${client.id}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-emerald-50">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-600 font-medium text-center px-1 leading-tight">
                      {client.name.split(" ")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "6", label: "Countries Served", icon: "🌍" },
            { number: "2010", label: "Established", icon: "📅" },
            { number: "1000+", label: "Happy Farmers", icon: "👨‍🌾" },
            { number: "24/7", label: "Support", icon: "🤝" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-green-700 font-semibold">
            <span className="text-2xl">🌱</span>
            <span className="text-lg">
              Advancing agriculture for a better future!
            </span>
            <span className="text-2xl">🌱</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;
