import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {/* Hamburger icon with transitions */}
            <svg className={`w-8 h-8 transition-transform duration-300 ${menuOpen ? 'transform rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/portfolio" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Portfolio
          </Link>
          <Link to="/services" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link to="/reviews" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Reviews
          </Link>
          <Link to="/contact" className="bg-blue-500 text-white text-lg font-bold px-4 py-2 rounded shadow-md hover:bg-blue-600 transition duration-300 flex items-center">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white absolute left-0 right-0 mt-2 rounded shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col p-4 space-y-2">
            <Link to="/portfolio" className="hover:text-gray-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/reviews" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Reviews
          </Link>
            <Link to="/contact" className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
      
      {/* Optional: Overlay for mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
