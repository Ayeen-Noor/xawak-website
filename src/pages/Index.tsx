
import React, { useEffect } from 'react';
import SpaceBackground from '../components/SpaceBackground';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import TokenomicsSection from '../components/TokenomicsSection';
import RoadmapSection from '../components/RoadmapSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation reveal logic here if desired
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <SpaceBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold text-space-gold mb-6 animate-pulse">
            Transcend the Speed of Light
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            The next generation blockchain protocol that's taking decentralized finance to interstellar dimensions
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="glow-btn bg-gradient-to-r from-space-blue to-space-purple text-white font-orbitron font-bold px-8 py-4 rounded-full text-lg">
              Join the Odyssey
            </button>
            <button className="glow-btn bg-transparent border-2 border-space-gold text-space-gold font-orbitron font-bold px-8 py-4 rounded-full text-lg">
              Explore XAWAK
            </button>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
