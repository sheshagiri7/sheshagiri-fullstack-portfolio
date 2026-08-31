import React from 'react';
import { Code2 } from 'lucide-react';

export const SkillCategory = ({ category }) => {
  const { title, skills } = category;

  return (
    <div className="skill-card surface-card">
      <div className="skill-card-header">
        <span className="skill-category-icon">
          <Code2 size={18} />
        </span>
        <h3 className="skill-category-title">{title}</h3>
      </div>

      <div className="skill-badge-list">
        {skills.map((skill) => (
          <div key={skill} className="skill-badge">
            <span className="skill-bullet">&gt;</span>
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>

      <style>{`
        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background-color: var(--card-bg);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .skill-card:hover {
          border-color: var(--border-hover);
          background-color: var(--card-hover-bg);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 0.875rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .skill-category-icon {
          color: var(--blue);
          display: flex;
          align-items: center;
        }

        .skill-category-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
        }

        .skill-badge-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-badge {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.5rem 0.75rem;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .skill-badge:hover {
          background-color: var(--blue-tint);
          border-color: var(--blue-border);
        }

        .skill-bullet {
          font-family: var(--font-mono);
          color: var(--blue);
          font-weight: 700;
          font-size: 0.875rem;
        }

        .skill-name {
          font-size: 0.9375rem;
          color: var(--text-primary);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default SkillCategory;
