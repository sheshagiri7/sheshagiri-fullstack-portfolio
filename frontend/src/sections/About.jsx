import React from 'react';
import { BookOpen, Layers, Cpu, Code2, Briefcase } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Background & Focus</h2>
          <p className="section-subtitle">
            An introduction to my studies, technical interests, and hands-on learning approach.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-narrative surface-card">
            <h3 className="about-heading">Student & Developer</h3>
            <p className="about-paragraph">
              I am <strong className="text-highlight">{PROFILE.name}</strong>, a{' '}
              <strong className="text-highlight">{PROFILE.degree}</strong> student with an active interest in software
              engineering and full-stack web development. I enjoy learning how user interfaces, servers, and databases
              connect to create functional, practical applications.
            </p>
            <p className="about-paragraph">
              Alongside core web technologies, I study artificial intelligence and data-related concepts, applying them
              through hands-on projects. I believe the most effective way to grow as a developer is by writing code,
              building working projects, and continuously learning from practical implementation.
            </p>

            <div className="about-academic-meta">
              <div className="academic-badge">
                <BookOpen size={16} className="badge-icon" />
                <span>{PROFILE.degree}</span>
              </div>
              <div className="academic-badge">
                <Briefcase size={16} className="badge-icon" />
                <span>{PROFILE.currentRole}</span>
              </div>
            </div>
          </div>

          {/* Core Pillars / Focus Areas */}
          <div className="about-pillars">
            <div className="pillar-card surface-card">
              <div className="pillar-icon-box">
                <Layers size={22} />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Full-Stack Development</h4>
                <p className="pillar-desc">
                  Building responsive interfaces in React and connecting them with Express.js APIs and MongoDB.
                </p>
              </div>
            </div>

            <div className="pillar-card surface-card">
              <div className="pillar-icon-box">
                <Cpu size={22} />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">AI & Data Science</h4>
                <p className="pillar-desc">
                  Exploring Python, machine learning fundamentals, and data handling techniques through coursework and projects.
                </p>
              </div>
            </div>

            <div className="pillar-card surface-card">
              <div className="pillar-icon-box">
                <Code2 size={22} />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Hands-On Practice</h4>
                <p className="pillar-desc">
                  Learning software tools, Git version control, and problem-solving through continuous project building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.2fr 1fr;
            align-items: stretch;
          }
        }

        .about-narrative {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-heading {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.25rem;
        }

        .about-paragraph {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .text-highlight {
          color: var(--white);
          font-weight: 600;
        }

        .about-academic-meta {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .academic-badge {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.875rem;
          color: var(--white);
          background-color: var(--blue-tint);
          border: 1px solid var(--blue-border);
          padding: 0.5rem 0.875rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }

        .badge-icon {
          color: var(--blue);
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          justify-content: space-between;
        }

        .pillar-card {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.375rem;
        }

        .pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          min-width: 44px;
          background-color: var(--blue-tint);
          border: 1px solid var(--blue-border);
          color: var(--white);
          border-radius: var(--radius-sm);
        }

        .pillar-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.375rem;
        }

        .pillar-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default About;
