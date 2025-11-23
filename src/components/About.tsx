import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, Award, User, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 slide-in-left">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Who I Am</h3>
          <p className="text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
            I specialize in JavaScript technologies across the whole stack (React, Node.js, Express, MongoDB).
            I love creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </p>
          <p className="text-gray-300 mb-6">
            When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new technologies.
            I believe in continuous learning and staying updated with the latest industry trends.
          </p>
          <p className="text-gray-300 mb-8">
            I'm currently open to freelance opportunities and interesting projects where I can contribute my skills and grow professionally.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center card-hover">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mb-3">
                <Code size={24} />
              </div>
              <h4 className="font-medium mb-1">10+</h4>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center card-hover">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mb-3">
                <Coffee size={24} />
              </div>
              <h4 className="font-medium mb-1">5+</h4>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400 slide-in-right">Experience & Education</h3>
          
          <div className="timeline-container">
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="flex items-start mb-2">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Senior Developer</h4>
                    <p className="text-indigo-400">Tech Solutions Inc.</p>
                    <p className="text-gray-400 text-sm">2020 - Present</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">
                  Leading development of web applications, mentoring junior developers, and implementing best practices.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item fade-in" style={{animationDelay: '0.2s'}}>
              <div className="timeline-content">
                <div className="flex items-start mb-2">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Web Developer</h4>
                    <p className="text-indigo-400">Digital Creations</p>
                    <p className="text-gray-400 text-sm">2018 - 2020</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">
                  Developed responsive websites and web applications for various clients using modern technologies.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item fade-in" style={{animationDelay: '0.4s'}}>
              <div className="timeline-content">
                <div className="flex items-start mb-2">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400">
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">BSc in Computer Science</h4>
                    <p className="text-indigo-400">University of Technology</p>
                    <p className="text-gray-400 text-sm">2014 - 2018</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">
                  Graduated with honors, specializing in software development and web technologies.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;