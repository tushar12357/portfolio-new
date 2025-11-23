import React, { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Fixed, lag-free typewriter (no NodeJS.Timeout error)
  useEffect(() => {
    const titles = [
      "MERN Stack Developer",
      "Next.js Expert",
      "Flutter Developer",
      "AI Integration Specialist",
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const type = () => {
      if (!typingRef.current) return;
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        typingRef.current.textContent = currentTitle.substring(
          0,
          charIndex - 1
        );
        charIndex--;
      } else {
        typingRef.current.textContent = currentTitle.substring(
          0,
          charIndex + 1
        );
        charIndex++;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        timeoutId = setTimeout(type, 500);
      } else {
        const speed = isDeleting ? 50 : 100;
        timeoutId = setTimeout(type, speed + Math.random() * 40);
      }
    };

    timeoutId = setTimeout(type, 800);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Original particles (exactly like you had)
  useEffect(() => {
    if (!particlesRef.current) return;
    const container = particlesRef.current;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-indigo-500/20";

      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.classList.add("animate-float");

      container.appendChild(particle);
    }
  }, []);

  const handleViewWorkClick = () => {
    setActiveSection("portfolio");
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    setActiveSection("contact");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Original particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text (100% original) */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  Tushar Chaudhary
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 h-8">
                <span ref={typingRef} className="inline-block"></span>
                <span className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-pulse"></span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Full-stack developer specializing in MERN, Next.js, Flutter & AI
                integrations. Building scalable SaaS platforms, AI-driven
                systems, and cross-platform mobile apps.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={handleViewWorkClick} className="btn-primary">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </button>
                <button onClick={handleContactClick} className="btn-secondary">
                  Hire Me
                </button>
              </div>

              <div className="flex mt-8 space-x-6">
                <a
                  href="https://github.com/tushar12357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-chaudhary-4a49621a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:tusharcdry@gmail.com?subject=Hey%20Tushar%2C%20Let%27s%20Work%20Together!&body=Hi%20Tushar..."
                  className="text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image (100% original) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-indigo-600/50 shadow-2xl">
                <img
                  src="/image.jpeg"
                  alt="Tushar Chaudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down (original) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollDown}
          className="text-gray-400 hover:text-indigo-400"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
