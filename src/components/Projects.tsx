import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import chamaflow from "../assets/chamaflow.png";
import parcel_delivery from "../assets/parcel_delivery.png";
import ampath_system from "../assets/ampath.png";
import rentme from "../assets/rentme.png"
import parcel_info from "../assets/parcel_info.png";


const projects = [
  {
    title: 'Chama Management Platform',
    description: 'A robust full-stack solution for table banking and chama management. Leveraging React for dynamic UI, Node.js for efficient server-side logic, and MySQL for reliable data storage, this platform streamlines financial operations and community management.',
    image: chamaflow,
    github: 'https://github.com/sainingo/chamaflow',
    demo: 'https://chamaflow.vercel.app/',
    tags: ['React', 'Node.js', 'MySQL', 'swr']
  },
  {
    title: 'Parcel Management System',
    description: 'A dynamic collaborative platform designed to optimize task management within logistics operations. Featuring real-time updates and built with React, NodeJS, and MySQL, this system ensures seamless team coordination and efficient parcel handling.',
    image: parcel_info,
    github: 'https://github.com/sainigo',
    demo: 'https://parcel-delivery-system.vercel.app/',
    tags: ['React', 'MySQL', 'NodeJS', 'Tailwind CSS']
  },
  {
    title: 'EMR',
    description: 'An advanced Electronic Medical Record system that revolutionizes patient data management. Developed with Angular, TypeScript, and Bootstrap, it offers a secure, intuitive, and efficient platform for healthcare providers to access and update patient records.',
    image: ampath_system,
    github: 'https://github.com/ampath',
    demo: 'https://ngx.ampath.or.ke/ng2-amrs',
    tags: ['TypeScript', 'Angular', 'Bootstrap']
  },
  {
    title: 'Rental Management System',
    description: 'An all-encompassing platform crafted to streamline property rental processes. Built with ReactJS, NodeJS, MySQL, and TailwindCSS, it simplifies property listings, tenant communications, and rental transactions, providing an efficient solution for property managers and renters alike.',
    image: rentme,
    github: 'https://github.com/sainingo',
    demo: 'https://rentme.co.ke/',
    tags: ['ReactJS', 'NodeJS', 'MySQL', 'TailwindCSS']
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-cyan-600"
                  >
                    <GitHub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-cyan-600"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
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