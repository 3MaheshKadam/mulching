"use client";
// import React, { useState } from "react";
// import {
//   Leaf,
//   Globe,
//   Users,
//   Target,
//   Eye,
//   Droplets,
//   Recycle,
//   Shield,
//   TrendingUp,
//   Award,
//   ArrowRight,
//   CheckCircle,
//   Heart,
//   Zap,
// } from "lucide-react";

// const SustainabilityPage = () => {
//   const [activeTab, setActiveTab] = useState("environment");

//   const sustainabilityStats = [
//     {
//       icon: Leaf,
//       value: "100%",
//       label: "Biodegradable Materials",
//       color: "bg-green-500",
//     },
//     {
//       icon: Droplets,
//       value: "50%",
//       label: "Water Conservation",
//       color: "bg-blue-500",
//     },
//     {
//       icon: Shield,
//       value: "80%",
//       label: "Weed Suppression",
//       color: "bg-yellow-500",
//     },
//     {
//       icon: Recycle,
//       value: "0%",
//       label: "Plastic Waste",
//       color: "bg-purple-500",
//     },
//     {
//       icon: TrendingUp,
//       value: "60%",
//       label: "CO2 Reduction",
//       color: "bg-red-500",
//     },
//     {
//       icon: Globe,
//       value: "50K+",
//       label: "Farmers Supported",
//       color: "bg-indigo-500",
//     },
//   ];

//   const environmentalBenefits = [
//     {
//       title: "Soil Health Enhancement",
//       description:
//         "Our mulching papers decompose naturally, adding organic matter to soil and improving its structure, water retention, and nutrient content.",
//       icon: Heart,
//       impact: "15% improvement in soil organic matter",
//     },
//     {
//       title: "Water Conservation",
//       description:
//         "Reduces water evaporation by up to 50%, helping farmers conserve precious water resources while maintaining optimal soil moisture.",
//       icon: Droplets,
//       impact: "2.5 million liters saved annually per hectare",
//     },
//     {
//       title: "Chemical Reduction",
//       description:
//         "Eliminates need for synthetic herbicides and reduces fertilizer dependency through natural weed suppression and soil enrichment.",
//       icon: Shield,
//       impact: "90% reduction in herbicide usage",
//     },
//     {
//       title: "Carbon Footprint",
//       description:
//         "Manufacturing process generates 60% less CO2 emissions compared to plastic alternatives, contributing to climate change mitigation.",
//       icon: Leaf,
//       impact: "2.5 tons CO2 saved per ton of product",
//     },
//   ];

//   const innovations = [
//     {
//       title: "Plant-Based Fibers",
//       description:
//         "Utilizing agricultural waste and sustainably sourced plant materials",
//       progress: 100,
//     },
//     {
//       title: "Biodegradable Coatings",
//       description:
//         "Natural polymer coatings for enhanced durability and performance",
//       progress: 95,
//     },
//     {
//       title: "Compostable Additives",
//       description: "Organic nutrients that benefit soil during decomposition",
//       progress: 90,
//     },
//     {
//       title: "Renewable Energy",
//       description:
//         "Solar and wind power integration in manufacturing facilities",
//       progress: 75,
//     },
//   ];

//   const certifications = [
//     "ISO 14001:2015 Environmental Management",
//     "ASTM D6400 Compostability Standard",
//     "EN 13432 Biodegradability Certification",
//     "USDA BioPreferred Program",
//     "Cradle to Cradle Certified",
//     "Forest Stewardship Council (FSC)",
//   ];

//   const sdgGoals = [
//     {
//       number: 2,
//       title: "Zero Hunger",
//       description: "Supporting sustainable agriculture and food security",
//     },
//     {
//       number: 6,
//       title: "Clean Water",
//       description: "Promoting water conservation and efficient usage",
//     },
//     {
//       number: 12,
//       title: "Responsible Consumption",
//       description: "Enabling sustainable production and consumption patterns",
//     },
//     {
//       number: 13,
//       title: "Climate Action",
//       description:
//         "Reducing carbon emissions and supporting climate resilience",
//     },
//     {
//       number: 15,
//       title: "Life on Land",
//       description: "Protecting soil health and terrestrial ecosystems",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section
//         className="py-24 bg-cover bg-center bg-no-repeat relative"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
//         }}
//       >
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center mb-8">
//             <div className="bg-green-500 p-4 rounded-full">
//               <Leaf className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Sustainability
//           </h1>
//           <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
//             Leading the transformation towards regenerative agriculture through
//             innovative, eco-friendly mulching solutions
//           </p>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
//             Explore Our Impact
//           </button>
//         </div>
//       </section>

