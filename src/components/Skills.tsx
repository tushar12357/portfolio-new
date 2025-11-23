import React, { useEffect, useRef } from 'react';
import { Code, Server, Database, Layout, Globe, Terminal, Cpu, Lightbulb, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: <Layout size={24} /> },
    { name: 'JavaScript', level: 85, category: 'frontend', icon: <Code size={24} /> },
    { name: 'React', level: 80, category: 'frontend', icon: <Code size={24} /> },
    { name: 'TypeScript', level: 75, category: 'frontend', icon: <Code size={24} /> },
    { name: 'Node.js', level: 80, category: 'backend', icon: <Server size={24} /> },
    { name: 'Express', level: 75, category: 'backend', icon: <Server size={24} /> },
    { name: 'MongoDB', level: 70, category: 'backend', icon: <Database size={24} /> },
    { name: 'SQL', level: 65, category: 'backend', icon: <Database size={24} /> },
    { name: 'Git', level: 85, category: 'tools', icon: <Terminal size={24} /> },
    { name: 'RESTful APIs', level: 80, category: 'backend', icon: <Globe size={24} /> },
    { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: <Layout size={24} /> },
    { name: 'Redux', level: 70, category: 'frontend', icon: <Code size={24} /> },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend Development', icon: <Layout size={24} /> },
    { id: 'backend', name: 'Backend Development', icon: <Server size={24} /> },
    { id: 'tools', name: 'Tools & Others', icon: <Terminal size={24} /> },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools throughout my career.
          Here's an overview of my technical skills and proficiency levels.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, categoryIndex) => (
          <div key={category.id} className="fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mr-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter((skill) => skill.category === category.id)
                .map((skill, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 card-hover">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="skill-bar rounded-full"
                        style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 card-hover">
          <div className="w-14 h-14 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mb-4 mx-auto">
            <Cpu size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center text-white">Problem Solving</h3>
          <p className="text-gray-300 text-center">
            Analytical approach to breaking down complex problems into manageable components.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 card-hover">
          <div className="w-14 h-14 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mb-4 mx-auto">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center text-white">Creativity</h3>
          <p className="text-gray-300 text-center">
            Innovative thinking to design elegant solutions and intuitive user experiences.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 card-hover">
          <div className="w-14 h-14 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mb-4 mx-auto">
            <Layers size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center text-white">Adaptability</h3>
          <p className="text-gray-300 text-center">
            Quick to learn new technologies and adapt to changing project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;