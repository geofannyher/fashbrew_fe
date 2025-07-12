"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
            className="flex items-center  hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <img
              src="https://res.cloudinary.com/dvuza2lpc/image/upload/v1751993789/fashbrew/dreamina-2025-07-08-8782-buatkan_logo_brand_dengan_ketentuan_mini..._q2oyje.png"
              alt="Fashbrew Logo"
              className="h-14 w-14 object-contain"
            />
            <p className="text-lg font-medium text-gray-800">ashbreew</p>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/lookbook"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Lookbook
            </Link>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Find Coffe
            </Link>
            <Link
              href="/portofolio"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Portofolio
            </Link>
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
                <Link
                  href="/shop"
                  onClick={closeMenu}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/portofolio"
                  onClick={closeMenu}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Portofolio
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
