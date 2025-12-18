"use client";
import React from "react";
import { Award, Users, Target, Eye, Leaf, Globe, Shield } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description: "ISO certified manufacturing with rigorous quality control ensuring consistent excellence in every roll."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "100% biodegradable products that enrich soil and promote eco-friendly farming practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Dedicated support and expert guidance to help farmers maximize their agricultural success."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuous research and development to deliver cutting-edge mulching solutions."
    }
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years Experience",
      icon: "📅"
    },
    {
      number: "10,000+",
      label: "Happy Farmers",
      icon: "👨‍🌾"
    },
    {
      number: "Pan India",
      label: "Distribution",
      icon: "🇮🇳"
    },
    {
      number: "100%",
      label: "Biodegradable",
      icon: "🌱"
    }
  ];

  const certificates = [
    "ISO 9001:2015 Quality Management System",
    "ISO 14001:2015 Environmental Management",
    "Made in India - Supporting Local Economy",
    "Biodegradable Materials Certification",
    "Agricultural Safety Standards",
    "Quality Assurance Certification",
  ];

  const benefits = [
    {
      title: "Water Conservation",
      description: "Save up to 50% water with reduced evaporation",
      icon: "💧"
    },
    {
      title: "Weed Suppression",
      description: "Natural weed control reducing labor costs by 60%",
      icon: "🌿"
    },
    {
      title: "Increased Yield",
      description: "30-40% higher crop productivity",
      icon: "📈"
    },
    {
      title: "Soil Health",
      description: "Biodegradable material enriches soil after decomposition",
      icon: "🌾"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* About Us Header */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Quality SRJ Polymers
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading manufacturer of premium biodegradable mulching paper in India
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/about.jpeg"
                alt="Quality SRJ Polymers Manufacturing"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transforming Agriculture Through Innovation
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Quality SRJ Polymers</strong> is a trusted leader in sustainable agricultural solutions, specializing in the manufacturing of high-quality biodegradable mulching paper. Established with a vision to revolutionize farming practices, we have been serving the Indian agricultural community for over 15 years.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We are passionate about empowering farmers to enhance crop yields, reduce water consumption, and minimize environmental impact through our innovative mulching solutions. Our products are designed to address the critical challenges faced by modern farmers - from water scarcity and weed management to soil health and crop productivity.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                With a robust distribution network across India and a commitment to quality excellence, we have become the preferred choice for thousands of farmers growing vegetables, fruits, and cash crops. Our ISO-certified manufacturing facility ensures consistent quality and reliability in every product.
              </p>
              <div className="bg-green-100 p-4 rounded-lg mt-6">
                <p className="text-green-800 font-semibold">
                  "Committed to sustainable farming practices that benefit both farmers and the environment, helping build a greener future for Indian agriculture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-base leading-relaxed">
                To be India's most trusted manufacturer of biodegradable mulching solutions, transforming agriculture through innovative, eco-friendly products that enhance crop productivity while preserving our environment for future generations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-base leading-relaxed">
                To provide farmers across India with premium biodegradable mulching paper that increases crop yields, conserves water, suppresses weeds naturally, and promotes sustainable farming practices through continuous innovation and unwavering quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Farmers Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Proven results that make a real difference
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-400 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {achievement.number}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/home.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Growing Together,
            <br />
            <span className="text-green-400">Sustaining Forever</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empowering Indian farmers with innovative mulching solutions for a sustainable and prosperous agricultural future
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span className="text-sm">Pan India Reach</span>
            </div>
            <div className="flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              <span className="text-sm">100% Eco-Friendly</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm">Farmer First Approach</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;