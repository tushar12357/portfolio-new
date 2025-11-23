import React, { useState } from "react";
import { ExternalLink, Github, Eye, X } from "lucide-react";

const projects = [
  {
    title: "AI Calling System",
    desc: "Real-time AI voice agent with white-label SaaS capabilities, dynamic theming, and instant client deployments using Retell AI + custom backend",
    tech: [
      "Next.js",
      "Retell AI",
      "WebSockets",
      "TanStack Query",
      "PostgreSQL",
      "Tailwind",
    ],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    title: "AI Widgets",
    desc: "Embeddable real-time AI voice widgets with full white-label SaaS platform (dynamic theming & instant deployment) powered by Ultravox",
    tech: [
      "Next.js",
      "Ultravox",
      "WebSockets",
      "TanStack Query",
      "PostgreSQL",
      "Tailwind",
    ],
    img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800", // new distinct image for widgets
  },
  {
    title: "AI Robot Secretary",
    desc: "Physical AI assistant with Raspberry Pi, Golang backend & Flutter app",
    tech: ["Flutter", "Golang", "Raspberry Pi", "AI SDKs"],

    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800",
  },

  {
    title: "Doctor-Patient Zoom System",
    desc: "Autonomous video consultation platform with Zoom SDK",
    tech: ["React", "Zoom SDK", "Node.js", "MongoDB"],

    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Project Highlights
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover border border-gray-700 fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="h-56 overflow-hidden relative group">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full border border-indigo-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">{selected.desc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
