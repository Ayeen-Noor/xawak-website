
import React, { useState } from 'react';

const AboutSection = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  
  const handleRocketHover = () => {
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 3000); // Reset after animation completes
  };

  return (
    <section id="about" className="min-h-screen w-full py-24 px-4 flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-space-gold mb-10 text-center">
          Transcend the Speed of Light with XAWAK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 border-l-4 border-gradient pl-6 py-3">
            <div className="space-y-2">
              <h3 className="text-2xl font-orbitron font-bold text-space-gold">Intergalactic Innovation</h3>
              <p className="text-white/90 leading-relaxed">
                XAWAK represents the next frontier in decentralized technology, pushing the boundaries of what's possible in the blockchain universe. Our protocol combines cutting-edge consensus mechanisms with quantum-resistant cryptography.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-orbitron font-bold text-space-gold">Cosmic Connectivity</h3>
              <p className="text-white/90 leading-relaxed">
                In the vast digital cosmos, XAWAK connects disparate blockchains through our innovative wormhole bridge technology. Transfer assets at light speed with minimal cost across any compatible ecosystem.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-orbitron font-bold text-space-gold">Stellar Security</h3>
              <p className="text-white/90 leading-relaxed">
                Your assets are protected by constellation-grade security protocols. Our multi-layered approach ensures that your digital wealth remains safe even against the most sophisticated cosmic threats.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <div
                className={`rocket-container ${isLaunching ? 'animate-[rocketLaunch_3s_forwards]' : 'animate-float'}`}
                onMouseEnter={handleRocketHover}
              >
                <svg width="160" height="240" viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Rocket Body */}
                  <path d="M80 10C80 10 40 50 40 140C40 180 60 220 80 220C100 220 120 180 120 140C120 50 80 10 80 10Z" fill="#D1D5DB" stroke="#1E3A8A" strokeWidth="2" />
                  
                  {/* Rocket Window */}
                  <circle cx="80" cy="120" r="15" fill="#1E3A8A" />
                  <circle cx="80" cy="120" r="10" fill="#6A0DAD" />
                  
                  {/* Fins */}
                  <path d="M40 180L10 210H40V180Z" fill="#6A0DAD" />
                  <path d="M120 180L150 210H120V180Z" fill="#6A0DAD" />
                  
                  {/* Rocket Bottom */}
                  <path d="M60 220H100L80 240L60 220Z" fill="#1E3A8A" />
                  
                  {/* Flames */}
                  <g className={isLaunching ? 'animate-[pulse_0.2s_ease-in-out_infinite]' : 'hidden'}>
                    <path d="M70 220L80 260L90 220H70Z" fill="#FFD700" />
                    <path d="M75 220L80 280L85 220H75Z" fill="#FF4500" />
                  </g>
                </svg>
                
                {/* Tooltip */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-space-purple/90 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Prepare for liftoff!
                </div>
              </div>
              
              {/* Particle effects would be here in a more advanced implementation */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
