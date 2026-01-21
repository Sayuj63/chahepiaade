'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 gradient-warm"></div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-transparent"></div>
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.1" />
              <circle cx="75" cy="75" r="1" fill="currentColor" opacity="0.1" />
              <circle cx="50" cy="10" r="0.5" fill="currentColor" opacity="0.05" />
              <circle cx="10" cy="60" r="0.5" fill="currentColor" opacity="0.05" />
              <circle cx="90" cy="40" r="0.5" fill="currentColor" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grain)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Brand Logo/Name */}
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-amber-900 mb-4 font-serif">
            Chah E Piaa De
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-amber-800 font-light mb-2">
            Where every sip tells a story
          </p>
          <p className="text-lg sm:text-xl text-amber-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the authentic taste of traditional Indian chai, crafted with love and the finest spices from the heart of Punjab
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={scrollToMenu}
            className="btn-primary text-lg px-12 py-4 inline-flex items-center group"
          >
            Explore Our Chai
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className={`absolute top-20 left-10 w-2 h-2 bg-amber-600 rounded-full opacity-60 transition-all duration-1000 delay-1000 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-32 right-16 w-3 h-3 bg-amber-500 rounded-full opacity-40 transition-all duration-1000 delay-1200 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-40 left-20 w-1 h-1 bg-amber-700 rounded-full opacity-50 transition-all duration-1000 delay-1400 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-60 right-32 w-2 h-2 bg-amber-400 rounded-full opacity-60 transition-all duration-1000 delay-1600 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${isVisible ? 'fade-up' : 'opacity-0'}">
        <div className="flex flex-col items-center text-amber-700">
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;