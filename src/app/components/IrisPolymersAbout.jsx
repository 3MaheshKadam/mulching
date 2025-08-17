"use client";

// import { useState, useEffect } from "react";

// export default function IrisPolymersAbout() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("about-section");
//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="about-section"
//       className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden"
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div className="absolute top-20 -left-20 w-80 h-80 bg-green-100/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 -right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-green-400/40 rounded-full animate-pulse"></div>
//         <div
//           className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-green-500/30 rounded-full animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 xl:px-12">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
//           {/* Content Section */}
//           <div
//             className={`transform transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-8 opacity-0"
//             }`}
//           >
//             {/* Welcome Header */}
//             <div className="mb-8">
//               <div className="inline-flex items-center space-x-3 mb-4">
//                 <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
//                 <span className="text-green-700 font-bold text-sm uppercase tracking-wider">
//                   About Our Company
//                 </span>
//               </div>

//               <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
//                 Welcome to{" "}
//                 <span className="text-transparent bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text">
//                   IRIS Polymers
//                 </span>
//               </h2>

//               <div className="text-xl lg:text-2xl font-bold text-green-700 mb-8 leading-relaxed">
//                 Manufacturing The Best Agricultural Products Since the turn of
//                 the decade.
//               </div>
//             </div>

//             {/* Main Description */}
//             <div className="space-y-6 mb-10">
//               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
//                 We are a{" "}
//                 <span className="font-bold text-green-700">
//                   leading manufacturer
//                 </span>{" "}
//                 of Agricultural Films and Industrial Packaging Films, providing
//                 innovative solutions to farmers for improved crop yields and
//                 reduced labor costs.
//               </p>

//               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
//                 Our high-quality Industrial Packaging Films cater to diverse
//                 packaging needs. With a strong focus on{" "}
//                 <span className="font-bold text-green-700">
//                   customer satisfaction, sustainability, and continuous
//                   innovation
//                 </span>
//                 , we are your trusted partner for agricultural and industrial
//                 success.
//               </p>
//             </div>

//             {/* Key Features */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-10">
//               {[
//                 {
//                   icon: "🌱",
//                   title: "Agricultural Innovation",
//                   desc: "Leading-edge farming solutions",
//                 },
//                 {
//                   icon: "📦",
//                   title: "Industrial Packaging",
//                   desc: "Diverse packaging solutions",
//                 },
//                 {
//                   icon: "🎯",
//                   title: "Customer Focus",
//                   desc: "Satisfaction guaranteed",
//                 },
//                 {
//                   icon: "♻️",
//                   title: "Sustainability",
//                   desc: "Eco-friendly practices",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-green-100/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-4 opacity-0"
//                   }`}
//                   style={{ transitionDelay: `${400 + index * 100}ms` }}
//                 >
//                   <div className="text-2xl">{feature.icon}</div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-base mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 font-medium">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div
//               className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ease-out ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: "800ms" }}
//             >
//               <button className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white font-bold text-lg rounded-2xl hover:from-green-700 hover:via-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
//                 <span className="relative z-10">Learn More</span>
//                 <svg
//                   className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//               </button>

//               <button className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-2xl border-2 border-green-600 hover:bg-green-50 hover:border-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//                 <svg
//                   className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <span>Contact Us</span>
//               </button>
//             </div>
//           </div>

//           {/* Enhanced Owner/Farmer Image Section */}
//           <div
//             className={`relative transform transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "300ms" }}
//           >
//             {/* Main Image Container */}
//             <div className="relative">
//               {/* Decorative Background Elements */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-green-200/30 via-green-300/20 to-green-400/30 rounded-3xl blur-2xl"></div>
//               <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>

//               {/* Main Image */}
//               <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
//                 <img
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="IRIS Polymers Owner - Agricultural Innovation Leader"
//                   className="w-full h-96 lg:h-[500px] xl:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
//                 />

//                 {/* Image Overlay Content */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//                 {/* Owner Info Card */}
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-lg">
//                         Visionary Leader
//                       </h3>
//                       <p className="text-green-700 font-semibold text-sm">
//                         IRIS Polymers Founder
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Stats */}
//               <div className="absolute top-8 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-green-100/50 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
//                 <div className="text-center">
//                   <div className="text-2xl font-black text-green-700">10+</div>
//                   <div className="text-sm font-bold text-gray-700">
//                     Years Experience
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-24 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-green-100/50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
//                 <div className="text-center">
//                   <div className="text-2xl font-black text-green-700">
//                     1000+
//                   </div>
//                   <div className="text-sm font-bold text-gray-700">
//                     Happy Farmers
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";

export default function IrisPolymersAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about-section" className="relative py-20 lg:py-32 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Content Section - Takes up 6 columns */}
          <div
            className={`lg:col-span-6 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Small Header */}
            <div className="mb-8">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-8">
                WELCOME TO IRIS POLYMERS
              </p>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-10">
                Manufacturing The Best Agricultural Products Since The Turn Of
                The Decade.
              </h2>
            </div>

            {/* Main Description */}
            <div className="mb-12">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                We are a leading manufacturer of Agricultural Films and
                Industrial Packaging Films, providing innovative solutions to
                farmers for improved crop yields and reduced labor costs. Our
                high-quality Industrial Packaging Films cater to diverse
                packaging needs. With a strong focus on customer satisfaction,
                sustainability, and continuous innovation, we are your trusted
                partner for agricultural and industrial success.
              </p>
            </div>

            {/* Simple CTA Button */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <button className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                Read More
              </button>
            </div>
          </div>

          {/* Image Section - Takes up 6 columns */}
          <div
            className={`lg:col-span-6 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Main Image Container with Rounded Corners */}
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Farmer standing in agricultural field with crops - IRIS Polymers"
                  className="w-full h-96 lg:h-[500px] xl:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Back to Top Arrow */}
      <div className="absolute bottom-8 left-8">
        <button className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
