'use client';

import { useEffect, useState, useRef } from 'react';

const VisitUs = () => {
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

  const locations = [
    {
      name: 'Amritsar Flagship',
      address: 'Golden Temple Road, Amritsar, Punjab 143001',
      phone: '+91 183 255 2400',
      hours: {
        weekday: 'Mon-Sun: 8:00 AM - 10:00 PM',
        weekend: 'Sat-Sun: 8:00 AM - 11:00 PM'
      },
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    },
    {
      name: 'Chandigarh Central',
      address: 'Sector 17, Chandigarh 160017',
      phone: '+91 172 501 1200',
      hours: {
        weekday: 'Mon-Fri: 9:00 AM - 9:00 PM',
        weekend: 'Sat-Sun: 9:00 AM - 10:00 PM'
      },
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: false
    },
    {
      name: 'Delhi Heritage',
      address: 'Connaught Place, New Delhi 110001',
      phone: '+91 11 4151 1800',
      hours: {
        weekday: 'Mon-Fri: 9:30 AM - 9:30 PM',
        weekend: 'Sat-Sun: 9:30 AM - 10:30 PM'
      },
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: false
    }
  ];

  const getDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="visit-us" ref={sectionRef} className="py-24 lg:py-40 relative overflow-hidden">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f5f1eb] to-[#ebe6dd]"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 pattern-lines opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-[#d4af37]/3 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1200 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#d4af37]/20 text-[#8b6914] text-xs font-semibold tracking-widest uppercase mb-6">
            Visit Us
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 font-serif leading-tight">
            Find Your Perfect
            <span className="text-gradient-gold block">Chai Moment</span>
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-10">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></div>
            <div className="w-12 h-[1px] bg-[#d4af37] shimmer"></div>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></div>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Step into any of our locations and experience the warmth of authentic Indian hospitality, where every cup is crafted with love
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-luxury border border-white/50 transition-all duration-700 hover:-translate-y-2 ${
                location.featured ? 'lg:col-span-3 xl:col-span-1' : ''
              } ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {location.featured && (
                <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-gold">
                  Flagship Store
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-serif group-hover:text-[#d4af37] transition-colors duration-300">
                  {location.name}
                </h3>

                {/* Address */}
                <div className="flex items-start mb-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1 pt-1.5">
                    {location.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-[#5a5a5a] text-sm flex-1 pt-1.5">
                    {location.phone}
                  </p>
                </div>

                {/* Hours */}
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#1a1a1a] text-sm pt-1.5">Hours</h4>
                  </div>
                  <p className="text-[#5a5a5a] text-sm ml-14 leading-relaxed">
                    {location.hours.weekday}
                  </p>
                  <p className="text-[#5a5a5a] text-sm ml-14 leading-relaxed">
                    {location.hours.weekend}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => getDirections(location.address)}
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0a0a] font-semibold py-4 px-6 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-gold flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1200 delay-800 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-12 border border-white/50 shadow-luxury max-w-3xl mx-auto">
            <p className="text-[#4a4a4a] text-xl mb-8 font-light">
              Can&apos;t visit us in person? Order online for delivery to your doorstep
            </p>
            <button className="btn-luxury-outline text-lg px-12 py-4 font-medium tracking-wide">
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 divider-gold opacity-30"></div>
    </section>
  );
};

export default VisitUs;
