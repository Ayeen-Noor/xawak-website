
import React, { useState } from 'react';

// Define tokenomics data
const tokenomicsData = [
  { id: 1, name: 'Liquidity Pool', percentage: 40, color: '#FFD700' },
  { id: 2, name: 'Development', percentage: 25, color: '#1E3A8A' },
  { id: 3, name: 'Community Rewards', percentage: 20, color: '#6A0DAD' },
  { id: 4, name: 'Team & Advisors', percentage: 15, color: '#FFFFFF' },
];

const TokenomicsSection = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  
  // Calculate SVG coordinates for pie chart
  const centerX = 150;
  const centerY = 150;
  const radius = 120;
  
  // Generate pie chart segments
  let cumulativeAngle = 0;
  const segments = tokenomicsData.map((item) => {
    const startAngle = cumulativeAngle;
    const angleRadians = (item.percentage / 100) * Math.PI * 2;
    cumulativeAngle += angleRadians;
    const endAngle = cumulativeAngle;
    
    // Calculate SVG arc path
    const startX = centerX + radius * Math.sin(startAngle);
    const startY = centerY - radius * Math.cos(startAngle);
    const endX = centerX + radius * Math.sin(endAngle);
    const endY = centerY - radius * Math.cos(endAngle);
    
    const largeArcFlag = angleRadians > Math.PI ? 1 : 0;
    
    // Generate the SVG path string
    const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
    
    return {
      ...item,
      path,
      startAngle,
      endAngle,
    };
  });
  
  return (
    <section id="tokenomics" className="min-h-screen w-full py-24 px-4 flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-space-gold mb-12 text-center">
          XAWAK Tokenomics
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="relative w-[300px] h-[300px]">
            <svg width="300" height="300" viewBox="0 0 300 300">
              {segments.map((segment, index) => (
                <path
                  key={segment.id}
                  d={segment.path}
                  fill={segment.color}
                  stroke="#000"
                  strokeWidth="1"
                  onMouseEnter={() => setActiveSegment(segment.id)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    transform: activeSegment === segment.id ? 'translateY(-10px)' : 'translateY(0)',
                    filter: activeSegment === segment.id ? `drop-shadow(0 0 8px ${segment.color})` : 'none',
                  }}
                />
              ))}
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md">
            {tokenomicsData.map((item) => (
              <div 
                key={item.id}
                className={`p-5 rounded-lg border-2 transition-all duration-300 ${
                  activeSegment === item.id 
                    ? 'border-space-gold bg-black/50 transform scale-105'
                    : 'border-gray-700 bg-black/30'
                }`}
                onMouseEnter={() => setActiveSegment(item.id)}
                onMouseLeave={() => setActiveSegment(null)}
              >
                <div className="flex items-center mb-3">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="font-orbitron font-bold text-lg text-white">{item.name}</h3>
                </div>
                <p className="text-3xl font-orbitron font-bold" style={{ color: item.color }}>
                  {item.percentage}%
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                  {item.id === 1 && 'Ensures trading stability and market depth'}
                  {item.id === 2 && 'Fuels ongoing platform innovations'}
                  {item.id === 3 && 'Powers staking rewards and airdrops'}
                  {item.id === 4 && 'Aligns long-term vision with growth'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
