import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaLaptopCode, FaMobileAlt, FaBullhorn } from "react-icons/fa"; // Importing Font Awesome icons

const AboutUs = () => {
  return (
    <section className="text-white py-20 px-4 bg-transparent">
      <div className="container mx-auto text-center">
        {/* About Us Heading */}
        <h2 className="text-blue-400 font-bold text-4xl mb-6 pb-10">ABOUT US</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          At Devrex, we are dedicated to empowering clients to achieve their strategic goals through cutting-edge digital solutions. Our focus is on aligning our expertise with the unique visions of each client, crafting tailored strategies that address immediate needs while laying the groundwork for sustained growth and success in a dynamic digital landscape.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="p-8 rounded-lg text-center bg-transparent service-box">
          <FaLaptopCode className="mx-auto mb-4 w-24 h-24 text-green-500" /> {/* Changed to green for Web Development */}
          <h3 className="text-blue-400 font-bold text-xl mb-4">Web Development</h3>
          <p className="text-white">
            We create premium coded websites with a blend of stunning design and functionality for outstanding results.
          </p>
        </div>

        {/* App Development */}
        <div className="p-8 rounded-lg text-center bg-transparent service-box">
          <FaMobileAlt className="mx-auto mb-4 w-24 h-24 text-purple-500" /> {/* Changed to purple for App Development */}
          <h3 className="text-blue-400 font-bold text-xl mb-4">App Development</h3>
          <p className="text-white">
            Building app and web app solutions with Bubble.io, we offer exceptional design and seamless functionality.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="p-8 rounded-lg text-center bg-transparent service-box">
          <FaBullhorn className="mx-auto mb-4 w-24 h-24 text-orange-500" /> {/* Changed to orange for Digital Marketing */}
          <h3 className="text-blue-400 font-bold text-xl mb-4">Digital Marketing</h3>
          <p className="text-white">
            We craft effective digital marketing strategies that drive engagement and growth, tailored to your brand’s unique needs.
          </p>
        </div>
      </div>

      {/* See Our Services Button */}
      <div className="text-center mt-12">
        <Link
          to="/services" // Update to the actual path of your services page
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition transform hover:scale-105 hover:shadow-lg animated-button"
        >
          See Our Services
        </Link>
      </div>

      {/* Custom Styles for Blue Light Effect and Hover Animation */}
      <style jsx>{`
        .service-box {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent; /* Optional: adds border space for hover effect */
        }

        .service-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 4px 16px rgba(30, 64, 175, 0.3);
          border-color: #1E40AF; /* Optional: blue border on hover */
        }

        .service-box::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 6px; /* Adjust the height to your preference */
          background: #1E40AF; /* Solid blue color */
          box-shadow: 0 0 8px rgba(30, 64, 175, 0.5); /* Subtle blue glow effect */
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .service-box:hover::before {
          background: #1E40AF; /* Adjust if you want to change color on hover */
        }

        .animated-button {
          animation: fadeIn 0.5s ease forwards;
          opacity: 0; /* Start hidden */
        }

        @keyframes fadeIn {
          to {
            opacity: 1; /* Fade in */
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
