import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { title, description, technologies, githubUrl, liveUrl, featured } = project;

  return (
    <article className={`project-card surface-card ${featured ? 'project-featured' : ''}`}>
      <div className="card-top">
        <div className="card-icon-wrap">
          <Folder className="folder-icon" size={24} />
          {featured && <span className="featured-badge">Featured</span>}
        </div>

        <div className="card-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-link"
              aria-label={`View ${title} source code on GitHub`}
              title="GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-link"
              aria-label={`View live demo of ${title}`}
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <div className="project-tech-list">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg);
          border: 1px solid var(--border-light);
          padding: 1.75rem;
          transition: border-color var(--transition-fast), transform var(--transition-fast), background-color var(--transition-fast);
        }

        .project-card:hover {
          border-color: var(--border-hover);
          background-color: var(--card-hover-bg);
          transform: translateY(-2px);
        }

        .project-card.project-featured {
          border-color: var(--blue-border);
        }

        .project-card.project-featured:hover {
          border-color: var(--blue);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .card-icon-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .folder-icon {
          color: var(--blue);
        }

        .featured-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--white);
          background-color: var(--blue-tint);
          border: 1px solid var(--blue-border);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .card-links {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }

        .action-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          background-color: transparent;
          border: 1px solid var(--border-light);
          transition: all var(--transition-fast);
        }

        .action-icon-link:hover {
          color: var(--white);
          border-color: var(--blue);
          background-color: var(--blue-tint);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .project-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
