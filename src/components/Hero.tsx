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
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f5f1eb] to-[#ebe6dd]"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-diamond opacity-40"></div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>

      {/* Gold decorative line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Small label */}
        <div className={`transition-all duration-1200 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center mb-8 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#d4af37]/20">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-2 shimmer"></span>
            <span className="text-sm font-medium tracking-widest text-[#8b6914] uppercase">
              Est. 1974 • Amritsar, Punjab
            </span>
          </div>
        </div>

        {/* Brand Logo/Name */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 font-serif tracking-tight">
            <span className="text-[#1a1a1a]">Chah E</span>
            <span className="text-gradient-gold"> Piaa De</span>
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <div className="w-16 h-[2px] bg-[#d4af37] shimmer"></div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1200 delay-400 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#2d2d2d] font-light mb-6 font-serif italic">
            Where Every Cup Tells a Story
          </p>
          <p className="text-lg sm:text-xl text-[#5a5a5a] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the authentic taste of traditional Indian chai, crafted with love and the finest spices from the heart of Punjab
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToMenu}
              className="btn-luxury text-lg px-10 py-4 inline-flex items-center group font-medium tracking-wide"
            >
              Explore Our Collection
              <svg
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-luxury-outline text-lg px-10 py-4 font-medium tracking-wide">
              Our Heritage
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="w-1 h-24 bg-gradient-to-b from-[#d4af37]/50 to-transparent rounded-full float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block">
          <div className="w-1 h-32 bg-gradient-to-b from-[#d4af37]/30 to-transparent rounded-full float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="absolute bottom-1/3 left-20 hidden lg:block">
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent float"></div>
        </div>
        <div className="absolute bottom-1/4 right-20 hidden lg:block">
          <div className="w-16 h-[1px] bg-gradient-to-l from-[#d4af37]/30 to-transparent float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Bottom decorative section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          {/* Scroll indicator */}
          <div className={`flex flex-col items-center transition-all duration-1200 delay-800 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
            <span className="text-sm font-medium tracking-widest text-[#8b6914] uppercase mb-4">Scroll to Discover</span>
            <div className="relative w-6 h-10 border-2 border-[#d4af37]/50 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Gold line at bottom */}
          <div className="divider-gold mt-8 opacity-50"></div>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#d4af37]/20 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[#d4af37]/20 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#d4af37]/20 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#d4af37]/20 rounded-br-3xl"></div>
    </section>
  );
};

export default Hero;
