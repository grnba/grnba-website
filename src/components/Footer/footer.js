import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white p-4">
      <div className="container mx-auto text-center">
        {/* Centered Contact and Social Icons */}
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link to="/contact" className="hover:text-gray-300 text-lg font-semibold">
            Connect & Follow Us:
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100083796672568"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        
        {/* Centered Copyright Text */}
        <div className="text-center mt-4">
          <p>© 2024 KRy Inc, GRNBA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
