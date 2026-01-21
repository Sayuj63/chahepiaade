'use client';

import { useEffect, useState, useRef } from 'react';

const VisualFeature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Traditional chai being poured from height"
          className="w-full h-full object-cover"
        />
        {/* Rich dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-[#d4af37]/10"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 transition-all duration-1200 delay-1000 ${isVisible ? 'scale-in float' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 bg-[#f4e5b2] rounded-full opacity-40 transition-all duration-1200 delay-1200 ${isVisible ? 'scale-in float' : 'opacity-0 scale-0'}`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#c9a227] rounded-full opacity-50 transition-all duration-1200 delay-1400 ${isVisible ? 'scale-in float' : 'opacity-0 scale-0'}`} style={{ animationDelay: '3s' }}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 transition-all duration-1200 delay-1600 ${isVisible ? 'scale-in float' : 'opacity-0 scale-0'}`} style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`text-white transition-all duration-1200 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[#d4af37]/30 text-[#f4e5b2] text-xs font-semibold tracking-widest uppercase mb-6">
                The Art of Pouring
              </span>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mt-4 mb-8 font-serif leading-tight">
                Every Cup
                <span className="text-gradient-gold block">Tells a Story</span>
              </h2>
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/80"></div>
                <div className="w-12 h-[1px] bg-[#d4af37] shimmer"></div>
              </div>
            </div>

            <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-light">
              <p className="text-xl">
                Watch as our master chaiwalas pour steaming hot chai from great heights, creating the perfect foam and releasing the most divine aromas. This isn&apos;t just preparation – it&apos;s an art form passed down through generations.
              </p>

              <p>
                From the first pour to the last sip, every moment is designed to awaken your senses and connect you with centuries of Indian tea culture. The sound of chai hitting the cup, the aroma of spices, the warmth spreading through your hands – it&apos;s a sensory experience like no other.
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={scrollToMenu}
                className="btn-luxury text-lg px-12 py-4 inline-flex items-center group font-medium tracking-wide"
              >
                Explore Our Menu
                <svg
                  className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative Element */}
          <div className={`hidden lg:block transition-all duration-1200 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Floating decorative card */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Gold glow effect */}
                <div className="absolute inset-0 bg-[#d4af37]/10 rounded-3xl blur-3xl pulse-glow"></div>
                
                {/* Glass card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-[32px] p-10 border border-white/10">
                  <div className="text-center">
                    {/* Decorative icon */}
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-[#c9a227]/20 rounded-full blur-2xl"></div>
                      <div className="relative bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 rounded-full p-6 border border-[#d4af37]/20">
                        <svg className="w-12 h-12 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 2C4.9 2 4 2.9 4 4v14c0 1.1.9 2 2 2h10c2.2 0 4-1.8 4-4V8l-6-6H6zm0 2h8v2H6V4zm0 14h8v2H6v-2zm10-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white font-serif">Traditional Brewing</h3>
                    <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                      Watch our experts craft each cup with precision and passion, following time-honored techniques
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: 'Brew Time', value: '10min' },
                        { label: 'Temp', value: '85°C' },
                        { label: 'Artisans', value: '15+' }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-gradient-gold font-serif mb-1">
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#faf8f5] to-transparent"></div>
    </section>
  );
};

export default VisualFeature;
