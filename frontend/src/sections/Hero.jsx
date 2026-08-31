import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-layout">
        {/* Left Column: Primary Introduction */}
        <div className="hero-content">
          {/* Status Pill */}
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>AI & Data Science &times; Full Stack Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{PROFILE.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            B.Tech AI & Data Science Student <span className="hero-divider">|</span> Full Stack Developer
          </p>

          {/* Targeted Description */}
          <p className="hero-description">
            I’m a B.Tech AI & Data Science student who enjoys turning ideas into practical web applications, exploring AI-assisted development, and building projects end to end.
          </p>

          {/* Primary Actions */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              <span>Contact Me</span>
              <Mail size={18} />
            </button>
          </div>

          {/* Social / External Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Technical Profile Panel */}
        <div className="hero-terminal-panel">
          <div className="terminal-card surface-card">
            {/* Terminal Window Bar */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot"></span>
                <span className="control-dot"></span>
                <span className="control-dot"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} className="terminal-icon" />
                <span>sheshagiri.config.js</span>
              </div>
            </div>

            {/* Structured Technical Spec */}
            <div className="terminal-body">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = &#123;
              </div>

              <div className="code-line indent-1">
                <span className="code-key">name</span>:{' '}
                <span className="code-string">"{PROFILE.name}"</span>,
              </div>

              <div className="code-line indent-1">
                <span className="code-key">degree</span>:{' '}
                <span className="code-string">"{PROFILE.degree}"</span>,
              </div>

              <div className="code-line indent-1">
                <span className="code-key">currentRole</span>:{' '}
                <span className="code-string">"{PROFILE.currentRole}"</span>,
              </div>

              <div className="code-line indent-1">
                <span className="code-key">primaryFocus</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"Full-Stack Web Development"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"AI & Data Science Concepts"</span>
              </div>
              <div className="code-line indent-1">],</div>

              <div className="code-line indent-1">
                <span className="code-key">coreStack</span>: &#123;
              </div>
              <div className="code-line indent-2">
                <span className="code-key">frontend</span>:{' '}
                <span className="code-string">"React.js / CSS"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-key">backend</span>:{' '}
                <span className="code-string">"Node.js / Express.js"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-key">database</span>:{' '}
                <span className="code-string">"MongoDB / MySQL"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-key">languages</span>:{' '}
                <span className="code-string">"Python / JavaScript / C++ / SQL"</span>
              </div>
              <div className="code-line indent-1">&#125;</div>

              <div className="code-line">&#125;;</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--header-height) + 3.5rem);
          padding-bottom: 5.5rem;
          position: relative;
          border-bottom: 1px solid var(--border-light);
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-layout {
            grid-template-columns: 1.25fr 1fr;
            gap: 3.5rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.4rem 0.875rem;
          background-color: var(--blue-tint);
          border: 1px solid var(--blue-border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--white);
          margin-bottom: 1.75rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: var(--blue);
          border-radius: 50%;
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5.2vw, 3.875rem);
          font-weight: 800;
          color: var(--white);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 0.875rem;
        }

        .hero-name {
          color: var(--white);
          position: relative;
          display: inline-block;
        }

        .hero-name::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 4px;
          background-color: var(--blue);
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: clamp(1.0625rem, 2vw, 1.25rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .hero-divider {
          color: var(--blue);
          padding: 0 0.5rem;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 2.25rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.25rem;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          max-width: 500px;
        }

        .socials-label {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);
          padding: 0.375rem 0.625rem;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
        }

        .hero-social-link:hover {
          color: var(--white);
          background-color: var(--card-hover-bg);
          border-color: var(--border-light);
        }

        /* Right Column Terminal Spec Card */
        .hero-terminal-panel {
          width: 100%;
        }

        .terminal-card {
          padding: 0;
          overflow: hidden;
          background-color: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--blue-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.6);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background-color: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-light);
        }

        .terminal-controls {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .control-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .terminal-icon {
          color: var(--blue);
        }

        .terminal-body {
          padding: 1.5rem 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.84375rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .code-line {
          white-space: pre-wrap;
          word-break: break-word;
        }

        .indent-1 {
          padding-left: 1.25rem;
        }

        .indent-2 {
          padding-left: 2.5rem;
        }

        .code-keyword {
          color: var(--blue);
          font-weight: 600;
        }

        .code-variable {
          color: var(--white);
          font-weight: 600;
        }

        .code-key {
          color: rgba(255, 255, 255, 0.85);
        }

        .code-string {
          color: var(--white);
        }
      `}</style>
    </section>
  );
};

export default Hero;
