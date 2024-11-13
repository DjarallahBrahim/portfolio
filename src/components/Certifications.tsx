import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Certified Kubernetes Application Developer',
    issuer: 'linux foundation',
    date: '2024',
    url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    image: '/public/ckad.png',
  },
  {
    name: 'Preparing for Your Associate Cloud Engineer Journey',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: '/public/ACJ.png',
  },
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: '/public/GCFCI.png',
  },
  {
    name: 'Deploy Kubernetes Applications on Google Cloud',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: '/public/KAGC.png',
  },
  {
    name: 'Build Infrastructure with Terraform on Google Cloud',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: '/public/BIWT.png',
  },
  {
    name: 'Managing Cloud Infrastructure with Terraform',
    issuer: 'Google cloudskillsboost',
    date: '2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
    image: '/public/CIT.png',
  },
  {
    name: 'Apache Kafka for Event-Driven Spring Boot Microservices',
    issuer: 'Udemy',
    date: '2024',
    url: 'https://www.udemy.com/course/apache-kafka-for-spring-boot-microservices/',
    image: '/public/kafka.jpg',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Award className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
