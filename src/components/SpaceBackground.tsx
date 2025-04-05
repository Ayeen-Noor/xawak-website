
import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = window.innerWidth < 768 ? 100 : 200;
    
    // Clear any existing stars
    const existingStars = container.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());
    
    // Create new stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random sizes between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random positions
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random twinkle durations and delays
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      star.style.setProperty('--twinkle-duration', `${duration}s`);
      star.style.setProperty('--twinkle-delay', `${delay}s`);
      
      container.appendChild(star);
    }
    
    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 100;
      const moveY = (clientY - window.innerHeight / 2) / 100;
      
      container.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full nebula-bg z-[-1]" ref={containerRef}></div>
  );
};

export default SpaceBackground;
