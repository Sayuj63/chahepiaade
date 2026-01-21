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
      { threshold: 0.2 }
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
    <section id="menu" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="chai-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#chai-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Signature Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 font-serif">
            Our Premium
            <span className="text-amber-400"> Chai Selection</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Each cup is a masterpiece, crafted with the finest ingredients and time-honored techniques passed down through generations.
          </p>
        </div>

        {/* Chai Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chaiVarieties.map((chai, index) => (
            <div
              key={chai.name}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                chai.featured ? 'md:col-span-2 lg:col-span-1' : ''
              } ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Featured Badge */}
              {chai.featured && (
                <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={chai.image}
                  alt={chai.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Spice Level Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    chai.spiceLevel === 'Mild' ? 'bg-green-500 text-white' :
                    chai.spiceLevel === 'Medium' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {chai.spiceLevel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {chai.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">
                    {chai.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {chai.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 text-lg mb-6">
            Want to explore our complete menu?
          </p>
          <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatureChai;