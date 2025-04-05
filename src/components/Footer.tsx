
import React from 'react';
import { MessageSquare, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 bg-gradient-to-b from-space-black to-space-blue">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="text-center md:text-left max-w-sm">
            <p className="text-gray-300 mb-6">
              Transcending the boundaries of blockchain technology to bring you the future of decentralized finance.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="#" 
                className="text-white hover:text-space-gold transition-all duration-300 hover:scale-125"
                aria-label="Discord"
              >
                <MessageSquare size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-space-gold transition-all duration-300 hover:scale-125"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-space-gold transition-all duration-300 hover:scale-125"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>
            </div>
          </div>
          
          <div className="max-w-md w-full">
            <h3 className="text-white font-orbitron font-bold text-xl mb-4 text-center md:text-left">
              Join Our Cosmic Community
            </h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="flex-1 px-4 py-3 bg-black/50 backdrop-blur-sm border-2 border-space-purple rounded-l-full focus:outline-none focus:border-space-gold text-white"
              />
              <button className="glow-btn bg-space-purple text-white font-orbitron font-medium px-6 py-3 rounded-r-full">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3 text-center md:text-left">
              Stay updated with the latest XAWAK news and announcements.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} XAWAK. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="hover:text-space-gold">Terms</a>
            <a href="#" className="hover:text-space-gold">Privacy</a>
            <a href="#" className="hover:text-space-gold">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
