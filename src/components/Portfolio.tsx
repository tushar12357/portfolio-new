import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app that helps users organize tasks, set priorities, and track progress.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      technologies: ['React', 'Redux', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data for any location.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting features.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills (this website).',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A chat application with real-time messaging, user authentication, and channel management.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'fullstack'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="flex justify-center mb-10 fade-in">
        <div className="flex flex-wrap gap-2 md:gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              filter === 'frontend'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              filter === 'backend'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              filter === 'fullstack'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Full Stack
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover border border-gray-700 fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-48 overflow-hidden relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => openProjectDetails(project)}
                  className="bg-white text-indigo-600 p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-indigo-100"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full border border-indigo-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  <ExternalLink size={18} className="mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  <Github size={18} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full border border-indigo-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center text-indigo-300">
                    <Code size={18} className="mr-2" />
                    Technical Details
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Responsive design for all devices</li>
                    <li>Modern architecture with component-based structure</li>
                    <li>Optimized performance and accessibility</li>
                    <li>Clean, maintainable codebase</li>
                  </ul>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center text-indigo-300">
                    <Award size={18} className="mr-2" />
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>User authentication and authorization</li>
                    <li>Real-time data updates</li>
                    <li>Intuitive user interface</li>
                    <li>Comprehensive error handling</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={18} className="mr-2" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;