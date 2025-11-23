import React from 'react';
import { Heart, ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Tushar Chaudhary
        </h2>
        <p className="text-gray-400 mb-6">Building the future with AI, code, and creativity.</p>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/tushar12357" target="_blank" className="text-gray-400 hover:text-indigo-400 transition hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/tushar-chaudhary-4a49621a3/" target="_blank" className="text-gray-400 hover:text-indigo-400 transition hover:scale-110">
            <Linkedin size={28} />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          Made with <Heart className="inline text-red-500 mx-1 animate-pulse" size={16} /> by Tushar © 2025
        </p>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-indigo-600 p-4 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition z-40">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;