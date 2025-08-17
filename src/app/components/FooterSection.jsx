import React from "react";

const FooterSection = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    { name: "Biodegradable Films", href: "#biodegradable" },
    { name: "Greenhouse Films", href: "#greenhouse" },
    { name: "Drip Irrigation Films", href: "#drip-irrigation" },
    { name: "Crop Protection", href: "#crop-protection" },
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      content: "Industrial Area, Pune, Maharashtra - 411019",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+91 98765 43210 / +91 98765 43211",
    },
    { icon: "✉️", title: "Email", content: "info@mulchingpaper.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Mulching Paper Solutions
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium agricultural films and mulching solutions for modern
              farming needs.
            </p>
            <div className="flex space-x-3">
              {["📘", "📸", "💼", "📺"].map((icon, index) => (
                <button
                  key={index}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
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
                    <p className="text-xs text-gray-400">{item.content}</p>
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
            © {new Date().getFullYear()} Mulching Paper Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
