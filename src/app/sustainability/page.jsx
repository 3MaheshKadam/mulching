"use client";

import React, { useState, useEffect } from "react";
import {
  Leaf,
  Globe,
  Users,
  Droplets,
  Recycle,
  Shield,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const SustainabilityPage = () => {
  const [activeTab, setActiveTab] = useState("biodegradable");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactMetrics = [
    {
      value: "50",
      suffix: "%",
      label: "Water Conservation",
      description: "Reduced evaporation through effective soil coverage",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      value: "100",
      suffix: "%",
      label: "Biodegradable",
      description: "Complete decomposition within 3-6 months",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      value: "60",
      suffix: "%",
      label: "Labor Cost Reduction",
      description: "Eliminating manual weeding requirements",
      gradient: "from-purple-600 to-violet-500",
    },
    {
      value: "40",
      suffix: "%",
      label: "Yield Increase",
      description: "Enhanced crop productivity through optimal conditions",
      gradient: "from-orange-600 to-yellow-500",
    },
  ];

  const sustainabilityTabs = [
    {
      id: "biodegradable",
      title: "Biodegradable Materials",
      subtitle: "Natural Decomposition",
      features: [
        "100% biodegradable paper made from natural fibers",
        "Complete decomposition within 3-6 months after harvest",
        "Enriches soil with organic matter during breakdown",
        "No harmful residues or plastic pollution",
      ],
    },
    {
      id: "water",
      title: "Water Conservation",
      subtitle: "Smart Resource Management",
      features: [
        "Reduces water evaporation by up to 50%",
        "Maintains consistent soil moisture levels",
        "Reduces irrigation frequency and water waste",
        "Helps farmers adapt to water scarcity challenges",
      ],
    },
    {
      id: "carbon",
      title: "Carbon Footprint",
      subtitle: "Environmental Impact",
      features: [
        "Lower carbon emissions compared to plastic mulch",
        "Made from renewable and sustainable materials",
        "No need for manual removal reducing fuel consumption",
        "Supports sustainable farming practices",
      ],
    },
  ];

  const environmentalBenefits = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Zero Plastic Waste",
      description:
        "Our biodegradable mulching paper eliminates plastic pollution in agricultural fields",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Soil Health",
      description:
        "Decomposes naturally, adding organic matter and improving soil structure",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Production",
      description:
        "Manufactured using sustainable processes with minimal environmental impact",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Chemical-Free",
      description:
        "No harmful chemicals or toxins that could leach into soil or groundwater",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      color: "bg-blue-500",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      color: "bg-green-500",
    },
    {
      name: "Biodegradable",
      description: "Certified Materials",
      color: "bg-emerald-500",
    },
    {
      name: "Made in India",
      description: "Supporting Local Economy",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: 'url("/home.jpeg")',
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Sustainable</span>
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text">
              Agriculture
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Empowering farmers with{" "}
            <span className="text-green-400 font-semibold">
              100% biodegradable
            </span>{" "}
            mulching solutions that protect crops and preserve our environment
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                Real Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable benefits for farmers and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {metric.value}
                    <span className="text-3xl">{metric.suffix}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Sustainability Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three key pillars driving environmental responsibility
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="lg:w-1/3 space-y-4">
              {sustainabilityTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-green-50 border-2 border-green-500 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        activeTab === tab.id
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {tab.title}
                      </h3>
                      <p className="text-sm text-green-600 font-medium">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 text-white">
                {sustainabilityTabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div key={tab.id} className="animate-fade-in">
                        <h3 className="text-3xl font-bold mb-3">{tab.title}</h3>
                        <p className="text-xl text-green-400 mb-6">
                          {tab.subtitle}
                        </p>
                        <div className="space-y-4">
                          {tab.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                              <p className="text-base text-gray-300 leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Environmental Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our products contribute to a healthier planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {environmentalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      {/* Call to Action */}
      <section
        className="py-16 lg:py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/home.jpeg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-green-400">Sustainable</span> Farming Movement
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with Quality SRJ Polymers to transform your farm while protecting the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-base transition-colors duration-300 shadow-lg flex items-center mx-auto sm:mx-0">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/products">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg text-base transition-colors duration-300">
                View Our Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;