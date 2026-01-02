import React from 'react';
import { Code, Server, Database, Smartphone, Brain, Cpu, Globe, Palette } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React / Next.js', level: 92, icon: <Code /> },
    { name: 'Node.js / Express', level: 88, icon: <Server /> },
    { name: 'Flutter', level: 85, icon: <Smartphone /> },
    { name: 'TypeScript', level: 87, icon: <Code /> },
    { name: 'MongoDB / PostgreSQL', level: 82, icon: <Database /> },
    { name: 'AI Integrations', level: 90, icon: <Brain /> },
    { name: 'API Integrations', level: 93, icon: <Globe /> },
    { name: 'Tailwind CSS', level: 95, icon: <Palette /> },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover fade-in" style={{animationDelay: `${i * 0.1}s`}}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-400 mr-3">
                {skill.icon}
              </div>
              <h4 className="font-medium text-white">{skill.name}</h4>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="skill-bar bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
              ></div>
            </div>
            <p className="text-right mt-2 text-sm text-gray-400">{skill.level}%</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover text-center">
          <Cpu className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Hardware + AI</h3>
          <p className="text-gray-400 mt-2">Raspberry Pi, AI Robot Secretary</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover text-center">
          <Brain className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold">AI SDKs</h3>
          <p className="text-gray-400 mt-2">OpenAI, Gemini, Claude, Retell AI, Tavus, Ultravox,Livekit</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 card-hover text-center">
          <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold">100+ APIs</h3>
          <p className="text-gray-400 mt-2">Zoom SDK, Real-time systems, Caching</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
