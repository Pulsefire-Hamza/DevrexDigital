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
        scrollRef.current.scrollLeft += 1; // Increment the scroll position
        // Loop back to the start when the scroll reaches the end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0; // Reset to the start
        }
      }
    };

    const intervalId = setInterval(scroll, 20); // Adjust the speed by changing interval time
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-7xl overflow-hidden px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Brands We Work With</h2>
        <div
          ref={scrollRef}
          className="flex space-x-8 items-center whitespace-nowrap overflow-x-auto scrolling-touch scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform transform hover:scale-105"
            >
              <img
                src={logo.src}
                alt={`Client Logo ${index + 1}`}
                className="h-36 w-auto object-contain shadow-lg rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
                }}
              />
            </a>
          ))}
          {/* Duplicate the logos to create a continuous effect */}
          {logos.map((logo, index) => (
            <a
              key={`duplicate-${index}`}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform transform hover:scale-105"
            >
              <img
                src={logo.src}
                alt={`Client Logo Duplicate ${index + 1}`}
                className="h-36 w-auto object-contain shadow-lg rounded-md"
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
