'use client';

import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-lines opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#faf8f5] to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#f5f1eb] to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className={`relative transition-all duration-1200 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative">
              {/* Main image with gold border */}
              <div className="relative overflow-hidden rounded-[32px] shadow-luxury border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Traditional chai preparation with copper kettle"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />

                {/* Gold overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Decorative corner */}
                <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#d4af37]/60"></div>
                <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#d4af37]/60"></div>
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-80 bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-luxury border border-[#d4af37]/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#c9a227] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-[#2d2d2d] text-lg font-serif italic leading-relaxed">
                      Chai is not just a drink, it&apos;s an emotion that brings people together
                    </blockquote>
                    <cite className="text-[#8b6914] font-semibold mt-2 block text-sm tracking-wide">
                      — Traditional Punjabi Wisdom
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-16'}`}>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#faf8f5] border border-[#d4af37]/20 text-[#8b6914] text-xs font-semibold tracking-widest uppercase mb-6">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 font-serif leading-tight">
                The Heart of
                <span className="text-gradient-gold block mt-2">Authentic Chai</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed font-light">
              <p>
                In the bustling streets of Punjab, where the aroma of spices fills the air and stories unfold over steaming cups, lies the essence of true Indian chai culture. For generations, chai has been more than just a beverage – it&apos;s a ritual, a connection, a moment of peace in our busy lives.
              </p>

              <p>
                At <strong className="text-[#1a1a1a] font-medium">Chah E Piaa De</strong>, we honor this beautiful tradition by bringing you the most authentic chai experience. Every cup is a journey back to our roots, crafted with time-honored recipes passed down through families, perfected with love, and served with the warmth that only comes from genuine passion.
              </p>

              <p>
                From the first sip of our aromatic Masala Chai to the comforting warmth of our Adrak Chai, each blend tells a story of heritage, craftsmanship, and the simple joy of coming together over a perfect cup of chai.
              </p>
            </div>

            <div className="mt-12">
              <button className="btn-luxury-outline text-lg px-10 py-4 font-medium tracking-wide">
                Discover Our Heritage
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-24 lg:mt-32 transition-all duration-1200 delay-600 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f1eb] rounded-[32px] p-12 lg:p-16 border border-[#d4af37]/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { number: '50+', label: 'Years of Tradition', suffix: '' },
                { number: '15+', label: 'Signature Blends', suffix: '' },
                { number: '1000+', label: 'Happy Customers', suffix: '+' },
                { number: '3', label: 'Locations', suffix: '' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gradient-gold mb-2 font-serif">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-[#5a5a5a] font-medium text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold opacity-30"></div>
    </section>
  );
};

export default About;
