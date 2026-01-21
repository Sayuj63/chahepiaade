'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-luxury py-3'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top decorative line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl lg:text-3xl font-bold font-serif tracking-tight transition-all duration-500 ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}>
              <span>Chah E</span>
              <span className={`${isScrolled ? 'text-[#d4af37]' : 'text-[#d4af37]'}`}> Piaa De</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="ml-10 flex items-center space-x-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Collection', id: 'menu' },
                { name: 'Visit Us', id: 'visit-us' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f4e5b2] transition-all duration-300 group-hover:w-full rounded-full`}></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('menu')}
              className="ml-8 px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-gold transform hover:scale-105"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 overflow-hidden transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-luxury border border-[#d4af37]/10 p-6">
              <div className="space-y-1">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Collection', id: 'menu' },
                  { name: 'Visit Us', id: 'visit-us' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#d4af37] hover:bg-[#faf8f5] rounded-xl transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] font-semibold rounded-full transition-all duration-300 hover:shadow-gold"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
