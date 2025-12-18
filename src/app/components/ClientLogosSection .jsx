"use client";
import React, { useState, useEffect } from "react";

const ClientLogosSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("benefits");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("benefits-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits = [
    {
      title: "Increased Crop Yield",
      description: "Experience 30-40% higher productivity with optimal soil temperature and moisture retention.",
      percentage: "40%",
      icon: "📈",
    },
    {
      title: "Water Conservation",
      description: "Save up to 50% water with reduced evaporation and efficient moisture management.",
      percentage: "50%",
      icon: "💧",
    },
    {
      title: "Labor Cost Reduction",
      description: "Cut weeding labor costs by 60% with effective weed suppression throughout the season.",
      percentage: "60%",
      icon: "💰",
    },
    {
      title: "Extended Growing Season",
      description: "Protect crops from temperature fluctuations and extend your productive growing period.",
      percentage: "100%",
      icon: "📅",
    },
  ];

  const applications = [
    {
      crop: "Vegetables",
      examples: "Tomatoes, Peppers, Cucumbers, Eggplant",
      icon: "🥬",
    },
    {
      crop: "Fruits",
      examples: "Strawberries, Melons, Watermelons",
      icon: "🍓",
    },
    {
      crop: "Cash Crops",
      examples: "Cotton, Tobacco, Sugarcane",
      icon: "🌾",
    },
    {
      crop: "Floriculture",
      examples: "Roses, Marigolds, Chrysanthemums",
      icon: "🌺",
    },
  ];

  return (
    <section
      id="benefits-section"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-3">
            Proven Performance
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Maximize Your Farm's Potential
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our biodegradable mulching paper delivers measurable results that transform your agricultural operations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {benefit.percentage}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 border border-gray-200">
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeTab === "benefits"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Key Benefits
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeTab === "applications"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Applications
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            {activeTab === "benefits" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Environmental Benefits
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "100% biodegradable material",
                      "Reduces plastic pollution",
                      "Enriches soil after decomposition",
                      "No harmful chemical residues",
                      "Supports sustainable farming",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Economic Benefits
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Reduces weeding labor by 60%",
                      "Lower water and irrigation costs",
                      "Higher crop quality and market value",
                      "Extended harvest periods",
                      "Better return on investment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Perfect for Multiple Crops
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-lg p-5 border border-green-100 hover:border-green-300 transition-all duration-300"
                    >
                      <div className="text-3xl mb-3">{app.icon}</div>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">
                        {app.crop}
                      </h4>
                      <p className="text-xs text-gray-600">{app.examples}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">💡 Pro Tip:</span> Mulching
                    paper works best when installed before transplanting or
                    sowing. Contact our experts for crop-specific guidance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Transform Your Farm?
            </h3>
            <p className="text-base mb-6 text-green-50">
              Join thousands of farmers who have boosted their yields with our mulching solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-green-600 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg">
                Get Free Sample
              </button>
              <button className="px-6 py-3 bg-green-800 text-white font-semibold text-sm rounded-lg hover:bg-green-900 transition-all duration-300 border border-green-500">
                Request Bulk Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;