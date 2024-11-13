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
    image: './ckad.png',
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
              className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
