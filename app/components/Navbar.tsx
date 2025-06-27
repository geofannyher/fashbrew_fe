"use client";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl group-hover:shadow-lg transition-shadow">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                CafeFinder
              </h1>
              <p className="text-xs text-gray-500">Discover great cafes</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/lookbook"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Lookbook
            </Link>
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Shop
            </button>
            {/* <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Reviews
            </button> */}
            {/* Uncomment if needed
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
              Sign In
            </button>
            */}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors z-[70] relative ml-4"
              aria-label="Toggle menu"
            >
              {!isMenuOpen && <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Overlay - hanya untuk area di bawah navbar */}
            <div
              className="fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-[60]"
              onClick={closeMenu}
            />

            {/* Menu */}
            <div className="absolute top-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-[65]">
              {/* Close button di pojok kanan atas */}
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-4 pb-4">
                <Link
                  href="/lookbook"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Lookbook
                </Link>
                <button
                  onClick={closeMenu}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Shop
                </button>
                <button
                  onClick={closeMenu}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Reviews
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
