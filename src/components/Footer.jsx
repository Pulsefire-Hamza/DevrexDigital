import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons

const Footer = () => {
  return (
    <footer className="w-full py-6 pt-28"> {/* Added pt-12 for top padding */}
      {/* Top section */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/devrex2.0-min.png?alt=media&token=4316713f-48d4-476e-9db3-32a6e6711d4c" 
            alt="Logo" 
            className="h-10 w-10" 
          />
        </div>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm sm:text-base text-center">
          <a href="/privacy-policy" className="hover:text-gray-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-600">Terms</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6" />

      {/* Bottom section */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Copyright text */}
        <p className="text-sm text-center sm:text-left">© 2024 Devrex Digital. All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/devrexdigital" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-600 hover:text-pink-700" /> {/* Instagram color */}
          </a>
          <a href="https://wa.me/996702473024" target="_blank" rel="noreferrer"> {/* WhatsApp link */}
            <FaWhatsapp className="text-green-500 hover:text-green-600" /> {/* WhatsApp color */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
