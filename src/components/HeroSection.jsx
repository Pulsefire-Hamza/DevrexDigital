import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-20 h-[100vh] pt-52  ">
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left pl-0 lg:pl-32">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Welcome to</h1>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl mt-2 text-gray-300 animate-glow-bright">
          Devrex Digital
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-4 leading-relaxed">
          Your partner in unlocking growth and maximizing business potential,
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          Tailored strategies to help you thrive.
        </p>
        <div className="pt-8 sm:pt-10 flex justify-center lg:justify-start w-full">
          <Link to="/contact">
            <button className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-base sm:text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 lg:float-right">
        <img
          src="https://pnghq.com/wp-content/uploads/pnghq.com-developer-icon-png-art-fo-7.png"
          alt="Devrex Digital"
          className="w-72 sm:w-80 lg:w-[500px] h-auto object-cover rounded-lg animate-float"
        />
      </div>
    </div>
  );
};

export default HeroSection;
