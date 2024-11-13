import React from 'react';
import { Github, ExternalLink } from 'lucide-react';


const projects = [
  {
    title: 'Certified kubernetes application developer CKAD',
    description:
      "Framework Terraform pour le déploiement automatisé d'infrastructures multi-cloud avec gestion des secrets.",
    tech: ['Terraform', 'AWS', 'Python', 'Vault'],
    github: '#',
    demo: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    image: './BIWT.png',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Projets Personnels
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-end">
                    <a
                      href={project.github}
                      className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
