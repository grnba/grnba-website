import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-red-800 text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center text-2xl font-bold">
          <img
            src={require("../../assets/logo.jpg")}
            alt="Profile"
            className="w-16 h-16 object-cover mr-2"
          />
          <Link to="/">GRNBA</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="hover:text-gray-300 font-mono text-xl">
            HOME
          </Link>
          <Link to="/about" className="hover:text-gray-300 font-mono text-xl">
            ABOUT
          </Link>
          <Link to="/gallery" className="hover:text-gray-300 font-mono text-xl">
            GALLERY
          </Link>
          <Link to="/events" className="hover:text-gray-300 font-mono text-xl">
            EVENTS
          </Link>
          <Link to="/executive-committee" className="hover:text-gray-300 font-mono text-xl">
            EXECUTIVE-COMMITTEE
          </Link>
          <Link to="/contact" className="hover:text-gray-300 font-mono text-xl">
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-red-800 text-white p-4 flex flex-col space-y-4 md:hidden">
            <Link
              to="/"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link
              to="/gallery"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              GALLERY
            </Link>
            <Link
              to="/events"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              EVENTS
            </Link>
            <Link
              to="/executive-committee"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              EXECUTIVE-COMMITTEE
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 font-mono text-lg"
              onClick={toggleMobileMenu}
            >
              CONTACT US
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
