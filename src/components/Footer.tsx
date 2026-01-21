'use client';

import { useEffect, useState, useRef } from 'react';

const Footer = () => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" ref={sectionRef} className="relative gradient-dark-luxury overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-diamond opacity-5"></div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className={`lg:col-span-2 transition-all duration-1200 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-6 font-serif">
                Chah E Piaa De
              </h3>
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent rounded-full mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md font-light">
                Where every sip tells a story. Experience the authentic taste of traditional Indian chai, crafted with love and the finest spices from the heart of Punjab.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-[#f4e5b2] font-medium italic text-base font-serif">
                  &quot;Chai is not just a drink, it&apos;s an emotion that brings people together&quot;
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {[
                {
                  name: 'Instagram',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )
                },
                {
                  name: 'Facebook',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )
                },
                {
                  name: 'YouTube',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 bg-white/5 hover:bg-[#d4af37] rounded-full flex items-center justify-center text-gray-400 hover:text-[#0a0a0a] transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/10"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
            <h4 className="text-lg font-bold text-white mb-8 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Menu', id: 'menu' },
                { name: 'Visit Us', id: 'visit-us' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-[#d4af37] transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1200 delay-400 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-12'}`}>
            <h4 className="text-lg font-bold text-white mb-8 tracking-wide">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="pt-1.5">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Golden Temple Road,<br />
                    Amritsar, Punjab 143001
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm pt-1.5">
                  +91 183 255 2400
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm pt-1.5">
                  hello@chahpiaade.com
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-l-full text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]/50 transition-colors duration-300 text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] hover:shadow-gold text-[#0a0a0a] rounded-r-full transition-all duration-500 transform hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t border-white/5 transition-all duration-1200 delay-600 ${isVisible ? 'fade-up' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
              © {currentYear} Chah E Piaa De. All rights reserved. Crafted with ❤️ in Punjab.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
