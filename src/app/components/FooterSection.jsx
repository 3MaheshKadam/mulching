import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Biodegradable Mulching Paper", href: "/products#biodegradable" },
    { name: "Black Mulching Film", href: "/products#black-film" },
    { name: "Silver Mulching Film", href: "/products#silver-film" },
    { name: "Custom Solutions", href: "/products#custom" },
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      content: "Plot No 13, MIDC, Junnar Telco Road, Kandali, District: Pune - 412 412, Maharashtra, India",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+91 90965 34555",
    },
    { 
      icon: "✉️", 
      title: "Email", 
      content: "qualitysrjpolymers5@gmail.com" 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Quality SRJ Polymers Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white">
                Quality SRJ Polymers LLP
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading manufacturer of premium biodegradable mulching paper for sustainable farming solutions across India.
            </p>
            <div className="flex space-x-3">
              {["📘", "📸", "💼", "📺"].map((icon, index) => (
                <button
                  key={index}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">
              Our Products
            </h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1 text-gray-400">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 break-all">
                      {item.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Quality SRJ Polymers LLP. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;