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
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className={`mb-12 overflow-hidden rounded-2xl shadow-xl ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 relative group overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
          </div>
        </div>

        <div className="lg:w-3/5 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {product.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {product.specs.map((spec, specIndex) => (
              <div key={specIndex} className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                  <FaChevronRight className="text-green-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {spec.label}
                  </p>
                  <p className="text-gray-800 font-semibold">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-8 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center group">
            Request Quote
            <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
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
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-green-100"
    >
      <div className="flex items-start">
        <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600">
          {benefit.icon}
        </div>
        <p className="text-gray-700 font-medium">{benefit.text}</p>
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

  const mulchFilmTypes = [
    {
      name: "Silver Black Mulch",
      image: "/silver-black-mulch.jpg",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 800 Mtr, 1000 Mtr" },
        { label: "Thickness", value: "20, 25, 30, 50, 100 Micron" },
        { label: "Warranty", value: "3, 5, 8, 12 Months" },
        { label: "Material", value: "LDPE/LLDPE" },
        { label: "Colours", value: "Silver Black & White Black" },
        { label: "Application", value: "Agricultural Farms, Horticulture" },
        { label: "Packaging", value: "Rolls" },
      ],
    },
    {
      name: "Pyramid Mulch Film",
      image: "/pyramid-mulch.jpg",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 1000 Mtr" },
        { label: "Types", value: "Gold, Diamond, Platinum" },
        { label: "Warranty", value: "3, 5, 7 Months" },
        { label: "Material", value: "LDPE/LLDPE" },
        { label: "Colours", value: "Silver Black & White Black" },
        { label: "Application", value: "Agricultural Farms, Horticulture" },
        { label: "Packaging", value: "Rolls" },
      ],
    },
    {
      name: "Non-Prime Mulch Films",
      image: "/non-prime-mulch.jpg",
      specs: [
        { label: "Width", value: "1 Mtr, 1.2 Mtr" },
        { label: "Length", value: "400 Mtr, 1000 Mtr" },
        { label: "Thickness", value: "20, 25, 30, 50, 100 Micron" },
        { label: "Colours", value: "Silver Black" },
        { label: "Material", value: "LDPE/LLDPE" },
        { label: "Application", value: "Agricultural Farms, Horticulture" },
        { label: "Packaging", value: "Rolls" },
      ],
    },
  ];

  const benefits = [
    {
      icon: <FaTint className="text-xl" />,
      text: "Stop moisture loss effectively",
    },
    { icon: <FaLeaf className="text-xl" />, text: "Control weeds precisely" },
    {
      icon: <FaRecycle className="text-xl" />,
      text: "Reduce fertilizer usage",
    },
    {
      icon: <FaLeaf className="text-xl" />,
      text: "Prioritize eco-friendliness",
    },
    {
      icon: <FaTint className="text-xl" />,
      text: "Conserve water efficiently",
    },
    {
      icon: <FaSeedling className="text-xl" />,
      text: "Boost early and overall yield",
    },
    { icon: <FaClock className="text-xl" />, text: "Save time and costs" },
    { icon: <FaSun className="text-xl" />, text: "Drive genuine innovation" },
  ];

  const features = [
    {
      icon: <FaSun className="text-3xl" />,
      title: "UV Protection",
      desc: "Unparalleled protection against harmful UV rays",
    },
    {
      icon: <FaRecycle className="text-3xl" />,
      title: "Eco-friendly",
      desc: "Sustainable solutions for modern farming",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Cost-effective",
      desc: "Save time and reduce operational costs",
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Innovative",
      desc: "Cutting-edge technology for better yields",
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-green-700 to-emerald-800 text-white py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-[url('/agriculture-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Iris Polymers
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-medium"
          >
            Empowering Crops with UV-Protected Mulch Films
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-xl"
          >
            Unleashing the potential of highly UV protected mulch films for
            superior crop production!
          </motion.p>
        </div>
      </motion.div>

      {/* Product Introduction */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Our Premium Mulch Films
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Iris Polymers presents an extraordinary range of polyethylene mulch
            films, skillfully crafted to offer unparalleled UV protection,
            exceptional durability, and remarkable sustainability.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-green-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black/70">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Benefits of IRIS Mulch Film
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Mulch Film Types
          </motion.h2>

          {mulchFilmTypes.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Boost Your Crop Yield?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto text-lg">
              Our expert team is ready to help you select the perfect mulch film
              solution for your agricultural needs.
            </p>
            <button className="bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto group">
              Contact Our Specialists
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
