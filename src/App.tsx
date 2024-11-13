import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Experience />
      <Certifications />
      <Projects />
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 - Portfolio DevOps Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;