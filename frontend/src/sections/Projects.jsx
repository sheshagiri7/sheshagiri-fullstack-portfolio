import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Portfolio Showcase</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of full-stack web applications, machine learning experiments, and software solutions built with modern toolchains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
