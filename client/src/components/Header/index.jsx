import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full px-4 py-3 bg-white border-b border-gray-200">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Bluestock" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/ipo" className="text-gray-600 hover:text-gray-900">
            IPO
          </Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900">
            COMMUNITY
          </Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              PRODUCTS
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              BROKERS
              <MdOutlineArrowOutward className="text-gray-600 hover:text-gray-900 text-[18px] ml-1" />
            </button>
          </div>
          <Link to="/live-news" className="flex items-center">
            <span className="text-gray-600 hover:text-gray-900">LIVE NEWS</span>
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-600 text-white rounded">
              NEW
            </span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
