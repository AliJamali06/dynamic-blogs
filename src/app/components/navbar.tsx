"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4 text-black sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo/Brand Name */}
        <div className="text-xl font-bold tracking-wide text-gray-800 mr-8">
          Blogify
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 top-full w-full bg-white shadow-md md:relative md:top-0 md:flex md:ml-auto md:space-x-6 md:bg-transparent`}
        >
          <Link
            href="/#"
            className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out md:inline"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/bolgpost"
            className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out md:inline"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/contactus"
            className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out md:inline"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
