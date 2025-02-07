import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code2 className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              I write clean, maintainable code following best practices and design patterns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Rocket className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Always exploring new technologies and approaches to solve complex problems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Strong team player with excellent communication and leadership skills.
            </p>
          </div>
        </div>
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed">
            With over 5 years of experience in software development, I specialize in building
            scalable web applications using modern technologies. My journey in tech started
            with a Computer Science degree, and I've since worked with various startups and
            enterprise companies, delivering high-quality solutions that drive business growth.
          </p>
        </div>
      </div>
    </section>
  );
}