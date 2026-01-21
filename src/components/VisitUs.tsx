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
      { threshold: 0.3 }
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
    <section id="visit-us" ref={sectionRef} className="py-20 lg:py-32 gradient-chai relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="location-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15,15 L15,15 L15,15 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#location-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <span className="text-amber-200 font-semibold text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 font-serif">
            Find Your Perfect
            <span className="text-amber-300"> Chai Moment</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto rounded-full"></div>
          <p className="text-amber-100 text-lg mt-6 max-w-2xl mx-auto">
            Step into any of our locations and experience the warmth of authentic Indian hospitality, where every cup is crafted with love.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`group bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                location.featured ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''
              } ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Featured Badge */}
              {location.featured && (
                <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Flagship Store
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {location.name}
                </h3>

                {/* Address */}
                <div className="flex items-start mb-4">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-600 text-sm">
                    {location.phone}
                  </p>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 text-sm">Hours</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-8 leading-relaxed">
                    {location.hours.weekday}
                  </p>
                  <p className="text-gray-600 text-sm ml-8 leading-relaxed">
                    {location.hours.weekend}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => getDirections(location.address)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-100 text-lg mb-6">
            Can't visit us? Order online for delivery
          </p>
          <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-amber-900">
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;