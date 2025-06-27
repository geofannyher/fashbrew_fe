
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-light tracking-wide text-neutral-900">
              STYLE
              <span className="font-normal text-neutral-600">EDIT</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors">
              LOOKS
            </a>
            <a href="#" className="text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors">
              TRENDS
            </a>
            <a href="#" className="text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors">
              SHOP
            </a>
          </nav>

          <button className="md:hidden">
            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
