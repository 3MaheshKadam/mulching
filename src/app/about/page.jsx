"use client";
import React from "react";
import { Award, Users, Target, Eye, Leaf, Globe, Shield } from "lucide-react";

const AboutUs = () => {
  const leaders = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/api/placeholder/200/200",
      description: "20+ years in agricultural innovation",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "/api/placeholder/200/200",
      description: "Expert in sustainable farming solutions",
    },
    {
      name: "Michael Chen",
      position: "VP Operations",
      image: "/api/placeholder/200/200",
      description: "Global supply chain specialist",
    },
  ];

  const teamMembers = [
    {
      name: "Emily Davis",
      role: "R&D Manager",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Robert Wilson",
      role: "Quality Assurance",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Lisa Brown",
      role: "Marketing Director",
      image: "/api/placeholder/150/150",
    },
    {
      name: "David Miller",
      role: "Sales Manager",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Anna Garcia",
      role: "Sustainability Officer",
      image: "/api/placeholder/150/150",
    },
    {
      name: "James Taylor",
      role: "Operations Lead",
      image: "/api/placeholder/150/150",
    },
  ];

  const awards = [
    {
      title: "Best Agricultural Innovation Award",
      year: "2023",
      org: "AgriTech Excellence",
    },
    {
      title: "Sustainable Farming Solution",
      year: "2022",
      org: "Green Agriculture Forum",
    },
    {
      title: "Industry Leader Recognition",
      year: "2021",
      org: "Global Farming Association",
    },
    {
      title: "Quality Excellence Award",
      year: "2020",
      org: "International Standards Council",
    },
  ];

  const certificates = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "FSSC 22000 Food Safety",
    "BRC Global Standard",
    "Organic Certification",
    "Biodegradable Materials Certification",
  ];

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* About Us Header */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering sustainable mulching solutions for modern agriculture
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/api/placeholder/600/400"
                alt="Mulching Paper Company"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Revolutionizing Agriculture Through Innovation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>MULCHING PAPER</strong> is a pioneering organization
                that has established itself as a trusted leader in sustainable
                agricultural solutions. Founded in 2012, we have built our
                reputation as a premier manufacturer of biodegradable mulching
                papers and eco-friendly farming materials.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are passionate about empowering farmers to enhance crop
                yield, reduce water consumption, and minimize environmental
                impact through our innovative and high-quality biodegradable
                mulching solutions. With operations spanning across 8 countries
                and robust distribution networks across North America, Europe,
                and Asia, we serve a global farming community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we look toward the future, we are expanding our presence in
                emerging markets across Africa and South America to better serve
                farmers worldwide and help them achieve sustainable agricultural
                success.
              </p>
              <div className="bg-green-100 p-4 rounded-lg mt-6">
                <p className="text-green-800 font-semibold italic">
                  "Growth Unleashed: Transformed from a small startup to a
                  global leader in 2018, pioneering sustainable agriculture
                  solutions worldwide."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To be the global leader in sustainable mulching solutions,
                transforming agriculture through innovative, eco-friendly
                products that enhance crop productivity while preserving our
                planet for future generations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To provide farmers worldwide with premium biodegradable mulching
                papers that increase crop yields, conserve water, suppress weeds
                naturally, and promote sustainable farming practices through
                continuous innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Visionary leaders driving agricultural innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to agricultural excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating our achievements in agricultural innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-green-600 font-semibold mb-1">
                  {award.year}
                </p>
                <p className="text-gray-600 text-sm">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Quality assurance through recognized standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" />
                  <p className="text-gray-800 font-semibold">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section with Farming Background */}
      <section
        className="py-12 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Leaf className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Nurturing Nature,
            <br />
            <span className="text-green-400">Harvesting Future</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Where sustainable innovation meets agricultural excellence - growing
            together for a greener tomorrow
          </p>
          <div className="flex justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center">
              <Leaf className="w-6 h-6 mr-2" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              <span>Farmer First</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
