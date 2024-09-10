import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-10 py-12 lg:py-20 h-[80vh]">
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left pl-0 lg:pl-32">
        <h1 className="text-4xl lg:text-7xl font-bold pt-28">Welcome to</h1>
        <h2 className="text-5xl lg:text-8xl mt-2 text-gray-300 animate-glow-bright">
          Devrex Digital
        </h2> {/* Light grey with animation */}
        <p className="text-lg lg:text-xl mt-4">One stop shop for all your technological</p>
        <p className="text-lg lg:text-xl">solutions and consulting needs.</p>
        <div className="pt-10 flex justify-center lg:justify-start lg:pl-32 w-full">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 text-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/software_development.png?alt=media&token=4509c759-8c68-4e0d-8bfc-34d650f0f6a6"
          alt="Devrex Digital"
          className="w-80 lg:w-96 h-80 lg:h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
