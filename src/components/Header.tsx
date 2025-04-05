
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-md' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-space-gold transition-colors">About</a>
          <a href="#tokenomics" className="text-white hover:text-space-gold transition-colors">Tokenomics</a>
          <a href="#roadmap" className="text-white hover:text-space-gold transition-colors">Roadmap</a>
          
          <div className="flex items-center space-x-4">
            <button className="glow-btn bg-gradient-to-r from-space-blue to-space-purple text-white font-orbitron font-medium px-6 py-2 rounded-full">
              Join the Odyssey
            </button>
            <button className="glow-btn bg-transparent border-2 border-space-gold text-space-gold font-orbitron font-medium px-6 py-2 rounded-full">
              Explore XAWAK
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white hover:text-space-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="text-white hover:text-space-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="text-white hover:text-space-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            
            <div className="flex flex-col space-y-3 pt-2">
              <button className="glow-btn bg-gradient-to-r from-space-blue to-space-purple text-white font-orbitron font-medium px-6 py-2 rounded-full">
                Join the Odyssey
              </button>
              <button className="glow-btn bg-transparent border-2 border-space-gold text-space-gold font-orbitron font-medium px-6 py-2 rounded-full">
                Explore XAWAK
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
