import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Animate elements when they come into view
      const animateElements = document.querySelectorAll(
        ".fade-in, .scale-in, .slide-in-left, .slide-in-right"
      );
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - elementHeight / 2) {
          element.classList.add("visible");
        }
      });

      // Animate skill bars
      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight - 100) {
          bar.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for elements in view
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 z-50"
        style={{
          width: `${
            (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          }%`,
        }}
      ></div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home" className="pt-16">
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="portfolio" className="py-20 bg-gray-800">
          <Portfolio />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
