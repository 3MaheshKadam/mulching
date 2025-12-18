"use client";
import React, { useEffect } from "react";
import {
  FaLeaf,
  FaSun,
  FaTint,
  FaSeedling,
  FaClock,
  FaRecycle,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`mb-8 overflow-hidden rounded-xl shadow-lg ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 relative group overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-64 lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {product.tag}
            </span>
          </div>
        </div>

        <div className="lg:w-3/5 p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {product.specs.map((spec, specIndex) => (
              <div key={specIndex} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                <p className="text-sm text-gray-900 font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <button className="bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center group text-sm">
              Request Quote
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitItem = ({ benefit, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
    >
      <div className="flex items-start">
        <div className="bg-green-100 p-2.5 rounded-lg mr-3 text-green-600">
          {benefit.icon}
        </div>
        <p className="text-gray-700 font-medium text-sm">{benefit.text}</p>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const mulchingProducts = [
    {
      name: "Biodegradable Mulching Paper",
      tag: "Best Seller",
      image: "/biodegradable.jpg",
      description: "100% biodegradable paper mulch that naturally decomposes within 3-6 months, enriching your soil while suppressing weeds and conserving water.",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 800 Mtr" },
        { label: "Thickness", value: "60-100 GSM" },
        { label: "Color", value: "Black, Brown" },
        { label: "Decomposition", value: "3-6 Months" },
        { label: "Application", value: "All Crops" },
      ],
    },
    {
      name: "Black Mulching Film",
      tag: "Premium Quality",
      image: "/black-mulching-film.jpg",
      description: "High-quality black mulching film for excellent weed control and soil temperature regulation. Ideal for vegetables and row crops.",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 1000 Mtr" },
        { label: "Thickness", value: "25, 30, 50 Micron" },
        { label: "UV Protection", value: "Up to 12 Months" },
        { label: "Material", value: "LDPE/LLDPE" },
        { label: "Application", value: "Vegetables, Fruits" },
      ],
    },
    {
      name: "Silver Black Mulch Film",
      tag: "UV Protected",
      image: "/silver.jfif",
      description: "Silver-black mulching film that reflects heat while controlling weeds. Perfect for heat-sensitive crops and pest management.",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 1000 Mtr" },
        { label: "Thickness", value: "25, 30, 50 Micron" },
        { label: "UV Protection", value: "Up to 12 Months" },
        { label: "Material", value: "LDPE/LLDPE" },
        { label: "Application", value: "All Crops" },
      ],
    },
  ];

  const benefits = [
    {
      icon: <FaTint className="text-lg" />,
      text: "Save up to 50% water with reduced evaporation",
    },
    { 
      icon: <FaLeaf className="text-lg" />, 
      text: "Natural weed suppression - reduce labor by 60%" 
    },
    {
      icon: <FaSeedling className="text-lg" />,
      text: "Increase crop yield by 30-40%",
    },
    {
      icon: <FaRecycle className="text-lg" />,
      text: "100% biodegradable - enriches soil after use",
    },
    {
      icon: <FaSun className="text-lg" />,
      text: "Maintains optimal soil temperature",
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      text: "Protects crops from soil-borne diseases",
    },
    { 
      icon: <FaClock className="text-lg" />, 
      text: "Save time and reduce labor costs significantly" 
    },
    { 
      icon: <FaLeaf className="text-lg" />, 
      text: "Eco-friendly - no harmful residues" 
    },
  ];

  const features = [
    {
      icon: <FaRecycle className="text-3xl" />,
      title: "Biodegradable",
      desc: "Naturally decomposes and enriches soil",
    },
    {
      icon: <FaTint className="text-3xl" />,
      title: "Water Saving",
      desc: "Conserve up to 50% water usage",
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Higher Yields",
      desc: "30-40% increase in crop production",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Cost-Effective",
      desc: "Reduce labor and operational costs",
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-800 text-white py-16 md:py-24"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            Quality SRJ Polymers
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-6 font-medium"
          >
            Premium Biodegradable Mulching Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-base md:text-lg"
          >
            Empowering farmers with eco-friendly mulching paper that increases yields, conserves water, and protects the environment
          </motion.p>
        </div>
      </motion.div>

      {/* Product Introduction */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            Our Premium Mulching Solutions
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg"
          >
            Quality SRJ Polymers offers a comprehensive range of mulching products designed to maximize crop productivity while promoting sustainable farming practices across India.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="text-green-600 mb-3 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900"
          >
            Benefits of Our Mulching Products
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Our Product Range
          </motion.h2>

          {mulchingProducts.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Applications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Suitable for All Crops
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Vegetables", icon: "🥬", examples: "Tomatoes, Peppers, Cucumbers" },
              { name: "Fruits", icon: "🍓", examples: "Strawberries, Melons, Watermelons" },
              { name: "Cash Crops", icon: "🌾", examples: "Cotton, Sugarcane, Tobacco" },
              { name: "Floriculture", icon: "🌺", examples: "Roses, Marigolds, Gerberas" },
            ].map((crop, index) => (
              <div key={index} className="bg-green-50 p-5 rounded-lg">
                <div className="text-4xl mb-2">{crop.icon}</div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  {crop.name}
                </h4>
                <p className="text-xs text-gray-600">{crop.examples}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 md:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('/texture.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Boost Your Crop Yield?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-base md:text-lg">
              Our expert team is ready to help you select the perfect mulching solution for your farming needs.
            </p>
            <Link href="/contact">
              <button className="bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto group">
                Get Free Consultation
                <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;