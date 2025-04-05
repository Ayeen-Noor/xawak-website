
import React, { useState } from 'react';

const roadmapData = [
  {
    id: 1,
    phase: 'Phase I',
    title: 'Cosmic Genesis',
    description: 'Launch of XAWAK token & initial community building. Establish core infrastructure.',
    color: '#FFD700',
  },
  {
    id: 2,
    phase: 'Phase II',
    title: 'Orbital Expansion',
    description: 'DEX integration & first partnerships. Begin development of bridge technology.',
    color: '#1E3A8A',
  },
  {
    id: 3,
    phase: 'Phase III',
    title: 'Galactic Deployment',
    description: 'Launch cross-chain bridge & community governance. Smart contract deployment.',
    color: '#6A0DAD',
  },
  {
    id: 4,
    phase: 'Phase IV',
    title: 'Interstellar Network',
    description: 'Full dApp ecosystem launch. Advanced staking rewards & NFT marketplace.',
    color: '#FF4500',
  },
  {
    id: 5,
    phase: 'Phase V',
    title: 'Cosmic Dominance',
    description: 'Major exchange listings & enterprise partnerships. XAWAK becomes an industry leader.',
    color: '#FFFFFF',
  },
];

const RoadmapSection = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section id="roadmap" className="min-h-screen w-full py-24 px-4 flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-space-gold mb-16 text-center">
          Cosmic Journey Roadmap
        </h2>
        
        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center relative timeline-connector">
            {roadmapData.map((item) => (
              <div 
                key={item.id} 
                className="planet-node flex flex-col items-center"
                onMouseEnter={() => setActiveNode(item.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-3 transition-all duration-300 glow-btn"
                  style={{ 
                    background: `radial-gradient(circle, ${item.color} 40%, #000000 100%)`,
                    transform: activeNode === item.id ? 'scale(1.2)' : 'scale(1)',
                    boxShadow: activeNode === item.id ? `0 0 20px ${item.color}` : 'none',
                  }}
                />
                
                <div 
                  className={`absolute bottom-full mb-8 w-64 bg-black/80 backdrop-blur-sm rounded-lg border-2 p-4 transition-all duration-300 ${
                    activeNode === item.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                  style={{ 
                    left: `calc(${(item.id - 1) * 25}% - 8rem)`,
                    borderColor: item.color,
                  }}
                >
                  <h3 className="font-orbitron font-bold text-lg mb-1" style={{ color: item.color }}>
                    {item.phase}
                  </h3>
                  <h4 className="text-white font-orbitron text-md mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                
                <span 
                  className="font-orbitron font-medium text-sm mt-2 text-center transition-all duration-300"
                  style={{ 
                    color: activeNode === item.id ? item.color : 'white'
                  }}
                >
                  {item.phase}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-12">
          {roadmapData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center"
            >
              <div 
                className="w-16 h-16 rounded-full mb-4 glow-btn"
                style={{ 
                  background: `radial-gradient(circle, ${item.color} 40%, #000000 100%)`,
                }}
              />
              
              <div 
                className="w-full bg-black/80 backdrop-blur-sm rounded-lg border-2 p-4"
                style={{ borderColor: item.color }}
              >
                <h3 className="font-orbitron font-bold text-xl mb-1" style={{ color: item.color }}>
                  {item.phase}
                </h3>
                <h4 className="text-white font-orbitron text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
