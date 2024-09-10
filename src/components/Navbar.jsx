import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 py-4 z-50 transition duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/devrex2.0-min.png?alt=media&token=4316713f-48d4-476e-9db3-32a6e6711d4c" 
            alt="Logo" 
            className="h-24 w-24" // Increase the size of the logo
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex space-x-6 md:space-x-6">
          <Link to="/portfolio" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Portfolio
          </Link>
          <Link to="/services" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link to="/contact" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
