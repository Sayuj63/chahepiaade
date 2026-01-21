'use client';

import { useEffect, useState, useRef } from 'react';

const SignatureChai = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const chaiVarieties = [
    {
      name: 'Masala Chai',
      description: 'Our signature blend with cardamom, cinnamon, ginger, and clove. A perfect balance of spices that awakens your senses.',
      price: '₹80',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      spiceLevel: 'Medium',
      featured: true
    },
    {
      name: 'Adrak Chai',
      description: 'Fresh ginger chai that warms your soul. Simple, pure, and incredibly soothing, made with the finest young ginger.',
      price: '₹70',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      spiceLevel: 'Mild',
      featured: false
    },
    {
      name: 'Kulhad Chai',
      description: 'Traditional chai served in authentic terracotta cups. The earthenware adds a unique earthy flavor to our premium blend.',
      price: '₹90',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      spiceLevel: 'Medium',
      featured: true
    },
    {
      name: 'Fusion Chai',
      description: 'Where tradition meets innovation. A unique blend combining classic Indian spices with modern brewing techniques.',
      price: '₹100',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      spiceLevel: 'Spicy',
      featured: false
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-24 lg:py-40 gradient-dark-luxury relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-diamond opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1200 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#d4af37]/30 text-[#f4e5b2] text-xs font-semibold tracking-widest uppercase mb-6">
            Signature Collection
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            Our Premium
            <span className="text-gradient-gold block">Chai Selection</span>
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
            <div className="w-12 h-[1px] bg-[#d4af37] shimmer"></div>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Each cup is a masterpiece, crafted with the finest ingredients and time-honored techniques passed down through generations of chaiwalas
          </p>
        </div>

        {/* Chai Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {chaiVarieties.map((chai, index) => (
            <div
              key={chai.name}
              className={`group relative card-luxury bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-700 ${
                chai.featured ? 'md:col-span-2 lg:col-span-2 xl:col-span-1' : ''
              } ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {chai.featured && (
                <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-gold">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={chai.image}
                  alt={chai.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Spice Level Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm ${
                    chai.spiceLevel === 'Mild' ? 'bg-emerald-500/90 text-white' :
                    chai.spiceLevel === 'Medium' ? 'bg-amber-500/90 text-white' :
                    'bg-red-500/90 text-white'
                  }`}>
                    {chai.spiceLevel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-serif group-hover:text-[#d4af37] transition-colors duration-300">
                    {chai.name}
                  </h3>
                  <span className="text-3xl font-bold text-gradient-gold">
                    {chai.price}
                  </span>
                </div>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
                  {chai.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] font-semibold py-4 px-6 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-gold flex items-center justify-center group">
                  Order Now
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

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1200 delay-800 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-[32px] p-12 border border-white/10">
            <p className="text-gray-300 text-xl mb-8 font-light">
              Want to explore our complete menu of artisanal chai blends?
            </p>
            <button className="btn-luxury-outline border-white text-white hover:bg-white hover:text-[#0a0a0a] text-lg px-12 py-4 font-medium tracking-wide">
              View Full Menu
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default SignatureChai;
