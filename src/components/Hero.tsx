import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const container = particlesRef.current;
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-indigo-500/20';
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Add animation class
        particle.classList.add('animate-float');
        
        container.appendChild(particle);
      }
    }
    
    // Typing animation
    const titles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;
    
    const typeWriter = () => {
      const titleElement = document.getElementById('typing-title');
      if (!titleElement) return;
      
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        // Deleting text
        titleElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(typeWriter, pauseTime / 3);
          return;
        }
        
        setTimeout(typeWriter, deletingSpeed);
      } else {
        // Typing text
        titleElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          setTimeout(typeWriter, pauseTime);
          return;
        }
        
        setTimeout(typeWriter, typingSpeed);
      }
    };
    
    typeWriter();
  }, []);

  const handleViewWorkClick = () => {
    setActiveSection('portfolio');
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = () => {
    setActiveSection('contact');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 h-8">
                <span id="typing-title" className="inline-block"></span>
                <span className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-pulse"></span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                I build exceptional and accessible digital experiences for the web.
                Focused on creating intuitive and performant applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleViewWorkClick}
                  className="btn-primary"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button
                  onClick={handleContactClick}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex mt-8 space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600/50 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;