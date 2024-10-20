import React, { useEffect, useRef } from 'react';

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

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 5; // Increased speed
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 10); // Reduced interval for maximum smoothness
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-7xl overflow-hidden px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-blue-500">
          Brands We Work With
        </h2>
        <div
          ref={scrollRef}
          className="flex space-x-6 sm:space-x-10 items-center whitespace-nowrap overflow-hidden scrolling-touch scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={logo.src}
                alt={`Client Logo ${index + 1}`}
                className="h-20 sm:h-28 w-auto object-contain shadow-md rounded-lg transition duration-300 ease-in-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
                }}
              />
            </a>
          ))}
          {/* Duplicate the logos for continuous scrolling effect */}
          {logos.map((logo, index) => (
            <a
              key={`duplicate-${index}`}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={logo.src}
                alt={`Client Logo Duplicate ${index + 1}`}
                className="h-20 sm:h-28 w-auto object-contain shadow-md rounded-lg transition duration-300 ease-in-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
