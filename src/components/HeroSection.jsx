import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-10 py-12 lg:py-20 h-[80vh] pt-40">
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left pl-0 lg:pl-32">
        <h1 className="text-4xl lg:text-7xl font-bold pt-48">Welcome to</h1>
        <h2 className="text-5xl lg:text-8xl mt-2 text-gray-300 animate-glow-bright">
          Devrex Digital
        </h2>
        <p className="text-lg lg:text-xl mt-4">
          Your partner in unlocking growth and maximizing business potential,
        </p>
        <p className="text-lg lg:text-xl">
          Tailored strategies to help you thrive. To put in the first.
        </p>
        <div className="pt-10 flex justify-center lg:justify-start lg:pl-32 w-full">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 text-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 lg:float-right">
        <img
          src="https://pnghq.com/wp-content/uploads/pnghq.com-developer-icon-png-art-fo-7.png"
          alt="Devrex Digital"
          className="w-96 lg:w-[500px] h-96 lg:h-[500px] object-cover rounded-lg animate-float"
        />
      </div>
    </div>
  );
};

export default HeroSection;
