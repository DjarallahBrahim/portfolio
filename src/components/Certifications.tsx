import React from 'react';
import { Award } from 'lucide-react';
import { Github, ExternalLink } from 'lucide-react';


const certifications = [
  {
    name: 'Certified Kubernetes Application Developer',
    issuer: 'linux foundation',
    date: '2024',
    url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    image: './ckad.png',
  },
  {
    name: 'Preparing for Your Associate Cloud Engineer Journey',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: './ACJ.png',
  },
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: './GCFCI.png',
  },
  {
    name: 'Deploy Kubernetes Applications on Google Cloud',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: './KAGC.png',
  },
  {
    name: 'Build Infrastructure with Terraform on Google Cloud',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: './BIWT.png',
  },
  {
    name: 'Managing Cloud Infrastructure with Terraform',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: './CIT.png',
  },
  {
    name: 'Apache Kafka for Event-Driven Spring Boot Microservices',
    issuer: 'Udemy',
    date: '2024',
    url: 'https://www.udemy.com/course/apache-kafka-for-spring-boot-microservices/',
    image: './kafka.jpg',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Badges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={certification.image}
                  alt={certification.issuer}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-end">
              
                    <a
                      href={certification.url}
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
                  {certification.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {certification.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
