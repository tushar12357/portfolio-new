import React from "react";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-1/2 slide-in-left">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
            Who I Am
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Full-stack developer experienced with MERN, Next.js, Flutter. Strong
            background in building AI-driven systems, SaaS platforms, mobile
            apps, and hardware-integrated solutions.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Contributed as a founding engineer at Ravan.ai, delivering 5+ major
            projects, integrating 100+ APIs, and improving performance via
            optimized caching and architecture.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Software Developer at Ravan.ai — build AI products
            end-to-end while leading product roadmap and team execution as
            Product Manager.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center card-hover">
              <Briefcase className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
              <h4 className="font-bold text-xl">5+</h4>
              <p className="text-gray-400 text-sm">Major Projects Delivered</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center card-hover">
              <Wrench className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
              <h4 className="font-bold text-xl">100+</h4>
              <p className="text-gray-400 text-sm">APIs Integrated</p>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400 slide-in-right">
            Journey
          </h3>

          <div className="timeline-container">
            {/* Ravan.ai */}
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Software Developer & Product Manager
                    </h4>
                    <p className="text-indigo-400">
                      Ravan.ai (Founding Engineer)
                    </p>
                    <p className="text-gray-400 text-sm">Jan 2025 – Present</p>
                    <p className="text-gray-300 mt-2 text-sm">
                      AI calling systems, AI Widgets, Robot Secretary (Raspberry
                      Pi + Flutter), white-label SaaS, PM duties
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            {/* Clinibooth */}
            <div
              className="timeline-item fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="timeline-content">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Freelance Full Stack Developer
                    </h4>
                    <p className="text-indigo-400">Clinibooth</p>
                    <p className="text-gray-400 text-sm">Dec 2024 – Jan 2025</p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            {/* Shanture */}
            <div
              className="timeline-item fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="timeline-content">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Full Stack Intern</h4>
                    <p className="text-indigo-400">Shanture</p>
                    <p className="text-gray-400 text-sm">Jul 2024 – Sep 2024</p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            {/* Dimitra */}
            <div
              className="timeline-item fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="timeline-content">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Frontend Intern</h4>
                    <p className="text-indigo-400">Dimitra</p>
                    <p className="text-gray-400 text-sm">Jan 2024 – Feb 2024</p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            {/* Education */}
            <div
              className="timeline-item fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="timeline-content">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      B.Tech Electronics & Communication
                    </h4>
                    <p className="text-indigo-400">GTBIT, Delhi</p>
                    <p className="text-gray-400 text-sm">2021 – 2025</p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 slide-in-right">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover">
              <Rocket className="w-10 h-10 text-indigo-400 mb-3" />
              <h4 className="font-semibold text-lg">ISRO Certifications</h4>
              <p className="text-gray-300 text-sm mt-1">
                Rocket Propulsion & Spacecraft Dynamics
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover">
              <Users className="w-10 h-10 text-indigo-400 mb-3" />
              <h4 className="font-semibold text-lg">Tech Fest Lead</h4>
              <p className="text-gray-300 text-sm mt-1">
                Organized college tech fest for 2 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
