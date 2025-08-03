import React from "react";
import { projects } from "../constants";

function Projects() {
  return (
    <section className="max-container py-16">
      {/* Section Heading */}
      <h1 className="head-text text-left">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <p className="mt-4 text-slate-500 max-w-xl text-left">
        A collection of personal and collaborative projects showcasing my skills in full-stack development, UI/UX, and problem solving.
      </p>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in-down ${project.theme}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={project.iconUrl}
                alt={project.name}
                className="w-14 h-14 object-contain"
              />
              <h3 className="text-xl font-semibold text-black-500">{project.name}</h3>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              View Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
