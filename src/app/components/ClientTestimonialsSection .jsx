"use client";
import React, { useState, useEffect } from "react";

const ClientTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patil",
      title: "Progressive Farmer",
      location: "Pune, Maharashtra",
      image: "👨‍🌾",
      rating: 5,
      testimonial:
        "Mulching Paper has completely transformed my farming practices. After using their biodegradable mulch sheets, I achieved a 45% increase in tomato yield while reducing water consumption by 60%. The weed control is exceptional, and labor costs have decreased significantly. Their technical support team guided me throughout the implementation process.",
      cropType: "Tomatoes & Vegetables",
      farmSize: "25 Acres",
    },
    {
      id: 2,
      name: "Sunita Deshmukh",
      title: "Organic Farm Owner",
      location: "Nashik, Maharashtra",
      image: "👩‍🌾",
      rating: 5,
      testimonial:
        "As an organic farmer, finding sustainable solutions is crucial for my business. Mulching Paper's eco-friendly products have exceeded my expectations with outstanding weed suppression and moisture retention. My grape production improved by 35%, and the soil health has visibly enhanced. I highly recommend their innovative mulching solutions to all farmers.",
      cropType: "Organic Grapes",
      farmSize: "30 Acres",
    },
    {
      id: 3,
      name: "Amit Joshi",
      title: "Agricultural Consultant",
      location: "Aurangabad, Maharashtra",
      image: "👨‍💼",
      rating: 5,
      testimonial:
        "I recommend Mulching Paper to all my clients across Maharashtra. Their biodegradable mulching films deliver consistent results season after season. The company provides excellent technical support and timely delivery. My clients have reported average yield increases of 40% with reduced irrigation needs and labor costs.",
      cropType: "Consultancy Services",
      farmSize: "200+ Clients",
    },
    {
      id: 4,
      name: "Priya Kulkarni",
      title: "Horticulture Specialist",
      location: "Kolhapur, Maharashtra",
      image: "👩‍🔬",
      rating: 5,
      testimonial:
        "Mulching Paper solutions have revolutionized our flower cultivation operations. The precise temperature control and moisture management have resulted in superior bloom quality and extended flowering periods. Our production costs reduced by 25% while achieving 50% higher flower yield. The product quality remains consistent across all orders.",
      cropType: "Flowers & Ornamentals",
      farmSize: "18 Acres",
    },
    {
      id: 5,
      name: "Suresh Mahajan",
      title: "Commercial Farmer",
      location: "Solapur, Maharashtra",
      image: "👨‍🌾",
      rating: 5,
      testimonial:
        "Outstanding products with exceptional customer service from Mulching Paper team. Their innovative mulching solutions helped me overcome water scarcity challenges during drought conditions. My sugarcane yield increased by 55% with significant reduction in irrigation frequency. The company's commitment to farmer success is truly commendable.",
      cropType: "Sugarcane & Cotton",
      farmSize: "85 Acres",
    },
    {
      id: 6,
      name: "Vandana Kale",
      title: "Sustainable Agriculture Advocate",
      location: "Satara, Maharashtra",
      image: "👩‍🌾",
      rating: 5,
      testimonial:
        "Mulching Paper is leading Maharashtra's sustainable agriculture revolution with their eco-friendly innovations. Their biodegradable films perfectly align with my environmental conservation goals while delivering superior crop protection and yield enhancement. The soil health improvement and reduced chemical dependency make them my preferred choice for sustainable farming practices.",
      cropType: "Sustainable Mixed Crops",
      farmSize: "40 Acres",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="relative py-20 bg-green-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Agricultural Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 text-4xl opacity-10 animate-bounce delay-300">
          🌱
        </div>
        <div className="absolute top-32 right-20 text-3xl opacity-10 animate-bounce delay-700">
          🚜
        </div>
        <div className="absolute bottom-32 left-20 text-3xl opacity-10 animate-bounce delay-1000">
          🌾
        </div>
        <div className="absolute bottom-16 right-16 text-4xl opacity-10 animate-bounce delay-1300">
          🍃
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <p className="text-green-700 text-sm font-semibold uppercase tracking-wider mb-4">
              Client Success Stories
            </p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Hear from Our
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Satisfied Farmers
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Mulching Paper has transformed agricultural practices
            across Maharashtra. Real stories from real farmers who trust our
            innovative mulching solutions.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Testimonial (Left - Large) */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-100 h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-green-200 opacity-50 group-hover:scale-110 transition-transform duration-500">
                  "
                </div>

                <div className="relative z-10">
                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {testimonials[currentSlide].image}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-green-600 font-medium">
                        {testimonials[currentSlide].title}
                      </p>
                      <p className="text-sm text-gray-500">
                        📍 {testimonials[currentSlide].location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonials[currentSlide].rating)}
                    <span className="ml-2 text-sm text-gray-600 font-medium">
                      ({testimonials[currentSlide].rating}/5)
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    {testimonials[currentSlide].testimonial}
                  </blockquote>

                  {/* Farm Details */}
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
                      <span className="text-sm text-green-700 font-medium">
                        🌾 {testimonials[currentSlide].cropType}
                      </span>
                    </div>
                    <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                      <span className="text-sm text-emerald-700 font-medium">
                        🏡 {testimonials[currentSlide].farmSize}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Testimonials (Right - Smaller) */}
            <div className="space-y-6">
              {[1, 2].map((offset) => {
                const index = (currentSlide + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div
                    key={testimonial.id}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 cursor-pointer hover:bg-white/80 transition-all duration-300 hover:shadow-xl group"
                    onClick={() => goToSlide(index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        {testimonial.image}
                      </div>
                      <div className="ml-3">
                        <h5 className="font-bold text-gray-800 text-sm">
                          {testimonial.name}
                        </h5>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {testimonial.testimonial.substring(0, 120)}...
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-green-100 flex items-center justify-center text-green-600 hover:bg-green-50 hover:scale-110 transition-all duration-300"
            >
              ←
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-green-500 scale-125"
                      : "bg-green-200 hover:bg-green-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-green-100 flex items-center justify-center text-green-600 hover:bg-green-50 hover:scale-110 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

       

      
      </div>

      <style jsx>{`
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

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonialsSection;
