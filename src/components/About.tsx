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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-20'}`}>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 font-serif">
                The Heart of
                <span className="text-amber-600"> Authentic Chai</span>
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                In the bustling streets of Punjab, where the aroma of spices fills the air and stories unfold over steaming cups, lies the essence of true Indian chai culture. For generations, chai has been more than just a beverage – it&apos;s a ritual, a connection, a moment of peace in our busy lives.
              </p>

              <p>
                At <strong className="text-amber-700">Chah E Piaa De</strong>, we honor this beautiful tradition by bringing you the most authentic chai experience. Every cup is a journey back to our roots, crafted with time-honored recipes passed down through families, perfected with love, and served with the warmth that only comes from genuine passion.
              </p>

              <p>
                From the first sip of our aromatic Masala Chai to the comforting warmth of our Adrak Chai, each blend tells a story of heritage, craftsmanship, and the simple joy of coming together over a perfect cup of chai.
              </p>
            </div>

            <div className="mt-10">
              <button className="btn-secondary">
                Discover Our Heritage
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Traditional chai preparation with copper kettle"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-200 rounded-full opacity-40 -z-10"></div>

              {/* Quote card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-warm">
                <blockquote className="text-gray-800 italic text-center">
                  &quot;Chai is not just a drink, it&apos;s a emotion that brings people together&quot;
                </blockquote>
                <cite className="text-amber-600 text-sm font-semibold mt-2 block text-center">
                  - Traditional Punjabi Wisdom
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '50+', label: 'Years of Tradition' },
            { number: '15+', label: 'Signature Blends' },
            { number: '1000+', label: 'Happy Customers' },
            { number: '3', label: 'locations' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2 font-serif">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;