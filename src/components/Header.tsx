import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">DevOps & Backend Engineer</h1>
          <p className="text-xl text-gray-300 mb-6">
            5 ans d'expérience en DevOps et développement Backend
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/DjarallahBrahim/"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/djarallah-brahim/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="djarallah.brahim@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
