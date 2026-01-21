'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureChai from '@/components/SignatureChai';
import VisualFeature from '@/components/VisualFeature';
import VisitUs from '@/components/VisitUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Signature Chai/Menu Highlights */}
      <SignatureChai />
      
      {/* Visual Feature Section */}
      <VisualFeature />
      
      {/* Visit Us/Locations */}
      <VisitUs />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
