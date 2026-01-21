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
      { threshold: 0.3 }
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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-20'}`}>
            <div className="mb-6">
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Taste the Tradition
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold mt-2 mb-6 font-serif leading-tight">
                Every Cup
                <span className="text-amber-400"> Tells a Story</span>
              </h2>
              <div className="w-24 h-1 bg-amber-400 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                Watch as our master chaiwalas pour steaming hot chai from great heights, creating the perfect foam and releasing the most divine aromas. This isn't just preparation – it's an art form, passed down through generations.
              </p>
              
              <p>
                From the first pour to the last sip, every moment is designed to awaken your senses and connect you with centuries of Indian tea culture. The sound of chai hitting the cup, the aroma of spices, the warmth spreading through your hands – it's a sensory experience like no other.
              </p>
            </div>

            <div className="mt-10">
              <button
                onClick={scrollToMenu}
                className="btn-primary bg-amber-600 hover:bg-amber-700 text-white inline-flex items-center group"
              >
                Explore Our Menu
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
          </div>

          {/* Decorative Element */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Floating chai cup illustration */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2C4.9 2 4 2.9 4 4v14c0 1.1.9 2 2 2h10c2.2 0 4-1.8 4-4V8l-6-6H6zm0 2h8v2H6V4zm0 14h8v2H6v-2zm10-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">Traditional Brewing</h3>
                    <p className="text-gray-300">
                      Watch our experts craft each cup with precision and passion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute top-20 left-20 w-3 h-3 bg-amber-400 rounded-full opacity-60 transition-all duration-1000 delay-1000 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute top-40 right-32 w-2 h-2 bg-amber-300 rounded-full opacity-50 transition-all duration-1000 delay-1200 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute bottom-32 left-32 w-4 h-4 bg-amber-500 rounded-full opacity-40 transition-all duration-1000 delay-1400 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute bottom-20 right-20 w-2 h-2 bg-amber-200 rounded-full opacity-60 transition-all duration-1000 delay-1600 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}></div>
    </section>
  );
};

export default VisualFeature;