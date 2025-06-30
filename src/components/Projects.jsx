import React from 'react';
import { TbExternalLink } from "react-icons/tb";

// This component displays a list of projects with their titles, descriptions, and links.
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    link: "#"
  },
  {
    title: "Weather App",
    description: "A web app to check weather forecasts for any city.",
    link: "#"
  },
  {
    title: "E-Agriculture Management System",
    description: "A web app to manage agricultural operations efficiently.",
    link: "https://github.com/vivekanandagiri/E-Agriculture-Management-System"
  },
  {
    title: "Credit EDA and Prediction",
    description: "A web app to analyze credit data and predict defaulters.",
    link: "https://github.com/vivekanandagiri/EDA-Credit-card-case-study-Upgrad"
  }
];

const Projects = () => (
  <div>
    <h4 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-wide">Projects</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 px-2 sm:px-4">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="relative group bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-4 sm:p-6 border border-cyan-100 shadow transition-all duration-300 overflow-hidden hover:ring-4 hover:ring-cyan-400/40 flex flex-col"
        >
          <img
            src={`/assets/projects/project-${idx + 1}.jpg`}
            alt={project.title}
            className="w-full h-32 sm:h-40 object-cover rounded-t-lg mb-4"
          />
          <h5 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">{project.title}</h5>
          <p className="text-slate-300 mb-2 text-sm sm:text-base flex-1">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              className="text-cyan-300 text-base sm:text-lg flex items-center gap-2 mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project<TbExternalLink />
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Projects;