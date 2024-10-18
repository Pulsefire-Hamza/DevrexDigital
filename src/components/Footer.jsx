import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

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
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-blue-600 hover:text-blue-700" /> {/* Facebook color */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-600 hover:text-pink-700" /> {/* Instagram color */}
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-800" /> {/* LinkedIn color */}
          </a>
          <a href="https://www.fiverr.com" target="_blank" rel="noreferrer">
            {/* Fiverr SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-6 w-6 text-green-500 hover:text-green-600"
              fill="currentColor"
            >
              <path d="M11.254 0H4.746C3.09 0 1.87.597.972 1.513A4.004 4.004 0 000 4.992v6.016A4.004 4.004 0 00.972 12.487C1.87 13.403 3.09 14 4.746 14h6.508c1.656 0 2.876-.597 3.774-1.513C15.854 12.403 16 11.555 16 10.985V5.015c0-.57-.146-1.418-.472-1.993C14.63.597 13.41 0 11.754 0zM8 12.517a3.637 3.637 0 01-3.636-3.637c0-.024 0-.049.002-.073h1.3a2.36 2.36 0 002.336 2.336c.003.024.005.049.005.073zm1.363-2.49h-1.728c-.128.243-.308.467-.546.646V8.59h2.328V7.643h-2.328V6.45h2.728V5.498h-2.972V5h1.642c.126.012.254.016.387.046.088.026.176.056.261.084v3.036c0 .4-.111.805-.303 1.168-.14.264-.334.507-.565.72z" />
            </svg>
          </a>
          <FaTimes className="text-xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
