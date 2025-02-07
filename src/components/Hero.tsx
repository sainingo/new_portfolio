import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import me from "../assets/me.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400">Lekalantula Saningo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer crafting elegant solutions to complex problems
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/sainingo" className="p-2 hover:text-cyan-400 transition-colors">
                <GitHub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/saningo/" className="p-2 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sainingo254@gmail.com" className="p-2 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src={me}
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-2xl ring-4 ring-cyan-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}