import React, { useState, useEffect } from 'react';

const ClientLogos = () => {
  const logos = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/branding.png?alt=media&token=7f4428c3-397e-4f64-a69b-915a431b7b44',
      link: 'https://ruyasolutions.vercel.app/',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/logo.png?alt=media&token=3912c601-6b7d-466b-bd68-2c701906b427',
      link: 'https://www.rgbcomputerspk.com/',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/awanmainlogo.png?alt=media&token=d162b28b-1ea5-4316-ac43-2234029d1bd5',
      link: 'https://awan-builders.vercel.app/',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/bblogo.png?alt=media&token=0cd1d779-6cb1-4a57-8f98-aa72098ff39f',
      link: 'https://www.burgerboyspk.com/',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Untitled%20design%20(20)%20(1).png?alt=media&token=b84f403c-0385-4c2f-9778-4426db405255',
      link: '',
    },
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }
    }, 2000); // Change logo every 2 seconds for faster transitions

    return () => clearInterval(interval);
  }, [isHovered]);

  // Get the indices for the previous, current, and next logos
  const nextIndex = (currentLogoIndex + 1) % logos.length;
  const prevIndex = (currentLogoIndex - 1 + logos.length) % logos.length;

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-400 pb-16">Brands We Work With</h2>
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center space-x-8">
          {/* Previous Logo */}
          <a
            href={logos[prevIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logos[prevIndex].src}
              alt={`Client Logo ${prevIndex + 1}`}
              className="h-48 w-48 object-contain shadow-lg rounded-md opacity-40 hover:shadow-2xl transition-opacity duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
              }}
            />
          </a>

          {/* Current Logo */}
          <a
            href={logos[currentLogoIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logos[currentLogoIndex].src}
              alt={`Client Logo ${currentLogoIndex + 1}`}
              className="h-48 w-48 object-contain shadow-lg rounded-md opacity-100 hover:shadow-2xl filter brightness-125 transition-opacity duration-300" // Added brightness filter
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
              }}
            />
          </a>

          {/* Next Logo */}
          <a
            href={logos[nextIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logos[nextIndex].src}
              alt={`Client Logo ${nextIndex + 1}`}
              className="h-48 w-48 object-contain shadow-lg rounded-md opacity-40 hover:shadow-2xl transition-opacity duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