//       {/* Sustainability Stats */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Our Environmental Impact
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Measurable results that demonstrate our commitment to sustainable
//               agriculture
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {sustainabilityStats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <div
//                     className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
//                   >
//                     <IconComponent className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="text-4xl font-bold text-gray-800 mb-2">
//                     {stat.value}
//                   </div>
//                   <p className="text-lg font-semibold text-gray-600">
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Environmental Benefits */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Environmental Benefits
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               How our mulching papers create positive environmental impact
//               across the agricultural ecosystem
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {environmentalBenefits.map((benefit, index) => {
//               const IconComponent = benefit.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
//                 >
//                   <div className="flex items-start mb-6">
//                     <div className="bg-green-500 p-3 rounded-xl mr-4">
//                       <IconComponent className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-green-600 font-semibold">
//                         {benefit.impact}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Innovation Timeline */}
//       <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Sustainable Innovation</h2>
//             <p className="text-xl text-green-200 max-w-3xl mx-auto">
//               Our ongoing research and development in eco-friendly agricultural
//               solutions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {innovations.map((innovation, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-xl font-bold">{innovation.title}</h3>
//                   <span className="text-green-300 font-semibold">
//                     {innovation.progress}%
//                   </span>
//                 </div>
//                 <div className="bg-white/20 rounded-full h-2 mb-4">
//                   <div
//                     className="bg-green-400 h-2 rounded-full transition-all duration-1000"
//                     style={{ width: `${innovation.progress}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-green-100">{innovation.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Environmental Certifications
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Third-party verified standards ensuring our commitment to
//               sustainability
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex items-center">
//                   <Award className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
//                   <p className="text-gray-800 font-semibold">{cert}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* UN SDG Goals */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Supporting UN Sustainable Development Goals
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Aligning our mission with global sustainability objectives
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//             {sdgGoals.map((goal, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-2xl font-bold text-white">
//                     {goal.number}
//                   </span>
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-2">
//                   {goal.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{goal.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lifecycle Analysis */}
//       <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Product Lifecycle
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From sustainable sourcing to complete biodegradation
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
//                 <Leaf className="w-10 h-10 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Sourcing</h3>
//               <p className="text-gray-600">
//                 Sustainably harvested plant fibers and agricultural waste
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-10 h-10 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Production
//               </h3>
//               <p className="text-gray-600">
//                 Clean energy powered manufacturing with minimal emissions
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-yellow-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-10 h-10 text-yellow-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Application
//               </h3>
//               <p className="text-gray-600">
//                 Enhanced crop yields with reduced environmental impact
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-purple-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
//                 <Heart className="w-10 h-10 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Decomposition
//               </h3>
//               <p className="text-gray-600">
//                 Complete biodegradation enriching soil health
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section
//         className="py-24 bg-cover bg-center bg-no-repeat relative"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
//         }}
//       >
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             Join the <span className="text-green-400">Green Revolution</span>
//           </h2>
//           <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
//             Partner with us to transform agriculture while preserving our planet
//             for future generations
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg flex items-center">
//               Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
//             </button>
//             <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
//               Download Sustainability Report
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SustainabilityPage;
import React, { useState, useEffect } from "react";
import {
  Leaf,
  Globe,
  Users,
  Target,
  Eye,
  Droplets,
  Recycle,
  Shield,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  ChevronDown,
  Play,
} from "lucide-react";

const SustainabilityPage = () => {
  const [activeTab, setActiveTab] = useState("regenerative");
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactMetrics = [
    {
      value: "2.5M",
      suffix: "L",
      label: "Water Conserved Daily",
      description: "Through advanced moisture retention technology",
      gradient: "from-blue-600 via-cyan-500 to-teal-400",
    },
    {
      value: "95",
      suffix: "%",
      label: "Biodegradation Rate",
      description: "Complete soil integration within 120 days",
      gradient: "from-green-600 via-emerald-500 to-lime-400",
    },
    {
      value: "10K",
      suffix: "+",
      label: "Tons Plastic Eliminated",
      description: "Preventing environmental contamination annually",
      gradient: "from-purple-600 via-violet-500 to-indigo-400",
    },
    {
      value: "50",
      suffix: "%",
      label: "Carbon Reduction",
      description: "Lower emissions vs traditional alternatives",
      gradient: "from-orange-600 via-red-500 to-pink-400",
    },
  ];

  const innovationTabs = [
    {
      id: "regenerative",
      title: "Regenerative Agriculture",
      subtitle: "Healing the Earth",
      features: [
        "Soil microbiome enhancement through organic decomposition",
        "Carbon sequestration increasing soil organic matter by 25%",
        "Natural pest resistance through beneficial microorganism support",
        "Enhanced nutrient cycling and availability",
      ],
    },
    {
      id: "circular",
      title: "Circular Economy",
      subtitle: "Zero Waste Vision",
      features: [
        "Agricultural waste upcycling into high-performance materials",
        "Closed-loop production with 99% resource efficiency",
        "Byproduct valorization into organic fertilizers",
        "End-of-life nutrients enriching farm ecosystems",
      ],
    },
    {
      id: "precision",
      title: "Precision Sustainability",
      subtitle: "Smart Solutions",
      features: [
        "AI-optimized decomposition rates for crop cycles",
        "Climate-adaptive formulations for regional conditions",
        "Real-time biodegradation monitoring systems",
        "Predictive analytics for optimal application timing",
      ],
    },
  ];

  const certificationBadges = [
    {
      name: "Cradle to Cradle Certified™",
      level: "Platinum",
      color: "bg-gray-300",
    },
    { name: "USDA BioPreferred", level: "100%", color: "bg-green-500" },
    { name: "OK Compost HOME", level: "TÜV AUSTRIA", color: "bg-blue-500" },
    {
      name: "Forest Stewardship Council",
      level: "FSC-C123456",
      color: "bg-emerald-500",
    },
    { name: "ISO 14855", level: "Biodegradable", color: "bg-purple-500" },
    { name: "ASTM D6400", level: "Compostable", color: "bg-orange-500" },
  ];

  const testimonials = [
    {
      quote:
        "The transformation in soil health has been remarkable. Our water usage dropped by 40% while yields increased by 25%.",
      author: "Dr. Maria Santos",
      title: "Sustainable Agriculture Researcher",
      location: "University of California, Davis",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Finally, a solution that doesn't compromise between performance and environmental responsibility.",
      author: "James Mitchell",
      title: "Organic Farm Owner",
      location: "Vermont, USA",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Our carbon footprint decreased by 60% after switching to biodegradable mulching solutions.",
      author: "Elena Rossi",
      title: "Sustainable Operations Director",
      location: "AgriCorp Italia",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80")',
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/50 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none">
            <span className="block transform -rotate-1">EARTH</span>
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-300 bg-clip-text transform rotate-1">
              FIRST
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Transforming agriculture through{" "}
            <span className="text-green-400 font-semibold">
              biodegradable innovation
            </span>{" "}
            that heals the planet while feeding the world
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"></div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Impact Metrics with Animated Counters */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                Real Impact
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Measurable transformation across global agricultural ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                  <div
                    className={`text-6xl md:text-7xl font-black bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {metric.value}
                    <span className="text-4xl">{metric.suffix}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Tabs */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Innovation Ecosystem
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Three pillars of sustainable transformation driving agricultural
              evolution
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tab Navigation */}
            <div className="lg:w-1/3 space-y-4">
              {innovationTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        activeTab === tab.id ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {tab.title}
                      </h3>
                      <p className="text-green-600 font-medium">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
                {innovationTabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div key={tab.id} className="animate-fade-in-up">
                        <h3 className="text-4xl font-bold mb-4">{tab.title}</h3>
                        <p className="text-2xl text-green-400 mb-8 font-light">
                          {tab.subtitle}
                        </p>
                        <div className="space-y-6">
                          {tab.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                              <p className="text-lg text-gray-300 leading-relaxed">
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

      {/* Certifications Showcase */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Global Recognition
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Internationally certified for environmental excellence and
              sustainability leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationBadges.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                  <div
                    className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-center font-medium">
                    {cert.level}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-green-900/80" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 leading-none">
            <span className="block">READY TO</span>
            <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text">
              TRANSFORM?
            </span>
          </h2>

          <p className="text-2xl md:text-3xl text-white/80 mb-16 max-w-5xl mx-auto font-light leading-relaxed">
            Join thousands of progressive farmers who are already harvesting the
            future with our
            <span className="text-green-400 font-semibold">
              {" "}
              revolutionary biodegradable solutions
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-16 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110">
              Download Impact Report
            </button>
          </div>
        </div>
      </section> */}
      {/* Call to Action */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="text-green-400">Green Revolution</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Partner with us to transform agriculture while preserving our planet
            for future generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg flex items-center">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
              Download Sustainability Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
